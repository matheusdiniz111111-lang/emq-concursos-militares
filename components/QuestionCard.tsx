type Question = {
  id: string;
  subject: string;
  difficulty: 'Fácil' | 'Média' | 'Difícil';
  statement: string;
  options: string[];
  correctAnswer: string;
};

export default function QuestionCard({ question }: { question: Question }) {
  return (
    <article className="question-card">
      <div className="question-head">
        <span className="subject-tag">{question.subject}</span>
        <span className={`difficulty difficulty-${question.difficulty.toLowerCase()}`}>{question.difficulty}</span>
      </div>

      <h3>{question.statement}</h3>

      <div className="options-grid">
        {question.options.map((option) => (
          <button key={option} type="button" className="option-button">
            {option}
          </button>
        ))}
      </div>

      <div className="question-footer">
        <span>Resposta correta: {question.correctAnswer}</span>
        <button type="button" className="btn btn-secondary small-button">Ver explicação</button>
      </div>
    </article>
  );
}
