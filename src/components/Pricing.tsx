import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'

const TG = 'https://t.me/gorizonty_bot'

const plans = [
  {
    name: 'Базовый',
    price: '29 900',
    desc: 'Доступ к записям и материалам',
    features: ['Все записи сессий', 'Библиотека знаний (50+)', 'Рабочие тетради и гайды', 'Закрытый Telegram-канал'],
    highlight: false,
    badge: '',
  },
  {
    name: 'Интенсив',
    price: '59 900',
    desc: 'Живые сессии + полный доступ',
    features: ['Всё из «Базового»', '16 живых онлайн-сессий', 'Разборы домашних заданий', 'Нетворкинг с участниками', 'Чат с доступом к Резникову'],
    highlight: true,
    badge: 'Популярный',
  },
  {
    name: 'VIP',
    price: '149 900',
    desc: 'Личный коучинг + всё включено',
    features: ['Всё из «Интенсива»', '4 личные сессии с Резниковым', 'Персональная стратегия', 'Горячая линия в мессенджере', 'Приоритетная обратная связь'],
    highlight: false,
    badge: '',
  },
]

export default function Pricing() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" ref={ref} style={{ padding: '120px 24px', backgroundColor: '#071428' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 16 }}>
            <div style={{ height: 1, width: 48, background: 'rgba(201,168,76,0.55)' }} />
            <span style={{ color: '#C9A84C', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Тарифы</span>
            <div style={{ height: 1, width: 48, background: 'rgba(201,168,76,0.55)' }} />
          </div>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, fontSize: 'clamp(44px,5.5vw,76px)', lineHeight: 0.95, color: '#F0F4FF' }}>
            Выберите свой<br /><span style={{ fontStyle: 'italic', color: '#B8C4D8' }}>формат</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, alignItems: 'start' }}>
          {plans.map(({ name, price, desc, features, highlight, badge }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.14 }}
              style={{
                position: 'relative', padding: '40px 32px', display: 'flex', flexDirection: 'column',
                background: highlight ? '#0D1F45' : '#0A1C3A',
                border: highlight ? '1px solid rgba(201,168,76,0.38)' : '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {badge && (
                <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', padding: '4px 16px', background: '#C9A84C', color: '#040C1E', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                  {badge}
                </div>
              )}

              <div style={{ marginBottom: 32 }}>
                <h3 style={{ color: '#F0F4FF', fontSize: 12, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 12 }}>{name}</h3>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', color: '#F0F4FF', fontWeight: 300, lineHeight: 1, marginBottom: 8 }}>
                  <span style={{ fontSize: 52 }}>{price}</span>
                  <span style={{ fontSize: 22, color: '#8A9CC0', marginLeft: 4 }}>₽</span>
                </div>
                <p style={{ color: '#6B7E9F', fontSize: 13 }}>{desc}</p>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36, flex: 1 }}>
                {features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <Check size={14} style={{ color: '#C9A84C', marginTop: 2, flexShrink: 0 }} />
                    <span style={{ color: '#B8C4D8', fontSize: 14, lineHeight: 1.5 }}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={TG}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block', padding: '16px', textAlign: 'center', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none', transition: 'all 0.3s',
                  background: highlight ? '#C9A84C' : 'transparent',
                  color: highlight ? '#040C1E' : 'rgba(255,255,255,0.65)',
                  border: highlight ? 'none' : '1px solid rgba(255,255,255,0.18)',
                }}
                onMouseEnter={e => {
                  const t = e.currentTarget
                  if (highlight) { t.style.background = '#E8C96A' }
                  else { t.style.borderColor = 'rgba(255,255,255,0.45)'; t.style.color = '#F0F4FF' }
                }}
                onMouseLeave={e => {
                  const t = e.currentTarget
                  if (highlight) { t.style.background = '#C9A84C' }
                  else { t.style.borderColor = 'rgba(255,255,255,0.18)'; t.style.color = 'rgba(255,255,255,0.65)' }
                }}
              >
                Записаться
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }}
          style={{ textAlign: 'center', color: '#6B7E9F', fontSize: 13, marginTop: 24 }}
        >
          Доступна рассрочка на 3 и 6 месяцев. Напишите нам в Telegram.
        </motion.p>
      </div>
    </section>
  )
}
