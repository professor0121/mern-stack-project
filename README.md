
# my files structure
📦 mern-stack-project
 ┣ 📂 components      # Reusable UI components
 ┃ ┣ 📜 Navbar.js
 ┃ ┣ 📜 Footer.js
 ┃ ┗ 📜 PostCard.js
 ┣ 📂 pages
 ┃ ┣ 📂 api          # Backend API routes
 ┃ ┃ ┣ 📂 auth
 ┃ ┃ ┃ ┣ 📜 login.js
 ┃ ┃ ┃ ┗ 📜 register.js
 ┃ ┃ ┣ 📂 users
 ┃ ┃ ┃ ┣ 📜 index.js
 ┃ ┃ ┃ ┗ 📜 [id].js
 ┃ ┃ ┗ 📂 posts
 ┃ ┃ ┃ ┣ 📜 index.js
 ┃ ┃ ┃ ┗ 📜 [id].js
 ┃ ┣ 📜 _app.js       # Global layout, styles, context
 ┃ ┣ 📜 index.js      # Home page
 ┃ ┣ 📜 login.js      # Login page
 ┃ ┗ 📜 register.js   # Register page
 ┣ 📂 models          # Mongoose models
 ┃ ┣ 📜 User.js
 ┃ ┗ 📜 Post.js
 ┣ 📂 lib             # Utility functions (DB, API handlers)
 ┃ ┗ 📜 mongodb.js
 ┣ 📂 middleware      # Custom middlewares (e.g., auth)
 ┃ ┗ 📜 auth.js
 ┣ 📂 context         # Global state management
 ┃ ┗ 📜 AuthContext.js
 ┣ 📂 styles          # Global styles
 ┃ ┗ 📜 globals.css
 ┣ 📂 utils           # Helper functions
 ┃ ┗ 📜 fetcher.js
 ┣ 📜 .env.local      # Environment variables
 ┣ 📜 next.config.js  # Next.js config
 ┣ 📜 package.json    # Dependencies
 ┗ 📜 README.md       # Project documentation
 

 # Next.js  Application

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
