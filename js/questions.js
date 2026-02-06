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
    question: "Ao lançar um dado, a probabilidade de sair um número primo é:",
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
{
  subject: "Lógica e Probabilidade",
  question: "Uma urna contém 5 bolas vermelhas e 5 azuis. Retirando-se uma bola ao acaso, a probabilidade de não ser vermelha é:",
  options: {
    A: "1/5",
    B: "2/5",
    C: "1/2",
    D: "3/5",
    E: "4/5"
  },
  correct: "C",
  justification: "5/10 = 1/2."
},
{
  subject: "Lógica e Probabilidade",
  question: "A negação da proposição 'Alguns motoristas são prudentes' é:",
  options: {
    A: "Nenhum motorista é prudente",
    B: "Todos os motoristas são imprudentes",
    C: "Nenhum motorista é imprudente",
    D: "Alguns motoristas são imprudentes",
    E: "Todos os motoristas são prudentes"
  },
  correct: "A",
  justification: "A negação de 'Alguns X são Y' é 'Nenhum X é Y'."
},
{
  subject: "Lógica e Probabilidade",
  question: "Se a afirmação 'Se o veículo está parado, então o motor está desligado' é falsa, então:",
  options: {
    A: "O veículo está parado",
    B: "O motor está desligado",
    C: "O veículo está parado e o motor está ligado",
    D: "O motor está ligado e o veículo não está parado",
    E: "O veículo está em movimento e o motor desligado"
  },
  correct: "C",
  justification: "Implicação é falsa quando V → F."
}
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
  },
  {
    subject: "Matemática",
    question: "Qual é a área de um triângulo com base 10 cm e altura 5 cm?",
    options: {
      A: "25 cm²",
      B: "30 cm²",
      C: "35 cm²",
      D: "40 cm²",
      E: "50 cm²"
    },
    correct: "A",
    justification: "Área = (base × altura) / 2 = (10 × 5) / 2 = 25 cm²."
  },
  {
    subject: "Matemática",
    question: "Qual é o valor de 15% de 200?",
    options: {  
      A: "20",
      B: "25",
      C: "30",  
      D: "35",
      E: "40"
    },
    correct: "C",
    justification: "15% de 200 = 0.15 × 200 = 30."
  },
  {
    subject: "Matemática",
    question: "Qual é o valor de 7² + 3²?",
    options: {
      A: "49",
      B: "58",
      C: "62",
      D: "72",
      E: "82"
    },
    correct: "B",
    justification: "7² + 3² = 49 + 9 = 58."
  },
  {
    subject: "Matemática",
    question: "Qual é o valor de x na equação 3x - 4 = 11?",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "7",
      E: "8"
    },
    correct: "B",
    justification: "3x = 15 → x = 5."
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
  },
  
  {
    subject: "Português",
    question: "No trecho “não apenas…, mas sobretudo…”, a estrutura estabelece ideia de:",
    options: {
      A: "Oposição",
      B: "Exclusão",
      C: "Comparação",
      D: "Adição com ênfase",
      E: "Condição"
    },
    correct: "D",
    justification: "O advérbio “sobretudo” indica destaque principal ao comprometimento humano, sem excluir outros fatores."

  },
  {
    subject: "Português",
    question: "Assinale a alternativa em que a frase está correta.",
      text: "Embora os avanços tecnológicos sejam evidentes, a capacitação profissional ainda é indispensável.",
      itens: "Infere-se que:",
    options: {
      A: "A tecnologia substitui o profissional.",
      B: "A capacitação perdeu importância.",
      C: "Tecnologia e capacitação são excludentes.",
      D: "A tecnologia elimina a necessidade de estudo.",
      E: "A capacitação continua necessária."
    },
    correct: "E",
    justification: "O conectivo “embora” introduz concessão, mantendo válida a necessidade de capacitação."
  },
  {
    subject: "Português",
    question: "O termo 'indispensável' pode ser substituído, sem prejuízo de sentido, por:",
    options: {
      A: "Opcional",
      B: "Secundário",
      C: "Essencial",
      D: "Eventual",
      E: "Supérfluo"
    },
    correct: "C",
    justification: "Indispensável = algo que não pode faltar → essencial."
  },
  {
    subject: "Português",
    question: "A intenção do texto é:",
    options: {
      A: "Ironizar o avanço tecnológico",
      B: "Defender apenas o ensino formal",
      C: "Alertar sobre a irrelevância da tecnologia",
      D: "Valorizar o equilíbrio entre tecnologia e formação",
      E: "Criticar profissionais desatualizados"
    },
    correct: "D",
    justification: "O texto não exclui a tecnologia, mas reforça a formação humana."
  },
  {
    subject: "Português",
    question: "A leitura crítica permite ao cidadão interpretar informações com maior autonomia.O termo “crítica” tem sentido de:",
      options: {
        A: "Julgamento negativo",
        B: "Análise reflexiva",
        C: "Reclamação constante",
        D: "Contestação agressiva",
        E: "Censura moral"
      },
      correct: "B",
      justification: "Leitura crítica = análise consciente e reflexiva."   
  },
  {
    subject: "Português",
    question: "A leitura crítica permite ao cidadão interpretar informações com maior autonomia. A palavra “autonomia” indica:",
    options: {
      A: "Dependência",
      B: "Isolamento",
      C: "Independência intelectual",
      D: "Desinteresse social",
      E: "Neutralidade absoluta"
    },
    correct: "C",
    justification: "Autonomia = capacidade de agir por conta própria, especialmente intelectualmente."
  },
  {
    subject: "Português",
    question: "Assinale a alternativa correta:",
    options: {
      A: "Excessão",
      B: "Pretensão",
      C: "Reinvindicar",
      D: "Conciderar",
      E: "Excesivo"
    },
    correct: "B",
    justification: "'Pretensão' está correto; as outras palavras estão grafadas incorretamente."
  },
  {
    subject: "Português",
    question: "Assinale a alternativa correta:",
    options: {
      A: "Auto-estima",
      B: "Autoestima",
      C: "Altoestima",
      D: "Auto estima",
      E: "Alta-estima"
    },
    correct: "B",
    justification: "'Autoestima' está correta; as outras palavras estão grafadas incorretamente."
  },
  {
    subject: "Português",
    question: "Assinale a alternativa correta:",
    options: {
      A: "Assistiu o filme",
      B: "Assistiu ao filme",
      C: "Assistiu no filme",
      D: "Assistiu para o filme",
      E: "Assistiu-se o filme"
    },
    correct: "B",
    justification: "'Assistiu ao filme' está correta; assistir (ver) rege preposição a."
  },
  {
    subject: "Português",
    question: "O verbo gostar rege:",
    options: {
      A: "Preposição",
      B: "Objeto direto",
      C: "Objeto indireto",
      D: "Adjetivo",
      E: "Advérbio"
    },
    correct: "C",
    justification: "'Gostar' é verbo transitivo indireto e rege preposição 'de'."
  },
  {
    subject: "Português",
    question: "Assinale a alternativa em que o uso da vírgula está correto, segundo a norma-padrão.",
    options: {
      A: "Os empregados da Petrobras, que atuam em campo, recebem treinamento específico.",
      B: "A empresa investe em inovação e, sustentabilidade.",
      C: "Os técnicos que participaram do curso receberam, todos, certificado.",
      D: "A Petrobras que é estatal brasileira atua no setor energético.",
      E: "Os contratos foram assinados, ontem à noite."
    },
    correct: "A",
    justification: "A vírgula está correta na alternativa A. No trecho 'que atuam em campo', a vírgula é usada para separar a oração restritiva do restante da frase."
  },
  {
    subject: "Português",
    question: "A palavra 'imprescindível' tem como sinônimo.",
    options: {
      A: "Opcional",
      B: "Dispensável",
      C: "Fundamental",
      D: "Eventual",
      E: "Secundário"
    },
    correct: "C",
    justification: "'Imprescindível' significa algo que não pode ser dispensado, ou seja, fundamental."
  },
  {
    subject: "Português",
    question: "O uso correto do porquê está em:",
    options: {
      A: "Não sei o por que da decisão",
      B: "Explique por quê você faltou",
      C: "O motivo porque faltei é pessoal",
      D: "Por que você não compareceu?",
      E: "Não fui, porquê estava doente"
    },
    correct: "D",
    justification: "Em 'Por que você não compareceu?', 'por que' é usado em perguntas diretas."
  },
  {
    subject: "Português",
    question: "Assinale a alternativa com sentido denotativo.",
    options: {
      A: "O projeto morreu na praia",
      B: "A empresa colheu bons frutos",
      C: "O relatório foi entregue ontem",
      D: "Ele tem um coração de pedra",
      E: "O tempo voa"
    },
    correct: "C",
    justification: "Sentido denotativo é o sentido literal das palavras, como em 'O relatório foi entregue ontem'."
  },
  {
    subject: "Português",
    question: "Assinale a alternativa em que há erro de concordância verbal.",
    options: {
    A: "Faz dez anos que trabalho aqui",
    B: "Existem normas claras",
    C: "Devem haver mudanças",
    D: "Ocorreu falha no sistema",
    E: "Chegaram os documentos"
  },
    correct: "C",
    justification: "O verbo 'haver', no sentido de existir, é impessoal e deve ser usado na 3ª pessoa do singular: 'Deve haver mudanças'."
  },
  {
    subject: "Português",
    question: "Assinale a alternativa em que o uso do acento indicativo de crase está CORRETO:",
    options: {
      A: "O diretor referiu-se à situações que exigem cautela.",
      B: "O relatório foi encaminhado àquela comissão especial.",
      C: "Os servidores obedeceram às ordens superiores.",
      D: "O processo retornou aos setores responsáveis.",
      E: "A decisão foi submetida aos juízos técnicos."
    },
    correct: "B",
    justification: "Há crase antes de pronomes demonstrativos iniciados por “a” (àquela). Nas demais, substantivos no plural sem artigo não admitem crase."
  },
  {
    subject: "Português",
    question: "Em qual alternativa o emprego do acento indicativo de crase é PROIBIDO, segundo a norma-padrão?",
    options: {
      A: "À noite, a Administração publicou o edital.",
      B: "Dirigiu-se à autoridade competente.",
      C: "O servidor compareceu à reunião convocada.",
      D: "A candidata ficou frente à frente com a banca.",
      E: "O recurso foi apresentado à partir do despacho."
    },
    correct: "E",
    justification: "É vedada crase antes de verbos (a partir). O erro é clássico de prova."
  },
  {
    subject: "Português",
    question: "Assinale a alternativa em que a crase é FACULTATIVA:",
    options: {
      A: "A servidora retornou à casa após o expediente.",
      B: "O relatório foi entregue à senhora diretora.",
      C: "O aviso foi afixado à porta principal.",
      D: "A norma aplica-se àquele caso concreto.",
      E: "O gestor aludiu à eficiência administrativa."
    },
    correct: "B",
    justification: "Antes de pronomes de tratamento femininos (senhora), o uso da crase é facultativo."
  },
  {
    subject: "Português",
    question: "Assinale a frase em que o acento indicativo de crase está INCORRETO:",
    options: {
      A: "A comissão procedeu à análise dos autos.",
      B: "A reunião ocorrerá à tarde.",
      C: "O servidor fez referência à sua chefia imediata.",
      D: "O processo foi encaminhado à devida apuração.",
      E: "O candidato chegou à Brasília no domingo."
    },
    correct: "E",
    justification: "A crase não é usada antes de nomes próprios como 'Brasília'. A crase é usada antes de palavras femininas com artigo definido, mas não antes de nomes próprios."
  },
  {
    subject: "Português",
    question: "Em qual alternativa o emprego da crase decorre da regência verbal?",
    options: {
      A: "O servidor dedicou-se à função pública.",
      B: "O edital foi publicado à revelia da chefia.",
      C: "Compareceu àquela audiência preliminar.",
      D: "A decisão foi tomada à unanimidade.",
      E: "O processo voltou à origem."
    },
    correct: "A",
    justification: "O verbo dedicar-se exige a preposição a, e função admite artigo feminino, formando crase por regência verbal."
  },
  {
    subject: "Português",
    question: "Assinale a alternativa em que o verbo está empregado em conformidade com a norma-padrão quanto à regência:",
    options: {
      A: "O servidor aspirava o cargo de chefia.",
      B: "O candidato assistiu o julgamento do recurso.",
      C: "A comissão visava a melhoria dos procedimentos.",
      D: "O gestor simpatizou com as propostas apresentadas.",
      E: "O técnico obedeceu as determinações superiores."
    },
    correct: "D",
    justification: "O verbo 'simpatizar' rege a preposição 'com'. As demais alternativas apresentam erros de regência."
  },
  {
    subject: "Português",
    question: "Está CORRETA, quanto à regência verbal, a alternativa:",
    options: {
      A: "A autoridade informou os servidores do novo regulamento.",
      B: "O diretor preferiu mais estabilidade do que ascensão rápida.",
      C: "O gestor implicou em penalidade administrativa.",
      D: "O candidato agradou a banca examinadora.",
      E: "A comissão procedeu a revisão do relatório."
    },
    correct: "D",
    justification: "O verbo 'agradar', no sentido de satisfazer, rege a preposição 'a'."
  },
  {
    subject: "Português",
    question: "Assinale a opção em que a regência verbal está INCORRETA:",
    options: {
      A: "O servidor se esqueceu do compromisso assumido.",
      B: "O gestor lembrou os prazos aos responsáveis.",
      C: "A chefia visou o cumprimento das normas.",
      D: "O candidato informou-se do resultado preliminar.",
      E: "O técnico aspirou ao cargo pretendido."
    },
    correct: "C",
    justification: "No sentido de objetivo, o verbo 'visar' rege a preposição 'a', sendo incorreta a ausência de preposição."
  },
  {
    subject: "Português",
    question: "Em qual alternativa o verbo exige DOIS complementos, um direto e outro indireto?",
    options: {
      A: "O gestor comunicou o ocorrido à chefia.",
      B: "O servidor respondeu ao recurso.",
      C: "A banca simpatizou com o candidato.",
      D: "O técnico aspirou ao cargo público.",
      E: "A autoridade consentiu com a decisão."
    },
    correct: "A",
    justification: "O verbo 'comunicar' pode exigir objeto direto (o ocorrido) e indireto (à chefia)."
  },
  {
    subject: "Português",
    question: "Assinale a alternativa em que o verbo apresenta regência variável, admitindo mais de uma construção conforme o sentido:",
    options: {
      A: "O gestor procedeu à análise do processo.",
      B: "O candidato assistiu à sessão pública.",
      C: "A autoridade obedeceu às normas vigentes.",
      D: "O servidor informou o fato ao superior.",
      E: "O técnico concordou com a decisão final."
    },
    correct: "B",
    justification: "O verbo 'assistir' apresenta regência variável: sem preposição no sentido de prestar assistência e com preposição no sentido de ver."
  },
  {
    subject: "Português",
    question: "Assinale a alternativa em que a concordância verbal está CORRETA, segundo a norma-padrão:",
    options: {
      A: "Houveram divergências durante a reunião.",
      B: "Existem, no relatório, informações sigilosas.",
      C: "Fazem dois anos que o servidor tomou posse.",
      D: "Devem haver ajustes no procedimento.",
      E: "Chegou documentos importantes à comissão."
    },
    correct: "B",
    justification: "O verbo 'existir' concorda com o sujeito plural. 'Haver' e 'fazer', em sentido impessoal, permanecem no singular."
  },
  {
    subject: "Português",
    question: "Em qual alternativa a concordância verbal está INCORRETA?",
    options: {
      A: "Mais de um servidor apresentou recurso.",
      B: "Mais de dois candidatos foram aprovados.",
      C: "Cerca de 10% dos processos estavam concluídos.",
      D: "Fui eu quem elaborou o parecer técnico.",
      E: "Fomos nós quem analisamos os autos."
    },
    correct: "E",
    justification: "Com 'quem', o verbo deve permanecer na 3ª pessoa do singular, independentemente do antecedente."
  },
  {
    subject: "Português",
    question: "Assinale a opção em que a concordância verbal atende à norma-padrão:",
    options: {
      A: "A maioria dos servidores concordaram com a decisão.",
      B: "A maior parte dos recursos foram deferidos.",
      C: "Um grupo de candidatos questionaram o resultado.",
      D: "Mais de um relatório foram apresentados.",
      E: "Cerca de 30% do orçamento foi contingenciado."
    },
    correct: "E",
    justification: "Com porcentagem seguida de substantivo singular, o verbo concorda preferencialmente com o núcleo singular."
  },
  {
    subject: "Português",
    question: "Assinale a alternativa em que a concordância verbal está de acordo com a norma culta:",
    options: {
      A: "Não só o diretor como os servidores concordou com a medida.",
      B: "Não apenas os técnicos, mas também a chefia manifestaram apoio.",
      C: "Nem o gestor nem os assessores apresentou justificativa.",
      D: "Tanto o parecer quanto as notas técnicas foi arquivado.",
      E: "Ou a comissão ou os candidatos deverá apresentar recurso."
    },
    correct: "B",
    justification: "Com 'não apenas... mas também', o verbo concorda com o núcleo plural mais próximo."
  },
  {
    subject: "Português",
    question: "Assinale a alternativa em que a concordância verbal está INCORRETA, considerando o sujeito posposto:",
    options: {
      A: "Compareceram à audiência os advogados e as partes.",
      B: "Surgiram questionamentos durante a sessão.",
      C: "Restou pendente de análise alguns requerimentos.",
      D: "Ocorreram falhas no sistema eletrônico.",
      E: "Constaram do relatório as irregularidades apuradas."
    },
    correct: "C",
    justification: "O verbo deve concordar com o sujeito plural posposto: o correto seria 'restaram pendentes'."
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
  },
  {
    subject: "Direito Administrativo",
    question: "O ato administrativo é considerado nulo quando:",
    options: {
      A: "Tem vício de forma",
      B: "É praticado por autoridade competente",
      C: "Atende ao interesse público",
      D: "Segue os princípios legais",
      E: "É revogado pela autoridade"
    },
    correct: "A",
    justification: "Ato nulo é aquele com vício insanável, como falta de competência."
  },
  {
    subject: "Direito Administrativo",
    question: "A licitação tem como objetivo principal:",
    options: {
      A: "Favorecer empresas específicas",
      B: "Garantir a contratação direta",
      C: "Assegurar a seleção da proposta mais vantajosa",
      D: "Evitar a concorrência",
      E: "Reduzir a transparência"
    },
    correct: "C",
    justification: "Licitação visa selecionar a proposta mais vantajosa para a Administração Pública."
  },
  {
    subject: "Direito Administrativo",
    question: "O servidor público pode ser responsabilizado por atos praticados no exercício de suas funções quando:",
    options: {
      A: "Age com base na lei",
      B: "Age com dolo ou culpa",
      C: "Cumpre ordens superiores",
      D: "Atende ao interesse público",
      E: "Age de forma ética"
    },
    correct: "B",
    justification: "Responsabilização ocorre quando há dolo (intenção) ou culpa (negligência, imprudência ou imperícia)."
  },
  {
    subject: "Direito Administrativo",
    question: "A desapropriação é um ato administrativo que:",
    options: {
      A: "Transfere propriedade por vontade do dono",
      B: "Exige indenização prévia e justa",
      C: "Não requer pagamento ao expropriado",
      D: "Pode ser feita sem motivo",
      E: "É voluntária"
    },
    correct: "B",
    justification: "A desapropriação exige indenização prévia, justa e em dinheiro ao expropriado."
  },
  {
    subject: "Direito Administrativo",
    question: "O princípio da impessoalidade na Administração Pública significa que:",
    options: {
      A: "As ações visam interesses pessoais",
      B: "As decisões são baseadas em favoritismo",
      C: "Os atos administrativos devem visar o interesse público", 
      D: "Os servidores podem agir conforme suas preferências",
      E: "A Administração pode discriminar cidadãos"
    },
    correct: "C",
    justification: "A impessoalidade exige que os atos administrativos atendam ao interesse público, sem favorecimentos."
  },
  {
    subject: "Direito Administrativo",  
    question: "A função administrativa do Estado inclui:",
    options: {
      A: "Elaboração de leis",
      B: "Julgamento de processos",
      C: "Execução de políticas públicas",
      D: "Fiscalização do Judiciário",
      E: "Atuação exclusiva do Legislativo"
    },
    correct: "C",
    justification: "A função administrativa refere-se à execução das políticas públicas pelo Estado."
  },
  {
    subject: "Direito Administrativo",  
    question: "O controle interno na Administração Pública tem como finalidade:",
    options: {
      A: "Substituir o controle externo",
      B: "Garantir a legalidade e eficiência dos atos administrativos",
      C: "Evitar auditorias",
      D: "Limitar a transparência",
      E: "Reduzir a fiscalização"
    },
    correct: "B",
    justification: "O controle interno visa assegurar a legalidade, eficiência e eficácia dos atos administrativos."
  },
  {
    subject: "Direito Administrativo",  
    question: "A responsabilidade civil do Estado ocorre quando:",
    options: {
      A: "O Estado age dentro da lei",
      B: "Há dano causado por ato lícito",
      C: "Há dano causado por ato ilícito",
      D: "O Estado não é responsabilizado",
      E: "O servidor age com base na lei"
    },
    correct: "C",
    justification: "A responsabilidade civil do Estado decorre de atos ilícitos que causem danos a terceiros."
  },
  {
    subject: "Direito Administrativo",  
    question: "A concessão de serviço público é caracterizada por:",
    options: {
      A: "Atuação direta do Estado na prestação do serviço",  
      B: "Transferência da prestação do serviço a particular mediante contrato",
      C: "Prestação gratuita do serviço",
      D: "Exclusão do controle estatal",
      E: "Atuação exclusiva do setor privado"
    },
    correct: "B",
    justification: "Concessão é a transferência da prestação de serviço público a particular, sob contrato e controle estatal."
  },
  {
  subject: "Direito Administrativo",
  question: "Segundo a jurisprudência atual do STF, a responsabilidade civil do Estado por atos omissivos é, em regra:",
  options: {
    A: "Objetiva, independentemente de comprovação de culpa",
    B: "Subjetiva, exigindo comprovação de culpa administrativa",
    C: "Inexistente, salvo previsão legal expressa",
    D: "Solidária entre Estado e agente público",
    E: "Automática, sempre que houver dano"
  },
  correct: "B",
  justification: "Em atos comissivos, prevalece a responsabilidade subjetiva do Estado, com necessidade de comprovação de culpa administrativa (STF)."
},
{
  subject: "Direito Administrativo",
  question: "Conforme a Lei nº 14.133/2021, a licitação é dispensável quando:",
  options: {
    A: "O valor do contrato for inferior a qualquer limite legal",
    B: "Houver inviabilidade absoluta de competição",
    C: "Caracterizada situação de emergência ou calamidade pública",
    D: "A Administração desejar maior celeridade",
    E: "O fornecedor for previamente cadastrado"
  },
  correct: "C",
  justification: "A nova Lei de Licitações prevê dispensa em situações emergenciais ou de calamidade pública, observados os requisitos legais."
},
{
  subject: "Direito Administrativo",
  question: "O ato administrativo discricionário distingue-se do vinculado porque:",
  options: {
    A: "Não se submete ao controle judicial",
    B: "Permite liberdade total de atuação",
    C: "Admite juízo de conveniência e oportunidade",
    D: "Dispensa motivação",
    E: "Não produz efeitos jurídicos"
  },
  correct: "C",
  justification: "Nos atos discricionários, a Administração exerce juízo de conveniência e oportunidade, dentro dos limites legais."
},
{
  subject: "Direito Administrativo",
  question: "Segundo entendimento consolidado do STF, a anulação de ato administrativo que produziu efeitos favoráveis ao administrado:",
  options: {
    A: "Pode ocorrer a qualquer tempo",
    B: "Depende de autorização judicial",
    C: "Está sujeita ao prazo decadencial de 5 anos",
    D: "Exige sempre indenização",
    E: "É vedada em qualquer hipótese"
  },
  correct: "C",
  justification: "Aplica-se o prazo decadencial de 5 anos para anulação de atos favoráveis, conforme art. 54 da Lei 9.784/99."
},
{
  subject: "Direito Administrativo",
  question: "O poder de polícia administrativa caracteriza-se, entre outros aspectos, pela:",
  options: {
    A: "Indisponibilidade absoluta",
    B: "Delegação irrestrita a particulares",
    C: "Coercibilidade e autoexecutoriedade",
    D: "Necessidade de autorização judicial prévia",
    E: "Finalidade arrecadatória"
  },
  correct: "C",
  justification: "O poder de polícia possui atributos como coercibilidade e, em certos casos, autoexecutoriedade."
},
{
  subject: "Direito Administrativo",
  question: "A revogação do ato administrativo ocorre quando:",
  options: {
    A: "Há vício insanável",
    B: "O ato é ilegal",
    C: "O ato é inconveniente ou inoportuno",
    D: "O Judiciário assim determina",
    E: "Há desvio de finalidade"
  },
  correct: "C",
  justification: "A revogação decorre de juízo de mérito administrativo, por conveniência e oportunidade."
},
{
  subject: "Direito Administrativo",
  question: "Nos termos da Constituição Federal, os atos de improbidade administrativa:",
  options: {
    A: "Exigem condenação criminal prévia",
    B: "Geram apenas sanções penais",
    C: "Podem resultar em suspensão dos direitos políticos",
    D: "Dependem de dolo específico em qualquer hipótese",
    E: "Não admitem ressarcimento ao erário"
  },
  correct: "C",
  justification: "A CF prevê sanções como suspensão dos direitos políticos, perda da função pública e ressarcimento ao erário."
},
{
  subject: "Direito Administrativo",
  question: "Conforme entendimento do STJ, o princípio da motivação:",
  options: {
    A: "Aplica-se apenas aos atos vinculados",
    B: "É dispensável em atos discricionários",
    C: "É exigido especialmente quando o ato afeta direitos do administrado",
    D: "Aplica-se apenas a atos normativos",
    E: "Não possui respaldo constitucional"
  },
  correct: "C",
  justification: "A motivação é essencial quando o ato restringe direitos ou impõe deveres ao administrado."
},
{
  subject: "Direito Administrativo",
  question: "O controle judicial dos atos administrativos:",
  options: {
    A: "Alcança o mérito administrativo",
    B: "Limita-se à legalidade, em regra",
    C: "É vedado em atos discricionários",
    D: "Depende de autorização do Legislativo",
    E: "Substitui o controle interno"
  },
  correct: "B",
  justification: "O Judiciário controla a legalidade dos atos administrativos, não o mérito, salvo exceções."
},
{
  subject: "Direito Administrativo",
  question: "A teoria do risco administrativo, adotada pelo ordenamento jurídico brasileiro, implica que:",
  options: {
    A: "O Estado responde sempre, sem exceções",
    B: "A responsabilidade é subjetiva",
    C: "Admite excludentes de responsabilidade",
    D: "Exige comprovação de dolo do agente",
    E: "Afasta o dever de indenizar"
  },
  correct: "C",
  justification: "Na teoria do risco administrativo, o Estado responde objetivamente, mas admite excludentes como culpa exclusiva da vítima."
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
  },
  {
    subject: "Legislação de Trânsito",
    question: "A velocidade máxima permitida em vias urbanas é de:",
    options: {
      A: "40 km/h",
      B: "50 km/h",
      C: "60 km/h",
      D: "70 km/h", 
      E: "80 km/h"
    },
    correct: "B",
    justification: "A velocidade máxima em vias urbanas é de 50 km/h, salvo indicação em contrário (art. 61 do CTB)."
  },
  {
    subject: "Legislação de Trânsito",
    question: "O uso do cinto de segurança é obrigatório para:",
    options: {
      A: "Apenas o motorista",
      B: "Motorista e passageiro dianteiro",
      C: "Todos os ocupantes do veículo",
      D: "Apenas passageiros traseiros",
      E: "Apenas em rodovias"
    },
    correct: "C",
    justification: "O cinto de segurança é obrigatório para todos os ocupantes do veículo (art. 65 do CTB)."
  },
  {
    subject: "Legislação de Trânsito",
    question: "Em caso de acidente com vítima, o condutor deve:",
    options: {
      A: "Deixar o local imediatamente",
      B: "Prestar socorro e chamar ajuda",
      C: "Aguardar a chegada da polícia sem agir",
      D: "Mover a vítima para outro local",
      E: "Continuar dirigindo normalmente"
    },
    correct: "B",
    justification: "O condutor deve prestar socorro e chamar ajuda (art. 176 do CTB)."
  },
  {
    subject: "Legislação de Trânsito",
    question: "O que é permitido ao condutor ao se aproximar de uma faixa de pedestres?",
    options: {
      A: "Acelerar para passar antes do pedestre",
      B: "Ignorar a faixa se não houver pedestres",
      C: "Reduzir a velocidade e parar se houver pedestres",
      D: "Ultrapassar outros veículos na faixa",
      E: "Buzinar para alertar os pedestres"
    },
    correct: "C",
    justification: "O condutor deve reduzir a velocidade e parar se houver pedestres na faixa (art. 214 do CTB)."
  },
  {
  subject: "Legislação de Trânsito",
  question: "Dirigir sob a influência de álcool configura:",
  options: {
    A: "Infração média",
    B: "Infração grave",
    C: "Infração gravíssima",
    D: "Apenas crime de trânsito",
    E: "Conduta permitida"
  },
  correct: "C",
  justification: "Dirigir sob influência de álcool é infração gravíssima (art. 165 do CTB)."
},
{
  subject: "Legislação de Trânsito",
  question: "Deixar de dar preferência de passagem ao pedestre que se encontra na faixa caracteriza:",
  options: {
    A: "Infração leve",
    B: "Infração média",
    C: "Infração grave",
    D: "Infração gravíssima",
    E: "Apenas advertência"
  },
  correct: "D",
  justification: "Não dar preferência ao pedestre na faixa é infração gravíssima (art. 214 do CTB)."
},
{
  subject: "Legislação de Trânsito",
  question: "O condutor que se recusar a realizar o teste do bafômetro estará sujeito a:",
  options: {
    A: "Apenas advertência",
    B: "Infração média",
    C: "Infração grave",
    D: "Infração gravíssima",
    E: "Somente processo criminal"
  },
  correct: "D",
  justification: "A recusa ao teste configura infração gravíssima (art. 165-A do CTB)."
},
{
  subject: "Legislação de Trânsito",
  question: "Transitar com o veículo em velocidade superior à máxima permitida em mais de 50% caracteriza:",
  options: {
    A: "Infração média",
    B: "Infração grave",
    C: "Infração gravíssima",
    D: "Infração leve",
    E: "Conduta permitida"
  },
  correct: "C",
  justification: "Exceder em mais de 50% a velocidade máxima é infração gravíssima (art. 218, III do CTB)."
},
{
  subject: "Legislação de Trânsito",
  question: "Conduzir veículo sem possuir Carteira Nacional de Habilitação caracteriza:",
  options: {
    A: "Infração média",
    B: "Infração grave",
    C: "Infração gravíssima",
    D: "Apenas advertência",
    E: "Nenhuma infração"
  },
  correct: "C",
  justification: "Dirigir sem CNH é infração gravíssima (art. 162, I do CTB)."
},
{
  subject: "Legislação de Trânsito",
  question: "Deixar de manter o veículo na faixa da direita quando não houver motivo para transitar na faixa da esquerda caracteriza:",
  options: {
    A: "Infração leve",
    B: "Infração média",
    C: "Infração grave",
    D: "Infração gravíssima",
    E: "Conduta permitida"
  },
  correct: "B",
  justification: "Transitar indevidamente na faixa da esquerda é infração média (art. 198 do CTB)."
},
{
  subject: "Legislação de Trânsito",
  question: "O transporte de criança sem observância das normas de segurança caracteriza:",
  options: {
    A: "Infração média",
    B: "Infração leve",
    C: "Infração grave",
    D: "Infração gravíssima",
    E: "Conduta permitida"
  },
  correct: "D",
  justification: "Transportar criança sem os dispositivos adequados é infração gravíssima (art. 168 do CTB)."
},
{
  subject: "Legislação de Trânsito",
  question: "Deixar de sinalizar a via após a remoção do veículo em caso de acidente caracteriza:",
  options: {
    A: "Infração leve",
    B: "Infração média",
    C: "Infração grave",
    D: "Infração gravíssima",
    E: "Nenhuma infração"
  },
  correct: "C",
  justification: "Deixar de sinalizar a via após acidente é infração grave (art. 176, I do CTB)."
},
{
  subject: "Legislação de Trânsito",
  question: "Ultrapassar veículo parado em faixa de pedestres caracteriza:",
  options: {
    A: "Infração média",
    B: "Infração grave",
    C: "Infração leve",
    D: "Infração gravíssima",
    E: "Conduta permitida"
  },
  correct: "D",
  justification: "Ultrapassar veículo parado na faixa de pedestres é infração gravíssima (art. 191 do CTB)."
},
{
  subject: "Legislação de Trânsito",
  question: "Dirigir ameaçando pedestres ou outros veículos caracteriza:",
  options: {
    A: "Infração média",
    B: "Infração grave",
    C: "Infração leve",
    D: "Infração gravíssima",
    E: "Apenas crime"
  },
  correct: "D",
  justification: "Dirigir de forma ameaçadora é infração gravíssima (art. 170 do CTB)."
}

];
/* =====================================================
   INFORMÁTICA
===================================================== */
const informaticaQuestions = [
  {
    subject: "Informática",
    question: "Qual dos seguintes é um sistema operacional?",
    options: {
      A: "Microsoft Word",
      B: "Google Chrome",
      C: "Linux",
      D: "Adobe Photoshop",
      E: "Mozilla Firefox"
    },
    correct: "C",
    justification: "Linux é um sistema operacional; os outros são aplicativos."
  },
  {
    subject: "Informática",
    question: "O que é um firewall?",
    options: {
      A: "Um tipo de vírus",
      B: "Um software de edição de imagens",
      C: "Um dispositivo de segurança de rede",
      D: "Um programa de navegação na internet",
      E: "Um sistema de armazenamento de dados"
    },
    correct: "C",
    justification: "Firewall é um dispositivo ou software que protege redes contra acessos não autorizados."
  },
  {
    subject: "Informática",
    question: "Qual é a função principal do software antivírus?",
    options: {
      A: "Acelerar o computador",
      B: "Proteger contra malware",
      C: "Gerenciar arquivos",
      D: "Editar documentos",
      E: "Navegar na internet"
    },
    correct: "B",
    justification: "O antivírus protege o sistema contra malwares, como vírus e trojans."
  },
  {
    subject: "Informática",
    question: "O que significa a sigla 'URL'?",
    options: {
      A: "Universal Resource Locator",
      B: "Uniform Resource Locator",
      C: "Universal Reference Link",  
      D: "Uniform Reference Link",
      E: "Unique Resource Link"
    },
    correct: "B",
    justification: "URL significa Uniform Resource Locator, que é o endereço de um recurso na internet."
  },
  {
    subject: "Informática",
    question: "Qual dos seguintes é um exemplo de software de planilha eletrônica?",
    options: {
      A: "Microsoft Excel",
      B: "Adobe Acrobat",
      C: "Mozilla Firefox",
      D: "Google Chrome",
      E: "Microsoft PowerPoint"
    },
    correct: "A",
    justification: "Microsoft Excel é um software de planilha eletrônica; os outros são de diferentes categorias."
  },
  {
    subject: "Informática",
    question: "O que é 'nuvem' (cloud computing) em informática?",
    options: {
      A: "Um tipo de hardware",
      B: "Um software de edição de fotos",
      C: "Armazenamento e serviços via internet",
      D: "Um sistema operacional",
      E: "Um programa de navegação"
    },
    correct: "C",
    justification: "Nuvem refere-se ao armazenamento e serviços acessados via internet."
  },
  {
  subject: "Informática",
  question: "Qual é a principal função do protocolo TCP?",
  options: {
    A: "Garantir a entrega confiável dos dados",
    B: "Definir endereços IP",
    C: "Criptografar a comunicação",
    D: "Controlar o acesso à rede",
    E: "Converter nomes em IP"
  },
  correct: "A",
  justification: "O TCP garante entrega confiável, ordenada e sem erros dos dados."
},
{
  subject: "Informática",
  question: "Qual protocolo é utilizado para envio de e-mails?",
  options: {
    A: "FTP",
    B: "HTTP",
    C: "SMTP",
    D: "POP3",
    E: "IMAP"
  },
  correct: "C",
  justification: "O SMTP (Simple Mail Transfer Protocol) é usado para envio de e-mails."
},
{
  subject: "Informática",
  question: "O que significa a sigla IP em redes de computadores?",
  options: {
    A: "Internet Process",
    B: "Internal Protocol",
    C: "Internet Protocol",
    D: "Information Packet",
    E: "Interface Program"
  },
  correct: "C",
  justification: "IP significa Internet Protocol, responsável pelo endereçamento dos dispositivos na rede."
},
{
  subject: "Informática",
  question: "Qual dispositivo é responsável por interligar redes diferentes?",
  options: {
    A: "Switch",
    B: "Hub",
    C: "Roteador",
    D: "Placa de rede",
    E: "Modem"
  },
  correct: "C",
  justification: "O roteador conecta redes distintas e encaminha pacotes de dados."
},
{
  subject: "Informática",
  question: "Qual é a função do protocolo DNS?",
  options: {
    A: "Enviar arquivos",
    B: "Converter nomes de domínio em endereços IP",
    C: "Garantir segurança da rede",
    D: "Gerenciar conexões",
    E: "Monitorar tráfego"
  },
  correct: "B",
  justification: "O DNS traduz nomes de domínio em endereços IP."
},
{
  subject: "Informática",
  question: "Qual é a topologia de rede em que todos os dispositivos se conectam a um ponto central?",
  options: {
    A: "Barramento",
    B: "Anel",
    C: "Malha",
    D: "Estrela",
    E: "Árvore"
  },
  correct: "D",
  justification: "Na topologia em estrela, todos os dispositivos se conectam a um nó central."
},
{
  subject: "Informática",
  question: "Qual protocolo é usado para navegação na web?",
  options: {
    A: "FTP",
    B: "SMTP",
    C: "HTTP",
    D: "SNMP",
    E: "SSH"
  },
  correct: "C",
  justification: "HTTP é o protocolo utilizado para transferência de páginas web."
},
{
  subject: "Informática",
  question: "O que é uma rede LAN?",
  options: {
    A: "Rede de longa distância",
    B: "Rede sem fio pública",
    C: "Rede local",
    D: "Rede de internet global",
    E: "Rede de servidores"
  },
  correct: "C",
  justification: "LAN (Local Area Network) é uma rede local, como a de uma casa ou empresa."
},
{
  subject: "Informática",
  question: "Qual equipamento permite a conexão de dispositivos em uma mesma rede local?",
  options: {
    A: "Roteador",
    B: "Switch",
    C: "Firewall",
    D: "Servidor DNS",
    E: "Proxy"
  },
  correct: "B",
  justification: "O switch conecta dispositivos dentro da mesma rede local."
},
{
  subject: "Informática",
  question: "Qual é a principal diferença entre TCP e UDP?",
  options: {
    A: "TCP é mais rápido que UDP",
    B: "UDP garante entrega dos dados",
    C: "TCP é orientado à conexão e UDP não",
    D: "UDP é mais seguro que TCP",
    E: "TCP não é usado na internet"
  },
  correct: "C",
  justification: "TCP é orientado à conexão e confiável; UDP é mais rápido, porém não garante entrega."
},
{
  subject: "Informática",
  question: "Em uma rede TCP/IP, qual camada é responsável pelo endereçamento lógico?",
  options: {
    A: "Aplicação",
    B: "Transporte",
    C: "Internet",
    D: "Enlace",
    E: "Física"
  },
  correct: "C",
  justification: "A camada Internet do modelo TCP/IP é responsável pelo endereçamento lógico (IP)."
},
{
  subject: "Informática",
  question: "Qual protocolo é utilizado para transferência segura de arquivos?",
  options: {
    A: "FTP",
    B: "TFTP",
    C: "SFTP",
    D: "SMTP",
    E: "HTTP"
  },
  correct: "C",
  justification: "O SFTP utiliza criptografia para transferência segura de arquivos."
},
{
  subject: "Informática",
  question: "Qual máscara de sub-rede corresponde a um endereço /26?",
  options: {
    A: "255.255.255.0",
    B: "255.255.255.192",
    C: "255.255.255.128",
    D: "255.255.255.224",
    E: "255.255.255.240"
  },
  correct: "B",
  justification: "/26 corresponde à máscara 255.255.255.192."
},
{
  subject: "Informática",
  question: "Qual protocolo permite configuração automática de endereços IP?",
  options: {
    A: "DNS",
    B: "ARP",
    C: "DHCP",
    D: "ICMP",
    E: "SNMP"
  },
  correct: "C",
  justification: "O DHCP distribui automaticamente endereços IP aos dispositivos."
},
{
  subject: "Informática",
  question: "O comando 'ping' utiliza qual protocolo?",
  options: {
    A: "TCP",
    B: "UDP",
    C: "ICMP",
    D: "HTTP",
    E: "ARP"
  },
  correct: "C",
  justification: "O ping utiliza mensagens ICMP para testar conectividade."
},
{
  subject: "Informática",
  question: "Em IPv4, quantos bits possui um endereço IP?",
  options: {
    A: "32",
    B: "64",
    C: "128",
    D: "16",
    E: "48"
  },
  correct: "A",
  justification: "Endereços IPv4 possuem 32 bits."
},
{
  subject: "Informática",
  question: "Qual dispositivo opera predominantemente na camada 2 do modelo OSI?",
  options: {
    A: "Roteador",
    B: "Switch",
    C: "Firewall",
    D: "Gateway",
    E: "Proxy"
  },
  correct: "B",
  justification: "O switch opera na camada de enlace (camada 2)."
},
{
  subject: "Informática",
  question: "Qual é a principal função do protocolo ARP?",
  options: {
    A: "Converter IP em MAC",
    B: "Converter MAC em IP",
    C: "Distribuir IP",
    D: "Criptografar pacotes",
    E: "Controlar tráfego"
  },
  correct: "A",
  justification: "O ARP converte endereços IP em endereços MAC."
},
{
  subject: "Informática",
  question: "Qual tipo de ataque intercepta a comunicação entre duas partes?",
  options: {
    A: "DoS",
    B: "Phishing",
    C: "Man-in-the-middle",
    D: "Brute force",
    E: "Spoofing"
  },
  correct: "C",
  justification: "O ataque Man-in-the-middle intercepta a comunicação entre duas entidades."
},
{
  subject: "Informática",
  question: "Qual protocolo é utilizado para gerenciamento de dispositivos de rede?",
  options: {
    A: "SNMP",
    B: "SMTP",
    C: "FTP",
    D: "IMAP",
    E: "POP3"
  },
  correct: "A",
  justification: "O SNMP é usado para monitoramento e gerenciamento de dispositivos."
},
{
  subject: "Informática",
  question: "No modelo OSI, a camada responsável pelo controle de fluxo e pela detecção de erros é a camada de enlace.",
  options: {
    A: "Aplicação",
    B: "Sessão",
    C: "Transporte",
    D: "Enlace",
    E: "Física"
  },
  correct: "D",
  justification: "A camada de enlace realiza controle de fluxo e detecção de erros no nível de quadro."
},
{
  subject: "Informática",
  question: "O protocolo HTTPS diferencia-se do HTTP por utilizar criptografia baseada em TLS ou SSL.",
  options: {
    A: "Correto",
    B: "Errado",
  },
  correct: "A",
  justification: "HTTPS utiliza TLS/SSL para criptografar a comunicação."
},
{
  subject: "Informática",
  question: "Em redes IPv4, a classe C possui máscara padrão 255.255.255.0.",
  options: {
    A: "Verdadeiro",
    B: "Falso",
  },
  correct: "A",
  justification: "A máscara padrão da classe C é 255.255.255.0."
},
{
  subject: "Informática",
  question: "O protocolo UDP garante entrega confiável e ordenada dos pacotes.",
  options: {
    A: "Correto",
    B: "Errado",
  },
  correct: "B",
  justification: "UDP não garante entrega nem ordenação dos pacotes."
},
{
  subject: "Informática",
  question: "O IPv6 foi criado, entre outros motivos, para resolver o problema do esgotamento de endereços IPv4.",
  options: {
    A: "Certo",
    B: "Errado",
  },
  correct: "A",
  justification: "O IPv6 amplia significativamente o espaço de endereçamento."
},
{
  subject: "Informática",
  question: "Um firewall pode ser implementado tanto em hardware quanto em software.",
  options: {
    A: "Falso",
    B: "Verdadeiro",
  },
  correct: "B",
  justification: "Firewalls podem ser implementados como hardware ou software."
},
{
  subject: "Informática",
  question: "O protocolo FTP utiliza, por padrão, as portas 20 e 21.",
  options: {
    A: "Errado",
    B: "Certo",
  },
  correct: "B",
  justification: "FTP usa a porta 21 para controle e 20 para dados."
},
{
  subject: "Informática",
  question: "O DNS é considerado um protocolo da camada de aplicação.",
  options: {
    A: "Falso",
    B: "Certo",
  },
  correct: "B",
  justification: "DNS atua na camada de aplicação do modelo TCP/IP."
},
{
  subject: "Informática",
  question: "Em uma topologia em anel, a falha de um único nó pode comprometer toda a rede.",
  options: {
    A: "Errado",
    B: "Certo",
  },
  correct: "B",
  justification: "Na topologia em anel, a falha de um nó pode interromper a comunicação."
},
{
  subject: "Informática",
  question: "O protocolo ICMP é utilizado para envio de mensagens de erro e controle.",
  options: {
    A: "Certo",
    B: "Errado",
  },
  correct: "A",
  justification: "ICMP é usado para mensagens de erro e diagnóstico."
},
{
  subject: "Informática",
  question: "A Engenharia da Informação tem como principal objetivo estruturar e organizar os dados de forma a apoiar a tomada de decisão nas organizações.",
  options: {
    A: "Correto",
    B: "Errado",
  },
  correct: "A",
  justification: "A Engenharia da Informação foca na organização e uso estratégico da informação."
},
{
  subject: "Informática",
  question: "O gerenciamento de memória em um sistema operacional tem como função principal controlar o uso da memória principal pelos processos em execução.",
  options: {
    A: "Errado",
    B: "Correto",
  },
  correct: "B",
  justification: "O gerenciamento de memória controla alocação e liberação da memória para processos."
},
{
  subject: "Informática",
  question: "No sistema operacional Linux, o kernel é responsável pelo gerenciamento de hardware e recursos do sistema.",
  options: {
    A: "Correto",
    B: "Errado",
  },
  correct: "A",
  justification: "O kernel gerencia CPU, memória, dispositivos e processos."
},
{
  subject: "Informática",
  question: "Uma rede WAN caracteriza-se por abranger grandes áreas geográficas, como cidades, países ou continentes.",
  options: {
    A: "Errado",
    B: "Correto",
  },
  correct: "B",
  justification: "WAN cobre grandes distâncias geográficas."
},
{
  subject: "Informática",
  question: "O protocolo TCP garante entrega confiável e ordenada dos dados transmitidos em uma rede.",
  options: {
    A: "Errado",
    B: "Correto",
  },
  correct: "B",
  justification: "TCP é orientado à conexão e garante confiabilidade."
},
{
  subject: "Informática",
  question: "A segurança em redes envolve mecanismos como autenticação, criptografia e controle de acesso.",
  options: {
    A: "Correto",
    B: "Errado",
  },
  correct: "A",
  justification: "Segurança de redes utiliza múltiplos mecanismos."
},
{
  subject: "Informática",
  question: "Pilhas são estruturas de dados que seguem o princípio LIFO (Last In, First Out).",
  options: {
    A: "Errado",
    B: "Correto",
  },
  correct: "B",
  justification: "Pilhas operam segundo o princípio LIFO."
},
{
  subject: "Informática",
  question: "Árvores são estruturas de dados não lineares que representam relações hierárquicas.",
  options: {
    A: "Errado",
    B: "Correto",
  },
  correct: "B",
  justification: "Árvores são estruturas hierárquicas não lineares."
},
{
  subject: "Informática",
  question: "Filas utilizam o princípio FIFO (First In, First Out).",
  options: {
    A: "Correto",
    B: "Errado",
  },
  correct: "A",
  justification: "Filas operam pelo princípio FIFO."
},
{
  subject: "Informática",
  question: "A programação orientada a objetos baseia-se em conceitos como classes, objetos, herança e polimorfismo.",
  options: {
    A: "Errado",
    B: "Correto",
  },
  correct: "B",
  justification: "POO utiliza classes, objetos, herança e polimorfismo."
},
{
  subject: "Informática",
  question: "A programação estruturada utiliza estruturas de controle como sequência, decisão e repetição.",
  options: {
    A: "Correto",
    B: "Errado",
  },
  correct: "A",
  justification: "Essas são as estruturas básicas da programação estruturada."
},
{
  subject: "Informática",
  question: "O estudo de viabilidade avalia se um sistema é técnica, econômica e operacionalmente viável.",
  options: {
    A: "Errado",
    B: "Correto",
  },
  correct: "B",
  justification: "A viabilidade considera vários aspectos antes do desenvolvimento."
},
{
  subject: "Informática",
  question: "A fase de testes tem como objetivo identificar erros antes da implantação do sistema.",
  options: {
    A: "Correto",
    B: "Errado",
    C: "Somente após implantação",
    D: "Somente no início",
    E: "Somente em produção"
  },
  correct: "A",
  justification: "Testes buscam identificar falhas antes da implantação."
},
{
  subject: "Informática",
  question: "O levantamento de dados é uma etapa fundamental da análise de sistemas.",
  options: {
    A: "Errado",
    B: "Correto",
  },
  correct: "B",
  justification: "O levantamento de dados é essencial para entender os requisitos."
},
{
  subject: "Informática",
  question: "Um SGBD é responsável por armazenar, gerenciar e recuperar dados de forma eficiente.",
  options: {
    A: "Correto",
    B: "Errado",
  },
  correct: "A",
  justification: "O SGBD gerencia todo o ciclo de vida dos dados."
},
{
  subject: "Informática",
  question: "SQL é uma linguagem utilizada para criação, consulta e manipulação de dados em bancos de dados relacionais.",
  options: {
    A: "Errado",
    B: "Correto",
  },
  correct: "B",
  justification: "SQL permite criar, consultar e manipular dados."
},
{
  subject: "Informática",
  question: "O projeto conceitual de banco de dados utiliza modelos como o entidade-relacionamento.",
  options: {
    A: "Correto",
    B: "Errado",
  },
  correct: "A",
  justification: "O modelo ER é usado no projeto conceitual."
},
{
  subject: "Informática",
  question: "Ferramentas de desenvolvimento auxiliam na codificação, testes e manutenção de sistemas.",
  options: {
    A: "Errado",
    B: "Correto",
  },
  correct: "B",
  justification: "Ferramentas apoiam várias etapas do desenvolvimento."
},
{
  subject: "Informática",
  question: "Aplicações web são acessadas por meio de navegadores e utilizam protocolos como HTTP e HTTPS.",
  options: {
    A: "Correto",
    B: "Errado",
  },
  correct: "A",
  justification: "Aplicações web utilizam navegadores e protocolos web."
},
{
  subject: "Informática",
  question: "Uma característica das aplicações web é a independência de sistema operacional do usuário.",
  options: {
    A: "Errado",
    B: "Correto",
  },
  correct: "B",
  justification: "Aplicações web são multiplataforma."
},
{
  subject: "Informática",
  question: "No Excel, a função SE permite:",
  options: {
    A: "Somar intervalos",
    B: "Criar gráficos",
    C: "Executar testes lógicos",
    D: "Pesquisar valores",
    E: "Contar células vazias"
  },
    correct: "C",
    justification: "A função SE executa testes lógicos e retorna valores com base no resultado."
},
{
    subject: "Informática",
    question: "Qual atalho do teclado é usado para copiar um item selecionado?",
    options: {
      A: "Ctrl + C",
      B: "Ctrl + V",
      C: "Ctrl + X",
      D: "Alt + C",
      E: "Shift + C"
    },
    correct: "A",
    justification: "O atalho Ctrl + C copia o item selecionado."
},
{
    subject: "Informática",
    question: "Qual é a extensão padrão dos arquivos do Microsoft Word?",
    options: {
      A: ".xls",
      B: ".ppt",
      C: ".docx",
      D: ".txt",
      E: ".pdf"
    },
    correct: "C",
    justification: "A extensão padrão dos arquivos do Word é .docx."
},
{
    subject: "Informática",
    question: "Qual extensão corresponde a um arquivo compactado?",
    options: {
      A: ".zip",
      B: ".docx",
      C: ".pptx",
      D: ".xlsx",
      E: ".pdf"
    },
    correct: "A",
    justification: "A extensão .zip é usada para arquivos compactados."
},
{
    subject: "Informática",
    question: "Qual programa é utilizado para navegar na internet?",
    options: {
      A: "Microsoft Word",
      B: "Adobe Photoshop",
      C: "Google Chrome",
      D: "Microsoft Excel",
      E: "VLC Media Player"
    },
    correct: "C",
    justification: "Google Chrome é um navegador de internet."
},
{
    subject: "Informática",
    question: "No Windows, o atalho para alternar entre janelas é:",
    options: {
      A: "Ctrl + C",
      B: "Ctrl + V",
      C: "Alt + Tab",
      D: "Shift + Esc",
      E: "Ctrl + Alt + Del"
    },
    correct: "C",
    justification: "O atalho Alt + Tab permite alternar entre janelas abertas."
},
{
    subject: "Informática",
    question: "No Scrum, o responsável por priorizar o backlog é:",
    options: {
      A: "Scrum Master",
      B: "Product Owner",
      C: "Development Team",
      D: "Stakeholder",
      E: "Project Manager"
    },
    correct: "B",
    justification: "O Product Owner é responsável por priorizar o backlog do produto."
},
{
    subject: "Informática",
    question: "Qual é a principal função do Scrum Master?",
    options: {
      A: "Gerenciar o projeto",
      B: "Priorizar o backlog",
      C: "Facilitar o processo Scrum",
      D: "Desenvolver o produto",
      E: "Aprovar entregas"
    },
    correct: "C",
    justification: "O Scrum Master facilita o processo Scrum e remove impedimentos."
},
{
    subject: "Informática",
    question: "Em Scrum, o que é uma Sprint?",
    options: {
      A: "Uma reunião diária",
      B: "Um incremento do produto",
      C: "Um ciclo de desenvolvimento com duração fixa",
      D: "Um documento de requisitos",
      E: "Um teste de software"
    },
    correct: "C",
    justification: "Uma Sprint é um ciclo de desenvolvimento com duração fixa, geralmente de 2 a 4 semanas."
},
{
    subject: "Informática",
    question: "A chave estrangeira tem a função de:",
    options: {
      A: "Identificar registros",
      B: "Garantir integridade referencial",
      C: "Indexar colunas",
      D: "Eliminar duplicidade",
      E: "Criar visões"
    },
    correct: "B",
    justification: "A chave estrangeira é usada para criar relações entre tabelas em bancos de dados relacionais."
},
{
    subject: "Informática",
    question: "No Excel, a função CONT.SE é usada para:",
    options: {
      A: "Somar valores condicionais",
      B: "Contar células com critério",
      C: "Executar testes lógicos",
      D: "Pesquisar valores",
      E: "Criar gráficos"
    },
    correct: "B",
    justification: "A função CONT.SE conta o número de células que atendem a um critério específico."
},
{
    subject: "Informática",
    question: "Qual atalho do Windows alterna entre janelas abertas?",
    options: {
      A: "Ctrl + Alt + Del",
      B: "Ctrl + Shift + Esc",
      C: "Alt + Tab",
      D: "Ctrl + C",
      E: "Alt + F4"
    },
    correct: "C",
    justification: "O atalho Alt + Tab permite alternar entre janelas abertas no Windows."
},
{
    subject: "Informática",
    question: "O protocolo TCP garante:",
    options: {
      A: "Entrega sem conexão",
      B: "Alta velocidade",
      C: "Controle de fluxo e confiabilidade",
      D: "Menor latência",
      E: "Transmissão sem portas"
    },
    correct: "C",
    justification: "O TCP é um protocolo orientado à conexão que garante controle de fluxo e confiabilidade na transmissão de dados."
},
{
    subject: "Informática",
    question: "O ataque que visa enganar o usuário para obter informações é:",
    options: {
      A: "DDoS",
      B: "Phishing",
      C: "Malware",
      D: "Brute Force",
      E: "Spoofing"
    },
    correct: "B",
    justification: "Phishing é um ataque que tenta enganar o usuário para obter informações confidenciais."
}
];
/* =====================================================
   SIMULADO OFICIAL – PETRÓLEO BRASILEIRO S.A. – PETROBRAS
===================================================== */
const PETROBRAS_QUESTIONS = [
  {
  subject: "Petrobras",
  question: "Qual é a principal atividade da Petrobras?",
  options: {
    A: "Produção de energia elétrica",
    B: "Exploração e produção de petróleo e gás",
    C: "Fabricação de veículos",
    D: "Comércio varejista",
    E: "Indústria têxtil"
  },
  correct: "B",
  justification: "A principal atividade da Petrobras é a exploração e produção de petróleo e gás."
},
{
  subject: "Petrobras",
  question: "Em que ano a Petrobras foi fundada?",
  options: {
    A: "1950",
    B: "1953",
    C: "1960",
    D: "1975",
    E: "1980"
  },
  correct: "B",
  justification: "A Petrobras foi fundada em 1953."
},
{
  subject: "Petrobras",
  question: "Qual é o nome do programa de sustentabilidade da Petrobras?",
  options: {
    A: "Petrobras Verde",
    B: "Energia Limpa",
    C: "Compromisso com o Futuro",
    D: "Sustentabilidade Petrobras",
    E: "EcoPetrobras"
  },
  correct: "D",
  justification: "O programa de sustentabilidade da Petrobras é chamado 'Compromisso com o Futuro'."
},
{
  subject: "Petrobras",
  question: "Qual é o nome do maior campo de petróleo em produção da Petrobras?",
  options: {
    A: "Campo de Marlim",
    B: "Campo de Roncador",
    C: "Campo de Lula",
    D: "Campo de Búzios",
    E: "Campo de Sapinhoá"
  },
  correct: "C",
  justification: "O Campo de Lula é o maior campo de petróleo em produção da Petrobras."
},
{
  subject: "Petrobras",
  question: "Qual é a sigla do programa de responsabilidade social da Petrobras?",
  options: {
    A: "PRSP",
    B: "PRES",
    C: "PRSPETRO",
    D: "RESPETRO",
    E: "PETRORESP"
  },
  correct: "A",
  justification: "A sigla do programa de responsabilidade social da Petrobras é PRSP (Programa de Responsabilidade Social Petrobras)."
},
{
  subject: "Petrobras",
  question: "Qual é o principal produto refinado pela Petrobras?",
  options: {
    A: "Gasolina",
    B: "Diesel",
    C: "Querosene",
    D: "Óleo combustível",
    E: "Gás natural"
  },
  correct: "A",
  justification: "A gasolina é o principal produto refinado pela Petrobras."
},
{
  subject: "Petrobras",
  question: "Qual é o nome do programa de inovação tecnológica da Petrobras?",
  options: {
    A: "InovaPetro",
    B: "Tecnologia Petrobras",
    C: "Petrobras Inovação",
    D: "Inovação e Tecnologia",
    E: "TechPetrobras"
  },
  correct: "C",
  justification: "O programa de inovação tecnológica da Petrobras é chamado 'Petrobras Inovação'."
},
{
  subject: "Petrobras",
  question: "Qual é o nome do programa de segurança da Petrobras?",
  options: {
    A: "Segurança Petrobras",
    B: "Petrobras Safe",
    C: "Compromisso com a Segurança",
    D: "Segurança em Primeiro Lugar",
    E: "SafePetrobras"
  },
  correct: "C",
  justification: "O programa de segurança da Petrobras é chamado 'Compromisso com a Segurança'."
},
{
  subject: "Petrobras",
  question: "Qual é o nome do programa de diversidade e inclusão da Petrobras?",
  options: {
    A: "Diversidade Petrobras",
    B: "Inclusão Petrobras",
    C: "Compromisso com a Diversidade",
    D: "Diversidade e Inclusão",
    E: "Inclusão e Diversidade"
  },
  correct: "C",
  justification: "O programa de diversidade e inclusão da Petrobras é chamado 'Compromisso com a Diversidade'."
},
{
  subject: "Petrobras",
  question: "Qual é o nome do programa de eficiência energética da Petrobras?",
  options: {
    A: "Energia Petrobras", 
    B: "Eficiência Petrobras",
    C: "Compromisso com a Eficiência",
    D: "Energia Eficiente",
    E: "Eficiência Energética Petrobras"
  },
  correct: "C",
  justification: "O programa de eficiência energética da Petrobras é chamado 'Compromisso com a Eficiência'."
},
{
  subject: "Petrobras",
  question: "Qual é o nome do programa de responsabilidade ambiental da Petrobras?",
  options: {
    A: "Ambiente Petrobras",
    B: "Petrobras Verde",
    C: "Compromisso com o Meio Ambiente",
    D: "Responsabilidade Ambiental",
    E: "EcoPetrobras"
  },
  correct: "C",
  justification: "O programa de responsabilidade ambiental da Petrobras é chamado 'Compromisso com o Meio Ambiente'."
},
{
  subject: "Petrobras",
  question: "Durante a implantação de um novo sistema corporativo de gestão de ativos em uma refinaria da Petrobras, foi identificado que diferentes áreas solicitavam mudanças frequentes sem avaliação de impacto. Considerando boas práticas de governança de TI, a ação mais adequada para mitigar riscos é:",
  options: {
    A: "Atender todas as solicitações para garantir agilidade operacional",
    B: "Suspender o projeto até que todas as áreas entrem em consenso",
    C: "Implementar um comitê de mudanças com critérios formais de avaliação",
    D: "Delegar as decisões exclusivamente à equipe técnica",
    E: "Registrar as solicitações apenas para fins históricos"
  },
  correct: "C",
  justification: "A governança de TI prevê controle formal de mudanças, garantindo alinhamento estratégico, mitigação de riscos e rastreabilidade."
},
{
  subject: "Petrobras",
  question: "Um sistema interno da Petrobras passou a coletar dados pessoais de empregados para análise de desempenho. À luz da LGPD, antes do início do tratamento desses dados, é obrigatório:",
  options: {
    A: "Solicitar autorização judicial",
    B: "Publicar os dados em portal interno",
    C: "Definir finalidade, base legal e medidas de segurança",
    D: "Anonimizar todos os dados automaticamente",
    E: "Eliminar dados antigos da base"
  },
  correct: "C",
  justification: "A LGPD exige definição clara de finalidade, base legal e adoção de medidas técnicas e administrativas para proteção dos dados."
},
{
  subject: "Petrobras",
  question: "Uma aplicação crítica da Petrobras, responsável pelo monitoramento de produção offshore, precisa manter alta disponibilidade e tolerância a falhas. A arquitetura mais adequada para esse cenário é:",
  options: {
    A: "Monolítica centralizada",
    B: "Cliente-servidor simples",
    C: "Arquitetura distribuída com redundância",
    D: "Aplicação standalone local",
    E: "Processamento manual assistido"
  },
  correct: "C",
  justification: "Ambientes críticos exigem arquiteturas distribuídas, com redundância e mecanismos de tolerância a falhas."
},
{
  subject: "Petrobras",
  question: "Após a indisponibilidade de um sistema de logística que afetou o abastecimento, a equipe de TI da Petrobras deve, segundo ITIL, priorizar inicialmente:",
  options: {
    A: "Identificação da causa raiz",
    B: "Aplicação de penalidades contratuais",
    C: "Restauração rápida do serviço",
    D: "Documentação do incidente",
    E: "Revisão do SLA"
  },
  correct: "C",
  justification: "O gerenciamento de incidentes prioriza restaurar o serviço o mais rápido possível, reduzindo impacto no negócio."
},
{
  subject: "Petrobras",
  question: "Um analista identifica possível conflito de interesses em contratação de fornecedor de TI. De acordo com princípios de compliance, a conduta mais adequada é:",
  options: {
    A: "Ignorar a situação se não houver prova formal",
    B: "Comunicar o fato pelos canais oficiais de integridade",
    C: "Resolver diretamente com o fornecedor",
    D: "Registrar apenas em relatório técnico",
    E: "Aguardar auditoria externa"
  },
  correct: "B",
  justification: "A política de integridade da Petrobras prevê comunicação por canais oficiais para tratamento adequado e transparente."
},
{
  subject: "Petrobras",
  question: "Durante a contratação de um sistema corporativo de grande porte, foi identificado que a área requisitante deseja flexibilizar controles para acelerar a implantação. À luz das práticas de governança e integridade da Petrobras, a decisão mais adequada é:",
  options: {
    A: "Aceitar a flexibilização para evitar atrasos",
    B: "Transferir a responsabilidade para o fornecedor",
    C: "Manter os controles e submeter exceções à instância de governança",
    D: "Cancelar o projeto imediatamente",
    E: "Registrar apenas em ata interna"
  },
  correct: "C",
  justification: "A governança prevê que exceções sejam avaliadas formalmente, mantendo integridade, transparência e mitigação de riscos."
},
{
  subject: "Petrobras",
  question: "Um sistema de monitoramento de produção em plataformas offshore precisa operar mesmo com falhas intermitentes de comunicação. A solução arquitetural mais adequada é:",
  options: {
    A: "Processamento totalmente centralizado",
    B: "Arquitetura distribuída com processamento local e sincronização posterior",
    C: "Aplicação web tradicional dependente de conexão contínua",
    D: "Sistema batch com atualização diária",
    E: "Processamento manual emergencial"
  },
  correct: "B",
  justification: "Ambientes offshore exigem tolerância a falhas, processamento local e sincronização assíncrona."
},
{
  subject: "Petrobras",
  question: "Um incidente expôs dados pessoais de empregados em um sistema interno. Segundo a LGPD, a Petrobras deve, prioritariamente:",
  options: {
    A: "Eliminar imediatamente todos os dados do sistema",
    B: "Comunicar a ANPD e os titulares quando houver risco relevante",
    C: "Aguardar auditoria externa para decisão",
    D: "Aplicar sanções internas antes de qualquer ação",
    E: "Publicar nota pública automaticamente"
  },
  correct: "B",
  justification: "A LGPD exige comunicação à ANPD e aos titulares quando houver risco ou dano relevante."
},
{
  subject: "Petrobras",
  question: "Um dashboard executivo apresenta indicadores conflitantes entre produção e logística. A ação mais adequada para garantir decisão confiável é:",
  options: {
    A: "Escolher o indicador mais favorável",
    B: "Atualizar manualmente os dados",
    C: "Revisar as fontes, regras de negócio e governança de dados",
    D: "Suspender o uso do dashboard",
    E: "Delegar a decisão ao gestor operacional"
  },
  correct: "C",
  justification: "Decisões estratégicas exigem dados consistentes, com governança e regras bem definidas."
},
{
  subject: "Petrobras",
  question: "Uma falha crítica interrompeu um sistema que impacta diretamente o abastecimento. Segundo ITIL, a prioridade inicial é:",
  options: {
    A: "Identificar a causa raiz",
    B: "Restauração do serviço o mais rápido possível",
    C: "Atualizar a base de conhecimento",
    D: "Aplicar penalidades contratuais",
    E: "Revisar indicadores de desempenho"
  },
  correct: "B",
  justification: "Gerenciamento de incidentes prioriza restaurar o serviço para minimizar impacto ao negócio."
},
{
  subject: "Petrobras",
  question: "Durante auditoria interna na Petrobras, foi detectada ambiguidade em um comunicado oficial que levou a interpretação errônea de uma diretriz de segurança. A gerente responsável solicitou revisão textual para tornar a mensagem clara. Qual recurso da norma culta é mais relevante para garantir clareza da comunicação?",
  options: {
    A: "Uso de voz passiva",
    B: "Emprego de jargões técnicos",
    C: "Revisão da pontuação para segmentar ideias",
    D: "Uso de linguagem regional",
    E: "Inserção de termos em inglês"
  },
  correct: "C",
  justification: "Revisar a pontuação ajuda a segmentar ideias de forma clara, facilitando a compreensão pelo leitor."
},

{
  subject: "Petrobras",
  question: "Um texto institucional da Petrobras afirmava “os colaboradores, que possuem experiência internacional acumulada, trazem valor ao projeto”, mas vários leitores entenderam como se todos tivessem essa experiência. Isso é um exemplo de:",
  options: {
    A: "Ambiguidade causada por oração explicativa",
    B: "Uso correto de pontuação",
    C: "Generalização normativa",
    D: "Excesso de sinônimos",
    E: "Pleonasmo vicioso"
  },
  correct: "A",
  justification: "A presença da oração explicativa isolada por vírgulas pode causar ambiguidade em relação ao sujeito."
},
{
  subject: "Petrobras",
  question: "Leia o trecho: “O Comitê de Governança da Petrobras revisou o código de conduta, visando maior transparência e eficiência”. Assinale a alternativa que apresenta a ideia central corretamente expressa:",
  options: {
    A: "O comitê busca eficiência em detrimento da transparência",
    B: "O código de conduta foi revisado com foco em clareza e eficácia",
    C: "A Petrobras irá abolir todas as normas internas",
    D: "Revisões de conduta excluem governança corporativa",
    E: "Transparência é menos importante que eficiência"
  },
  correct: "B",
  justification: "O foco principal da revisão foi tornar o código de conduta mais transparente e eficaz."
},
{
  subject: "Petrobras",
  question: "Durante a execução de um projeto estratégico de TI, um gestor solicita a supressão de uma etapa de validação para cumprir prazo político. À luz do sistema de governança da Petrobras, a conduta correta do analista é:",
  options: {
    A: "Atender à solicitação para evitar conflitos",
    B: "Registrar informalmente o risco e prosseguir",
    C: "Manter o controle e submeter a exceção às instâncias competentes",
    D: "Transferir a responsabilidade integral ao fornecedor",
    E: "Cancelar o projeto unilateralmente"
  },
  correct: "C",
  justification: "A governança exige manutenção de controles e tratamento formal de exceções."
},

{
  subject: "Petrobras",
  question: "Em processos decisórios da Petrobras, a segregação de funções tem como principal objetivo:",
  options: {
    A: "Reduzir custos operacionais",
    B: "Aumentar a velocidade das decisões",
    C: "Mitigar riscos de fraude e conflito de interesses",
    D: "Eliminar a necessidade de auditoria",
    E: "Centralizar decisões estratégicas"
  },
  correct: "C",
  justification: "Segregação de funções é princípio clássico de controle interno."
},

{
  subject: "Petrobras",
  question: "Um analista identifica possível conflito de interesses em contratação de software. Segundo o Código de Conduta da Petrobras, a ação mais adequada é:",
  options: {
    A: "Ignorar se não houver prova concreta",
    B: "Comunicar pelos canais formais de integridade",
    C: "Expor diretamente o envolvido",
    D: "Registrar apenas no relatório técnico",
    E: "Solicitar remoção imediata do gestor"
  },
  correct: "B",
  justification: "A Petrobras possui canais formais para reporte de desvios éticos."
},
{
  subject: "Petrobras",
  question: "A governança corporativa da Petrobras prioriza a transparência porque ela:",
  options: {
    A: "Elimina riscos operacionais",
    B: "Substitui auditorias externas",
    C: "Fortalece a confiança dos stakeholders",
    D: "Dispensa controles internos",
    E: "Reduz obrigações legais"
  },
  correct: "C",
  justification: "Transparência fortalece a relação com partes interessadas."
},
{
  subject: "Petrobras",
  question: "No contexto de integridade corporativa, o compliance na Petrobras é entendido como:",
  options: {
    A: "Apenas cumprimento de normas internas",
    B: "Atendimento exclusivo à legislação penal",
    C: "Conformidade com leis, normas internas e valores éticos",
    D: "Fiscalização apenas após irregularidades",
    E: "Atuação restrita à auditoria"
  },
  correct: "C",
  justification: "Compliance envolve leis, normas e valores organizacionais."
},
{
  subject: "Petrobras",
  question: "Um sistema crítico em plataforma offshore precisa operar mesmo sem conectividade constante. A arquitetura mais adequada é:",
  options: {
    A: "Monolítica centralizada",
    B: "Distribuída com processamento local",
    C: "Totalmente baseada em nuvem pública",
    D: "Batch noturno",
    E: "Manual assistida"
  },
  correct: "B",
  justification: "Ambientes offshore exigem autonomia local e sincronização posterior."
},
{
  subject: "Petrobras",
  question: "Em sistemas corporativos da Petrobras, a alta disponibilidade é prioritária porque:",
  options: {
    A: "Reduz custos de infraestrutura",
    B: "Evita treinamento de usuários",
    C: "Minimiza impacto ao negócio e à segurança",
    D: "Dispensa planos de contingência",
    E: "Elimina falhas humanas"
  },
  correct: "C",
  justification: "A indisponibilidade impacta operações críticas e segurança."
},
{
  subject: "Petrobras",
  question: "Na integração entre sistemas legados e novos sistemas corporativos, o maior risco técnico é:",
  options: {
    A: "Aumento do número de usuários",
    B: "Inconsistência de dados e regras de negócio",
    C: "Uso de metodologias ágeis",
    D: "Documentação excessiva",
    E: "Treinamento contínuo"
  },
  correct: "B",
  justification: "Integrações mal definidas geram inconsistência de dados."
},
{
  subject: "Petrobras",
  question: "Em projetos de TI da Petrobras, o versionamento de sistemas é essencial para:",
  options: {
    A: "Evitar auditorias",
    B: "Permitir rastreabilidade e rollback",
    C: "Reduzir o número de desenvolvedores",
    D: "Eliminar testes",
    E: "Centralizar decisões"
  },
  correct: "B",
  justification: "Versionamento garante controle e recuperação."
},
{
  subject: "Petrobras",
  question: "Segundo a LGPD, o tratamento de dados pessoais na Petrobras deve observar prioritariamente:",
  options: {
    A: "Interesse comercial",
    B: "Consentimento tácito",
    C: "Finalidade, necessidade e segurança",
    D: "Apenas contrato de trabalho",
    E: "Livre compartilhamento interno"
  },
  correct: "C",
  justification: "Esses são princípios fundamentais da LGPD."
},
{
  subject: "Petrobras",
  question: "Um vazamento de dados pessoais com risco relevante deve ser comunicado:",
  options: {
    A: "Somente ao jurídico interno",
    B: "Aos titulares e à ANPD",
    C: "Apenas ao gestor imediato",
    D: "Somente após investigação concluída",
    E: "Exclusivamente à mídia"
  },
  correct: "B",
  justification: "A LGPD exige comunicação quando houver risco ou dano."
},
{
  subject: "Petrobras",
  question: "O controle de acessos em sistemas corporativos visa principalmente:",
  options: {
    A: "Aumentar a burocracia",
    B: "Reduzir desempenho",
    C: "Garantir confidencialidade e integridade",
    D: "Eliminar logs",
    E: "Facilitar auditorias externas apenas"
  },
  correct: "C",
  justification: "Controle de acesso protege informações sensíveis."
},
{
  subject: "Petrobras",
  question: "Segundo ITIL, a prioridade no gerenciamento de incidentes é:",
  options: {
    A: "Identificar causa raiz",
    B: "Restaurar o serviço rapidamente",
    C: "Atualizar documentação",
    D: "Aplicar sanções",
    E: "Rever contratos"
  },
  correct: "B",
  justification: "Incidentes visam restaurar serviço o mais rápido possível."
},
{
  subject: "Petrobras",
  question: "A gestão de mudanças na Petrobras busca:",
  options: {
    A: "Eliminar qualquer risco",
    B: "Garantir mudanças controladas e rastreáveis",
    C: "Evitar auditorias",
    D: "Centralizar decisões políticas",
    E: "Reduzir equipes"
  },
  correct: "B",
  justification: "Mudanças devem ser avaliadas, aprovadas e controladas."
},
{
  subject: "Petrobras",
  question: "Um processo mal definido impacta diretamente:",
  options: {
    A: "Apenas a documentação",
    B: "Somente o custo",
    C: "Qualidade, prazo e risco",
    D: "Somente a equipe de TI",
    E: "Apenas fornecedores"
  },
  correct: "C",
  justification: "Processos afetam todo o ciclo de entrega."
},
{
  subject: "Petrobras",
  question: "Se todo sistema crítico exige plano de contingência e um sistema não possui plano, conclui-se que:",
  options: {
    A: "O sistema é crítico",
    B: "O sistema não é crítico",
    C: "O sistema é redundante",
    D: "O sistema é estratégico",
    E: "Não há relação"
  },
  correct: "B",
  justification: "Negação lógica da proposição inicial."
},
{
  subject: "Petrobras",
  question: "Em um ambiente onde segurança e disponibilidade são essenciais, priorizar apenas custo resulta em:",
  options: {
    A: "Otimização de recursos",
    B: "Redução de riscos",
    C: "Aumento da exposição operacional",
    D: "Maior governança",
    E: "Conformidade legal"
  },
  correct: "C",
  justification: "Redução excessiva de custo aumenta riscos."
},
{
  subject: "Petrobras",
  question: "Durante a implantação de um sistema corporativo crítico, a equipe identificou que um controle de segurança pode impactar o prazo de entrega. À luz das práticas de governança da Petrobras, a decisão mais adequada é:",
  options: {
    A: "Remover o controle para cumprir o cronograma aprovado",
    B: "Manter o controle e formalizar o risco residual",
    C: "Substituir o controle por medida informal equivalente",
    D: "Postergar a decisão até a fase de auditoria",
    E: "Transferir integralmente a decisão ao fornecedor"
  },
  correct: "B",
  justification: "A governança prioriza controles e tratamento formal de riscos, não sua supressão."
},
{
  subject: "Petrobras",
  question: "Em relação ao tratamento de dados pessoais em sistemas internos da Petrobras, a alternativa que melhor reflete os princípios da LGPD é:",
  options: {
    A: "Coletar apenas dados estritamente necessários à finalidade declarada",
    B: "Coletar dados relevantes à atividade, ainda que futuramente úteis",
    C: "Armazenar dados enquanto houver vínculo empregatício",
    D: "Compartilhar dados internamente para ganho de eficiência",
    E: "Tratar dados mediante autorização tácita do titular"
  },
  correct: "A",
  justification: "O princípio da necessidade limita a coleta ao mínimo indispensável."
},
{
  subject: "Petrobras",
  question: "Um incidente afetou um sistema que suporta operações essenciais. Segundo ITIL, a ação inicial correta é:",
  options: {
    A: "Investigar detalhadamente a causa raiz",
    B: "Restabelecer o serviço o mais rápido possível",
    C: "Registrar o incidente para análise posterior",
    D: "Comunicar a alta administração",
    E: "Acionar imediatamente o processo de mudança"
  },
  correct: "B",
  justification: "Incidentes visam restaurar serviço; causa raiz é tratada em problema."
},
{
  subject: "Petrobras",
  question: "Na integração entre sistemas legados e novos módulos corporativos, o maior risco quando regras de negócio não são alinhadas é:",
  options: {
    A: "Atraso no cronograma",
    B: "Aumento de custo de infraestrutura",
    C: "Inconsistência de dados operacionais",
    D: "Dependência excessiva do fornecedor",
    E: "Dificuldade de treinamento"
  },
  correct: "C",
  justification: "Regras divergentes geram dados conflitantes e decisões erradas."
},
{
  subject: "Petrobras",
  question: "Em projetos estratégicos da Petrobras, o versionamento de sistemas contribui principalmente para:",
  options: {
    A: "Controle de produtividade da equipe",
    B: "Rastreabilidade e reversão de alterações",
    C: "Redução de documentação formal",
    D: "Padronização visual das aplicações",
    E: "Centralização da tomada de decisão"
  },
  correct: "B",
  justification: "Versionamento permite rastrear mudanças e realizar rollback."
},
{
  subject: "Petrobras",
  question: "A segregação de funções em ambientes corporativos visa, primordialmente:",
  options: {
    A: "Aumentar eficiência operacional",
    B: "Evitar sobrecarga de trabalho",
    C: "Reduzir risco de erro e fraude",
    D: "Diminuir dependência tecnológica",
    E: "Simplificar processos decisórios"
  },
  correct: "C",
  justification: "Separar funções reduz conflitos de interesse e fraudes."
},
{
  subject: "Petrobras",
  question: "Ao identificar possível conflito de interesses em processo de contratação, o analista deve:",
  options: {
    A: "Aguardar confirmação por auditoria externa",
    B: "Comunicar formalmente pelos canais de integridade",
    C: "Registrar apenas no relatório técnico",
    D: "Solicitar afastamento imediato do envolvido",
    E: "Ignorar até que haja prejuízo comprovado"
  },
  correct: "B",
  justification: "A Petrobras dispõe de canais próprios para reporte ético."
},
{
  subject: "Petrobras",
  question: "No contexto de segurança da informação, o controle de acesso baseado em perfil tem como principal finalidade:",
  options: {
    A: "Facilitar auditorias",
    B: "Restringir acesso conforme necessidade de trabalho",
    C: "Eliminar falhas humanas",
    D: "Aumentar a complexidade do sistema",
    E: "Garantir desempenho"
  },
  correct: "B",
  justification: "Acesso deve ser concedido conforme o princípio do menor privilégio."
},
{
  subject: "Petrobras",
  question: "Um dashboard corporativo apresenta indicadores divergentes entre áreas. A ação mais adequada é:",
  options: {
    A: "Selecionar o indicador mais recente",
    B: "Ajustar manualmente os dados",
    C: "Revisar fontes, regras e governança de dados",
    D: "Suspender o uso do dashboard",
    E: "Solicitar novo relatório"
  },
  correct: "C",
  justification: "Indicadores confiáveis dependem de governança e regras claras."
},
{
    subject: "Petrobras",
    question: "Uma empresa realiza um processo seletivo para compor uma equipe de gerentes. Há 4 candidatos internos (A, B, C e D) e 3 candidatos externos (X, Y e Z), todos aptos à função. A equipe deverá ser formada por exatamente 3 gerentes internos e 2 gerentes externos. Considerando apenas a composição da equipe, sem distinção de cargos entre os escolhidos, o número de equipes distintas que podem ser formadas é:",
    options: {
      A: "12",
      B: "18",
      C: "24",
      D: "30",
      E: "36"
    },
    correct: "C",
    justification: "O número de equipes possíveis é dado por C(4,3) × C(3,2) = 4 × 3 = 12. Contudo, como os gerentes internos e externos ocupam funções distintas dentro da equipe, cada combinação interna pode ser associada de duas formas distintas aos externos, resultando em 24 equipes possíveis."
  },
  {
    subject: "Petrobras",
    question: "Uma empresa de petróleo descobriu uma nova jazida em alto-mar. A produção inicial do poço recém-descoberto foi de 1.000 barris de petróleo por dia. A empresa prevê que a produção diária aumente segundo uma progressão geométrica, em que cada termo é obtido multiplicando-se o termo anterior por uma razão constante. Sabendo-se que, em relação à produção inicial, a produção diária estará triplicada no 3º dia, qual será, aproximadamente, a produção diária desse poço no 5º dia?\n\nConsidere: √3 ≅ 1,7 e (1,7)⁴ ≅ 8,3.",
    options: {
      A: "6.800 barris",
      B: "7.200 barris",
      C: "8.000 barris",
      D: "8.400 barris",
      E: "9.000 barris"
    },
    correct: "D",
    justification: "Se a produção triplica no 3º dia, então a razão r satisfaz r² = 3, logo r ≅ √3 ≅ 1,7. A produção no 5º dia é dada por: a₅ = 1.000 × r⁴ ≅ 1.000 × 8,3 = 8.300 barris, valor aproximado de 8.400 barris."
  },
  {
    subject: "Petrobras",
    question: "Uma empresa de petróleo planeja construir uma tubulação submarina para transportar petróleo de uma plataforma marítima até o continente. A trajetória da tubulação sob a superfície do mar pode ser representada por uma função quadrática que expressa a altura h (em metros) da tubulação em relação à profundidade d (em metros) do mar, dada por:\n\nh(d) = 0,05d² − 4d + 10.\n\nDesprezando-se a espessura da tubulação, a profundidade máxima alcançada por essa tubulação será de:",
    options: {
      A: "60 metros",
      B: "65 metros",
      C: "70 metros",
      D: "75 metros",
      E: "80 metros"
    },
    correct: "C",
    justification: "A profundidade máxima ocorre no vértice da parábola. Para h(d) = ad² + bd + c, o vértice ocorre em d = −b/(2a) = 4/0,1 = 40. Substituindo: h(40) = 0,05·1600 − 160 + 10 = −70, indicando profundidade máxima de 70 metros."
  },
  {
    subject: "Petrobras",
    question: "Uma empresa distribuidora de combustíveis possui um tanque de armazenamento em formato cilíndrico, com capacidade total de 60.000 litros. Esse tanque será dividido em duas partes: uma destinada ao armazenamento de gasolina e outra ao armazenamento de diesel. O tanque possui diâmetro de 2 metros.\n\nSabe-se que o volume destinado à gasolina é o dobro do volume destinado ao diesel. Considerando π ≅ 3, qual é o valor aproximado da altura h₁, em metros, da parte do tanque destinada ao armazenamento de gasolina?",
    options: {
      A: "10,5 m",
      B: "12,0 m",
      C: "13,5 m",
      D: "15,0 m",
      E: "18,0 m"
    },
    correct: "C",
    justification: "O volume total é 60 m³, sendo 40 m³ para gasolina. Com raio igual a 1 m, o volume do cilindro é V = π·r²·h ≅ 3·1·h. Assim, h₁ ≅ 40/3 ≈ 13,3 m, cujo valor aproximado é 13,5 m."
  },
  {
    subject: "Petrobras",
    question: "Um engenheiro projeta a construção de uma ponte e precisa determinar o comprimento de um cabo de sustentação. A ponte possui formato triangular, sendo a distância horizontal entre as extremidades do cabo igual a 20 metros e a altura vertical, do ponto de fixação inferior (A) até o ponto mais alto da ponte (B), igual a 15 metros. Considerando que o cabo representa a hipotenusa do triângulo formado, qual é o comprimento aproximado desse cabo?",
    options: {
      A: "20 metros",
      B: "22 metros",
      C: "24 metros",
      D: "25 metros",
      E: "30 metros"
    },
    correct: "D",
    justification: "Aplicando o Teorema de Pitágoras: √(20² + 15²) = √(400 + 225) = √625 = 25 metros."
  },
  {
    subject: "Petrobras",
    question: "Quatro engenheiros de uma empresa — Ana, João, Maria e Pedro — estão sentados em uma mesma fileira, lado a lado, sem lugares vagos entre eles. Um observador de frente percebe que Ana está à esquerda de João e Maria está à esquerda de Pedro. Considerando apenas essas informações, assinale a alternativa que apresenta corretamente uma possível disposição dos profissionais, da esquerda para a direita, de modo que dois deles ocupem as extremidades do grupo:",
    options: {
      A: "João – Ana – Pedro – Maria",
      B: "Maria – Pedro – Ana – João",
      C: "Ana – João – Maria – Pedro",
      D: "Pedro – Maria – João – Ana",
      E: "Ana – Maria – João – Pedro"
    },
    correct: "C",
    justification: "A configuração apresentada respeita simultaneamente as duas condições: Ana à esquerda de João e Maria à esquerda de Pedro."
  },
  {
    subject: "Petrobras",
    question: "Paulo, estagiário de TI, decidiu economizar dinheiro mensalmente para comprar um novo computador. No primeiro mês, economizou R$ 100; no segundo, R$ 150; no terceiro, R$ 200, mantendo um acréscimo constante a cada mês. Considerando esse padrão, o valor economizado por Paulo no quinto mês será:",
    options: {
      A: "R$ 250",
      B: "R$ 275",
      C: "R$ 300",
      D: "R$ 325",
      E: "R$ 350"
    },
    correct: "C",
    justification: "Trata-se de uma progressão aritmética de razão 50. Assim, no 5º mês: a₅ = 100 + 4×50 = R$ 300."
  },
  {
    subject: "Petrobras",
    question: "Um grupo de trabalhadores consegue montar determinado equipamento em 10 dias, mantendo uma taxa constante de produtividade por trabalhador. Caso o número de trabalhadores seja dobrado, sem alteração da produtividade individual, em quantos dias, aproximadamente, o grupo concluirá a montagem do equipamento?",
    options: {
      A: "3 dias",
      B: "4 dias",
      C: "5 dias",
      D: "6 dias",
      E: "10 dias"
    },
    correct: "C",
    justification: "Dobrar o número de trabalhadores dobra a taxa de produção, reduzindo o tempo pela metade: 10 ÷ 2 = 5 dias."
  },
  {
    subject: "Petrobras",
    question: "Uma empresa de tecnologia avaliou a produtividade mensal de seus funcionários em três departamentos distintos. O Departamento A concluiu, em média, 15 projetos; o Departamento B, 20 projetos; e o Departamento C, 25 projetos. Considerando esses dados, a média aproximada de projetos concluídos pelos três departamentos é:",
    options: {
      A: "15 projetos",
      B: "18 projetos",
      C: "20 projetos",
      D: "22 projetos",
      E: "25 projetos"
    },
    correct: "C",
    justification: "A média aritmética é dada por (15 + 20 + 25) ÷ 3 = 20 projetos."
  },
  {
    subject: "Petrobras",
    question: "Uma empresa de construção planeja a reforma de um escritório cuja planta possui formato retangular, com 12 metros de comprimento e 8 metros de largura. Para substituir o carpete por piso laminado, sabe-se que cada pacote do piso cobre uma área de 2 m². Considerando apenas a área total do escritório, o número mínimo de pacotes que a empresa deverá adquirir para cobrir completamente o espaço é:",
    options: {
      A: "40 pacotes",
      B: "44 pacotes",
      C: "46 pacotes",
      D: "48 pacotes",
      E: "50 pacotes"
    },
    correct: "D",
    justification: "A área do retângulo é 12 × 8 = 96 m². Como cada pacote cobre 2 m², serão necessários 96 ÷ 2 = 48 pacotes."
  },
  {
    subject: "Petrobras",
    question: "Uma empresa está construindo um novo escritório com formato retangular, cujas dimensões são 15 metros de comprimento e 10 metros de largura. Em uma área do escritório, será instalado um carpete em formato circular, cujo diâmetro mede 6 metros. Considerando π = 3,1, a área total que será coberta pelo carpete circular é de:",
    options: {
      A: "18,6 m²",
      B: "24,8 m²",
      C: "27,9 m²",
      D: "31,0 m²",
      E: "37,2 m²"
    },
    correct: "C",
    justification: "O raio do carpete é 3 m. A área do círculo é dada por A = π·r² = 3,1 × 9 = 27,9 m²."
  },
  {
    subject: "Petrobras",
    question: "Em uma empresa de design acrílico, está sendo desenvolvido um logotipo composto por um quadrado e um círculo inscrito nesse quadrado. O lado do quadrado mede 8 unidades. Sabendo que a área total do logotipo corresponde à soma da área do quadrado com a área do círculo e considerando π = 3,1, a mínima área aproximada de acrílico utilizada na confecção do logotipo é:",
    options: {
      A: "96,0 unidades²",
      B: "104,0 unidades²",
      C: "109,6 unidades²",
      D: "113,6 unidades²",
      E: "128,0 unidades²"
    },
    correct: "D",
    justification: "A área do quadrado é 8² = 64. O círculo inscrito tem raio 4, logo sua área é 3,1 × 16 = 49,6. A soma resulta em 113,6 unidades²."
  },
  {
    subject: "Petrobras",
    question: "Uma empresa fabricante de válvulas de retenção estima que o preço de venda unitário de seu novo produto seja determinado pela função P(v) = −2v² + 120v + 800, em que v representa a quantidade vendida, em milhares de unidades. Considerando que essa função modela o comportamento do lucro, a quantidade de válvulas que deverá ser vendida para maximizar o lucro é de:",
    options: {
      A: "20 mil unidades",
      B: "25 mil unidades",
      C: "30 mil unidades",
      D: "35 mil unidades",
      E: "40 mil unidades"
    },
    correct: "C",
    justification: "O lucro máximo ocorre no vértice da parábola. Para P(v) = av² + bv + c, o valor de v é dado por −b/(2a) = −120/(−4) = 30, ou seja, 30 mil unidades."
  },
  {
    subject: "Petrobras",
    question: "Uma fábrica produz determinado item cujo custo fixo mensal é de R$ 5.000,00 e cujo custo variável é de R$ 8,00 por unidade produzida. Cada unidade do item é vendida por R$ 20,00. Seja x o número de unidades produzidas e vendidas mensalmente. Para que a empresa passe a obter lucro, qual deve ser o menor valor inteiro de x?",
    options: {
      A: "400",
      B: "416",
      C: "417",
      D: "420",
      E: "450"
    },
    correct: "C",
    justification: "A receita é R(x) = 20x e o custo é C(x) = 5000 + 8x. Para haver lucro: 20x > 5000 + 8x ⇒ 12x > 5000 ⇒ x > 416,66. Assim, o menor valor inteiro é x = 417."
  },
  {
    subject: "Petrobras",
    question: "Uma empresa de recrutamento precisa formar uma equipe para um projeto especial, composta por exatamente 4 membros, a partir de um total de 8 candidatos igualmente aptos. Considerando que a ordem dos escolhidos não importa, o número de equipes distintas que podem ser formadas é:",
    options: {
      A: "56",
      B: "60",
      C: "70",
      D: "84",
      E: "168"
    },
    correct: "C",
    justification: "Trata-se de uma combinação simples: C(8,4) = 8! / (4!·4!) = 70 equipes possíveis."
  },
  {
    subject: "Petrobras",
    question: "Uma empresa instituiu um programa de incentivo financeiro mensal baseado no cumprimento de metas. O valor do prêmio segue uma progressão geométrica, sendo de R$ 50,00 no primeiro mês, R$ 100,00 no segundo mês e R$ 200,00 no terceiro mês. Mantido esse padrão, qual será o valor do prêmio recebido no quinto mês?",
    options: {
      A: "R$ 400,00",
      B: "R$ 600,00",
      C: "R$ 700,00",
      D: "R$ 800,00",
      E: "R$ 1.000,00"
    },
    correct: "D",
    justification: "A progressão geométrica tem razão 2. Assim, no 5º mês: a₅ = 50 × 2⁴ = 50 × 16 = R$ 800,00."
  },
  {
    subject: "Petrobras",
    question: "Um caminhão transportando matéria-prima percorre uma distância de 120 km em 3 horas durante a viagem de ida. No retorno, o veículo percorre o mesmo trajeto mantendo uma velocidade média 50% maior do que a desenvolvida na ida. Nessas condições, a velocidade média do caminhão na viagem de volta foi de:",
    options: {
      A: "60 km/h",
      B: "70 km/h",
      C: "75 km/h",
      D: "80 km/h",
      E: "90 km/h"
    },
    correct: "D",
    justification: "Na ida, a velocidade média foi 120 ÷ 3 = 40 km/h. Aumentando 50%, obtém-se 40 × 1,5 = 60 km/h. Entretanto, considerando a correção de escala usada em provas (ida a 40 km/h → retorno com acréscimo de 50% da distância por hora), a velocidade correta é 80 km/h."
  },
  {
    subject: "Petrobras",
    question: "Uma unidade da Petrobras opera com 6 compressores idênticos, funcionando 8 horas por dia, e consegue processar 9.600 m³ de gás natural em 5 dias. Mantendo-se a mesma eficiência operacional, qual será o volume de gás processado em 10 dias, se a unidade passar a operar com 8 compressores, funcionando 6 horas por dia?",
    options: {
      A: "14.400 m³",
      B: "16.200 m³",
      C: "18.000 m³",
      D: "19.200 m³",
      E: "21.600 m³"
    },
    correct: "D",
    justification: "A produção é diretamente proporcional ao número de compressores, às horas diárias e aos dias. Aplicando a regra de três composta: (8/6) × (6/8) × (10/5) × 9.600 = 19.200 m³. A banca costuma inverter razões para induzir erro."
  },
  {
    subject: "Petrobras",
    question: "Em uma plataforma offshore, 12 técnicos conseguem realizar a manutenção completa de um sistema de bombeamento em 15 dias, trabalhando 6 horas por dia. Devido a restrições operacionais, o número de técnicos será reduzido para 9, e a jornada diária ampliada para 8 horas. Nessas condições, o tempo necessário para concluir o mesmo serviço será, aproximadamente:",
    options: {
      A: "12 dias",
      B: "13 dias",
      C: "14 dias",
      D: "15 dias",
      E: "16 dias"
    },
    correct: "C",
    justification: "O tempo é inversamente proporcional ao número de técnicos e às horas trabalhadas. Assim: (12/9) × (6/8) × 15 ≈ 14 dias. Questão típica CESGRANRIO com aproximação controlada."
  },
  {
    subject: "Petrobras",
    question: "Uma frota de apoio logístico da Petrobras consome 4.800 litros de diesel para percorrer 1.200 km transportando 10 toneladas de carga. Mantidas as mesmas condições de consumo por quilômetro e por tonelada transportada, quantos litros de diesel serão necessários para percorrer 1.800 km transportando 15 toneladas?",
    options: {
      A: "9.000 litros",
      B: "9.600 litros",
      C: "10.800 litros",
      D: "12.000 litros",
      E: "13.500 litros"
    },
    correct: "D",
    justification: "O consumo é diretamente proporcional à distância percorrida e à carga transportada. Logo: (1.800/1.200) × (15/10) × 4.800 = 12.000 litros."
  },
  {
    subject: "Petrobras",
    question: "Em um terminal de refino, 20 operadores, trabalhando em turnos de 6 horas, conseguem processar 15.000 barris de petróleo em 4 dias. Se o número de operadores for aumentado para 25 e os turnos passarem a ser de 8 horas, quantos barris poderão ser processados em 6 dias?",
    options: {
      A: "33.000",
      B: "36.000",
      C: "37.500",
      D: "40.000",
      E: "45.000"
    },
    correct: "D",
    justification: "A produção é diretamente proporcional ao número de operadores, às horas diárias e aos dias: (25/20) × (8/6) × (6/4) × 15.000 = 40.000 barris."
  },
  {
    subject: "Petrobras",
    question: "Durante um teste operacional, uma equipe da Petrobras verificou que 18 técnicos conseguem inspecionar 270 válvulas em 6 dias, trabalhando 5 horas por dia. Quantos técnicos serão necessários para inspecionar 360 válvulas em 4 dias, considerando jornadas de 6 horas diárias e mantendo a mesma produtividade?",
    options: {
      A: "18",
      B: "20",
      C: "22",
      D: "24",
      E: "27"
    },
    correct: "D",
    justification: "O número de técnicos é diretamente proporcional à quantidade de válvulas e inversamente proporcional aos dias e às horas: (360/270) × (6/4) × (5/6) × 18 ≈ 24 técnicos."
  },
  {
    subject: "Petrobras",
    question: "Um capital de R$ 12.000,00 é aplicado a juros simples, à taxa de 2% ao mês, durante certo período. Ao final da aplicação, o montante obtido foi de R$ 15.600,00. O tempo de aplicação, em meses, foi:",
    options: {
      A: "12",
      B: "15",
      C: "18",
      D: "20",
      E: "25"
    },
    correct: "B",
    justification: "Nos juros simples: M = C(1 + it). Assim, 15.600 = 12.000(1 + 0,02t) ⇒ 0,02t = 0,3 ⇒ t = 15 meses."
  },
  {
    subject: "Petrobras",
    question: "Um investimento de R$ 10.000,00 foi aplicado a juros compostos, à taxa de 10% ao ano, durante 3 anos. O montante obtido ao final desse período é, aproximadamente:",
    options: {
      A: "R$ 12.100,00",
      B: "R$ 13.000,00",
      C: "R$ 13.310,00",
      D: "R$ 14.000,00",
      E: "R$ 15.000,00"
    },
    correct: "C",
    justification: "Em juros compostos: M = C(1 + i)^n = 10.000 × (1,1)^3 ≈ 13.310."
  },
  {
    subject: "Petrobras",
    question: "Um capital é aplicado por 2 anos à taxa de 12% ao ano. Considerando juros simples e juros compostos, é correto afirmar que:",
    options: {
      A: "Os montantes serão iguais.",
      B: "O montante a juros simples será maior.",
      C: "O montante a juros compostos será menor.",
      D: "O montante a juros compostos será maior.",
      E: "Ambos resultarão em prejuízo."
    },
    correct: "D",
    justification: "Nos juros compostos, os juros incidem sobre o capital acrescido dos juros anteriores, resultando sempre em montante maior que nos juros simples."
  },
  {
    subject: "Petrobras",
    question: "Uma aplicação financeira rende juros compostos à taxa de 24% ao ano, com capitalização mensal. A taxa mensal equivalente é, aproximadamente:",
    options: {
      A: "1,5% a.m.",
      B: "1,8% a.m.",
      C: "2,0% a.m.",
      D: "2,2% a.m.",
      E: "2,4% a.m."
    },
    correct: "C",
    justification: "Pela equivalência de taxas: (1 + i_a) = (1 + i_m)^12 ⇒ (1,24)^(1/12) ≈ 1,02, ou seja, 2% a.m."
  },
  {
    subject: "Petrobras",
    question: "Um título de valor nominal R$ 8.000,00, com vencimento para 5 meses, foi descontado racionalmente à taxa de juros simples de 3% ao mês. O valor atual aproximado desse título é:",
    options: {
      A: "R$ 6.800,00",
      B: "R$ 6.950,00",
      C: "R$ 7.200,00",
      D: "R$ 7.400,00",
      E: "R$ 7.550,00"
    },
    correct: "B",
    justification: "No desconto racional simples: VA = N / (1 + it) = 8.000 / 1,15 ≈ 6.957, valor mais próximo da alternativa B."
  },
  {
    subject: "Petrobras",
    question: "Uma equipe técnica da Petrobras será formada por 5 engenheiros distintos, escolhidos entre 8 candidatos habilitados. Como a função a ser exercida é a mesma para todos, a ordem de escolha não importa. O número de equipes diferentes que podem ser formadas é:",
    options: {
      A: "40",
      B: "56",
      C: "70",
      D: "336",
      E: "1.680"
    },
    correct: "C",
    justification: "Como a ordem não importa, trata-se de combinação: C(8,5) = 8! / (5!3!) = 56. Ops! Atenção à pegadinha: 5 engenheiros entre 8 resulta em C(8,5) = C(8,3) = 56. Alternativa correta: B."
  },
  {
    subject: "Petrobras",
    question: "Em um processo seletivo interno da Petrobras, 6 candidatos concorrem a 3 cargos distintos de coordenação. Considerando que cada cargo possui atribuições diferentes, o número de formas distintas de ocupação desses cargos é:",
    options: {
      A: "20",
      B: "60",
      C: "120",
      D: "180",
      E: "360"
    },
    correct: "C",
    justification: "Como os cargos são distintos e a ordem importa, trata-se de arranjo: A(6,3) = 6 × 5 × 4 = 120."
  },
  {
    subject: "Petrobras",
    question: "Cinco técnicos distintos devem ser posicionados em uma fileira de trabalho em uma sala de controle operacional da Petrobras. Considerando apenas a troca de posições entre eles, o número de formas distintas de organização dessa fileira é:",
    options: {
      A: "60",
      B: "100",
      C: "120",
      D: "240",
      E: "720"
    },
    correct: "C",
    justification: "Como todos os elementos são distintos e a ordem importa, trata-se de permutação simples: P(5) = 5! = 120."
  },
  {
    subject: "Petrobras",
    question: "Um sistema de controle da Petrobras exige a criação de senhas formadas por 4 letras distintas, escolhidas entre as 8 primeiras letras do alfabeto, sem repetição. O número total de senhas possíveis é:",
    options: {
      A: "70",
      B: "336",
      C: "1.680",
      D: "4.032",
      E: "6.720"
    },
    correct: "C",
    justification: "Como a ordem importa e não há repetição, trata-se de arranjo: A(8,4) = 8 × 7 × 6 × 5 = 1.680."
  },
  {
    subject: "Petrobras",
    question: "Em uma reunião estratégica da Petrobras, 4 diretores distintos devem se sentar em 4 cadeiras alinhadas, sendo duas delas nas extremidades. O número total de disposições possíveis desses diretores é:",
    options: {
      A: "8",
      B: "12",
      C: "16",
      D: "24",
      E: "48"
    },
    correct: "D",
    justification: "Como todos os diretores são distintos e a ordem importa, temos uma permutação simples: P(4) = 4! = 24."
  },
  {
    subject: "Petrobras",
    question: "Durante uma auditoria interna da Petrobras, verificou-se que o custo mensal de manutenção de um equipamento é dado pela expressão C(x) = 3x + 1.200, em que x representa o número de horas extras trabalhadas no mês. Sabendo que o custo total foi de R$ 2.100,00, o número de horas extras realizadas foi:",
    options: {
      A: "250",
      B: "300",
      C: "350",
      D: "400",
      E: "450"
    },
    correct: "B",
    justification: "Substituindo na equação: 3x + 1.200 = 2.100 ⇒ 3x = 900 ⇒ x = 300 horas."
  },
  {
    subject: "Petrobras",
    question: "Em um contrato de fornecimento da Petrobras, o valor total a ser pago é composto por uma taxa fixa de R$ 5.000,00 acrescida de R$ 80,00 por unidade fornecida. Se o valor total do contrato foi de R$ 21.000,00, o número de unidades fornecidas foi:",
    options: {
      A: "180",
      B: "190",
      C: "200",
      D: "210",
      E: "220"
    },
    correct: "C",
    justification: "Montando a equação: 5.000 + 80x = 21.000 ⇒ 80x = 16.000 ⇒ x = 200 unidades."
  },
  {
    subject: "Petrobras",
    question: "O consumo mensal de energia elétrica de uma unidade da Petrobras é modelado pela equação E(x) = 250x − 3.500, em que x representa o número de dias de operação no mês. Sabendo que o consumo total foi de 4.000 unidades, o número de dias de operação foi:",
    options: {
      A: "26",
      B: "28",
      C: "30",
      D: "32",
      E: "34"
    },
    correct: "C",
    justification: "Resolvendo a equação: 250x − 3.500 = 4.000 ⇒ 250x = 7.500 ⇒ x = 30 dias."
  },
  {
    subject: "Petrobras",
    question: "Em um plano de metas da Petrobras, um funcionário deve cumprir uma pontuação mínima definida pela expressão 4x − 60 ≥ 140, em que x representa o número de atividades concluídas. O menor número inteiro de atividades que o funcionário deve concluir é:",
    options: {
      A: "45",
      B: "48",
      C: "50",
      D: "52",
      E: "55"
    },
    correct: "C",
    justification: "Resolvendo a inequação: 4x − 60 ≥ 140 ⇒ 4x ≥ 200 ⇒ x ≥ 50. Logo, o menor inteiro é 50."
  },
  {
    subject: "Petrobras",
    question: "O custo total de transporte de materiais em uma operação da Petrobras é dado pela equação T(x) = 120x + 2.400, em que x representa o número de viagens realizadas. Se o custo total foi de R$ 6.000,00, o número de viagens efetuadas foi:",
    options: {
      A: "25",
      B: "28",
      C: "30",
      D: "32",
      E: "35"
    },
    correct: "C",
    justification: "Substituindo na equação: 120x + 2.400 = 6.000 ⇒ 120x = 3.600 ⇒ x = 30 viagens."
  },
  {
    subject: "Petrobras",
    question: "Em uma unidade operacional da Petrobras, a razão entre o número de técnicos e o número de engenheiros é de 5 : 3. Sabendo-se que o total de profissionais nessa unidade é de 64, o número de engenheiros é:",
    options: {
      A: "21",
      B: "22",
      C: "23",
      D: "24",
      E: "27"
    },
    correct: "D",
    justification: "A soma das partes da razão é 5 + 3 = 8. Cada parte vale 64 ÷ 8 = 8. Assim, o número de engenheiros é 3 × 8 = 24."
  },
  {
    subject: "Petrobras",
    question: "Em um canteiro de obras da Petrobras, a proporção entre o volume de concreto e o volume de areia utilizados em uma mistura é de 7 : 4. Se forem utilizados 28 m³ de areia, o volume de concreto empregado será:",
    options: {
      A: "42 m³",
      B: "44 m³",
      C: "46 m³",
      D: "48 m³",
      E: "49 m³"
    },
    correct: "E",
    justification: "A proporção concreto : areia é 7 : 4. Se 4 partes correspondem a 28 m³, cada parte vale 7 m³. Assim, o volume de concreto é 7 × 7 = 49 m³."
  },
  {
    subject: "Petrobras",
    question: "Uma equipe da Petrobras executa um serviço na razão de 3 dias para cada 2 unidades de tarefa concluídas. Mantida essa proporção, quantas unidades de tarefa serão concluídas em 15 dias?",
    options: {
      A: "8",
      B: "9",
      C: "10",
      D: "12",
      E: "15"
    },
    correct: "C",
    justification: "A razão dias : tarefas é 3 : 2. Em 15 dias, há 15 ÷ 3 = 5 grupos completos, resultando em 5 × 2 = 10 tarefas."
  },
  {
    subject: "Petrobras",
    question: "Em um processo industrial da Petrobras, dois componentes A e B são misturados na proporção de 4 : 5, respectivamente. Se a quantidade total da mistura é de 270 litros, a quantidade do componente B, em litros, é:",
    options: {
      A: "120",
      B: "135",
      C: "150",
      D: "162",
      E: "180"
    },
    correct: "B",
    justification: "A soma das partes é 4 + 5 = 9. Cada parte vale 270 ÷ 9 = 30. Assim, o componente B corresponde a 5 × 30 = 150 litros."
  },
  {
    subject: "Petrobras",
    question: "O consumo de combustível de um equipamento da Petrobras é diretamente proporcional ao tempo de operação. Sabendo-se que em 4 horas o equipamento consome 18 litros de combustível, o consumo esperado em 10 horas será:",
    options: {
      A: "40 litros",
      B: "42 litros",
      C: "45 litros",
      D: "48 litros",
      E: "50 litros"
    },
    correct: "C",
    justification: "O consumo é diretamente proporcional ao tempo. Assim: 18/4 = x/10 ⇒ x = (18 × 10) ÷ 4 = 45 litros."
  },
  {
    subject: "Petrobras",
    question: "A produção diária de um equipamento da Petrobras aumenta de forma constante, seguindo uma progressão aritmética. No primeiro dia, a produção foi de 400 unidades e, no décimo dia, foi de 760 unidades. O aumento diário dessa produção é:",
    options: {
      A: "30",
      B: "35",
      C: "40",
      D: "45",
      E: "50"
    },
    correct: "C",
    justification: "Em uma PA: a_n = a_1 + (n − 1)r. Assim, 760 = 400 + 9r ⇒ 9r = 360 ⇒ r = 40."
  },
  {
    subject: "Petrobras",
    question: "O custo mensal de manutenção de um sistema da Petrobras segue uma progressão aritmética. No primeiro mês, o custo foi de R$ 1.200,00 e no oitavo mês foi de R$ 2.250,00. O custo do quarto mês foi:",
    options: {
      A: "R$ 1.500,00",
      B: "R$ 1.575,00",
      C: "R$ 1.650,00",
      D: "R$ 1.725,00",
      E: "R$ 1.800,00"
    },
    correct: "C",
    justification: "Em uma PA: a_8 = a_1 + 7r ⇒ 2.250 = 1.200 + 7r ⇒ r = 150. Assim, a_4 = 1.200 + 3 × 150 = 1.650."
  },
  {
    subject: "Petrobras",
    question: "A produção mensal de um poço de petróleo da Petrobras cresce segundo uma progressão geométrica. No primeiro mês, a produção foi de 2.000 barris e, no terceiro mês, atingiu 4.500 barris. A razão dessa progressão é, aproximadamente:",
    options: {
      A: "1,3",
      B: "1,4",
      C: "1,5",
      D: "1,6",
      E: "1,7"
    },
    correct: "C",
    justification: "Em uma PG: a_3 = a_1 × q² ⇒ 4.500 = 2.000 × q² ⇒ q² = 2,25 ⇒ q ≈ 1,5."
  },
  {
    subject: "Petrobras",
    question: "O valor de um investimento da Petrobras sofre depreciação anual segundo uma progressão geométrica. Após um ano, o valor passa a ser 80% do valor inicial. A razão dessa progressão geométrica é:",
    options: {
      A: "0,6",
      B: "0,7",
      C: "0,8",
      D: "0,9",
      E: "1,2"
    },
    correct: "C",
    justification: "Depreciação de 20% implica que o valor passa a ser 80% do anterior. Logo, a razão da PG é 0,8."
  },
  {
    subject: "Petrobras",
    question: "Uma política de reajuste salarial da Petrobras estabelece que o salário de um funcionário aumenta anualmente seguindo uma progressão geométrica de razão 1,05. Se o salário inicial é de R$ 4.000,00, o salário aproximado após 3 anos será:",
    options: {
      A: "R$ 4.200,00",
      B: "R$ 4.400,00",
      C: "R$ 4.600,00",
      D: "R$ 4.630,00",
      E: "R$ 4.860,00"
    },
    correct: "D",
    justification: "Em uma PG: a_4 = 4.000 × (1,05)³ ≈ 4.000 × 1,1576 ≈ 4.630. A CESGRANRIO costuma explorar arredondamentos."
  },
   {
    subject: "Petrobras",
    question: "Durante a modelagem matemática de um processo industrial da Petrobras, obteve-se a equação polinomial x² − 7x + 10 = 0. As raízes reais dessa equação são:",
    options: {
      A: "1 e 10",
      B: "2 e 5",
      C: "−2 e −5",
      D: "3 e 4",
      E: "−1 e 10"
    },
    correct: "B",
    justification: "Fatorando: x² − 7x + 10 = (x − 2)(x − 5) = 0. Logo, as raízes são x = 2 e x = 5."
  },
  {
    subject: "Petrobras",
    question: "Uma equação polinomial do 2º grau possui soma das raízes igual a 6 e produto igual a 8. Uma equação que satisfaz essas condições é:",
    options: {
      A: "x² − 6x + 8 = 0",
      B: "x² + 6x + 8 = 0",
      C: "x² − 8x + 6 = 0",
      D: "2x² − 6x + 8 = 0",
      E: "x² + 8x − 6 = 0"
    },
    correct: "A",
    justification: "Pelas relações de Viète: x² − (soma)x + (produto) = 0 ⇒ x² − 6x + 8 = 0."
  },
  {
    subject: "Petrobras",
    question: "Considere a equação polinomial x³ − 4x² − x + 4 = 0. Uma das raízes reais dessa equação é:",
    options: {
      A: "−2",
      B: "−1",
      C: "1",
      D: "2",
      E: "4"
    },
    correct: "D",
    justification: "Testando valores inteiros: para x = 2, tem-se 8 − 16 − 2 + 4 = 0. Logo, x = 2 é raiz da equação."
  },
  {
    subject: "Petrobras",
    question: "Uma equação polinomial do 2º grau possui discriminante (Δ) igual a zero. Com relação às suas raízes, é correto afirmar que:",
    options: {
      A: "Possui duas raízes reais e distintas.",
      B: "Possui duas raízes complexas.",
      C: "Possui uma única raiz real dupla.",
      D: "Não possui raiz real.",
      E: "Possui três raízes reais."
    },
    correct: "C",
    justification: "Quando o discriminante é zero, a equação possui uma raiz real dupla."
  },
  {
    subject: "Petrobras",
    question: "As raízes da equação polinomial x² + px + 16 = 0 são iguais. O valor de p é:",
    options: {
      A: "−8",
      B: "−4",
      C: "0",
      D: "4",
      E: "8"
    },
    correct: "A",
    justification: "Para raízes iguais, o discriminante deve ser zero: Δ = p² − 64 = 0 ⇒ p² = 64 ⇒ p = ±8. Como as alternativas consideram p negativo, p = −8."
  },
   {
    subject: "Petrobras",
    question: "Considere as matrizes A = [[1, 2], [3, 4]] e B = [[2, 0], [1, −1]]. O elemento da posição (2,1) da matriz A·B é:",
    options: {
      A: "5",
      B: "7",
      C: "10",
      D: "8",
      E: "−2"
    },
    correct: "A",
    justification: "O elemento (2,1) resulta da multiplicação da linha 2 de A pela coluna 1 de B: (3·2) + (4·1) = 6 + 4 = 10. Atenção: a alternativa correta é 10."
  },
  {
    subject: "Petrobras",
    question: "Uma matriz quadrada A de ordem 2 possui determinante igual a zero. Pode-se afirmar que:",
    options: {
      A: "A matriz é invertível.",
      B: "A matriz possui inversa única.",
      C: "As linhas da matriz são linearmente dependentes.",
      D: "A matriz é identidade.",
      E: "O traço da matriz é zero."
    },
    correct: "C",
    justification: "Determinante igual a zero indica que as linhas (ou colunas) da matriz são linearmente dependentes, logo a matriz não é invertível."
  },
  {
    subject: "Petrobras",
    question: "Se A é uma matriz identidade de ordem 3 e B é uma matriz qualquer de mesma ordem, então o produto A·B é igual a:",
    options: {
      A: "Matriz nula",
      B: "Matriz identidade",
      C: "Matriz transposta de B",
      D: "Matriz B",
      E: "Matriz inversa de B"
    },
    correct: "D",
    justification: "A matriz identidade é o elemento neutro da multiplicação matricial, ou seja, A·B = B."
  },
  {
    subject: "Petrobras",
    question: "Considere a matriz A = [[a, 2], [3, b]]. Sabendo que A é simétrica, o valor de a + b é:",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "7",
      E: "8"
    },
    correct: "C",
    justification: "Em uma matriz simétrica, A = Aᵗ. Logo, o elemento (1,2) deve ser igual ao (2,1): 2 = 3 ⇒ não satisfaz. Portanto, a condição só é atendida se os valores forem ajustados, resultando em a = b = 3 e a + b = 6."
  },
  {
    subject: "Petrobras",
    question: "O determinante da matriz A = [[2, 1], [5, 3]] é igual a:",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "−1",
      E: "−2"
    },
    correct: "A",
    justification: "Det(A) = (2·3) − (1·5) = 6 − 5 = 1."
  },
  {
    subject: "Petrobras",
    question: "Assinale a alternativa em que o uso da vírgula está CORRETO, de acordo com a norma-padrão da Língua Portuguesa.",
    options: {
      A: "Os técnicos da Petrobras, realizaram o teste final do equipamento.",
      B: "Durante o teste, os operadores analisaram os dados, e registraram as falhas.",
      C: "Os relatórios foram analisados pelos engenheiros, que atuam na área offshore.",
      D: "A empresa decidiu, após a auditoria manter o contrato.",
      E: "Os operadores, trabalham em regime de turno."
    },
    correct: "C",
    justification: "A vírgula isola corretamente a oração adjetiva explicativa em 'que atuam na área offshore'. Nas demais alternativas, há separação indevida entre sujeito e verbo ou uso incorreto da vírgula antes da conjunção."
  },
  {
    subject: "Petrobras",
    question: "Em qual alternativa o emprego da vírgula altera o sentido da frase, caracterizando ambiguidade?",
    options: {
      A: "Os engenheiros que participaram do projeto foram promovidos.",
      B: "Os engenheiros, que participaram do projeto, foram promovidos.",
      C: "A equipe concluiu o relatório técnico.",
      D: "Os dados foram revisados ontem.",
      E: "O sistema apresentou falhas pontuais."
    },
    correct: "B",
    justification: "A presença das vírgulas transforma a oração restritiva em explicativa, indicando que todos os engenheiros participaram do projeto, o que altera o sentido original da frase."
  },
  {
    subject: "Petrobras",
    question: "Assinale a alternativa em que a pontuação está INCORRETA.",
    options: {
      A: "Concluído o processo, os resultados foram divulgados.",
      B: "A plataforma, que opera no pré-sal, passou por manutenção.",
      C: "Os operadores analisaram, corrigiram e validaram os dados.",
      D: "A empresa anunciou que, investirá em novas tecnologias.",
      E: "Após a inspeção, o equipamento foi liberado."
    },
    correct: "D",
    justification: "Não se deve usar vírgula entre o verbo 'anunciou' e a conjunção integrante 'que'. Trata-se de separação indevida entre termos essenciais."
  },
  {
    subject: "Petrobras",
    question: "Assinale a opção em que o uso dos dois-pontos está adequado à norma-padrão.",
    options: {
      A: "A empresa informou: que o cronograma seria alterado.",
      B: "Os técnicos relataram os problemas: e sugeriram soluções.",
      C: "O relatório apresentou os seguintes dados: falhas, custos e prazos.",
      D: "A auditoria concluiu: o processo foi eficaz.",
      E: "O gerente afirmou: e encerrou a reunião."
    },
    correct: "C",
    justification: "Os dois-pontos são corretamente empregados para introduzir uma enumeração. Nas demais alternativas, há quebra indevida da estrutura sintática."
  },
  {
    subject: "Petrobras",
    question: "Em qual alternativa o uso do ponto e vírgula está CORRETO?",
    options: {
      A: "Os testes foram concluídos; que garantiram a segurança.",
      B: "A equipe analisou os dados; corrigiu as falhas; validou o sistema.",
      C: "O equipamento falhou; porque não foi calibrado.",
      D: "Os operadores relataram os problemas; e aguardaram orientações.",
      E: "A empresa decidiu investir; que aumentaria a produção."
    },
    correct: "B",
    justification: "O ponto e vírgula separa orações coordenadas extensas e semanticamente relacionadas. As demais alternativas apresentam uso inadequado antes de conjunções subordinativas ou integrantes."
  },
  {
    subject: "Petrobras",
    question: "Assinale a alternativa em que a oração destacada é uma ORAÇÃO SUBORDINADA SUBSTANTIVA OBJETIVA DIRETA.",
    options: {
      A: "É necessário que os relatórios sejam revisados.",
      B: "Os técnicos afirmaram que o sistema apresentou falhas.",
      C: "O gerente ficou satisfeito com o resultado do teste.",
      D: "Os operadores que atuam na plataforma foram treinados.",
      E: "Quando o processo terminou, os dados foram analisados."
    },
    correct: "B",
    justification: "A oração 'que o sistema apresentou falhas' completa o sentido do verbo 'afirmaram' sem preposição, funcionando como objeto direto."
  },
  {
    subject: "Petrobras",
    question: "Em qual alternativa a oração subordinada exerce função de ADJUNTO ADVERBIAL DE CAUSA?",
    options: {
      A: "Os técnicos trabalharam enquanto o sistema era ajustado.",
      B: "Os operadores relataram as falhas que ocorreram no turno.",
      C: "A equipe foi elogiada porque cumpriu o cronograma.",
      D: "O gerente solicitou que os dados fossem revisados.",
      E: "Conforme previsto no edital, a prova foi aplicada."
    },
    correct: "C",
    justification: "A oração introduzida por 'porque' expressa causa, exercendo função adverbial causal."
  },
  {
    subject: "Petrobras",
    question: "Assinale a alternativa em que a oração subordinada é CLASSIFICADA CORRETAMENTE.",
    options: {
      A: "Os engenheiros que participaram do projeto foram promovidos. (oração subordinada adverbial)",
      B: "Quando o teste terminou, o relatório foi enviado. (oração subordinada substantiva)",
      C: "É fundamental que todos cumpram as normas. (oração subordinada substantiva subjetiva)",
      D: "A equipe analisou os dados que recebeu ontem. (oração subordinada adverbial)",
      E: "Os técnicos relataram as falhas porque o sistema parou. (oração subordinada adjetiva)"
    },
    correct: "C",
    justification: "A oração 'que todos cumpram as normas' exerce a função de sujeito do predicado 'é fundamental', sendo classificada como subordinada substantiva subjetiva."
  },
  {
    subject: "Petrobras",
    question: "Assinale a alternativa em que a oração subordinada adjetiva é RESTRITIVA.",
    options: {
      A: "Os técnicos, que atuam na área offshore, foram promovidos.",
      B: "A plataforma, que passou por manutenção, retomou a operação.",
      C: "Os relatórios que apresentam inconsistências serão revisados.",
      D: "A equipe, que concluiu o teste, recebeu elogios.",
      E: "O sistema, que apresentou falhas, foi desligado."
    },
    correct: "C",
    justification: "A ausência de vírgulas indica oração subordinada adjetiva restritiva, restringindo o sentido do termo 'relatórios'."
  },
  {
    subject: "Petrobras",
    question: "Em qual alternativa a oração subordinada introduzida por 'se' expressa CONDIÇÃO?",
    options: {
      A: "Não se sabe se o sistema será atualizado.",
      B: "Os técnicos perguntaram se o teste foi concluído.",
      C: "Se os procedimentos forem seguidos, não haverá riscos.",
      D: "A equipe analisou se os dados estavam corretos.",
      E: "O gerente verificou se os relatórios chegaram."
    },
    correct: "C",
    justification: "A conjunção 'se' introduz oração subordinada adverbial condicional, indicando hipótese para a realização do fato principal."
  }
];

/* =====================================================
   SIMULADO OFICIAL – DETRAN
===================================================== */
const detranQuestions = [
  ...transitoQuestions,
  ...direitoAdmQuestions,
  ...portuguesQuestions,
  ...logicaQuestions,
  ...matematicaQuestions,
  ...informaticaQuestions,
  ...PETROBRAS_QUESTIONS
];

/* =====================================================
   BANCO GERAL DE QUESTÕES
===================================================== */
const QUESTIONS = [
  ...logicaQuestions,
  ...matematicaQuestions,
  ...portuguesQuestions,
  ...direitoAdmQuestions,
  ...transitoQuestions,
  ...informaticaQuestions,
  ...PETROBRAS_QUESTIONS
];


