# Relatório Técnico, Recursos Utilizados e Evidências de Testes

**Projeto:** Protótipo de Apresentação — Loh Dias Fotografia  
**Conceito:** *“O tempo passa. O amor fica.”*  
**Endereço publicado (acesso livre, sem login):** https://lohdias.github.io/prototipo-loh-dias-cinema/  
**Isolamento:** Pasta e publicação totalmente independentes (`PROTOTIPO SITE LOH CINEMA` → repositório público isolado `lohdias/prototipo-loh-dias-cinema`). O site oficial (`lohdiasfotografia.com.br`), o código em `SISTEMA\SITE LOH DIAS` e o banco de dados não foram alterados.

---

## 1. Recursos Técnicos Usados e Alternativas Funcionais

| Recurso | Finalidade na Direção de Arte | Alternativa Funcional Implementada |
|---|---|---|
| **CSS Scroll-Driven Animations (`animation-timeline: view()`)** | Transforma a fotografia de abertura de tela inteira em gravura editorial emoldurada durante a primeira rolagem no desktop. | Detecção via `@supports` + variável contínua `--p` calculada em `requestAnimationFrame` passivo para navegadores sem suporte e para o recorte móvel. |
| **View Transitions API (`document.startViewTransition`)** | Expansão visual contínua da própria fotografia da galeria para a Sala de Leitura e na filtragem por capítulos. | Abertura imediata da janela `<dialog>` nativa acessível, mantendo foco, teclado (`Esc`, `←`, `→`), gesto de deslizar no toque e retorno exato à posição anterior. |
| **Palco Sticky + `IntersectionObserver`** | Sincroniza o quadro amplo (transição de máscara `clip-path`) e o quadro de detalhe na seção *A Jornada* no desktop. | No celular, substitui o sticky por uma diagramação própria de álbum vertical com sangrias laterais alternadas. |
| **Imagens Responsivas `<picture>` (`AVIF` + `WebP`)** | Máxima nitidez fotográfica com fração do peso original e dimensões explícitas (`width`/`height`) contra saltos de layout. | `AVIF` como primeira fonte (`6 KB` a `103 KB`), `WebP` como segunda fonte universal e `fetchpriority="high"` exclusivo na abertura. |
| **Micro-efeito WebGL (`js/luz-janela.js`)** | Carícia sutil de luz matinal de janela sobre o espaço negativo da abertura (1 único canvas de baixa resolução `240px`). | Carregado somente após o evento `load`/`requestIdleCallback`, pausado fora de tela via `IntersectionObserver` e em aba oculta; descartado sem impacto visual caso WebGL não exista ou movimento esteja pausado. |
| **Acessibilidade de Movimento** | Respeito integral a quem prefere navegação estática. | Suporte automático a `prefers-reduced-motion: reduce`, pausa em `visibilitychange` e botão visível **“Pausar movimento”** no topo. |

Nenhuma biblioteca externa pesada de animação (GSAP, Motion, Three.js) foi empilhada.

---

## 2. Testes de Laboratório Executados e Condições

**Ambiente de medição:** Google Chrome Headless via Chrome DevTools Protocol (`PerformanceObserver` nativo para `largest-contentful-paint` e `layout-shift`, inspeção de rede e auditoria de DOM).

| Métrica / Verificação | Meta Definida | Publicado Online — Celular (`390×844`, DPR 2, anônimo s/ cache) | Publicado Online — Computador (`1440×900`, anônimo s/ cache) |
|---|---|---|---|
| **Status HTTP sem autenticação** | `200 OK` | **`200 OK`** (CDN GitHub Pages + HTTPS) | **`200 OK`** |
| **LCP (Maior Pintura de Conteúdo)** | até `2.500 ms` | **`1.232 ms`** (`632–1.008 ms` local) | **`1.060 ms`** (`304–676 ms` local) |
| **CLS (Mudança Cumulativa de Layout)** | até `0,10` | **`0,0094`** (`0,0000` local) | **`0,0119`** (`0,0000` local) |
| **Transferência inicial na abertura** | até `1.500 KB` | **`539 KB` compactados** (`18` requisições, sem vídeo) | Abaixo de `700 KB` compactados |
| **Imagens quebradas (41 elementos `<img>`)** | `0` | **`0` quebradas** | **`0` quebradas** |
| **Erros de Console / Falhas de Rede** | `0` | **`0` erros / `0` falhas** | **`0` erros / `0` falhas** |
| **Rolagem horizontal indesejada** | Nenhuma | `scrollWidth = 390px` (`innerWidth = 390px`) | Sem transbordo |

---

## 3. Limitações Conhecidas e Notas Transparentes

1. **Dados de campo (CrUX) vs. laboratório:** como esta URL é um endereço novo de protótipo recém-publicado, ainda não há histórico de usuários reais (CrUX); os números acima são medições reais de laboratório documentadas. Em redes móveis 4G reais com latência elevada, o LCP tenderá a variar entre ~1,1 s e ~2,0 s graças ao AVIF de `13 KB–29 KB` pré-carregado na abertura.
2. **Contato demonstrativo ligado ao WhatsApp oficial:** o seletor da seção *Conversa* não grava dados em banco de dados; ele monta a mensagem personalizada diretamente para o número comercial público verificado da Loh Dias Fotografia (`(77) 98869-0216`).
3. **Seleção provisória de portfólio:** foram utilizadas apenas fotografias reais públicas já presentes no acervo do site da Loh Dias, agrupando na mesma história apenas fotos comprovadamente da mesma sessão para nunca misturar famílias distintas. A Loh poderá substituir ou ampliar a curadoria facilmente em `js/dados-site.js`.
4. **Microfilme IA opcional não incluído deliberadamente:** optou-se por manter 100% de registros fotográficos autênticos da Loh na abertura e nas narrativas, evitando qualquer cena sintética e preservando a transferência inicial enxuta.
