import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const credentials = [
  '12 лет в предпринимательстве',
  'Основатель 3 успешных компаний',
  '200+ менторинговых сессий',
  'Спикер на федеральных конференциях',
  'Автор методики «Горизонты роста»',
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 },
    transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] as number[] },
  })

  return (
    <section id="about" ref={ref} style={{ padding: '120px 24px', backgroundColor: '#040C1E' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: 80 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
            <div style={{ height: 1, width: 48, background: 'rgba(201,168,76,0.55)' }} />
            <span style={{ color: '#C9A84C', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Об авторе</span>
          </div>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, fontSize: 'clamp(44px,5.5vw,76px)', lineHeight: 0.95, color: '#F0F4FF' }}>
            Александр<br /><span style={{ fontStyle: 'italic', color: '#B8C4D8' }}>Резников</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 64, alignItems: 'start' }}>
          {/* Photo */}
          <motion.div {...fadeUp(0.2)} style={{ position: 'relative' }}>
            <div style={{ aspectRatio: '3/4', background: '#071428', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: 440 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 96, color: '#0D2148', fontWeight: 300, lineHeight: 1 }}>АР</div>
                <div style={{ color: '#3A4F72', fontSize: 11, letterSpacing: '0.2em', marginTop: 12, textTransform: 'uppercase' }}>Фото клиента</div>
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: -16, right: -16, width: 96, height: 96, borderRight: '1px solid rgba(201,168,76,0.25)', borderBottom: '1px solid rgba(201,168,76,0.25)' }} />
            <div style={{ position: 'absolute', top: -16, left: -16, width: 96, height: 96, borderLeft: '1px solid rgba(201,168,76,0.25)', borderTop: '1px solid rgba(201,168,76,0.25)' }} />
          </motion.div>

          {/* Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            <motion.div {...fadeUp(0.35)}>
              <p style={{ color: '#8A9CC0', fontSize: 18, lineHeight: 1.75, marginBottom: 20 }}>
                Я начинал с нуля. Три провала, прежде чем появился первый настоящий успех.
                Сейчас я помогаю предпринимателям пройти этот путь вдвое быстрее — без лишних ошибок и потерянных лет.
              </p>
              <p style={{ color: '#8A9CC0', fontSize: 18, lineHeight: 1.75 }}>
                За 12 лет я выстроил системный подход к росту бизнеса и личной эффективности.
                «Горизонты роста» — это не теория. Это живой опыт, упакованный в конкретные инструменты.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.5)} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {credentials.map((c, i) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.52 + i * 0.1 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 16 }}
                >
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C9A84C', flexShrink: 0 }} />
                  <span style={{ color: '#B8C4D8', fontSize: 14 }}>{c}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.blockquote
              {...fadeUp(0.9)}
              style={{ borderLeft: '2px solid rgba(201,168,76,0.35)', paddingLeft: 24 }}
            >
              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 22, color: 'rgba(240,244,255,0.78)', lineHeight: 1.55 }}>
                «Настоящий рост начинается тогда, когда вы видите горизонт — и всё равно идёте вперёд.»
              </p>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
