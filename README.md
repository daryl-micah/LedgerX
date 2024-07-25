# LedgerX
> A financial dashboard to visualize and manage your finances.

## Tech Stack
- Language: [Typescript](https://www.typescriptlang.org/docs/), [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Frameworks: [Next.js](https://nextjs.org/docs), [React.js](https://react.dev/), [Hono🔥](https://hono.dev/), [TailwindCSS](https://tailwindcss.com/), [Tanstack Query](https://tanstack.com/query/latest)
- Database: Postgres [NeonDB](https://www.neon.tech)

## To Run Locally

1. Clone the project
   ```
   git clone https://github.com/daryl-micah/LedgerX.git
   cd LedgerX
   ```
2. Run `pnpm install` to install dependencies
   
4. Start the development server by running `pnpm run dev`
   
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

> [!IMPORTANT]
Create a .env.local file before proceeding for the database and Clerk authentication to work correctly.
>> Database used: NeonDB postgreSQL.<br/>
>> Authentication is done using [Clerk](https://www.clerk.com). Sign up, create an application & add API keys to .env file.<br/>
>> Refer the **.env.example file.** <br/>

### Features to be imporved/added ✍️
1. Import csv function 🟡
2. Bank account connections 🔴
