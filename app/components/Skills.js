const skills = [
  { name: 'Stock Market Analysis', icon: '📈', level: 'Advanced', anim: 'pulse' },
  { name: 'Stock Management', icon: '💼', level: 'Advanced', anim: 'pulse' },
  { name: 'AI Engineering', icon: '🤖', level: 'Expert', anim: 'tilt' },
  { name: 'Data Analysis', icon: '📊', level: 'Advanced', anim: 'pulse' },
  { name: 'Business Strategy', icon: '🎯', level: 'Advanced', anim: 'pulse' },
  { name: 'Project Management', icon: '📋', level: 'Intermediate', anim: 'tilt' },
];

export default function Skills() {
  return (
    <section id="skills" className="container">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2>Skills & Expertise</h2>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
          A combination of technical expertise and business acumen that drives innovative solutions.
        </p>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        {skills.map((skill, index) => (
          <div key={index} className={`card skill-card-3d skill-anim-${skill.anim}`} style={{ position: 'relative' }}>
            <span className="skill-icon-3d" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{skill.icon}</span>
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{skill.name}</h3>
            <span className="skill-level-ribbon" style={{
              position: 'absolute',
              top: 18,
              right: 18,
              background: 'var(--gradient-gold)',
              color: 'var(--bg-primary)',
              padding: '0.4rem 1.1rem',
              borderRadius: '1.2rem',
              fontSize: '0.95rem',
              fontWeight: 700,
              boxShadow: '0 0 12px 2px rgba(212,175,55,0.18)',
              letterSpacing: '0.02em',
              zIndex: 2
            }}>{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 