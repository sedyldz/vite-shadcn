# Vite + React + TypeScript + Shadcn/ui Boilerplate

This project is a boilerplate for quickly starting a React application using Vite, TypeScript, and Shadcn/ui components.

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/vite-shadcn-boilerplate.git
   cd vite-shadcn-boilerplate
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Run the development server:

   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Adding Shadcn/ui Components

To add new Shadcn/ui components, use the following command:

```
npx shadcn@latest add [component-name]
```

For example, to add the button component:

```
npx shadcn@latest add button
```

## Project Structure

- `src/`: Contains the source code for the application
- `src/components/`: Houses reusable React components
- `src/components/ui/`: Contains Shadcn/ui components
- `public/`: Static assets that are served directly

## Available Scripts

- `npm run dev`: Starts the development server using Vite
- `npm run build`: Compiles TypeScript and builds the app for production
- `npm run lint`: Runs ESLint to check for code quality and style issues
- `npm run preview`: Previews the production build locally using Vite
