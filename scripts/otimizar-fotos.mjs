// Script de preparação e otimização das fotografias reais da Loh Dias Fotografia
// Gera versões responsivas AVIF e WebP com dimensões explícitas sem alterar rostos ou corpos.
// Preserva 100% os arquivos originais da pasta oficial.

import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const requireSharp = createRequire('C:\\Users\\Usuario\\Documents\\LOH DIAS FOTOGRAFIA\\SISTEMA\\SITE LOH DIAS\\package.json');
const sharp = requireSharp('sharp');

const ORIGEM_PUBLIC = 'C:\\Users\\Usuario\\Documents\\LOH DIAS FOTOGRAFIA\\SISTEMA\\SITE LOH DIAS\\public\\images';
const ORIGEM_LOGO = 'C:\\Users\\Usuario\\Documents\\LOH DIAS FOTOGRAFIA\\Manual da Marca Loh Dias\\logo';
const DESTINO_RAIZ = 'C:\\Users\\Usuario\\Documents\\LOH DIAS FOTOGRAFIA\\PROTOTIPO SITE LOH CINEMA';
const DESTINO_FOTOS = path.join(DESTINO_RAIZ, 'midia', 'fotos');
const DESTINO_MARCA = path.join(DESTINO_RAIZ, 'midia', 'marca');

fs.mkdirSync(DESTINO_FOTOS, { recursive: true });
fs.mkdirSync(DESTINO_MARCA, { recursive: true });

// Copiar logomarcas oficiais intactas (regra do Manual da Marca: nunca redigitar nem alterar)
const logos = [
  ['lohdias-principal-argila.png', ORIGEM_LOGO],
  ['lohdias-principal-branco.png', ORIGEM_LOGO],
  ['lohdias-principal-grafite.png', ORIGEM_LOGO],
  ['lohdias-assinatura-argila.png', ORIGEM_LOGO],
  ['lohdias-assinatura-branco.png', ORIGEM_LOGO],
  ['lohdias-monograma-argila.png', ORIGEM_LOGO],
  ['lohdias-monograma-oliva.png', ORIGEM_PUBLIC],
];

for (const [arquivo, pasta] of logos) {
  const src = path.join(pasta, arquivo);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(DESTINO_MARCA, arquivo));
  }
}

// Seleção curada de fotografias reais do portfólio público da Loh Dias
const FOTOS = [
  // Abertura (cena principal: recém-nascido em tricô areia com amplo espaço negativo)
  { id: 'abertura-newborn', origem: 'portfolio/depoimento-4.webp', larguras: [720, 1200, 1800], qualidadeAvif: 56, qualidadeWebp: 78 },

  // Jornada & Portfólio — Capítulo 1: Gestação (A Espera)
  { id: 'gestante-luz-arvores', origem: 'portfolio/gestante-23.webp', larguras: [640, 1200], qualidadeAvif: 52, qualidadeWebp: 76 },
  { id: 'gestante-detalhe-maos', origem: 'portfolio/gestante-capa-barriga.webp', larguras: [640, 1120], qualidadeAvif: 52, qualidadeWebp: 75 },
  { id: 'gestante-perfil-trico', origem: 'portfolio/gestante-5.webp', larguras: [640, 1120], qualidadeAvif: 52, qualidadeWebp: 75 },
  { id: 'gestante-luz-rio', origem: 'portfolio/depoimento-1.webp', larguras: [640, 1200], qualidadeAvif: 52, qualidadeWebp: 75 },
  { id: 'gestante-estudio-1', origem: 'portfolio/gestante-1.webp', larguras: [640, 1120], qualidadeAvif: 52, qualidadeWebp: 75 },
  { id: 'gestante-estudio-2', origem: 'portfolio/gestante-10.webp', larguras: [640, 1120], qualidadeAvif: 52, qualidadeWebp: 75 },
  { id: 'gestante-estudio-leve', origem: 'portfolio/gestante-4.webp', larguras: [640, 1120], qualidadeAvif: 52, qualidadeWebp: 75 },

  // Jornada, Portfólio & Momento de Silêncio — Capítulo 2: Parto (O Encontro)
  { id: 'parto-pele-a-pele', origem: 'portfolio/parto-7.webp', larguras: [640, 1280], qualidadeAvif: 54, qualidadeWebp: 76 },
  { id: 'parto-encontro-2', origem: 'portfolio/parto-1.webp', larguras: [640, 1200], qualidadeAvif: 52, qualidadeWebp: 75 },
  { id: 'parto-carimbo-pe', origem: 'portfolio/parto-5.webp', larguras: [640, 1200], qualidadeAvif: 52, qualidadeWebp: 75 },
  { id: 'parto-silencio-pb', origem: 'portfolio/parto-4.webp', larguras: [720, 1280, 1600], qualidadeAvif: 56, qualidadeWebp: 78 },
  { id: 'parto-familia-sala', origem: 'portfolio/parto-6.webp', larguras: [640, 1120], qualidadeAvif: 52, qualidadeWebp: 75 },

  // Jornada & Portfólio — Capítulo 3: Newborn (Os Primeiros Dias)
  { id: 'newborn-balanco', origem: 'portfolio/destaque-newborn-faixa.webp', larguras: [640, 1280], qualidadeAvif: 54, qualidadeWebp: 76 },
  { id: 'newborn-perfil-detalhe', origem: 'portfolio/newborn-8.webp', larguras: [640, 1120], qualidadeAvif: 52, qualidadeWebp: 75 },
  { id: 'newborn-pezinhos', origem: 'portfolio/newborn-15.webp', larguras: [640, 1120], qualidadeAvif: 52, qualidadeWebp: 75 },
  { id: 'newborn-gemeos-pais', origem: 'portfolio/depoimento-3.webp', larguras: [640, 1280], qualidadeAvif: 52, qualidadeWebp: 75 },
  { id: 'newborn-renda-clara', origem: 'portfolio/newborn-33.webp', larguras: [640, 1120], qualidadeAvif: 52, qualidadeWebp: 75 },
  { id: 'newborn-tres-geracoes', origem: 'portfolio/newborn-11.webp', larguras: [640, 1200], qualidadeAvif: 52, qualidadeWebp: 75 },

  // Jornada & Portfólio — Capítulo 4: Família e Crescimento (A Vida Continua)
  { id: 'familia-por-do-sol', origem: 'portfolio/acompanhamento-mensal-1.webp', larguras: [640, 1120], qualidadeAvif: 52, qualidadeWebp: 76 },
  { id: 'familia-maos-dadas', origem: 'portfolio/familia-1.webp', larguras: [640, 1120], qualidadeAvif: 52, qualidadeWebp: 75 },
  { id: 'familia-abraco-sofa', origem: 'portfolio/newborn-32.webp', larguras: [640, 1120], qualidadeAvif: 52, qualidadeWebp: 75 },
  { id: 'familia-colo-risos', origem: 'portfolio/familia-4.webp', larguras: [640, 1120], qualidadeAvif: 52, qualidadeWebp: 75 },

  // Seção A Loh — Retratos reais da fotógrafa
  // Em loh-fotografa-2 cortamos apenas os 28px superiores de borda branca de estúdio, sem tocar na Loh
  { id: 'loh-retrato-principal', origem: 'loh-fotografa-2.webp', larguras: [640, 1080], qualidadeAvif: 54, qualidadeWebp: 78, corteTopoPx: 34 },
  { id: 'loh-com-camera', origem: 'cadastro/loh-fotografa-cadastro.webp', larguras: [560, 960], qualidadeAvif: 52, qualidadeWebp: 76 },
];

const manifesto = {};

for (const item of FOTOS) {
  const caminhoOrigem = path.join(ORIGEM_PUBLIC, item.origem);
  const metaOrig = await sharp(caminhoOrigem).metadata();
  const topo = item.corteTopoPx || 0;
  const largOrig = metaOrig.width;
  const altOrig = metaOrig.height - topo;

  const variantes = { avif: [], webp: [], larguraBase: largOrig, alturaBase: altOrig };

  for (const w of item.larguras) {
    const largAlvo = Math.min(w, largOrig);
    const altAlvo = Math.round((largAlvo * altOrig) / largOrig);

    let pipelineBase = sharp(caminhoOrigem);
    if (topo > 0) {
      pipelineBase = pipelineBase.extract({ left: 0, top: topo, width: largOrig, height: altOrig });
    }
    const redim = pipelineBase.resize({ width: largAlvo, height: altAlvo, fit: 'inside', withoutEnlargement: true });

    const nomeAvif = `${item.id}-${largAlvo}w.avif`;
    const nomeWebp = `${item.id}-${largAlvo}w.webp`;

    const caminhoAvif = path.join(DESTINO_FOTOS, nomeAvif);
    const caminhoWebp = path.join(DESTINO_FOTOS, nomeWebp);

    await redim.clone().avif({ quality: item.qualidadeAvif, effort: 4 }).toFile(caminhoAvif);
    await redim.clone().webp({ quality: item.qualidadeWebp, effort: 5 }).toFile(caminhoWebp);

    const bytesAvif = fs.statSync(caminhoAvif).size;
    const bytesWebp = fs.statSync(caminhoWebp).size;

    variantes.avif.push({ arquivo: `midia/fotos/${nomeAvif}`, largura: largAlvo, altura: altAlvo, kb: Math.round(bytesAvif / 1024) });
    variantes.webp.push({ arquivo: `midia/fotos/${nomeWebp}`, largura: largAlvo, altura: altAlvo, kb: Math.round(bytesWebp / 1024) });
  }

  manifesto[item.id] = variantes;
  const menorAvif = variantes.avif[0];
  const maiorAvif = variantes.avif[variantes.avif.length - 1];
  console.log(`OK ${item.id.padEnd(25)} | ${variantes.larguraBase}x${variantes.alturaBase} | celular AVIF: ${menorAvif.kb}KB | maior AVIF: ${maiorAvif.kb}KB`);
}

fs.writeFileSync(path.join(DESTINO_FOTOS, 'manifesto-dimensoes.json'), JSON.stringify(manifesto, null, 2), 'utf8');
console.log('\nConcluído! Manifesto salvo em midia/fotos/manifesto-dimensoes.json');
