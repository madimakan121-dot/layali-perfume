"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const HERO_SLIDES = [
  {
    bg: "/background.jpg",
    accent: "Premium Couture",
    title: "Desert Rose\nMirage",
    subtitle: "Velvet petals, oud resin and a whisper of golden light.",
  },
  {
    bg: "/background.jpg",
    accent: "Colección Exclusiva",
    title: "Noche de\nBaghdad",
    subtitle: "El misterio del oriente capturado en cada gota.",
  },
  {
    bg: "/background.jpg",
    accent: "Edición Limitada",
    title: "Sands of\nArabia",
    subtitle: "Ámbar dorado, oud puro y la eternidad del desierto.",
  },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Layali Noir",
    brand: "Layali Emirates",
    price: "185",
    category: "femenino",
    badge: "Bestseller",
    notes: "Oud · Rosa · Ámbar",
    img: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=80",
    desc: "La oscuridad de la noche árabe en un frasco.",
  },
  {
    id: 2,
    name: "Emirates Gold",
    brand: "Layali Emirates",
    price: "220",
    category: "masculino",
    badge: "Nuevo",
    notes: "Incienso · Cedro · Bergamota",
    img: "https://images.unsplash.com/photo-1590156562745-5f23eff3e0cf?w=600&q=80",
    desc: "La riqueza del Golfo Pérsico hecha fragancia.",
  },
  {
    id: 3,
    name: "Rose Mirage",
    brand: "Layali Emirates",
    price: "165",
    category: "femenino",
    notes: "Rosa de Taif · Jazmín · Almizcle",
    img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&q=80",
    desc: "Un jardín secreto al amanecer.",
  },
  {
    id: 4,
    name: "Oud Majlis",
    brand: "Layali Emirates",
    price: "310",
    category: "unisex",
    badge: "Premium",
    notes: "Oud Puro · Sándalo · Resina",
    img: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&q=80",
    desc: "La esencia más pura del oud árabe.",
  },
  {
    id: 5,
    name: "Amber Nights",
    brand: "Layali Emirates",
    price: "145",
    category: "unisex",
    notes: "Ámbar · Vainilla · Pachulí",
    img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=80",
    desc: "Dulce y profundo como el cielo nocturno.",
  },
  {
    id: 6,
    name: "Khaleeji Musk",
    brand: "Layali Emirates",
    price: "98",
    category: "masculino",
    badge: "Exclusivo",
    notes: "Almizcle · Cuero · Especias",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80",
    desc: "Masculinidad árabe en su máxima expresión.",
  },
  {
    id: 7,
    name: "Bint Al Arab",
    brand: "Layali Emirates",
    price: "175",
    category: "femenino",
    notes: "Flor de Naranjo · Iris · Cedro",
    img: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&q=80",
    desc: "Delicada como la brisa del Mediterráneo.",
  },
  {
    id: 8,
    name: "Dunes Secret",
    brand: "Layali Emirates",
    price: "130",
    category: "unisex",
    notes: "Vetiver · Bergamota · Ámbar",
    img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=80",
    desc: "Los secretos ocultos entre las dunas doradas.",
  },
];

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  const [cur, setCur] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((idx: number) => {
    setCur(idx);
    setAnimKey(k => k + 1);
  }, []);

  const next = useCallback(() => go((cur + 1) % HERO_SLIDES.length), [cur, go]);
  const prev = useCallback(() => go((cur - 1 + HERO_SLIDES.length) % HERO_SLIDES.length), [cur, go]);

  useEffect(() => {
    timer.current = setInterval(next, 6000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [next]);

  const reset = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(next, 6000);
  };

  const slide = HERO_SLIDES[cur];

  return (
    <section style={{ position: "relative", height: "100vh", overflow: "hidden", background: "#1a0000" }}>
      {/* BG images */}
      {HERO_SLIDES.map((s, i) => (
        <div key={i} style={{
          position: "absolute", inset: 0, zIndex: 1,
          backgroundImage: `url(${s.bg})`,
          backgroundSize: "cover", backgroundPosition: "center bottom",
          opacity: i === cur ? 1 : 0,
          transform: i === cur ? "scale(1.04)" : "scale(1)",
          transition: "opacity 1.4s cubic-bezier(.4,0,.2,1), transform 7s ease-out",
        }} />
      ))}

      {/* Overlays */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "linear-gradient(to right, rgba(0,0,0,.55) 0%, rgba(0,0,0,.08) 55%, rgba(0,0,0,.2) 100%)" }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "linear-gradient(to top, rgba(0,0,0,.7) 0%, rgba(0,0,0,.05) 35%, transparent 65%)" }} />

      {/* Content */}
      <div style={{
        position: "absolute", zIndex: 10,
        left: "clamp(2rem, 8vw, 8rem)", bottom: "clamp(5rem, 12vh, 10rem)",
        maxWidth: "640px",
      }}>
        {/* Eyebrow */}
        <div key={`ey-${animKey}`} style={{
          display: "flex", alignItems: "center", gap: "0.75rem",
          marginBottom: "1.25rem",
          animation: "fromLeft .7s cubic-bezier(.16,1,.3,1) .05s both",
        }}>
          <span style={{ width: 36, height: 1, background: "linear-gradient(90deg,transparent,#C19849)" }} />
          <span style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: ".65rem", letterSpacing: ".45em",
            textTransform: "uppercase", color: "#C19849",
          }}>{slide.accent}</span>
        </div>

        {/* Title */}
        <h1 key={`h1-${animKey}`} style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: "clamp(3.2rem,7vw,5.8rem)",
          fontWeight: 900, lineHeight: 1.02,
          color: "#fff",
          marginBottom: "1.5rem",
          whiteSpace: "pre-line",
          animation: "fromLeft .85s cubic-bezier(.16,1,.3,1) .15s both",
        }}>{slide.title}</h1>

        {/* Subtitle */}
        <p key={`sub-${animKey}`} style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: "clamp(1rem,1.8vw,1.25rem)",
          color: "rgba(255,255,255,.55)",
          marginBottom: "2.5rem",
          letterSpacing: ".04em",
          animation: "fromLeft .85s cubic-bezier(.16,1,.3,1) .25s both",
        }}>{slide.subtitle}</p>

        {/* Buttons */}
        <div key={`btns-${animKey}`} style={{
          display: "flex", gap: "1rem", flexWrap: "wrap",
          animation: "fromLeft .85s cubic-bezier(.16,1,.3,1) .35s both",
        }}>
          <PrimaryBtn>DESCUBRIR</PrimaryBtn>
          <OutlineBtn>COMPRAR AHORA</OutlineBtn>
        </div>
      </div>

      {/* Arrow buttons */}
      <ArrowBtn dir="left" onClick={() => { prev(); reset(); }} />
      <ArrowBtn dir="right" onClick={() => { next(); reset(); }} />

      {/* Dots */}
      <div style={{
        position: "absolute", bottom: "2.5rem", left: "50%",
        transform: "translateX(-50%)", zIndex: 10,
        display: "flex", gap: ".6rem", alignItems: "center",
      }}>
        {HERO_SLIDES.map((_, i) => (
          <button key={i} onClick={() => { go(i); reset(); }} style={{
            background: "none", border: "none", cursor: "pointer", padding: "4px",
          }}>
            <span style={{
              display: "block", height: "2px",
              width: i === cur ? "32px" : "10px",
              background: i === cur ? "linear-gradient(90deg,#C19849,#F0D58C)" : "rgba(193,152,73,.3)",
              borderRadius: "2px",
              transition: "width .45s cubic-bezier(.16,1,.3,1), background .4s",
            }} />
          </button>
        ))}
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", bottom: "2.2rem", right: "3rem", zIndex: 10,
        display: "flex", flexDirection: "column", alignItems: "center", gap: ".5rem",
      }}>
        <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: ".6rem", letterSpacing: ".35em", textTransform: "uppercase", color: "rgba(193,152,73,.6)", writingMode: "vertical-rl" }}>Scroll</span>
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom,#C19849,transparent)", animation: "scrollDrop 2s ease-in-out infinite" }} />
      </div>
    </section>
  );
}

function ArrowBtn({ dir, onClick }: { dir: "left" | "right"; onClick: () => void }) {
  const [h, setH] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        position: "absolute", top: "50%", zIndex: 10,
        [dir === "left" ? "left" : "right"]: "1.5rem",
        transform: `translateY(-50%) scale(${h ? 1.08 : 1})`,
        background: h ? "rgba(193,152,73,.18)" : "rgba(0,0,0,.35)",
        border: `1px solid rgba(193,152,73,${h ? .6 : .25})`,
        borderRadius: "50%", width: 52, height: 52,
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", color: h ? "#F0D58C" : "rgba(240,213,140,.7)",
        backdropFilter: "blur(8px)",
        transition: "all .35s cubic-bezier(.16,1,.3,1)",
      }}
    >
      {dir === "left" ? "◀" : "▶"}
    </button>
  );
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────

function Navbar({ search, setSearch }: { search: string; setSearch: (s: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (searchOpen) setTimeout(() => inputRef.current?.focus(), 280);
  }, [searchOpen]);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: 70, padding: "0 2.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(14,0,0,.93)" : "linear-gradient(to bottom,rgba(0,0,0,.65),transparent)",
        backdropFilter: scrolled ? "blur(22px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(193,152,73,.12)" : "none",
        transition: "background .5s, border-color .5s",
      }}>
        {/* Logo */}
        <div>
          <div style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "1.35rem", fontWeight: 700,
            background: "linear-gradient(135deg,#C19849 0%,#F0D58C 55%,#C19849 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            letterSpacing: ".1em",
          }}>Layali Emirates Perfume</div>
          <div style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: ".55rem", color: "rgba(193,152,73,.55)",
            letterSpacing: ".38em", textTransform: "uppercase",
          }}>Luxury Fragrances · Dubai</div>
        </div>

        {/* Nav links desktop */}
        <div className="nav-links" style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          {["HOME", "PRODUCTS", "NEW ARRIVAL", "CONTACT"].map(l => <NavLk key={l} label={l} />)}
        </div>

        {/* Icons */}
        <div style={{ display: "flex", gap: ".9rem", alignItems: "center" }}>
          <IBtn onClick={() => setSearchOpen(v => !v)} active={searchOpen} aria-label="Buscar">
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2={16.65} y2={16.65} /></svg>
          </IBtn>
          <IBtn aria-label="Perfil">
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>
          </IBtn>
          <IBtn aria-label="Carrito" style={{ position: "relative" }}>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1={3} y1={6} x2={21} y2={6} /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
            <span style={{
              position: "absolute", top: -4, right: -4,
              width: 14, height: 14, borderRadius: "50%",
              background: "linear-gradient(135deg,#C19849,#F0D58C)",
              fontSize: 8, display: "flex", alignItems: "center", justifyContent: "center",
              color: "#0a0700", fontWeight: 700,
            }}>3</span>
          </IBtn>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(v => !v)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "rgba(240,213,140,.8)", padding: 8, display: "none",
            }}
          >☰</button>
        </div>
      </nav>

      {/* Search bar */}
      <div style={{
        position: "fixed", top: 70, left: 0, right: 0, zIndex: 99,
        background: "rgba(14,0,0,.96)", backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(193,152,73,.2)",
        padding: "1.1rem 2.5rem",
        transform: searchOpen ? "translateY(0)" : "translateY(-110%)",
        opacity: searchOpen ? 1 : 0,
        transition: "transform .4s cubic-bezier(.16,1,.3,1), opacity .35s ease",
      }}>
        <div style={{
          maxWidth: 560, margin: "0 auto",
          display: "flex", alignItems: "center", gap: "1rem",
          borderBottom: "1px solid rgba(193,152,73,.35)", paddingBottom: ".5rem",
        }}>
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="rgba(193,152,73,.6)" strokeWidth={1.6} strokeLinecap="round"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2={16.65} y2={16.65} /></svg>
          <input ref={inputRef} value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Buscar fragancias, notas..."
            style={{
              flex: 1, background: "none", border: "none", outline: "none",
              color: "#f5ead8", fontFamily: "'Cormorant Garamond',serif",
              fontSize: "1.05rem", letterSpacing: ".04em",
            }} />
          {search && <button onClick={() => setSearch("")} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(193,152,73,.6)", fontSize: "1rem" }}>✕</button>}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 98,
          background: "rgba(0,0,0,.85)", backdropFilter: "blur(4px)",
        }} onClick={() => setMenuOpen(false)}>
          <div style={{
            position: "absolute", top: 0, right: 0, bottom: 0, width: 260,
            background: "linear-gradient(160deg,#1a0000,#2d0000)",
            borderLeft: "1px solid rgba(193,152,73,.18)",
            padding: "5rem 2rem 2rem",
            display: "flex", flexDirection: "column", gap: ".2rem",
          }} onClick={e => e.stopPropagation()}>
            {["HOME", "PRODUCTS", "NEW ARRIVAL", "CONTACT"].map(l => (
              <a key={l} href="#" style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "1.3rem", color: "rgba(240,213,140,.85)",
                textDecoration: "none", padding: ".7rem 0",
                borderBottom: "1px solid rgba(193,152,73,.1)",
              }}>{l}</a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function NavLk({ label }: { label: string }) {
  const [h, setH] = useState(false);
  return (
    <a href="#" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        position: "relative",
        fontFamily: "'Cormorant Garamond',serif",
        fontSize: ".75rem", letterSpacing: ".22em",
        textTransform: "uppercase",
        color: h ? "#F0D58C" : "rgba(240,213,140,.72)",
        textDecoration: "none",
        transition: "color .3s",
        paddingBottom: 3,
      }}>
      {label}
      <span style={{
        position: "absolute", bottom: 0, left: 0, height: 1,
        background: "linear-gradient(90deg,transparent,#C19849,transparent)",
        width: h ? "100%" : "0%",
        transition: "width .35s cubic-bezier(.16,1,.3,1)",
      }} />
    </a>
  );
}

function IBtn({ children, onClick, active, style: extraStyle, "aria-label": al }:
  { children: React.ReactNode; onClick?: () => void; active?: boolean; style?: React.CSSProperties; "aria-label"?: string }) {
  const [p, setP] = useState(false);
  return (
    <button onClick={onClick} aria-label={al}
      onMouseDown={() => setP(true)}
      onMouseUp={() => setP(false)}
      onMouseLeave={() => setP(false)}
      style={{
        position: "relative",
        background: active ? "rgba(193,152,73,.13)" : "none",
        border: `1px solid ${active ? "rgba(193,152,73,.4)" : "transparent"}`,
        borderRadius: "50%", width: 38, height: 38,
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", color: active ? "#F0D58C" : "rgba(240,213,140,.8)",
        transform: p ? "scale(.87)" : "scale(1)",
        transition: "transform .2s cubic-bezier(.34,1.56,.64,1), background .3s, border-color .3s, color .3s",
        ...extraStyle,
      }}>{children}</button>
  );
}

// ─── MARQUEE STRIP ────────────────────────────────────────────────────────────

function MarqueeStrip() {
  const items = ["Oud · Ámbar · Rosa · Incienso · Sándalo · Almizcle · Vainilla · Pachulí · Bergamota · Cedro"];
  return (
    <div style={{
      background: "linear-gradient(90deg,#C19849 0%,#F0D58C 50%,#C19849 100%)",
      padding: ".55rem 0", overflow: "hidden", whiteSpace: "nowrap",
    }}>
      <div style={{ display: "inline-block", animation: "marquee 22s linear infinite" }}>
        {[...Array(4)].map((_, i) => (
          <span key={i} style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: ".72rem", letterSpacing: ".35em",
            textTransform: "uppercase", color: "#0a0700",
            padding: "0 3rem",
          }}>{items[0]}</span>
        ))}
      </div>
    </div>
  );
}

// ─── CATEGORY BAR ─────────────────────────────────────────────────────────────

function CatBar({ active, onChange }: { active: string; onChange: (c: string) => void }) {
  const cats = [
    { key: "todos", label: "Todos" },
    { key: "femenino", label: "Femenino" },
    { key: "masculino", label: "Masculino" },
    { key: "unisex", label: "Unisex" },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: ".6rem", padding: "2.5rem 1rem 1.5rem", flexWrap: "wrap" }}>
      {cats.map(c => {
        const on = active === c.key;
        return (
          <button key={c.key} onClick={() => onChange(c.key)} style={{
            background: on ? "linear-gradient(135deg,#C19849 0%,#F0D58C 50%,#C19849 100%)" : "rgba(255,255,255,.03)",
            border: `1px solid ${on ? "transparent" : "rgba(193,152,73,.22)"}`,
            borderRadius: 100, padding: ".5rem 1.6rem", cursor: "pointer",
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: ".78rem", letterSpacing: ".22em", textTransform: "uppercase",
            color: on ? "#0a0700" : "rgba(240,213,140,.7)",
            fontWeight: on ? 700 : 400,
            transform: on ? "scale(1.05)" : "scale(1)",
            boxShadow: on ? "0 4px 20px rgba(193,152,73,.28)" : "none",
            transition: "all .35s cubic-bezier(.16,1,.3,1)",
          }}>{c.label}</button>
        );
      })}
    </div>
  );
}

// ─── PRODUCT CARD ─────────────────────────────────────────────────────────────

function ProductCard({ p, idx }: { p: typeof PRODUCTS[0]; idx: number }) {
  const [h, setH] = useState(false);
  const [added, setAdded] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        position: "relative", background: "#0c0800",
        cursor: "pointer", overflow: "hidden",
        animation: "fadeUp .6s cubic-bezier(.16,1,.3,1) both",
        animationDelay: `${idx * .08}s`,
        transition: "transform .4s cubic-bezier(.16,1,.3,1), box-shadow .4s",
        transform: h ? "translateY(-4px)" : "translateY(0)",
        boxShadow: h ? "0 20px 60px rgba(0,0,0,.6), 0 0 0 1px rgba(193,152,73,.15)" : "none",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", paddingTop: "120%", overflow: "hidden" }}>
        <img src={p.img} alt={p.name} style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover",
          transform: h ? "scale(1.1)" : "scale(1)",
          transition: "transform 1s cubic-bezier(.25,.46,.45,.94)",
          filter: "brightness(.9) saturate(.85)",
        }} />
        {/* Image overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(to top,rgba(0,0,0,.85) 0%,rgba(0,0,0,${h ? .25 : .1}) 55%)`,
          transition: "background .5s",
        }} />

        {/* Badge */}
        {p.badge && (
          <div style={{
            position: "absolute", top: "1rem", left: "1rem",
            background: "linear-gradient(135deg,#C19849,#F0D58C)",
            color: "#0a0700", fontFamily: "'Cormorant Garamond',serif",
            fontSize: ".58rem", letterSpacing: ".2em", textTransform: "uppercase",
            fontWeight: 700, padding: ".28rem .75rem", borderRadius: 2,
          }}>{p.badge}</div>
        )}

        {/* Wishlist btn */}
        <button onClick={e => { e.stopPropagation(); setLiked(v => !v); }}
          style={{
            position: "absolute", top: "1rem", right: "1rem",
            background: "rgba(0,0,0,.45)", backdropFilter: "blur(8px)",
            border: "1px solid rgba(193,152,73,.22)", borderRadius: "50%",
            width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
            color: liked ? "#F0D58C" : "rgba(240,213,140,.5)",
            fontSize: "1rem",
            opacity: h ? 1 : 0,
            transform: h ? "scale(1) translateY(0)" : "scale(.8) translateY(-6px)",
            transition: "all .4s cubic-bezier(.34,1.56,.64,1)",
          }}>
          {liked ? "♥" : "♡"}
        </button>

        {/* Add to cart */}
        <div style={{
          position: "absolute", bottom: "1rem", left: "1rem", right: "1rem",
          opacity: h ? 1 : 0,
          transform: h ? "translateY(0)" : "translateY(10px)",
          transition: "all .4s cubic-bezier(.16,1,.3,1)",
        }}>
          <button onClick={e => { e.stopPropagation(); setAdded(true); setTimeout(() => setAdded(false), 1800); }}
            style={{
              width: "100%",
              background: added ? "rgba(45,122,58,.85)" : "rgba(0,0,0,.6)",
              backdropFilter: "blur(14px)",
              border: `1px solid ${added ? "rgba(61,168,78,.45)" : "rgba(193,152,73,.35)"}`,
              borderRadius: 3, padding: ".6rem",
              cursor: "pointer",
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: ".72rem", letterSpacing: ".2em", textTransform: "uppercase",
              color: added ? "#fff" : "#C19849",
              transition: "all .4s cubic-bezier(.16,1,.3,1)",
            }}>
            {added ? "✓ Añadido" : "+ Añadir al carrito"}
          </button>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "1.2rem 1.2rem 1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: ".25rem" }}>
          <span style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: ".6rem", letterSpacing: ".25em",
            textTransform: "uppercase", color: "rgba(193,152,73,.55)",
          }}>{p.brand}</span>
          <span style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "1rem", color: "#F0D58C", fontWeight: 600,
          }}>€{p.price}</span>
        </div>
        <h3 style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: "1.05rem", fontWeight: 700,
          color: "#f5ead8", margin: "0 0 .4rem", lineHeight: 1.25,
        }}>{p.name}</h3>
        <p style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: ".78rem", color: "rgba(245,234,216,.38)",
          letterSpacing: ".06em", fontStyle: "italic", margin: 0,
        }}>{p.notes}</p>
        <div style={{
          marginTop: "1rem", height: 1,
          background: `linear-gradient(90deg,rgba(193,152,73,${h ? .45 : .12}),transparent)`,
          transition: "background .5s",
        }} />
      </div>
    </div>
  );
}

// ─── FEATURES ─────────────────────────────────────────────────────────────────

function Features() {
  const items = [
    { icon: "✦", title: "Envío Premium", desc: "Entrega en 24-48h con embalaje de lujo exclusivo" },
    { icon: "◈", title: "100% Auténtico", desc: "Garantía de autenticidad en cada fragancia árabe" },
    { icon: "⬡", title: "Devolución Libre", desc: "30 días para cambios sin ningún coste adicional" },
    { icon: "✧", title: "Muestras Gratis", desc: "3 muestras de regalo seleccionadas con cada pedido" },
  ];
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
      borderTop: "1px solid rgba(193,152,73,.1)",
      borderBottom: "1px solid rgba(193,152,73,.08)",
    }}>
      {items.map((f, i) => <FeatItem key={i} f={f} i={i} />)}
    </div>
  );
}

function FeatItem({ f, i }: { f: { icon: string; title: string; desc: string }; i: number }) {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        padding: "2.5rem 1.75rem",
        borderRight: "1px solid rgba(193,152,73,.07)",
        display: "flex", flexDirection: "column", alignItems: "center",
        textAlign: "center", gap: ".7rem",
        background: h ? "rgba(193,152,73,.03)" : "transparent",
        transition: "background .4s",
        animation: "fadeUp .7s ease both",
        animationDelay: `${i * .12}s`,
      }}>
      <span style={{
        fontSize: "1.5rem", color: "#C19849",
        transform: h ? "scale(1.25) rotate(20deg)" : "scale(1) rotate(0deg)",
        transition: "transform .5s cubic-bezier(.34,1.56,.64,1)",
      }}>{f.icon}</span>
      <span style={{ fontFamily: "'Playfair Display',serif", fontSize: ".95rem", fontWeight: 600, color: "#f5ead8" }}>{f.title}</span>
      <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: ".83rem", color: "rgba(245,234,216,.38)", lineHeight: 1.55 }}>{f.desc}</span>
    </div>
  );
}

// ─── BUTTONS ──────────────────────────────────────────────────────────────────

function PrimaryBtn({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const [p, setP] = useState(false);
  const [h, setH] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setH(true)} onMouseLeave={() => { setH(false); setP(false); }}
      onMouseDown={() => setP(true)} onMouseUp={() => setP(false)}
      style={{
        background: h
          ? "linear-gradient(135deg,#d4a94e 0%,#f5e070 50%,#d4a94e 100%)"
          : "linear-gradient(135deg,#C19849 0%,#F0D58C 50%,#C19849 100%)",
        border: "none", borderRadius: 100,
        padding: ".8rem 2.2rem", cursor: "pointer",
        fontFamily: "'Cormorant Garamond',serif",
        fontSize: ".75rem", letterSpacing: ".22em",
        textTransform: "uppercase", fontWeight: 700, color: "#0a0700",
        transform: p ? "scale(.95)" : h ? "scale(1.03)" : "scale(1)",
        boxShadow: h ? "0 6px 28px rgba(193,152,73,.45)" : "0 4px 18px rgba(193,152,73,.25)",
        transition: "all .3s cubic-bezier(.34,1.56,.64,1)",
      }}>{children}</button>
  );
}

function OutlineBtn({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const [h, setH] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        background: h ? "rgba(193,152,73,.1)" : "rgba(0,0,0,.3)",
        backdropFilter: "blur(10px)",
        border: `1px solid rgba(193,152,73,${h ? .7 : .4})`,
        borderRadius: 100, padding: ".8rem 2.2rem", cursor: "pointer",
        fontFamily: "'Cormorant Garamond',serif",
        fontSize: ".75rem", letterSpacing: ".22em",
        textTransform: "uppercase", color: h ? "#F0D58C" : "rgba(240,213,140,.75)",
        transform: h ? "scale(1.03)" : "scale(1)",
        transition: "all .35s cubic-bezier(.16,1,.3,1)",
      }}>{children}</button>
  );
}

// ─── SECTION TITLE ────────────────────────────────────────────────────────────

function SecTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div style={{ textAlign: "center", padding: "4rem 2rem 1.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: ".9rem" }}>
        <span style={{ flex: 1, maxWidth: 52, height: 1, background: "linear-gradient(90deg,transparent,rgba(193,152,73,.5))" }} />
        <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: ".62rem", letterSpacing: ".42em", textTransform: "uppercase", color: "#C19849" }}>{eyebrow}</span>
        <span style={{ flex: 1, maxWidth: 52, height: 1, background: "linear-gradient(90deg,rgba(193,152,73,.5),transparent)" }} />
      </div>
      <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "#f5ead8", marginBottom: sub ? ".9rem" : 0, lineHeight: 1.15 }}>{title}</h2>
      {sub && <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", color: "rgba(245,234,216,.42)", maxWidth: 460, margin: "0 auto", lineHeight: 1.7, letterSpacing: ".03em" }}>{sub}</p>}
    </div>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ background: "#080000", borderTop: "1px solid rgba(193,152,73,.1)", padding: "4rem 2.5rem 2.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "2.5rem", marginBottom: "2.5rem" }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.25rem", fontWeight: 700, background: "linear-gradient(135deg,#C19849 0%,#F0D58C 55%,#C19849 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: ".1em", marginBottom: ".25rem" }}>Layali Emirates</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: ".55rem", color: "rgba(193,152,73,.45)", letterSpacing: ".38em", textTransform: "uppercase", marginBottom: "1.2rem" }}>Luxury Fragrances · Dubai</div>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: ".85rem", color: "rgba(245,234,216,.32)", lineHeight: 1.7, maxWidth: 200 }}>Perfumes árabes auténticos. Cada frasco, una obra de arte que destila siglos de tradición oriental.</p>
          </div>
          {[
            { t: "Colección", ls: ["Masculinos", "Femeninos", "Unisex", "Exclusivos", "Novedades"] },
            { t: "Marcas", ls: ["Swiss Arabian", "Amouage", "Lattafa", "Arabian Oud", "Rasasi"] },
            { t: "Ayuda", ls: ["Guía de aromas", "Envíos", "Devoluciones", "Contacto", "FAQ"] },
          ].map(col => (
            <div key={col.t}>
              <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: ".6rem", letterSpacing: ".35em", textTransform: "uppercase", color: "#C19849", marginBottom: "1.1rem", fontWeight: 400 }}>{col.t}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: ".55rem" }}>
                {col.ls.map(l => (
                  <li key={l}><a href="#" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: ".88rem", color: "rgba(245,234,216,.38)", textDecoration: "none", transition: "color .3s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#C19849")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,234,216,.38)")}
                  >{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(193,152,73,.35) 30%,rgba(193,152,73,.5) 50%,rgba(193,152,73,.35) 70%,transparent)" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.75rem", flexWrap: "wrap", gap: ".75rem" }}>
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: ".72rem", color: "rgba(245,234,216,.2)", letterSpacing: ".07em" }}>© 2025 Layali Emirates Perfume. Todos los derechos reservados.</p>
          <div style={{ display: "flex", gap: "1.4rem" }}>
            {["Privacidad", "Términos", "Cookies"].map(i => (
              <a key={i} href="#" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: ".72rem", color: "rgba(245,234,216,.2)", textDecoration: "none", transition: "color .3s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(193,152,73,.65)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,234,216,.2)")}
              >{i}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Page() {
  const [cat, setCat] = useState("todos");
  const [search, setSearch] = useState("");

  const filtered = PRODUCTS.filter(p => {
    const mc = cat === "todos" || p.category === cat;
    const q = search.toLowerCase();
    const ms = !q || p.name.toLowerCase().includes(q) || p.notes.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q);
    return mc && ms;
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{background:#0e0000;color:#f5ead8;overflow-x:hidden;-webkit-font-smoothing:antialiased}
        ::selection{background:rgba(193,152,73,.3);color:#F0D58C}
        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-track{background:#060402}
        ::-webkit-scrollbar-thumb{background:linear-gradient(to bottom,#C19849,rgba(193,152,73,.2));border-radius:3px}
        @keyframes fromLeft{from{opacity:0;transform:translateX(-28px)}to{opacity:1;transform:translateX(0)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        @keyframes scrollDrop{0%,100%{opacity:.35;transform:scaleY(.75)}50%{opacity:.85;transform:scaleY(1)}}
        @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .nav-links{display:flex}
        .menu-toggle{display:none!important}
        @media(max-width:768px){.nav-links{display:none!important}.menu-toggle{display:flex!important}}
      `}</style>

      <Navbar search={search} setSearch={setSearch} />
      <Hero />
      <MarqueeStrip />

      <main>
        <SecTitle
          eyebrow="Nuestra Selección"
          title="Fragancias de Oriente"
          sub="Una curaduría de las más exquisitas esencias árabes, para almas que buscan lo extraordinario."
        />
        <CatBar active={cat} onChange={setCat} />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
          gap: "1.5px", padding: "0 1.5px 1.5px",
          background: "rgba(193,152,73,.07)",
        }}>
          {filtered.length === 0 ? (
            <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "5rem", fontFamily: "'Cormorant Garamond',serif", fontSize: "1.2rem", color: "rgba(193,152,73,.4)" }}>
              No se encontraron fragancias.
            </div>
          ) : filtered.map((p, i) => <ProductCard key={p.id} p={p} idx={i} />)}
        </div>

        <Features />

        {/* Quiz banner */}
        <div style={{
          position: "relative", margin: "5rem 2rem",
          borderRadius: 4, overflow: "hidden",
          background: "linear-gradient(135deg,#1a0000 0%,#2d0500 50%,#150000 100%)",
          border: "1px solid rgba(193,152,73,.14)",
          padding: "4rem 2rem",
          display: "flex", flexDirection: "column", alignItems: "center",
          textAlign: "center", gap: "1.4rem",
        }}>
          {/* Corner ornaments */}
          {([["top","left"],["top","right"],["bottom","left"],["bottom","right"]] as const).map(([v,h],i) => (
            <div key={i} style={{
              position: "absolute", width: 22, height: 22,
              [v]: "1rem", [h]: "1rem",
              borderTop: v === "top" ? "1px solid rgba(193,152,73,.4)" : "none",
              borderBottom: v === "bottom" ? "1px solid rgba(193,152,73,.4)" : "none",
              borderLeft: h === "left" ? "1px solid rgba(193,152,73,.4)" : "none",
              borderRight: h === "right" ? "1px solid rgba(193,152,73,.4)" : "none",
            }} />
          ))}
          <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: ".62rem", letterSpacing: ".5em", textTransform: "uppercase", color: "#C19849" }}>Experiencia Exclusiva</span>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.5rem,3vw,2.4rem)", fontWeight: 700, color: "#f5ead8", maxWidth: 480, lineHeight: 1.2 }}>
            Descubre tu fragancia perfecta
          </h2>
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: ".97rem", color: "rgba(245,234,216,.42)", maxWidth: 380, lineHeight: 1.7 }}>
            Recibe un kit de 5 muestras personalizadas basado en tus preferencias aromáticas
          </p>
          <PrimaryBtn>Comenzar Quiz Aromático</PrimaryBtn>
        </div>
      </main>

      <Footer />
    </>
  );
}
