import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Для кого этот интенсив?',
    a: 'Для предпринимателей с действующим бизнесом или чётким намерением его запустить. Интенсив для тех, кто уже делает результаты, но хочет выйти на следующий уровень — систематизировать, масштабировать или переосмыслить вектор.',
  },
  {
    q: 'Как проходят живые сессии?',
    a: 'Сессии проходят в Zoom каждую неделю по будням (время согласовывается с группой). Каждая сессия — 90–120 минут. Записи доступны в личном кабинете в течение 24 часов после эфира.',
  },
  {
    q: 'Что если я пропущу занятие?',
    a: 'Ничего страшного — все сессии записываются. Доступ к записям сохраняется навсегда. Вы сможете просмотреть материал в удобное время и задать вопросы в чате.',
  },
  {
    q: 'Есть ли гарантия результата?',
    a: 'Я не продаю «волшебную таблетку». Интенсив — это инструменты и поддержка. Результат зависит от вашей вовлечённости. Участники, которые проходят программу полностью и выполняют задания, фиксируют кратный рост через 3–6 месяцев.',
  },
  {
    q: 'Можно ли платить в рассрочку?',
    a: 'Да, для тарифов «Интенсив» и «VIP» доступна рассрочка на 3 или 6 месяцев без переплаты. Напишите нам в Telegram, и мы оформим удобный формат.',
  },
  {
    q: 'Когда следующий поток?',
    a: 'Набор открывается раз в квартал. Точные даты — в нашем Telegram-канале. Запишитесь сейчас, чтобы попасть в ближайший поток и зафиксировать текущую цену.',
  },
]

export default function FAQ() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" ref={ref} style={{ padding: '120px 24px', backgroundColor: '#040C1E' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 16 }}>
            <div style={{ height: 1, width: 48, background: 'rgba(201,168,76,0.55)' }} />
            <span style={{ color: '#C9A84C', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase' }}>FAQ</span>
            <div style={{ height: 1, width: 48, background: 'rgba(201,168,76,0.55)' }} />
          </div>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, fontSize: 'clamp(44px,5.5vw,76px)', lineHeight: 0.95, color: '#F0F4FF' }}>
            Частые<br /><span style={{ fontStyle: 'italic', color: '#B8C4D8' }}>вопросы</span>
          </h2>
        </motion.div>

        <div>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', padding: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
              >
                <span style={{ color: open === i ? '#C9A84C' : '#F0F4FF', fontSize: 16, fontWeight: 500, lineHeight: 1.4, transition: 'color 0.3s' }}>{faq.q}</span>
                <div style={{ color: '#C9A84C', flexShrink: 0 }}>
                  {open === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ paddingBottom: 24, color: '#8A9CC0', lineHeight: 1.75, fontSize: 15 }}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
