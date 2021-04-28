export const paths = {
  main: {
    dashboard: '/painel',
    mainPage: '/',
    notFound: '/404',
  },
  auth: {
    login:        '/login/',
    profile:     '/perfil',
  },
  tasks: {
    all:        '/tarefas',
    one:        '/tarefas/:id',
    createForm: '/tarefas/formulário',
    updateForm: '/tarefas/formulário/:id',
    create:     '/tarefas', // POST
    update:     '/tarefas/:id', // PUT
  },
  projects: {
    all:        '/projects',
    one:        '/projects/:id',
    createForm: '/projects/formulário',
    updateForm: '/projects/formulário/:id',
    create:     '/projects', // POST
    update:     '/projects/:id', // PUT
  },
  plans: {
    all:        '/planos',
    one:        '/planos/:id',
    createForm: '/planos/formulário',
    updateForm: '/planos/formulário/:id',
    create:     '/planos', // POST
    update:     '/planos/:id', // PUT
  },
  monitors: {
    all:        '/monitores',
    one:        '/monitores/:id',
    createForm: '/monitores/formulário',
    updateForm: '/monitores/formulário/:id',
    create:     '/monitores', // POST
    update:     '/monitores/:id', // PUT
  },
  billings: {
    all:        '/faturamentos',
    one:        '/faturamentos/:id',
    createForm: '/faturamentos/formulário',
    updateForm: '/faturamentos/formulário/:id',
    create:     '/faturamentos', // POST
    update:     '/faturamentos/:id', // PUT
  },
  facilities: {
    all:        '/edificios',
    one:        '/edificios/:id',
    createForm: '/edificios/formulário',
    updateForm: '/edificios/formulário/:id',
    create:     '/edificios', // POST
    update:     '/edificios/:id', // PUT
  },
  appliances: {
    all:        '/equipamentos',
    one:        '/equipamentos/:id',
    createForm: '/equipamentos/formulário',
    updateForm: '/equipamentos/formulário/:id',
    create:     '/equipamentos', // POST
    update:     '/equipamentos/:id', // PUT
  },
  depots: {
    all:        '/depositos',
    one:        '/depositos/:id',
    createForm: '/depositos/formulário',
    updateForm: '/depositos/formulário/:id',
    create:     '/depositos', // POST
    update:     '/depositos/:id', // PUT
  },
  receipts: {
    all:        '/notasfiscais',
    one:        '/notasfiscais/:id',
    createForm: '/notasfiscais/formulário',
    updateForm: '/notasfiscais/formulário/:id',
    create:     '/notasfiscais', // POST
    update:     '/notasfiscais/:id', // PUT
  },
  companies: {
    all:        '/empresas',
    one:        '/empresas/:id',
    createForm: '/empresas/formulário',
    updateForm: '/empresas/formulário/:id',
    create:     '/empresas', // POST
    update:     '/empresas/:id', // PUT
  },
  teams: {
    all:        '/equipes',
    one:        '/equipes/:id',
    createForm: '/equipes/formulário',
    updateForm: '/equipes/formulário/:id',
    create:     '/equipes', // POST
    update:     '/equipes/:id', // PUT
  },
  users: {
    all:        '/usuarios',
    one:        '/usuarios/:id',
    createForm: '/usuarios/formulário',
    updateForm: '/usuarios/formulário/:id',
    create:     '/usuarios', // POST
    update:     '/usuarios/:id', // PUT
  },
};