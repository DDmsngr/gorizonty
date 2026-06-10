import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Compass, Zap, Users, TrendingUp, Star } from 'lucide-react'

const modules = [
  { num: '01', Icon: Target,     title: 'Диагностика',         desc: 'Честный аудит бизнеса и личной эффективности. Находим точку А и честно смотрим в глаза реальности.' },
  { num: '02', Icon: Compass,    title: 'Стратегия роста',     desc: 'Формируем ясный вектор. Куда идти, зачем, как не сбиться с курса при первом же шторме.' },
  { num: '03', Icon: Zap,        title: 'Энергия и ресурс',    desc: 'Система восстановления и управления личной энергией для устойчивого результата без выгорания.' },
  { num: '04', Icon: Users,      title: 'Команда и окружение', desc: 'Как строить команду мечты и выбирать окружение, которое поднимает, а не тянет вниз.' },
  { num: '05', Icon: TrendingUp, title: 'Масштабирование',     desc: 'Переход с уровня «делаю всё сам» на уровень «система работает без меня».' },
  { num: '06', Icon: Star,       title: 'Личный бренд',        desc: 'Позиционирование, публичность и репутация как активы бизнеса — а не обязанность.' },
]

const included = [
  { val: '16', label: 'живых сессий' },
  { val: '50+', label: 'материалов' },
  { val: '8', label: 'заданий' },
  { val: '∞', label: 'доступ к записям' },
]

export default function Program() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="program" ref={ref} style={{ padding: '120px 24px', backgroundColor: '#071428' }}>
      <style>{`
        .prog-grid {
          display: grid;
          gap: 1px;
          background-color: rgba(184,196,216,0.06);
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) { .prog-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .prog-grid { grid-template-columns: repeat(3, 1fr); } }

        .prog-card {
          background: #071428;
          padding: 36px 32px;
          cursor: default;
          transition: background 0.4s, box-shadow 0.4s;
          position: relative;
          overflow: hidden;
        }
        .prog-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(184,196,216,0.04) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .prog-card:hover { background: #0A1C3A; box-shadow: inset 0 0 0 1px rgba(184,196,216,0.15), 0 0 40px rgba(184,196,216,0.04); }
        .prog-card:hover::before { opacity: 1; }
        .prog-card:hover .prog-num { color: rgba(184,196,216,0.25); }
        .prog-card:hover .prog-icon { color: #D4DCE8; filter: drop-shadow(0 0 6px rgba(212,220,232,0.5)); }
        .prog-num { font-family: "Cormorant Garamond", serif; font-size: 52px; color: rgba(184,196,216,0.12); font-weight: 300; line-height: 1; transition: color 0.4s; }
        .prog-icon { color: #B8C4D8; transition: color 0.4s, filter 0.4s; }
      `}</style>

      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          style={{ marginBottom: 72, display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'space-between', alignItems: 'flex-end' }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
              <div style={{ height: 1, width: 48, background: 'rgba(184,196,216,0.4)' }} />
              <span style={{ color: '#B8C4D8', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Программа</span>
            </div>
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, fontSize: 'clamp(44px,5.5vw,76px)', lineHeight: 0.95, color: '#F0F4FF' }}>
              8 недель,<br /><span style={{ fontStyle: 'italic', color: '#B8C4D8' }}>6 модулей</span>
            </h2>
          </div>
          <p style={{ color: '#8A9CC0', maxWidth: 340, lineHeight: 1.7, fontSize: 15 }}>
            Каждый модуль — живые сессии, записи, домашние задания и личная обратная связь.
          </p>
        </motion.div>

        {/* Grid — 3 columns, no orphan */}
        <div className="prog-grid">
          {modules.map(({ num, Icon, title, desc }, i) => (
            <motion.div
              key={num}
              className="prog-card"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                <span className="prog-num">{num}</span>
                <Icon size={20} className="prog-icon" />
              </div>
              <h3 style={{ color: '#F0F4FF', fontWeight: 600, fontSize: 16, marginBottom: 10 }}>{title}</h3>
              <p style={{ color: '#6B7E9F', fontSize: 14, lineHeight: 1.65 }}>{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Included stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }}
          style={{ marginTop: 48, padding: '36px 40px', border: '1px solid rgba(184,196,216,0.1)', background: 'rgba(184,196,216,0.02)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 32 }}
        >
          {included.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 44, color: '#B8C4D8', fontWeight: 300, lineHeight: 1, marginBottom: 8 }}>{s.val}</div>
              <div style={{ color: '#6B7E9F', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
