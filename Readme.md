### README.md

## 📚 Apostila Interativa de LIBRAS

Este projeto é uma apostila interativa da Língua Brasileira de Sinais (LIBRAS), criada com React e conectada a um banco de dados Supabase. Ele permite a visualização dinâmica de sinais e um painel de administração para gerenciar o conteúdo.

### ✨ Funcionalidades

  * **Conteúdo Dinâmico:** Os sinais e categorias são carregados diretamente do banco de dados.
  * **Navegação por Categoria:** Filtre os sinais por categorias específicas, como "Alfabeto", "Verbos", "Informática", etc.
  * **Busca por Sinais:** Um campo de busca permite encontrar rapidamente os sinais desejados.
  * **Painel de Administração (`/admin`):** Uma interface simples para adicionar novas categorias e novos sinais ao banco de dados.
  * **Componentes Reutilizáveis:** O projeto utiliza uma arquitetura de componentes para garantir a modularidade e facilitar a manutenção do código.

### 💻 Tecnologias Utilizadas

  * **React:** Biblioteca JavaScript para a construção da interface de usuário.
  * **Supabase:** Backend-as-a-Service (BaaS) para o banco de dados e autenticação.
  * **React Router DOM:** Para gerenciar as rotas da aplicação (páginas principal e de administração).
  * **CSS:** Para a estilização e design responsivo.

### 📂 Estrutura do Projeto

A estrutura de pastas segue as boas práticas do React, com componentes e lógicas bem divididos.

```
/proj_libras_react
├── public/                # Arquivos estáticos (index.html, etc.)
├── src/
│   ├── api/               # Lógica de conexão com o Supabase
│   ├── components/
│   │   ├── admin/         # Componentes do painel de administração
│   │   ├── common/        # Componentes reutilizáveis em todo o projeto
│   │   └── pages/         # Páginas da aplicação
│   ├── hooks/             # Hooks customizados, como o useFetchSigns
│   └── styles/            # Arquivos CSS
└── package.json           # Dependências e scripts
```

### ⚙️ Configuração do Ambiente

1.  **Configurar o Supabase:**

      * Crie um novo projeto no [Supabase](https://supabase.io/).
      * Vá para a seção de **SQL Editor** e execute o script SQL para criar as tabelas `categories` e `signs`.
      * Após a criação das tabelas, habilite o Row Level Security (RLS) e crie as políticas de acesso para leitura pública e escrita autenticada, conforme o script SQL fornecido.

2.  **Configurar Variáveis de Ambiente:**

      * Na raiz do seu projeto, crie um arquivo chamado `.env`.
      * Copie a **URL do Projeto** e a **Chave `anon`** do seu projeto Supabase e adicione-as ao arquivo `.env` da seguinte forma:

    <!-- end list -->

    ```
    REACT_APP_SUPABASE_URL=sua_url_supabase
    REACT_APP_SUPABASE_ANON_KEY=sua_anon_key_supabase
    ```

### 🚀 Como Rodar

1.  **Clonar o repositório** e navegar até a pasta do projeto.
2.  **Instalar as dependências**:
    ```bash
    npm install
    ```
3.  **Iniciar a aplicação**:
    ```bash
    npm start
    ```

A aplicação será iniciada no seu navegador em `http://localhost:3000`.