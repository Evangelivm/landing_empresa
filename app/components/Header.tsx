"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BrandMark, BrandWordmark } from "./Brand";
import { IconClose, IconMenu } from "./icons";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#producto", label: "Producto" },
  { href: "#proceso", label: "Proceso" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#tecnologia", label: "Tecnología" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[60] -translate-y-20 rounded-full bg-primary px-4 py-2 text-sm font-medium text-paper transition-transform focus:translate-y-0"
      >
        Saltar al contenido principal
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open
            ? "bg-ink/95 backdrop-blur-sm border-b border-[var(--ink-line)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <Link
            href="#top"
            className="flex items-center gap-2 text-text-ink"
            onClick={() => setOpen(false)}
          >
            <BrandMark className="h-7 w-7 text-primary-soft" />
            <BrandWordmark />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={activeHash === link.href ? "true" : undefined}
                className={`relative text-sm transition-colors ${
                  activeHash === link.href
                    ? "text-text-ink"
                    : "text-text-ink-muted hover:text-text-ink"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px w-full bg-primary transition-opacity ${
                    activeHash === link.href ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden
                />
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="#contacto"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-primary-strong"
            >
              Hablemos
            </Link>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-text-ink md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-[var(--ink-line)] bg-ink px-6 py-6 md:hidden">
            <nav className="flex flex-col gap-1">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base text-text-ink-muted transition-colors hover:bg-ink-2 hover:text-text-ink"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex min-h-[44px] items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-paper"
              >
                Hablemos
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
