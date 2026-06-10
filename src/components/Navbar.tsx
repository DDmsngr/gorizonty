import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const TG = 'https://t.me/gorizonty_bot'

const links = [
  { label: 'О Резникове', href: '#about' },
  { label: 'Программа', href: '#program' },
  { label: 'Библиотека', href: '#library' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: scrolled ? 'rgba(4,12,30,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#hero" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 26, letterSpacing: '0.15em', color: '#F0F4FF', textDecoration: 'none', fontWeight: 300 }}>
          А<span style={{ color: '#C9A84C' }}>Р</span>
        </a>

        <nav style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="hidden md:flex">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#6B7E9F', textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F0F4FF')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6B7E9F')}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={TG}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
          style={{
            padding: '10px 24px', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
            fontWeight: 600, border: '1px solid rgba(201,168,76,0.5)', color: '#C9A84C',
            textDecoration: 'none', transition: 'all 0.3s',
          }}
          onMouseEnter={e => { const t = e.currentTarget; t.style.backgroundColor = '#C9A84C'; t.style.color = '#040C1E' }}
          onMouseLeave={e => { const t = e.currentTarget; t.style.backgroundColor = 'transparent'; t.style.color = '#C9A84C' }}
        >
          Записаться
        </a>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', color: '#8A9CC0', cursor: 'pointer', display: 'flex' }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ backgroundColor: 'rgba(4,12,30,0.98)', borderTop: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}
          >
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 20 }}>
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B7E9F', textDecoration: 'none' }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={TG}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: 8, padding: '12px 24px', textAlign: 'center', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, border: '1px solid rgba(201,168,76,0.5)', color: '#C9A84C', textDecoration: 'none' }}
              >
                Записаться
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
