/* ==========================================================================
   ORQUESTRADOR DA EXPERIÊNCIA — LOH DIAS FOTOGRAFIA
   ==========================================================================
   Tecnologia com propósito:
   - CSS Scroll-Driven Animations com detecção @supports e alternativa contínua.
   - View Transitions API para expansão contínua da galeria para a Sala de História.
   - IntersectionObserver para ativar capítulos, entradas e pausar recursos fora de vista.
   - Controle acessível de movimento + pausa automática quando a aba fica oculta.
   ========================================================================== */

(function () {
  "use strict";

  const dados = window.DADOS_LOH_DIAS;
  if (!dados) return;

  const raizHtml = document.documentElement;
  raizHtml.classList.add("js-pronto");

  /* ------------------------------------------------------------------------
     1. CONTROLE DE MOVIMENTO E VISIBILIDADE DA ABA
     ------------------------------------------------------------------------ */
  const botaoMovimento = document.getElementById("botao-alternar-movimento");
  const rotuloMovimento = document.getElementById("rotulo-movimento");
  const midiaReduzida = window.matchMedia("(prefers-reduced-motion: reduce)");

  function aplicarEstadoMovimento(pausar) {
    raizHtml.dataset.movimento = pausar ? "pausado" : "ativo";
    if (botaoMovimento && rotuloMovimento) {
      botaoMovimento.setAttribute("aria-pressed", pausar ? "true" : "false");
      rotuloMovimento.textContent = pausar ? "Ativar movimento" : "Pausar movimento";
    }
    window.dispatchEvent(new CustomEvent("loh:movimento-alterado"));
  }

  // Respeita prefers-reduced-motion ou escolha salva na sessão
  const preferenciaSalva = sessionStorage.getItem("loh-movimento-pausado");
  if (midiaReduzida.matches || preferenciaSalva === "sim") {
    aplicarEstadoMovimento(true);
  }

  if (botaoMovimento) {
    botaoMovimento.addEventListener("click", () => {
      const vaiPausar = raizHtml.dataset.movimento !== "pausado";
      sessionStorage.setItem("loh-movimento-pausado", vaiPausar ? "sim" : "nao");
      aplicarEstadoMovimento(vaiPausar);
    });
  }

  document.addEventListener("visibilitychange", () => {
    raizHtml.dataset.abaOculta = document.hidden ? "sim" : "nao";
  });

  /* ------------------------------------------------------------------------
     2. MENU MÓVEL COMPACTO
     ------------------------------------------------------------------------ */
  const botaoMenuCelular = document.getElementById("botao-menu-celular");
  const gavetaCelular = document.getElementById("menu-gaveta-celular");

  if (botaoMenuCelular && gavetaCelular) {
    botaoMenuCelular.addEventListener("click", () => {
      const aberto = botaoMenuCelular.getAttribute("aria-expanded") === "true";
      botaoMenuCelular.setAttribute("aria-expanded", String(!aberto));
      gavetaCelular.hidden = aberto;
    });

    gavetaCelular.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        botaoMenuCelular.setAttribute("aria-expanded", "false");
        gavetaCelular.hidden = true;
      });
    });
  }

  /* ------------------------------------------------------------------------
     3. ABERTURA — TRANSFORMAÇÃO CENTRAL + ESTADO DO CABEÇALHO
     ------------------------------------------------------------------------ */
  const secaoAbertura = document.getElementById("abertura");
  const secaoSilencio = document.getElementById("silencio");
  const cabecalhoSite = document.getElementById("topo");

  // Se o navegador suportar CSS Scroll-Driven Animations, ativa no desktop como camada nativa
  const suportaScrollTimeline =
    typeof CSS !== "undefined" &&
    CSS.supports &&
    CSS.supports("animation-timeline: view()");

  if (suportaScrollTimeline && secaoAbertura) {
    secaoAbertura.classList.add("suporte-scroll-css");
  }

  let quadroRolagemPendente = false;

  function atualizarRolagem() {
    quadroRolagemPendente = false;

    if (secaoAbertura) {
      const ret = secaoAbertura.getBoundingClientRect();
      const percurso = Math.max(1, secaoAbertura.offsetHeight - window.innerHeight);
      let progresso = -ret.top / percurso;
      progresso = Math.max(0, Math.min(1, progresso));

      // Se o movimento estiver pausado, exibe a composição editorial clara imediatamente ao rolar um toque
      if (raizHtml.dataset.movimento === "pausado") {
        progresso = window.scrollY > 24 ? 1 : 0;
      }

      secaoAbertura.style.setProperty("--p", progresso.toFixed(4));

      if (cabecalhoSite) {
        let emSilencio = false;
        if (secaoSilencio) {
          const rSil = secaoSilencio.getBoundingClientRect();
          emSilencio = rSil.top <= 72 && rSil.bottom >= 72;
        }

        cabecalhoSite.classList.toggle("em-camera-escura", emSilencio);
        cabecalhoSite.classList.toggle(
          "em-fundo-claro",
          !emSilencio && (progresso > 0.36 || window.scrollY > window.innerHeight * 0.45)
        );
      }
    }
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!quadroRolagemPendente) {
        quadroRolagemPendente = true;
        requestAnimationFrame(atualizarRolagem);
      }
    },
    { passive: true }
  );

  window.addEventListener("resize", atualizarRolagem, { passive: true });
  atualizarRolagem();

  /* ------------------------------------------------------------------------
     4. JORNADA — SINCRONIA DO PALCO STICKY NO DESKTOP
     ------------------------------------------------------------------------ */
  const artigosCapitulos = Array.from(document.querySelectorAll(".capitulo-jornada"));
  const laminasPalco = Array.from(document.querySelectorAll(".lamina-palco"));
  const laminasDetalhe = Array.from(document.querySelectorAll(".lamina-detalhe"));
  const pontosCapitulo = Array.from(document.querySelectorAll(".ponto-capitulo"));
  const legendaDetalhe = document.getElementById("legenda-detalhe-flutuante");
  let capituloAtual = 0;

  function ativarCapituloJornada(indice) {
    if (indice === capituloAtual || indice < 0 || indice >= laminasPalco.length) return;
    const anterior = capituloAtual;
    capituloAtual = indice;

    artigosCapitulos.forEach((art, i) => art.classList.toggle("ativo", i === indice));
    pontosCapitulo.forEach((pt, i) => pt.classList.toggle("ativo", i === indice));

    laminasPalco.forEach((lam, i) => {
      lam.classList.remove("ativa", "anterior");
      if (i === indice) lam.classList.add("ativa");
      else if (i === anterior) lam.classList.add("anterior");
    });

    laminasDetalhe.forEach((det, i) => {
      det.classList.toggle("ativa", i === indice);
    });

    if (legendaDetalhe && dados.jornada.capitulos[indice]) {
      legendaDetalhe.textContent = dados.jornada.capitulos[indice].legendaDetalhe;
    }
  }

  if (artigosCapitulos.length > 0 && "IntersectionObserver" in window) {
    const obsJornada = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            const idx = Number(entrada.target.dataset.capituloIndice);
            if (!Number.isNaN(idx)) ativarCapituloJornada(idx);
          }
        });
      },
      {
        rootMargin: "-32% 0px -38% 0px",
        threshold: 0.05
      }
    );

    artigosCapitulos.forEach((art) => obsJornada.observe(art));
  }

  /* ------------------------------------------------------------------------
     5. UTILITÁRIO DE IMAGEM RESPONSIVA (<picture> AVIF + WebP + dimensões)
     ------------------------------------------------------------------------ */
  function criarPictureHtml(fotoId, sizes, classeImg = "") {
    const f = dados.acervoFotos[fotoId];
    if (!f) return "";
    const ehCelular = window.matchMedia("(max-width: 959px)").matches;
    const foco = ehCelular ? f.focoCelular : f.focoDesktop;
    return `
      <picture>
        <source type="image/avif" srcset="${f.avif}" sizes="${sizes}">
        <source type="image/webp" srcset="${f.webp}" sizes="${sizes}">
        <img
          class="${classeImg}"
          src="${f.padrao}"
          alt="${f.alt.replace(/"/g, "&quot;")}"
          width="${f.largura}"
          height="${f.altura}"
          loading="lazy"
          decoding="async"
          style="object-position: ${foco}"
        >
      </picture>
    `;
  }

  /* ------------------------------------------------------------------------
     6. PORTFÓLIO EDITORIAL ASSIMÉTRICO + VIEW TRANSITIONS API
     ------------------------------------------------------------------------ */
  const gradePortfolio = document.getElementById("galeria-editorial");
  const botoesFiltro = Array.from(document.querySelectorAll(".botao-filtro"));
  let filtroAtivo = "todos";

  function renderizarPortfolio(filtro) {
    if (!gradePortfolio) return;
    filtroAtivo = filtro;

    const lista =
      filtro === "todos"
        ? dados.portfolio.obras
        : dados.portfolio.obras.filter((o) => o.categoria === filtro);

    gradePortfolio.classList.toggle("modo-filtrado", filtro !== "todos");

    gradePortfolio.innerHTML = lista
      .map((obra) => {
        const qtd = obra.fotosSerie.length;
        const seloSerie = qtd > 1 ? `${qtd} registros da sessão` : "Registro singular";
        const sizes =
          obra.layoutClasse === "item-destaque-largo" || obra.layoutClasse === "item-horizontal-amplo"
            ? "(max-width: 959px) 92vw, 56vw"
            : "(max-width: 959px) 86vw, 38vw";

        return `
          <article class="cartao-obra ${obra.layoutClasse}" data-obra-id="${obra.id}">
            <button
              type="button"
              class="gatilho-obra"
              data-abrir-obra="${obra.id}"
              aria-label="Abrir história ${obra.numero}: ${obra.titulo}"
            >
              <div class="obra-cabecalho-meta">
                <span class="obra-numero">Nº ${obra.numero}</span>
                <span>${obra.categoriaRotulo}</span>
              </div>
              <div class="obra-moldura" style="aspect-ratio: ${obra.proporcao}">
                ${criarPictureHtml(obra.fotoCapa, sizes, "imagem-capa-obra")}
                <span class="obra-selo-contagem">${seloSerie}</span>
              </div>
              <div class="obra-rodape">
                <h3 class="obra-titulo">${obra.titulo}</h3>
                <span class="obra-acao-abrir">Expandir +</span>
              </div>
            </button>
          </article>
        `;
      })
      .join("");
  }

  renderizarPortfolio("todos");

  botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", () => {
      const novoFiltro = botao.dataset.filtro || "todos";
      if (novoFiltro === filtroAtivo) return;

      botoesFiltro.forEach((b) => {
        const sel = b === botao;
        b.classList.toggle("ativo", sel);
        b.setAttribute("aria-selected", String(sel));
      });

      const atualizarDom = () => renderizarPortfolio(novoFiltro);
      if (
        document.startViewTransition &&
        raizHtml.dataset.movimento !== "pausado"
      ) {
        document.startViewTransition(atualizarDom);
      } else {
        atualizarDom();
      }
    });
  });

  /* ------------------------------------------------------------------------
     7. SALA DE LEITURA DE HISTÓRIA (Modal acessível, View Transitions, Teclado, Toque)
     ------------------------------------------------------------------------ */
  const modal = document.getElementById("modal-historia");
  const modalNumero = document.getElementById("modal-numero");
  const modalCategoria = document.getElementById("modal-categoria");
  const modalTitulo = document.getElementById("modal-titulo-historia");
  const modalResumo = document.getElementById("modal-resumo-historia");
  const modalNota = document.getElementById("modal-nota-tecnica");
  const modalPicture = document.getElementById("modal-picture-principal");
  const modalLegenda = document.getElementById("modal-legenda-foto");
  const modalMiniaturas = document.getElementById("modal-tira-miniaturas");
  const modalSetaAnt = document.getElementById("modal-seta-ant");
  const modalSetaProx = document.getElementById("modal-seta-prox");
  const botaoFecharModal = document.getElementById("botao-fechar-modal");
  const botaoVoltarGaleria = document.getElementById("botao-voltar-galeria");
  const botaoModalConversa = document.getElementById("botao-modal-conversa");
  const modalPalcoFoto = document.getElementById("modal-palco-foto");

  let obraAberta = null;
  let indiceFotoSerie = 0;
  let botaoOrigemFoco = null;
  let scrollAntesModal = 0;

  function atualizarFotoNoModal(indice) {
    if (!obraAberta) return;
    const total = obraAberta.fotosSerie.length;
    indiceFotoSerie = (indice + total) % total;

    const itemSerie = obraAberta.fotosSerie[indiceFotoSerie];
    const f = dados.acervoFotos[itemSerie.id];
    if (!f || !modalPicture) return;

    modalPicture.innerHTML = `
      <source type="image/avif" srcset="${f.avif}" sizes="(max-width: 959px) 94vw, 62vw">
      <source type="image/webp" srcset="${f.webp}" sizes="(max-width: 959px) 94vw, 62vw">
      <img
        id="modal-imagem-principal"
        class="transicao-foto-ativa"
        src="${f.padrao}"
        alt="${f.alt.replace(/"/g, "&quot;")}"
        width="${f.largura}"
        height="${f.altura}"
        decoding="async"
      >
    `;

    if (modalLegenda) {
      modalLegenda.textContent = itemSerie.legenda;
    }

    if (modalSetaAnt && modalSetaProx) {
      const esconderSetas = total <= 1;
      modalSetaAnt.hidden = esconderSetas;
      modalSetaProx.hidden = esconderSetas;
    }

    if (modalMiniaturas) {
      modalMiniaturas.querySelectorAll(".miniatura-botao").forEach((btn, i) => {
        btn.classList.toggle("ativa", i === indiceFotoSerie);
      });
    }
  }

  function preencherDadosModal(obra) {
    obraAberta = obra;
    indiceFotoSerie = 0;

    if (modalNumero) modalNumero.textContent = `Nº ${obra.numero}`;
    if (modalCategoria) modalCategoria.textContent = obra.categoriaRotulo;
    if (modalTitulo) modalTitulo.textContent = obra.titulo;
    if (modalResumo) modalResumo.textContent = obra.resumo;
    if (modalNota) modalNota.textContent = obra.notaTecnica;

    if (modalMiniaturas) {
      if (obra.fotosSerie.length > 1) {
        modalMiniaturas.innerHTML = obra.fotosSerie
          .map((item, idx) => {
            const f = dados.acervoFotos[item.id];
            const miniaturaSrc = f ? f.avif.split(",")[0].trim().split(" ")[0] : "";
            return `
              <button
                type="button"
                class="miniatura-botao ${idx === 0 ? "ativa" : ""}"
                data-miniatura-idx="${idx}"
                aria-label="Ver fotografia ${idx + 1} desta sessão"
              >
                <img src="${miniaturaSrc}" alt="" width="120" height="120" loading="lazy" decoding="async">
              </button>
            `;
          })
          .join("");
      } else {
        modalMiniaturas.innerHTML = "";
      }
    }

    atualizarFotoNoModal(0);
  }

  function abrirObraNoModal(obraId, botaoGatilho) {
    const obra = dados.portfolio.obras.find((o) => o.id === obraId);
    if (!obra || !modal) return;

    botaoOrigemFoco = botaoGatilho;
    scrollAntesModal = window.scrollY;
    const imgMiniatura = botaoGatilho?.querySelector(".imagem-capa-obra");

    const executarAbertura = () => {
      if (imgMiniatura) imgMiniatura.classList.remove("transicao-foto-ativa");
      preencherDadosModal(obra);
      if (!modal.open) modal.showModal();
      document.body.style.overflow = "hidden";
      botaoFecharModal?.focus({ preventScroll: true });
    };

    if (
      document.startViewTransition &&
      raizHtml.dataset.movimento !== "pausado" &&
      imgMiniatura
    ) {
      imgMiniatura.classList.add("transicao-foto-ativa");
      document.startViewTransition(executarAbertura);
    } else {
      executarAbertura();
    }
  }

  function fecharModalHistoria(irParaConversa = false) {
    if (!modal || !modal.open) return;

    const imgModal = modal.querySelector("#modal-imagem-principal");
    const imgMiniatura = botaoOrigemFoco?.querySelector(".imagem-capa-obra");
    const categoriaObra = obraAberta?.categoria;

    const executarFechamento = () => {
      if (imgModal) imgModal.classList.remove("transicao-foto-ativa");
      modal.close();
      document.body.style.overflow = "";

      if (irParaConversa && categoriaObra) {
        selecionarCapituloConversa(categoriaObra);
        document.getElementById("conversa")?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: scrollAntesModal, behavior: "instant" });
        if (imgMiniatura) imgMiniatura.classList.add("transicao-foto-ativa");
        botaoOrigemFoco?.focus({ preventScroll: true });
      }
    };

    if (
      !irParaConversa &&
      document.startViewTransition &&
      raizHtml.dataset.movimento !== "pausado" &&
      imgMiniatura &&
      indiceFotoSerie === 0
    ) {
      const transicao = document.startViewTransition(executarFechamento);
      transicao.finished.finally(() => {
        imgMiniatura.classList.remove("transicao-foto-ativa");
      });
    } else {
      executarFechamento();
      imgMiniatura?.classList.remove("transicao-foto-ativa");
    }
  }

  if (gradePortfolio) {
    gradePortfolio.addEventListener("click", (ev) => {
      const gatilho = ev.target.closest("[data-abrir-obra]");
      if (!gatilho) return;
      abrirObraNoModal(gatilho.dataset.abrirObra, gatilho);
    });
  }

  if (modalMiniaturas) {
    modalMiniaturas.addEventListener("click", (ev) => {
      const btn = ev.target.closest("[data-miniatura-idx]");
      if (!btn) return;
      atualizarFotoNoModal(Number(btn.dataset.miniaturaIdx));
    });
  }

  modalSetaAnt?.addEventListener("click", () => atualizarFotoNoModal(indiceFotoSerie - 1));
  modalSetaProx?.addEventListener("click", () => atualizarFotoNoModal(indiceFotoSerie + 1));
  botaoFecharModal?.addEventListener("click", () => fecharModalHistoria(false));
  botaoVoltarGaleria?.addEventListener("click", () => fecharModalHistoria(false));

  botaoModalConversa?.addEventListener("click", (ev) => {
    ev.preventDefault();
    fecharModalHistoria(true);
  });

  // Fechar clicando fora do conteúdo central ou via tecla Esc / setas
  modal?.addEventListener("cancel", (ev) => {
    ev.preventDefault();
    fecharModalHistoria(false);
  });

  modal?.addEventListener("click", (ev) => {
    if (ev.target === modal) fecharModalHistoria(false);
  });

  window.addEventListener("keydown", (ev) => {
    if (!modal?.open) return;
    if (ev.key === "ArrowLeft") {
      ev.preventDefault();
      atualizarFotoNoModal(indiceFotoSerie - 1);
    } else if (ev.key === "ArrowRight") {
      ev.preventDefault();
      atualizarFotoNoModal(indiceFotoSerie + 1);
    }
  });

  // Suporte a gesto de deslizar lateral (toque) na Sala de Leitura
  let toqueInicioX = 0;
  let toqueInicioY = 0;

  modalPalcoFoto?.addEventListener(
    "touchstart",
    (ev) => {
      toqueInicioX = ev.changedTouches[0].clientX;
      toqueInicioY = ev.changedTouches[0].clientY;
    },
    { passive: true }
  );

  modalPalcoFoto?.addEventListener(
    "touchend",
    (ev) => {
      const dx = ev.changedTouches[0].clientX - toqueInicioX;
      const dy = ev.changedTouches[0].clientY - toqueInicioY;
      if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) atualizarFotoNoModal(indiceFotoSerie + 1);
        else atualizarFotoNoModal(indiceFotoSerie - 1);
      }
    },
    { passive: true }
  );

  /* ------------------------------------------------------------------------
     8. CONVERSA — SELETOR DE CAPÍTULO E WHATSAPP VERIFICADO
     ------------------------------------------------------------------------ */
  const cartoesEscolha = Array.from(document.querySelectorAll(".cartao-escolha"));
  const bilheteImagem = document.getElementById("bilhete-imagem");
  const bilheteTitulo = document.getElementById("bilhete-titulo");
  const bilheteOrientacao = document.getElementById("bilhete-orientacao");
  const rotuloDetalhe = document.getElementById("rotulo-detalhe-conversa");
  const campoDetalhe = document.getElementById("detalhe-conversa");
  const previaTexto = document.getElementById("previa-texto-whatsapp");
  const botaoWhatsapp = document.getElementById("botao-enviar-whatsapp");

  let opcaoConversaAtual = dados.conversa.opcoes[0];

  function atualizarLinkWhatsapp() {
    if (!opcaoConversaAtual) return;
    const complemento = campoDetalhe ? campoDetalhe.value.trim() : "";
    const msgFinal = complemento
      ? `${opcaoConversaAtual.mensagemBase} (${complemento})`
      : opcaoConversaAtual.mensagemBase;

    if (previaTexto) {
      previaTexto.textContent = `“${msgFinal}”`;
    }
    if (botaoWhatsapp) {
      const url = `https://wa.me/${dados.marca.whatsappNumero}?text=${encodeURIComponent(msgFinal)}`;
      botaoWhatsapp.setAttribute("href", url);
    }
  }

  function selecionarCapituloConversa(opcaoId) {
    const encontrada = dados.conversa.opcoes.find((o) => o.id === opcaoId);
    if (!encontrada) return;
    opcaoConversaAtual = encontrada;

    cartoesEscolha.forEach((c) => {
      const ativo = c.dataset.opcao === opcaoId;
      c.classList.toggle("ativo", ativo);
      c.setAttribute("aria-checked", String(ativo));
    });

    if (bilheteTitulo) bilheteTitulo.textContent = `Capítulo: ${encontrada.titulo}`;
    if (bilheteOrientacao) bilheteOrientacao.textContent = encontrada.orientacaoLoh;
    if (rotuloDetalhe) {
      rotuloDetalhe.innerHTML = `${encontrada.perguntaOpcional} <span>(opcional)</span>`;
    }
    if (campoDetalhe) {
      campoDetalhe.placeholder = encontrada.placeholderOpcional;
    }

    const f = dados.acervoFotos[encontrada.fotoId];
    if (f && bilheteImagem) {
      bilheteImagem.src = f.webp.split(",")[0].trim().split(" ")[0];
      bilheteImagem.alt = `Capítulo selecionado: ${encontrada.titulo}`;
    }

    atualizarLinkWhatsapp();
  }

  cartoesEscolha.forEach((cartao) => {
    cartao.addEventListener("click", () => {
      selecionarCapituloConversa(cartao.dataset.opcao);
    });
  });

  campoDetalhe?.addEventListener("input", atualizarLinkWhatsapp);

  // Links rápidos dos capítulos da Jornada selecionam automaticamente a opção correspondente
  document.querySelectorAll("[data-escolher-capitulo]").forEach((link) => {
    link.addEventListener("click", () => {
      selecionarCapituloConversa(link.dataset.escolherCapitulo);
    });
  });

  /* ------------------------------------------------------------------------
     9. ENTRADAS SUAVES E CARREGAMENTO TARDIO DO EFEITO WEBGL SECUNDÁRIO
     ------------------------------------------------------------------------ */
  const elementosRevelar = document.querySelectorAll(".revelar-entrada");
  if ("IntersectionObserver" in window && elementosRevelar.length > 0) {
    const obsEntrada = new IntersectionObserver(
      (entradas, obs) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visivel");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    elementosRevelar.forEach((el) => obsEntrada.observe(el));
  } else {
    elementosRevelar.forEach((el) => el.classList.add("visivel"));
  }

  // Carrega o script secundário de luz de janela somente após o conteúdo principal estar ocioso
  function agendarEfeitoSecundario() {
    if (
      midiaReduzida.matches ||
      raizHtml.dataset.movimento === "pausado"
    ) {
      return;
    }
    const script = document.createElement("script");
    script.src = "js/luz-janela.js";
    script.async = true;
    script.onload = () => {
      if (typeof window.iniciarLuzJanelaAbertura === "function") {
        window.iniciarLuzJanelaAbertura();
      }
    };
    document.body.appendChild(script);
  }

  if (document.readyState === "complete") {
    setTimeout(agendarEfeitoSecundario, 350);
  } else {
    window.addEventListener("load", () => {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(agendarEfeitoSecundario, { timeout: 1500 });
      } else {
        setTimeout(agendarEfeitoSecundario, 450);
      }
    });
  }
})();
