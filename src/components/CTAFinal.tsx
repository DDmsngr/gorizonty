import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const TG = 'https://t.me/gorizonty_bot'

export default function CTAFinal() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{ padding: '160px 24px', backgroundColor: '#071428', position: 'relative', overflow: 'hidden' }}>
      {/* Glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 900, height: 500, borderRadius: '50%', background: 'rgba(201,168,76,0.04)', filter: 'blur(130px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 32 }}>
            <div style={{ height: 1, width: 64, background: 'rgba(201,168,76,0.55)' }} />
            <span style={{ color: '#C9A84C', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Следующий шаг</span>
            <div style={{ height: 1, width: 64, background: 'rgba(201,168,76,0.55)' }} />
          </div>

          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, fontSize: 'clamp(52px,8vw,108px)', lineHeight: 0.88, color: '#F0F4FF', marginBottom: 32 }}>
            Готовы к<br />
            <span style={{ fontStyle: 'italic', color: '#C9A84C' }}>следующему<br />уровню?</span>
          </h2>

          <p style={{ color: '#8A9CC0', fontSize: 18, lineHeight: 1.65, maxWidth: 520, margin: '0 auto 48px' }}>
            Новый поток начинается скоро. Мест ограниченное количество.
            Запишитесь сейчас — и зафиксируйте текущую цену.
          </p>

          <motion.a
            href={TG}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '18px 48px', background: '#C9A84C', color: '#040C1E', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, textDecoration: 'none', transition: 'background 0.3s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#E8C96A')}
            onMouseLeave={e => (e.currentTarget.style.background = '#C9A84C')}
          >
            Записаться в Telegram
            <ArrowUpRight size={18} />
          </motion.a>

          <p style={{ marginTop: 20, color: '#6B7E9F', fontSize: 13 }}>Ответим в течение часа</p>
        </motion.div>
      </div>
    </section>
  )
}
