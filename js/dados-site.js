/* ==========================================================================
   CONFIGURAÇÃO CENTRAL DO PROTÓTIPO — LOH DIAS FOTOGRAFIA
   ==========================================================================
   COMO EDITAR:
   1. Todas as fotografias estão catalogadas em ACERVO_FOTOS abaixo.
      Para trocar uma imagem, basta colocar os arquivos AVIF/WebP em "midia/fotos/"
      (ou rodar "node scripts/otimizar-fotos.mjs") e ajustar "focoDesktop" / "focoCelular".
   2. O foco usa porcentagem "horizontal% vertical%":
      - "50% 50%" centraliza;
      - "35% 45%" prioriza o lado esquerdo e o terço superior.
   3. Nenhuma foto mistura famílias diferentes como se fossem uma mesma família.
      Séries com mais de uma imagem reúnem apenas registros da mesma sessão real.
   ========================================================================== */

window.DADOS_LOH_DIAS = {
  marca: {
    nome: "Loh Dias Fotografia",
    cidade: "Barreiras, Bahia",
    desde: "2017",
    conceito: "O tempo passa. O amor fica.",
    whatsappNumero: "5577988690216",
    whatsappFormatado: "(77) 98869-0216",
    instagramUrl: "https://www.instagram.com/lohdiasfotografia/",
    instagramArroba: "@lohdiasfotografia",
    siteOficial: "https://lohdiasfotografia.com.br/",
    logos: {
      principalArgila: "midia/marca/lohdias-principal-argila.png",
      principalBranco: "midia/marca/lohdias-principal-branco.png",
      assinaturaArgila: "midia/marca/lohdias-assinatura-argila.png",
      monogramaArgila: "midia/marca/lohdias-monograma-argila.png",
      monogramaOliva: "midia/marca/lohdias-monograma-oliva.png"
    }
  },

  /* Catálogo técnico de fotografias reais otimizadas (AVIF + WebP + dimensões reais) */
  acervoFotos: {
    "abertura-newborn": {
      alt: "Recém-nascido dormindo de lado sobre tricô areia abraçando pequeno urso creme no estúdio Loh Dias",
      largura: 1800,
      altura: 1200,
      focoDesktop: "48% 54%",
      focoCelular: "46% 56%",
      avif: "midia/fotos/abertura-newborn-720w.avif 720w, midia/fotos/abertura-newborn-1200w.avif 1200w, midia/fotos/abertura-newborn-1800w.avif 1800w",
      webp: "midia/fotos/abertura-newborn-720w.webp 720w, midia/fotos/abertura-newborn-1200w.webp 1200w, midia/fotos/abertura-newborn-1800w.webp 1800w",
      padrao: "midia/fotos/abertura-newborn-1200w.webp"
    },
    "gestante-luz-arvores": {
      alt: "Casal à espera do bebê abraçado sob contraluz dourada das árvores ao entardecer",
      largura: 1200,
      altura: 800,
      focoDesktop: "44% 52%",
      focoCelular: "42% 55%",
      avif: "midia/fotos/gestante-luz-arvores-640w.avif 640w, midia/fotos/gestante-luz-arvores-1200w.avif 1200w",
      webp: "midia/fotos/gestante-luz-arvores-640w.webp 640w, midia/fotos/gestante-luz-arvores-1200w.webp 1200w",
      padrao: "midia/fotos/gestante-luz-arvores-1200w.webp"
    },
    "gestante-detalhe-maos": {
      alt: "Plano fechado das mãos do pai pousadas com delicadeza sobre o ventre da mãe",
      largura: 1120,
      altura: 1054,
      focoDesktop: "52% 52%",
      focoCelular: "52% 52%",
      avif: "midia/fotos/gestante-detalhe-maos-640w.avif 640w, midia/fotos/gestante-detalhe-maos-1120w.avif 1120w",
      webp: "midia/fotos/gestante-detalhe-maos-640w.webp 640w, midia/fotos/gestante-detalhe-maos-1120w.webp 1120w",
      padrao: "midia/fotos/gestante-detalhe-maos-1120w.webp"
    },
    "gestante-perfil-trico": {
      alt: "Gestante em perfil sereno no estúdio com blusa de tricô clara e luz difusa",
      largura: 1120,
      altura: 1607,
      focoDesktop: "50% 42%",
      focoCelular: "50% 40%",
      avif: "midia/fotos/gestante-perfil-trico-640w.avif 640w, midia/fotos/gestante-perfil-trico-1120w.avif 1120w",
      webp: "midia/fotos/gestante-perfil-trico-640w.webp 640w, midia/fotos/gestante-perfil-trico-1120w.webp 1120w",
      padrao: "midia/fotos/gestante-perfil-trico-1120w.webp"
    },
    "gestante-luz-rio": {
      alt: "Gestante sorrindo suavemente sob luz dourada natural à beira d'água",
      largura: 1200,
      altura: 1800,
      focoDesktop: "50% 38%",
      focoCelular: "50% 36%",
      avif: "midia/fotos/gestante-luz-rio-640w.avif 640w, midia/fotos/gestante-luz-rio-1200w.avif 1200w",
      webp: "midia/fotos/gestante-luz-rio-640w.webp 640w, midia/fotos/gestante-luz-rio-1200w.webp 1200w",
      padrao: "midia/fotos/gestante-luz-rio-1200w.webp"
    },
    "gestante-estudio-1": {
      alt: "Retrato editorial de gestante sorrindo sentada em estúdio claro minimalista",
      largura: 1120,
      altura: 1643,
      focoDesktop: "50% 44%",
      focoCelular: "50% 42%",
      avif: "midia/fotos/gestante-estudio-1-640w.avif 640w, midia/fotos/gestante-estudio-1-1120w.avif 1120w",
      webp: "midia/fotos/gestante-estudio-1-640w.webp 640w, midia/fotos/gestante-estudio-1-1120w.webp 1120w",
      padrao: "midia/fotos/gestante-estudio-1-1120w.webp"
    },
    "gestante-estudio-2": {
      alt: "Gestante apoiando a mão no ventre com expressão acolhedora em fundo claro",
      largura: 1120,
      altura: 1625,
      focoDesktop: "48% 44%",
      focoCelular: "48% 42%",
      avif: "midia/fotos/gestante-estudio-2-640w.avif 640w, midia/fotos/gestante-estudio-2-1120w.avif 1120w",
      webp: "midia/fotos/gestante-estudio-2-640w.webp 640w, midia/fotos/gestante-estudio-2-1120w.webp 1120w",
      padrao: "midia/fotos/gestante-estudio-2-1120w.webp"
    },
    "gestante-estudio-leve": {
      alt: "Gestante vestida em tons de areia e marfim segurando o ventre na luz suave de janela",
      largura: 1120,
      altura: 1606,
      focoDesktop: "50% 35%",
      focoCelular: "50% 35%",
      avif: "midia/fotos/gestante-estudio-leve-640w.avif 640w, midia/fotos/gestante-estudio-leve-1120w.avif 1120w",
      webp: "midia/fotos/gestante-estudio-leve-640w.webp 640w, midia/fotos/gestante-estudio-leve-1120w.webp 1120w",
      padrao: "midia/fotos/gestante-estudio-leve-1120w.webp"
    },
    "parto-pele-a-pele": {
      alt: "Primeiro contato pele a pele entre mãe de olhos fechados e recém-nascido segundos após o nascimento",
      largura: 1280,
      altura: 854,
      focoDesktop: "48% 50%",
      focoCelular: "46% 50%",
      avif: "midia/fotos/parto-pele-a-pele-640w.avif 640w, midia/fotos/parto-pele-a-pele-1280w.avif 1280w",
      webp: "midia/fotos/parto-pele-a-pele-640w.webp 640w, midia/fotos/parto-pele-a-pele-1280w.webp 1280w",
      padrao: "midia/fotos/parto-pele-a-pele-1280w.webp"
    },
    "parto-encontro-2": {
      alt: "Rosto da mãe sereno encostado ao rosto do bebê recém-nascido na sala de parto",
      largura: 1200,
      altura: 800,
      focoDesktop: "50% 50%",
      focoCelular: "50% 50%",
      avif: "midia/fotos/parto-encontro-2-640w.avif 640w, midia/fotos/parto-encontro-2-1200w.avif 1200w",
      webp: "midia/fotos/parto-encontro-2-640w.webp 640w, midia/fotos/parto-encontro-2-1200w.webp 1200w",
      padrao: "midia/fotos/parto-encontro-2-1200w.webp"
    },
    "parto-carimbo-pe": {
      alt: "Registro em preto e branco do pezinho do recém-nascido sendo carimbado no antebraço do pai",
      largura: 1200,
      altura: 800,
      focoDesktop: "44% 52%",
      focoCelular: "44% 52%",
      avif: "midia/fotos/parto-carimbo-pe-640w.avif 640w, midia/fotos/parto-carimbo-pe-1200w.avif 1200w",
      webp: "midia/fotos/parto-carimbo-pe-640w.webp 640w, midia/fotos/parto-carimbo-pe-1200w.webp 1200w",
      padrao: "midia/fotos/parto-carimbo-pe-1200w.webp"
    },
    "parto-silencio-pb": {
      alt: "Fotografia em preto e branco do primeiro instante de vida do recém-nascido com a mão aberta contra a luz",
      largura: 1600,
      altura: 1098,
      focoDesktop: "46% 48%",
      focoCelular: "44% 48%",
      avif: "midia/fotos/parto-silencio-pb-720w.avif 720w, midia/fotos/parto-silencio-pb-1280w.avif 1280w, midia/fotos/parto-silencio-pb-1600w.avif 1600w",
      webp: "midia/fotos/parto-silencio-pb-720w.webp 720w, midia/fotos/parto-silencio-pb-1280w.webp 1280w, midia/fotos/parto-silencio-pb-1600w.webp 1600w",
      padrao: "midia/fotos/parto-silencio-pb-1280w.webp"
    },
    "parto-familia-sala": {
      alt: "Pai e mãe sorrindo emocionados com o recém-nascido acolhido entre os dois logo após o nascimento",
      largura: 1120,
      altura: 1680,
      focoDesktop: "50% 50%",
      focoCelular: "50% 50%",
      avif: "midia/fotos/parto-familia-sala-640w.avif 640w, midia/fotos/parto-familia-sala-1120w.avif 1120w",
      webp: "midia/fotos/parto-familia-sala-640w.webp 640w, midia/fotos/parto-familia-sala-1120w.webp 1120w",
      padrao: "midia/fotos/parto-familia-sala-1120w.webp"
    },
    "newborn-balanco": {
      alt: "Recém-nascido dormindo tranquilo em pequeno balanço de madeira sobre textura de tricô areia",
      largura: 1280,
      altura: 853,
      focoDesktop: "50% 50%",
      focoCelular: "50% 50%",
      avif: "midia/fotos/newborn-balanco-640w.avif 640w, midia/fotos/newborn-balanco-1280w.avif 1280w",
      webp: "midia/fotos/newborn-balanco-640w.webp 640w, midia/fotos/newborn-balanco-1280w.webp 1280w",
      padrao: "midia/fotos/newborn-balanco-1280w.webp"
    },
    "newborn-perfil-detalhe": {
      alt: "Detalhe próximo do perfil, cílios e mãozinha do recém-nascido adormecido",
      largura: 1120,
      altura: 747,
      focoDesktop: "48% 48%",
      focoCelular: "48% 48%",
      avif: "midia/fotos/newborn-perfil-detalhe-640w.avif 640w, midia/fotos/newborn-perfil-detalhe-1120w.avif 1120w",
      webp: "midia/fotos/newborn-perfil-detalhe-640w.webp 640w, midia/fotos/newborn-perfil-detalhe-1120w.webp 1120w",
      padrao: "midia/fotos/newborn-perfil-detalhe-1120w.webp"
    },
    "newborn-pezinhos": {
      alt: "Detalhe delicado dos dois pezinhos de um recém-nascido sobre manta clara",
      largura: 1120,
      altura: 747,
      focoDesktop: "50% 55%",
      focoCelular: "50% 55%",
      avif: "midia/fotos/newborn-pezinhos-640w.avif 640w, midia/fotos/newborn-pezinhos-1120w.avif 1120w",
      webp: "midia/fotos/newborn-pezinhos-640w.webp 640w, midia/fotos/newborn-pezinhos-1120w.webp 1120w",
      padrao: "midia/fotos/newborn-pezinhos-1120w.webp"
    },
    "newborn-gemeos-pais": {
      alt: "Mãe e pai encostando as testas em silêncio enquanto seguram seus bebês gêmeos recém-nascidos",
      largura: 1280,
      altura: 853,
      focoDesktop: "50% 45%",
      focoCelular: "50% 45%",
      avif: "midia/fotos/newborn-gemeos-pais-640w.avif 640w, midia/fotos/newborn-gemeos-pais-1280w.avif 1280w",
      webp: "midia/fotos/newborn-gemeos-pais-640w.webp 640w, midia/fotos/newborn-gemeos-pais-1280w.webp 1280w",
      padrao: "midia/fotos/newborn-gemeos-pais-1280w.webp"
    },
    "newborn-renda-clara": {
      alt: "Bebê recém-nascida adormecida em renda delicada cor de osso com mão sob o rosto",
      largura: 1120,
      altura: 1680,
      focoDesktop: "48% 44%",
      focoCelular: "48% 44%",
      avif: "midia/fotos/newborn-renda-clara-640w.avif 640w, midia/fotos/newborn-renda-clara-1120w.avif 1120w",
      webp: "midia/fotos/newborn-renda-clara-640w.webp 640w, midia/fotos/newborn-renda-clara-1120w.webp 1120w",
      padrao: "midia/fotos/newborn-renda-clara-1120w.webp"
    },
    "newborn-tres-geracoes": {
      alt: "Avó, mãe e recém-nascido abraçados sob luz branca suave",
      largura: 1200,
      altura: 800,
      focoDesktop: "50% 42%",
      focoCelular: "50% 42%",
      avif: "midia/fotos/newborn-tres-geracoes-640w.avif 640w, midia/fotos/newborn-tres-geracoes-1200w.avif 1200w",
      webp: "midia/fotos/newborn-tres-geracoes-640w.webp 640w, midia/fotos/newborn-tres-geracoes-1200w.webp 1200w",
      padrao: "midia/fotos/newborn-tres-geracoes-1200w.webp"
    },
    "familia-por-do-sol": {
      alt: "Bebê sentado na grama sorrindo espontaneamente sob a luz dourada do fim de tarde",
      largura: 1120,
      altura: 1680,
      focoDesktop: "56% 62%",
      focoCelular: "56% 60%",
      avif: "midia/fotos/familia-por-do-sol-640w.avif 640w, midia/fotos/familia-por-do-sol-1120w.avif 1120w",
      webp: "midia/fotos/familia-por-do-sol-640w.webp 640w, midia/fotos/familia-por-do-sol-1120w.webp 1120w",
      padrao: "midia/fotos/familia-por-do-sol-1120w.webp"
    },
    "familia-maos-dadas": {
      alt: "Mãe, pai e filha pequena descalços e de mãos dadas sorrindo em estúdio",
      largura: 1120,
      altura: 1635,
      focoDesktop: "50% 45%",
      focoCelular: "50% 45%",
      avif: "midia/fotos/familia-maos-dadas-640w.avif 640w, midia/fotos/familia-maos-dadas-1120w.avif 1120w",
      webp: "midia/fotos/familia-maos-dadas-640w.webp 640w, midia/fotos/familia-maos-dadas-1120w.webp 1120w",
      padrao: "midia/fotos/familia-maos-dadas-1120w.webp"
    },
    "familia-abraco-sofa": {
      alt: "Pai e mãe abraçados no sofá claro com seu bebê dormindo tranquilo entre eles",
      largura: 1120,
      altura: 1680,
      focoDesktop: "50% 52%",
      focoCelular: "50% 52%",
      avif: "midia/fotos/familia-abraco-sofa-640w.avif 640w, midia/fotos/familia-abraco-sofa-1120w.avif 1120w",
      webp: "midia/fotos/familia-abraco-sofa-640w.webp 640w, midia/fotos/familia-abraco-sofa-1120w.webp 1120w",
      padrao: "midia/fotos/familia-abraco-sofa-1120w.webp"
    },
    "familia-colo-risos": {
      alt: "Família sentada no chão rindo junto com a filha deitada no colo dos pais",
      largura: 1120,
      altura: 1652,
      focoDesktop: "50% 58%",
      focoCelular: "50% 58%",
      avif: "midia/fotos/familia-colo-risos-640w.avif 640w, midia/fotos/familia-colo-risos-1120w.avif 1120w",
      webp: "midia/fotos/familia-colo-risos-640w.webp 640w, midia/fotos/familia-colo-risos-1120w.webp 1120w",
      padrao: "midia/fotos/familia-colo-risos-1120w.webp"
    },
    "loh-retrato-principal": {
      alt: "Retrato de Loh Dias sorrindo com acolhimento vestindo blazer em tom de argila",
      largura: 1080,
      altura: 1492,
      focoDesktop: "50% 24%",
      focoCelular: "50% 22%",
      avif: "midia/fotos/loh-retrato-principal-640w.avif 640w, midia/fotos/loh-retrato-principal-1080w.avif 1080w",
      webp: "midia/fotos/loh-retrato-principal-640w.webp 640w, midia/fotos/loh-retrato-principal-1080w.webp 1080w",
      padrao: "midia/fotos/loh-retrato-principal-1080w.webp"
    },
    "loh-com-camera": {
      alt: "Loh Dias concentrada com sua câmera fotográfica nas mãos durante um registro",
      largura: 960,
      altura: 1487,
      focoDesktop: "45% 32%",
      focoCelular: "45% 32%",
      avif: "midia/fotos/loh-com-camera-560w.avif 560w, midia/fotos/loh-com-camera-960w.avif 960w",
      webp: "midia/fotos/loh-com-camera-560w.webp 560w, midia/fotos/loh-com-camera-960w.webp 960w",
      padrao: "midia/fotos/loh-com-camera-960w.webp"
    }
  },

  /* 1. ABERTURA — "Uma memória que ganha dimensão" */
  abertura: {
    fotoId: "abertura-newborn",
    etiquetaSuperior: "Barreiras, Bahia · Fotografia de Família desde 2017",
    tituloLinha1: "O tempo passa.",
    tituloLinha2: "O amor fica.",
    legendaCenaCheia: "11º dia de vida · Luz suave no estúdio climatizado",
    capituloReveladoEtiqueta: "Prólogo · Uma memória que ganha dimensão",
    capituloReveladoTitulo: "Os primeiros dias passam depressa e não avisam.",
    capituloReveladoTexto: "Do silêncio de quem ainda imagina o rosto ao colo que já não comporta do mesmo jeito: cada fase de uma família tem um tempo próprio — e nenhuma delas volta igual.",
    notaautoral: "Registros reais conduzidos no ritmo do bebê e da família."
  },

  /* 2. JORNADA — "Do primeiro sonho ao primeiro abraço" */
  jornada: {
    etiqueta: "A narrativa de uma chegada",
    titulo: "Do primeiro sonho ao primeiro abraço",
    subtitulo: "Quatro capítulos reais registrados em sessões independentes no estúdio e nos hospitais de Barreiras.",
    capitulos: [
      {
        id: "espera",
        romano: "I",
        tempo: "26ª a 32ª semana",
        categoria: "Gestação",
        titulo: "A espera",
        frase: "O ventre, o olhar de quem ainda está imaginando o rosto. É a única fase em que vocês já são três e ninguém ainda se viu.",
        apoio: "Condução passo a passo, consultoria prévia de roupas e pausas tranquilas — ninguém precisa saber posar.",
        fotoPrincipal: "gestante-luz-arvores",
        fotoDetalhe: "gestante-detalhe-maos",
        legendaDetalhe: "Detalhe · O toque antes do encontro"
      },
      {
        id: "encontro",
        romano: "II",
        tempo: "Sobreaviso da 36ª semana",
        categoria: "Parto",
        titulo: "O encontro",
        frase: "O parto acontece uma vez, sem ensaio e sem segunda tomada. Registrar é a forma de você ver depois o que viveu de olhos fechados.",
        apoio: "Presença silenciosa e respeitosa na sala de parto: a equipe médica conduz, eu acompanho sem interferir.",
        fotoPrincipal: "parto-pele-a-pele",
        fotoDetalhe: "parto-carimbo-pe",
        legendaDetalhe: "Detalhe · A primeira marca no braço do pai"
      },
      {
        id: "primeiros-dias",
        romano: "III",
        tempo: "9º ao 15º dia de vida",
        categoria: "Newborn",
        titulo: "Os primeiros dias",
        frase: "Entre o nono e o décimo quinto dia, o bebê ainda dorme enrolado como esteve por dentro. A janela é curta porque o corpo dele muda rápido.",
        apoio: "Estúdio climatizado, peças higienizadas a cada sessão e tempo livre para amamentar e acalmar quantas vezes precisar.",
        fotoPrincipal: "newborn-balanco",
        fotoDetalhe: "newborn-perfil-detalhe",
        legendaDetalhe: "Mesma sessão · Cílios e respiração aos poucos dias"
      },
      {
        id: "vida-continua",
        romano: "IV",
        tempo: "Seis meses, um ano e além",
        categoria: "Família & Crescimento",
        titulo: "A vida continua",
        frase: "O colo já não comporta do mesmo jeito. O primeiro sorriso que responde ao seu vira passo, voz e história de família.",
        apoio: "Do acompanhamento do primeiro ano aos retratos com quem caminha ao lado de vocês.",
        fotoPrincipal: "familia-por-do-sol",
        fotoDetalhe: "familia-maos-dadas",
        legendaDetalhe: "Retrato de família · O afeto que cresce junto"
      }
    ]
  },

  /* 3. PORTFÓLIO — "Entrar em uma história"
     IMPORTANTE: Quando "fotosSerie" contém mais de uma foto, todas pertencem comprovadamente à MESMA sessão/pessoa real. */
  portfolio: {
    etiqueta: "Portfólio Editorial",
    titulo: "Entrar em uma história",
    subtitulo: "Toque em qualquer fotografia para expandir a história em continuidade visual.",
    filtros: [
      { id: "todos", rotulo: "Todos os capítulos" },
      { id: "gestante", rotulo: "Gestante" },
      { id: "parto", rotulo: "Parto" },
      { id: "newborn", rotulo: "Newborn" },
      { id: "familia", rotulo: "Família" }
    ],
    obras: [
      {
        id: "obra-newborn-trico",
        numero: "01",
        categoria: "newborn",
        categoriaRotulo: "Newborn · Estúdio",
        titulo: "No tamanho exato dos primeiros dias",
        resumo: "Série real de recém-nascido em tons quentes de tricô e madeira, conduzida no sono natural do bebê.",
        notaTecnica: "Série de 3 registros da mesma sessão · Estúdio climatizado",
        layoutClasse: "item-destaque-largo",
        proporcao: "3 / 2",
        fotoCapa: "newborn-balanco",
        fotosSerie: [
          { id: "newborn-balanco", legenda: "Plano integral em balanço artesanal e textura de algodão." },
          { id: "newborn-perfil-detalhe", legenda: "Aproximação delicada: perfil, orelha e mão sob o queixo na mesma sessão." },
          { id: "abertura-newborn", legenda: "Sono profundo lateral na mesma luz difusa de estúdio." }
        ]
      },
      {
        id: "obra-gestante-marfim",
        numero: "02",
        categoria: "gestante",
        categoriaRotulo: "Gestante · Luz Natural",
        titulo: "Quando o corpo para de se defender",
        resumo: "Leveza em estúdio claro — uma mesma espera vista entre o sorriso aberto e o gesto silencioso.",
        notaTecnica: "Série de 3 retratos da mesma gestante · Estúdio Barreiras",
        layoutClasse: "item-vertical-alto",
        proporcao: "2 / 3",
        fotoCapa: "gestante-estudio-leve",
        fotosSerie: [
          { id: "gestante-estudio-leve", legenda: "Tons de areia e marfim diante da luz suave." },
          { id: "gestante-estudio-1", legenda: "A espontaneidade depois que a conversa inicial dissolve a timidez." },
          { id: "gestante-estudio-2", legenda: "Mãos acolhendo o ventre em composição limpa." }
        ]
      },
      {
        id: "obra-parto-pele",
        numero: "03",
        categoria: "parto",
        categoriaRotulo: "Parto · Sala de Nascimento",
        titulo: "O instante em que o nome vira rosto",
        resumo: "Os primeiros segundos de encontro entre mãe e filho, quando tudo ao redor silencia.",
        notaTecnica: "Série de 2 registros do mesmo nascimento · Hospital em Barreiras",
        layoutClasse: "item-horizontal-deslocado",
        proporcao: "3 / 2",
        fotoCapa: "parto-pele-a-pele",
        fotosSerie: [
          { id: "parto-pele-a-pele", legenda: "O primeiro encostar de rostos ainda na mesa de parto." },
          { id: "parto-encontro-2", legenda: "Segundos seguintes: a respiração que se acalma no calor da mãe." }
        ]
      },
      {
        id: "obra-newborn-gemeos",
        numero: "04",
        categoria: "newborn",
        categoriaRotulo: "Newborn & Pais",
        titulo: "Dois corações no mesmo abraço",
        resumo: "A delicadeza em dose dupla no encontro silencioso entre mãe, pai e recém-nascidos.",
        notaTecnica: "Retrato de família recém-nascida · Contraluz suave",
        layoutClasse: "item-horizontal-amplo",
        proporcao: "3 / 2",
        fotoCapa: "newborn-gemeos-pais",
        fotosSerie: [
          { id: "newborn-gemeos-pais", legenda: "Testa com testa: o respiro compartilhado de quem acabou de dobrar o amor." }
        ]
      },
      {
        id: "obra-gestante-trico",
        numero: "05",
        categoria: "gestante",
        categoriaRotulo: "Gestante · Intimidade",
        titulo: "A presença de quem espera junto",
        resumo: "Do retrato de perfil ao plano fechado das mãos que guardam quem está chegando.",
        notaTecnica: "Díptico da mesma sessão de gestante · Estúdio",
        layoutClasse: "item-vertical-recuado",
        proporcao: "2 / 3",
        fotoCapa: "gestante-perfil-trico",
        fotosSerie: [
          { id: "gestante-perfil-trico", legenda: "Linha de perfil e serenidade em fundo neutro." },
          { id: "gestante-detalhe-maos", legenda: "Detalhe próximo da mesma sessão: o abraço das mãos no ventre." }
        ]
      },
      {
        id: "obra-familia-sol",
        numero: "06",
        categoria: "familia",
        categoriaRotulo: "Crescimento · Ao Ar Livre",
        titulo: "O primeiro sorriso que responde ao seu",
        resumo: "A descoberta do mundo ao fim da tarde, sem poses forçadas, no tempo da brincadeira.",
        notaTecnica: "Acompanhamento infantil · Luz dourada natural",
        layoutClasse: "item-vertical-alto",
        proporcao: "2 / 3",
        fotoCapa: "familia-por-do-sol",
        fotosSerie: [
          { id: "familia-por-do-sol", legenda: "Fim de tarde dourado: a alegria espontânea de quem já senta e explora." }
        ]
      },
      {
        id: "obra-newborn-geracoes",
        numero: "07",
        categoria: "familia",
        categoriaRotulo: "Três Gerações",
        titulo: "De onde viemos, para onde seguimos",
        resumo: "Avó, mãe e recém-nascido reunidos numa mesma moldura de afeto e continuidade.",
        notaTecnica: "Retrato geracional · Luz difusa",
        layoutClasse: "item-horizontal-deslocado",
        proporcao: "3 / 2",
        fotoCapa: "newborn-tres-geracoes",
        fotosSerie: [
          { id: "newborn-tres-geracoes", legenda: "O colo que ensinou a cuidar agora acolhe quem acabou de chegar." }
        ]
      },
      {
        id: "obra-newborn-renda",
        numero: "08",
        categoria: "newborn",
        categoriaRotulo: "Newborn · Delicadeza",
        titulo: "A dobra das mãos como esteve por dentro",
        resumo: "Texturas claras de renda e algodão que deixam a pele do recém-nascido em primeiro plano.",
        notaTecnica: "Retrato newborn · Estúdio climatizado",
        layoutClasse: "item-vertical-recuado",
        proporcao: "2 / 3",
        fotoCapa: "newborn-renda-clara",
        fotosSerie: [
          { id: "newborn-renda-clara", legenda: "Pálpebras tranquilas e mãos apoiadas com naturalidade." }
        ]
      },
      {
        id: "obra-parto-familia",
        numero: "09",
        categoria: "parto",
        categoriaRotulo: "Parto · Primeiros Minutos",
        titulo: "Agora somos três olhando na mesma direção",
        resumo: "A alegria inteira dos pais ainda paramentados na sala de nascimento.",
        notaTecnica: "Fotografia documental de parto · Barreiras, BA",
        layoutClasse: "item-vertical-alto",
        proporcao: "2 / 3",
        fotoCapa: "parto-familia-sala",
        fotosSerie: [
          { id: "parto-familia-sala", legenda: "O primeiro retrato de família ainda dentro da sala de parto." }
        ]
      },
      {
        id: "obra-familia-sofa",
        numero: "10",
        categoria: "familia",
        categoriaRotulo: "Família · Acolhimento",
        titulo: "A casa inteira cabe num abraço",
        resumo: "Pais e bebê reunidos na quietude dos primeiros dias em família.",
        notaTecnica: "Retrato de família · Estúdio Loh Dias",
        layoutClasse: "item-vertical-recuado",
        proporcao: "2 / 3",
        fotoCapa: "familia-abraco-sofa",
        fotosSerie: [
          { id: "familia-abraco-sofa", legenda: "Proximidade, descanso e presença sem pressa." }
        ]
      }
    ]
  },

  /* 4. UM MOMENTO DE SILÊNCIO */
  silencio: {
    fotoId: "parto-silencio-pb",
    frase: "O parto acontece uma vez. Depois, você vê o que viveu de olhos fechados.",
    nota: "Sala de nascimento · Barreiras, Bahia"
  },

  /* 5. A LOH */
  sobreLoh: {
    etiqueta: "Quem está por trás da lente",
    titulo: "Antes de fotografar, eu escuto.",
    apresentacaoCurta: "Mãe do Lucca · Psicóloga · Fotógrafa desde 2017",
    paragrafos: [
      "Sou a Loh Dias — mãe do Lucca, psicóloga e fotógrafa desde 2017 em Barreiras, Bahia. E uma coisa nunca ficou fora da outra.",
      "Na prática, isso significa perceber quando uma mãe precisa de conversa e quando precisa de silêncio. Significa conduzir sem pressa, porque bebê não obedece a cronograma e mulher recém-parida também não.",
      "Muita gente chega ao ensaio sem se reconhecer no próprio corpo. A foto verdadeira não nasce de instrução rígida — nasce de quando você respira fundo e para de se defender da câmera."
    ],
    pilaresCuidado: [
      {
        titulo: "Tempo do bebê respeitado",
        texto: "Se precisar parar três vezes para mamar, trocar ou acalmar, paramos três vezes. Nenhum ensaio é apressado."
      },
      {
        titulo: "Estúdio climatizado e higienizado",
        texto: "Temperatura controlada para recém-nascidos e higienização completa de cada tecido e apoio antes de toda sessão."
      },
      {
        titulo: "Olhar de psicóloga e mãe",
        texto: "Leitura sensível do momento emocional da família, da consultoria de roupas até a entrega cuidadosa."
      }
    ],
    fotoPrincipal: "loh-retrato-principal",
    fotoSecundaria: "loh-com-camera"
  },

  /* 6. CONVERSA */
  conversa: {
    etiqueta: "Próximo passo",
    titulo: "Qual capítulo vocês estão vivendo?",
    subtitulo: "Escolha o momento atual da sua família para preparar uma conversa direta comigo no WhatsApp.",
    avisoPrototipo: "Versão de apresentação do novo site · O botão abaixo abre o WhatsApp oficial verificado da Loh Dias Fotografia ((77) 98869-0216) com sua escolha preenchida, sem gravar dados em banco.",
    opcoes: [
      {
        id: "gestante",
        titulo: "Gestante",
        resumo: "Estamos esperando o bebê",
        orientacaoLoh: "A fase mais confortável costuma ser entre a 26ª e a 32ª semana, quando a barriga já desenha lindo e você ainda se movimenta com leveza.",
        perguntaOpcional: "Com quantas semanas você está (ou qual o mês previsto)?",
        placeholderOpcional: "Ex.: Estou com 24 semanas / previsto para agosto",
        fotoId: "gestante-luz-arvores",
        mensagemBase: "Olá, Loh! Vi a experiência nova do site e estamos vivendo o capítulo da Gestação. Gostaria de conversar sobre disponibilidade para o nosso ensaio."
      },
      {
        id: "parto",
        titulo: "Parto",
        resumo: "Queremos registrar o nascimento",
        orientacaoLoh: "Fico de sobreaviso a partir da 36ª semana e acompanho o nascimento com discrição total nos hospitais de Barreiras que permitem acesso à sala.",
        perguntaOpcional: "Qual a data prevista do parto e a maternidade?",
        placeholderOpcional: "Ex.: Previsto para outubro, em Barreiras",
        fotoId: "parto-pele-a-pele",
        mensagemBase: "Olá, Loh! Vi a experiência nova do site e queremos saber como funciona o registro de Parto e a disponibilidade para a nossa data prevista."
      },
      {
        id: "newborn",
        titulo: "Newborn",
        resumo: "Primeiros dias do recém-nascido",
        orientacaoLoh: "A janela ideal acontece entre o 9º e o 15º dia de vida. Vale conversar ainda na gestação para deixarmos a pré-reserva ajustável ao nascimento.",
        perguntaOpcional: "O bebê já nasceu ou qual a data prevista?",
        placeholderOpcional: "Ex.: Nasce no início do próximo mês / Nasceu há 5 dias",
        fotoId: "newborn-balanco",
        mensagemBase: "Olá, Loh! Vi a experiência nova do site e gostaria de conversar sobre o ensaio Newborn nos primeiros dias do nosso bebê."
      },
      {
        id: "familia",
        titulo: "Família",
        resumo: "Crescimento, acompanhamento ou retrato",
        orientacaoLoh: "Para celebrar os meses do bebê, o primeiro aniversário ou reunir quem faz parte da história de vocês, no estúdio ou ao ar livre.",
        perguntaOpcional: "Quem vai participar do ensaio com você?",
        placeholderOpcional: "Ex.: Eu, meu esposo e nossa bebê de 8 meses",
        fotoId: "familia-por-do-sol",
        mensagemBase: "Olá, Loh! Vi a experiência nova do site e gostaria de conversar sobre um ensaio de Família / Acompanhamento."
      }
    ]
  }
};
