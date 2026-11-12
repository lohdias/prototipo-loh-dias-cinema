# Como Trocar as Fotografias e Textos do Protótipo

Toda a curadoria de fotografias, textos, capítulos, séries do portfólio, pontos de enquadramento e mensagens do WhatsApp foi centralizada em **um único arquivo**:

- **`js/dados-site.js`**

Você não precisa procurar textos espalhados pelo HTML nem pelo CSS.

---

## 1. Preparar novas fotografias (automático em AVIF e WebP)

Para manter o site leve no celular (abaixo de 1,5 MB na abertura), cada foto tem versões responsivas em **AVIF** e **WebP** dentro da pasta `midia/fotos/`.

### Opção A — Usando o script automático já incluído (recomendado)
1. Abra o arquivo `scripts/otimizar-fotos.mjs`.
2. Aponte o campo `origem` do item desejado para a nova foto (ou adicione um novo item na lista `FOTOS`).
3. No terminal, rode:
   ```powershell
   node "C:\Users\Usuario\Documents\LOH DIAS FOTOGRAFIA\PROTOTIPO SITE LOH CINEMA\scripts\otimizar-fotos.mjs"
   ```
   O script cria automaticamente os arquivos `.avif` e `.webp` nas larguras ideais sem distorcer pessoas, preservando os arquivos originais intactos, e grava as dimensões exatas em `midia/fotos/manifesto-dimensoes.json`.

### Opção B — Substituição manual direta
Se preferir substituir sem rodar comando:
1. Exporte a nova foto em `.webp` (e opcionalmente `.avif`) com o mesmo nome da foto atual dentro de `midia/fotos/` (por exemplo, `abertura-newborn-1200w.webp`).
2. Se a proporção da nova foto for diferente da anterior, atualize `largura` e `altura` no bloco correspondente em `js/dados-site.js`.

---

## 2. Ajustar o enquadramento no Desktop e no Celular

Em `js/dados-site.js`, dentro de `acervoFotos`, cada fotografia possui dois controles independentes de ponto focal:

```js
"abertura-newborn": {
  alt: "Descrição acessível da fotografia",
  largura: 1800,
  altura: 1200,
  focoDesktop: "48% 54%",
  focoCelular: "46% 56%",
  // ...
}
```

- O primeiro número (`48%`) controla a posição **horizontal** (`0%` = extrema esquerda, `50%` = centro, `100%` = extrema direita).
- O segundo número (`54%`) controla a posição **vertical** (`0%` = topo, `50%` = centro, `100%` = base).
- Ajuste `focoCelular` sempre que quiser proteger rostos ou preservar espaço livre para o título em telas verticais.

---

## 3. Onde editar cada seção em `js/dados-site.js`

1. **Abertura (`abertura`):** foto principal (`fotoId`) e textos do prólogo.
2. **Jornada (`jornada.capitulos`):** os 4 capítulos (*Gestação*, *Parto*, *Newborn*, *Família*), cada um com `fotoPrincipal` (plano amplo) e `fotoDetalhe` (plano próximo flutuante).
3. **Portfólio (`portfolio.obras`):** cartões da galeria assimétrica.
   - **Cuidado ético e narrativo:** quando `fotosSerie` tiver mais de uma imagem, mantenha sempre fotografias da **mesma sessão/família real**, nunca misturando famílias diferentes como se fossem uma só.
4. **Um Momento de Silêncio (`silencio`):** a fotografia única de pausa dramática e sua frase.
5. **A Loh (`sobreLoh`):** retratos reais da Loh e textos em primeira pessoa.
6. **Conversa (`conversa.opcoes`):** opções de capítulo, orientações iniciais da Loh e texto-base enviado para o WhatsApp oficial `(77) 98869-0216`.
