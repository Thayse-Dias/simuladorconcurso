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
    question: {
      text: "A eficiência no serviço público depende não apenas de recursos materiais, mas sobretudo do comprometimento humano.",
      itens: "A ideia central do texto é que:",
    },
    options: {
      A: "Recursos materiais são suficientes para a eficiência.",
      B: "O comprometimento humano é irrelevante.",
      C: "A eficiência depende exclusivamente do servidor.",
      D: "O fator humano tem papel central na eficiência.",
      E: "O serviço público é ineficiente por natureza."
    },
    correct: "D",
    justification: "O advérbio “sobretudo” indica destaque principal ao comprometimento humano, sem excluir outros fatores."

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
    question: {
      text: "A leitura crítica permite ao cidadão interpretar informações com maior autonomia.",
      itens: "O termo “crítica” tem sentido de:",
    },
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
    question: {
      text: "A leitura crítica permite ao cidadão interpretar informações com maior autonomia.",
      itens: "A palavra “autonomia” indica:",
    },
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
  ...informaticaQuestions
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
  ...informaticaQuestions
];


