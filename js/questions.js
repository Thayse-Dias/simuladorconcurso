/****************************************************
 * BANCO DE QUESTÕES – SIMULADOR DETRAN
 * Organização modular + agregador final
 ****************************************************/

/* =====================================================
   LÓGICA E PROBABILIDADE
===================================================== */
const logicaQuestions = [
  {
    subject: "Lógica e Probabilidade",
    question: "Se todo A é B e nenhum B é C, então:",
    options: {
      A: "Todo A é C",
      B: "Nenhum A é C",
      C: "Alguns A são C",
      D: "Todo C é A",
      E: "Nenhuma conclusão pode ser tirada"
    },
    correct: "B",
    justification: "Se A ⊂ B e B ∩ C = ∅, então A ∩ C = ∅."
  },
  {
    subject: "Lógica e Probabilidade",
    question: "A negação da proposição 'Todos os motoristas respeitam as leis' é:",
    options: {
      A: "Nenhum motorista respeita as leis",
      B: "Alguns motoristas não respeitam as leis",
      C: "Todos os motoristas desrespeitam as leis",
      D: "Alguns motoristas respeitam as leis",
      E: "Nenhum motorista desrespeita as leis"
    },
    correct: "B",
    justification: "A negação de 'todo' é 'existe pelo menos um que não'."
  },
  {
    subject: "Lógica e Probabilidade",
    question: "Considere verdadeira a proposição: 'Se o carro está em movimento, então o motor está ligado'. Qual é sua contrapositiva?",
    options: {
      A: "Se o motor está ligado, então o carro está em movimento",
      B: "Se o carro não está em movimento, então o motor não está ligado",
      C: "Se o motor não está ligado, então o carro não está em movimento",
      D: "O carro está em movimento e o motor não está ligado",
      E: "O motor está ligado e o carro não está em movimento"
    },
    correct: "C",
    justification: "A contrapositiva troca e nega antecedente e consequente."
  },
  {
    subject: "Lógica e Probabilidade",
    question: "Uma proposição é falsa somente quando:",
    options: {
      A: "Ambas as partes são verdadeiras",
      B: "O antecedente é falso e o consequente é verdadeiro",
      C: "O antecedente é verdadeiro e o consequente é falso",
      D: "Ambas as partes são falsas",
      E: "Não há casos em que seja falsa"
    },
    correct: "C",
    justification: "Na implicação lógica, só é falsa quando V → F."
  },
  {
    subject: "Lógica e Probabilidade",
    question: "Em um grupo de 40 candidatos, 25 estudam Matemática, 20 estudam Lógica e 10 estudam ambas. Quantos estudam apenas Matemática?",
    options: {
      A: "5",
      B: "10",
      C: "15",
      D: "20",
      E: "25"
    },
    correct: "C",
    justification: "25 − 10 = 15 estudam apenas Matemática."
  },
  {
    subject: "Lógica e Probabilidade",
    question: "Se hoje é segunda-feira, daqui a 45 dias será:",
    options: {
      A: "Segunda",
      B: "Terça",
      C: "Quarta",
      D: "Quinta",
      E: "Sexta"
    },
    correct: "C",
    justification: "45 ≡ 3 (mod 7); segunda + 3 = quarta-feira."
  },
  {
    subject: "Lógica e Probabilidade",
    question: "Uma senha é formada por duas letras distintas seguidas de um número de 0 a 9. Quantas senhas diferentes podem ser formadas?",
    options: {
      A: "234",
      B: "260",
      C: "650",
      D: "676",
      E: "700"
    },
    correct: "C",
    justification: "26×25×10 = 650 combinações."
  },
  {
    subject: "Lógica e Probabilidade",
    question: "Ao lançar um dado honesto, a probabilidade de sair um número primo é:",
    options: {
      A: "1/6",
      B: "1/3",
      C: "1/2",
      D: "2/3",
      E: "5/6"
    },
    correct: "B",
    justification: "Primos: 2, 3, 5 → 3/6 = 1/3."
  },
  {
    subject: "Lógica e Probabilidade",
    question: "Se uma afirmação é falsa, então sua negação é:",
    options: {
      A: "Verdadeira",
      B: "Falsa",
      C: "Indeterminada",
      D: "Parcialmente verdadeira",
      E: "Contraditória"
    },
    correct: "A",
    justification: "Negação inverte o valor lógico."
  },
  {
    subject: "Lógica e Probabilidade",
    question: "Considere a sequência: 2, 6, 12, 20, 30. O próximo termo é:",
    options: {
      A: "36",
      B: "40",
      C: "42",
      D: "48",
      E: "56"
    },
    correct: "C",
    justification: "Sequência n(n+1): 6×7 = 42."
  },

  {
    subject: "Lógica e Probabilidade",
    question: "Se todos os agentes são servidores e alguns servidores são concursados, então:",
    options: {
      A: "Todos os agentes são concursados",
      B: "Alguns agentes são concursados",
      C: "Nenhum agente é concursado",
      D: "Todos os concursados são agentes",
      E: "Nenhuma conclusão é possível"
    },
    correct: "B",
    justification: "Alguns servidores são concursados e agentes ⊂ servidores."
  },
  {
    subject: "Lógica e Probabilidade",
    question: "A negação de 'Existe motorista prudente' é:",
    options: {
      A: "Todos os motoristas são imprudentes",
      B: "Nenhum motorista é prudente",
      C: "Alguns motoristas são imprudentes",
      D: "Existe motorista imprudente",
      E: "Todos são prudentes"
    },
    correct: "B",
    justification: "Negação do quantificador existencial."
  },
  {
    subject: "Lógica e Probabilidade",
    question: "Em um sorteio de duas moedas, a probabilidade de sair exatamente uma cara é:",
    options: {
      A: "1/4",
      B: "1/3",
      C: "1/2",
      D: "2/3",
      E: "3/4"
    },
    correct: "C",
    justification: "Casos favoráveis: HC e CH → 2/4 = 1/2."
  },
  {
    subject: "Lógica e Probabilidade",
    question: "Qual proposição é logicamente equivalente a 'Se A então B'?",
    options: {
      A: "A e B",
      B: "Não A ou B",
      C: "A ou B",
      D: "Não B ou A",
      E: "Não A e B"
    },
    correct: "B",
    justification: "Equivalência clássica da implicação."
  },
  {
    subject: "Lógica e Probabilidade",
    question: "Uma urna contém 4 bolas pretas e 6 brancas. Retirando-se uma bola ao acaso, a probabilidade de não ser preta é:",
    options: {
      A: "2/5",
      B: "3/5",
      C: "4/5",
      D: "1/2",
      E: "1/3"
    },
    correct: "B",
    justification: "6/10 = 3/5."
  },
  {
  subject: "Lógica e Probabilidade",
  question: "A negação da proposição 'Nenhum condutor comete infrações' é:",
  options: {
    A: "Todos os condutores cometem infrações",
    B: "Alguns condutores cometem infrações",
    C: "Nenhum condutor comete infrações graves",
    D: "Todos os condutores são prudentes",
    E: "Alguns condutores não cometem infrações"
  },
  correct: "B",
  justification: "A negação de 'nenhum' é 'existe pelo menos um'."
},
{
  subject: "Lógica e Probabilidade",
  question: "Se a afirmação 'Se o veículo está em movimento, então o motor está ligado' é falsa, então:",
  options: {
    A: "O veículo não está em movimento",
    B: "O motor está ligado",
    C: "O veículo está em movimento e o motor não está ligado",
    D: "O motor não está ligado e o veículo não está em movimento",
    E: "O veículo está parado e o motor desligado"
  },
  correct: "C",
  justification: "Uma implicação é falsa somente quando o antecedente é verdadeiro e o consequente é falso."
},
{
  subject: "Lógica e Probabilidade",
  question: "Em uma prova com 5 questões, cada uma com 4 alternativas, o número de gabaritos possíveis é:",
  options: {
    A: "20",
    B: "64",
    C: "256",
    D: "512",
    E: "1024"
  },
  correct: "D",
  justification: "São 4⁵ = 1024 possibilidades."
},
{
  subject: "Lógica e Probabilidade",
  question: "Ao lançar dois dados, a probabilidade de a soma ser igual a 7 é:",
  options: {
    A: "1/12",
    B: "1/9",
    C: "1/6",
    D: "5/36",
    E: "1/3"
  },
  correct: "D",
  justification: "Há 6 combinações favoráveis entre 36 possíveis."
},
{
  subject: "Lógica e Probabilidade",
  question: "Considere a sequência: 1, 4, 9, 16, 25. O próximo termo é:",
  options: {
    A: "30",
    B: "32",
    C: "36",
    D: "40",
    E: "49"
  },
  correct: "C",
  justification: "Sequência dos quadrados perfeitos: 6² = 36."
},
{
  subject: "Lógica e Probabilidade",
  question: "Se todos os fiscais são servidores e nenhum servidor é terceirizado, então:",
  options: {
    A: "Alguns fiscais são terceirizados",
    B: "Nenhum fiscal é terceirizado",
    C: "Todos os terceirizados são fiscais",
    D: "Alguns servidores são fiscais",
    E: "Nenhuma conclusão é possível"
  },
  correct: "B",
  justification: "Relação lógica direta entre os conjuntos."
},
{
  subject: "Lógica e Probabilidade",
  question: "Em uma urna com 4 bolas vermelhas, 3 azuis e 3 verdes, a probabilidade de retirar uma bola azul é:",
  options: {
    A: "3/10",
    B: "1/3",
    C: "2/5",
    D: "1/4",
    E: "3/7"
  },
  correct: "A",
  justification: "3 casos favoráveis em 10 possíveis."
},
{
  subject: "Lógica e Probabilidade",
  question: "Qual alternativa representa corretamente a negação de 'Todos os veículos foram vistoriados'?",
  options: {
    A: "Nenhum veículo foi vistoriado",
    B: "Alguns veículos não foram vistoriados",
    C: "Todos os veículos não foram vistoriados",
    D: "Alguns veículos foram vistoriados",
    E: "Não existe vistoria"
  },
  correct: "B",
  justification: "Negação de universal afirmativa."
},
{
  subject: "Lógica e Probabilidade",
  question: "Se hoje é sexta-feira, daqui a 100 dias será:",
  options: {
    A: "Segunda-feira",
    B: "Terça-feira",
    C: "Quarta-feira",
    D: "Quinta-feira",
    E: "Sexta-feira"
  },
  correct: "D",
  justification: "100 ≡ 2 (mod 7); sexta + 2 = quinta."
},
{
  subject: "Lógica e Probabilidade",
  question: "Uma senha é formada por três algarismos distintos. Quantas senhas podem ser formadas?",
  options: {
    A: "90",
    B: "180",
    C: "720",
    D: "900",
    E: "1000"
  },
  correct: "C",
  justification: "10×9×8 = 720."
},
{
  subject: "Lógica e Probabilidade",
  question: "Ao lançar um dado, a probabilidade de sair um número par é:",
  options: {  
    A: "1/6",
    B: "1/3",
    C: "1/2", 
    D: "2/3",
    E: "5/6"
  },
  correct: "C",
  justification: "Números pares: 2, 4, 6 → 3/6 = 1/2."
},
{
  subject: "Lógica e Probabilidade",
  question: "Em um sorteio de duas moedas, a probabilidade de sair duas caras é:",
  options: {
    A: "1/4",
    B: "1/3",
    C: "1/2",
    D: "2/3",
    E: "3/4"
  },
  correct: "A",
  justification: "Apenas o caso CC entre 4 possíveis."

},
{
  subject: "Lógica e Probabilidade",
  question: "Qual proposição é logicamente equivalente a 'Não A ou B'?",
  options: {
    A: "Se A então B",
    B: "Se B então A",
    C: "A e B",
    D: "A ou B",
    E: "Não A e B"
  },
  correct: "A",
  justification: "Equivalência clássica da implicação."

},

];


/* =====================================================
   MATEMÁTICA
===================================================== */
const matematicaQuestions = [
  {
    subject: "Matemática",
    question: "Qual é o valor de x na equação 2x + 3 = 11?",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6",
      E: "7"
    },
    correct: "B",
    justification: "2x = 8 → x = 4."
  }
];

/* =====================================================
   PORTUGUÊS
===================================================== */
const portuguesQuestions = [
  {
    subject: "Português",
    question: "Assinale a alternativa em que a frase está correta.",
    options: {
      A: "Houveram muitos problemas.",
      B: "Fazem dois anos que trabalho aqui.",
      C: "Existem razões para discordar.",
      D: "Devem haver soluções.",
      E: "Há pessoas esperam."
    },
    correct: "C",
    justification: "O verbo 'existir' concorda com o sujeito."
  }
];

/* =====================================================
   DIREITO ADMINISTRATIVO
===================================================== */
const direitoAdmQuestions = [
  {
    subject: "Direito Administrativo",
    question: "O princípio da legalidade determina que:",
    options: {
      A: "O administrador pode tudo",
      B: "A lei é opcional",
      C: "O administrador só age conforme a lei",
      D: "A legalidade não se aplica",
      E: "Somente o Judiciário obedece à lei"
    },
    correct: "C",
    justification: "Na Administração Pública, só é permitido fazer o que a lei autoriza."
  }
];

/* =====================================================
   LEGISLAÇÃO DE TRÂNSITO (CTB)
===================================================== */
const transitoQuestions = [
  {
    subject: "Legislação de Trânsito",
    question: "Constitui infração gravíssima:",
    options: {
      A: "Estacionar em local proibido",
      B: "Usar buzina em excesso",
      C: "Avançar o sinal vermelho",
      D: "Farol apagado à noite",
      E: "Dirigir sem atenção"
    },
    correct: "C",
    justification: "Avançar o sinal vermelho é infração gravíssima (art. 208 do CTB)."
  }
];

/* =====================================================
   SIMULADO OFICIAL – DETRAN
===================================================== */
const detranQuestions = [
  ...transitoQuestions,
  ...direitoAdmQuestions,
  ...portuguesQuestions,
  ...logicaQuestions
];

/* =====================================================
   BANCO GERAL DE QUESTÕES
===================================================== */
const QUESTIONS = [
  ...logicaQuestions,
  ...matematicaQuestions,
  ...portuguesQuestions,
  ...direitoAdmQuestions,
  ...transitoQuestions
];


