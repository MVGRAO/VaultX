"use client";

import { useEffect } from "react";

import {
  About,
  Contact,
  Footer,
  Hero,
  Nav,
  Services,
  Why
} from "../components/landing";

export default function Home() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const onScroll = () => {
      nav?.classList.toggle("scrolled", window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");
    const toggleMenu = () => mobileMenu?.classList.toggle("open");
    const closeMenu = () => mobileMenu?.classList.remove("open");

    hamburger?.addEventListener("click", toggleMenu);
    mobileMenu?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    const reveals = document.querySelectorAll(
      ".section-tag, .section-title, .section-sub, .about-text, .about-mission, .service-card, .why-card, .contact-item, .contact-form, .contact-desc"
    );
    reveals.forEach((el) => el.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((el) => observer.observe(el));

    document.querySelectorAll(".services-grid, .why-grid").forEach((grid) => {
      grid.querySelectorAll(".service-card, .why-card").forEach((card, index) => {
        (card as HTMLElement).style.transitionDelay = `${index * 0.08}s`;
      });
    });

    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    const successMsg = document.getElementById("form-success");
    const onSubmit = (event: Event) => {
      event.preventDefault();
      if (!form) {
        return;
      }

      const btn = form.querySelector("button[type=submit]") as HTMLButtonElement | null;
      const btnText = btn?.querySelector(".btn-text");

      if (btn) {
        btn.disabled = true;
      }
      if (btnText) {
        btnText.textContent = "Sending...";
      }

      window.setTimeout(() => {
        form.reset();
        if (btn) {
          btn.disabled = false;
        }
        if (btnText) {
          btnText.textContent = "Send Message";
        }
        successMsg?.classList.add("show");
        window.setTimeout(() => successMsg?.classList.remove("show"), 5000);
      }, 1200);
    };

    form?.addEventListener("submit", onSubmit);

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const onAnchorClick = (event: Event) => {
      const link = event.currentTarget as HTMLAnchorElement;
      const targetId = link.getAttribute("href");
      if (!targetId) {
        return;
      }

      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    anchorLinks.forEach((link) => link.addEventListener("click", onAnchorClick));

    return () => {
      window.removeEventListener("scroll", onScroll);
      hamburger?.removeEventListener("click", toggleMenu);
      mobileMenu?.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("click", closeMenu);
      });
      form?.removeEventListener("submit", onSubmit);
      anchorLinks.forEach((link) => link.removeEventListener("click", onAnchorClick));
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Why />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
