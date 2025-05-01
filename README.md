# UNIFOR Academic Administration System

Sistema web completo para administração acadêmica da UNIFOR, com gerenciamento de alunos, professores, coordenadores e disciplinas, protegido por autenticação Keycloak e com arquitetura moderna baseada em Angular + Quarkus + Docker.

## 📦 Tecnologias Utilizadas

- 🔙 **Backend:** Java 17 + Quarkus
- 🔐 **Autenticação:** Keycloak (Realm: `unifor`)
- 🔁 **Banco de Dados:** PostgreSQL
- 🌐 **Frontend:** Angular 15+
- 🐳 **Containerização:** Docker + Docker Compose

---

## 📁 Estrutura do Projeto

```bash
unifor-app/
├── backend/                # Projeto Quarkus com API REST
├── frontend/               # Projeto Angular (SPA)
├── keycloak/
│   └── unifor-realm.json   # Realm com usuários, roles e clients
├── docker-compose.yml      # Orquestra todos os serviços
▶️ Como Rodar o Projeto
🔧 Pré-requisitos
Docker + Docker Compose

Java 17 + Maven (se for rodar o backend localmente)

Node.js 18+ e Angular CLI (se for rodar o frontend localmente)

🚀 Passo a passo com Docker
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/unifor-app.git
cd unifor-app
Compile o backend:

bash
Copiar
Editar
cd backend
./mvnw clean package -Dquarkus.package.type=uber-jar
cd ..
Suba os containers:

bash
Copiar
Editar
docker compose up --build
Acesse:

🔐 Keycloak Admin: http://localhost:8080

Usuário: admin | Senha: admin

Realm: unifor

🌐 Frontend Angular: http://localhost:4200

⚙️ Backend Quarkus: http://localhost:8081

🔐 Usuários e Roles de Teste
Usuário	Senha	Papel (role)
admin	admin	admin
coordinator	coordinator	coordinator
professor	professor	professor
student	student	student

✅ Funcionalidades
🔐 Login integrado com Keycloak

👥 Gerenciamento de usuários (CRUD)

🎓 Cadastro de cursos

📚 Cadastro de disciplinas com curso e semestre

📅 Cadastro de semestres (ano + período)

📘 Montagem da matriz curricular

👁️ Visualização das permissões por papel (admin, coordinator, etc.)

🛠️ Backend Quarkus
API REST completa com validação

Controle de acesso por @RolesAllowed

Integração com Keycloak OAuth2

Banco de dados PostgreSQL

Panache ORM

💻 Frontend Angular
SPA com Angular 15+

Login automático com Keycloak JS

Interceptor de token JWT

Guards de rota por role

Formulários reativos para cadastro

Rotas protegidas e controle de acesso visual

🐳 Docker Compose
Contêineres incluídos:

Serviço	Porta Local
Keycloak	8080
Backend	8081
Frontend	4200
PostgreSQL	5432

📄 Importação do Realm no Keycloak
O arquivo keycloak/unifor-realm.json é importado automaticamente ao subir o container Keycloak via:

yaml
Copiar
Editar
command: start-dev --import-realm
📌 Observações Finais
Este projeto foi desenvolvido como parte de um desafio técnico da UNIFOR.

Cumpre todos os requisitos funcionais e técnicos exigidos.

Está preparado para ambientes de desenvolvimento e testes.

✨ Autor
Desenvolvido por [Karoline Bezerra ].

