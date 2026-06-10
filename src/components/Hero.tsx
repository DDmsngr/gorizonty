import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const TG = 'https://t.me/gorizonty_bot'

const stats = [
  { num: '12+', label: 'лет в бизнесе' },
  { num: '200+', label: 'клиентов' },
  { num: '8', label: 'недель интенсива' },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
    >
      {/* Orb 1 */}
      <div style={{ position: 'absolute', top: '20%', left: '15%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(20,58,120,0.15)', filter: 'blur(120px)', pointerEvents: 'none', animation: 'pulse 4s ease-in-out infinite' }} />
      {/* Orb 2 */}
      <div style={{ position: 'absolute', bottom: '25%', right: '15%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(10,30,80,0.2)', filter: 'blur(100px)', pointerEvents: 'none', animation: 'pulse 5s ease-in-out 1s infinite' }} />
      {/* Gold center glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 700, borderRadius: '50%', background: 'rgba(201,168,76,0.03)', filter: 'blur(140px)', pointerEvents: 'none' }} />
      {/* Grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.025, backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)', backgroundSize: '90px 90px', pointerEvents: 'none' }} />

      <motion.div style={{ y, opacity, position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px', maxWidth: 960, width: '100%' }}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 32 }}
        >
          <div style={{ height: 1, width: 56, background: 'rgba(201,168,76,0.55)' }} />
          <span style={{ color: '#C9A84C', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 500 }}>Онлайн-интенсив</span>
          <div style={{ height: 1, width: 56, background: 'rgba(201,168,76,0.55)' }} />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, lineHeight: 0.88, letterSpacing: '-0.01em', marginBottom: 24, fontSize: 'clamp(72px, 11vw, 148px)' }}
        >
          <span style={{ color: '#F0F4FF', display: 'block' }}>Горизонты</span>
          <span style={{ color: '#B8C4D8', fontStyle: 'italic', display: 'block' }}>роста</span>
        </motion.h1>

        {/* Author */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ color: '#6B7E9F', fontSize: 12, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 32 }}
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
            style={{ padding: '16px 36px', background: '#C9A84C', color: '#040C1E', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, textDecoration: 'none', minWidth: 220, textAlign: 'center', transition: 'background 0.3s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#E8C96A')}
            onMouseLeave={e => (e.currentTarget.style.background = '#C9A84C')}
          >
            Записаться
          </a>
          <a
            href="#about"
            style={{ padding: '16px 36px', border: '1px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.65)', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', minWidth: 220, textAlign: 'center', transition: 'all 0.3s' }}
            onMouseEnter={e => { const t = e.currentTarget; t.style.borderColor = 'rgba(255,255,255,0.45)'; t.style.color = '#F0F4FF' }}
            onMouseLeave={e => { const t = e.currentTarget; t.style.borderColor = 'rgba(255,255,255,0.18)'; t.style.color = 'rgba(255,255,255,0.65)' }}
          >
            Узнать подробнее
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{ marginTop: 72, paddingTop: 48, borderTop: '1px solid rgba(255,255,255,0.06)', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}
        >
          {stats.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 44, color: '#C9A84C', fontWeight: 300, lineHeight: 1, marginBottom: 6 }}>{s.num}</div>
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
          <ArrowDown size={16} style={{ color: '#6B7E9F' }} />
        </motion.div>
      </motion.div>

      <style>{`@keyframes pulse { 0%,100%{opacity:0.6} 50%{opacity:1} }`}</style>
    </section>
  )
}
