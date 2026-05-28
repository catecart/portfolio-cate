import { useState } from 'react'
import './App.css'

const TABS = [
  { id: 'experience', label: 'Experience' },
  { id: 'athletics',  label: 'Athletics'  },
  { id: 'academics',  label: 'Academics'  },
  { id: 'future',     label: 'Future'     },
]

const experiences = [
  {
    role: 'Intern',
    company: 'Decennial Group · Chicago, IL',
    period: '2025 – Present',
    description: 'Supporting the team at Decennial Group, a professional services firm based in Chicago. Working directly alongside leadership to gain real-world exposure to business operations, client work, and industry strategy.',
    tags: ['Business Operations', 'Professional Services', 'AI Research', 'VS Code', 'GitHub', 'Project Management'],
    accent: '#C96B8A',
  },
  {
    role: 'Camp Counselor',
    company: 'York Basketball Kids Camp',
    period: '2024 & 2026',
    description: 'Served as a camp counselor for two seasons at York Basketball Kids Camp. Guided and mentored youth players, assisted with drills and skill-building sessions, and helped create a fun, supportive environment for young athletes to develop their game.',
    tags: ['Youth Development', 'Leadership', 'Communication', 'Engagement', 'Adaptability', 'Conflict Resolution'],
    accent: '#D4789E',
  },
  {
    role: 'Lifeguard',
    company: 'Elmhurst, IL',
    period: 'Summer 2024',
    description: 'Ensured the safety of swimmers and pool guests throughout the summer season. Maintained vigilant surveillance, responded to emergencies, and enforced aquatic safety policies.',
    tags: ['Safety', 'CPR / First Aid', 'Vigilance', 'Leadership', 'Confidence', 'Communication'],
    accent: '#E095B5',
  },
  {
    role: 'Youth Soccer Coach',
    company: 'Empire Juniors · Oak Brook, IL',
    period: 'Spring 2024 – Spring 2025',
    description: 'Coached youth players as part of the Empire Juniors soccer program. Led practices, developed player skills, and fostered teamwork and sportsmanship in a competitive youth environment.',
    tags: ['Youth Coaching', 'Mentorship', 'Leadership', 'Communication', 'Organization'],
    accent: '#EDAFC8',
  },
]

const sports = [
  {
    sport: 'Varsity Soccer',
    team: 'York High School',
    years: '2023 – Present',
    highlights: ['West Suburban All Conference (2025)', 'IHSSCA All Sectional (2025)', 'Varsity starter since Freshman year'],
    emoji: '⚽',
    color: '#C96B8A',
  },
  {
    sport: 'Varsity Basketball',
    team: 'York High School',
    years: '2023 – Present',
    highlights: ['Varsity starter since Freshman year'],
    emoji: '🏀',
    color: '#D4789E',
  },
  {
    sport: 'Club Soccer',
    team: 'Sockers FC Girls Academy 08',
    years: 'June 2025 – Present',
    highlights: ['Selected for Girls Academy 08 team'],
    emoji: '⭐',
    color: '#E095B5',
  },
  {
    sport: 'Club Soccer',
    team: 'Empire FC G08',
    years: 'Aug 2019 – May 2025',
    highlights: ['Nearly 6 years of competitive club soccer', 'Foundational development through elite training'],
    emoji: '🏆',
    color: '#EDAFC8',
  },
]

const academics = {
  school: 'York Community High School · Elmhurst, IL',
  degree: 'High School Diploma',
  gpa: '4.2 / 4.0',
  year: 'Class of 2027',
  clubs: [
    { name: 'National Honor Society',          role: 'Member', year: '2025 – 2027' },
    { name: 'Link Crew',                       role: 'Member', year: '2026 – 2027' },
    { name: 'Freshman Orientation & Guidance', role: 'Member', year: '2025'        },
    { name: 'Ambassadors Club',                role: 'Member', year: '2026 – 2027' },
    { name: 'Key Club',                        role: 'Member', year: '2023 – 2027' },
    { name: 'Make-A-Wish Club',                role: 'Member', year: '2025 – 2027' },
  ],
  honors: ['High Honor Roll — 5 Semesters'],
  courses: [
    'AP Government & Politics',
    'AP English Language & Composition',
    'ACP US History',
    'Spanish 3H — ACP',
    'Spanish 4H — ACP',
  ],
}

const goals = [
  {
    title: 'High School Graduation',
    timeframe: '2027',
    description: 'Graduate from York Community High School in Elmhurst, IL — closing out four years of academic excellence, athletics, and leadership.',
    icon: '🎓',
    color: '#C96B8A',
  },
  {
    title: 'Begin College & Collegiate Soccer',
    timeframe: '2027',
    description: 'Start my undergraduate journey while competing as a collegiate soccer player — balancing academics and athletics at the next level.',
    icon: '⚽',
    color: '#D4789E',
  },
  {
    title: 'LSAT Prep',
    timeframe: '2029 – 2030',
    description: 'Begin preparing for the LSAT during my junior year of undergrad, taking a focused step toward law school admission.',
    icon: '📖',
    color: '#E095B5',
  },
  {
    title: 'College Graduation',
    timeframe: '2031',
    description: 'Earn my Bachelor\'s degree in Psychology — building a foundation of human behavior, critical thinking, and communication for a legal career.',
    icon: '🎉',
    color: '#EDAFC8',
  },
  {
    title: 'Apply to Law School & Begin',
    timeframe: '2031',
    description: 'Submit law school applications and begin my JD program, putting years of preparation and drive into motion.',
    icon: '⚖️',
    color: '#C96B8A',
  },
  {
    title: 'Law School Graduation',
    timeframe: '2034',
    description: 'Graduate with a Juris Doctor (JD) degree — completing three years of intensive legal education and advocacy training.',
    icon: '📜',
    color: '#D4789E',
  },
  {
    title: 'Bar Exam',
    timeframe: '2035',
    description: 'Sit for the bar exam and earn my license to practice law — the final milestone on the path to becoming an attorney.',
    icon: '✨',
    color: '#E095B5',
  },
]

/* ── Icons ─────────────────────────────────────── */
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  )
}

/* ── Experience: accent-stripe cards ───────────── */
function ExperienceTab() {
  return (
    <div className="tab-content">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">What I've done and am currently doing</p>
      </div>

      <div className="exp-list">
        {experiences.map((exp, i) => (
          <div key={i} className="exp-card" style={{ '--stripe': exp.accent }}>
            <div className="exp-stripe" />
            <div className="exp-body">
              <div className="exp-top">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company" style={{ color: exp.accent }}>{exp.company}</p>
                </div>
                <span className="period-badge">{exp.period}</span>
              </div>
              <p className="exp-desc">{exp.description}</p>
              <div className="tags">
                {exp.tags.map((tag, j) => (
                  <span key={j} className="tag" style={{ '--tag-color': exp.accent }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Athletics: editorial row layout ───────────── */
function AthleticsTab() {
  return (
    <div className="tab-content">
      <div className="section-header">
        <h2 className="section-title">Athletics</h2>
        <p className="section-subtitle">Sports I've been a part of</p>
      </div>

      <div className="sport-list">
        {sports.map((sport, i) => (
          <div key={i} className="sport-row" style={{ '--sport-color': sport.color }}>
            <div className="sport-row-left">
              <div className="sport-icon-wrap">
                <span className="sport-icon">{sport.emoji}</span>
              </div>
              <div className="sport-info">
                <h3 className="sport-name">{sport.sport}</h3>
                <p className="sport-team">{sport.team}</p>
                <p className="sport-years">{sport.years}</p>
              </div>
            </div>
            <div className="sport-highlights">
              {sport.highlights.map((h, j) => (
                <span key={j} className="highlight-pill">{h}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Academics: feature + badges + club list ────── */
function AcademicsTab() {
  return (
    <div className="tab-content">
      <div className="section-header">
        <h2 className="section-title">Academics</h2>
        <p className="section-subtitle">My grades and clubs</p>
      </div>

      <div className="school-feature">
        <div className="school-info">
          <h3 className="school-name">{academics.school}</h3>
          <p className="school-degree">{academics.degree}</p>
          <p className="school-year">{academics.year}</p>
        </div>
        <div className="gpa-bubble">
          <span className="gpa-label">GPA</span>
          <span className="gpa-value">{academics.gpa}</span>
        </div>
      </div>

      <div className="acad-section">
        <h3 className="acad-section-title">Honors & Awards</h3>
        <div className="honor-badges">
          {academics.honors.map((h, i) => (
            <span key={i} className="honor-badge">⭐ {h}</span>
          ))}
        </div>
      </div>

      <div className="acad-section">
        <h3 className="acad-section-title">Advanced Coursework</h3>
        <div className="honor-badges">
          {academics.courses.map((c, i) => (
            <span key={i} className="course-badge">{c}</span>
          ))}
        </div>
      </div>

      <div className="acad-section">
        <h3 className="acad-section-title">Clubs & Organizations</h3>
        <div className="club-rows">
          {academics.clubs.map((club, i) => (
            <div key={i} className="club-row">
              <div className="club-dot" />
              <div className="club-details">
                <p className="club-name">{club.name}</p>
                <p className="club-role">{club.role}</p>
              </div>
              <span className="period-badge sm">{club.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Future: vertical roadmap ───────────────────── */
function FutureTab() {
  return (
    <div className="tab-content">
      <div className="section-header">
        <h2 className="section-title">The Future</h2>
        <p className="section-subtitle">Where I'm going</p>
      </div>

      <div className="roadmap">
        {goals.map((goal, i) => (
          <div key={i} className="roadmap-stop">
            <div className="roadmap-left">
              <div className="roadmap-circle" style={{ background: goal.color + '22', borderColor: goal.color + '55' }}>
                <span className="roadmap-emoji">{goal.icon}</span>
              </div>
              {i < goals.length - 1 && <div className="roadmap-line" style={{ background: `linear-gradient(to bottom, ${goal.color}55, ${goals[i+1].color}55)` }} />}
            </div>
            <div className="roadmap-card">
              <span className="roadmap-timeframe" style={{ color: goal.color }}>{goal.timeframe}</span>
              <h3 className="roadmap-title">{goal.title}</h3>
              <p className="roadmap-desc">{goal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── App shell ──────────────────────────────────── */
export default function App() {
  const [activeTab, setActiveTab] = useState('experience')

  const renderTab = () => {
    switch (activeTab) {
      case 'experience': return <ExperienceTab />
      case 'athletics':  return <AthleticsTab />
      case 'academics':  return <AcademicsTab />
      case 'future':     return <FutureTab />
      default:           return <ExperienceTab />
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="hero-layout">
            <div className="hero-text">
              <span className="hero-eyebrow">Welcome to my world</span>
              <h1 className="hero-name">Catherine<br />Carter</h1>
              <p className="hero-tagline">Student · Athlete · Future Leader</p>
              <div className="contact-row">
                <a href="https://www.linkedin.com/in/catherine-carter-b50421369/" target="_blank" rel="noreferrer" className="contact-btn linkedin-btn">
                  <LinkedInIcon />
                  Connect on LinkedIn
                </a>
                {/* Replace YOUR_PHONE_NUMBER with your number, e.g. +16302076605 */}
                <a href="tel:YOUR_PHONE_NUMBER" className="contact-btn phone-btn">
                  <PhoneIcon />
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="blob blob-1" />
              <div className="blob blob-2" />
              <div className="blob blob-3" />
              <div className="initials-ring">CC</div>
            </div>
          </div>
        </div>
      </header>

      <nav className="nav-bar">
        <div className="nav-inner">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`nav-tab${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="main">
        <div className="main-inner">
          {renderTab()}
        </div>
      </main>

      <footer className="footer">
        <p>Catherine Carter · 2025</p>
      </footer>
    </div>
  )
}
