/* ==========================================================
   DADOS DO SITE – edite aqui para atualizar conteúdo.
   ATENÇÃO: endereços/horários/telefones locais marcados com
   "confirmar" devem ser verificados antes da publicação.
   ========================================================== */

/* Link do Google Maps a partir do endereço */
window.mapsLink = (endereco) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(endereco);

window.CATEGORIAS = {
  juridico: "Jurídico",
  saude: "Saúde",
  assistencia: "Assistência",
  acolhimento: "Acolhimento",
  seguranca: "Segurança",
  educacao: "Educação"
};

/* Formato de cada serviço:
   id (vira a âncora #id do card e é usado no menu dropdown), nome, categoria, selo (opcional), descricao,
   itens: [[destaque, texto]]            -> lista com palavra em negrito
   campos: [[tipo, rótulo, texto, link]] -> tipo: publico | endereco | horario | contato | info
   aviso (opcional), mais (HTML do "Ler mais informações", opcional)
   O texto "[A CONFIRMAR]" aparece na tela como um marcador destacado: troque pelo dado
   verificado e apague o marcador. NÃO preencha dados que não foram confirmados. */
window.SERVICOS = [
  {
    nome: "Ligue 180 – Central de Atendimento à Mulher",
    id: "ligue-180",
    categoria: "assistencia",
    descricao: "Canal nacional de atendimento às mulheres em situação de violência.",
    itens: [
      ["Denúncias de violência:", "recebe e encaminha denúncias aos órgãos competentes, de forma anônima e sigilosa."],
      ["Acolhimento e orientação:", "oferece escuta qualificada e informações sobre os direitos das mulheres e a Lei Maria da Penha."],
      ["Informações sobre a rede de apoio:", "indica endereços e contatos de serviços especializados, como DEAMs, Centros de Referência, Defensorias Públicas e Casas da Mulher Brasileira."]
    ],
    campos: [
      ["contato", "Telefone", "180", "tel:180"],
      ["contato", "WhatsApp", "(61) 9610-0180", "https://wa.me/556196100180"],
      ["info", "Acessibilidade", "Atendimento em Libras."],
      ["info", "Quem pode ligar", "O Ligue 180 pode ser acionado pela própria vítima ou por qualquer pessoa (familiar, amigo, vizinho) que souber do caso, inclusive de forma anônima."]
    ],
    aviso: "Ao realizar uma denúncia, é importante fornecer o máximo possível de informações corretas e detalhadas sobre a situação e, quando possível, sobre a vítima, como endereço e formas de contato. Isso ajuda as autoridades a localizá-la e a tomar as providências necessárias para oferecer proteção e assistência."
  },
  {
    nome: "Delegacia Especializada de Atendimento à Mulher (DEAM)",
    id: "deam",
    categoria: "seguranca",
    descricao: "Responsável pelo registro de ocorrências, pelo recebimento de pedidos de medidas protetivas de urgência e pela investigação de crimes relacionados à violência doméstica e familiar contra a mulher.",
    campos: [
      ["publico", "Público", "Mulheres em situação de violência."],
      ["endereco", "Endereço", "Rua Dr. Montaury, 1387, 2º andar, Madureira, Caxias do Sul – RS, CEP 95047-500", mapsLink("Rua Dr. Montaury, 1387, 2º andar, Madureira, Caxias do Sul – RS, CEP 95047-500")],
      ["horario", "Horário", "Das 8h30 às 12h e das 13h30 às 20h"],
      ["contato", "Telefone", "(54) 3220-9280", "tel:+555432209280"]
    ]
  },
  {
    nome: "Delegacia de Polícia de Pronto Atendimento (DPPA) – Caxias do Sul",
    id: "plantao-policia-civil",
    categoria: "seguranca",
    descricao: "Atende 24 horas, todos os dias, inclusive fins de semana e feriados. É possível registrar o boletim de ocorrência e pedir medidas protetivas de urgência fora do horário da DEAM e também nos casos de violência de gênero sem vínculo familiar ou relação íntima de afeto."
  },
  {
    nome: "Delegacia Online – Polícia Civil RS",
    id: "delegacia-online",
    categoria: "seguranca",
    descricao: "Permite registrar o boletim de ocorrência pela internet, sem sair de casa. Tem uma área específica para mulheres, a Delegacia Online da Mulher, onde também é possível pedir medidas protetivas de urgência.",
    link: ["Acessar a Delegacia Online", "https://www.delegaciaonline.rs.gov.br/"]
  },
  {
    nome: "Defensoria Pública do Estado – Caxias do Sul",
    id: "defensoria-publica",
    categoria: "juridico",
    descricao: "Oferece orientação jurídica gratuita e acompanhamento de processos, incluindo pedidos de medidas protetivas, questões de guarda, pensão alimentícia e divórcio.",
    campos: [
      ["endereco", "Endereço", "Rua Tronca, 2383, Bairro Rio Branco, Caxias do Sul – RS, CEP 95010-100", mapsLink("Rua Tronca, 2383, Bairro Rio Branco, Caxias do Sul – RS, CEP 95010-100")],
      ["contato", "Telefone", "(54) 3228-2298", "tel:+555432282298"],
      ["horario", "Horário de atendimento presencial", "Segunda a sexta-feira, das 12h às 18h"]
    ]
  },
  {
    nome: "Serviço de Assistência Jurídica Gratuita (SAJU) – UCS",
    id: "saju-ucs",
    categoria: "juridico",
    descricao: "O SAJU da Universidade de Caxias do Sul oferece atendimento jurídico gratuito à comunidade, com orientação, assessoria e acompanhamento em áreas específicas do Direito. Os atendimentos são realizados por acadêmicos do curso de Direito, sempre sob a orientação e supervisão de professores advogados.",
    campos: [
      ["info", "Atendimento", "Gratuito e exclusivamente mediante agendamento."],
      ["publico", "Público atendido", "Pessoas residentes em Caxias do Sul, com renda bruta individual de até três salários mínimos."],
      ["info", "Áreas", "Direito de Família, Cível, Penal (ANPP e medidas protetivas), do Consumidor, Previdenciário e Trabalhista."],
      ["info", "Agendamento", "Presencialmente ou por telefone, mediante análise preliminar da situação e dos critérios de atendimento."],
      ["endereco", "Endereço", "R. Francisco Getúlio Vargas, 1130 – Bloco 58 – Petrópolis, Caxias do Sul – RS, CEP 95070-560", mapsLink("R. Francisco Getúlio Vargas, 1130 – Bloco 58 – Petrópolis, Caxias do Sul – RS, CEP 95070-560")],
      ["contato", "Telefone", "(54) 3218-2276", "tel:+555432182276"],
      ["horario", "Horário", "Segunda a sexta-feira, das 8h às 21h. Sábado e domingo: fechado."]
    ],
    mais: `
      <h4>Como funciona o atendimento?</h4>
      <p>O atendimento no SAJU é realizado exclusivamente mediante agendamento. Para solicitá-lo, o interessado deve comparecer presencialmente ao serviço ou entrar em contato pelos telefones de atendimento.</p>
      <p>No primeiro contato, será feita uma análise preliminar para verificar se a pessoa atende aos critérios estabelecidos e se sua demanda está entre as áreas de atuação do SAJU.</p>
      <p>Após a aprovação dessa etapa, será agendado o atendimento. O caso será acompanhado por acadêmicos de Direito, sob a supervisão de professores advogados.</p>
      <p>Sempre que precisar esclarecer dúvidas, entregar documentos ou conversar com o advogado responsável, o cliente deverá comparecer ao SAJU ou entrar em contato pelos telefones do serviço, respeitando o dia e o horário de atendimento correspondentes.</p>

      <h4>Requisitos para ser atendido</h4>
      <ul>
        <li>Residir no município de Caxias do Sul.</li>
        <li>Apresentar uma demanda que esteja entre as áreas de atuação do SAJU.</li>
        <li>Possuir renda bruta individual de até três salários mínimos.</li>
      </ul>

      <h4>Áreas de atendimento</h4>
      <ul>
        <li>Direito de Família</li>
        <li>Direito Cível</li>
        <li>Direito Penal (ANPP e medidas protetivas)</li>
        <li>Direito do Consumidor</li>
        <li>Direito Previdenciário</li>
        <li>Direito Trabalhista</li>
      </ul>

      <h4>Processos que não são realizados</h4>
      <ul>
        <li>Auxílio-reclusão</li>
        <li>Solicitações de medicamentos e cirurgias</li>
        <li>Casos de pessoas que não residem em Caxias do Sul</li>
        <li>Solicitações de vagas em creches e escolas</li>
        <li>Casos em que a renda ultrapassa três salários mínimos</li>
      </ul>

      <h4>Documentação necessária para o primeiro atendimento</h4>
      <ul>
        <li>Comprovante de renda</li>
        <li>Comprovante de residência</li>
        <li>Documento de identificação</li>
        <li>Documentos relacionados ao processo ou à situação que deseja encaminhar</li>
      </ul>

      <h4>Atenção!</h4>
      <p>Caso o atendimento seja interrompido antes do início do processo, seja por falta de comparecimento, ausência de documentos ou qualquer outra situação que impossibilite o ingresso da ação antes do término do semestre vigente, será necessário reiniciar todo o procedimento. Nesses casos, o interessado deverá realizar um novo agendamento, passar novamente pela triagem, entregar a documentação para análise e aguardar um novo atendimento.</p>
      <p>Para o andamento do processo, o cliente deve:</p>
      <ul>
        <li>Comparecer aos atendimentos agendados;</li>
        <li>Entregar a documentação solicitada dentro do prazo;</li>
        <li>Manter contato com a equipe sempre que necessário.</li>
      </ul>

      <h4>Perguntas frequentes</h4>
      <p><strong>O atendimento é gratuito?</strong><br>Sim. O SAJU presta assistência jurídica gratuita às pessoas que atendem aos critérios estabelecidos pelo serviço.</p>
      <p><strong>Quem fará meu atendimento?</strong><br>O atendimento é realizado por acadêmicos do curso de Direito da UCS, sempre com orientação e supervisão de professores advogados.</p>
      <p><strong>Quanto tempo demora o processo?</strong><br>Cada caso possui suas particularidades. O tempo de tramitação depende do tipo de ação e do andamento do Poder Judiciário.</p>`
  },
  {
    nome: "Patrulha Maria da Penha",
    id: "patrulha-maria-da-penha",
    categoria: "seguranca",
    descricao: "A Patrulha Maria da Penha, vinculada à Brigada Militar, realiza o acompanhamento de mulheres em situação de violência doméstica que possuem medidas protetivas de urgência, por meio de visitas preventivas e orientações.",
    aviso: "O acompanhamento da Patrulha não substitui o acionamento da polícia em situações de perigo imediato.",
    mais: `
      <h4>Como solicitar o acompanhamento?</h4>
      <p>Ao solicitar as Medidas Protetivas de Urgência (MPUs), a mulher pode informar que deseja também o acompanhamento da Patrulha Maria da Penha.</p>
      <p>Após o deferimento da medida protetiva e o encaminhamento aos órgãos de segurança, a Patrulha pode ser acionada pelo sistema ou por meio das listas encaminhadas pelos Juizados de Violência Doméstica.</p>
      <p>A equipe realiza visitas preventivas, comparecendo eventualmente à residência das mulheres que solicitaram o acompanhamento, para oferecer orientações, verificar como está a situação e acompanhar o cumprimento das medidas protetivas.</p>

      <h4>Como buscar orientação ou contato?</h4>
      <p>A mulher também pode procurar diretamente uma unidade da Brigada Militar ou um posto de segurança próximo de sua localidade.</p>
      <ul>
        <li><strong>153:</strong> Guarda Municipal, onde houver esse serviço. <a href="tel:153">Ligar 153</a></li>
        <li><strong>190:</strong> Brigada Militar, em situações de emergência. <a href="tel:190">Ligar 190</a></li>
      </ul>`
  },
  {
    nome: "Casa de Apoio Viva Rachel",
    id: "casa-de-apoio-viva-rachel",
    categoria: "acolhimento",
    descricao: "Abrigo destinado a mulheres em situação de violência doméstica com risco de morte e sem rede de apoio, que também pode acolher seus filhos. Além do abrigo, é possível receber acompanhamento psicológico, social e jurídico, auxiliando na reconstrução da autonomia e na busca por condições para recomeçar a vida com segurança.",
    campos: [
      ["publico", "Público", "Mulheres em situação de violência doméstica com risco de morte e sem rede de apoio. O abrigo também pode acolher seus filhos."],
      ["endereco", "Endereço", "Sigiloso, para preservar a segurança das mulheres acolhidas."],
      ["info", "Como ter acesso", "O encaminhamento é realizado pela rede de proteção."]
    ]
  },
  {
    nome: "Centro de Referência da Mulher (CRM) – Rompendo Paradigmas",
    id: "centro-de-referencia-da-mulher",
    categoria: "assistencia",
    descricao: "Equipamento público especializado no acolhimento, orientação, atendimento psicossocial e suporte jurídico a mulheres em situação de violência doméstica e familiar. É vinculado à Coordenadoria da Mulher de Caxias do Sul.",
    campos: [
      ["endereco", "Endereço", "Rua Alfredo Chaves, 1333, 3º andar, Bairro Exposição (Centro Administrativo Municipal), Caxias do Sul – RS", mapsLink("Rua Alfredo Chaves, 1333, Bairro Exposição, Caxias do Sul – RS")],
      ["horario", "Horário", "Segunda a sexta-feira, das 9h às 17h [A CONFIRMAR]"],
      ["contato", "Telefone", "(54) 3218-6112", "tel:+555432186112"]
    ]
  },
  {
    nome: "Espaço Bem-Me-Quer",
    id: "espaco-bem-me-quer",
    categoria: "assistencia",
    descricao: "Central de atendimento às vítimas de crimes. Seu objetivo é concretizar a condição de sujeito de direitos das vítimas, através de serviços voltados para a informação, apoio, acolhimento, reparação e promoção de meios efetivos de participação no processo penal.",
    campos: [
      ["endereco", "Endereço", "Av. Independência, nº 2372, Térreo – Sala 14, Bairro Exposição, Caxias do Sul – RS, CEP 95082-380", mapsLink("Av. Independência, 2372, Bairro Exposição, Caxias do Sul – RS, CEP 95082-380")],
      ["horario", "Horário", "Segunda a sexta-feira, das 12h às 19h"],
      ["contato", "Telefone", "(54) 3216-5300 (ramal 5452)", "tel:+555432165300"],
      ["contato", "WhatsApp", "(54) 99641-3016", "https://wa.me/5554996413016"]
    ]
  },
  {
    nome: "Instituto Rosa Del Este",
    id: "instituto-rosa-del-este",
    categoria: "assistencia",
    descricao: "A ONG presta assistência social e psicológica imediata às vítimas de violência, mas também promove um auxílio que causa impactos de longo prazo, como a profissionalização e o constante trabalho junto da vítima para que ela entenda seu valor e se veja como um ser humano merecedor de coisas boas.",
    campos: [
      ["endereco", "Endereço", "R. Borges de Medeiros, 211, Sala 01 A, Centro, Caxias do Sul – RS", mapsLink("R. Borges de Medeiros, 211, Centro, Caxias do Sul – RS")],
      ["info", "Referência", "Próximo ao Zaffari e ao Estádio Alfredo Jaconi."],
      ["contato", "Telefone", "(54) 3067-0355", "tel:+555430670355"]
    ]
  },
  {
    nome: "Projeto Resgate – Apsiconor",
    id: "projeto-resgate",
    categoria: "saude",
    descricao: "Uma iniciativa da Apsiconor (Associação dos Psicólogos do Nordeste do RS), em Caxias do Sul. Oferece apoio psicológico a mulheres que passam ou passaram por violência e abusos, inclusive a violência psicológica, que costuma ser o início do ciclo de violência. O projeto acolhe e escuta essas mulheres, trabalha a autoestima e as orienta para que consigam se reestruturar.",
    itens: [
      ["Atendimentos individuais", ""],
      ["Encontros periódicos em grupo", ""],
      ["Palestras abertas ao público", ""]
    ],
    campos: [
      ["info", "Como acessar", "Entre em contato com a Apsiconor pelos canais abaixo para saber como se inscrever e onde são os atendimentos."],
      ["endereco", "Endereço", "Rua Pedro Tomasi, 937, Sala 102, Bairro Exposição, Caxias do Sul – RS, CEP 95084-320", mapsLink("Rua Pedro Tomasi, 937, Bairro Exposição, Caxias do Sul – RS, CEP 95084-320")],
      ["horario", "Horário", "Segunda a sexta-feira, das 13h às 17h"],
      ["contato", "WhatsApp", "(54) 99236-9775", "https://wa.me/5554992369775"],
      ["contato", "WhatsApp", "(54) 99615-9155", "https://wa.me/5554996159155"],
      ["contato", "Telefone fixo", "(54) 3223-4529", "tel:+555432234529"]
    ]
  },
  {
    nome: "Projeto Rosas – UCS",
    id: "projeto-rosas-ucs",
    categoria: "educacao",
    descricao: "O Projeto Rosas UCS visa capacitar acerca das questões jurídicas, sociais e psicológicas que giram em torno da violência doméstica e familiar contra a mulher, objetivando, principalmente, a formação de cidadãos para a atuação como multiplicadores de conscientização acerca da prevenção, punição e erradicação da violência doméstica e familiar contra a mulher na comunidade em que vivem.",
    link: ["Saiba mais sobre os encontros", "https://www.ucs.br/site/eventos/projeto-rosas-ucs-2025/"],
    campos: [
      ["publico", "Público-alvo", "Acadêmicos e profissionais do Direito e áreas afins, assim como a comunidade em geral."],
      ["info", "Objetivos", "Conscientizar, acolher, fornecer informações e orientação sobre a prevenção e combate à violência doméstica e familiar contra a mulher."],
      ["contato", "Central de Atendimento", "(54) 3218-2145", "tel:+555432182145"],
      ["contato", "E-mail", "extensao@ucs.br", "mailto:extensao@ucs.br"],
      ["info", "Próximos encontros", "Informações sobre os próximos encontros e os endereços das unidades da UCS na página do projeto.", "https://www.ucs.br/site/eventos/projeto-rosas-ucs-2025/"]
    ]
  }
];

window.PESQUISAS = [
  { titulo: "Proibicionismo, Legalização e (Des)criminalização das Drogas no contexto da mulher", autor: "Estudantes de Direito – UCS", ano: "Política de drogas", resumo: "Por que o número de mulheres presas cresce tanto no Brasil? A pesquisa mostra a ligação entre a política de drogas, a vulnerabilidade social e o encarceramento feminino, e reúne as políticas públicas de apoio.", arquivo: "pesquisa-drogas.html" },
  { titulo: "Saúde mental, violência doméstica e suicídio", autor: "Estudantes de Direito – UCS", ano: "Saúde mental", resumo: "A violência nem sempre deixa marcas no corpo. Como ela afeta a saúde mental das mulheres e por que o sofrimento aparece de formas diferentes entre mulheres e homens.", arquivo: "pesquisa-saude-mental.html" },
  { titulo: "Criminalização da homotransfobia e proteção jurídica das mulheres lésbicas, bissexuais, transexuais e travestis no Brasil", autor: "Estudantes de Direito – UCS", ano: "Diversidade LGBTQIA+", resumo: "O que muda para mulheres LGBTQIA+ com a decisão do STF que pune a homofobia e a transfobia, e quando a Lei Maria da Penha também as protege.", arquivo: "pesquisa-homotransfobia.html" },
  { titulo: "Descriminalização do aborto", autor: "Estudantes de Direito – UCS", ano: "Direitos reprodutivos", resumo: "Quando o aborto é permitido no Brasil, os argumentos de cada lado, os dados de saúde pública e onde é feito o aborto legal no Rio Grande do Sul.", arquivo: "pesquisa-aborto.html" },
  { titulo: "Homens vs. mulheres na corrupção", autor: "Estudantes de Direito – UCS", ano: "Poder e corrupção", resumo: "Quem aparece nas redes de corrupção? Um estudo sobre o Brasil e a Espanha, casos de mulheres em grandes escândalos e a relação entre corrupção, patrimonialismo e acesso ao poder.", arquivo: "pesquisa-corrupcao.html" },
  { titulo: "Racismo, gênero e desigualdades vividas por mulheres negras e indígenas no Brasil", autor: "Estudantes de Direito – UCS", ano: "Raça e gênero", resumo: "Como gênero e raça se somam no trabalho, na renda, nos estereótipos e na violência, e por que as mulheres indígenas ainda são pouco vistas nas estatísticas.", arquivo: "pesquisa-mulheres-negras-indigenas.html" }
];

/* COMPOSIÇÃO DA REDE – órgãos que fazem parte da rede, mas NÃO fazem atendimento direto.
   (Os serviços de atendimento já vêm de SERVICOS e aparecem automaticamente na página.)
   Formato: nome, id, vinculo (a que órgão/esfera pertence), descricao (apenas o que é),
   relacionado (opcional): [texto, link]. */
window.REDE_ORGAOS = [
  {
    nome: "Coordenadoria da Mulher",
    id: "coordenadoria-da-mulher",
    vinculo: "Prefeitura de Caxias do Sul",
    descricao: "Atua no planejamento e na execução de políticas públicas para o público feminino e integra a rede municipal de proteção. O principal equipamento vinculado a ela é o Centro de Referência da Mulher (CRM) – Rompendo Paradigmas.",
    relacionado: ["Ver o Centro de Referência da Mulher", "rede.html#centro-de-referencia-da-mulher"]
  },
  {
    nome: "Conselho Municipal dos Direitos da Mulher (COMDIM)",
    id: "conselho-municipal-dos-direitos-da-mulher",
    vinculo: "Município de Caxias do Sul",
    descricao: "Órgão colegiado, de caráter consultivo, deliberativo e fiscalizador. Propõe políticas públicas voltadas à igualdade de gênero no município, fiscaliza as ações do poder público relacionadas à proteção das mulheres e atua em articulação com a sociedade civil, movimentos de mulheres e entidades de classe para combater a discriminação e a violência."
  },
  {
    nome: "Procuradoria Especial da Mulher (PEM)",
    id: "procuradoria-especial-da-mulher",
    vinculo: "Câmara de Vereadores de Caxias do Sul",
    descricao: "Órgão da Câmara de Vereadores que tem como missão defender os direitos das mulheres, combater a violência e a discriminação de gênero, além de fiscalizar e acompanhar as políticas públicas voltadas à proteção das mulheres no município."
  }
];

/* NOTÍCIAS – iniciativas da cidade. A página mostra da mais recente para a mais antiga.
   Formato: data (AAAA-MM-DD), fonte, titulo, resumo, pontos (lista, opcional),
   imagem (opcional): [arquivo dentro de assets/img/, descrição da imagem],
   link (publicação original), relacionado (opcional): [texto, link para outra página do site] */
window.NOTICIAS = [
  {
    data: "2026-11-23",
    fonte: "Virada Feminina",
    tipo: "evento",
    evento: { dia: "2026-11-24", hora: "13h30", local: "Câmara Municipal de Caxias do Sul", nome: "I Fórum Virada Feminina" },
    titulo: "I Fórum Virada Feminina reúne lideranças femininas de Caxias do Sul e da Serra Gaúcha nesta terça, 24 de novembro",
    resumo: "Um encontro de lideranças femininas para diálogos sobre empreendedorismo, autonomia, saúde, longevidade, epigenética e nutrição. Com o tema \"Conexões que fortalecem. Vozes que transformam.\", o fórum reúne representantes da rede de proteção, do poder público, da advocacia, da saúde e do empreendedorismo.",
    pontos: [
      "Quando: terça-feira, 24 de novembro de 2026, às 13h30.",
      "Onde: Câmara Municipal de Caxias do Sul.",
      "Entre as participantes estão representantes da Delegacia da Mulher (DEAM), da Coordenadoria da Mulher e da Procuradoria Especial da Mulher (PEM) da Câmara.",
      "Inscrições pelo QR code que aparece nas artes. Passe as imagens para conhecer todas as participantes."
    ],
    imagens: [
      ["noticias/forum-virada-feminina/01.jpg", "Convite especial do I Fórum Virada Feminina, Caxias do Sul e Serra Gaúcha: 24 de novembro, 13h30, na Câmara Municipal de Caxias do Sul. Temas: empreendedorismo, autonomia, saúde, longevidade, epigenética e nutrição"],
      ["noticias/forum-virada-feminina/02.jpg", "Conheça as participantes: Jeane Schulz, da Coordenadoria da Mulher, e Dra. Bruna Marin, advogada, mãe atípica e comentarista política da TVCom Bento Gonçalves"],
      ["noticias/forum-virada-feminina/03.jpg", "Conheça as participantes: Dra. Ana Paula Caregnato, vice-presidente da Comissão da Mulher Advogada da OAB Subseção Caxias do Sul; Angela de Oliveira, artista plástica, curadora e presidente da Virada Feminina de Gramado; Dra. Katiane Deconto, fisioterapeuta; e Cileide Moussallem, presidente da Virada Feminina do Amazonas"],
      ["noticias/forum-virada-feminina/04.jpg", "Conheça as participantes: Melissa Oliveira, empresária e apresentadora do RS Play; Márcia Costa, presidente do Sindilojas; Ana Paula Lima, especialista em relações governamentais; e Andressa Marques, assistente social e vereadora, da Procuradoria Especial da Mulher"],
      ["noticias/forum-virada-feminina/05.jpg", "Conheça as participantes: Thalita Giacomitti Andrich, da Delegacia Especializada no Atendimento à Mulher (DEAM); Tatiane Frizzo, secretária municipal da Cultura de Caxias do Sul; Suzana Strassburger, do Gabinete da Primeira-Dama de Gramado; e Miriane de Vargas, empresária e mentora de comunicação"],
      ["noticias/forum-virada-feminina/06.jpg", "Conheça as participantes: Cassiane Borges, empresária da beleza; Leila Cristina Fagundes, diretora de Políticas Públicas para Mulheres de Horizontina; Evelise Weber, educadora física; e Dra. Jaqueline Mari de Ross, advogada e escritora"],
      ["noticias/forum-virada-feminina/07.jpg", "Conheça as participantes: Barbara Penna, palestrante e referência na luta contra a violência doméstica; Dra. Neura Trevisol, psicoterapeuta e vice-presidente nacional da Virada Feminina; Raquel Maffeis, especialista em pele; e Metriz Viana, comandante do 1º Pelotão de Bombeiros de Caxias do Sul"],
      ["noticias/forum-virada-feminina/08.jpg", "Conheça as participantes: Patrícia Siqueira, coordenadora do escritório da OIM no Rio Grande do Sul; Maria Inês Correia Borges, coordenadora do GT Migrantes; Tatiana Lyra Umada, planejamento patrimonial; e Dra. Greice Fontana, médica ginecologista"],
      ["noticias/forum-virada-feminina/09.jpg", "Lideranças em destaque: Ângela M. Chaves, presidente da Virada Feminina Caxias e Região; Marta Lívia Suplicy, presidente da Virada Feminina Internacional; e Stella Zorzo, presidente jovem da Virada Feminina Internacional. 24 de novembro de 2026, 13h30, Câmara Municipal de Caxias do Sul, com QR code para inscrição"],
      ["noticias/forum-virada-feminina/10.jpg", "Apoio institucional do 1º Fórum Virada Feminina no RS: logotipos das instituições, entidades e marcas parceiras, como Câmara Municipal, Prefeitura de Caxias do Sul, OAB, OIM, CRAM e Polícia Civil"],
      ["noticias/forum-virada-feminina/11.jpg", "Sua presença faz a diferença: QR code para inscrição no fórum. Aponte a câmera do celular para o código e faça sua inscrição"]
    ]
  },
  {
    data: "2026-11-23",
    fonte: "Apsiconor",
    tipo: "evento",
    evento: { dia: "2026-11-28", hora: "14h às 17h", local: "Sindicato dos Bancários – Rua Borges de Medeiros, 676", nome: "Mente Forte, Corpo Seguro" },
    titulo: "Mente Forte, Corpo Seguro: tarde gratuita de conversas e cuidado no sábado, 28 de novembro",
    resumo: "Atividade dos 21 dias de ativismo contra a violência à mulher, com música, conversa sobre saúde, depoimento de superação e dança. Uma tarde cheia de alegria e boas conversas: traga uma amiga e presenteie-a com este momento.",
    pontos: [
      "Quando: sábado, 28 de novembro, das 14h às 17h.",
      "Onde: Sindicato dos Bancários (Rua Borges de Medeiros, 676).",
      "Condução da psicóloga Maria Marlene Faria, presidente da Apsiconor. Abertura com violino de Nêmora Hoff e Leda Cristina Carberlon de Fonseca, fundadora do coral INAV.",
      "Conversa sobre climatério e menopausa com a ginecologista Dra. Bruna Genuina de Freitas Schiavo, depoimento de superação com Cláudia Sudan e encerramento com dança cigana.",
      "Evento gratuito. Confirme presença até 26/11 pelo WhatsApp (54) 99618-8686."
    ],
    imagem: ["noticias/mente-forte-corpo-seguro.jpg", "Cronograma do evento Mente Forte, Corpo Seguro: sábado, 28 de novembro, das 14h às 17h, no Sindicato dos Bancários, Rua Borges de Medeiros, 676. Evento gratuito, com confirmação pelo WhatsApp 54 99618-8686"],
    botao: ["Confirmar presença no WhatsApp", "https://wa.me/5554996188686"]
  },
  {
    data: "2026-11-11",
    fonte: "Prefeitura de Caxias do Sul",
    titulo: "Município assume gestão direta da Casa Viva Rachel para garantir acolhimento ininterrupto a mulheres vítimas de violência",
    resumo: "A Prefeitura passou a administrar diretamente a Casa Viva Rachel, abrigo para mulheres vítimas de violência, depois que a Associação Mão Amiga decidiu não continuar à frente do serviço.",
    pontos: [
      "O serviço passa a ser conduzido diretamente pela equipe técnica da SMASC, sem interrupção do acolhimento.",
      "A manutenção do abrigo ocorre em um momento crítico para a segurança das mulheres no Rio Grande do Sul.",
      "Segundo dados da segurança pública, o estado já registrou mais de 60 feminicídios em 2026."
    ],
    imagem: ["noticias/casa-viva-rachel.png", "Arte da Prefeitura de Caxias do Sul: mulher abraçando uma criança, com o título da notícia sobre a Casa Viva Rachel"],
    link: "https://www.instagram.com/p/DfnAtHHNIT0/",
    relacionado: ["Conheça a Casa de Apoio Viva Rachel", "rede.html#casa-de-apoio-viva-rachel"]
  },
  {
    data: "2026-11-17",
    fonte: "Grupo Mulheres do Brasil e Prefeitura de Caxias do Sul",
    tipo: "evento",
    evento: { dia: "2026-11-29", hora: "9h", local: "Em frente ao Largo da Prefeitura de Caxias do Sul", nome: "6ª Caminhada pelo Fim da Violência contra Mulheres e Meninas" },
    titulo: "Juntas pelo fim da violência contra mulheres e meninas: 6ª Caminhada é no dia 29 de novembro",
    resumo: "Caxias do Sul vai às ruas pelo fim da violência contra mulheres e meninas. A caminhada é um convite para unir vozes, fortalecer a rede de proteção e mostrar que não podemos nos calar diante da violência. Mulheres, homens, crianças e toda a comunidade são bem-vindos.",
    pontos: [
      "Quando: domingo, 29 de novembro, às 9h.",
      "Onde: concentração em frente ao Largo da Prefeitura Municipal de Caxias do Sul.",
      "Realização: Grupo Mulheres do Brasil – Núcleo Caxias do Sul, em parceria com a Prefeitura, por meio da Coordenadoria da Mulher.",
      "Inscreva-se pelo link e ganhe sua camiseta."
    ],
    imagem: ["noticias/caminhada-2026.jpg", "Cartaz da 6ª Caminhada pelo Fim da Violência contra Mulheres e Meninas: três mulheres caminhando de mãos dadas, com a frase Dê seu passo nessa luta, 29 de novembro, 9h"],
    botao: ["Inscreva-se e ganhe sua camiseta", "https://forms.gle/UrP6bw9ESLUVxV7f9"]
  },
  {
    data: "2026-11-12",
    fonte: "Supremo Tribunal Federal (STF)",
    titulo: "STF tem unanimidade para afastar isenção de pena em crimes patrimoniais entre familiares",
    resumo: "Por unanimidade, o STF entendeu que as regras do Código Penal que isentavam de pena quem comete crimes patrimoniais, como furto e estelionato, contra familiares não são compatíveis com a Constituição de 1988. Para os ministros, essas regras nasceram de um modelo patriarcal e deixavam sem proteção mulheres vítimas de violência patrimonial.",
    pontos: [
      "A decisão afasta os artigos 181 e 182 do Código Penal e vale para todos os integrantes da família, independentemente do gênero da vítima.",
      "A ministra Cármen Lúcia lembrou que a violência patrimonial pode desencadear outras formas de violência, como a psicológica e a moral.",
      "O julgamento será retomado em 18 de novembro, para definir se a decisão vale para fatos anteriores."
    ],
    imagem: ["noticias/stf-plenario.png", "Plenário do Supremo Tribunal Federal durante sessão de julgamento"],
    decisao: "crimes-patrimoniais-entre-familiares"
  },
  {
    data: "2026-08-19",
    fonte: "Supremo Tribunal Federal (STF)",
    titulo: "STF decide que medidas protetivas valem para toda violência de gênero contra a mulher",
    resumo: "Por unanimidade, o STF decidiu, no Tema 1.412 da Repercussão Geral, que as medidas protetivas da Lei Maria da Penha valem para toda forma de violência contra a mulher baseada no gênero, mesmo fora de casa, da família ou de uma relação íntima de afeto.",
    pontos: [
      "Mulheres agredidas por vizinhos, conhecidos ou outras pessoas também podem pedir medida protetiva.",
      "A proteção inclui a violência política de gênero.",
      "Um pedido feito ao juízo errado deve ser analisado mesmo assim quando houver risco imediato à vítima."
    ],
    imagem: ["noticias/stf-justica.png", "Estátua da Justiça em frente ao prédio do Supremo Tribunal Federal, em Brasília"],
    decisao: "medidas-protetivas-tema-1412",
    relacionado: ["Veja como pedir a medida protetiva", "por-onde-comecar.html#quem-pode-pedir"]
  }
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
  /* Tudo sobre medidas protetivas fica reunido aqui (o conteúdo segue "Por onde começar?" e a Rede de Proteção) */
  medidas: { titulo: "Medidas protetivas", itens: [
    ["O que é medida protetiva de urgência?", "É uma ordem judicial prevista na Lei Maria da Penha (Lei 11.340/2006). Ela tem o objetivo de garantir a sua segurança e impedir novas situações de violência."],
    ["Quais medidas podem ser pedidas?", "Entre elas: o afastamento do agressor, a proibição de aproximação e de contato, a restrição de visitas aos filhos e a suspensão do porte de armas."],
    ["Quem pode pedir? Só vale para violência doméstica?", "Não é só para violência doméstica. Em 19 de agosto de 2026, o Supremo Tribunal Federal decidiu (Tema 1.412 da Repercussão Geral) que as medidas protetivas da Lei Maria da Penha valem para toda forma de violência contra a mulher baseada no gênero, mesmo que não aconteça em casa, na família ou em uma relação íntima de afeto."],
    ["E quando não há vínculo familiar ou relação íntima de afeto?", "A violência pode ser praticada por vizinhos, conhecidos ou outras pessoas, e você também tem direito à medida protetiva. Registre o boletim de ocorrência no plantão da Polícia Civil ou pela Delegacia Online. O pedido segue para o juiz pelo mesmo procedimento da Lei Maria da Penha. A investigação fica com a delegacia distrital responsável, e não com a DEAM: você pode perguntar qual delegacia recebeu o seu registro no momento do atendimento ou, depois, em qualquer delegacia da Polícia Civil."],
    ["E se eu tiver vínculo familiar ou relação íntima de afeto?", "Nesse caso, trata-se de violência doméstica e familiar, prevista diretamente na Lei Maria da Penha. A relação íntima de afeto inclui namoro, casamento e união estável, mesmo que já tenha terminado e mesmo que vocês não morem juntos. Você pode pedir a medida na Delegacia Especializada de Atendimento à Mulher (DEAM), na Delegacia de Polícia de Pronto Atendimento (DPPA) ou pela Delegacia Online da Mulher do RS. A DEAM é a responsável pela investigação desses casos."],
    ["Onde posso pedir a medida protetiva em Caxias do Sul?", "Na DEAM (Rua Dr. Montaury, 1387, 2º andar, Madureira – das 8h30 às 12h e das 13h30 às 20h), na Delegacia de Polícia de Pronto Atendimento (DPPA), que atende 24 horas, ou pela internet, na Delegacia Online da Mulher do RS (www.delegaciaonline.rs.gov.br). Os contatos completos estão na página Rede de Proteção."],
    ["Preciso de advogado para pedir medida protetiva?", "Não. O pedido é feito diretamente na Delegacia Especializada de Atendimento à Mulher (DEAM), na Delegacia de Polícia de Pronto Atendimento (DPPA) ou na Delegacia Online."],
    ["Preciso ter boletim de ocorrência anterior para pedir medida protetiva?", "Não. A Lei Maria da Penha (art. 19, § 5º, incluído pela Lei nº 14.550/2023) determina que as medidas protetivas sejam concedidas independentemente do registro de boletim de ocorrência, da existência de inquérito policial, de ação penal ou cível e até da classificação do crime. O seu relato já é suficiente para o pedido ser analisado pelo juiz."],
    ["Quanto tempo demora para a medida valer?", "Depois que o pedido chega ao Judiciário, o juiz tem até 48 horas para decidir. Em seguida, a vítima e o suspeito são intimados, e é neste momento que a medida entra em vigor."],
    ["E se o agressor descumprir a medida?", "Comunique imediatamente a Polícia para registrar o boletim de ocorrência. O descumprimento é crime, previsto no artigo 24-A da Lei Maria da Penha. Guarde mensagens, fotografias, vídeos e outras provas, se possível. Em caso de perigo imediato, procure um local seguro e ligue 190."],
    ["Posso ter acompanhamento depois que a medida for concedida?", "Sim. Ao pedir a medida protetiva, informe que deseja o acompanhamento da Patrulha Maria da Penha, da Brigada Militar. A equipe faz visitas preventivas, orienta e acompanha o cumprimento das medidas. Esse acompanhamento não substitui o 190 em situações de perigo imediato."],
    ["E se for violência política?", "A proteção contra a violência de gênero inclui a violência política (art. 326-B do Código Eleitoral). Nesse caso, a competência é da Justiça Eleitoral."]
  ]},
  direitos: { titulo: "Direitos", itens: [
    ["Tenho direito a atendimento de saúde?", "Sim. O SUS deve prestar atendimento integral, incluindo apoio psicológico e, em caso de violência sexual, profilaxia e acolhimento."]
  ]},
  rede: { titulo: "Rede de proteção", itens: [
    ["O que é a rede de proteção?", "É o conjunto de serviços de segurança, justiça, saúde, assistência social, educação e acolhimento que atuam de forma integrada no atendimento à mulher."],
    ["Por onde devo começar?", "Pelo caminho em que você se sentir mais segura: ligue 180, procure a DEAM, um CREAS ou uma unidade de saúde. Qualquer porta de entrada pode encaminhar você para as demais."],
    ["O atendimento é gratuito e sigiloso?", "Os serviços públicos da rede são gratuitos e preservam o sigilo das informações."]
  ]}
};
