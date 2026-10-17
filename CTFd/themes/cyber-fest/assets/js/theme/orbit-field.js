const canvas = document.querySelector(".orbit-field");

if (canvas instanceof HTMLCanvasElement) {
  const context = canvas.getContext("2d", { alpha: true });
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const random = (min, max) => Math.random() * (max - min) + min;
  let width = 0;
  let height = 0;
  let frame = 0;
  let lastTime = 0;
  let particles = [];

  const createParticles = () => {
    const count = Math.min(420, Math.max(150, Math.round((width * height) / 4300)));
    particles = Array.from({ length: count }, () => ({
      angle: random(0, Math.PI * 2),
      radius: Math.sqrt(Math.random()),
      depth: random(-1, 1),
      speed: random(0.025, 0.14) * (Math.random() > 0.5 ? 1 : -1),
      phase: random(0, Math.PI * 2),
      size: random(0.45, 1.45),
      alpha: random(0.18, 0.75),
    }));
  };

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context?.setTransform(ratio, 0, 0, ratio, 0, 0);
    createParticles();
    if (reducedMotion.matches) draw(0, false);
  };

  const draw = (time, animate = true) => {
    if (!context) return;
    context.clearRect(0, 0, width, height);

    const centerX = width * 0.5;
    const centerY = Math.min(height * 0.31, 340);
    const radiusX = Math.min(width * 0.37, 550);
    const radiusY = Math.min(height * 0.27, 275);
    const elapsed = Math.min((time - lastTime) / 1000, 0.05);
    lastTime = time;

    for (const particle of particles) {
      if (animate) particle.angle += particle.speed * elapsed;
      const turbulence = Math.sin(time * 0.00022 + particle.phase) * 0.025;
      const radius = particle.radius + turbulence;
      const depth = Math.sqrt(Math.max(0, 1 - radius * radius));
      const twist = particle.angle + particle.depth * depth * 0.85;
      const x = centerX + Math.cos(twist) * radiusX * radius;
      const y = centerY + Math.sin(twist) * radiusY * radius;
      const visibility = 0.35 + depth * 0.65;
      const twinkle = animate ? 0.72 + Math.sin(time * 0.001 + particle.phase) * 0.22 : 0.8;

      context.beginPath();
      context.fillStyle = `rgba(153, 194, 239, ${particle.alpha * visibility * twinkle})`;
      context.arc(x, y, particle.size * (0.7 + depth * 0.5), 0, Math.PI * 2);
      context.fill();
    }

    if (animate && !reducedMotion.matches && !document.hidden) {
      frame = window.requestAnimationFrame(draw);
    }
  };

  const start = () => {
    window.cancelAnimationFrame(frame);
    if (reducedMotion.matches) {
      draw(0, false);
      return;
    }
    lastTime = performance.now();
    frame = window.requestAnimationFrame(draw);
  };

  resize();
  start();
  window.addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) window.cancelAnimationFrame(frame);
    else start();
  });
  reducedMotion.addEventListener("change", start);
}
