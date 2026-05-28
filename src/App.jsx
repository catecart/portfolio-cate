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
    description: 'Supporting the team at Decennial Group, a professional services firm based in Chicago. Working directly alongside the General Counsel, gaining real-world legal and business experience in a professional workforce environment — including exposure to business operations, client work, and industry strategy.',
    tags: ['Business Operations', 'Professional Services', 'AI Research', 'VS Code', 'GitHub', 'Project Management'],
    accent: '#C96B8A',
  },
  {
    role: 'Youth Soccer Coach',
    company: 'Empire Juniors · Oak Brook, IL',
    period: 'Spring 2024 – Spring 2025',
    description: 'Coached youth players as part of the Empire Juniors soccer program. Led practices, developed player skills, and fostered teamwork and sportsmanship in a competitive youth environment.',
    tags: ['Youth Coaching', 'Mentorship', 'Leadership', 'Communication', 'Organization'],
    accent: '#D4789E',
  },
  {
    role: 'Camp Counselor',
    company: 'York Basketball Kids Camp',
    period: '2024 & 2026',
    description: 'Served as a camp counselor for two seasons at York Basketball Kids Camp. Guided and mentored youth players, assisted with drills and skill-building sessions, and helped create a fun, supportive environment for young athletes to develop their game.',
    tags: ['Youth Development', 'Leadership', 'Communication', 'Engagement', 'Adaptability', 'Conflict Resolution'],
    accent: '#E095B5',
  },
  {
    role: 'Lifeguard',
    company: 'Elmhurst, IL',
    period: 'Summer 2024',
    description: 'Ensured the safety of swimmers and pool guests throughout the summer season. Maintained vigilant surveillance, responded to emergencies, and enforced aquatic safety policies.',
    tags: ['Safety', 'CPR / First Aid', 'Vigilance', 'Leadership', 'Confidence', 'Communication'],
    accent: '#EDAFC8',
  },
]

const sports = [
  {
    sport: 'Varsity Soccer',
    team: 'York High School',
    years: '2023 – Present',
    description: 'Member of Varsity Soccer since Freshman year — demonstrating long-term commitment, teamwork, and perseverance through consistent participation and athletic development.',
    highlights: ['West Suburban All Conference (2025)', 'IHSSCA All Sectional (2025)'],
    emoji: '⚽',
    color: '#C96B8A',
  },
  {
    sport: 'Varsity Basketball',
    team: 'York High School',
    years: '2023 – Present',
    description: 'Member of Varsity Basketball since Freshman year — highlighting exceptional dedication and athletic ability, developing strong teamwork, communication, and leadership skills through collaboration with teammates and coaches.',
    highlights: [],
    emoji: '🏀',
    color: '#D4789E',
  },
  {
    sport: 'Club Soccer',
    team: 'Sockers FC Girls Academy 08',
    years: 'June 2025 – Present',
    description: 'Competes at the elite Girls Academy level, developing advanced skills and pursuing collegiate recruitment opportunities. Learning how to be adaptable while training with elite-level players.',
    highlights: [],
    emoji: '⭐',
    color: '#E095B5',
  },
  {
    sport: 'Club Soccer',
    team: 'Empire FC G08',
    years: 'Aug 2019 – May 2025',
    description: 'Competed at the club level for six years, building a strong foundation of technical skill, teamwork, and competitive experience. Through years of consistent training, travel tournaments, and high-level competition, developed a deep understanding of the game and a strong work ethic that carries beyond the field. Demonstrates loyalty and dedication.',
    highlights: [],
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
    {
      name: 'Link Crew',
      role: 'Leader',
      year: '2026 – 2027',
      description: 'Selected as a Link Crew Leader, a competitive peer mentorship program dedicated to supporting incoming freshmen through their transition to high school. Facilitated orientation events, led small group discussions, and provided ongoing guidance to help new students build confidence, find their place, and navigate the academic and social demands of high school.',
    },
    {
      name: 'Ambassadors Club',
      role: 'Member',
      year: '2026 – 2027',
      description: 'Served as a member of the Ambassadors Club, actively supporting international students in their transition to a new school, culture, and way of life. Facilitated meaningful peer connections, provided ongoing guidance on navigating American academic and social norms, and fostered an inclusive, welcoming environment where every student felt valued, respected, and empowered to succeed regardless of their background or native language.',
    },
    {
      name: 'National Honor Society',
      role: 'Member',
      year: '2025 – 2027',
      description: 'Selected for National Honor Society based on academic excellence, outstanding character, and a demonstrated commitment to leadership and community service. Maintain a high GPA while actively contributing to school and community initiatives, exemplifying the core pillars of scholarship, leadership, service, and character.',
    },
    {
      name: 'Make-A-Wish Club',
      role: 'Member',
      year: '2025 – 2027',
      description: 'Contributed to a student-run organization dedicated to raising funds and awareness in support of the Make-A-Wish Foundation, an organization committed to granting life-changing wishes to children battling critical illnesses. Participated in fundraising campaigns, awareness initiatives, and community engagement efforts that directly impacted the lives of children and families facing some of their most difficult moments, demonstrating a deep commitment to compassion, empathy, and service beyond self.',
    },
    {
      name: 'Freshman Orientation & Guidance',
      role: 'Mentor',
      year: '2025',
      description: 'Assisted in facilitating freshman orientation activities designed to help incoming students acclimate to the academic, social, and emotional demands of high school life. Guided new students in building meaningful peer connections, developing personal confidence, and establishing the foundation needed to thrive throughout their high school experience. Served as a trusted mentor and positive role model, offering ongoing support and encouragement beyond orientation events.',
    },
    {
      name: 'Key Club',
      role: 'Member',
      year: '2023 – 2027',
      description: 'Actively participated in a student-led service organization dedicated to community outreach, volunteerism, and creating meaningful, lasting impact at the local level. Collaborated with peers to plan and execute service initiatives, contributed countless volunteer hours to causes that uplifted underserved members of the community, and demonstrated a consistent commitment to civic responsibility, compassion, and the belief that students have the power to drive real change.',
    },
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

function EmailIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
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
            <div className="sport-icon-wrap">
              <span className="sport-icon">{sport.emoji}</span>
            </div>
            <div className="sport-info">
              <h3 className="sport-name">{sport.sport}</h3>
              <p className="sport-team">{sport.team}</p>
              <p className="sport-years">{sport.years}</p>
              {sport.description && <p className="sport-desc">{sport.description}</p>}
              {sport.highlights.length > 0 && (
                <div className="sport-awards">
                  {sport.highlights.map((h, j) => (
                    <p key={j} className="sport-award">⭐ {h}</p>
                  ))}
                </div>
              )}
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
                <div className="club-row-top">
                  <p className="club-name">{club.name}</p>
                  <span className="period-badge sm">{club.year}</span>
                </div>
                <p className="club-role">{club.role}</p>
                {club.description && <p className="club-desc">{club.description}</p>}
              </div>
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
              <p className="hero-tagline">Student · Athlete · Future Attorney</p>
              <div className="contact-row">
                <a href="https://www.linkedin.com/in/catherine-carter-b50421369/" target="_blank" rel="noreferrer" className="contact-btn linkedin-btn">
                  <LinkedInIcon />
                  Connect on LinkedIn
                </a>
                <a href="mailto:catecarter2@gmail.com" className="contact-btn phone-btn">
                  <EmailIcon />
                  Send an Email
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="blob blob-1" />
              <div className="blob blob-2" />
              <div className="blob blob-3" />
              <div className="profile-ring">
                <img src="/profile.png" alt="Catherine Carter" className="profile-photo" />
              </div>
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
