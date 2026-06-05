    const cur = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cur.style.left = mx + 'px'; cur.style.top = my + 'px'; });
    (function animRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(animRing);
    })();
    document.querySelectorAll('a,button,.project-card,.skill-card').forEach(el => {
      el.addEventListener('mouseenter', () => { cur.style.width = '22px'; cur.style.height = '22px'; ring.style.width = '60px'; ring.style.height = '60px'; ring.style.borderColor = 'rgba(139,92,246,0.8)'; });
      el.addEventListener('mouseleave', () => { cur.style.width = '14px'; cur.style.height = '14px'; ring.style.width = '40px'; ring.style.height = '40px'; ring.style.borderColor = 'rgba(139,92,246,0.5)'; });
    });

    {/*── Hero headline word-by-word reveal ──────────────────────── */}
    const headlines = {
      pt: 'Eu desenho e desenvolvo produtos<br>que movem negócios.',
      en: 'I design and build products that move businesses forward.'
    };

    const translations = {
      pt: {
        'nav.about': 'Sobre',
        'nav.exp': 'Experiência',
        'nav.edu': 'Formação',
        'nav.skills': 'Skills e Cursos',
        'nav.projects': 'Projetos',
        'nav.contact': 'Contato',
        'hero.title': 'UX Designer & Data Analyst · São Paulo',
        'hero.cta1': 'Ver Projetos',
        'hero.cta2': 'Entrar em Contato',
        'tag1': 'Product Design',
        'tag2': 'Data Analytics',
        'scroll': 'scroll',
        'about.label': 'Sobre mim',
        'about.title': 'Design com <strong>propósito</strong>.<br> Dados com <strong>impacto</strong>.',
        'about.p1': ' Profissional em transição para UX/UI, unindo experiência em <strong>análise de dados, governança e melhoria de processos</strong> com foco em usabilidade e entendimento do usuário.',
        'about.p2': 'Formanda em Sistemas de Informação com técnico em Desenvolvimento de Sistemas, minha abordagem combina análise, criatividade e inovação, explorando a <strong>interseção entre dados e design</strong> para desenvolver soluções mais intuitivas e impactantes.',
        'stat1': 'Para entender problemas',
        'stat2': 'Para criar soluções',
        'stat3': 'Para gerar eficiência',
        'stat4': 'para validar decisões',
        'stat5': 'para impulsionar resultados',
        'stat6': 'Pessoas no centro de tudo',
        'exp.label': 'Trajetória',
        'exp.title': 'Experiência <strong>Profissional</strong>',
        'exp1.date': 'Ago 2025 – Atual',
        'exp1.role': 'Associate I — Análise de Dados',
        'exp1.b1': 'Projetos de governança, qualidade e rastreabilidade de dados, garantindo organização e padronização de informações críticas.',
        'exp2.b3': 'Precificação de ativos financeiros e uso do terminal Bloomberg para suporte a atividades de tesouraria.',
        'exp1.b3': 'Estruturação de fluxos, mapeamento de processos e análise de oportunidades de melhoria contínua.',
        'exp2.date': 'Fev 2024 – Ago 2025',
        'exp2.role': 'Estagiária — Análise de Dados',
        'exp2.b1': 'Desenvolvimento de dashboards e relatórios com comunicação visual objetiva, usando Power BI e Workiva.',
        'exp2.b2': 'Documentação de fluxos, processos e requisitos técnicos para times multidisciplinares.',
        'exp2.b4': 'Precificação de ativos financeiros e uso do terminal Bloomberg para suporte a atividades de tesouraria.',
        'exp3.date': 'Jan 2019 – Jan 2024',
        'exp3.role': 'Operadora de Caixa',
        'exp3.b1': 'Atendimento direto ao cliente, desenvolvendo empatia, comunicação clara e resolução rápida de problemas — base da minha visão centrada no usuário.',
        'exp3.b2': 'Organização de processos internos e suporte a clientes em diferentes contextos e perfis.',
        'edu.label': 'Formação',
        'edu.title': 'Formação <strong>Acadêmica</strong>',
        'edu1.date': '2023 – atual',
        'edu1.role': 'Bacharelado em Sistemas de Informação',
        'edu1.company': 'São Paulo Tech School - 8° Semestre',
        'edu1.b1': 'Previsão de conclusão em dezembro de 2026',
        'edu1.b2': ' +6 Linguagens de programação, Análise de Dados, Sistemas Operacionais, Gestão de Projetos, Modelagem de processos.',
        'edu1.b3': ' +2 Semestres de estudo intensivo de Experiência do Usuário: UX/UI, Figma, Design Thinking, Wireframing, Prototipagem, Design System, UX Research, Personas entre outros. ',
        'edu1.b4': ' +4 Projetos anuais completos, incluindo TCC, feitos desde a ideação até a implementação. ',
        'edu2.date': '2020 – 2022',
        'edu2.role': 'Técnico em Desenvolvimento de Sistemas',
        'edu2.company': 'ETEC Cidade Tiradentes - Centro Paula Souza',
        'edu2.b1': 'Formação técnica com fundamentos em lógica de programação, prototipação e experiência do usuário.',
        'edu2.b2': 'Desenvolvimento web com HTML, CSS, JavaScript e banco de dados relacional',
        'edu2.b3': 'Trabalho de Conclusão de Curso (TCC): Desenvolvimento de aplicativo, site e sistema embarcado. Finalizado com nota máxima.',
        'skills.label': 'Competências',
        'skills.title': 'Hard Skills &amp; <strong>Ferramentas</strong>',
        'sk1.name': 'UI Design',
        'sk1.desc': 'Construção de interfaces com componentização, design system, responsividade e atenção à hierarquia visual para comunicar com clareza.',
        'sk2.name': 'UX Research',
        'sk2.desc': 'Entrevistas com usuários, testes de usabilidade, proto-personas e análise de dados qualitativos para embasar decisões de design.',
        'sk3.name': 'Product Thinking',
        'sk3.desc': 'Análise de problemas sob a perspectiva de negócio, usuário e tecnologia para desenvolver produtos digitais com propósito e impacto.',
        'sk4.name': 'Prototipação',
        'sk4.desc': 'Wireframes, protótipos navegáveis em baixa e alta fidelidade, fluxos de navegação e microinterações que validam hipóteses rapidamente.',
        'sk5.name': 'Dados &amp; Analytics',
        'sk5.desc': 'SQL, Python, R e ETL aplicados à análise de dados e governança — diferencial que transforma métricas em decisões de design.',
        'sk6.name': 'Front-end Development',
        'sk6.desc': 'Desenvolvimento de interfaces modernas e acessíveis, transformando protótipos em experiências funcionais e responsivas.',
        'soft.label': 'Soft Skills',
        'soft.title': 'Competências <strong>Interpessoais</strong>',
        'soft1': 'Comunicação Estratégica',
        'soft2': 'Trabalho em equipe',
        'soft3': 'Empatia',
        'soft4': 'Resolução de problemas',
        'soft5': 'Pensamento Crítico',
        'soft6': 'Adaptabilidade',
        'soft7': 'Colaboração Multidisciplinar',
        'soft8': 'Aprendizado Contínuo',
        'soft9': 'Storytelling Estratégico',
        'soft10': 'Liderança Colaborativa',
        'soft11': 'Tomada de Decisão Baseada em Evidências',
        'courses.label': 'Cursos',
        'courses.title': 'Cursos <strong>Extra-Curriculares</strong>',
        'course1.name': 'Transformação Digital, UX, Negócios, Projetos e Marketing',
        'course1.provider': '<strong>{Reprograma}</strong>',
        'course1.issued': '<strong>Emitida em: </strong>Agosto de 2022',
        'course2.name': 'Cultura, Transformação Digital e Resolução de Problemas',
        'course2.provider': '<strong>{Reprograma}</strong>',
        'course2.issued': '<strong>Emitida em: </strong>Julho de 2022',
        'course3.name': 'Ética no Desenvolvimento de Sistemas',
        'course3.provider': '<strong>Fundação Bradesco</strong>',
        'course3.issued': '<strong>Emitida em: </strong>Dezembro de 2022',
        'course4.name': 'Gestão de Infraestrutura de TI',
        'course4.provider': '<strong>FIAP</strong>',
        'course4.issued': '<strong>Emitida em: </strong>Fevereiro de 2024',
        'course5.name': 'IA: Explorando o Potencial da Inteligência Artificial Generativa',
        'course5.provider': '<strong>Alura</strong>',
        'course5.issued': '<strong>Emitida em: </strong>Novembro de 2025',
        'course6.name': 'SQL para Análise de Dados: Do Básico ao Avançado',
        'course6.provider': '<strong>Udemy</strong>',
        'course6.issued': '<strong>Emitida em: </strong>Dezembro de 2025',
        'proj.label': 'Portfólio',
        'proj.title': 'Projetos <strong>Selecionados</strong>',
        'proj1.thumb': 'E-commerce + Dashboard',
        'proj1.name': 'ZKFOOD - Pedidos de Comida Online',
        'proj1.desc': 'Plataforma de pedidos online desenvolvida para otimizar a comunicação entre clientes, atendentes e cozinha. O projeto teve foco em experiência do usuário, acessibilidade e eficiência operacional, combinando design responsivo, integração com CRM e dashboards analíticos para apoiar a tomada de decisão.',
        'proj2.thumb': 'People Operations + Dashboard',
        'proj2.name': 'TrackPoint - Gestão Unificada da Jornada de Trabalho',
        'proj2.desc': 'Plataforma desenvolvida para centralizar o controle de jornada, horas extras e alocação em projetos. A solução combina experiência do usuário, visualização de dados e monitoramento em tempo real para apoiar gestores na tomada de decisões, reduzir riscos operacionais e aumentar a eficiência dos processos internos.',
        'proj3.thumb': 'Internet of Things',
        'proj3.name': 'Automate — Gerenciamento de plantas IOT',
        'proj3.desc': 'Sistema IoT desenvolvido para monitorar variáveis ambientais em plantações, como umidade e temperatura. A solução automatiza a irrigação com base em dados coletados em tempo real e disponibiliza informações por meio de um aplicativo, apoiando o controle de qualidade e a tomada de decisão no cultivo.',
        'proj4.thumb': 'System Monitoring + Dashboard',
        'proj4.name': 'GuardIAn - Monitoramento com IA',
        'proj4.desc': 'Plataforma de proteção digital que utiliza Inteligência Artificial para monitorar e classificar conteúdos sensíveis acessados por crianças e adolescentes. A solução combina análise contextual, experiência do usuário e visualização de dados para apoiar responsáveis em uma navegação mais segura.',
        'tag.programming': 'Programação',
        'tag.uxWriting': 'UX Writing',
        'tag.responsiveDesign': 'Design Responsivo',
        'tag.designThinking': 'Design Thinking',
        'tag.embeddedSystems': 'Sistemas Embarcados',
        'tag.inProgress': 'Em andamento',
        'tag.tcc': 'TCC',
        'btn.figma': 'Ver no Figma',
        'btn.github': 'GitHub',
        'contact.label': 'Contato',
        'contact.headline': 'Vamos criar algo <em style="font-style:italic;background:var(--grad-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">incrível</em> juntos?',
        'contact.sub': 'Estou aberta a oportunidades em UX Design, Product Design e áreas correlatas. Adoro conversas sobre dados, design e impacto real no usuário.',
        'contact.email': 'Enviar e-mail',
        'contact.download': 'Baixar currículo',
        'footer.copy': '© 2026 Simone Lopes· Desenvolvido com muita dedicação.'
      },
      en: {
        'nav.about': 'About',
        'nav.exp': 'Experience',
        'nav.edu': 'Education',
        'nav.skills': 'Skills & Courses',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.title': 'UX Designer & Data Analyst · São Paulo',
        'hero.cta1': 'View Projects',
        'hero.cta2': 'Get in Touch',
        'tag1': 'Product Design',
        'tag2': 'Data Analytics',
        'scroll': 'scroll',
        'about.label': 'About me',
        'about.title': 'Design with <strong>purpose</strong>.<br> Data with <strong>impact</strong>.',
        'about.p1': 'Professional transitioning into UX/UI, combining experience in <strong>data analysis, governance, and process improvement</strong> with a focus on usability and user understanding.',
        'about.p2': 'Graduating in Information Systems with a technical background in Systems Development, my approach combines analysis, creativity and innovation, exploring the <strong>intersection between data and design</strong> to build more intuitive and impactful solutions.',
        'stat1': 'To understand problems',
        'stat2': 'To create solutions',
        'stat3': 'To generate efficiency',
        'stat4': 'To validate decisions',
        'stat5': 'To drive results',
        'stat6': 'People at the center of everything',
        'exp.label': 'Career',
        'exp.title': 'Professional <strong>Experience</strong>',
        'exp1.date': 'Aug 2025 – Present',
        'exp1.role': 'Associate I — Data Analysis',
        'exp1.b1': 'Governance, quality and traceability projects, ensuring organization and standardization of critical information.',
        'exp2.b3': 'Pricing financial assets and using the Bloomberg terminal to support treasury activities.',
        'exp1.b3': 'Structuring flows, mapping processes and analyzing continuous improvement opportunities.',
        'exp2.date': 'Feb 2024 – Aug 2025',
        'exp2.role': 'Intern — Data Analysis',
        'exp2.b1': 'Development of dashboards and reports with objective visual communication, using Power BI and Workiva.',
        'exp2.b2': 'Documentation of flows, processes and technical requirements for multidisciplinary teams.',
        'exp2.b4': 'Pricing financial assets and using the Bloomberg terminal to support treasury activities.',
        'exp3.date': 'Jan 2019 – Jan 2024',
        'exp3.role': 'Cashier',
        'exp3.b1': 'Direct customer service, developing empathy, clear communication and rapid problem solving — the foundation of my user-centered vision.',
        'exp3.b2': 'Organizing internal processes and supporting customers in different contexts and profiles.',
        'edu.label': 'Education',
        'edu.title': 'Academic <strong>Background</strong>',
        'edu1.date': '2023 – present',
        'edu1.role': 'Bachelor’s in Information Systems',
        'edu1.company': 'São Paulo Tech School - 8th Semester',
        'edu1.b1': 'Expected graduation in December 2026',
        'edu1.b2': '+6 programming languages, Data Analysis, Operating Systems, Project Management, Process Modeling.',
        'edu1.b3': '+2 semesters of intensive User Experience study: UX/UI, Figma, Design Thinking, Wireframing, Prototyping, Design Systems, UX Research, Personas among others.',
        'edu1.b4': '+4 annual projects completed, including TCC, from ideation to implementation.',
        'edu2.date': '2020 – 2022',
        'edu2.role': 'Technical Degree in Systems Development',
        'edu2.company': 'ETEC Cidade Tiradentes - Centro Paula Souza',
        'edu2.b1': 'Technical training with fundamentals in programming logic, prototyping and user experience.',
        'edu2.b2': 'Web development with HTML, CSS, JavaScript and relational databases.',
        'edu2.b3': 'Final Course Work (TCC): App, website and embedded system development. Completed with highest grade.',
        'skills.label': 'Skills',
        'skills.title': 'Hard Skills &amp; <strong>Tools</strong>',
        'sk1.name': 'UI Design',
        'sk1.desc': 'Building interfaces with componentization, design systems, responsiveness and attention to visual hierarchy to communicate clearly.',
        'sk2.name': 'UX Research',
        'sk2.desc': 'User interviews, usability tests, proto-personas and qualitative data analysis to ground design decisions.',
        'sk3.name': 'Product Thinking',
        'sk3.desc': 'Problem analysis from business, user and technology perspectives to develop digital products with purpose and impact.',
        'sk4.name': 'Prototyping',
        'sk4.desc': 'Wireframes, navigable low- and high-fidelity prototypes, navigation flows and microinteractions that validate hypotheses quickly.',
        'sk5.name': 'Data &amp; Analytics',
        'sk5.desc': 'SQL, Python, R and ETL applied to data analysis and governance — a differentiator that turns metrics into design decisions.',
        'sk6.name': 'Front-end Development',
        'sk6.desc': 'Modern and accessible interface development, transforming prototypes into functional and responsive experiences.',
        'soft.label': 'Soft Skills',
        'soft.title': 'Interpersonal <strong>Skills</strong>',
        'soft1': 'Strategic Communication',
        'soft2': 'Teamwork',
        'soft3': 'Empathy',
        'soft4': 'Problem Solving',
        'soft5': 'Critical Thinking',
        'soft6': 'Adaptability',
        'soft7': 'Multidisciplinary Collaboration',
        'soft8': 'Continuous Learning',
        'soft9': 'Strategic Storytelling',
        'soft10': 'Collaborative Leadership',
        'soft11': 'Evidence-Based Decision Making',
        'courses.label': 'Courses',
        'courses.title': 'Extra-Curricular <strong>Courses</strong>',
        'course1.name': 'Digital Transformation, UX, Business, Project Management and Marketing',
        'course1.provider': '<strong>{Reprograma}</strong>',
        'course1.issued': '<strong>Issued:</strong> August 2022',
        'course2.name': 'Culture, Digital Transformation and Problem Solving',
        'course2.provider': '<strong>{Reprograma}</strong>',
        'course2.issued': '<strong>Issued:</strong> July 2022',
        'course3.name': 'Ethics in Systems Development',
        'course3.provider': '<strong>Fundação Bradesco</strong>',
        'course3.issued': '<strong>Issued:</strong> December 2022',
        'course4.name': 'IT Infrastructure Management',
        'course4.provider': '<strong>FIAP</strong>',
        'course4.issued': '<strong>Issued:</strong> February 2024',
        'course5.name': 'AI: Exploring the Potential of Generative Artificial Intelligence',
        'course5.provider': '<strong>Alura</strong>',
        'course5.issued': '<strong>Issued:</strong> November 2025',
        'course6.name': 'SQL for Data Analysis: From Beginner to Advanced',
        'course6.provider': '<strong>Udemy</strong>',
        'course6.issued': '<strong>Issued:</strong> December 2025',
        'proj.label': 'Portfolio',
        'proj.title': 'Selected <strong>Projects</strong>',
        'proj1.thumb': 'E-commerce + Dashboard',
        'proj1.name': 'ZKFOOD - Online Food Orders',
        'proj1.desc': 'Online ordering platform developed to optimize communication between customers, attendants and the kitchen. The project focused on user experience, accessibility and operational efficiency, combining responsive design, CRM integration and analytics dashboards to support decision-making.',
        'proj2.thumb': 'People Operations + Dashboard',
        'proj2.name': 'TrackPoint - Unified Work Journey Management',
        'proj2.desc': 'Platform developed to centralize timekeeping, overtime and project allocation. The solution combines user experience, data visualization and real-time monitoring to support managers in decision-making, reduce operational risk and increase internal process efficiency.',
        'proj3.thumb': 'Internet of Things',
        'proj3.name': 'Automate — IoT Plant Management',
        'proj3.desc': 'IoT system developed to monitor environmental variables in plantations, such as humidity and temperature. The solution automates irrigation based on real-time data and provides information through an app, supporting quality control and decision-making in cultivation.',
        'proj4.thumb': 'System Monitoring + Dashboard',
        'proj4.name': 'GuardIAn - AI Monitoring',
        'proj4.desc': 'Digital protection platform that uses Artificial Intelligence to monitor and classify sensitive content accessed by children and adolescents. The solution combines contextual analysis, user experience and data visualization to help guardians navigate more safely.',
        'tag.programming': 'Programming',
        'tag.uxWriting': 'UX Writing',
        'tag.responsiveDesign': 'Responsive Design',
        'tag.designThinking': 'Design Thinking',
        'tag.embeddedSystems': 'Embedded Systems',
        'tag.inProgress': 'In Progress',
        'tag.tcc': 'Capstone',
        'btn.figma': 'View in Figma',
        'btn.github': 'GitHub',
        'contact.label': 'Contact',
        'contact.headline': 'Let’s create something <em style="font-style:italic;background:var(--grad-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">amazing</em> together?',
        'contact.sub': 'I’m open to opportunities in UX Design, Product Design and related areas. I love conversations about data, design and real user impact.',
        'contact.email': 'Send email',
        'contact.download': 'Download resume',
        'footer.copy': '© 2026 Simone Lopes · Developed with care.'
      }
    };

    function updateLanguage(lang) {
      if (!translations[lang]) return;
      document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const value = translations[lang][key];
        if (value !== undefined) {
          el.innerHTML = value;
        }
      });
      buildHeadline(lang);
      setTimeout(revealHeadline, 40);
      const langBtn = document.getElementById('lang-btn');
      if (langBtn) {
        langBtn.textContent = lang === 'en' ? 'EN' : 'PT';
        langBtn.setAttribute('aria-label', lang === 'en' ? 'Idioma atual: Inglês' : 'Idioma atual: Português');
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      updateLanguage('pt');
      const langBtn = document.getElementById('lang-btn');
      if (langBtn) {
        langBtn.addEventListener('click', () => {
          const currentLang = document.documentElement.lang === 'en' ? 'en' : 'pt';
          updateLanguage(currentLang === 'en' ? 'pt' : 'en');
        });
      }
      setTimeout(revealHeadline, 800);
    });

    function buildHeadline(lang) {
      const el = document.getElementById('headline-text');
      if (!el || !headlines[lang]) return;
      const text = headlines[lang];
      let delay = 0;
      const html = text
        .split(/(<br\s*\/?>)/gi)
        .map(token => {
          if (/^<br\s*\/?>$/i.test(token)) return '<br>';
          return token
            .split(' ')
            .map(word => {
              if (!word) return '';
              const span = `<span class="reveal-word" style="transition-delay:${delay}ms">${word}</span>`;
              delay += 60;
              return span;
            })
            .join(' ');
        })
        .join('');
      el.innerHTML = html;
    }

    function revealHeadline() {
      document.querySelectorAll('.hero-headline .reveal-word').forEach(w => w.classList.add('visible'));
    }

    /* ── Scroll-triggered fade-up ───────────────────────────────── */
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    /* ── Nav scroll effect ──────────────────────────────────────── */
    window.addEventListener('scroll', () => {
      document.getElementById('navbar').style.boxShadow =
        window.scrollY > 40 ? '0 4px 40px rgba(0,0,0,0.4)' : 'none';
    });

    /* ── Mobile menu ────────────────────────────────────────────── */
    function toggleMenu() {
      document.getElementById('ham').classList.toggle('open');
      document.getElementById('mob-menu').classList.toggle('open');
    }
    function closeMobile() {
      document.getElementById('ham').classList.remove('open');
      document.getElementById('mob-menu').classList.remove('open');
    }
    