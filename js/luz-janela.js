/* ==========================================================================
   EFEITO DISTINTIVO OPCIONAL EM WEBGL — LUZ MATINAL DE JANELA
   ==========================================================================
   - Carregado tardiamente após o conteúdo principal (LCP preservado).
   - Resolução interna limitada (máx. 280px) para consumo mínimo de bateria/GPU.
   - Pausado automaticamente fora da tela (IntersectionObserver), com aba oculta
     ou quando o visitante pausa o movimento / usa prefers-reduced-motion.
   - Se WebGL não estiver disponível, a página permanece completa sem canvas.
   ========================================================================== */

window.iniciarLuzJanelaAbertura = function iniciarLuzJanelaAbertura() {
  const canvas = document.getElementById("canvas-luz-janela");
  const secaoAbertura = document.getElementById("abertura");
  if (!canvas || !secaoAbertura) return;

  const prefereReduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefereReduzido || document.documentElement.dataset.movimento === "pausado") {
    return;
  }

  let gl = null;
  try {
    gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "low-power",
      preserveDrawingBuffer: false
    });
  } catch (_) {
    return;
  }
  if (!gl) return;

  const vsFonte = `
    attribute vec2 a_pos;
    varying vec2 v_uv;
    void main() {
      v_uv = a_pos * 0.5 + 0.5;
      gl_Position = vec4(a_pos, 0.0, 1.0);
    }
  `;

  // Feixe suave de luz solar atravessando cortina translúcida nas margens do quadro
  const fsFonte = `
    precision mediump float;
    varying vec2 v_uv;
    uniform float u_tempo;

    void main() {
      vec2 uv = v_uv;
      float onda1 = sin((uv.x * 3.4 - uv.y * 2.1) + u_tempo * 0.28) * 0.5 + 0.5;
      float onda2 = sin((uv.x * 5.2 + uv.y * 1.6) - u_tempo * 0.19) * 0.5 + 0.5;
      float feixe = smoothstep(0.25, 0.95, onda1 * 0.65 + onda2 * 0.35);

      // Concentra a carícia de luz no espaço negativo superior esquerdo, preservando o centro
      float mascaraCanto = smoothstep(0.85, 0.05, distance(uv, vec2(0.18, 0.82)));
      float intensidade = feixe * mascaraCanto * 0.26;

      vec3 corSol = vec3(0.98, 0.93, 0.86);
      gl_FragColor = vec4(corSol, intensidade);
    }
  `;

  function compilar(tipo, fonte) {
    const sh = gl.createShader(tipo);
    gl.shaderSource(sh, fonte);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      gl.deleteShader(sh);
      return null;
    }
    return sh;
  }

  const vs = compilar(gl.VERTEX_SHADER, vsFonte);
  const fs = compilar(gl.FRAGMENT_SHADER, fsFonte);
  if (!vs || !fs) return;

  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;

  gl.useProgram(prog);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW
  );

  const locPos = gl.getAttribLocation(prog, "a_pos");
  const locTempo = gl.getUniformLocation(prog, "u_tempo");
  gl.enableVertexAttribArray(locPos);
  gl.vertexAttribPointer(locPos, 2, gl.FLOAT, false, 0, 0);

  function ajustarResolucao() {
    const proporcao = canvas.clientHeight / Math.max(1, canvas.clientWidth);
    const larg = 240;
    const alt = Math.max(120, Math.round(larg * proporcao));
    if (canvas.width !== larg || canvas.height !== alt) {
      canvas.width = larg;
      canvas.height = alt;
      gl.viewport(0, 0, larg, alt);
    }
  }

  ajustarResolucao();

  let emTela = true;
  let idQuadro = 0;
  const inicio = performance.now();

  function desenhar(agora) {
    idQuadro = 0;
    if (
      !emTela ||
      document.hidden ||
      document.documentElement.dataset.movimento === "pausado"
    ) {
      return;
    }

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform1f(locTempo, (agora - inicio) * 0.001);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    idQuadro = requestAnimationFrame(desenhar);
  }

  function retomarSeAtivo() {
    if (
      !idQuadro &&
      emTela &&
      !document.hidden &&
      document.documentElement.dataset.movimento !== "pausado"
    ) {
      ajustarResolucao();
      idQuadro = requestAnimationFrame(desenhar);
    }
  }

  const observador = new IntersectionObserver(
    (entradas) => {
      emTela = entradas[0]?.isIntersecting ?? false;
      if (emTela) retomarSeAtivo();
    },
    { threshold: 0.02 }
  );
  observador.observe(secaoAbertura);

  document.addEventListener("visibilitychange", retomarSeAtivo);
  window.addEventListener("loh:movimento-alterado", retomarSeAtivo);
  retomarSeAtivo();
};
