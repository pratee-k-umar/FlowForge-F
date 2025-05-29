# **Next.js Frontend**

> **A user-friendly dashboard** to manage projects, configure databases, and access dynamic APIs.

## ✨ Key Features

* 🗂️ **Project Management** – Create and list backend projects.
* 🔗 **Database Connection** – Connect cloud databases (MongoDB, Postgres, MySQL) via a simple URI.
* 🚀 **Dynamic APIs** – View and test live GraphQL and REST endpoints.
* 🛠️ **GraphiQL Playground** – Integrated GraphQL query testing.
* 📡 **REST API Console** – Access REST CRUD routes per project.

## 📁 Folder Structure

```
pages/
├── projects/
│   ├── index.tsx          # List projects
│   ├── new.tsx            # Create project form
│   └── [id].tsx           # Project detail & API access
lib/
└── apollo.ts              # Apollo Client setup
└── graphql/queries.ts     # GraphQL queries & mutations
components/
└── GraphiQL.tsx           # Optional: embedded GraphiQL
```

## 🚀 Getting Started

### 1️⃣ Clone & Install

```bash
git clone https://github.com/your-repo/frontend.git
cd frontend
npm install
```

### 2️⃣ Configure `.env.local`

```dotenv
NEXT_PUBLIC_API_GRAPHQL=http://localhost:4000/api/graphql
NEXT_PUBLIC_API_REST=http://localhost:4000/api
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000/projects` to start using the dashboard.

## 🌐 Main Pages

### `/projects`

* Lists all projects with basic details.
* Link to create a new project.

### `/projects/new`

* Simple form to create a new project.

### `/projects/[id]`

* Project detail view with:

  * Live GraphQL endpoint (clickable)
  * Database connection form
  * Embedded GraphiQL playground
  * REST endpoint summary and usage

## 🔗 Backend Integration

* GraphQL API requests via **Apollo Client**.
* REST calls via **React Query** or native `fetch`.
* Backend URL configured via `NEXT_PUBLIC_API_GRAPHQL` and `NEXT_PUBLIC_API_REST` in `.env.local`.

## 🛠️ Tech Stack

* **Next.js** – React framework with server-side rendering
* **Apollo Client** – GraphQL client
* **React Query** – REST data fetching & caching
* **TypeScript** – For type safety and scalability
* **Optional**: Tailwind CSS, Material UI, or your preferred styling framework.

## 📚 Extending the Project

* 🔒 Add user authentication (NextAuth.js, Firebase Auth)
* 🎨 Build a visual schema designer for defining APIs
* 📈 Include real-time metrics and logs per project
* 🔄 Add WebSocket or GraphQL subscriptions for live updates

## 📢 Developer Tips

* Make sure the API URLs in `.env.local` match your backend deployment.
* Test GraphQL endpoints with an embedded **GraphiQL** or an external tool.
* Use Postman or your browser to check REST endpoints.
