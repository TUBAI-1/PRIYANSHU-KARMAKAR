const education = [
  {
    institution: 'JIS College of Engineering',
    degree: 'Bachelor of Business Administration (BBA)',
    field: 'Business Administration and Management',
    period: 'August 2023 - December 2027',
    description: 'Currently pursuing a comprehensive business education with focus on strategy, management, and innovation.',
    icon: '🎓',
    status: 'In Progress'
  },
  {
    institution: 'Barasat-1 Govt ITI College',
    degree: 'Electronics Mechanic',
    field: 'Technical Education',
    period: 'August 2021 - August 2023',
    description: 'Completed technical training in electronics mechanics, developing hands-on skills and technical expertise.',
    icon: '⚡',
    status: 'Completed'
  },
  {
    institution: 'Oriental Public School - India',
    degree: 'Higher Secondary',
    field: 'Business/Commerce',
    period: 'August 2021 - May 2023',
    description: 'Achieved academic excellence as school topper, laying strong foundation in business and commerce.',
    icon: '🏫',
    status: 'Completed'
  },
  {
    institution: 'Oriental Public School - India',
    degree: 'Secondary Education',
    field: 'General Education',
    period: 'August 2021',
    description: 'Completed secondary education with distinction, demonstrating strong academic capabilities.',
    icon: '📚',
    status: 'Completed'
  }
];

export default function Education() {
  return (
    <section id="education" className="container">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2>Education</h2>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
          A strong academic foundation combining business education with technical expertise.
        </p>
      </div>
      
      <div className="experience-timeline" style={{ maxWidth: '900px', margin: '0 auto' }}>
        {education.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">
              {edu.icon}
            </div>
            
            <div className="card" style={{ marginBottom: '0' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent)' }}>{edu.institution}</h3>
                <h4 style={{ marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-primary)' }}>{edu.degree}</h4>
                <p style={{ 
                  color: 'var(--text-muted)', 
                  marginBottom: '1rem',
                  fontSize: '1rem'
                }}>
                  {edu.field}
                </p>
                <div style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  alignItems: 'center',
                  marginBottom: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <span className="tech-tag">
                    {edu.period}
                  </span>
                  <span style={{ 
                    background: edu.status === 'In Progress' ? 'var(--gradient-gold)' : 'var(--accent)', 
                    color: 'var(--bg-primary)', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '2rem',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    boxShadow: 'var(--shadow)'
                  }}>
                    {edu.status}
                  </span>
                </div>
              </div>
              
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 