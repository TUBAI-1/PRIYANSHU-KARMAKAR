import AIRobot from './AIRobot';

export default function Summary() {
  return (
    <section id="summary" className="hero-3d">
      <div style={{ maxWidth: '900px', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
        <div className="hero-avatar ai-robot-container" style={{ 
          margin: '0 auto 1.5rem', 
          width: '200px', 
          height: '200px', 
          borderRadius: '50%', 
          background: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          boxShadow: 'var(--shadow-3d)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <span
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--accent)',
              textShadow: '0 2px 16px var(--accent)',
              letterSpacing: '0.04em',
              marginTop: '18px',
              marginBottom: '0',
              zIndex: 2,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            Hi!
          </span>
          <div style={{ width: '140px', height: '140px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
            <AIRobot />
          </div>
        </div>
        <h1 style={{ marginBottom: '0.5rem', fontSize: '2.5rem', color: 'var(--text-primary)', background: 'none', WebkitTextFillColor: 'unset', textAlign: 'center' }}>Priyanshu Karmakar</h1>
        <h2 style={{ fontWeight: 600, color: 'var(--text-secondary)', fontSize: '1.3rem', marginBottom: '1.2rem', textShadow: 'var(--glow-gold)', textAlign: 'center' }}>
          AI Engineering Expert | Award-Winning Innovator | Creative Strategist
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.7', margin: '1.5rem 0 2.5rem', maxWidth: '700px', textAlign: 'center' }}>
          I am a results-driven individual with a proven track record of academic and professional success. Currently pursuing a BBA at JIS College of Engineering, I combine business strategy, management, and innovation with advanced AI engineering skills to deliver impactful solutions.
        </p>
        
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#contact" className="btn" style={{ 
            background: 'var(--gradient-gold)', 
            color: 'var(--bg-primary)', 
            padding: '1rem 2rem',
            borderRadius: '1rem',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            boxShadow: 'var(--shadow)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            Get In Touch
          </a>
          <a href="#projects" className="btn" style={{ 
            background: 'transparent', 
            color: 'var(--accent)', 
            padding: '1rem 2rem',
            borderRadius: '1rem',
            textDecoration: 'none',
            fontWeight: '600',
            border: '2px solid var(--accent)',
            transition: 'all 0.3s ease',
            boxShadow: 'var(--shadow)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
} 