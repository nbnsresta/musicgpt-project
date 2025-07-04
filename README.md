# MusicGPT Clone - Turborepo

This is a [Turborepo](https://turbo.build/repo) monorepo containing a music discovery application.

## What's inside?

This Turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps

- `web`: a [Next.js](https://nextjs.org/) app with TypeScript and Tailwind CSS
- `server`: a [NestJS](https://nestjs.com/) API server with TypeScript

### Packages

- `ui`: a React component library built with TypeScript
- `api-client`: a TypeScript package containing API client and music service utilities

### Utilities

This Turborepo has some additional tools already set up for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

### Build

To build all apps and packages, run the following command:

```
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
npm run dev
```

### Remote Caching

Turborepo can use a remote cache to share build cache across machines, enabling you to share build cache with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have a Vercel account, you can [create one](https://vercel.com/signup), then enter the following commands:

```
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview#personal-accounts).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Commands

- `npm run build` - Build all apps and packages
- `npm run dev` - Develop all apps and packages
- `npm run start:server` - Start the NestJS API server in development mode
- `npm run lint` - Lint all apps and packages
- `npm run clean` - Clean all apps and packages
- `npm run format` - Format all apps and packages

## Learn More

To learn more about the technologies used in this Turborepo, see the following docs:

- [Turborepo](https://turbo.build/repo/docs)
- [Next.js](https://nextjs.org/docs)
- [NestJS](https://docs.nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
