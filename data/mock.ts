export const metrics = [
  { value: '15.4k', label: 'Questões no banco' },
  { value: '94%', label: 'Aprovação em simulados' },
  { value: '320', label: 'Simulados liberados' },
  { value: '12h', label: 'Média de estudo semanal' },
];

export const courses = [
  {
    title: 'Raciocínio Lógico',
    icon: '∑',
    level: 'Nível 1',
    description: 'Estratégias para resolver problemas rapidamente e com consistência.',
    lessons: 32,
    questions: 2400,
    modules: [
      { name: 'Lógica proposicional', hours: 6 },
      { name: 'Diagramas lógicos', hours: 4 },
      { name: 'Sequências e padrões', hours: 5 },
    ],
  },
  {
    title: 'Portuguesa',
    icon: 'A',
    level: 'Nível 2',
    description: 'Interpretação, gramática aplicada e pontuação em contexto de prova.',
    lessons: 28,
    questions: 2100,
    modules: [
      { name: 'Interpretação textual', hours: 7 },
      { name: 'Ortografia', hours: 4 },
      { name: 'Crase e regência', hours: 5 },
    ],
  },
  {
    title: 'Matemática',
    icon: 'π',
    level: 'Nível 3',
    description: 'Fundamentos e resolução de problemas em alta velocidade.',
    lessons: 40,
    questions: 3000,
    modules: [
      { name: 'Álgebra', hours: 8 },
      { name: 'Geometria', hours: 6 },
      { name: 'Estatística', hours: 5 },
    ],
  },
  {
    title: 'Informática',
    icon: '⌘',
    level: 'Nível 1',
    description: 'Conceitos essenciais de redes, sistemas e ferramentas digitais.',
    lessons: 18,
    questions: 1500,
    modules: [
      { name: 'Sistemas operacionais', hours: 5 },
      { name: 'Redes', hours: 4 },
      { name: 'Segurança digital', hours: 5 },
    ],
  },
];

export const performance = [
  { month: 'Jan', value: 52 },
  { month: 'Fev', value: 58 },
  { month: 'Mar', value: 64 },
  { month: 'Abr', value: 71 },
  { month: 'Mai', value: 77 },
  { month: 'Jun', value: 84 },
];

export const subjects = ['Raciocínio Lógico', 'Matemática', 'Português', 'Informática'];

export const questions = [
  {
    id: 'q1',
    subject: 'Raciocínio Lógico',
    difficulty: 'Fácil',
    statement: 'Se todos os militares são disciplinados e João é militar, então João é:',
    options: ['Desorganizado', 'Disciplinado', 'Colegial', 'Neutro'],
    correctAnswer: 'Disciplinado',
  },
  {
    id: 'q2',
    subject: 'Português',
    difficulty: 'Média',
    statement: 'Qual alternativa apresenta uso correto de crase?',
    options: ['Fui à escola cedo', 'Fui a escola cedo', 'Fui para a escola cedo', 'Fui às escola cedo'],
    correctAnswer: 'Fui à escola cedo',
  },
  {
    id: 'q3',
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'O valor de x na equação 3x + 9 = 30 é:',
    options: ['5', '7', '6', '8'],
    correctAnswer: '7',
  },
  {
    id: 'q4',
    subject: 'Informática',
    difficulty: 'Média',
    statement: 'Qual dispositivo é responsável por armazenar dados de forma permanente?',
    options: ['Processador', 'Memória RAM', 'HD SSD', 'Placa de vídeo'],
    correctAnswer: 'HD SSD',
  },
  {
    id: 'q5',
    subject: 'Raciocínio Lógico',
    difficulty: 'Difícil',
    statement: 'Se Maria é mais alta que Ana e Ana é mais alta que Bia, então:',
    options: ['Maria é mais baixa que Bia', 'Bia é mais alta que Maria', 'Maria é mais alta que Bia', 'Não há relação'],
    correctAnswer: 'Maria é mais alta que Bia',
  },
  {
    id: 'q6',
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Qual é a média aritmética de 10, 20 e 30?',
    options: ['15', '20', '25', '30'],
    correctAnswer: '20',
  },
];

export const disciplineStats = [
  { name: 'Raciocínio Lógico', value: 88 },
  { name: 'Português', value: 80 },
  { name: 'Matemática', value: 72 },
  { name: 'Informática', value: 91 },
];

export const studentGoals = [
  { name: 'Questões resolvidas', progress: 76 },
  { name: 'Simulados concluídos', progress: 68 },
  { name: 'Revisão semanal', progress: 82 },
];
