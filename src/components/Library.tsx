import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Video, FileText, BookOpen, Headphones } from 'lucide-react'

const items = [
  { Icon: Video,       count: '20+', label: 'Видео-уроков',      desc: 'Записи живых сессий и мастер-классов' },
  { Icon: FileText,    count: '15+', label: 'Рабочих тетрадей',  desc: 'PDF с практическими заданиями по каждому модулю' },
  { Icon: BookOpen,    count: '10+', label: 'Гайдов',            desc: 'Пошаговые руководства по ключевым темам' },
  { Icon: Headphones,  count: '5+',  label: 'Подкастов',         desc: 'Аудио-форматы для обучения в движении' },
]

export default function Library() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="library" ref={ref} style={{ padding: '120px 24px', backgroundColor: '#040C1E' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          style={{ marginBottom: 72 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
            <div style={{ height: 1, width: 48, background: 'rgba(201,168,76,0.55)' }} />
            <span style={{ color: '#C9A84C', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Библиотека знаний</span>
          </div>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, fontSize: 'clamp(44px,5.5vw,76px)', lineHeight: 0.95, color: '#F0F4FF' }}>
            50+ материалов<br /><span style={{ fontStyle: 'italic', color: '#B8C4D8' }}>в одном месте</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {items.map(({ Icon, count, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              style={{ padding: '36px 28px', border: '1px solid rgba(255,255,255,0.07)', transition: 'all 0.4s', cursor: 'default' }}
              onMouseEnter={e => { const t = e.currentTarget; t.style.borderColor = 'rgba(201,168,76,0.28)'; t.style.background = '#0A1C3A' }}
              onMouseLeave={e => { const t = e.currentTarget; t.style.borderColor = 'rgba(255,255,255,0.07)'; t.style.background = 'transparent' }}
            >
              <Icon size={28} style={{ color: '#C9A84C', marginBottom: 24 }} />
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 48, color: '#F0F4FF', fontWeight: 300, lineHeight: 1, marginBottom: 8 }}>{count}</div>
              <div style={{ color: '#F0F4FF', fontWeight: 600, fontSize: 14, marginBottom: 8 }}>{label}</div>
              <div style={{ color: '#6B7E9F', fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
          style={{ marginTop: 24, padding: '24px 28px', background: '#071428', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}
        >
          <div>
            <p style={{ color: '#F0F4FF', fontWeight: 500, marginBottom: 4 }}>Библиотека постоянно пополняется</p>
            <p style={{ color: '#6B7E9F', fontSize: 13 }}>После интенсива доступ к новым материалам сохраняется навсегда</p>
          </div>
          <div style={{ padding: '8px 20px', border: '1px solid rgba(255,255,255,0.12)', color: '#8A9CC0', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', flexShrink: 0 }}>
            Пожизненный доступ
          </div>
        </motion.div>
      </div>
    </section>
  )
}
