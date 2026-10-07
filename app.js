/**
 * INNOBUILDERS CONSULTING — APPLE HIG ENGINE
 * Grounded on Apple Human Interface Guidelines (dickwu/apple-design-skill)
 * Features: Liquid Glass navigation sync, 30 Strategic Questions, Segmented Phase Pills,
 * Keyboard shortcuts (1-4, Enter, Esc), Autosave, PDF Print & JSON export.
 */

const STORAGE_KEY = "innobuilders_apple_briefing_v1";

// 30 Perguntas Estratégicas Formatadas segundo Padrão Apple HIG
const BRIEFING_QUESTIONS = [
  // FASE 1: POSICIONAMENTO ESTRATÉGICO & MARCA (01 - 05)
  {
    id: 1,
    phase: 1,
    phaseName: "Posicionamento Estratégico",
    eyebrow: "Fase 01 &bull; Pergunta 01 de 30",
    title: "Qual é o modelo de negócio central da InnoBuilders?",
    subtitle: "Selecione o posicionamento principal da empresa no mercado ou descreva suas verticais de atuação.",
    placeholder: "Ou digite a proposta de valor, nicho de atuação e especialidades...",
    options: [
      { id: "1_1", key: "1", label: "Consultoria Empresarial Estratégica & Gestão" },
      { id: "1_2", key: "2", label: "Aceleração de Negócios & Crescimento B2B" },
      { id: "1_3", key: "3", label: "Transformação Digital & Tecnologia Aplicada" },
      { id: "1_4", key: "4", label: "Eficiência Operacional & Otimização de Processos" }
    ]
  },
  {
    id: 2,
    phase: 1,
    phaseName: "Posicionamento Estratégico",
    eyebrow: "Fase 01 &bull; Pergunta 02 de 30",
    title: "Quais são os valores inegociáveis que o site deve transmitir?",
    subtitle: "Selecione os princípios que guiam as decisões da consultoria e inspiram confiança no cliente.",
    placeholder: "Ou descreva outros princípios fundamentais da cultura corporativa...",
    options: [
      { id: "2_1", key: "1", label: "Transparência Radical em Diagnósticos e Entregas" },
      { id: "2_2", key: "2", label: "Foco Absoluto em Retorno Financeiro Mensurável (ROI)" },
      { id: "2_3", key: "3", label: "Excelência Técnica e Rigor Metodológico" },
      { id: "2_4", key: "4", label: "Parceria Próxima e Atuação Lado a Lado com o Cliente" }
    ]
  },
  {
    id: 3,
    phase: 1,
    phaseName: "Posicionamento Estratégico",
    eyebrow: "Fase 01 &bull; Pergunta 03 de 30",
    title: "Qual é o principal diferencial competitivo da InnoBuilders?",
    subtitle: "Por que uma grande empresa escolhe a InnoBuilders ao invés de consultorias tradicionais?",
    placeholder: "Ou descreva detalhadamente seus diferenciais únicos de mercado...",
    options: [
      { id: "3_1", key: "1", label: "Metodologia 'Builder' Mão-na-Massa (Execução Real)" },
      { id: "3_2", key: "2", label: "Sócios Sêniores na Operação Direta de Cada Projeto" },
      { id: "3_3", key: "3", label: "Agilidade de Implementação Sem Burocracia Tradicional" },
      { id: "3_4", key: "4", label: "Modelos Híbridos com Tecnologia e Inteligência de Dados" }
    ]
  },
  {
    id: 4,
    phase: 1,
    phaseName: "Posicionamento Estratégico",
    eyebrow: "Fase 01 &bull; Pergunta 04 de 30",
    title: "Qual o status atual dos ativos de identidade visual da marca?",
    subtitle: "Indique os elementos de design já consolidados para aplicarmos no novo site.",
    placeholder: "Ou mencione detalhes sobre manual de marca e assets visuais...",
    options: [
      { id: "4_1", key: "1", label: "Logotipo Oficial Cromado com Monograma e Símbolo Radial" },
      { id: "4_2", key: "2", label: "Paleta Definida: Electric Teal (#00BAC4) & Obsidian Dark" },
      { id: "4_3", key: "3", label: "Manual de Marca e Tipografia Institucional Concluídos" },
      { id: "4_4", key: "4", label: "Precisamos de Apoio para Criação de Ativos Visuais e 3D" }
    ]
  },
  {
    id: 5,
    phase: 1,
    phaseName: "Posicionamento Estratégico",
    eyebrow: "Fase 01 &bull; Pergunta 05 de 30",
    title: "Qual a percepção imediata desejada nos primeiros 3 segundos?",
    subtitle: "Qual impacto emocional e profissional o visitante deve sentir ao carregar o site?",
    placeholder: "Ou defina a impressão exata que deseja causar nos decisores...",
    options: [
      { id: "5_1", key: "1", label: "Autoridade Máxima e Solidez Corporativa Executiva" },
      { id: "5_2", key: "2", label: "Inovação de Vanguarda e Domínio Tecnológico" },
      { id: "5_3", key: "3", label: "Exclusividade de Alto Padrão e Discrição Estratégica" },
      { id: "5_4", key: "4", label: "Pragmatismo, Velocidade e Foco em Ação Prática" }
    ]
  },

  // FASE 2: PÚBLICO-ALVO, ICP & PERSONAS (06 - 10)
  {
    id: 6,
    phase: 2,
    phaseName: "Público & ICP",
    eyebrow: "Fase 02 &bull; Pergunta 06 de 30",
    title: "Quem é o tomador de decisão ideal (ICP) da InnoBuilders?",
    subtitle: "Selecione o cargo e perfil de quem assina o contrato e aprova a consultoria.",
    placeholder: "Ou especifique os cargos e características dos decisores...",
    options: [
      { id: "6_1", key: "1", label: "CEOs, Presidentes e Sócios-Fundadores" },
      { id: "6_2", key: "2", label: "Diretores de Operações e Finanças (COOs, CFOs)" },
      { id: "6_3", key: "3", label: "Diretores de Tecnologia e Inovação (CTOs, CIOs)" },
      { id: "6_4", key: "4", label: "Conselheiros de Administração e Investidores" }
    ]
  },
  {
    id: 7,
    phase: 2,
    phaseName: "Público & ICP",
    eyebrow: "Fase 02 &bull; Pergunta 07 de 30",
    title: "Qual é o porte e estágio das empresas clientes prioritárias?",
    subtitle: "Defina o perfil de faturamento e estrutura das organizações que contratam.",
    placeholder: "Ou descreva segmentos específicos e faixas de receita anual...",
    options: [
      { id: "7_1", key: "1", label: "Grandes Corporações Consolidadas e Multinacionais" },
      { id: "7_2", key: "2", label: "Médias Empresas em Fase de Escala Acelerada (Scale-ups)" },
      { id: "7_3", key: "3", label: "Empresas Familiares em Processo de Profissionalização" },
      { id: "7_4", key: "4", label: "Startups B2B Capitalizadas (Pós-Série A/B)" }
    ]
  },
  {
    id: 8,
    phase: 2,
    phaseName: "Público & ICP",
    eyebrow: "Fase 02 &bull; Pergunta 08 de 30",
    title: "Qual é a principal dor que leva o cliente a buscar a InnoBuilders?",
    subtitle: "Qual gargalo crítico faz a empresa entender que precisa de apoio externo?",
    placeholder: "Ou descreva problemas recorrentes relatados pelos seus clientes...",
    options: [
      { id: "8_1", key: "1", label: "Estagnação de Crescimento e Dificuldade de Expansão" },
      { id: "8_2", key: "2", label: "Processos Internos Caóticos e Perda de Eficiência Operacional" },
      { id: "8_3", key: "3", label: "Falta de Alinhamento Estratégico entre Diretoria e Equipes" },
      { id: "8_4", key: "4", label: "Insegurança na Adoção de Novas Tecnologias e IA" }
    ]
  },
  {
    id: 9,
    phase: 2,
    phaseName: "Público & ICP",
    eyebrow: "Fase 02 &bull; Pergunta 09 de 30",
    title: "Quais são as objeções mais comuns na etapa comercial?",
    subtitle: "O site deve neutralizar antecipadamente as principais dúvidas do comprador.",
    placeholder: "Ou liste outras hesitações que surgem nas negociações...",
    options: [
      { id: "9_1", key: "1", label: "'Consultorias apenas entregam slides e não executam'" },
      { id: "9_2", key: "2", label: "'O investimento é elevado para o momento da nossa empresa'" },
      { id: "9_3", key: "3", label: "'Nossa equipe interna não terá tempo para acompanhar o projeto'" },
      { id: "9_4", key: "4", label: "'Nosso mercado é muito específico para um consultor entender'" }
    ]
  },
  {
    id: 10,
    phase: 2,
    phaseName: "Público & ICP",
    eyebrow: "Fase 02 &bull; Pergunta 10 de 30",
    title: "Qual é o nível de maturidade técnica do público que navega no site?",
    subtitle: "Como o vocabulário e a profundidade das explicações devem ser dosados?",
    placeholder: "Ou comente sobre o nível de sofisticação dos clientes...",
    options: [
      { id: "10_1", key: "1", label: "Executivo Geral: Foco em Negócios, Margem e Resultados" },
      { id: "10_2", key: "2", label: "Técnico-Analítico: Valoriza Métricas, Frameworks e KPIs" },
      { id: "10_3", key: "3", label: "Misto: Visão Macro na Home com Detalhamento em Subpáginas" },
      { id: "10_4", key: "4", label: "Direto ao Ponto: Textos Concisos e Direcionamento Rápido" }
    ]
  },

  // FASE 3: ARQUITETURA DE INFORMAÇÃO & UX (11 - 15)
  {
    id: 11,
    phase: 3,
    phaseName: "Arquitetura & UX",
    eyebrow: "Fase 03 &bull; Pergunta 11 de 30",
    title: "Qual é o mapa de navegação essencial planejado para o site?",
    subtitle: "Selecione as seções e páginas estruturais indispensáveis para a versão 1.0.",
    placeholder: "Ou digite as seções específicas desejadas na barra de menu...",
    options: [
      { id: "11_1", key: "1", label: "Home Estratégica, Soluções, Metodologia, Cases, Sobre e Contato" },
      { id: "11_2", key: "2", label: "One-Page Executiva com Seções Âncora de Navegação Fluida" },
      { id: "11_3", key: "3", label: "Hub Corporativo Completo com Páginas Individuais por Solução" },
      { id: "11_4", key: "4", label: "Estrutura Focada em Conversão Direta e Agendamento Rápido" }
    ]
  },
  {
    id: 12,
    phase: 3,
    phaseName: "Arquitetura & UX",
    eyebrow: "Fase 03 &bull; Pergunta 12 de 30",
    title: "Como deve ser composto o Hero Header da página inicial?",
    subtitle: "A primeira dobra visual após o carregamento da página de entrada.",
    placeholder: "Ou descreva sua visão para a dobra inicial da tela...",
    options: [
      { id: "12_1", key: "1", label: "Headline de Alto Impacto + Logotipo 3D Cromado + CTA Duplo" },
      { id: "12_2", key: "2", label: "Vídeo Institucional Conceitual ao Fundo com Overlay Escuro" },
      { id: "12_3", key: "3", label: "Métricas de Tração em Destaque (ROIs e Números Reais)" },
      { id: "12_4", key: "4", label: "Simulador Interativo ou Diagnóstico Rápido de 3 Perguntas" }
    ]
  },
  {
    id: 13,
    phase: 3,
    phaseName: "Arquitetura & UX",
    eyebrow: "Fase 03 &bull; Pergunta 13 de 30",
    title: "Qual modelo de apresentação das soluções e serviços é o ideal?",
    subtitle: "Como o leque de consultorias deve ser organizado para fácil entendimento.",
    placeholder: "Ou mencione suas principais ofertas e pacotes de serviços...",
    options: [
      { id: "13_1", key: "1", label: "Bento Grid Interativo com Cards Clicáveis de Alta Tecnologia" },
      { id: "13_2", key: "2", label: "Esteira Linear em Fases: Diagnóstico &bull; Estratégia &bull; Execução" },
      { id: "13_3", key: "3", label: "Matriz por Necessidade do Cliente ('Quero Crescer', 'Quero Otimizar')" },
      { id: "13_4", key: "4", label: "Páginas Dedicadas Detalhadas com Escopo e Entregáveis Claros" }
    ]
  },
  {
    id: 14,
    phase: 3,
    phaseName: "Arquitetura & UX",
    eyebrow: "Fase 03 &bull; Pergunta 14 de 30",
    title: "Como a prova social e autoridade serão apresentadas no site?",
    subtitle: "Formatos de validação de mercado para comprovar os resultados obtidos.",
    placeholder: "Ou mencione cases, clientes e números que podem ser divulgados...",
    options: [
      { id: "14_1", key: "1", label: "Logos de Empresas Atendidas em Carrossel Monocromático" },
      { id: "14_2", key: "2", label: "Estudos de Caso Aprofundados com Problema, Ação e Métricas" },
      { id: "14_3", key: "3", label: "Depoimentos Executivos com Foto e Cargo de C-Levels" },
      { id: "14_4", key: "4", label: "Métricas Consolidadas (Ex: '+R$ 50M gerados', '+30 empresas')" }
    ]
  },
  {
    id: 15,
    phase: 3,
    phaseName: "Arquitetura & UX",
    eyebrow: "Fase 03 &bull; Pergunta 15 de 30",
    title: "Como a história e o propósito dos fundadores devem constar no site?",
    subtitle: "Defina o nível de destaque pessoal dos sócios na narrativa institucional.",
    placeholder: "Ou comente sobre a biografia e trajetória dos fundadores...",
    options: [
      { id: "15_1", key: "1", label: "Seção 'Quem Somos' com Perfil Executivo e Links do LinkedIn" },
      { id: "15_2", key: "2", label: "Manifesto da InnoBuilders: 'Por que existimos e como construímos'" },
      { id: "15_3", key: "3", label: "Posicionamento Institucional Sem Destaque Excessivo a Indivíduos" },
      { id: "15_4", key: "4", label: "História de Origem em Linha do Tempo Visual Interativa" }
    ]
  },

  // FASE 4: CONTEÚDO, TOM DE VOZ & ASSETS (16 - 20)
  {
    id: 16,
    phase: 4,
    phaseName: "Conteúdo & Tom",
    eyebrow: "Fase 04 &bull; Pergunta 16 de 30",
    title: "Qual é o tom de voz predominante para o copywriting do site?",
    subtitle: "A forma como a empresa se comunica em cada texto, título e parágrafo.",
    placeholder: "Ou defina adjetivos e estilos preferidos para a comunicação...",
    options: [
      { id: "16_1", key: "1", label: "Executivo, Seguro e Incisivo (Padrão Boardroom)" },
      { id: "16_2", key: "2", label: "Técnico, Analítico e Fundamentado em Dados" },
      { id: "16_3", key: "3", label: "Direto, Sem Clichês Corporativos e Orientado à Ação" },
      { id: "16_4", key: "4", label: "Inspirador, Visionário e Conectado com o Futuro B2B" }
    ]
  },
  {
    id: 17,
    phase: 4,
    phaseName: "Conteúdo & Tom",
    eyebrow: "Fase 04 &bull; Pergunta 17 de 30",
    title: "Quais idiomas o site deve contemplar no lançamento e roadmap?",
    subtitle: "Defina o escopo de internacionalização da presença digital da consultoria.",
    placeholder: "Ou detalhe a estratégia de expansão geográfica e novos mercados...",
    options: [
      { id: "17_1", key: "1", label: "Português (Brasil) Exclusivo no Lançamento" },
      { id: "17_2", key: "2", label: "Bilíngue: Português e Inglês Nativo para Clientes Globais" },
      { id: "17_3", key: "3", label: "Trilíngue: Português, Inglês e Espanhol (América Latina)" },
      { id: "17_4", key: "4", label: "Estrutura Pronta para Multi-Idioma com Ativação Futura" }
    ]
  },
  {
    id: 18,
    phase: 4,
    phaseName: "Conteúdo & Tom",
    eyebrow: "Fase 04 &bull; Pergunta 18 de 30",
    title: "Como será a produção e fornecimento dos textos definitivos?",
    subtitle: "Quem será responsável pelo conteúdo textual de cada página do novo site.",
    placeholder: "Ou indique como o material base será transmitido...",
    options: [
      { id: "18_1", key: "1", label: "A InnoBuilders já possui textos prontos para adaptação" },
      { id: "18_2", key: "2", label: "Desejamos que a agência/desenvolvedor crie o copywriting" },
      { id: "18_3", key: "3", label: "Construção colaborativa via workshops e entrevistas com sócios" },
      { id: "18_4", key: "4", label: "Adaptação de propostas comerciais e apresentações existentes" }
    ]
  },
  {
    id: 19,
    phase: 4,
    phaseName: "Conteúdo & Tom",
    eyebrow: "Fase 04 &bull; Pergunta 19 de 30",
    title: "Quais ativos de imagem e mídia a empresa já possui disponíveis?",
    subtitle: "Materiais fotográficos e audiovisuais para compor a estética do site.",
    placeholder: "Ou relate a necessidade de ensaio fotográfico ou render 3D...",
    options: [
      { id: "19_1", key: "1", label: "Fotos Profissionais dos Sócios em Alta Resolução" },
      { id: "19_2", key: "2", label: "Fotos da Sede, Sala de Reunião e Equipe Operacional" },
      { id: "19_3", key: "3", label: "Ilustrações 3D Abstratas e Gráficos Conceituais" },
      { id: "19_4", key: "4", label: "Necessitamos de Curadoria de Banco de Imagens Premium" }
    ]
  },
  {
    id: 20,
    phase: 4,
    phaseName: "Conteúdo & Tom",
    eyebrow: "Fase 04 &bull; Pergunta 20 de 30",
    title: "O site terá um blog, central de artigos ou hub de insights?",
    subtitle: "Estratégia de publicação regular de artigos técnicos para SEO e autoridade.",
    placeholder: "Ou detalhe a frequência e os temas pretendidos de conteúdo...",
    options: [
      { id: "20_1", key: "1", label: "Sim, Blog/Insights com CMS Ágil para Publicação Semanal" },
      { id: "20_2", key: "2", label: "Não no Lançamento: Foco Estrito em Páginas Institucionais" },
      { id: "20_3", key: "3", label: "Apenas Whitepapers e Relatórios Periódicos em PDF" },
      { id: "20_4", key: "4", label: "Integração Automática com Publicações do LinkedIn" }
    ]
  },

  // FASE 5: CONVERSÃO & GERAÇÃO DE LEADS (21 - 25)
  {
    id: 21,
    phase: 5,
    phaseName: "Conversão & Leads",
    eyebrow: "Fase 05 &bull; Pergunta 21 de 30",
    title: "Qual é a Chamada para Ação (CTA) prioritária do site?",
    subtitle: "O objetivo principal que queremos que o visitante realize antes de sair.",
    placeholder: "Ou defina a ação exata que qualifica o lead comercial...",
    options: [
      { id: "21_1", key: "1", label: "'Agendar Reunião Diagnóstica' (Calendly / Cal.com)" },
      { id: "21_2", key: "2", label: "'Falar Diretamente com um Sócio via WhatsApp Executivo'" },
      { id: "21_3", key: "3", label: "'Solicitar Proposta e Apresentação Personalizada'" },
      { id: "21_4", key: "4", label: "'Preencher Formulário de Diagnóstico de Maturidade'" }
    ]
  },
  {
    id: 22,
    phase: 5,
    phaseName: "Conversão & Leads",
    eyebrow: "Fase 05 &bull; Pergunta 22 de 30",
    title: "Quais ferramentas de CRM ou automação devem ser integradas?",
    subtitle: "Onde os dados dos contatos do site devem ser inseridos automaticamente.",
    placeholder: "Ou liste sistemas internos e canais de recebimento de leads...",
    options: [
      { id: "22_1", key: "1", label: "HubSpot CRM / Salesforce B2B" },
      { id: "22_2", key: "2", label: "RD Station CRM / Pipedrive" },
      { id: "22_3", key: "3", label: "Notificação Direta por E-mail Institucional e WhatsApp" },
      { id: "22_4", key: "4", label: "Webhook / Zapier para Conectar com Planilhas e Ferramentas" }
    ]
  },
  {
    id: 23,
    phase: 5,
    phaseName: "Conversão & Leads",
    eyebrow: "Fase 05 &bull; Pergunta 23 de 30",
    title: "Deseja oferecer materiais ricos ou iscas de qualificação?",
    subtitle: "Ativos gratuitos para captação de dados de potenciais clientes corporativos.",
    placeholder: "Ou comente sobre relatórios setoriais ou calculadoras...",
    options: [
      { id: "23_1", key: "1", label: "Calculadora de ROI ou Eficiência Financeira Interativa" },
      { id: "23_2", key: "2", label: "E-book / Relatório de Tendências de Gestão em PDF" },
      { id: "23_3", key: "3", label: "Quiz de Autoavaliação de Maturidade Corporativa" },
      { id: "23_4", key: "4", label: "Sem Iscas: Apenas Contato Qualificado Direto para Reunião" }
    ]
  },
  {
    id: 24,
    phase: 5,
    phaseName: "Conversão & Leads",
    eyebrow: "Fase 05 &bull; Pergunta 24 de 30",
    title: "Qual o formato de integração do botão flutuante de WhatsApp?",
    subtitle: "Como o canal de WhatsApp corporativo deve se comportar no layout.",
    placeholder: "Ou comente sobre o número de atendimento e horários...",
    options: [
      { id: "24_1", key: "1", label: "Botão Flutuante Sutil no Canto Inferior com Mensagem Prévia" },
      { id: "24_2", key: "2", label: "Apenas Link Estilizado na Barra de Topo e Rodapé" },
      { id: "24_3", key: "3", label: "Janela Popover com Nome e Foto do Especialista de Plantão" },
      { id: "24_4", key: "4", label: "Não Utilizar WhatsApp Flutuante (Preservar Ar Exclusivo)" }
    ]
  },
  {
    id: 25,
    phase: 5,
    phaseName: "Conversão & Leads",
    eyebrow: "Fase 05 &bull; Pergunta 25 de 30",
    title: "Quais campos são cruciais no formulário de contato do site?",
    subtitle: "Equilíbrio entre qualificação do lead corporativo e taxa de preenchimento.",
    placeholder: "Ou descreva perguntas qualificadoras essenciais para o SDR...",
    options: [
      { id: "25_1", key: "1", label: "Enxuto: Nome, E-mail Corporativo, WhatsApp e Empresa" },
      { id: "25_2", key: "2", label: "Qualificado: Nome, Cargo, Faturamento Anual, Desafio Atual" },
      { id: "25_3", key: "3", label: "Em Etapas (Multi-step): Pergunta o objetivo antes do contato" },
      { id: "25_4", key: "4", label: "Direto: Integração direta com Calendly sem formulário prévio" }
    ]
  },

  // FASE 6: ENGENHARIA, INFRAESTRUTURA & PERFORMANCE (26 - 30)
  {
    id: 26,
    phase: 6,
    phaseName: "Engenharia & Infra",
    eyebrow: "Fase 06 &bull; Pergunta 26 de 30",
    title: "Qual é a arquitetura tecnológica e stack preferida para o site?",
    subtitle: "A base técnica de desenvolvimento e hospedagem do ecossistema.",
    placeholder: "Ou mencione preferências técnicas e de infraestrutura...",
    options: [
      { id: "26_1", key: "1", label: "Frontend Moderno Estático (HTML5 / CSS3 / Vanilla JS Otimizado)" },
      { id: "26_2", key: "2", label: "Framework Reativo (Next.js / React com Tailwind e Vercel)" },
      { id: "26_3", key: "3", label: "Plataforma No-Code/Headless (Webflow com Export Limpo)" },
      { id: "26_4", key: "4", label: "WordPress Customizado com Tema Exclusivo e ACF Pro" }
    ]
  },
  {
    id: 27,
    phase: 6,
    phaseName: "Engenharia & Infra",
    eyebrow: "Fase 06 &bull; Pergunta 27 de 30",
    title: "Quais são os requisitos de conformidade jurídica e LGPD?",
    subtitle: "Tratamento de dados pessoais, consentimento e políticas regulatórias.",
    placeholder: "Ou descreva regras de compliance e segurança exigidas...",
    options: [
      { id: "27_1", key: "1", label: "Banner de Cookies Customizado em Vidro com Gestão de Consentimento" },
      { id: "27_2", key: "2", label: "Páginas Dedicadas de Política de Privacidade e Termos de Uso" },
      { id: "27_3", key: "3", label: "Certificado SSL de Alta Criptografia e Proteção DDoS" },
      { id: "27_4", key: "4", label: "Todas as Anteriores em Nível Rigoroso de Conformidade" }
    ]
  },
  {
    id: 28,
    phase: 6,
    phaseName: "Engenharia & Infra",
    eyebrow: "Fase 06 &bull; Pergunta 28 de 30",
    title: "Quais são as metas de velocidade e Core Web Vitals do site?",
    subtitle: "Padrão de performance e tempo de carregamento em mobile e desktop.",
    placeholder: "Ou comente sobre benchmarks de velocidade esperados...",
    options: [
      { id: "28_1", key: "1", label: "Tempo de Carregamento Inferior a 1.2s (Ultra-Rápido)" },
      { id: "28_2", key: "2", label: "Score 95+ no Google PageSpeed em Desktop e Mobile" },
      { id: "28_3", key: "3", label: "Imagens com Compressão WebP/AVIF e Carregamento Sob Demanda" },
      { id: "28_4", key: "4", label: "Otimização Completa com Padrões Globais da Web" }
    ]
  },
  {
    id: 29,
    phase: 6,
    phaseName: "Engenharia & Infra",
    eyebrow: "Fase 06 &bull; Pergunta 29 de 30",
    title: "Qual é o cronograma e prazo estimado desejado para publicação?",
    subtitle: "Horizonte temporal planejado para o lançamento oficial do novo site.",
    placeholder: "Ou especifique eventos de lançamento, datas limite ou metas...",
    options: [
      { id: "29_1", key: "1", label: "Sprint Ágil: Lançamento em até 15 dias corridos" },
      { id: "29_2", key: "2", label: "Prazo Padrão: 30 dias com rodadas completas de validação" },
      { id: "29_3", key: "3", label: "Prazo Extensivo: 45 a 60 dias para projeto aprofundado" },
      { id: "29_4", key: "4", label: "Lançamento em Duas Fases: Landing Page imediata e site completo depois" }
    ]
  },
  {
    id: 30,
    phase: 6,
    phaseName: "Engenharia & Infra",
    eyebrow: "Fase 06 &bull; Pergunta 30 de 30",
    title: "Qual o modelo desejado para manutenção e evolução contínua?",
    subtitle: "Como a consultoria pretende gerenciar atualizações pós-lançamento.",
    placeholder: "Ou comente sobre suporte contínuo, novos cases e evoluções...",
    options: [
      { id: "30_1", key: "1", label: "Suporte Mensal Contínuo com Sprints de Otimização e Novos Cases" },
      { id: "30_2", key: "2", label: "Entrega Final Chave na Mão com Treinamento da Equipe Interna" },
      { id: "30_3", key: "3", label: "Contrato de Manutenção sob Demanda com Banco de Horas" },
      { id: "30_4", key: "4", label: "Evolução Conjunta com Novas Páginas de Lançamentos Futuros" }
    ]
  }
];

// Estado da Aplicação
const appState = {
  currentIndex: 0,
  isOnboarding: true,
  respondentName: "",
  companyName: "InnoBuilders Consulting",
  contact: "",
  answers: {},
  selectedOptions: {}
};

// ===================================================================
// INICIALIZAÇÃO E ARMAZENAMENTO
// ===================================================================
document.addEventListener("DOMContentLoaded", () => {
  loadStorage();
  initDomEvents();
  updateNavUI();
});

function loadStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (data.answers) appState.answers = data.answers;
      if (data.respondentName) appState.respondentName = data.respondentName;
      if (data.companyName) appState.companyName = data.companyName;
      if (data.contact) appState.contact = data.contact;
      if (data.selectedOptions) {
        // Restaurar sets a partir de arrays
        for (const k in data.selectedOptions) {
          appState.selectedOptions[k] = new Set(data.selectedOptions[k]);
        }
      }
      if (typeof data.currentIndex === "number") {
        appState.currentIndex = Math.min(Math.max(0, data.currentIndex), BRIEFING_QUESTIONS.length - 1);
      }
    }
  } catch (err) {
    console.warn("Storage load error:", err);
  }
}

function saveStorage() {
  try {
    const serializedOptions = {};
    for (const k in appState.selectedOptions) {
      serializedOptions[k] = Array.from(appState.selectedOptions[k]);
    }
    const payload = {
      currentIndex: appState.currentIndex,
      isOnboarding: appState.isOnboarding,
      respondentName: appState.respondentName,
      companyName: appState.companyName,
      contact: appState.contact,
      answers: appState.answers,
      selectedOptions: serializedOptions,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    showAutosaveStatus();
  } catch (err) {
    console.warn("Storage save error:", err);
  }
}

function showAutosaveStatus() {
  const lbl = document.getElementById("status-autosave-label");
  if (lbl) {
    lbl.textContent = "Salvo agora";
    setTimeout(() => {
      lbl.textContent = "Salvo localmente";
    }, 1800);
  }
}

// ===================================================================
// EVENTOS DOM
// ===================================================================
function initDomEvents() {
  // Iniciar Briefing no Onboarding
  document.getElementById("btn-start-briefing")?.addEventListener("click", () => {
    appState.isOnboarding = false;
    saveStorage();
    showView("view-quiz");
    renderCurrentQuestion();
    updateNavUI();
  });

  // Clique no logo da barra de navegação para voltar à tela inicial ou topo
  document.getElementById("nav-brand-btn")?.addEventListener("click", () => {
    if (confirm("Deseja voltar para a tela de introdução do briefing?")) {
      appState.isOnboarding = true;
      saveStorage();
      showView("view-onboarding");
      updateNavUI();
    }
  });

  // Botões da Toolbar Inferior
  document.getElementById("btn-step-continue")?.addEventListener("click", () => {
    if (appState.isOnboarding) {
      document.getElementById("btn-start-briefing")?.click();
    } else {
      advanceStep();
    }
  });

  document.getElementById("btn-step-back")?.addEventListener("click", () => {
    goBackStep();
  });

  // Sumário Sheet
  const sheetBackdrop = document.getElementById("sheet-backdrop");
  const sheetTrigger = document.getElementById("btn-open-index");
  const closeSheet = () => {
    if (!sheetBackdrop) return;
    sheetBackdrop.classList.remove("open");
    sheetBackdrop.setAttribute("aria-hidden", "true");
    sheetTrigger?.focus();
  };
  document.getElementById("btn-open-index")?.addEventListener("click", () => {
    renderSheetQuestions();
    sheetBackdrop?.classList.add("open");
    sheetBackdrop?.setAttribute("aria-hidden", "false");
    document.getElementById("btn-close-sheet")?.focus();
  });

  document.getElementById("btn-close-sheet")?.addEventListener("click", () => {
    closeSheet();
  });

  sheetBackdrop?.addEventListener("click", (e) => {
    if (e.target === sheetBackdrop) {
      closeSheet();
    }
  });

  // Abas Segmentadas do Topo (Segmented Phase Pills)
  document.querySelectorAll(".segment-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const phaseNum = parseInt(tab.dataset.phase, 10);
      jumpToPhase(phaseNum);
    });
  });

  // Ações da Tela de Sucesso
  document.getElementById("btn-print-pdf")?.addEventListener("click", () => {
    window.print();
  });

  document.getElementById("btn-copy-summary")?.addEventListener("click", () => {
    copyExecutiveSummary();
  });

  document.getElementById("btn-download-json")?.addEventListener("click", () => {
    downloadJsonData();
  });

  document.getElementById("btn-edit-answers")?.addEventListener("click", () => {
    showView("view-quiz");
    renderCurrentQuestion();
    updateNavUI();
  });

  // Teclado Apple: Atalhos 1-4, Enter, Esc
  document.addEventListener("keydown", handleKeyboardShortcuts);

  // Inicializar visão correta baseada no hash da URL ou no estado
  if (!checkUrlHash()) {
    appState.isOnboarding = true;
    showView("view-onboarding");
    updateNavUI();
  }

  window.addEventListener("hashchange", checkUrlHash);
}

function checkUrlHash() {
  const hash = window.location.hash.toLowerCase();
  if (hash === "#relatorio" || hash === "#success" || hash === "#report") {
    appState.isOnboarding = false;
    showSuccessView();
    return true;
  } else if (hash === "#quiz") {
    appState.isOnboarding = false;
    showView("view-quiz");
    renderCurrentQuestion();
    updateNavUI();
    return true;
  } else if (hash === "#onboarding" || hash === "#intro") {
    appState.isOnboarding = true;
    showView("view-onboarding");
    updateNavUI();
    return true;
  }
  return false;
}

function handleKeyboardShortcuts(e) {
  // Ignorar atalhos de opção quando o usuário está digitando ativamente no textarea
  const isTyping = document.activeElement && document.activeElement.tagName === "TEXTAREA";

  if (e.key === "Escape") {
    const sheet = document.getElementById("sheet-backdrop");
    if (sheet && sheet.classList.contains("open")) {
      sheet.classList.remove("open");
      sheet.setAttribute("aria-hidden", "true");
      document.getElementById("btn-open-index")?.focus();
      return;
    }
    if (!appState.isOnboarding) {
      goBackStep();
    }
    return;
  }

  if (e.key === "Enter" && !e.shiftKey) {
    if (isTyping) {
      // No textarea, Enter simples avança se não for shift+Enter
      e.preventDefault();
      advanceStep();
    } else if (appState.isOnboarding) {
      e.preventDefault();
      document.getElementById("btn-start-briefing")?.click();
    } else {
      e.preventDefault();
      advanceStep();
    }
    return;
  }

  // Teclas numéricas 1, 2, 3, 4 selecionam opções se não estiver no textarea
  if (!isTyping && !appState.isOnboarding) {
    if (["1", "2", "3", "4"].includes(e.key)) {
      const q = BRIEFING_QUESTIONS[appState.currentIndex];
      if (q && q.options) {
        const opt = q.options.find(o => o.key === e.key);
        if (opt) {
          toggleOption(q.id, opt.id, opt.label);
        }
      }
    }
  }
}

// ===================================================================
// RENDERIZAÇÃO DAS PERGUNTAS (VISTA DO QUIZ)
// ===================================================================
function renderCurrentQuestion() {
  const container = document.getElementById("question-render-target");
  if (!container) return;

  const q = BRIEFING_QUESTIONS[appState.currentIndex];
  if (!q) return;

  const currentAnswer = appState.answers[q.id] || "";
  const selectedSet = appState.selectedOptions[q.id] || new Set();

  const html = `
    <div class="question-header">
      <span class="question-phase-badge">${q.eyebrow}</span>
      <h2 class="question-title-text">${q.title}</h2>
      <p class="question-subtitle-text">${q.subtitle}</p>
    </div>

    <!-- LISTA DE OPÇÕES LIMPA -->
    <div class="options-stack">
      ${q.options.map(opt => {
        const isSelected = selectedSet.has(opt.id);
        return `
          <button type="button" class="simple-option-row ${isSelected ? 'selected' : ''}" data-opt-id="${opt.id}" data-opt-label="${escapeHtml(opt.label)}" aria-pressed="${isSelected}">
            <div class="opt-left">
              <span class="opt-key-kbd">${opt.key}</span>
              <span class="opt-label-text">${opt.label}</span>
            </div>
            <div class="opt-check-circle">✓</div>
          </button>
        `;
      }).join('')}
    </div>

    <!-- CAMPO DE DIGITAÇÃO DIRETO -->
    <div class="direct-type-box">
      <div class="direct-type-label">
        <span>Ou digite com suas próprias palavras:</span>
        <span style="font-size:11px; opacity:0.7;">Enter ↵ para avançar</span>
      </div>
      <textarea 
        class="clean-textarea" 
        id="question-custom-textarea" 
        placeholder="${q.placeholder}"
        rows="2"
      >${escapeHtml(currentAnswer)}</textarea>
    </div>
  `;

  container.innerHTML = html;

  // Listeners de clique nas opções
  container.querySelectorAll(".simple-option-row").forEach(card => {
    card.addEventListener("click", () => {
      const optId = card.dataset.optId;
      const optLabel = card.dataset.optLabel;
      toggleOption(q.id, optId, optLabel);
    });
  });

  // Listener no campo de texto
  const textarea = document.getElementById("question-custom-textarea");
  if (textarea) {
    textarea.addEventListener("input", (e) => {
      appState.answers[q.id] = e.target.value;
      saveStorage();
    });
  }

  // Rolar suavemente para o início
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleOption(questionId, optionId, optionLabel) {
  if (!appState.selectedOptions[questionId]) {
    appState.selectedOptions[questionId] = new Set();
  }
  const set = appState.selectedOptions[questionId];
  const q = BRIEFING_QUESTIONS[appState.currentIndex];

  if (set.has(optionId)) {
    set.delete(optionId);
  } else {
    set.add(optionId);
  }

  // Sincronizar com o campo de texto
  const textarea = document.getElementById("question-custom-textarea");
  if (textarea && q) {
    const selectedLabels = q.options.filter(o => set.has(o.id)).map(o => o.label);
    if (selectedLabels.length > 0) {
      const existing = textarea.value.trim();
      const prefix = existing.split(" • Selecionado:")[0].trim();
      textarea.value = prefix && prefix !== selectedLabels.join("; ")
        ? `${prefix} • Selecionado: ${selectedLabels.join("; ")}`
        : selectedLabels.join("; ");
    }
    appState.answers[questionId] = textarea.value;
  }

  saveStorage();
  renderCurrentQuestion();
}

// ===================================================================
// FLUXO DE NAVEGAÇÃO
// ===================================================================
function advanceStep() {
  const q = BRIEFING_QUESTIONS[appState.currentIndex];
  const textarea = document.getElementById("question-custom-textarea");
  if (textarea && q) {
    appState.answers[q.id] = textarea.value.trim();
  }
  saveStorage();

  if (appState.currentIndex < BRIEFING_QUESTIONS.length - 1) {
    appState.currentIndex++;
    renderCurrentQuestion();
    updateNavUI();
  } else {
    showSuccessView();
  }
}

function goBackStep() {
  if (appState.currentIndex > 0) {
    appState.currentIndex--;
    renderCurrentQuestion();
    updateNavUI();
  }
}

function jumpToPhase(phaseNum) {
  const targetIdx = BRIEFING_QUESTIONS.findIndex(q => q.phase === phaseNum);
  if (targetIdx !== -1) {
    appState.isOnboarding = false;
    appState.currentIndex = targetIdx;
    saveStorage();
    showView("view-quiz");
    renderCurrentQuestion();
    updateNavUI();
  }
}

window.jumpToQuestionIndex = function(idx) {
  if (idx >= 0 && idx < BRIEFING_QUESTIONS.length) {
    appState.isOnboarding = false;
    appState.currentIndex = idx;
    saveStorage();
    document.getElementById("sheet-backdrop")?.classList.remove("open");
    showView("view-quiz");
    renderCurrentQuestion();
    updateNavUI();
  }
};

// ===================================================================
// ATUALIZAÇÃO DA INTERFACE DE NAVEGAÇÃO
// ===================================================================
function updateNavUI() {
  const currentQ = BRIEFING_QUESTIONS[appState.currentIndex];
  const total = BRIEFING_QUESTIONS.length;
  const currentNum = appState.currentIndex + 1;
  const percent = Math.round((currentNum / total) * 100);

  // Controle de Modos da Página no Body
  if (appState.isOnboarding) {
    document.body.classList.add("mode-onboarding");
    document.body.classList.remove("mode-quiz", "mode-success");
    return; // No onboarding, a navbar e a toolbar de navegação ficam ocultas
  } else {
    document.body.classList.remove("mode-onboarding");
    document.body.classList.add("mode-quiz");
  }

  // Contador de Passos (1 de 30)
  const counterEl = document.getElementById("nav-step-counter");
  if (counterEl) {
    counterEl.textContent = `${currentNum} de ${total}`;
  }

  // Tag da Fase
  const phaseTagEl = document.getElementById("nav-phase-tag");
  if (phaseTagEl && currentQ) {
    phaseTagEl.textContent = `Fase ${currentQ.phase} • ${currentQ.phaseName}`;
  }

  // Linha de Progresso Fina
  const fillEl = document.getElementById("apple-progress-fill");
  if (fillEl) {
    fillEl.style.width = `${percent}%`;
  }
  document.querySelector(".progress-line-track")?.setAttribute("aria-valuenow", String(currentNum));

  // Botões da Toolbar
  const btnBack = document.getElementById("btn-step-back");
  if (btnBack) {
    btnBack.disabled = appState.currentIndex === 0;
  }

  const btnContinueLabel = document.getElementById("btn-continue-label");
  if (btnContinueLabel) {
    if (appState.currentIndex === total - 1) {
      btnContinueLabel.textContent = "Concluir Briefing";
    } else {
      btnContinueLabel.textContent = "Continuar";
    }
  }
}

function showView(viewId) {
  document.querySelectorAll(".stage-view").forEach(view => {
    view.classList.remove("active");
  });
  document.getElementById(viewId)?.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===================================================================
// RELATÓRIO EXECUTIVO FINAL
// ===================================================================
function showSuccessView() {
  showView("view-success");
  updateNavUI();

  let count = 0;
  BRIEFING_QUESTIONS.forEach(q => {
    if ((appState.answers[q.id] || "").trim().length > 0) count++;
  });

  const countEl = document.getElementById("report-answered-count");
  if (countEl) countEl.textContent = count;

  const treeContainer = document.getElementById("report-answers-tree");
  if (treeContainer) {
    const phases = [
      { id: 1, name: "Fase 01 • Posicionamento Estratégico & Marca" },
      { id: 2, name: "Fase 02 • Público-Alvo, ICP & Personas" },
      { id: 3, name: "Fase 03 • Arquitetura de Informação & Jornada UX" },
      { id: 4, name: "Fase 04 • Conteúdo, Tom de Voz & Ativos" },
      { id: 5, name: "Fase 05 • Estratégia de Conversão & Leads" },
      { id: 6, name: "Fase 06 • Engenharia, Infraestrutura & Performance" }
    ];

    const html = phases.map(phase => {
      const qList = BRIEFING_QUESTIONS.filter(q => q.phase === phase.id);
      return `
        <div class="phase-block">
          <h3 class="phase-block-title">${phase.name}</h3>
          <div class="phase-qa-list">
            ${qList.map(q => {
              const ans = (appState.answers[q.id] || "").trim();
              return `
                <div class="tree-qa-item">
                  <div class="tree-q-label">${q.id.toString().padStart(2, '0')}. ${q.title}</div>
                  <div class="tree-a-val ${ans ? '' : 'empty'}">
                    ${ans ? escapeHtml(ans) : '(Não respondida)'}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }).join('');

    treeContainer.innerHTML = html;
  }

  // Define modo de sucesso no body (oculta toolbar inferior)
  document.body.classList.remove("mode-onboarding", "mode-quiz");
  document.body.classList.add("mode-success");

  // Sincronizar com o backend / banco de dados automaticamente
  syncBriefingWithDatabase();
}

async function syncBriefingWithDatabase() {
  const syncBadge = document.getElementById("sync-status-badge");
  const syncText = document.getElementById("sync-status-text");

  if (syncText) syncText.textContent = "Gravando no Banco de Dados...";

  try {
    const summaryMd = generateExecutiveSummaryMarkdown();
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        respondentName: appState.respondentName || "Cliente InnoBuilders",
        companyName: appState.companyName || "InnoBuilders Consulting",
        contact: appState.contact || "",
        answers: appState.answers,
        totalQuestions: BRIEFING_QUESTIONS.length,
        summaryMarkdown: summaryMd
      })
    });

    const data = await res.json();
    if (data.success) {
      if (syncText) syncText.textContent = `✓ Briefing #${data.submissionId} gravado no banco de dados!`;
      if (syncBadge) {
        syncBadge.style.background = "rgba(0, 186, 196, 0.15)";
        syncBadge.style.borderColor = "#00BAC4";
      }
    } else {
      throw new Error(data.error || "Falha na resposta do servidor");
    }
  } catch (err) {
    console.warn("Backend sync status:", err.message);
    if (syncText) syncText.textContent = "✓ Salvo com segurança neste dispositivo";
  }
}

function generateExecutiveSummaryMarkdown() {
  let doc = `# INNOBUILDERS CONSULTING — BRIEFING DO NOVO SITE\n`;
  doc += `**Padrão Corporativo 487 Digital**\n\n`;
  doc += `- **Cliente / Empresa:** ${appState.companyName || 'InnoBuilders Consulting'}\n`;
  doc += `- **Respondente:** ${appState.respondentName || 'Não Informado'}\n`;
  doc += `- **Contato:** ${appState.contact || 'Não Informado'}\n`;
  doc += `- **Data de Conclusão:** ${new Date().toLocaleString('pt-BR')}\n\n`;
  doc += `---\n\n`;

  BRIEFING_QUESTIONS.forEach(q => {
    const ans = (appState.answers[q.id] || "").trim();
    doc += `### [Fase 0${q.phase}] ${q.id.toString().padStart(2, '0')}. ${q.title}\n`;
    doc += `> **Subtítulo:** ${q.subtitle}\n\n`;
    doc += `**Resposta:** ${ans ? ans : '*(Não respondida)*'}\n\n`;
  });

  doc += `---\n*Documento gerado automaticamente pelo motor de briefings da 487 Digital.*\n`;
  return doc;
}

// ===================================================================
// MODAL: ÍNDICE COMPLETO DAS 30 PERGUNTAS
// ===================================================================
function renderSheetQuestions() {
  const container = document.getElementById("sheet-questions-list");
  if (!container) return;

  const phases = [
    { id: 1, name: "Fase 01 • Posicionamento Estratégico" },
    { id: 2, name: "Fase 02 • Público & ICP" },
    { id: 3, name: "Fase 03 • Arquitetura & UX" },
    { id: 4, name: "Fase 04 • Conteúdo & Tom de Voz" },
    { id: 5, name: "Fase 05 • Conversão & Leads" },
    { id: 6, name: "Fase 06 • Engenharia & Infraestrutura" }
  ];

  const html = phases.map(phase => {
    const list = BRIEFING_QUESTIONS.filter(q => q.phase === phase.id);
    return `
      <div class="modal-phase-header">${phase.name}</div>
      ${list.map(q => {
        const globalIdx = BRIEFING_QUESTIONS.findIndex(item => item.id === q.id);
        const ans = (appState.answers[q.id] || "").trim();
        const isDone = ans.length > 0;
        const isActive = globalIdx === appState.currentIndex;
        return `
          <button type="button" class="modal-q-row ${isActive ? 'active' : ''}" onclick="jumpToQuestionIndex(${globalIdx})" ${isActive ? 'aria-current="step"' : ''}>
            <span class="modal-q-idx">${q.id.toString().padStart(2, '0')}</span>
            <span class="modal-q-text">${q.title}</span>
            <span class="modal-q-done ${isDone ? 'done' : 'pending'}">${isDone ? '✓' : '○'}</span>
          </button>
        `;
      }).join('')}
    `;
  }).join('');

  container.innerHTML = html;
}

// ===================================================================
// UTILITÁRIOS: EXPORTAÇÃO
// ===================================================================
function copyExecutiveSummary() {
  let doc = `========================================================\n`;
  doc += `INNOBUILDERS CONSULTING — BRIEFING DO NOVO SITE\n`;
  doc += `Padrão Executivo de Diagnóstico Estratégico\n`;
  doc += `Data: ${new Date().toLocaleDateString('pt-BR')}\n`;
  doc += `========================================================\n\n`;

  let totalAnswered = 0;
  BRIEFING_QUESTIONS.forEach(q => {
    const ans = (appState.answers[q.id] || "").trim();
    if (ans) totalAnswered++;
    doc += `[FASE ${q.phase.toString().padStart(2, '0')} &bull; ${q.phaseName.toUpperCase()}]\n`;
    doc += `${q.id.toString().padStart(2, '0')}. ${q.title}\n`;
    doc += `RESPOSTA: ${ans ? ans : '(Pendente)'}\n\n`;
  });

  doc += `--------------------------------------------------------\n`;
  doc += `Total: ${totalAnswered} de 30 perguntas respondidas.\n`;
  doc += `InnoBuilders Consulting &bull; 487 Digital\n`;

  navigator.clipboard.writeText(doc).then(() => {
    alert("✓ Relatório do briefing copiado com sucesso para a área de transferência!");
  }).catch(() => {
    alert("Erro ao copiar. Permissão de clipboard necessária.");
  });
}

function downloadJsonData() {
  const data = {
    empresa: "InnoBuilders Consulting",
    documento: "Formulário para Criação de Site da Empresa",
    versao: "1.0 Apple HIG",
    dataGeracao: new Date().toISOString(),
    totalPerguntas: BRIEFING_QUESTIONS.length,
    perguntas: BRIEFING_QUESTIONS.map(q => ({
      id: q.id,
      fase: q.phase,
      faseNome: q.phaseName,
      pergunta: q.title,
      resposta: (appState.answers[q.id] || "").trim()
    }))
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `487D_I_InnoBuilders_Briefing_Site_ESS_${new Date().toISOString().slice(0,10).replace(/-/g,'')}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
