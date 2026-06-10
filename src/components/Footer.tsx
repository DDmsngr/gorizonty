const TG = 'https://t.me/gorizonty_bot'

export default function Footer() {
  return (
    <footer style={{ padding: '40px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#040C1E' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <a href="#hero" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 26, letterSpacing: '0.15em', color: '#F0F4FF', textDecoration: 'none', fontWeight: 300 }}>
          А<span style={{ color: '#C9A84C' }}>Р</span>
        </a>
        <p style={{ color: '#6B7E9F', fontSize: 13 }}>
          © 2025 Александр Резников — «Горизонты роста»
        </p>
        <a
          href={TG}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#C9A84C', fontSize: 13, textDecoration: 'none', transition: 'color 0.3s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#E8C96A')}
          onMouseLeave={e => (e.currentTarget.style.color = '#C9A84C')}
        >
          Telegram →
        </a>
      </div>
    </footer>
  )
}
