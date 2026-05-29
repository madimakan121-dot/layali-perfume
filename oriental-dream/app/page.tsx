'use client';

import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#09070f]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 lg:px-10">
          <div className="text-lg font-semibold tracking-[0.35em] text-white">Oriental Dream</div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#inicio" className="text-sm font-medium text-white/80 transition hover:text-gold">Inicio</a>
            <a href="#productos" className="text-sm font-medium text-white/80 transition hover:text-gold">Productos</a>
            <a href="#historia" className="text-sm font-medium text-white/80 transition hover:text-gold">Historia</a>
            <a href="#contacto" className="text-sm font-medium text-white/80 transition hover:text-gold">Contacto</a>
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <button className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-white/80 transition hover:border-gold hover:text-gold">
              <span className="sr-only">Buscar</span>🔎
            </button>
            <button className="rounded-full border border-white/15 bg-white/5 p-2 transition hover:border-gold hover:text-gold">👤</button>
            <button className="rounded-full border border-white/15 bg-white/5 p-2 transition hover:border-gold hover:text-gold">🛒</button>
          </div>
        </div>
      </header>

      <main className="relative overflow-hidden pt-[92px]">
        <section id="inicio" className="relative flex min-h-[88vh] items-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(248,223,139,0.15),_transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.05),_transparent_20%),linear-gradient(180deg,_#09070f_0%,_#1f171e_100%)]" />
          <div className="absolute right-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[#f3d9b3]/10 blur-3xl" />
          <div className="mx-auto flex w-full max-w-[1280px] items-center gap-12 px-6 lg:px-10">
            <motion.div initial="hidden" animate="show" variants={stagger} className="relative z-10 flex-1">
              <motion.div variants={fadeIn} className="mb-8 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-sand shadow-soft backdrop-blur-sm">
                Nueva colección 2026
              </motion.div>
              <motion.h1 variants={fadeIn} className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Perfumes árabes de lujo para momentos inolvidables.
              </motion.h1>
              <motion.p variants={fadeIn} className="mt-8 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
                Descubre una selección premium de fragancias oscuras y cálidas, creadas para transmitir calma, exclusividad y un aura cinematográfica desde el primer instante.
              </motion.p>
              <motion.div variants={fadeIn} className="mt-10 flex flex-wrap gap-4">
                <a href="#productos" className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#09070f] transition hover:-translate-y-0.5 hover:shadow-glow">
                  Ver novedades
                </a>
                <a href="#historia" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/85 transition hover:border-gold hover:text-gold">
                  Nuestra historia
                </a>
              </motion.div>

              <motion.div variants={fadeIn} className="mt-14 grid max-w-xl gap-4 rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-soft">
                <h2 className="text-sm uppercase tracking-[0.26em] text-sand">Buscar</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {['olores frescos', 'novedades', 'perfumes árabes', 'perfumes dulces', 'perfumes intensos'].map((term) => (
                    <button key={term} className="rounded-3xl border border-white/10 bg-[#110e15]/80 px-4 py-3 text-left text-sm text-white/80 transition hover:border-gold hover:text-gold">
                      {term}
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 120 }} animate={{ opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }} className="relative z-10 w-full max-w-[520px] overflow-hidden rounded-[42px] border border-white/10 bg-[#120e16]/80 shadow-glow">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent)]" />
              <img src="https://images/Product 6.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80" alt="Perfume premium" className="h-[560px] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
                <div className="rounded-[28px] border border-white/10 bg-black/30 p-5 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.28em] text-sand">Nueva Arrivada</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">Dunas de Ámbar</h3>
                  <p className="mt-2 max-w-sm text-sm text-white/70">Una firma oriental con calor dorado, especias y madera suave.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="productos" className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10">
          <motion.div initial="hidden" animate="show" variants={stagger} className="grid gap-12">
            <motion.div variants={fadeIn} className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sand">Perfumes destacados</p>
                <h2 className="text-4xl font-semibold text-white sm:text-5xl">Colección Premium</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Unisex', 'Masculino', 'Femenino'].map((label) => (
                  <span key={label} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.22em] text-white/80 transition hover:border-gold hover:text-gold">
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: 'Sombra Oriental',
                  category: 'Unisex',
                  description: 'Notas de incienso, vainilla cremosa y cuero aterciopelado.',
                  price: '€142',
                  image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80'
                },
                {
                  title: 'Mistic Amber',
                  category: 'Masculino',
                  description: 'Ámbar oscuro, madera de oud y bergamota fresca.',
                  price: '€156',
                  image: 'https://images.unsplash.com/photo-1519736515981-290ce3f96955?auto=format&fit=crop&w=900&q=80'
                },
                {
                  title: 'Flor del Oasis',
                  category: 'Femenino',
                  description: 'Jazmín de noche, rosa y almizcle suave.',
                  price: '€138',
                  image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80'
                }
              ].map((product) => (
                <motion.article key={product.title} variants={fadeIn} whileHover={{ y: -8 }} className="group overflow-hidden rounded-[36px] border border-white/10 bg-[#0f0c13]/70 shadow-soft backdrop-blur-xl transition duration-500">
                  <div className="relative overflow-hidden">
                    <img src={product.image} alt={product.title} className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                    <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-sand">
                      {product.category}
                    </span>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-white">{product.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/70">{product.description}</p>
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <span className="text-xl font-semibold text-gold">{product.price}</span>
                      <button className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.2em] text-white/80 transition hover:border-gold hover:text-gold">
                        Ver
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-[1280px] px-6 pb-24 lg:px-10">
          <div className="grid gap-10 rounded-[36px] border border-white/10 bg-[#120d16]/80 p-10 shadow-soft backdrop-blur-xl lg:grid-cols-[1.6fr_1fr]">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.28em] text-sand">Marcas selectas</p>
              <h2 className="text-4xl font-semibold text-white">Inspiración árabe en cada frasco</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">Encuentra una selección de casas de perfume nicho que reflejan la elegancia oriental, la intensidad del desierto y la calidez dorada del lujo contemporáneo.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {['Maison Al Basha', 'Noor Atelier', 'Sultan & Rose', 'Desert Veil'].map((brand) => (
                <div key={brand} className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-white/90 transition hover:border-gold hover:bg-white/10">
                  <h3 className="text-xl font-semibold">{brand}</h3>
                  <p className="mt-3 text-sm text-white/65">Fragancias premium con carácter árabe y presencia sofisticada.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-[#09070f]/80 py-10">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-6 text-sm text-white/60 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <p>Oriental Dream © 2026. Diseño premium de perfumes árabes.</p>
            <p>Hecho para una experiencia calmada y exclusiva.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
