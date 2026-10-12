import { performance, disciplineStats, studentGoals } from '@/data/mock';

export default function DashboardPage() {
  return (
    <div className="container inner-page">
      <div className="page-head">
        <div>
          <p className="eyebrow">Monitoramento</p>
          <h1>Dashboard de performance</h1>
        </div>
      </div>

      <div className="stats-grid dashboard-grid">
        <div className="stat-box highlight">
          <strong>84%</strong>
          <span>Taxa geral de acerto</span>
        </div>
        <div className="stat-box">
          <strong>42 min</strong>
          <span>Tempo médio por simulado</span>
        </div>
        <div className="stat-box">
          <strong>+27%</strong>
          <span>Evolução nos últimos 60d</span>
        </div>
        <div className="stat-box">
          <strong>14</strong>
          <span>Áreas em revisão</span>
        </div>
      </div>

      <div className="dashboard-layout">
        <section className="panel">
          <h3>Desempenho por mês</h3>
          {performance.map((item) => (
            <div key={item.month} className="bar-row">
              <span>{item.month}</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${item.value}%` }} />
              </div>
              <strong>{item.value}%</strong>
            </div>
          ))}
        </section>

        <section className="panel">
          <h3>Disciplinas</h3>
          <div className="discipline-list">
            {disciplineStats.map((item) => (
              <div key={item.name} className="discipline-item">
                <div className="discipline-row">
                  <span>{item.name}</span>
                  <strong>{item.value}%</strong>
                </div>
                <div className="bar-track small">
                  <div className="bar-fill" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="panel goals-panel">
        <h3>Metas da semana</h3>
        <div className="goals-grid">
          {studentGoals.map((goal) => (
            <div key={goal.name} className="goal-card">
              <div>
                <span>{goal.name}</span>
                <strong>{goal.progress}%</strong>
              </div>
              <div className="goal-bar">
                <div style={{ width: `${goal.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
