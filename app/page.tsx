import Link from 'next/link';
import { courses, metrics, performance } from '@/data/mock';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Preparação estratégica para o topo</p>
            <h1>Seu caminho rumo ao concurso militar começa aqui.</h1>
            <p className="hero-copy">
              A EMQ Concursos Militares conecta teoria, prática e inteligência de desempenho para acelerar sua preparação com foco em resultado.
            </p>
            <div className="cta-row">
              <Link href="/banco" className="btn btn-primary">Banco de questões</Link>
              <Link href="/cursos" className="btn btn-secondary">Ver cursos</Link>
            </div>
            <ul className="hero-pills">
              <li>+15 mil questões</li>
              <li>Simulados realistas</li>
              <li>Relatórios inteligentes</li>
            </ul>
          </div>

          <div className="hero-panel">
            <div className="mini-card big">
              <span className="mini-label">Desempenho geral</span>
              <strong>84%</strong>
              <small>média de acertos</small>
            </div>
            <div className="mini-card-grid">
              <div className="mini-card">
                <span className="mini-label">Questões</span>
                <strong>15.4k</strong>
              </div>
              <div className="mini-card">
                <span className="mini-label">Simulados</span>
                <strong>320</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-grid">
          {metrics.map((item) => (
            <div key={item.label} className="stat-box">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Nossos cursos</p>
            <h2>Preparação completa por disciplina</h2>
          </div>
          <Link href="/cursos" className="text-link">Ver todos</Link>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <article key={course.title} className="course-card">
              <div className="course-header">
                <div className="course-icon">{course.icon}</div>
                <span className="badge">{course.level}</span>
              </div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-meta">
                <span>{course.lessons} aulas</span>
                <span>{course.questions} questões</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Performance em tempo real</p>
            <h2>Monitore sua evolução</h2>
          </div>
          <Link href="/dashboard" className="text-link">Abrir dashboard</Link>
        </div>

        <div className="performance-layout">
          <div className="chart-panel">
            {performance.map((item) => (
              <div key={item.month} className="bar-row">
                <span>{item.month}</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${item.value}%` }} />
                </div>
                <strong>{item.value}%</strong>
              </div>
            ))}
          </div>

          <div className="info-stack">
            <div className="info-card">
              <span className="mini-label">Evolução</span>
              <strong>+27%</strong>
              <small>nos últimos 60 dias</small>
            </div>
            <div className="info-card">
              <span className="mini-label">Tema com maior avanço</span>
              <strong>Raciocínio Lógico</strong>
              <small>+34% em acerto</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
