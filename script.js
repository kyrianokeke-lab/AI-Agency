document.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap) return;

  gsap.registerPlugin(ScrollTrigger);

  const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
  intro.from(".site-nav", { y: -28, opacity: 0, duration: 0.8 })
    .from(".hero-preheadline", { y: 18, opacity: 0, duration: 0.55 }, "-=0.3")
    .from("#hero-title", { y: 42, opacity: 0, duration: 1 }, "-=0.25")
    .from(".hero-subhead", { y: 24, opacity: 0, duration: 0.65 }, "-=0.45")
    .from(".offer-preview", { y: 28, opacity: 0, duration: 0.8 }, "-=0.3")
    .from(".offer-points li", { x: 18, opacity: 0, stagger: 0.08, duration: 0.4 }, "-=0.45")
    .from(".hero-cta", { y: 24, opacity: 0, duration: 0.65 }, "-=0.25");

  gsap.to(".hero-ambient-one", {
    xPercent: -18,
    yPercent: 12,
    scale: 1.12,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
  });

  gsap.from(".bundle-intro-copy, .bundle-intro-mark", {
    y: 42,
    opacity: 0,
    stagger: 0.12,
    duration: 0.85,
    ease: "power3.out",
    scrollTrigger: { trigger: ".bundle-intro", start: "top 78%" }
  });

  gsap.from(".kit-card", {
    y: 54,
    opacity: 0,
    stagger: 0.12,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: { trigger: ".agency-kits", start: "top 82%" }
  });

  gsap.from(".opportunity-row", {
    x: 36,
    opacity: 0,
    stagger: 0.1,
    duration: 0.65,
    ease: "power3.out",
    scrollTrigger: { trigger: ".opportunity-section", start: "top 76%" }
  });

  gsap.from(".step-card, .product-image-placeholder", {
    y: 32,
    opacity: 0,
    stagger: 0.1,
    duration: 0.7,
    ease: "power3.out",
    scrollTrigger: { trigger: ".product-intro, .steps-section", start: "top 82%" }
  });

  gsap.from(".services-proof-copy", {
    y: 44,
    opacity: 0,
    stagger: 0.14,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: { trigger: ".inside-box-section", start: "top 82%" }
  });

  gsap.fromTo(".income-proof-placeholder", {
    opacity: 0.25,
    scale: 0.82
  }, {
    opacity: 1,
    scale: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".services-proof-section",
      start: "top 80%",
      end: "center 55%",
      scrub: 1
    }
  });

});
