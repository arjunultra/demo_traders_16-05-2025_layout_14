// gsap used with swiper to create custom animations
document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof Swiper === "undefined") {
    console.warn("GSAP or Swiper is not loaded.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const homeCarouselSwiper = new Swiper(".home-carousel-swiper", {
    loop: true,
    speed: 200,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    allowTouchMove: true,
    effect: "slide",
    on: {
      init: function () {
        const activeSlide = document.querySelector(
          ".home-carousel .swiper-slide-active"
        );
        if (activeSlide) {
          gsap.set(activeSlide, { autoAlpha: 1, rotationX: 0, zIndex: 2 });
        }
      },
      beforeTransition: function () {
        const slides = document.querySelectorAll(
          ".home-carousel .swiper-slide"
        );
        gsap.set(slides, { clearProps: "all" });
      },
      slideChangeTransitionStart: function () {
        const activeSlide = this.slides[this.activeIndex];
        const prevSlide = this.slides[this.previousIndex];

        gsap.killTweensOf([activeSlide, prevSlide]);

        // 🔥 **Flip Out Animation for Previous Slide**
        if (prevSlide) {
          gsap.to(prevSlide, {
            autoAlpha: 0,
            rotationX: 90,
            duration: 0.6,
            ease: "power2.in",
            onComplete: () => {
              gsap.set(prevSlide, { visibility: "hidden" });
            },
          });
        }

        // 🔥 **Flip In Animation for Active Slide**
        gsap.fromTo(
          activeSlide,
          {
            autoAlpha: 0,
            rotationX: -90,
            visibility: "visible",
            zIndex: 2,
          },
          {
            autoAlpha: 1,
            rotationX: 0,
            duration: 0.8,
            ease: "power3.out",
          }
        );

        // 🌊 **Ripple Effect on Image**
        const image = activeSlide.querySelector("img");
        if (image) {
          gsap.fromTo(
            image,
            { scale: 0.95, filter: "blur(2px)" },
            {
              scale: 1,
              filter: "blur(0px)",
              duration: 0.8,
              ease: "power3.out",
            }
          );
        }
      },
    },
  });
});
// footer GSAP Animation
// GSAP Animations for Footer
document.addEventListener("DOMContentLoaded", function () {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Footer entrance animation
  gsap.from(".footer-section", {
    scrollTrigger: {
      trigger: ".footer-section",
      start: "top bottom-=100",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
  });

  // Staggered animation for footer columns
  gsap.from(".footer-section .row > div", {
    scrollTrigger: {
      trigger: ".footer-section",
      start: "top bottom-=100",
    },
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8,
    ease: "back.out(1.2)",
  });

  // Animate headings with line drawing effect
  gsap.from(".footer-section-heading::after", {
    scrollTrigger: {
      trigger: ".footer-section",
      start: "top bottom-=80",
    },
    width: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out",
    delay: 0.5,
  });

  // Quick links hover animation
  const footerLinks = document.querySelectorAll(".footer-section-link");

  footerLinks.forEach((link) => {
    const icon = link.querySelector("i");

    link.addEventListener("mouseenter", () => {
      gsap.to(icon, {
        x: 5,
        color: "var(--color2)",
        duration: 0.3,
        ease: "power2.out",
      });
    });

    link.addEventListener("mouseleave", () => {
      gsap.to(icon, {
        x: 0,
        color: "var(--color1)",
        duration: 0.3,
        ease: "power2.in",
      });
    });
  });

  // Social icons hover animation
  const socialLinks = document.querySelectorAll(".footer-section-social-link");

  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, {
        y: -5,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    });

    link.addEventListener("mouseleave", () => {
      gsap.to(link, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  // Contact icons pulse animation
  const contactIcons = document.querySelectorAll(".footer-section-icon");

  contactIcons.forEach((icon) => {
    const parentItem = icon.closest(".footer-section-contact-item");

    parentItem.addEventListener("mouseenter", () => {
      gsap.to(icon, {
        scale: 1.2,
        color: "var(--color2)",
        duration: 0.3,
        ease: "back.out(1.5)",
      });
    });

    parentItem.addEventListener("mouseleave", () => {
      gsap.to(icon, {
        scale: 1,
        color: "var(--color1)",
        duration: 0.3,
        ease: "power2.in",
      });
    });
  });

  // Payment icons hover animation
  const paymentIcons = document.querySelectorAll(
    ".footer-section-payment-icon"
  );

  paymentIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      gsap.to(icon, {
        scale: 1.2,
        color: "var(--color2)",
        duration: 0.3,
        ease: "back.out(1.5)",
        yoyo: true,
      });
    });

    icon.addEventListener("mouseleave", () => {
      gsap.to(icon, {
        scale: 1,
        color: "#ccc",
        duration: 0.3,
        ease: "power2.in",
      });
    });
  });

  // Newsletter button animation
  const newsletterBtn = document.querySelector(".footer-section-btn");

  if (newsletterBtn) {
    newsletterBtn.addEventListener("mouseenter", () => {
      gsap.to(newsletterBtn, {
        backgroundColor: "var(--color2)",
        color: "var(--color4)",
        x: 3,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    newsletterBtn.addEventListener("mouseleave", () => {
      gsap.to(newsletterBtn, {
        backgroundColor: "var(--color1)",
        color: "#fff",
        x: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    });
  }

  // Create a subtle floating animation for the logo
  gsap.to(".footer-section-logo", {
    y: "-5px",
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  // Create firework particle effects on copyright section hover
  const copyrightSection = document.querySelector(".footer-section-copyright");

  if (copyrightSection) {
    copyrightSection.addEventListener("mouseenter", createFireworkEffect);
  }

  function createFireworkEffect() {
    // Create a container for the firework particles
    const fireworkContainer = document.createElement("div");
    fireworkContainer.className = "firework-container";
    fireworkContainer.style.position = "absolute";
    fireworkContainer.style.top = "0";
    fireworkContainer.style.left = "0";
    fireworkContainer.style.width = "100%";
    fireworkContainer.style.height = "100%";
    fireworkContainer.style.pointerEvents = "none";
    fireworkContainer.style.zIndex = "0";

    copyrightSection.appendChild(fireworkContainer);

    // Create a random position for the firework
    const posX = Math.random() * copyrightSection.offsetWidth;
    const posY = Math.random() * (copyrightSection.offsetHeight - 20);

    // Create firework particles
    const particleCount = 20;
    const colors = [
      "var(--color1)",
      "var(--color2)",
      "var(--color3)",
      "var(--color5)",
    ];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.style.position = "absolute";
      particle.style.width = "4px";
      particle.style.height = "4px";
      particle.style.borderRadius = "50%";
      particle.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      particle.style.left = posX + "px";
      particle.style.top = posY + "px";

      fireworkContainer.appendChild(particle);

      // Animate the particle
      const angle = Math.random() * Math.PI * 2;
      const distance = 30 + Math.random() * 50;
      const destX = posX + Math.cos(angle) * distance;
      const destY = posY + Math.sin(angle) * distance;

      gsap.to(particle, {
        x: destX - posX,
        y: destY - posY,
        opacity: 0,
        duration: 0.8 + Math.random() * 0.5,
        ease: "power2.out",
        onComplete: () => {
          if (particle.parentNode === fireworkContainer) {
            fireworkContainer.removeChild(particle);
          }

          // Remove container when all particles are gone
          if (fireworkContainer.childElementCount === 0) {
            copyrightSection.removeChild(fireworkContainer);
          }
        },
      });
    }
  }
});
// safety page safetytips section gsap
// Safety Tips Section GSAP Animations
document.addEventListener("DOMContentLoaded", function () {
  // Register ScrollTrigger plugin if not already registered
  gsap.registerPlugin(ScrollTrigger);

  // Initialize animations
  initSafetyGuidelinesAnimations();
});

function initSafetyGuidelinesAnimations() {
  // Animate the header section
  gsap.from(".safety-guidelines-header", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".safety-guidelines",
      start: "top 80%",
    },
  });

  // Animate the divider
  gsap.from(".safety-guidelines-divider", {
    width: 0,
    duration: 1.2,
    delay: 0.3,
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: ".safety-guidelines",
      start: "top 80%",
    },
  });

  gsap.from(".safety-guidelines-divider-icon", {
    scale: 0,
    rotation: 180,
    duration: 1,
    delay: 0.8,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".safety-guidelines",
      start: "top 80%",
    },
  });

  // Animate the Best Practices column
  gsap.from(".safety-guidelines-column-practices", {
    x: -50,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".safety-guidelines-column-practices",
      start: "top 80%",
    },
  });

  // Animate the Safety Warnings column
  gsap.from(".safety-guidelines-column-warnings", {
    x: 50,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".safety-guidelines-column-warnings",
      start: "top 80%",
    },
  });

  // Animate the Best Practices cards
  gsap.from(".safety-guidelines-card-practice", {
    y: 30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".safety-guidelines-column-practices",
      start: "top 70%",
    },
  });

  // Animate the Safety Warnings cards
  gsap.from(".safety-guidelines-card-warning", {
    y: 30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".safety-guidelines-column-warnings",
      start: "top 70%",
    },
  });

  // Animate the CTA section
  gsap.from(".safety-guidelines-cta", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".safety-guidelines-cta",
      start: "top 90%",
    },
  });

  // Add hover animations for cards - no need for ScrollTrigger
  const practiceCards = document.querySelectorAll(
    ".safety-guidelines-card-practice"
  );
  practiceCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card.querySelector(".safety-guidelines-card-icon"), {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card.querySelector(".safety-guidelines-card-icon"), {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  const warningCards = document.querySelectorAll(
    ".safety-guidelines-card-warning"
  );
  warningCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card.querySelector(".safety-guidelines-card-icon"), {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card.querySelector(".safety-guidelines-card-icon"), {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  // Add a subtle float animation to the CTA button
  gsap.to(".safety-guidelines-btn", {
    y: "-5px",
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
}
// contact page GSAP
// Contact Section GSAP Animations
// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const contactSection = document.querySelector(".fireworks-contact");
  if (!contactSection) {
    console.warn("contact section not found!");
    return;
  }
  // Register ScrollTrigger and SplitText plugins
  gsap.registerPlugin(ScrollTrigger, SplitText);

  // Initialize animations once everything is loaded
  // This ensures all elements have their proper dimensions
  window.addEventListener("load", initAnimations);

  function initAnimations() {
    // Animate header elements with SplitText
    const titleSplit = new SplitText(".fireworks-contact-title", {
      type: "words,chars",
    });
    const subtitleSplit = new SplitText(".fireworks-contact-subtitle", {
      type: "lines",
    });

    // Header animations timeline
    const headerTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".fireworks-contact-header",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    headerTL
      .from(".fireworks-contact-badge", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      })
      .from(
        titleSplit.chars,
        {
          opacity: 0,
          y: 20,
          rotationX: -90,
          stagger: 0.02,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      .from(
        subtitleSplit.lines,
        {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.5"
      );

    // Card animations
    const cards = document.querySelectorAll(".fireworks-contact-card");

    cards.forEach((card, index) => {
      // Important: Add the animation classes initially to ensure they start hidden
      card.classList.add("animate-from-bottom");

      // Set up individual card animation with ScrollTrigger
      gsap.to(card, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.4)",
        delay: index * 0.1, // Stagger effect by index
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
          // Uncomment the next line for debugging ScrollTrigger
          // markers: true
        },
      });
    });

    // Map animation
    const mapWrapper = document.querySelector(".fireworks-contact-map-wrapper");

    // Add animation class to ensure it starts hidden
    mapWrapper.classList.add("animate-from-right");

    gsap.to(mapWrapper, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: mapWrapper,
        start: "top 85%",
        toggleActions: "play none none none",
        // Uncomment the next line for debugging ScrollTrigger
        // markers: true
      },
    });

    // CTA section animation
    const ctaSection = document.querySelector(".fireworks-contact-cta");

    // Add animation class
    ctaSection.classList.add("animate-scale");

    gsap.to(ctaSection, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ctaSection,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // Create particle effects in the CTA section
    createParticleEffects();
  }

  function createParticleEffects() {
    const ctaSection = document.querySelector(".fireworks-contact-cta");

    // Create a container for particles if not exists
    let particleContainer = document.querySelector(
      ".fireworks-particle-container"
    );
    if (!particleContainer) {
      particleContainer = document.createElement("div");
      particleContainer.className = "fireworks-particle-container";
      ctaSection.appendChild(particleContainer);
    }

    // Create particles
    for (let i = 0; i < 15; i++) {
      createParticle(particleContainer);
    }
  }

  function createParticle(container) {
    const particle = document.createElement("div");
    particle.className = "fireworks-particle";

    // Random size between 3px and 8px
    const size = Math.random() * 5 + 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;

    // Random color based on your variables
    const colors = [
      "var(--color1)",
      "var(--color2)",
      "var(--color3)",
      "var(--color5)",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.backgroundColor = randomColor;
    particle.style.borderRadius = "50%";
    particle.style.opacity = Math.random() * 0.6 + 0.2;

    // Add to container
    container.appendChild(particle);

    // Animate with GSAP
    animateParticle(particle);
  }

  function animateParticle(particle) {
    // Initial position
    gsap.set(particle, {
      x: 0,
      y: 0,
      scale: 0,
    });

    // Animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Remove and recreate particle when animation completes
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
          createParticle(
            document.querySelector(".fireworks-particle-container")
          );
        }
      },
    });

    tl.to(particle, {
      scale: 1,
      duration: 0.4,
      ease: "power1.out",
    }).to(
      particle,
      {
        x: (Math.random() - 0.5) * 100,
        y: (Math.random() - 0.5) * 100,
        opacity: 0,
        duration: Math.random() * 3 + 2,
        ease: "power1.out",
      },
      "-=0.2"
    );
  }

  // Fallback to ensure elements are visible even if ScrollTrigger fails
  function ensureVisibility() {
    // Check if any cards or map are still invisible after scrolling
    const allHiddenElements = document.querySelectorAll(
      ".fireworks-contact-card, .fireworks-contact-map-wrapper, .fireworks-contact-cta"
    );

    allHiddenElements.forEach((el) => {
      // Get computed style to check if element is invisible
      const style = window.getComputedStyle(el);
      if (style.opacity === "0" || style.opacity === 0) {
        // Force visibility
        gsap.to(el, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 0.5,
        });
      }
    });
  }

  // Add scroll event listener to check visibility
  window.addEventListener("scroll", debounce(ensureVisibility, 500));

  // Utility function to limit how often the scroll check runs
  function debounce(func, wait) {
    let timeout;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    };
  }
});
// index welcome section
// Welcome Section GSAP Animations
document.addEventListener("DOMContentLoaded", function () {
  const welcomeSection = document.querySelector(".welcome-section");
  if (!welcomeSection) {
    console.warn("welcome section not found");
  } else {
    initWelcomeSectionAnimations();
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, SplitText, MotionPathPlugin);

    // Initialize the welcome section animations
  }
});

function initWelcomeSectionAnimations() {
  // Split text animations for title and subtitle
  const welcomeTitle = new SplitText(".welcome-section-title", {
    type: "chars, words",
  });
  const welcomeSubtitle = new SplitText(".welcome-section-subtitle", {
    type: "chars, words",
  });
  const welcomeDescription = new SplitText(".welcome-section-description", {
    type: "lines",
  });

  // Timeline for text animations
  const textTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".welcome-section",
      start: "top 80%",
      end: "bottom top",
      toggleActions: "play none none none",
    },
  });

  // Animate the title characters
  textTimeline.from(welcomeTitle.chars, {
    opacity: 0,
    y: 50,
    rotationX: -90,
    stagger: 0.02,
    duration: 0.8,
    ease: "back.out(1.7)",
  });

  // Animate the subtitle
  textTimeline.from(
    welcomeSubtitle.words,
    {
      opacity: 0,
      x: -50,
      duration: 0.6,
      stagger: 0.05,
      ease: "power2.out",
    },
    "-=0.3"
  );

  // Animate the description
  textTimeline.from(
    welcomeDescription.lines,
    {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.1,
      ease: "power1.out",
    },
    "-=0.2"
  );

  // Animate the buttons
  textTimeline.from(
    ".welcome-section-buttons .btn",
    {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    },
    "-=0.4"
  );

  // Firework sparks animation
  const sparksTimeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 0.5,
  });

  sparksTimeline
    .to(".welcome-section-spark", {
      opacity: 1,
      scale: 1.5,
      duration: 0.4,
      stagger: 0.2,
      ease: "power1.inOut",
    })
    .to(
      ".welcome-section-spark",
      {
        opacity: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power1.inOut",
      },
      "+=0.3"
    );

  // Firework explosions animation
  gsap.to(".welcome-section-explosion", {
    opacity: 0.8,
    scale: 1.5,
    duration: 2,
    stagger: 0.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  // Animate the main image with motion path
  const rocketPath = [
    { x: 0, y: 0 },
    { x: 20, y: -10 },
    { x: -20, y: 10 },
    { x: 0, y: 0 },
  ];

  gsap.to(".welcome-section-main-img", {
    duration: 4,
    scale: 2,
    motionPath: {
      path: rocketPath,
      curviness: 2,
    },
    ease: "power1.out",
    repeat: -1,
  });
  // welcome section btn
  gsap.to(".welcome-section-btn", {
    opacity: 1,
    duration: 4,
    rotate: 360,
    ease: "power3.inOut",
  });

  // Add hover effect for the firework animation
  const hoverAnimation = gsap.timeline({ paused: true });

  hoverAnimation
    .to(".welcome-section-visual-container", {
      duration: 0.3,
      scale: 1.05,
      ease: "power1.out",
    })
    .to(
      ".welcome-section-explosion",
      {
        duration: 0.4,
        opacity: 0.9,
        scale: 1.8,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.2"
    );

  // Add event listeners for hover effect
  const visualContainer = document.querySelector(
    ".welcome-section-visual-container"
  );

  visualContainer.addEventListener("mouseenter", () => {
    hoverAnimation.play();
  });

  visualContainer.addEventListener("mouseleave", () => {
    hoverAnimation.reverse();
  });

  // ScrollTrigger for parallax effect
  gsap.to(".welcome-section-decoration", {
    y: "30%",
    ease: "power1.in",
    scrollTrigger: {
      trigger: ".welcome-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}
// JavaScript with GSAP animations for Products Wheel Section
document.addEventListener("DOMContentLoaded", function () {
  // Check if GSAP is loaded
  if (typeof gsap === "undefined") {
    console.warn("GSAP is not loaded. Please include GSAP library.");
    return;
  }

  // Get all elements
  const elements = {
    productCards: document.querySelectorAll(".products-section-product-card"),
    wheelItems: document.querySelector(".products-section-wheel-items"),
    prevBtn: document.querySelector(".products-section-wheel-prev"),
    nextBtn: document.querySelector(".products-section-wheel-next"),
    modal: document.querySelector(".products-section-detail-modal"),
    modalImage: document.querySelector(".products-section-detail-image img"),
    modalTitle: document.querySelector(".products-section-detail-title"),
    modalDesc: document.querySelector(".products-section-detail-description"),
    modalSpecs: document.querySelector(".products-section-detail-specs"),
    modalPrice: document.querySelector(".products-section-detail-price"),
    modalClose: document.querySelector(".products-section-detail-close-btn"),
    buyNowBtn: document.querySelector(".products-section-detail-buy-now"),
    fireworksBg: document.querySelector(".fireworks-bg"),
  };

  // Validate essential elements exist
  const requiredElements = ["productCards", "wheelItems", "modal"];
  const missingElements = requiredElements.filter(
    (el) =>
      !elements[el] || (el === "productCards" && elements[el].length === 0)
  );

  if (missingElements.length > 0) {
    console.warn("Missing required elements:", missingElements);
    return;
  }

  // Animation variables
  let currentAngle = 0;
  let autoRotate = true;
  const rotationSpeed = 0.2;
  let animationId;
  let isModalOpen = false;
  const radius = calculateWheelRadius();
  let hoveredCard = null;

  // Initialize wheel positions
  function setupWheel() {
    const count = elements.productCards.length;
    const angleStep = (Math.PI * 2) / count;

    elements.productCards.forEach((card, index) => {
      const angle = angleStep * index;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      gsap.set(card, {
        x: x,
        y: y,
        rotationZ: angle * (180 / Math.PI), // Keep cards facing outward
        zIndex: 1, // Default z-index
      });

      card.dataset.index = index;
    });
  }

  function calculateWheelRadius() {
    if (window.innerWidth < 768) return 120;
    if (window.innerWidth < 992) return 180;
    return 220;
  }

  // Animation loop
  function animate() {
    if (autoRotate && !isModalOpen) {
      currentAngle += rotationSpeed * 0.01;
    }

    const count = elements.productCards.length;
    const angleStep = (Math.PI * 2) / count;

    elements.productCards.forEach((card, index) => {
      // Only update position if not currently hovered
      if (card !== hoveredCard) {
        const angle = angleStep * index + currentAngle;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        gsap.set(card, {
          x: x,
          y: y,
          rotationZ: angle * (180 / Math.PI),
        });
      }
    });

    animationId = requestAnimationFrame(animate);
  }

  // Setup card hover effects
  function setupCardHoverEffects() {
    elements.productCards.forEach((card) => {
      // Mouse enter - bring to front
      card.addEventListener("mouseenter", () => {
        // Reset previous hovered card z-index
        if (hoveredCard) {
          gsap.set(hoveredCard, { zIndex: 1, scale: 1, y: 0 });
        }

        // Set new hovered card
        hoveredCard = card;
        gsap.set(card, {
          zIndex: 100,
          scale: 1.05,
        });
      });

      // Mouse leave - reset
      card.addEventListener("mouseleave", () => {
        if (hoveredCard === card) {
          gsap.to(card, {
            zIndex: 1,
            scale: 1,
            y: 0,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
            duration: 0.3,
          });
          hoveredCard = null;
        }
      });
    });
  }

  // Create fireworks background animation - UPDATED FOR WHITE BG
  function createFireworksBackground() {
    if (!elements.fireworksBg) return;

    // Clear any existing elements
    elements.fireworksBg.innerHTML = "";

    // More vibrant colors for white background
    const colors = [
      "#FF0000", // Bright Red
      "#FF8C00", // Dark Orange
      "#FFD700", // Gold
      "#32CD32", // Lime Green
      "#1E90FF", // Dodger Blue
      "#9932CC", // Dark Orchid
    ];

    // Create more fireworks (25 instead of 18)
    for (let i = 0; i < 25; i++) {
      const firework = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      firework.setAttribute("r", "0");
      firework.setAttribute(
        "fill",
        colors[Math.floor(Math.random() * colors.length)]
      );
      elements.fireworksBg.appendChild(firework);

      // Start with shorter delay between fireworks
      animateFirework(firework, elements.fireworksBg, i * 0.3);
    }
  }

  function animateFirework(fw, svg, delay = 0) {
    const x = 100 + Math.random() * 1000;
    const y = 100 + Math.random() * 600;
    fw.setAttribute("cx", x);
    fw.setAttribute("cy", y);

    // More intense animation parameters
    const duration = 2 + Math.random() * 2; // Faster animations
    const color = [
      "#FF0000",
      "#FF8C00",
      "#FFD700",
      "#32CD32",
      "#1E90FF",
      "#9932CC",
    ][Math.floor(Math.random() * 6)];
    fw.setAttribute("fill", color);

    // More visible burst animation
    gsap.fromTo(
      fw,
      { attr: { r: 0 }, opacity: 0.8 }, // Higher starting opacity
      {
        attr: { r: 3 + Math.random() * 4 }, // Larger radius
        opacity: 0,
        duration: 0.4, // Slightly longer burst
        delay: delay,
        ease: "power2.out",
      }
    );

    // More particles (12 instead of 8) with higher opacity
    for (let p = 0; p < 12; p++) {
      const particle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      particle.setAttribute("r", "2"); // Slightly larger particles
      particle.setAttribute("fill", color);
      particle.setAttribute("cx", x);
      particle.setAttribute("cy", y);
      particle.setAttribute("opacity", "0.9"); // More visible
      svg.appendChild(particle);

      const angle = Math.random() * Math.PI * 2;
      const distance = 20 + Math.random() * 40; // Longer trails

      gsap.to(particle, {
        attr: {
          cx: x + Math.cos(angle) * distance,
          cy: y + Math.sin(angle) * distance,
        },
        opacity: 0,
        duration: duration * 0.7,
        delay: delay + 0.1, // Start sooner
        ease: "power2.out",
        onComplete: () => svg.removeChild(particle),
      });
    }

    // Repeat more frequently
    gsap.delayedCall(delay + duration + 1, () => {
      if (svg.contains(fw)) {
        animateFirework(fw, svg);
      }
    });
  }

  // Get product data safely
  function getProductData(card) {
    try {
      const front = card.querySelector(".products-section-product-card-front");
      const back = card.querySelector(".products-section-product-card-back");

      return {
        image: front?.querySelector("img")?.src || "",
        title:
          front?.querySelector(".products-section-product-title")
            ?.textContent || "",
        description:
          back?.querySelector(".products-section-product-description")
            ?.textContent || "",
        features: Array.from(
          back?.querySelectorAll(".products-section-product-features li") || []
        ).map((li) => li.textContent.trim()),
        price:
          back?.querySelector(".products-section-btn-buy-now")
            ?.previousElementSibling?.textContent || "",
      };
    } catch (error) {
      console.warn("Error getting product data:", error);
      return null;
    }
  }

  // Modal functions
  function openModal(product) {
    if (!product || !elements.modal) return;

    isModalOpen = true;
    autoRotate = false;

    if (elements.modalImage) elements.modalImage.src = product.image;
    if (elements.modalTitle) elements.modalTitle.textContent = product.title;
    if (elements.modalDesc)
      elements.modalDesc.textContent = product.description;
    if (elements.modalPrice) elements.modalPrice.textContent = product.price;

    if (elements.modalSpecs) {
      elements.modalSpecs.innerHTML = "";
      product.features.forEach((feature) => {
        const specItem = document.createElement("div");
        specItem.className = "products-section-detail-spec";
        specItem.innerHTML = `<i class="bi bi-check-circle"></i> ${feature}`;
        elements.modalSpecs.appendChild(specItem);
      });
    }

    elements.modal.classList.add("active");
  }

  function closeModal() {
    isModalOpen = false;
    autoRotate = true;
    elements.modal.classList.remove("active");
  }

  // Setup Buy Now button animations
  function setupBuyNowButton() {
    if (!elements.buyNowBtn) return;

    // Hover animation
    elements.buyNowBtn.addEventListener("mouseenter", () => {
      gsap.to(elements.buyNowBtn, {
        backgroundColor: "#feac00",
        y: -3,
        boxShadow: "0 6px 20px rgba(254, 172, 0, 0.4)",
        duration: 0.3,
      });
    });

    elements.buyNowBtn.addEventListener("mouseleave", () => {
      gsap.to(elements.buyNowBtn, {
        backgroundColor: "#06d001",
        y: 0,
        boxShadow: "0 4px 15px rgba(6, 208, 1, 0.3)",
        duration: 0.3,
      });
    });

    // Click animation
    elements.buyNowBtn.addEventListener("mousedown", () => {
      gsap.to(elements.buyNowBtn, {
        y: 1,
        duration: 0.1,
      });
    });

    elements.buyNowBtn.addEventListener("mouseup", () => {
      gsap.to(elements.buyNowBtn, {
        y: 0,
        duration: 0.1,
      });
    });

    // Ripple effect
    elements.buyNowBtn.addEventListener("click", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement("span");
      ripple.style.position = "absolute";
      ripple.style.width = "5px";
      ripple.style.height = "5px";
      ripple.style.backgroundColor = "rgba(255,255,255,0.5)";
      ripple.style.borderRadius = "50%";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.pointerEvents = "none";
      this.appendChild(ripple);

      gsap.to(ripple, {
        scale: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => ripple.remove(),
      });
    });
  }

  // Event listeners
  elements.productCards.forEach((card) => {
    card.addEventListener("click", () => {
      const product = getProductData(card);
      if (product) openModal(product);
    });
  });

  if (elements.modalClose) {
    elements.modalClose.addEventListener("click", closeModal);
  }

  if (elements.modal) {
    elements.modal.addEventListener("click", (e) => {
      if (e.target === elements.modal) closeModal();
    });
  }

  if (elements.prevBtn) {
    elements.prevBtn.addEventListener("click", () => {
      if (!isModalOpen) {
        autoRotate = false;
        currentAngle -= rotationSpeed;
        resetAutoRotate();
      }
    });
  }

  if (elements.nextBtn) {
    elements.nextBtn.addEventListener("click", () => {
      if (!isModalOpen) {
        autoRotate = false;
        currentAngle += rotationSpeed;
        resetAutoRotate();
      }
    });
  }

  // Helper functions
  let resetTimeout;
  function resetAutoRotate() {
    clearTimeout(resetTimeout);
    resetTimeout = setTimeout(() => {
      if (!isModalOpen) autoRotate = true;
    }, 2000);
  }

  function handleResize() {
    const newRadius = calculateWheelRadius();
    const count = elements.productCards.length;
    const angleStep = (Math.PI * 2) / count;

    elements.productCards.forEach((card, index) => {
      const angle = angleStep * index + currentAngle;
      const x = Math.cos(angle) * newRadius;
      const y = Math.sin(angle) * newRadius;

      gsap.set(card, { x, y });
    });
  }

  // Initialize
  setupWheel();
  animate();
  setupCardHoverEffects();
  setupBuyNowButton();
  createFireworksBackground();
  window.addEventListener("resize", () => {
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(handleResize, 250);
  });

  // Cleanup
  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener("resize", handleResize);
  };
});
// index parallax
document.addEventListener("DOMContentLoaded", function () {
  // Check if required elements exist
  const section = document.querySelector(".parallax-section");
  if (!section) {
    console.log("No .parallax-section found, skipping animations.");
    return;
  }

  // Check for GSAP
  if (typeof gsap === "undefined") {
    console.warn("GSAP not found");
    return;
  }

  // Register GSAP plugins
  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  } else {
    console.warn("ScrollTrigger plugin not found");
  }

  if (typeof SplitText !== "undefined") {
    gsap.registerPlugin(SplitText);
  } else {
    console.warn("SplitText plugin not found");
  }

  // Parallax background effect
  // Check and log SimpleParallax elements
  const images = document.querySelectorAll(".parallax-section-bg");
  console.log("parallax-img elements found:", images.length);

  if (images.length > 0) {
    try {
      new SimpleParallax(images, {
        scale: 1.5,
        delay: 5.0,
        transition: "cubic-bezier(0,0,0,1)",
        orientation: "up",
      });
      console.log("SimpleParallax initialized successfully");
    } catch (e) {
      console.warn("SimpleParallax initialization error:", e);
    }
  } else {
    console.warn("No .parallax-img elements found for SimpleParallax");
  }

  // Text animations
  const titleTop = section.querySelector(".parallax-section-title-top");
  const titleBottom = section.querySelector(".parallax-section-title-bottom");
  const buttons = section.querySelector(".parallax-section-buttons");

  // Create timeline for text animations
  let entranceTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
  });

  // Handle text animation with or without SplitText
  if (typeof SplitText !== "undefined") {
    try {
      // Use SplitText if available
      const splitTitleTop = new SplitText(titleTop, {
        type: "chars",
        position: "relative",
      });
      const splitTitleBottom = new SplitText(titleBottom, {
        type: "chars",
        position: "relative",
      });

      // Ensure proper display of characters
      gsap.set([splitTitleTop.chars, splitTitleBottom.chars], {
        display: "inline-block",
        whiteSpace: "pre",
      });

      entranceTimeline
        .from(splitTitleTop.chars, {
          y: 50,
          opacity: 0,
          stagger: 0.05,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          splitTitleBottom.chars,
          {
            y: 30,
            opacity: 0,
            stagger: 0.03,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          buttons,
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.3"
        );
    } catch (e) {
      console.warn("SplitText error:", e);
      // Fallback to simple animations without SplitText
      simpleFallbackAnimation();
    }
  } else {
    // Simple animation fallback without SplitText
    simpleFallbackAnimation();
  }

  // Fallback animation function
  function simpleFallbackAnimation() {
    entranceTimeline
      .from(titleTop, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        titleBottom,
        {
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        buttons,
        {
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.3"
      );
  }

  // Button animations
  const buttonElements = section.querySelectorAll(
    ".parallax-section-btn-primary, .parallax-section-btn-secondary"
  );

  // Subtle float animation on buttons
  if (buttonElements.length) {
    gsap.to(buttonElements, {
      y: -5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2,
    });
  }

  // Button hover effects
  buttonElements.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });
    });
  });
});
// index achievements
// GSAP initialization



// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const achievementsSection = document.querySelector(".our-achievements");
  if (!achievementsSection) {
    console.warn("index achievements section not found");
    return
  }
  gsap.registerPlugin(ScrollTrigger, SplitText, MotionPathPlugin);
  // Initialize Odometer
  const counter1 = new Odometer({
    el: document.getElementById("counter1"),
    value: 0,
    format: "(,ddd)",
    theme: "minimal",
  });

  const counter2 = new Odometer({
    el: document.getElementById("counter2"),
    value: 0,
    format: "(,ddd)",
    theme: "minimal",
  });

  const counter3 = new Odometer({
    el: document.getElementById("counter3"),
    value: 0,
    format: "(,ddd)",
    theme: "minimal",
  });

  const counter4 = new Odometer({
    el: document.getElementById("counter4"),
    value: 0,
    format: "(,ddd)",
    theme: "minimal",
  });

  // Split text for the heading animation
  const titleSplit = new SplitText(".our-achievements-title", {
    type: "chars, words",
    charsClass: "title-char",
    wordsClass: "title-word",
  });

  const subtitleSplit = new SplitText(".our-achievements-subtitle", {
    type: "lines",
    linesClass: "subtitle-line",
  });

  // GSAP animations with ScrollTrigger

  // Heading animation
  gsap.from(titleSplit.chars, {
    opacity: 0,
    y: 50,
    rotationX: -90,
    stagger: 0.02,
    duration: 0.8,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".our-achievements-heading",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(subtitleSplit.lines, {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.5,
    scrollTrigger: {
      trigger: ".our-achievements-heading",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Counter boxes animation
  gsap.from(".our-achievements-counter-box", {
    opacity: 0,
    y: 100,
    stagger: 0.1,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".our-achievements-counter-box",
      start: "top 85%",
      toggleActions: "play none none none",
      onEnter: () => {
        // Start counter animations when the boxes come into view
        setTimeout(() => {
          counter1.update(25); // Years of Excellence
          counter2.update(150); // Happy Customers (in thousands)
          counter3.update(45); // Retail Outlets
          counter4.update(500); // Products
        }, 300);
      },
    },
  });

  // Icon animations
  gsap.from(".our-achievements-icon i", {
    scale: 0,
    rotation: -180,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".our-achievements-counter-box",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  // Store all floating animations for reference
  const floatingAnimations = [];
  const counterBoxes = document.querySelectorAll(
    ".our-achievements-counter-box"
  );

  // Create and store floating animations
  function createFloatingAnimations() {
    counterBoxes.forEach((box, index) => {
      // Clear any existing animations first
      gsap.killTweensOf(box, { y: true });

      // Create new floating animation
      const anim = gsap.to(box, {
        y: "10px",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      });

      // Store the animation reference
      floatingAnimations[index] = anim;
    });
  }

  // Initialize floating animations
  createFloatingAnimations();

  // Enhanced hover effects for counter boxes
  counterBoxes.forEach((box, index) => {
    // Store the original background color
    const originalBgColor = window.getComputedStyle(box).backgroundColor;

    // Get the icon and title within this box
    const icon = box.querySelector(".our-achievements-icon i");
    const title = box.querySelector(".our-achievements-counter-title");
    const counter = box.querySelector(".our-achievements-counter");
    const text = box.querySelector(".our-achievements-counter-text");

    // Define different gradient backgrounds for each box
    const gradients = [
      `linear-gradient(135deg, rgba(203, 4, 4, 0.05) 0%, rgba(254, 172, 0, 0.15) 100%)`,
      `linear-gradient(135deg, rgba(254, 172, 0, 0.05) 0%, rgba(6, 208, 1, 0.15) 100%)`,
      `linear-gradient(135deg, rgba(6, 208, 1, 0.05) 0%, rgba(129, 28, 161, 0.15) 100%)`,
      `linear-gradient(135deg, rgba(129, 28, 161, 0.05) 0%, rgba(203, 4, 4, 0.15) 100%)`,
    ];

    // Define color schemes for each box on hover
    const colorSchemes = [
      { icon: "#811ca1", title: "#811ca1", text: "#333" }, // Red theme
      { icon: "#811ca1", title: "#811ca1", text: "#333" }, // Orange theme
      { icon: "#811ca1", title: "#812465", text: "#333" }, // Green theme
      { icon: "#811ca1", title: "#811ca1", text: "#333" }, // Purple theme
    ];

    // Create hover animation timelines (paused initially)
    const hoverTimeline = gsap.timeline({ paused: true });

    // Add animations to the timeline
    hoverTimeline
      .to(
        box,
        {
          background: gradients[index % gradients.length],
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
          duration: 0.3,
          ease: "power2.out",
        },
        0
      )
      .to(
        icon,
        {
          color: colorSchemes[index % colorSchemes.length].icon,
          scale: 1.2,
          rotation: "+=15",
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        0
      )
      .to(
        title,
        {
          color: colorSchemes[index % colorSchemes.length].title,
          y: -5,
          duration: 0.3,
          ease: "power2.out",
        },
        0
      )
      .to(
        counter,
        {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        },
        0
      )
      .to(
        text,
        {
          color: colorSchemes[index % colorSchemes.length].text,
          opacity: 0.9,
          duration: 0.3,
          ease: "power2.out",
        },
        0
      );

    // Add event listeners to play/reverse the timeline
    box.addEventListener("mouseenter", () => {
      // Pause the floating animation temporarily
      if (floatingAnimations[index]) {
        floatingAnimations[index].pause();
      }

      // Reset the y position to avoid jumping
      gsap.to(box, { y: 0, duration: 0.2, overwrite: true });

      // Play the hover animation
      hoverTimeline.play();

      // Create sparkle effect
      createSparkle(box);

      // Create ripple effect
      createRipple(box);

      // Bounce counter effect
      gsap.to(counter, {
        keyframes: [
          { scale: 1.1, duration: 0.15 },
          { scale: 1.05, duration: 0.15 },
        ],
        ease: "power2.inOut",
      });
    });

    box.addEventListener("mouseleave", () => {
      // Reverse the hover animation
      hoverTimeline.reverse();

      // Wait for hover animation to complete before restarting float
      hoverTimeline.eventCallback("onReverseComplete", () => {
        // Clear any existing floating animation on this box
        if (floatingAnimations[index]) {
          floatingAnimations[index].kill();
        }

        // Create a new floating animation for this box
        floatingAnimations[index] = gsap.to(box, {
          y: "60px",
          duration: 1.9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        });
      });
    });
  });

  // Sparkle effect function
  function createSparkle(element) {
    // Create 8 sparkle elements
    for (let i = 0; i < 8; i++) {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.position = "absolute";
      sparkle.style.width = "8px";
      sparkle.style.height = "8px";
      sparkle.style.borderRadius = "50%";

      // Alternate between colors based on index
      const colors = [
        "var(--color1)",
        "var(--color2)",
        "var(--color3)",
        "var(--color5)",
      ];
      sparkle.style.backgroundColor = colors[i % colors.length];
      sparkle.style.zIndex = "10";
      sparkle.style.opacity = "0";
      sparkle.style.pointerEvents = "none";

      element.appendChild(sparkle);

      // Random starting position within the element
      const xStart = Math.random() * element.offsetWidth;
      const yStart = Math.random() * element.offsetHeight;

      // Animation path
      gsap.set(sparkle, { x: xStart, y: yStart, opacity: 0 });

      gsap.to(sparkle, {
        duration: 1 + Math.random(),
        motionPath: {
          path: [
            { x: xStart, y: yStart },
            {
              x: xStart + (Math.random() * 60 - 30),
              y: yStart - (20 + Math.random() * 40),
            },
            {
              x: xStart + (Math.random() * 100 - 50),
              y: yStart - (50 + Math.random() * 60),
            },
          ],
          curviness: 2,
        },
        opacity: [0, 0.8, 0],
        scale: [0.5, 1, 0.5],
        ease: "power1.out",
        onComplete: () => sparkle.remove(),
      });
    }
  }

  // Ripple effect function
  function createRipple(element) {
    const ripple = document.createElement("div");
    ripple.className = "ripple";
    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.border = "2px solid var(--color1)";
    ripple.style.width = "20px";
    ripple.style.height = "20px";
    ripple.style.top = "50%";
    ripple.style.left = "50%";
    ripple.style.transform = "translate(-50%, -50%)";
    ripple.style.zIndex = "1";
    ripple.style.opacity = "1";
    ripple.style.pointerEvents = "none";

    element.appendChild(ripple);

    gsap.to(ripple, {
      duration: 1,
      scale: 5,
      opacity: 0,
      ease: "power2.out",
      onComplete: () => ripple.remove(),
    });
  }

  // 3D tilt effect for counter boxes
  counterBoxes.forEach((box) => {
    box.addEventListener("mousemove", (e) => {
      const boxRect = box.getBoundingClientRect();
      const boxCenterX = boxRect.left + boxRect.width / 2;
      const boxCenterY = boxRect.top + boxRect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calculate distance from center in percentage (-50 to 50)
      const offsetX = ((mouseX - boxCenterX) / boxRect.width) * 100;
      const offsetY = ((mouseY - boxCenterY) / boxRect.height) * 100;

      // Limit tilt to a small amount (5 degrees max)
      const tiltX = offsetY * 0.1; // Inverse for natural tilt
      const tiltY = offsetX * -0.1; // Inverse for natural tilt

      // Apply the tilt
      gsap.to(box, {
        rotationX: tiltX,
        rotationY: tiltY,
        duration: 0.5,
        ease: "power2.out",
        transformPerspective: 1000,
        transformOrigin: "center center",
      });
    });

    // Reset tilt when mouse leaves
    box.addEventListener("mouseleave", () => {
      gsap.to(box, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  });

  // Rotating shine effect on counter boxes
  counterBoxes.forEach((box) => {
    // Create a shine overlay
    const shine = document.createElement("div");
    shine.className = "shine-effect";
    shine.style.position = "absolute";
    shine.style.top = "0";
    shine.style.left = "-100%";
    shine.style.width = "50%";
    shine.style.height = "100%";
    shine.style.background =
      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)";
    shine.style.transform = "skewX(-25deg)";
    shine.style.zIndex = "2";
    shine.style.opacity = "0";
    shine.style.pointerEvents = "none";

    box.style.position = "relative";
    box.style.overflow = "hidden";
    box.appendChild(shine);

    box.addEventListener("mouseenter", () => {
      gsap.fromTo(
        shine,
        { left: "-100%", opacity: 0.5 },
        {
          left: "150%",
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(shine, { opacity: 0 });
          },
        }
      );
    });
  });

  // Handle window resize to ensure animations continue working properly
  window.addEventListener("resize", () => {
    // Recreate floating animations if window is resized
    createFloatingAnimations();
  });
});
// index safety
// index-safety Animation Script
document.addEventListener("DOMContentLoaded", function () {
  // Ensure the section exists
  const safetySection = document.querySelector(".index-safety");
  if (!safetySection) {
    console.warn("index-safety section not found.");
    return;
  }

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger, SplitText, MotionPathPlugin);

  // Cache Selectors
  const safetyTitle = document.querySelector(".index-safety-title");
  const safetyFeatures = gsap.utils.toArray(".index-safety-feature");
  const safetyBadge = document.querySelector(".index-safety-badge");
  const safetySubtitle = document.querySelector(".index-safety-subtitle");
  const safetyImage = document.querySelector(".index-safety-image");
  const cta = document.querySelector(".index-safety-cta");
  const ctaText = document.querySelector(".index-safety-cta-text");
  const ctaIcon = document.querySelector(".index-safety-cta-icon");
  const highlight = document.querySelector(".index-safety-title-highlight");
  const safetySVG = document.querySelector(".index-safety-pattern");
  const safetyPath = document.querySelector("#safetyPath");

  const animateNeonStripe = () => {
    // Get the height of the section
    const sectionHeight = document.querySelector(".index-safety").offsetHeight;

    // Generate random start and end positions within the section height
    const startY = Math.random() * sectionHeight;
    const endY = Math.random() * sectionHeight;

    // Set the initial position of the stripe
    gsap.set(".neon-stripe", {
      top: startY,
      left: '-100%'
    });

    // Animate the stripe
    gsap.to(".neon-stripe", {
      left: '100%',
      top: endY,
      duration: 5,
      ease: "power1.inOut",
      onComplete: animateNeonStripe // Recursively call for infinite animation
    });
  };

  // Start the animation
  animateNeonStripe();

  // === Subtitle Animation ===
  gsap.fromTo(
    safetySubtitle,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: safetySubtitle,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    }
  );

  // === Title Animation with SplitText ===
  if (safetyTitle) {
    const splitTitle = new SplitText(safetyTitle, {
      type: "words",
      linesClass: "index-safety-title-line",
    });

    gsap.from(splitTitle.words, {
      duration: 1.2,
      y: "100%",
      opacity: 0,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: safetyTitle,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Animate the highlight underline
    gsap.to(highlight, {
      "--scale": "1",
      duration: 0.6,
      scrollTrigger: {
        trigger: highlight,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }

  // === Feature Items Animation ===
  safetyFeatures.forEach((feature, index) => {
    gsap.fromTo(
      feature,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: feature,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // === Badge Animation ===
  gsap.fromTo(
    safetyBadge,
    { y: 20, rotation: 10, opacity: 0 },
    {
      y: 0,
      rotation: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.5,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: safetyBadge,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );

  // === Image Animation ===
  gsap.from(safetyImage, {
    scale: 0.9,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: safetyImage,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // === CTA button animation ===
  gsap.from([ctaText, ctaIcon], {
    x: 0,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.8,
    scrollTrigger: {
      trigger: cta,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // === CTA Hover Animations ===
  cta.addEventListener("mouseenter", () => {
    gsap.to(ctaText, { x: 5, duration: 0.3 });
    gsap.to(ctaIcon, { x: 5, duration: 0.3 });
  });

  cta.addEventListener("mouseleave", () => {
    gsap.to(ctaText, { x: 0, duration: 0.3 });
    gsap.to(ctaIcon, { x: 0, duration: 0.3 });
  });
});

// index cta section
// document.addEventListener('DOMContentLoaded', function() {
//   const indexCTA = document.querySelector(".indexcta-section");
//   if (!indexCTA) {
//     console.warn("Index CTA Section not found");
//     return;
//   }
  
//   // Register GSAP plugins
//   gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, SplitText);
  
//   // Refresh ScrollTrigger after all elements are created
//   const refreshScrollTrigger = () => {
//     ScrollTrigger.refresh();
//   };

//   // Create SVG motion path for floating elements
//   const createSVGMotionPath = () => {
//     const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//     svg.classList.add("svg-motion-path");
//     svg.setAttribute("width", "100%");
//     svg.setAttribute("height", "100%");
//     svg.style.position = "absolute";
//     svg.style.top = "0";
//     svg.style.left = "0";
//     svg.style.pointerEvents = "none";
//     svg.style.zIndex = "0"; // Ensure it's behind content
    
//     // Create paths
//     const paths = [
//       `<path id="motionPath1" d="M100,100 C200,50 300,150 400,100 S500,50 600,100" fill="none" stroke="none" />`,
//       `<path id="motionPath2" d="M100,300 C200,200 300,400 400,300 S500,200 600,300" fill="none" stroke="none" />`,
//       `<path id="motionPath3" d="M500,100 C400,150 300,50 200,100 S100,150 0,100" fill="none" stroke="none" />`
//     ];
    
//     svg.innerHTML = paths.join('');
//     document.querySelector('.indexcta-section').appendChild(svg);
//   };
  
//   createSVGMotionPath();
  
//   // Create particles
//   const createParticles = () => {
//     const container = document.querySelector('.indexcta-section');
//     const colors = ['var(--color1)', 'var(--color2)', 'var(--color3)', 'var(--color5)'];
    
//     // Ensure container has proper positioning for absolute children
//     if (window.getComputedStyle(container).position === 'static') {
//       container.style.position = 'relative';
//     }
    
//     for (let i = 0; i < 20; i++) {
//       const particle = document.createElement('div');
//       particle.classList.add('indexcta-particle');
      
//       const size = Math.random() * 8 + 3;
//       particle.style.width = `${size}px`;
//       particle.style.height = `${size}px`;
//       particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//       particle.style.filter = 'blur(1px)';
//       particle.style.position = 'absolute';
//       particle.style.borderRadius = '50%';
//       particle.style.zIndex = '1'; // Ensure particles are above the background
      
//       // Random positions
//       const xPos = Math.random() * 100;
//       const yPos = Math.random() * 100;
      
//       gsap.set(particle, {
//         x: `${xPos}%`,
//         y: `${yPos}%`,
//         opacity: 0.7, // Start with some opacity
//       });
      
//       container.appendChild(particle);
      
//       // Animate each particle
//       const duration = Math.random() * 15 + 15;
      
//       gsap.to(particle, {
//         opacity: () => Math.random() * 0.5 + 0.1,
//         duration: duration,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//       });
      
//       gsap.to(particle, {
//         y: `${yPos - 30 - Math.random() * 40}%`,
//         duration: duration,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//       });
      
//       gsap.to(particle, {
//         x: `${xPos + (Math.random() * 20 - 10)}%`,
//         duration: duration,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//       });
//     }
    
//     refreshScrollTrigger();
//   };
  
//   // Split text animation for title
//   const createTextAnimations = () => {
//     // Split the title text
//     const titleSplit = new SplitText('.indexcta-section .indexcta-title', {
//       type: "chars, words",
//       charsClass: "indexcta-title-char",
//       wordsClass: "indexcta-title-word"
//     });
    
//     // Set initial state
//     gsap.set(titleSplit.chars, {
//       opacity: 0,
//       y: 50,
//       rotationX: -90
//     });
    
//     gsap.set('.indexcta-section .indexcta-subtitle, .indexcta-section .indexcta-text', {
//       opacity: 0,
//       y: 20
//     });
    
//     // Create animation timeline
//     const textTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.indexcta-section',
//         start: 'top 70%',
//         end: 'bottom 20%',
//         // scrub: 1, // Makes animation smooth with scroll
//         toggleActions: 'play none none none',
//         markers: false // Set to true for debugging
//       }
//     });
    
//     // Animate title chars
//     textTl.to(titleSplit.chars, {
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       stagger: {
//         each: 0.03,
//         from: "random"
//       },
//       duration: 0.8,
//       ease: "back.out(1.7)"
//     });
    
//     // Animate subtitle and text
//     textTl.to('.indexcta-section .indexcta-subtitle', {
//       opacity: 1,
//       y: 0,
//       duration: 0.7,
//       ease: "power2.out"
//     }, "-=0.4");
    
//     textTl.to('.indexcta-section .indexcta-text', {
//       opacity: 1,
//       y: 0,
//       duration: 0.7,
//       ease: "power2.out"
//     }, "-=0.5");
    
//     return textTl;
//   };
  
//   // Animate contact items
//   const animateContactItems = () => {
//     const contactItems = document.querySelectorAll('.indexcta-section .indexcta-contact-item');
    
//     // Set initial state
//     gsap.set(contactItems, {
//       opacity: 0,
//       x: -30
//     });
    
//     const contactTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.indexcta-section .indexcta-contact-wrapper',
//         start: 'top 80%',
//         end: 'bottom 20%',
//         // scrub: 0.5, // Makes animation smooth with scroll
//         toggleActions: 'play none none none',
//         markers: false // Set to true for debugging
//       }
//     });
    
//     contactItems.forEach((item, index) => {
//       contactTl.to(item, {
//         opacity: 1,
//         x: 0,
//         duration: 0.7,
//         ease: "power3.out"
//       }, index * 0.15);
      
//       // Add hover animation for icons
//       const icon = item.querySelector('.indexcta-icon');
//       const iconWrapper = item.querySelector('.indexcta-icon-wrapper');
      
//       if (icon && iconWrapper) {
//         item.addEventListener('mouseenter', () => {
//           gsap.to(icon, {
//             scale: 1.2,
//             rotate: 15,
//             duration: 0.3,
//             ease: "back.out(2)"
//           });
          
//           gsap.to(iconWrapper, {
//             boxShadow: '0 15px 25px rgba(203, 4, 4, 0.35)',
//             duration: 0.3
//           });
//         });
        
//         item.addEventListener('mouseleave', () => {
//           gsap.to(icon, {
//             scale: 1,
//             rotate: 0,
//             duration: 0.3,
//             ease: "power1.out"
//           });
          
//           gsap.to(iconWrapper, {
//             boxShadow: '0 8px 20px rgba(203, 4, 4, 0.2)',
//             duration: 0.3
//           });
//         });
//       }
//     });
    
//     return contactTl;
//   };
  
//   // Animate CTA button
//   const animateButton = () => {
//     const btn = document.querySelector('.indexcta-section .indexcta-btn');
//     if (!btn) return null;
    
//     // Set initial state
//     gsap.set(btn, {
//       opacity: 0,
//       y: 20
//     });
    
//     const btnTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.indexcta-section .indexcta-btn',
//         start: 'top 90%',
//         scrub: 0.5, // Makes animation smooth with scroll
//         toggleActions: 'play none none none',
//         markers: false // Set to true for debugging
//       }
//     });
    
//     btnTl.to(btn, {
//       opacity: 1,
//       y: 0,
//       duration: 0.8,
//       ease: "elastic.out(1, 0.5)"
//     });
    
//     // Add hover animation for button shine effect
//     btn.addEventListener('mouseenter', () => {
//       gsap.fromTo(btn, 
//         { backgroundPosition: '0% 50%' },
//         { 
//           backgroundPosition: '100% 50%',
//           duration: 0.5,
//           ease: "power1.out"
//         }
//       );
//     });
    
//     return btnTl;
//   };
  
//   // Animate image container and sparkles
//   const animateImageSection = () => {
//     const imgContainer = document.querySelector('.indexcta-section .indexcta-image-container');
//     if (!imgContainer) return null;
    
//     // Set initial state
//     gsap.set(imgContainer, {
//       opacity: 0,
//       y: 50
//     });
    
//     const sparkles = [
//       {el: '.indexcta-section .indexcta-sparkle-1', path: '#motionPath1'},
//       {el: '.indexcta-section .indexcta-sparkle-2', path: '#motionPath2'},
//       {el: '.indexcta-section .indexcta-sparkle-3', path: '#motionPath3'}
//     ];
    
//     sparkles.forEach(sparkle => {
//       gsap.set(sparkle.el, {
//         opacity: 0
//       });
//     });
    
//     const imgTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.indexcta-section .indexcta-image-container',
//         start: 'top 80%',
//         end: 'bottom 20%',
//         // scrub: 0.5, // Makes animation smooth with scroll
//         toggleActions: 'play none none reverse',
//         markers: false // Set to true for debugging
//       }
//     });
    
//     // Animate image container
//     imgTl.to(imgContainer, {
//       opacity: 1,
//       y: 0,
//       duration: 1,
//       ease: "power2.out"
//     });
//     (".index-cta-image").to(imgContainer, {
//       opacity: 1,
//       y: 0,
//       duration: 1,
//       ease: "power2.out"
//     });
    
    
//     // Animate sparkles with MotionPathPlugin
//     sparkles.forEach((sparkle, i) => {
//       imgTl.to(sparkle.el, {
//         opacity: 1,
//         duration: 0.5,
//         delay: i * 0.2
//       }, "-=0.3");
      
//       gsap.to(sparkle.el, {
//         motionPath: {
//           path: sparkle.path,
//           align: sparkle.path,
//           alignOrigin: [0.5, 0.5],
//           autoRotate: true
//         },
//         duration: 8 + i * 2,
//         repeat: -1,
//         ease: "none",
//         delay: i * 0.5
//       });
//     });
    
//     // Add parallax effect to image
//     ScrollTrigger.create({
//       trigger: '.indexcta-section',
//       start: 'top bottom',
//       end: 'bottom top',
//       scrub: 1,
//       onUpdate: (self) => {
//         const progress = self.progress;
//         gsap.to('.indexcta-section .indexcta-image', {
//           y: -30 * progress,
//           ease: "none"
//         });
//       }
//     });
    
//     return imgTl;
//   };
  
//   // Initialize all animations
//   const initAnimations = () => {
//     createParticles();
//     const textTimeline = createTextAnimations();
//     const contactTimeline = animateContactItems();
//     const buttonTimeline = animateButton();
//     const imageTimeline = animateImageSection();
    
//     // Refresh ScrollTrigger after all animations are set up
//     ScrollTrigger.refresh();
    
//     // Handle resize events
//     window.addEventListener('resize', () => {
//       ScrollTrigger.refresh();
//     });
//   };
  
//   // Run animations when the page is loaded
//   initAnimations();
// });
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded event fired - starting CTA section animations');

  const indexCTA = document.querySelector(".indexcta-section");
  if (!indexCTA) {
    console.warn("❌ Index CTA Section not found - aborting animations");
    return;
  }
  console.log("✅ Found index CTA section:", indexCTA);

  // Register GSAP plugins
  try {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, SplitText);
    console.log("✅ GSAP plugins registered successfully");
  } catch (e) {
    console.error("❌ Failed to register GSAP plugins:", e);
    return;
  }

  // Refresh ScrollTrigger after all elements are created
  const refreshScrollTrigger = () => {
    console.log("🔄 Refreshing ScrollTrigger");
    ScrollTrigger.refresh();
  };

  // Create SVG motion path for floating elements
  const createSVGMotionPath = () => {
    console.log("🛠 Creating SVG motion paths");
    try {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.classList.add("svg-motion-path");
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "100%");
      svg.style.position = "absolute";
      svg.style.top = "0";
      svg.style.left = "0";
      svg.style.pointerEvents = "none";
      svg.style.zIndex = "0";
      
      const paths = [
        `<path id="motionPath1" d="M100,100 C200,50 300,150 400,100 S500,50 600,100" fill="none" stroke="none" />`,
        `<path id="motionPath2" d="M100,300 C200,200 300,400 400,300 S500,200 600,300" fill="none" stroke="none" />`,
        `<path id="motionPath3" d="M500,100 C400,150 300,50 200,100 S100,150 0,100" fill="none" stroke="none" />`
      ];
      
      svg.innerHTML = paths.join('');
      document.querySelector('.indexcta-section').appendChild(svg);
      console.log("✅ SVG motion paths created successfully");
    } catch (e) {
      console.error("❌ Failed to create SVG motion paths:", e);
    }
  };
  
  createSVGMotionPath();
  
  // Create particles
  const createParticles = () => {
    console.log("🛠 Creating particles");
    try {
      const container = document.querySelector('.indexcta-section');
      const colors = ['var(--color1)', 'var(--color2)', 'var(--color3)', 'var(--color5)'];
      
      if (window.getComputedStyle(container).position === 'static') {
        container.style.position = 'relative';
        console.log("📌 Set container position to relative");
      }
      
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('indexcta-particle');
        
        const size = Math.random() * 8 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.filter = 'blur(1px)';
        particle.style.position = 'absolute';
        particle.style.borderRadius = '50%';
        particle.style.zIndex = '1';
        
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        
        gsap.set(particle, {
          x: `${xPos}%`,
          y: `${yPos}%`,
          opacity: 0.7,
        });
        
        container.appendChild(particle);
        
        const duration = Math.random() * 15 + 15;
        
        gsap.to(particle, {
          opacity: () => Math.random() * 0.5 + 0.1,
          duration: duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
        
        gsap.to(particle, {
          y: `${yPos - 30 - Math.random() * 40}%`,
          duration: duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
        
        gsap.to(particle, {
          x: `${xPos + (Math.random() * 20 - 10)}%`,
          duration: duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
      
      console.log(`✅ Created ${20} particles successfully`);
      refreshScrollTrigger();
    } catch (e) {
      console.error("❌ Failed to create particles:", e);
    }
  };
  
  // Split text animation for title
  const createTextAnimations = () => {
    console.log("🛠 Creating text animations");
    try {
      const titleElement = document.querySelector('.indexcta-section .indexcta-title');
      if (!titleElement) {
        console.warn("⚠️ Title element not found for text animation");
        return null;
      }
      
      const titleSplit = new SplitText(titleElement, {
        type: "chars, words",
        charsClass: "indexcta-title-char",
        wordsClass: "indexcta-title-word"
      });
      
      console.log(`✅ Split text into ${titleSplit.chars.length} characters`);
      
      gsap.set(titleSplit.chars, {
        opacity: 0,
        y: 50,
        rotationX: -90
      });
      
      const subtitleElements = document.querySelectorAll('.indexcta-section .indexcta-subtitle, .indexcta-section .indexcta-text');
      gsap.set(subtitleElements, {
        opacity: 0,
        y: 20
      });
      
      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.indexcta-section',
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
          markers: false,
          onEnter: () => console.log("🎬 Text animation timeline entered"),
          onLeave: () => console.log("🏁 Text animation timeline left"),
          onEnterBack: () => console.log("🔙 Text animation timeline entered back"),
          onLeaveBack: () => console.log("🔚 Text animation timeline left back")
        }
      });
      
      textTl.to(titleSplit.chars, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        stagger: {
          each: 0.03,
          from: "random"
        },
        duration: 0.8,
        ease: "back.out(1.7)",
        onStart: () => console.log("✨ Starting title character animation")
      });
      
      textTl.to('.indexcta-section .indexcta-subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        onStart: () => console.log("✨ Starting subtitle animation")
      }, "-=0.4");
      
      textTl.to('.indexcta-section .indexcta-text', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        onStart: () => console.log("✨ Starting text animation")
      }, "-=0.5");
      
      console.log("✅ Text animations timeline created successfully");
      return textTl;
    } catch (e) {
      console.error("❌ Failed to create text animations:", e);
      return null;
    }
  };
  
  // Animate contact items
  const animateContactItems = () => {
    console.log("🛠 Animating contact items");
    try {
      const contactItems = document.querySelectorAll('.indexcta-section .indexcta-contact-item');
      console.log(`Found ${contactItems.length} contact items to animate`);
      
      if (contactItems.length === 0) {
        console.warn("⚠️ No contact items found to animate");
        return null;
      }
      
      gsap.set(contactItems, {
        opacity: 0,
        x: -30
      });
      
      const contactTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.indexcta-section .indexcta-contact-wrapper',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
          markers: false,
          onEnter: () => console.log("🎬 Contact items timeline entered"),
          onLeave: () => console.log("🏁 Contact items timeline left")
        }
      });
      
      contactItems.forEach((item, index) => {
        contactTl.to(item, {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          onStart: () => console.log(`✨ Animating contact item ${index + 1}`)
        }, index * 0.15);
        
        const icon = item.querySelector('.indexcta-icon');
        const iconWrapper = item.querySelector('.indexcta-icon-wrapper');
        
        if (icon && iconWrapper) {
          item.addEventListener('mouseenter', () => {
            console.log(`🖱 Hovering contact item ${index + 1}`);
            gsap.to(icon, {
              scale: 1.2,
              rotate: 15,
              duration: 0.3,
              ease: "back.out(2)"
            });
            
            gsap.to(iconWrapper, {
              boxShadow: '0 15px 25px rgba(203, 4, 4, 0.35)',
              duration: 0.3
            });
          });
          
          item.addEventListener('mouseleave', () => {
            gsap.to(icon, {
              scale: 1,
              rotate: 0,
              duration: 0.3,
              ease: "power1.out"
            });
            
            gsap.to(iconWrapper, {
              boxShadow: '0 8px 20px rgba(203, 4, 4, 0.2)',
              duration: 0.3
            });
          });
        } else {
          console.warn(`⚠️ No icon found in contact item ${index + 1}`);
        }
      });
      
      console.log("✅ Contact items animation timeline created successfully");
      return contactTl;
    } catch (e) {
      console.error("❌ Failed to animate contact items:", e);
      return null;
    }
  };
  
  // Animate CTA button
  const animateButton = () => {
    console.log("🛠 Animating CTA button");
    try {
      const btn = document.querySelector('.indexcta-section .indexcta-btn');
      if (!btn) {
        console.warn("⚠️ CTA button not found");
        return null;
      }
      
      gsap.set(btn, {
        opacity: 0,
        y: 20
      });
      
      const btnTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.indexcta-section .indexcta-btn',
          start: 'top 90%',
          scrub: 0.5,
          toggleActions: 'play none none none',
          markers: false,
          onEnter: () => console.log("🎬 Button animation timeline entered")
        }
      });
      
      btnTl.to(btn, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        onStart: () => console.log("✨ Starting button animation")
      });
      
      btn.addEventListener('mouseenter', () => {
        console.log("🖱 Hovering CTA button");
        gsap.fromTo(btn, 
          { backgroundPosition: '0% 50%' },
          { 
            backgroundPosition: '100% 50%',
            duration: 0.5,
            ease: "power1.out"
          }
        );
      });
      
      console.log("✅ Button animation timeline created successfully");
      return btnTl;
    } catch (e) {
      console.error("❌ Failed to animate button:", e);
      return null;
    }
  };
  
  // Animate image container and sparkles
  const animateImageSection = () => {
    console.log("🛠 Animating image section");
    try {
      const imgContainer = document.querySelector('.indexcta-section .indexcta-image-container');
      if (!imgContainer) {
        console.warn("⚠️ Image container not found");
        return null;
      }
      
      gsap.set(imgContainer, {
        opacity: 0,
        y: 50
      });
      
      const sparkles = [
        {el: '.indexcta-section .indexcta-sparkle-1', path: '#motionPath1'},
        {el: '.indexcta-section .indexcta-sparkle-2', path: '#motionPath2'},
        {el: '.indexcta-section .indexcta-sparkle-3', path: '#motionPath3'}
      ];
      
      sparkles.forEach(sparkle => {
        const el = document.querySelector(sparkle.el);
        if (!el) {
          console.warn(`⚠️ Sparkle element not found: ${sparkle.el}`);
        } else {
          gsap.set(el, {
            opacity: 0
          });
        }
      });
      
      const imgTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.indexcta-section .indexcta-image-container',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          markers: false,
          onEnter: () => console.log("🎬 Image animation timeline entered")
        }
      });
      
      imgTl.to(imgContainer, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        onStart: () => console.log("✨ Starting image container animation")
      });
      
      // This line appears to be malformed - it's outside a gsap call
      // console.warn("⚠️ Found potentially malformed GSAP call: ('.index-cta-image').to(...)");
      
      sparkles.forEach((sparkle, i) => {
        const el = document.querySelector(sparkle.el);
        if (el) {
          imgTl.to(el, {
            opacity: 1,
            duration: 0.5,
            delay: i * 0.2,
            onStart: () => console.log(`✨ Starting sparkle ${i + 1} animation`)
          }, "-=0.3");
          
          gsap.to(el, {
            motionPath: {
              path: sparkle.path,
              align: sparkle.path,
              alignOrigin: [0.5, 0.5],
              autoRotate: true
            },
            duration: 8 + i * 2,
            repeat: -1,
            ease: "none",
            delay: i * 0.5,
            onStart: () => console.log(`🌀 Starting motion path for sparkle ${i + 1}`)
          });
        }
      });
      
      const imageElement = document.querySelector('.indexcta-section .indexcta-image');
      if (imageElement) {
        ScrollTrigger.create({
          trigger: '.indexcta-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to(imageElement, {
              y: -30 * progress,
              ease: "power1.inOut",
              rotate: 360,
            });
          },
          onToggle: (self) => console.log(`🖼 Image parallax ${self.isActive ? "activated" : "deactivated"}`)
        });
      } else {
        console.warn("⚠️ Image element not found for parallax effect");
      }
      
      console.log("✅ Image section animation timeline created successfully");
      return imgTl;
    } catch (e) {
      console.error("❌ Failed to animate image section:", e);
      return null;
    }
  };
  
  // Initialize all animations
  const initAnimations = () => {
    console.group("🚀 Initializing all animations");
    createParticles();
    const textTimeline = createTextAnimations();
    const contactTimeline = animateContactItems();
    const buttonTimeline = animateButton();
    const imageTimeline = animateImageSection();
    
    if (textTimeline) console.log("📜 Text timeline:", textTimeline);
    if (contactTimeline) console.log("📞 Contact timeline:", contactTimeline);
    if (buttonTimeline) console.log("🛎 Button timeline:", buttonTimeline);
    if (imageTimeline) console.log("🖼 Image timeline:", imageTimeline);
    
    ScrollTrigger.refresh();
    
    window.addEventListener('resize', () => {
      console.log("🔄 Window resized - refreshing ScrollTrigger");
      ScrollTrigger.refresh();
    });
    
    console.groupEnd();
  };
  
  // Run animations when the page is loaded
  console.log("🏁 Starting animation initialization");
  initAnimations(); // Note: This is misspelled - should be initAnimations()
});

// Error handling for the misspelled function
window.addEventListener('error', function(e) {
  console.warn("🛑 Global error caught:", e.message);
  console.warn("Error in:", e.filename, "line:", e.lineno);
});
// about page 1 st section GSAP

document.addEventListener("DOMContentLoaded", function() {
  const aboutFirstSection = document.querySelector(".fireworks-aboutus");
  if (!aboutFirstSection) {
    console.warn("about first section not found!")
    return
  }
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger, SplitText, MotionPathPlugin);
  
  // Initialize the about section animations
  initFireworksAboutUs();
  
  function initFireworksAboutUs() {
    const section = document.querySelector('.fireworks-aboutus');
    if (!section) return;
    
    // Create a timeline for the section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });
    
    // Animate heading with SplitText
    const heading = section.querySelector('.fireworks-aboutus-heading');
    const splitHeading = new SplitText(heading, {type: "chars, words"});
    
    tl.set(heading, {opacity: 1})
      .from(splitHeading.chars, {
        opacity: 0,
        y: 20,
        rotationX: -90,
        stagger: 0.03,
        duration: 0.8,
        ease: "back.out(2)",
      });
    
    // Animate underline
    tl.to('.fireworks-aboutus-heading-underline', {
      width: 80,
      marginTop: '30px',
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3");
    
    // Animate tagline
    tl.to('.fireworks-aboutus-tagline', {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power1.out"
    }, "-=0.2");
    
    // Animate paragraphs with stagger
    const paragraphs = section.querySelectorAll('.fireworks-aboutus-text p');
    tl.to(paragraphs, {
      opacity: 1,
      stagger: 0.2,
      duration: 0.8,
      ease: "power1.inOut"
    }, "-=0.2");
    
    // Animate stats
    tl.to('.fireworks-aboutus-stats', {
      opacity: 1,
      duration: 0.8,
      ease: "power1.inOut"
    }, "-=0.2");
    
    // Counter animation for stats
    const statNumbers = section.querySelectorAll('.fireworks-aboutus-stat-number');
    statNumbers.forEach(number => {
      const targetValue = number.textContent;
      const value = parseFloat(targetValue);
      const isPercentage = targetValue.includes('%');
      
      tl.from(number, {
        textContent: 0,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: isPercentage ? 1 : 5 },
        onUpdate: function() {
          if (isPercentage) {
            number.textContent = Math.round(parseFloat(number.textContent)) + '%';
          }
        }
      }, "-=1.8");
    });
    
    // Animate image
    tl.to('.fireworks-aboutus-image-wrapper', {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=1.8");
    
    // Animate feature items with stagger
    const featureItems = section.querySelectorAll('.fireworks-aboutus-feature-item');
    tl.to(featureItems, {
      opacity: 1,
      x: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(1.4)"
    }, "-=0.5");
    
    // Create spark animation with MotionPath
    const spark = section.querySelector('.fireworks-aboutus-spark');
    const sparkTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 60%",
        toggleActions: "play none none none",
        onEnter: () => sparkTl.restart()
      },
      repeat: -1,
      repeatDelay: 2
    });
    
    // Define a complex path for the spark to follow
    sparkTl.set(spark, {opacity: 0})
      .to(spark, {
        opacity: 1,
        duration: 0.2,
        ease: "power1.in"
      })
      .to(spark, {
        motionPath: {
          path: [
            {x: 0, y: 0},
            {x: 100, y: 50},
            {x: 200, y: -30},
            {x: 300, y: 80},
            {x: 400, y: 10},
            {x: 500, y: -50},
            {x: 600, y: 30}
          ],
          curviness: 2,
          autoRotate: true
        },
        duration: 4,
        ease: "power1.inOut"
      })
      .to(spark, {
        opacity: 0,
        duration: 0.3,
        ease: "power1.out"
      }, "-=0.3");
    
    // Add hover animations for stat items
    const statItems = section.querySelectorAll('.fireworks-aboutus-stat-item');
    statItems.forEach(item => {
      gsap.set(item, {clearProps: "all"});
      
      item.addEventListener('mouseenter', () => {
        gsap.to(item, {
          y: -5,
          backgroundColor: "rgba(203, 4, 4, 0.05)",
          duration: 0.3,
          ease: "power1.out"
        });
      });
      
      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          y: 0,
          backgroundColor: "transparent",
          duration: 0.3,
          ease: "power1.in"
        });
      });
    });
    
    // Add a "popping" effect for feature icons
    const featureIcons = section.querySelectorAll('.fireworks-aboutus-feature-icon');
    featureIcons.forEach(icon => {
      const iconTl = gsap.timeline({paused: true});
      
      iconTl.to(icon, {
        scale: 1.2,
        duration: 0.2,
        ease: "power1.out"
      })
      .to(icon, {
        scale: 1,
        duration: 0.2,
        ease: "bounce.out"
      });
      
      icon.parentElement.addEventListener('mouseenter', () => {
        iconTl.restart();
      });
    });
  }
});
// about second
// Make sure you've included the GSAP libraries (ScrollTrigger, etc.)

document.addEventListener("DOMContentLoaded", function() {
  // Initialize parallax section animations
  initFireworksContactParallax();
  
  function initFireworksContactParallax() {
    const section = document.querySelector('.fireworks-contact-parallax');
    if (!section) return;
    
    // Create a timeline for the section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });
    
    // Animate heading
    tl.to('.fireworks-contact-parallax-heading', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    });
    
    // Animate text
    tl.to('.fireworks-contact-parallax-text', {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4");
    
    // Animate button
    tl.to('.fireworks-contact-parallax-button-wrapper', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.4");
    
    // Create parallax effect
    gsap.to(".fireworks-contact-parallax", {
      backgroundPosition: "50% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".fireworks-contact-parallax",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
    
    // Create spark animations
    const sparks = document.querySelectorAll('.fireworks-contact-parallax-spark');
    sparks.forEach((spark, index) => {
      // Create random delay for each spark
      const delay = index * 0.5;
      
      // Create spark timeline
      const sparkTl = gsap.timeline({
        repeat: -1,
        repeatDelay: 3 + Math.random() * 2,
        delay: delay
      });
      
      // Define spark animation path using MotionPath
      sparkTl.set(spark, {
        scale: 0,
        opacity: 0
      })
      .to(spark, {
        scale: 1,
        opacity: 0.8,
        duration: 0.3,
        ease: "power1.in"
      })
      .to(spark, {
        motionPath: {
          path: [
            {x: 0, y: 0},
            {x: 50 + Math.random() * 100, y: -100 + Math.random() * 50},
            {x: 100 + Math.random() * 150, y: -200 + Math.random() * 100}
          ],
          curviness: 2
        },
        duration: 2 + Math.random() * 2,
        ease: "power1.inOut"
      }, "-=0.1")
      .to(spark, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power1.out"
      }, "-=0.5");
    });
    
    // Button hover animation
    const button = document.querySelector('.fireworks-contact-parallax-button');
    if (button) {
      button.addEventListener('mouseenter', () => {
        gsap.to(button.querySelector('i'), {
          x: 5,
          duration: 0.3,
          ease: "power1.out"
        });
      });
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button.querySelector('i'), {
          x: 0,
          duration: 0.3,
          ease: "power1.out"
        });
      });
    }
  }
});
// about page brands slider
// Initialize GSAP Plugins


// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  const brandsSection = document.querySelector(".brands-section")
  if(!brandsSection) {
    console.warn("brands section not found");
    return
  }
    // Hide all logos immediately to prevent flash
    const allLogos = document.querySelectorAll('.brands-section-logo img');
    gsap.set(allLogos, { opacity: 1, y: 0 });
    
    // Initialize the Brands Section
    initBrandsSection();
});

function initBrandsSection() {
  gsap.registerPlugin(ScrollTrigger, SplitText, MotionPathPlugin);
    const brandsSection = document.querySelector('.brands-section');
    if (!brandsSection) return;
    
    // Initialize ScrollTrigger animations first
    initScrollTrigger();
    
    // Listen for when initial GSAP animations complete before setting up Swiper
    document.addEventListener('gsap-brands-complete', function() {
        // Initialize Swiper only after scroll animations complete
        initSwiper();
        
        // Add 3D hover effect after all animations are complete
        setTimeout(() => {
            add3DHoverEffect();
        }, 500);
    });
}

function initSwiper() {
    // Initialize custom split text animations for each slide
    const slideElements = document.querySelectorAll('.brands-section-slide');
    const splitTexts = [];
    
    slideElements.forEach(slide => {
        // Get text elements
        const brandName = slide.querySelector('.brands-section-brand-name');
        const brandDesc = slide.querySelector('.brands-section-brand-desc');
        const logo = slide.querySelector('.brands-section-logo img');
        
        // Hide logo initially
        if (logo) {
            gsap.set(logo, { opacity: 1, y: 0 });
        }
        
        // Create split text instances and store references
        if (brandName && brandDesc) {
            const nameSplit = new SplitText(brandName, { type: "chars", charsClass: "brand-name-char" });
            const descSplit = new SplitText(brandDesc, { type: "words", wordsClass: "brand-desc-word" });
            splitTexts.push({ slide, nameSplit, descSplit });
            
            // Hide characters initially
            gsap.set(nameSplit.chars, { opacity: 0, y: 20 });
            gsap.set(descSplit.words, { opacity: 0, y: 10 });
        }
    });
    
    // Initialize Swiper with optimized settings
    const brandsSwiper = new Swiper('.brands-section-swiper', {
        // Custom swiper parameters
        effect: 'slide', // Changed from coverflow for better performance
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        initialSlide: 0,
        speed: 3000,
        loop: true,
        loopAdditionalSlides: 2,
        spaceBetween: 30,
        watchSlidesProgress: true, // Monitor slide progress for smoother transitions
        preventInteractionOnTransition: true, // Prevent user interaction during slide transitions
        autoplay: {
            delay: 500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        
        breakpoints: {
            // For mobile (xs)
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // For medium devices (md)
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // For large devices (lg) and larger (lg+)
            992: {
                slidesPerView: 3, // Reduced for better performance
                spaceBetween: 40
            }
        },
        pagination: {
            el: '.brands-section-pagination',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            renderBullet: function(index, className) {
                return '<span class="' + className + '"></span>';
            }
        },
        navigation: {
            nextEl: '.brands-section-next-btn',
            prevEl: '.brands-section-prev-btn',
        },
        on: {
            init: function() {
                // Animation on init with delay to avoid flickering
                setTimeout(() => {
                    animateActiveSlide(this.activeIndex);
                }, 100);
            },
            slideChangeTransitionEnd: function() {
                // Animation only after transition is complete
                animateActiveSlide(this.activeIndex);
            }
        }
    });
    
    // Animate pagination bullets after Swiper is initialized
    const paginationBullets = document.querySelectorAll('.brands-section-pagination .swiper-pagination-bullet');
    gsap.fromTo(paginationBullets, 
        { scale: 0, opacity: 0 },
        { 
            scale: 1, 
            opacity: 1, 
            duration: 0.5, 
            stagger: 0.05,
            ease: "back.out(1.7)",
            delay: 0.5,
            clearProps: "scale" // Clear scale after animation to prevent conflict
        }
    );
}

// Updated animation function with timeline cleanup
let currentTimeline = null; // Store current animation timeline

function animateActiveSlide(activeIndex) {
    // Kill previous timeline if it exists to prevent animation conflicts
    if (currentTimeline) {
        currentTimeline.kill();
    }
    
    // Get all slides
    const slides = document.querySelectorAll('.brands-section-slide');
    if (!slides[activeIndex]) return;
    
    // Get active slide elements
    const activeSlide = slides[activeIndex];
    const logo = activeSlide.querySelector('.brands-section-logo img');
    const brandNameChars = activeSlide.querySelectorAll('.brand-name-char');
    const brandDescWords = activeSlide.querySelectorAll('.brand-desc-word');
    
    // Reset all animations in all slides first
    slides.forEach(slide => {
        if (slide !== activeSlide) {
            const inactiveNameChars = slide.querySelectorAll('.brand-name-char');
            const inactiveDescWords = slide.querySelectorAll('.brand-desc-word');
            const inactiveLogo = slide.querySelector('.brands-section-logo img');
            
            gsap.set(inactiveNameChars, { clearProps: "all" });
            gsap.set(inactiveDescWords, { clearProps: "all" });
            
            // Set inactive slides to initial state
            gsap.set(inactiveNameChars, { opacity: 1, y: 20 });
            gsap.set(inactiveDescWords, { opacity: 1, y: 10 });
            if (inactiveLogo) {
                gsap.set(inactiveLogo, { opacity: 1, y: 10 });
            }
        }
    });
    
    // Create timeline for smooth sequencing
    currentTimeline = gsap.timeline({ 
        defaults: { ease: "power3.out" },
        onComplete: function() {
            // Clear unnecessary props after animation completes
            gsap.set([logo, brandNameChars, brandDescWords], { clearProps: "rotation" });
        }
    });
    
    // Logo animation with simplified motion path
    currentTimeline.fromTo(logo, 
        { 
            y: -20, 
            opacity: 0,
            rotation: -5,
            force3D: true // Enable hardware acceleration
        }, 
        {
            duration: 0.6,
            y: 0,
            opacity: 1,
            rotation: 0,
            ease: "power2.out",
            force3D: true
        }
    );
    
    // Brand name characters animation
    currentTimeline.fromTo(brandNameChars, 
        { 
            opacity: 0, 
            y: 20
        }, 
        {
            duration: 0.5,
            opacity: 1,
            y: 0,
            stagger: 0.02,
            force3D: true
        }, 
        "-=0.3"
    );
    
    // Brand description words animation
    currentTimeline.fromTo(brandDescWords, 
        { 
            opacity: 0, 
            y: 10
        }, 
        {
            duration: 0.5,
            opacity: 1,
            y: 0,
            stagger: 0.02,
            force3D: true
        }, 
        "-=0.2"
    );
    
    return currentTimeline;
}

function initScrollTrigger() {
    // Create main timeline for section entrance
    const mainTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.brands-section',
            start: "top 80%",
            once: true
        }
    });
    
    // Pre-hide all logos to ensure they're not visible before animation
    const allLogos = document.querySelectorAll('.brands-section-logo img');
    gsap.set(allLogos, { opacity: 0, y: -20 });
    
    // Animate section title
    const sectionTitle = document.querySelector('.brands-section-title');
    mainTimeline.fromTo(sectionTitle, 
        { 
            y: 50, 
            opacity: 0,
            force3D: true
        }, 
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            force3D: true
        }
    );
    
    // Animate section subtitle
    const sectionSubtitle = document.querySelector('.brands-section-subtitle');
    mainTimeline.fromTo(sectionSubtitle, 
        { 
            y: 30, 
            opacity: 0,
            force3D: true
        }, 
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            force3D: true
        }, 
        "-=0.5"
    );
    
    // Animate slider container
    const sliderContainer = document.querySelector('.brands-section-slider');
    mainTimeline.fromTo(sliderContainer, 
        { 
            y: 50, 
            opacity: 0,
            force3D: true
        }, 
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            force3D: true,
            clearProps: "transform" // Clear transform to prevent conflicts with Swiper
        }, 
        "-=0.4"
    );
    
    // Animate navigation buttons
    const navButtons = document.querySelectorAll('.brands-section-prev-btn, .brands-section-next-btn');
    mainTimeline.fromTo(navButtons, 
        { 
            scale: 0, 
            opacity: 0,
            force3D: true
        }, 
        {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            force3D: true,
            clearProps: "scale"
        }, 
        "-=0.5"
    );
    
    // Fire custom event to signal GSAP animations are complete
    mainTimeline.call(() => {
        document.dispatchEvent(new CustomEvent('gsap-brands-complete'));
    });
}

// Optimized 3D hover effect with performance improvements
function add3DHoverEffect() {
    const slides = document.querySelectorAll('.brands-section-slide-inner');
    
    slides.forEach(slide => {
        // Debounce function to limit calls during rapid mouse movements
        let ticking = false;
        
        // Throttled mouse move handler
        slide.addEventListener('mousemove', function(e) {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    applyHoverEffect(e, slide);
                    ticking = false;
                });
                ticking = true;
            }
        });
        
        // Reset on mouse leave
        slide.addEventListener('mouseleave', function() {
            gsap.to(slide, {
                rotationY: 0,
                rotationX: 0,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                ease: "power2.out",
                duration: 0.4,
                force3D: true,
                clearProps: "rotation" // Clear rotation after animation
            });
        });
    });
}

// Separate function to handle the 3D effect calculations
function applyHoverEffect(e, slide) {
    const slideRect = slide.getBoundingClientRect();
    const slideWidth = slideRect.width;
    const slideHeight = slideRect.height;
    
    // Calculate mouse position relative to slide center
    const mouseX = e.clientX - slideRect.left;
    const mouseY = e.clientY - slideRect.top;
    
    // Calculate rotation angles (reduce magnitude for less dramatic effect)
    const rotateY = ((mouseX / slideWidth) - 0.5) * 8; // -4 to 4 degrees
    const rotateX = ((0.5 - (mouseY / slideHeight)) * 8); // -4 to 4 degrees
    
    // Apply transformation
    gsap.to(slide, {
        rotationY: rotateY,
        rotationX: rotateX,
        transformPerspective: 1000,
        ease: "power1.out",
        duration: 0.3,
        force3D: true
    });
    
    // Simplified shadow effect
    gsap.to(slide, {
        boxShadow: `0 15px 40px rgba(0,0,0,0.15)`,
        duration: 0.3
    });
}