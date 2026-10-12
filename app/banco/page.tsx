'use client';

import { useMemo, useState } from 'react';
import { questions, subjects } from '@/data/mock';
import QuestionCard from '@/components/QuestionCard';

export default function BancoPage() {
  const [selectedSubject, setSelectedSubject] = useState('Todas');
  const [selectedDifficulty, setSelectedDifficulty] = useState('Todos');
  const [search, setSearch] = useState('');

  const filteredQuestions = useMemo(() => {
    return questions.filter((question) => {
      const subjectMatch = selectedSubject === 'Todas' || question.subject === selectedSubject;
      const difficultyMatch = selectedDifficulty === 'Todos' || question.difficulty === selectedDifficulty;
      const searchTerm = search.toLowerCase();
      const searchMatch =
        question.statement.toLowerCase().includes(searchTerm) ||
        question.subject.toLowerCase().includes(searchTerm);

      return subjectMatch && difficultyMatch && searchMatch;
    });
  }, [selectedDifficulty, search, selectedSubject]);

  return (
    <div className="container inner-page">
      <div className="page-head">
        <div>
          <p className="eyebrow">Banco inteligente</p>
          <h1>Questões por disciplina e nível</h1>
        </div>
      </div>

      <div className="filters-panel">
        <div className="filter-group">
          <label>Disciplina</label>
          <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
            <option value="Todas">Todas</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Dificuldade</label>
          <select value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)}>
            <option value="Todos">Todos</option>
            <option value="Fácil">Fácil</option>
            <option value="Média">Média</option>
            <option value="Difícil">Difícil</option>
          </select>
        </div>

        <div className="filter-group search-group">
          <label>Buscar</label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Busque por tema ou enunciado"
          />
        </div>
      </div>

      <div className="question-summary">
        <span>{filteredQuestions.length} questões encontradas</span>
      </div>

      {filteredQuestions.length === 0 ? (
        <div className="empty-state">Nenhuma questão encontrada com os filtros atuais.</div>
      ) : (
        <div className="question-stack">
          {filteredQuestions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>
      )}
    </div>
  );
}
