import { courses } from '@/data/mock';

export default function CursosPage() {
  return (
    <div className="container inner-page">
      <div className="page-head">
        <div>
          <p className="eyebrow">Plano de estudos</p>
          <h1>Cursos e disciplinas</h1>
        </div>
      </div>

      <div className="course-grid large">
        {courses.map((course) => (
          <article key={course.title} className="course-card large-card">
            <div className="course-header">
              <div className="course-icon">{course.icon}</div>
              <span className="badge">{course.level}</span>
            </div>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="module-list">
              {course.modules.map((module) => (
                <div key={module.name} className="module-item">
                  <span>{module.name}</span>
                  <strong>{module.hours}h</strong>
                </div>
              ))}
            </div>
            <div className="course-meta">
              <span>{course.lessons} aulas</span>
              <span>{course.questions} questões</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
