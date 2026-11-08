/* ==========================================================
   DADOS DO SITE – edite aqui para atualizar conteúdo.
   ATENÇÃO: endereços/horários/telefones locais marcados com
   "confirmar" devem ser verificados antes da publicação.
   ========================================================== */

window.CATEGORIAS = {
  juridico: "Jurídico",
  saude: "Saúde",
  assistencia: "Assistência",
  acolhimento: "Acolhimento",
  seguranca: "Segurança",
  educacao: "Educação"
};

window.SERVICOS = [
  {
    nome: "Ligue 180 – Central de Atendimento à Mulher",
    categoria: "assistencia",
    descricao: "Canal nacional, gratuito e sigiloso, para orientar, acolher e encaminhar mulheres em situação de violência.",
    publico: "Todas as mulheres",
    endereco: "Atendimento por telefone e WhatsApp",
    horario: "24 horas, todos os dias",
    contato: "180",
    link: "tel:180",
    mais: "Também recebe denúncias e pode acionar a polícia quando há risco imediato."
  },
  {
    nome: "190 – Brigada Militar / Emergência",
    categoria: "seguranca",
    descricao: "Acione em caso de perigo imediato, agressão em andamento ou ameaça grave.",
    publico: "Qualquer pessoa em situação de emergência",
    endereco: "Atendimento por telefone",
    horario: "24 horas",
    contato: "190",
    link: "tel:190",
    mais: "Fale seu endereço e o que está acontecendo. Se não puder falar, o silêncio também pode ser uma forma de pedir ajuda."
  },
  {
    nome: "Delegacia de Polícia para a Mulher (DEAM)",
    categoria: "seguranca",
    descricao: "Registro de ocorrência, pedido de medidas protetivas de urgência e investigação dos crimes de violência doméstica.",
    publico: "Mulheres em situação de violência",
    endereco: "Caxias do Sul – confirmar endereço atualizado",
    horario: "Confirmar horário (plantão para casos urgentes)",
    contato: "Confirmar telefone",
    link: "#",
    mais: "A medida protetiva pode ser solicitada na delegacia, sem necessidade de advogado."
  },
  {
    nome: "Defensoria Pública do Estado – Caxias do Sul",
    categoria: "juridico",
    descricao: "Orientação jurídica gratuita e acompanhamento de processos: medidas protetivas, guarda, pensão alimentícia, divórcio.",
    publico: "Pessoas que não podem pagar advogado",
    endereco: "Caxias do Sul – confirmar endereço atualizado",
    horario: "Confirmar horário de atendimento",
    contato: "Confirmar telefone",
    link: "#",
    mais: "Leve documentos pessoais e, se houver, boletim de ocorrência e comprovantes."
  },
  {
    nome: "Núcleo de Prática Jurídica – UCS",
    categoria: "educacao",
    descricao: "Atendimento jurídico gratuito prestado por estudantes de Direito, com supervisão de professores.",
    publico: "Pessoas de baixa renda",
    endereco: "Universidade de Caxias do Sul – confirmar bloco/sala",
    horario: "Confirmar horário",
    contato: "Confirmar telefone",
    link: "#",
    mais: "Projeto de extensão que também origina as pesquisas da biblioteca deste site."
  },
  {
    nome: "CREAS – Centro de Referência Especializado de Assistência Social",
    categoria: "assistencia",
    descricao: "Acompanhamento psicossocial de famílias e indivíduos em situação de violência ou violação de direitos.",
    publico: "Mulheres, crianças, idosos e famílias",
    endereco: "Caxias do Sul – confirmar unidade mais próxima",
    horario: "Segunda a sexta (confirmar horário)",
    contato: "Confirmar telefone",
    link: "#",
    mais: "Procure também o CRAS do seu bairro para encaminhamentos e benefícios."
  },
  {
    nome: "Unidades de Saúde e Hospitais (SUS)",
    categoria: "saude",
    descricao: "Atendimento médico e psicológico, profilaxia pós-violência sexual, notificação e acolhimento em saúde mental.",
    publico: "Todas as pessoas",
    endereco: "UBS do seu bairro ou pronto atendimento",
    horario: "UBS em horário comercial; urgência 24 horas",
    contato: "192 (SAMU)",
    link: "tel:192",
    mais: "Em caso de violência sexual, busque atendimento o quanto antes (até 72 horas para algumas medidas)."
  },
  {
    nome: "Casa de Acolhimento (endereço sigiloso)",
    categoria: "acolhimento",
    descricao: "Abrigo temporário e seguro para mulheres, e seus filhos, em risco de vida.",
    publico: "Mulheres em risco, com ou sem filhos",
    endereco: "Sigiloso – acesso por encaminhamento da rede",
    horario: "24 horas",
    contato: "Via CREAS, DEAM ou 180",
    link: "tel:180",
    mais: "O acesso é feito por encaminhamento da rede de proteção para garantir a segurança das acolhidas."
  },
  {
    nome: "Patrulha Maria da Penha",
    categoria: "seguranca",
    descricao: "Acompanhamento policial preventivo de mulheres com medida protetiva de urgência.",
    publico: "Mulheres com medida protetiva",
    endereco: "Atendimento por viatura / Brigada Militar",
    horario: "Confirmar",
    contato: "190",
    link: "tel:190",
    mais: "Confirme com a Brigada Militar de Caxias do Sul como ser incluída."
  },
  {
    nome: "Escolas e projetos de prevenção",
    categoria: "educacao",
    descricao: "Palestras, rodas de conversa e formação sobre violência de gênero e relações respeitosas.",
    publico: "Estudantes, educadores e comunidade",
    endereco: "Escolas e universidades do município",
    horario: "Conforme agenda",
    contato: "Confirmar",
    link: "#",
    mais: "Informe-se com a Secretaria Municipal de Educação."
  }
];

window.PESQUISAS = [
  { titulo: "Medidas protetivas de urgência: eficácia e desafios (EXEMPLO)", autor: "Estudante de Direito – UCS", ano: 2025, area: "Direito Penal", resumo: "Texto de exemplo. Substitua pelos dados reais da pesquisa.", arquivo: "#" },
  { titulo: "Violência patrimonial e o direito das famílias (EXEMPLO)", autor: "Estudante de Direito – UCS", ano: 2025, area: "Direito Civil", resumo: "Texto de exemplo. Substitua pelos dados reais da pesquisa.", arquivo: "#" },
  { titulo: "Lei Maria da Penha: evolução jurisprudencial (EXEMPLO)", autor: "Estudante de Direito – UCS", ano: 2024, area: "Direito Constitucional", resumo: "Texto de exemplo. Substitua pelos dados reais da pesquisa.", arquivo: "#" },
  { titulo: "Feminicídio e política criminal (EXEMPLO)", autor: "Estudante de Direito – UCS", ano: 2024, area: "Direito Penal", resumo: "Texto de exemplo. Substitua pelos dados reais da pesquisa.", arquivo: "#" },
  { titulo: "Guarda, alienação e violência doméstica (EXEMPLO)", autor: "Estudante de Direito – UCS", ano: 2023, area: "Direito Civil", resumo: "Texto de exemplo. Substitua pelos dados reais da pesquisa.", arquivo: "#" },
  { titulo: "Acesso à justiça para mulheres em Caxias do Sul (EXEMPLO)", autor: "Estudante de Direito – UCS", ano: 2023, area: "Direitos Humanos", resumo: "Texto de exemplo. Substitua pelos dados reais da pesquisa.", arquivo: "#" }
];

window.FAQ = {
  violencia: { titulo: "Violência", itens: [
    ["O que é violência doméstica?", "É qualquer ação ou omissão baseada no gênero que cause morte, lesão, sofrimento físico, sexual ou psicológico e dano moral ou patrimonial, no âmbito da família, da unidade doméstica ou de qualquer relação íntima de afeto (Lei Maria da Penha, Lei 11.340/2006)."],
    ["Só existe violência quando há agressão física?", "Não. A violência psicológica, sexual, patrimonial e moral também são crimes e causam danos graves, mesmo sem marcas visíveis."],
    ["Posso denunciar sem provas?", "Sim. Sua palavra tem grande valor. Mensagens, áudios, fotos e testemunhas ajudam, mas não são obrigatórios para registrar a ocorrência."]
  ]},
  filhos: { titulo: "Filhos", itens: [
    ["Os filhos também são afetados?", "Sim. Crianças que presenciam violência sofrem impactos emocionais e de desenvolvimento, mesmo quando não são agredidas diretamente."],
    ["Posso sair de casa com meus filhos?", "Em situação de risco, a proteção da sua vida e a de seus filhos é prioridade. A rede de proteção pode orientar e encaminhar para acolhimento. Procure a DEAM, o CREAS ou ligue 180."],
    ["Quem fica com a guarda?", "A guarda é decidida pela Justiça considerando o melhor interesse da criança. Histórico de violência é considerado. Procure a Defensoria Pública ou um advogado."]
  ]},
  separacao: { titulo: "Separação / Divórcio", itens: [
    ["Preciso esperar algum tempo para me divorciar?", "Não. Hoje o divórcio pode ser feito a qualquer momento, sem prazo mínimo e sem necessidade de comprovar culpa."],
    ["O que acontece com os bens?", "Depende do regime de bens do casamento ou da união estável. Em geral, o patrimônio construído em conjunto é dividido. Reter ou destruir seus bens é violência patrimonial."],
    ["Posso pedir pensão alimentícia?", "Sim, para os filhos e, em alguns casos, para si. A Defensoria Pública pode ajudar gratuitamente."]
  ]},
  direitos: { titulo: "Direitos", itens: [
    ["O que é medida protetiva de urgência?", "É uma ordem judicial que, por exemplo, afasta o agressor do lar e proíbe aproximação e contato. Pode ser pedida na delegacia, e o juiz decide em até 48 horas."],
    ["Preciso de advogado para pedir medida protetiva?", "Não. O pedido pode ser feito diretamente na delegacia, no Ministério Público ou na Defensoria Pública."],
    ["Tenho direito a atendimento de saúde?", "Sim. O SUS deve prestar atendimento integral, incluindo apoio psicológico e, em caso de violência sexual, profilaxia e acolhimento."]
  ]},
  rede: { titulo: "Rede de proteção", itens: [
    ["O que é a rede de proteção?", "É o conjunto de serviços de segurança, justiça, saúde, assistência social, educação e acolhimento que atuam de forma integrada no atendimento à mulher."],
    ["Por onde devo começar?", "Pelo caminho em que você se sentir mais segura: ligue 180, procure a DEAM, um CREAS ou uma unidade de saúde. Qualquer porta de entrada pode encaminhar você para as demais."],
    ["O atendimento é gratuito e sigiloso?", "Os serviços públicos da rede são gratuitos e preservam o sigilo das informações."]
  ]}
};
