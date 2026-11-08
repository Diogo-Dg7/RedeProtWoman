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
    selo: "Atendimento gratuito",
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
    nome: "Delegacia de Polícia para a Mulher (DEAM)",
    id: "deam",
    categoria: "seguranca",
    descricao: "Responsável pelo registro de ocorrências, pelo recebimento de pedidos de medidas protetivas de urgência e pela investigação de crimes relacionados à violência doméstica e familiar contra a mulher.",
    campos: [
      ["publico", "Público", "Mulheres em situação de violência."],
      ["endereco", "Endereço", "Rua Dr. Montaury, 1387, 2º andar, Madureira, Caxias do Sul – RS, CEP 95047-500. [A CONFIRMAR]"],
      ["horario", "Horário", "Das 8h30 às 12h e das 13h30 às 20h. [A CONFIRMAR]"],
      ["contato", "Telefone", "(54) 3220-9280. [A CONFIRMAR]"]
    ]
  },
  {
    nome: "Defensoria Pública do Estado – Caxias do Sul",
    id: "defensoria-publica",
    categoria: "juridico",
    descricao: "Oferece orientação jurídica gratuita e acompanhamento de processos, incluindo pedidos de medidas protetivas, questões de guarda, pensão alimentícia e divórcio.",
    campos: [
      ["endereco", "Endereço", "Rua Tronca, 2383, Bairro Rio Branco, Caxias do Sul – RS, CEP 95010-100. [A CONFIRMAR]"],
      ["contato", "Telefone", "(54) 3228-2298. [A CONFIRMAR]"],
      ["horario", "Atendimento presencial", "Segunda a sexta-feira, das 12h às 18h. [A CONFIRMAR]"]
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
      ["endereco", "Endereço", "[A CONFIRMAR]"],
      ["contato", "Telefone", "[A CONFIRMAR]"],
      ["horario", "Horário", "[A CONFIRMAR]"]
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
      ["info", "Como ter acesso", "O encaminhamento é realizado pela rede de proteção, especialmente pelo Centro de Referência da Mulher (CRM)."],
      ["contato", "Contato do CRM", "[A CONFIRMAR]"]
    ]
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
