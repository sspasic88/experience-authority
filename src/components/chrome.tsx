"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Bookmark, Menu, X } from "lucide-react";
import { usePassport } from "./passport-provider";
export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`wordmark ${light ? "wordmark-light" : ""}`}
      aria-label="Experience Authority home"
    >
      <span className="wordmark-words">
        Experience
        <br />
        Authority
      </span>
      <span className="brand-slash" aria-hidden="true" />
      <small className="wordmark-tagline">The world from within</small>
    </Link>
  );
}
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  const { data } = usePassport();
  const links = [
    ["/explore", "Compass"],
    ["/places", "Places"],
    ["/fields", "Fields"],
    ["/collections", "Collections"],
    ["/plan", "Plan"],
    ["/method", "Our method"],
  ];
  return (
    <header className="site-header">
      <div className="header-inner">
        <Wordmark />
        <nav
          aria-label="Main navigation"
          className={`main-nav ${open ? "is-open" : ""}`}
          id="main-navigation"
        >
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname.startsWith(href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/passport"
          className="passport-link"
          aria-label={`EA Passport, ${Object.keys(data.saved).length} saved`}
          onClick={() => setOpen(false)}
        >
          <Bookmark size={17} aria-hidden="true" />
          <span>EA Passport</span>
          <span
            className="passport-count"
            aria-label={`${Object.keys(data.saved).length} saved`}
          >
            {Object.keys(data.saved).length}
          </span>
        </Link>
        <button
          ref={menuButton}
          className="icon-button menu-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Wordmark light />
          <p>
            A global selection of
            <br />
            locally rooted experiences.
          </p>
        </div>
        <div className="footer-statement">
          Leave with more
          <br />
          than a photograph.
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/about">
            About us <ArrowUpRight size={15} />
          </Link>
          <Link href="/method">
            Our method <ArrowUpRight size={15} />
          </Link>
          <Link href="/plan">
            Plan a journey <ArrowUpRight size={15} />
          </Link>
          <Link href="/suggest">
            Suggest an experience <ArrowUpRight size={15} />
          </Link>
          <Link href="/corrections">
            Corrections <ArrowUpRight size={15} />
          </Link>
          <Link href="/transparency">
            Transparency <ArrowUpRight size={15} />
          </Link>
          <Link href="/credits">
            Sources & credits <ArrowUpRight size={15} />
          </Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Experience Authority</span>
        <span>Experience first. Context always.</span>
        <Link href="/privacy">Privacy & local storage</Link>
      </div>
    </footer>
  );
}
