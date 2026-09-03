import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HammerheadAerospace,
})

// ─── SVG Logo ────────────────────────────────────────────────────────────────
function HammerheadLogo({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer ring */}
      <circle cx="50" cy="50" r="46" stroke="rgba(100,181,246,0.5)" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="40" stroke="rgba(100,181,246,0.2)" strokeWidth="0.5" />
      {/* Rocket body */}
      <path d="M50 18 L44 50 L50 56 L56 50 Z" fill="#2196f3" opacity="0.9" />
      {/* Nose cone glow */}
      <path d="M50 18 L44 50 L56 50 Z" fill="#64b5f6" />
      {/* Hammerhead fins — wide horizontal spread */}
      <path d="M36 68 L44 52 L50 56 L44 72 Z" fill="#1565c0" />
      <path d="M64 68 L56 52 L50 56 L56 72 Z" fill="#1565c0" />
      {/* Wide hammerhead crossbar */}
      <rect x="26" y="66" width="48" height="5" rx="2.5" fill="#0a3a6b" stroke="#2196f3" strokeWidth="0.8" />
      {/* Engine exhaust */}
      <path d="M46 56 L50 72 L54 56" fill="#64b5f6" opacity="0.4" />
      {/* Center dot */}
      <circle cx="50" cy="44" r="3" fill="#e8f4fd" opacity="0.9" />
    </svg>
  )
}

// ─── Stars background ────────────────────────────────────────────────────────
function StarField() {
  const stars = [
    { x: '8%', y: '12%', r: 1.2, o: 0.8 }, { x: '23%', y: '5%', r: 0.8, o: 0.6 },
    { x: '37%', y: '18%', r: 1.5, o: 0.9 }, { x: '52%', y: '8%', r: 1, o: 0.7 },
    { x: '64%', y: '22%', r: 0.8, o: 0.5 }, { x: '78%', y: '10%', r: 1.2, o: 0.8 },
    { x: '91%', y: '28%', r: 0.9, o: 0.7 }, { x: '15%', y: '35%', r: 1, o: 0.6 },
    { x: '44%', y: '42%', r: 1.8, o: 0.9 }, { x: '70%', y: '38%', r: 0.7, o: 0.5 },
    { x: '88%', y: '52%', r: 1.3, o: 0.8 }, { x: '5%', y: '60%', r: 0.9, o: 0.6 },
    { x: '28%', y: '68%', r: 1.1, o: 0.7 }, { x: '55%', y: '75%', r: 0.8, o: 0.5 },
    { x: '74%', y: '62%', r: 1.4, o: 0.8 }, { x: '93%', y: '78%', r: 1, o: 0.6 },
    { x: '18%', y: '85%', r: 0.7, o: 0.5 }, { x: '40%', y: '92%', r: 1.2, o: 0.7 },
    { x: '82%', y: '88%', r: 0.9, o: 0.6 }, { x: '60%', y: '55%', r: 1.5, o: 0.4 },
    { x: '33%', y: '48%', r: 0.6, o: 0.5 }, { x: '11%', y: '78%', r: 1, o: 0.6 },
    { x: '96%', y: '45%', r: 0.8, o: 0.7 }, { x: '47%', y: '30%', r: 0.7, o: 0.5 },
  ]
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {stars.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="white" opacity={s.o} />
      ))}
      {/* Blue-tinted stars */}
      <circle cx="30%" cy="25%" r="2" fill="#64b5f6" opacity="0.6" />
      <circle cx="67%" cy="48%" r="1.8" fill="#90caf9" opacity="0.5" />
      <circle cx="50%" cy="80%" r="2.2" fill="#64b5f6" opacity="0.5" />
    </svg>
  )
}

// ─── Orbit Rings ─────────────────────────────────────────────────────────────
function OrbitRings() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
      {[320, 500, 680].map((size, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: size,
            height: size,
            borderRadius: '50%',
            border: `1px solid rgba(100,181,246,${0.1 - i * 0.025})`,
          }}
        />
      ))}
    </div>
  )
}

// ─── Section wrapper ─────────────────────────────────────────────────────────
function Section({ id, children, style }: { id?: string; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <section id={id} style={{ padding: '5rem 1.5rem', position: 'relative', ...style }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>{children}</div>
    </section>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
function HammerheadAerospace() {
  return (
    <div style={{ background: 'var(--space-darkest)', minHeight: '100vh', color: 'var(--space-white)' }}>

      {/* ── HERO ── */}
      <div
        id="hero"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: 'radial-gradient(ellipse at 50% 40%, #032040 0%, #021529 45%, #010b1a 100%)',
          overflow: 'hidden',
        }}
      >
        <StarField />
        <OrbitRings />

        {/* Nav */}
        <nav style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 2rem',
          borderBottom: '1px solid rgba(100,181,246,0.1)',
          background: 'rgba(1,11,26,0.6)',
          backdropFilter: 'blur(12px)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <HammerheadLogo size={36} />
            <span style={{ fontWeight: 700, letterSpacing: '0.1em', fontSize: '0.95rem', color: 'var(--space-glow)' }}>
              HAMMERHEAD
            </span>
          </div>
          <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['About', 'History', 'Members', 'Launches', 'Sponsors', 'Contact'].map(label => (
              <a key={label} href={`#${label.toLowerCase()}`} className="nav-link">{label}</a>
            ))}
          </div>
        </nav>

        {/* Hero content */}
        <div style={{
          position: 'relative',
          zIndex: 5,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '4rem 1.5rem',
        }}>
          <HammerheadLogo size={90} />
          <div style={{ marginTop: '2rem', marginBottom: '0.5rem' }}>
            <div className="section-label" style={{ marginBottom: '1rem' }}>Student Rocketry Club</div>
          </div>
          <h1
            className="glow-text"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: 900,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              margin: '0 0 1rem',
              color: '#e8f4fd',
              lineHeight: 1,
            }}
          >
            Hammerhead<br />
            <span style={{ color: 'var(--space-glow)', fontSize: '0.6em' }}>Aerospace</span>
          </h1>
          <p style={{
            maxWidth: 560,
            lineHeight: 1.7,
            color: 'rgba(232,244,253,0.7)',
            fontSize: '1.05rem',
            marginBottom: '2.5rem',
          }}>
            Pushing the boundaries of experimental rocketry — from model engines to high-power launches.
            We design, build, and fly.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#members" className="btn-primary">Join the Mission</a>
            <a href="#about" className="btn-secondary">Learn More</a>
          </div>
        </div>
      </div>

      {/* ── STATS STRIP ── */}
      <div style={{
        background: 'rgba(10,58,107,0.4)',
        borderTop: '1px solid rgba(100,181,246,0.15)',
        borderBottom: '1px solid rgba(100,181,246,0.15)',
        padding: '2rem 1.5rem',
      }}>
        <div style={{
          maxWidth: 1000,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1.5rem',
          textAlign: 'center',
        }}>
          {[
            { value: '38', label: 'Active Members' },
            { value: '94+', label: 'Launches' },
            { value: '8.4 km', label: 'Altitude Record' },
            { value: '6', label: 'Years Active' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="glow-text" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--space-glow)', letterSpacing: '0.05em' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(232,244,253,0.5)', marginTop: '0.25rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <Section id="about" style={{ background: 'rgba(2,21,41,0.8)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="section-label">Who We Are</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.2 }}>
              Built for the bold. <span style={{ color: 'var(--space-glow)' }}>Flown for the future.</span>
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(232,244,253,0.7)', marginBottom: '1.25rem' }}>
              Hammerhead Aerospace is a collegiate rocketry club dedicated to advancing student-led
              rocket design, propulsion research, and flight operations. Named after the distinctive
              hammerhead shark — a predator of precision and power — we channel that same drive into
              every vehicle we launch.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(232,244,253,0.7)' }}>
              Our multidisciplinary team of engineers, scientists, and pilots collaborate to compete
              in national competitions, set altitude records, and develop next-generation propulsion
              systems. We are certified by the Tripoli Rocketry Association and National Association
              of Rocketry.
            </p>
          </div>
          {/* Decorative panel */}
          <div className="space-card" style={{ padding: '2.5rem', borderRadius: '0.75rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', top: '-30px', right: '-30px',
              width: 160, height: 160,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(33,150,243,0.15) 0%, transparent 70%)',
            }} />
            <div className="section-label">Core Disciplines</div>
            {[
              { icon: '🚀', title: 'Propulsion', desc: 'Solid, hybrid, and liquid motor development' },
              { icon: '🛠', title: 'Airframe & Structures', desc: 'Composite and machined rocket body fabrication' },
              { icon: '📡', title: 'Avionics', desc: 'Custom flight computers, telemetry, and recovery' },
              { icon: '💨', title: 'Aerodynamics', desc: 'CFD simulation and wind tunnel analysis' },
            ].map(d => (
              <div key={d.title} style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{d.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: '0.2rem', color: 'var(--space-glow)' }}>{d.title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(232,244,253,0.6)', lineHeight: 1.5 }}>{d.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <hr className="space-divider" />

      {/* ── HISTORY ── */}
      <Section id="history" style={{ background: 'rgba(1,11,26,0.9)' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label">Our Journey</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, margin: 0 }}>
            Mission <span style={{ color: 'var(--space-glow)' }}>History</span>
          </h2>
        </div>
        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, transparent, rgba(100,181,246,0.4), rgba(100,181,246,0.4), transparent)',
            transform: 'translateX(-50%)',
          }} />
          {[
            { year: '2018', title: 'Foundation Launch', desc: 'Hammerhead Aerospace founded by six aerospace engineering students. First successful L1 certification flight reaching 2.1 km.' },
            { year: '2019', title: 'Altitude Breakthrough', desc: 'Introduced the HH-2 "Mako" airframe. Competed in Spaceport America Cup, reaching 4.8 km. Expanded to 15 members.' },
            { year: '2020', title: 'Hybrid Motor Research', desc: 'Launched our Hybrid Propulsion Division. Despite global disruptions, completed three static fire tests for the HH-3 motor.' },
            { year: '2021', title: 'Avionics Division', desc: 'Developed proprietary open-source flight computer "SharkNav v1". Successful dual-deploy recovery system flights.' },
            { year: '2022', title: 'Competition Podium', desc: 'Placed 3rd nationally in the Intercollegiate Rocket Engineering Competition (IREC). Club membership surpassed 30.' },
            { year: '2023', title: 'Altitude Record', desc: 'HH-5 "Great White" achieved club altitude record of 8.4 km on a hybrid motor. Telemetry streamed live to 500+ online viewers.' },
            { year: '2024', title: 'Spaceport & Expansion', desc: 'Launched first two-stage vehicle prototype. Secured three industry sponsors. Introduced outreach program for local high schools.' },
          ].map((event, i) => {
            const isLeft = i % 2 === 0
            return (
              <div
                key={event.year}
                style={{
                  display: 'flex',
                  justifyContent: isLeft ? 'flex-start' : 'flex-end',
                  marginBottom: '2.5rem',
                  position: 'relative',
                }}
              >
                {/* Dot */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '1.5rem',
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: 'var(--space-glow)',
                  transform: 'translateX(-50%)',
                  boxShadow: '0 0 12px rgba(100,181,246,0.8)',
                  zIndex: 2,
                }} />
                <div
                  className="space-card"
                  style={{
                    width: '44%',
                    padding: '1.5rem',
                    borderRadius: '0.5rem',
                    marginLeft: isLeft ? 0 : undefined,
                    marginRight: isLeft ? undefined : 0,
                  }}
                >
                  <div style={{ color: 'var(--space-accent)', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                    {event.year}
                  </div>
                  <div style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '1rem' }}>{event.title}</div>
                  <div style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'rgba(232,244,253,0.65)' }}>{event.desc}</div>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      <hr className="space-divider" />

      {/* ── MEMBERS ── */}
      <Section id="members" style={{ background: 'rgba(2,21,41,0.8)' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label">The Crew</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, margin: 0 }}>
            Our <span style={{ color: 'var(--space-glow)' }}>Members</span>
          </h2>
          <p style={{ color: 'rgba(232,244,253,0.6)', marginTop: '0.75rem', maxWidth: 500, margin: '0.75rem auto 0' }}>
            A multidisciplinary team of students turning aerospace ambitions into reality.
          </p>
        </div>
        {/* Leadership */}
        <div style={{ marginBottom: '1rem' }}>
          <div className="section-label" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Leadership</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { name: 'Sofia Reyes', role: 'President & Chief Engineer', major: 'Aerospace Engineering', emoji: '👩‍🚀' },
              { name: 'Marcus Chen', role: 'VP Operations', major: 'Mechanical Engineering', emoji: '👨‍💻' },
              { name: 'Aisha Patel', role: 'Chief of Propulsion', major: 'Chemical Engineering', emoji: '👩‍🔬' },
              { name: 'Lars Eriksen', role: 'Chief of Avionics', major: 'Electrical Engineering', emoji: '👨‍🔧' },
            ].map(m => (
              <div key={m.name} className="space-card" style={{ padding: '1.75rem', borderRadius: '0.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{m.emoji}</div>
                <div style={{ fontWeight: 700, marginBottom: '0.25rem', fontSize: '0.95rem' }}>{m.name}</div>
                <div style={{ color: 'var(--space-glow)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.25rem' }}>{m.role}</div>
                <div style={{ color: 'rgba(232,244,253,0.5)', fontSize: '0.75rem', letterSpacing: '0.05em' }}>{m.major}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Sub-teams */}
        <div style={{ marginTop: '2.5rem' }}>
          <div className="section-label" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Team Leads</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
            {[
              { name: 'Priya Nair', role: 'Structures Lead', emoji: '🛠' },
              { name: 'Jake Torres', role: 'Aerodynamics Lead', emoji: '💨' },
              { name: 'Yuki Tanaka', role: 'Recovery Lead', emoji: '🪂' },
              { name: 'Chloe Martin', role: 'Safety Officer', emoji: '🦺' },
              { name: 'Dev Malhotra', role: 'Outreach Lead', emoji: '📢' },
              { name: 'Sam Rivera', role: 'Manufacturing Lead', emoji: '⚙️' },
            ].map(m => (
              <div key={m.name} className="space-card" style={{ padding: '1.25rem', borderRadius: '0.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{m.emoji}</div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{m.name}</div>
                <div style={{ color: 'rgba(232,244,253,0.5)', fontSize: '0.75rem' }}>{m.role}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Join CTA */}
        <div style={{
          marginTop: '3rem',
          padding: '2.5rem',
          borderRadius: '0.75rem',
          textAlign: 'center',
          background: 'radial-gradient(ellipse at center, rgba(33,150,243,0.1) 0%, transparent 70%)',
          border: '1px solid rgba(100,181,246,0.2)',
        }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Ready to join the mission?</div>
          <p style={{ color: 'rgba(232,244,253,0.65)', marginBottom: '1.5rem' }}>
            We welcome students from all disciplines — no prior rocketry experience required.
          </p>
          <a href="mailto:join@hammerheadaerospace.org" className="btn-primary">Apply to Join</a>
        </div>
      </Section>

      <hr className="space-divider" />

      {/* ── LAUNCHES ── */}
      <Section id="launches" style={{ background: 'rgba(1,11,26,0.9)' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label">Flight Log</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, margin: 0 }}>
            Notable <span style={{ color: 'var(--space-glow)' }}>Launches</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {[
            { name: 'HH-1 "Hammerhead"', date: 'Oct 2018', altitude: '2.1 km', motor: 'CTI J530', status: 'Success', desc: 'First club launch and L1 certification flight. Dual-deploy recovery, on-board video.' },
            { name: 'HH-3 "Bull Shark"', date: 'Apr 2020', altitude: '5.3 km', motor: 'CTI K550', status: 'Success', desc: 'First competition entry. Placed 5th at IREC in 10k ft category.' },
            { name: 'HH-5 "Great White"', date: 'Jun 2023', altitude: '8.4 km', motor: 'Hybrid H-2', status: 'Record', desc: 'Club altitude record. Custom hybrid motor with live telemetry at 100 Hz.' },
            { name: 'HH-6 "Mako II"', date: 'Mar 2024', altitude: '6.1 km', motor: 'CTI L1115', status: 'Success', desc: 'Two-stage separation test. First successful main stage recovery via GPS tracker.' },
            { name: 'HH-7 "Thresher"', date: 'Sep 2024', altitude: '4.2 km', motor: 'CTI K815', status: 'Partial', desc: 'Avionics failure in drogue deploy. Vehicle recovered undamaged. Data was collected.' },
            { name: 'HH-8 "Apex"', date: 'Q2 2025', altitude: 'Target: 10 km', motor: 'Hybrid H-3', status: 'Upcoming', desc: 'Our most ambitious build. Full composite airframe, active roll control, L3 certification attempt.' },
          ].map(launch => {
            const statusColor: Record<string, string> = {
              Success: '#4caf50', Record: 'var(--hammerhead-gold)', Partial: '#ff9800', Upcoming: 'var(--space-glow)',
            }
            return (
              <div key={launch.name} className="space-card" style={{ padding: '1.75rem', borderRadius: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>{launch.name}</div>
                  <span style={{
                    fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: statusColor[launch.status] || 'white',
                    border: `1px solid ${statusColor[launch.status] || 'white'}`,
                    padding: '0.2rem 0.5rem', borderRadius: '2px', flexShrink: 0, marginLeft: '0.5rem',
                  }}>
                    {launch.status}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '0.75rem', fontSize: '0.8rem', color: 'rgba(232,244,253,0.55)' }}>
                  <span>📅 {launch.date}</span>
                  <span>⬆ {launch.altitude}</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--space-accent)', marginBottom: '0.5rem' }}>Motor: {launch.motor}</div>
                <div style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'rgba(232,244,253,0.65)' }}>{launch.desc}</div>
              </div>
            )
          })}
        </div>
      </Section>

      <hr className="space-divider" />

      {/* ── SPONSORS ── */}
      <Section id="sponsors" style={{ background: 'rgba(2,21,41,0.8)' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label">Partners & Supporters</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, margin: 0 }}>
            Our <span style={{ color: 'var(--space-glow)' }}>Sponsors</span>
          </h2>
          <p style={{ color: 'rgba(232,244,253,0.6)', marginTop: '0.75rem' }}>
            We are grateful to the organizations who make our missions possible.
          </p>
        </div>

        {/* Platinum */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-label" style={{ textAlign: 'center', color: 'var(--hammerhead-gold)', marginBottom: '1.25rem' }}>
            Platinum Partners
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {[
              { name: 'AeroTech Industries', type: 'Motor Supplier', desc: 'Providing high-power composite motors and technical mentorship since 2020.' },
              { name: 'Composites Unlimited', type: 'Materials Partner', desc: 'Carbon fiber and fiberglass airframe materials for our competition vehicles.' },
            ].map(s => (
              <div key={s.name} className="space-card" style={{ padding: '2rem', borderRadius: '0.5rem', border: '1px solid rgba(200,168,80,0.25)', textAlign: 'center' }}>
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(200,168,80,0.2), rgba(100,181,246,0.1))',
                  margin: '0 auto 1rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid rgba(200,168,80,0.3)',
                  fontSize: '1.8rem',
                }}>
                  🏆
                </div>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>{s.name}</div>
                <div style={{ color: 'var(--hammerhead-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{s.type}</div>
                <div style={{ color: 'rgba(232,244,253,0.6)', fontSize: '0.85rem', lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-label" style={{ textAlign: 'center', marginBottom: '1.25rem' }}>Gold Sponsors</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {[
              { name: 'Sigma Aerospace', icon: '🛰', desc: 'Avionics & electronics support' },
              { name: 'ProCast Machining', icon: '⚙️', desc: 'CNC parts & motor casings' },
              { name: 'FlightData Corp', icon: '📡', desc: 'Telemetry hardware & software' },
            ].map(s => (
              <div key={s.name} className="space-card" style={{ padding: '1.5rem', borderRadius: '0.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{s.icon}</div>
                <div style={{ fontWeight: 700, marginBottom: '0.3rem', fontSize: '0.9rem' }}>{s.name}</div>
                <div style={{ color: 'rgba(232,244,253,0.55)', fontSize: '0.8rem' }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Silver */}
        <div>
          <div className="section-label" style={{ textAlign: 'center', marginBottom: '1.25rem' }}>Supporting Sponsors</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {['Rocket Ranch Club', 'University Engineering Dept', 'Local Fabricators Co.', 'SkyWatch Foundation', 'Propellant R&D Lab'].map(s => (
              <div key={s} style={{
                padding: '0.6rem 1.25rem',
                border: '1px solid rgba(100,181,246,0.2)',
                borderRadius: '2px',
                fontSize: '0.8rem',
                color: 'rgba(232,244,253,0.6)',
                background: 'rgba(3,32,64,0.4)',
              }}>
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Become a sponsor */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'rgba(232,244,253,0.6)', marginBottom: '1rem', fontSize: '0.9rem' }}>
            Interested in supporting Hammerhead Aerospace?
          </div>
          <a href="mailto:sponsors@hammerheadaerospace.org" className="btn-secondary">Become a Sponsor</a>
        </div>
      </Section>

      <hr className="space-divider" />

      {/* ── CONTACT ── */}
      <Section id="contact" style={{ background: 'rgba(1,11,26,0.9)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          <div>
            <div className="section-label">Get In Touch</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
              Ready to <span style={{ color: 'var(--space-glow)' }}>launch</span><br />something great?
            </h2>
            <p style={{ color: 'rgba(232,244,253,0.65)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Whether you're a student wanting to join, an organization interested in sponsorship,
              or just a rocketry enthusiast — we'd love to hear from you.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { icon: '✉️', label: 'General', value: 'info@hammerheadaerospace.org' },
                { icon: '👥', label: 'Membership', value: 'join@hammerheadaerospace.org' },
                { icon: '🤝', label: 'Sponsorship', value: 'sponsors@hammerheadaerospace.org' },
                { icon: '📍', label: 'Location', value: 'Engineering Building, Room 214' },
                { icon: '📅', label: 'Meetings', value: 'Thursdays 6pm — open to all students' },
              ].map(c => (
                <div key={c.label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.2rem' }}>{c.icon}</span>
                  <div>
                    <span style={{ color: 'rgba(232,244,253,0.45)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {c.label}:{' '}
                    </span>
                    <span style={{ color: 'rgba(232,244,253,0.8)', fontSize: '0.85rem' }}>{c.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Social / Links */}
          <div>
            <div className="section-label">Follow Our Missions</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { platform: 'Instagram', handle: '@HammerheadAerospace', icon: '📷' },
                { platform: 'YouTube', handle: 'Hammerhead Aerospace', icon: '▶️' },
                { platform: 'GitHub', handle: 'hammerhead-aero', icon: '💾' },
                { platform: 'LinkedIn', handle: 'Hammerhead Aerospace Club', icon: '🔗' },
              ].map(s => (
                <div key={s.platform} className="space-card" style={{ padding: '1rem 1.25rem', borderRadius: '0.375rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.3rem' }}>{s.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{s.platform}</div>
                    <div style={{ color: 'rgba(232,244,253,0.55)', fontSize: '0.8rem' }}>{s.handle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: '1px solid rgba(100,181,246,0.1)',
        padding: '2rem 1.5rem',
        background: 'rgba(1,8,18,0.95)',
      }}>
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <HammerheadLogo size={28} />
            <span style={{ fontSize: '0.8rem', color: 'rgba(232,244,253,0.4)', letterSpacing: '0.1em' }}>
              HAMMERHEAD AEROSPACE © {new Date().getFullYear()}
            </span>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'rgba(232,244,253,0.3)', letterSpacing: '0.05em' }}>
            Tripoli Rocketry Association · National Association of Rocketry
          </div>
        </div>
      </footer>
    </div>
  )
}
