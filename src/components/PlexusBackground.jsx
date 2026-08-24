import { useEffect, useRef, memo } from "react";

/**
 * PlexusBackground - Optimized Interactive Network Plexus with Subtle Code/Data Streams
 * - Background: #050816 (Dark Mode) / #fafafa (Light Mode)
 * - Particles: 60 max (Desktop), 22 (Mobile)
 * - Code/Data Streams: Very slow-moving binary, terminal tokens, & syntax fragments with extremely low opacity (0.035 - 0.06)
 * - Colors: Refined, softened Rose/Primary (Dark) and Emerald (Light)
 * - Motion: Fluid, smooth drift with interactive cursor links
 */
export const PlexusBackground = memo(({ isDark }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for gentle attraction/repulsion
    const mouse = {
      x: null,
      y: null,
      radius: 140,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // Particle theme accents (Rose in Dark Mode, Crisp Emerald Green in Light Mode)
    const primaryRGB = isDark ? "244, 63, 94" : "16, 185, 129";
    const secondaryRGB = isDark ? "251, 113, 133" : "5, 150, 105";
    const codeStreamRGB = isDark ? "148, 163, 184" : "148, 163, 184"; // Faint Slate

    // Code & Data Stream Tokens
    const codeSnippets = [
      "01001010",
      "const { sys } = node;",
      "0x7F4A",
      "async () => await fetch()",
      "01101101",
      "git commit -m 'feat'",
      "<Layout active={true} />",
      "return Promise.resolve()",
      "01010111",
      "SELECT * FROM matrix;",
      "0x3B9C",
      "npm run deploy",
      "std::vector<int> stream;",
      "01110010",
      "useCallback(() => {}, [])",
      "0x9A2F",
      "def execute_pipeline():",
      "01000001",
    ];

    // Adaptive configuration
    let isMobile = width < 768;
    let particleCount = isMobile ? 28 : 68; // Within 40-80 max
    let streamCount = isMobile ? 6 : 14;
    let connectionDistance = isMobile ? 90 : 140;

    // 1. Code Stream Item (Very slow drifting code fragments)
    class CodeStream {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vy = Math.random() * 0.25 + 0.15; // Very slow drift
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        this.opacity = Math.random() * 0.035 + 0.03; // Extremely low opacity (0.03 - 0.065)
        this.fontSize = Math.floor(Math.random() * 3) + 11; // 11px - 13px
        this.updateInterval = Math.floor(Math.random() * 200) + 100;
        this.timer = 0;
      }

      update() {
        this.y += this.vy;
        if (this.y > height + 50) {
          this.y = -30;
          this.x = Math.random() * width;
          this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        }

        // Occasionally mutate snippet token subtly
        this.timer++;
        if (this.timer > this.updateInterval) {
          this.timer = 0;
          if (Math.random() > 0.6) {
            this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
          }
        }
      }

      draw() {
        ctx.font = `${this.fontSize}px "JetBrains Mono", monospace`;
        ctx.fillStyle = `rgba(${codeStreamRGB}, ${this.opacity})`;
        ctx.fillText(this.text, this.x, this.y);
      }
    }

    // 2. Plexus Particle Item
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.8 + 1.4; // 1.4px - 3.2px
        this.color = Math.random() > 0.35 ? primaryRGB : secondaryRGB;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Smooth boundary bounce
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Gentle cursor deflection / attraction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const dirX = dx / dist;
            const dirY = dy / dist;
            this.x -= dirX * force * 0.6;
            this.y -= dirY * force * 0.6;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, 0.88)`;
        ctx.shadowBlur = isDark ? 8 : 4;
        ctx.shadowColor = `rgba(${this.color}, 0.6)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    let particles = [];
    let streams = [];

    function initElements() {
      particles = [];
      streams = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
      for (let i = 0; i < streamCount; i++) {
        streams.push(new CodeStream());
      }
    }

    initElements();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      isMobile = width < 768;
      particleCount = isMobile ? 22 : 60;
      streamCount = isMobile ? 6 : 14;
      initElements();
    };

    window.addEventListener("resize", handleResize, { passive: true });

    let isRunning = true;

    const animate = () => {
      if (!isRunning) return;

      ctx.clearRect(0, 0, width, height);

      // Layer 1: Code / Data Streams (Very subtle, low opacity in background)
      for (let i = 0; i < streams.length; i++) {
        streams[i].update();
        streams[i].draw();
      }

      // Layer 2: Node Connections (Clean, visible lines)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * (isDark ? 0.28 : 0.22);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${primaryRGB}, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Connection to cursor
      if (mouse.x !== null && mouse.y !== null && !isMobile) {
        for (let i = 0; i < particles.length; i++) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * (isDark ? 0.35 : 0.25);
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(particles[i].x, particles[i].y);
            ctx.strokeStyle = `rgba(${primaryRGB}, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // Layer 3: Particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        if (!isRunning) {
          isRunning = true;
          animate();
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isDark]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      style={{
        backgroundColor: isDark ? "#050816" : "var(--bg)",
      }}
    >
      {/* Ambient Cosmic Glows */}
      <div
        className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full blur-[140px] opacity-20 dark:opacity-15 pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(circle, #f43f5e 0%, #6366f1 50%, transparent 70%)"
            : "radial-gradient(circle, #e2e8f0 0%, #cbd5e1 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-10%] right-[15%] w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full blur-[140px] opacity-20 dark:opacity-15 pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(circle, #3b82f6 0%, transparent 70%)"
            : "radial-gradient(circle, #f1f5f9 0%, transparent 70%)",
        }}
      />

      {/* Subtle Base Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(ellipse 90% 70% at 50% 40%, transparent 55%, rgba(5, 8, 22, 0.4) 85%, #050816 100%)"
            : "radial-gradient(ellipse 90% 70% at 50% 40%, transparent 55%, rgba(250, 250, 250, 0.3) 85%, #fafafa 100%)",
        }}
      />

      {/* Network Plexus + Code Stream Canvas (Placed on top so particles and connections are crystal clear) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />
    </div>
  );
});

export default PlexusBackground;
