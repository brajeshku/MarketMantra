"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { contactDetails, navigationLinks } from "@/data/site-content";
import { publicAsset } from "@/lib/public-asset";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner page-shell">
        <a
          className="header-brand"
          href="#home"
          aria-label="Market Mantra WealthOrbit home"
        >
          <Image
            src={publicAsset("/market-mantra-logo-header.svg")}
            alt=""
            width={408}
            height={85}
            unoptimized
            preload
          />
        </a>

        <nav
          id="primary-navigation"
          className={"main-nav" + (menuOpen ? " main-nav--open" : "")}
          aria-label="Main navigation"
        >
          {navigationLinks.map(([label, href], index) => (
            <a
              key={href}
              href={href}
              className={index === 0 ? "is-current" : undefined}
              aria-current={index === 0 ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
              {label === "Courses" ? <ChevronDown size={13} /> : null}
            </a>
          ))}
          <a
            className="mobile-nav-cta"
            href="#enquire"
            onClick={() => setMenuOpen(false)}
          >
            Enquire Now <ArrowRight size={15} />
          </a>
        </nav>

        <div className="header-actions">
          <a
            className="header-phone"
            href={contactDetails.primaryPhoneHref}
            aria-label={"Call Market Mantra at " + contactDetails.primaryPhone}
          >
            <span className="header-phone__icon">
              <Phone size={16} />
            </span>
            <span>
              <b>{contactDetails.primaryPhone}</b>
              <b>{contactDetails.secondaryPhone}</b>
            </span>
          </a>
          <Button asChild size="sm" className="header-cta">
            <a href="#enquire">
              Enquire Now <ArrowRight size={15} />
            </a>
          </Button>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
