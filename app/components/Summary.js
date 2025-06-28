export default function Summary() {
  return (
    <section id="summary" className="hero-3d">
      <div style={{ maxWidth: '900px', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
        <div className="hero-avatar" style={{ margin: '0 auto 1.5rem' }}>
          <img src="/profile.jpg" alt="Priyanshu Karmakar" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', boxShadow: 'var(--shadow-3d)' }} />
        </div>
        <h1 style={{ marginBottom: '0.5rem', fontSize: '2.5rem', color: 'var(--text-primary)', background: 'none', WebkitTextFillColor: 'unset', textAlign: 'center' }}>Priyanshu Karmakar</h1>
        <h2 style={{ fontWeight: 600, color: 'var(--text-secondary)', fontSize: '1.3rem', marginBottom: '1.2rem', textShadow: 'var(--glow-gold)', textAlign: 'center' }}>
          AI Engineering Expert | Award-Winning Innovator | Creative Strategist
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.7', margin: '1.5rem 0 2.5rem', maxWidth: '700px', textAlign: 'center' }}>
          I am a results-driven individual with a proven track record of academic and professional success. Currently pursuing a BBA at JIS College of Engineering, I combine business strategy, management, and innovation with advanced AI engineering skills to deliver impactful solutions.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact" className="btn" style={{ fontSize: '1.1rem', fontWeight: 700 }}>
            Get in Touch
          </a>
          <a href="#projects" className="btn" style={{ background: 'transparent', color: 'var(--accent)', border: '2px solid var(--accent)', fontSize: '1.1rem', fontWeight: 700, position: 'relative', overflow: 'hidden' }}>
            View Projects
          </a>
          <a href="/resume.pdf" download className="btn" style={{ background: 'var(--gradient-gold)', color: 'var(--bg-primary)', fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '1.2em' }}>⬇️</span> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
} 