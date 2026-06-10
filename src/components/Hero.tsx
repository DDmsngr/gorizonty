import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const TG = 'https://t.me/gorizonty_bot'
const VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4'

const stats = [
  { num: '12+', label: 'лет в бизнесе' },
  { num: '200+', label: 'клиентов' },
  { num: '8', label: 'недель интенсива' },
]

/* Silver shimmer text — CSS keyframe animation */
function ShinyText({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @keyframes silver-shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .shiny-silver {
          background-image: linear-gradient(
            100deg,
            #6B7E9F 0%,
            #8A9CC0 25%,
            #B8C4D8 42%,
            #FFFFFF 50%,
            #B8C4D8 58%,
            #8A9CC0 75%,
            #6B7E9F 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: silver-shimmer 3.5s linear infinite;
          display: inline;
          font-style: italic;
        }
      `}</style>
      <span className="shiny-silver">{children}</span>
    </>
  )
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', backgroundColor: '#040C1E' }}
    >
      {/* Video background */}
      <video
        autoPlay muted loop playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.28 }}
        src={VIDEO}
      />

      {/* Dark gradient overlay — keeps text readable */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(4,12,30,0.55) 0%, rgba(4,12,30,0.2) 45%, rgba(4,12,30,0.7) 100%)', pointerEvents: 'none' }} />

      {/* Silver radial glow center */}
      <div style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 600, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(184,196,216,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Subtle grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.018, backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '90px 90px', pointerEvents: 'none' }} />

      <motion.div style={{ y, opacity, position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px', maxWidth: 960, width: '100%' }}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 32 }}
        >
          <div style={{ height: 1, width: 56, background: 'linear-gradient(to right, transparent, rgba(184,196,216,0.6))' }} />
          <span style={{ color: '#B8C4D8', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 500 }}>Онлайн-интенсив</span>
          <div style={{ height: 1, width: 56, background: 'linear-gradient(to left, transparent, rgba(184,196,216,0.6))' }} />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, lineHeight: 0.88, letterSpacing: '-0.01em', marginBottom: 24, fontSize: 'clamp(72px, 11vw, 148px)' }}
        >
          <span style={{ color: '#F0F4FF', display: 'block' }}>Горизонты</span>
          <ShinyText>роста</ShinyText>
        </motion.h1>

        {/* Author */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ color: 'rgba(184,196,216,0.7)', fontSize: 12, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 32 }}
        >
          Александр Резников
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          style={{ color: '#8A9CC0', fontSize: 18, lineHeight: 1.65, maxWidth: 520, margin: '0 auto 48px' }}
        >
          8-недельная программа для предпринимателей,<br />
          которые готовы к следующему уровню
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}
        >
          <a
            href={TG}
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: '16px 36px', background: 'linear-gradient(135deg, #C9A84C 0%, #E8C96A 100%)', color: '#040C1E', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, textDecoration: 'none', minWidth: 220, textAlign: 'center', transition: 'opacity 0.3s', boxShadow: '0 0 24px rgba(201,168,76,0.25)' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Записаться
          </a>
          <a
            href="#about"
            style={{ padding: '16px 36px', border: '1px solid rgba(184,196,216,0.25)', color: 'rgba(184,196,216,0.75)', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', minWidth: 220, textAlign: 'center', transition: 'all 0.3s', backdropFilter: 'blur(4px)' }}
            onMouseEnter={e => { const t = e.currentTarget; t.style.borderColor = 'rgba(184,196,216,0.6)'; t.style.color = '#F0F4FF'; t.style.background = 'rgba(184,196,216,0.05)' }}
            onMouseLeave={e => { const t = e.currentTarget; t.style.borderColor = 'rgba(184,196,216,0.25)'; t.style.color = 'rgba(184,196,216,0.75)'; t.style.background = 'transparent' }}
          >
            Узнать подробнее
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{ marginTop: 72, paddingTop: 48, borderTop: '1px solid rgba(184,196,216,0.08)', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}
        >
          {stats.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 44, color: '#B8C4D8', fontWeight: 300, lineHeight: 1, marginBottom: 6, textShadow: '0 0 20px rgba(184,196,216,0.3)' }}>{s.num}</div>
              <div style={{ color: '#6B7E9F', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)' }}
      >
        <motion.div animate={{ y: [0, 9, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}>
          <ArrowDown size={16} style={{ color: 'rgba(184,196,216,0.5)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
