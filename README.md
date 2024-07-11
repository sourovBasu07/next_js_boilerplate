This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Poppins, a custom Google Font.

Before using This project install latest versions of following packages

- [Axios](https://www.npmjs.com/package/axios)
- [Tailwind](https://tailwindcss.com/docs/guides/vite)
- Other Required packages

- ### Example routes that are added:
- Dynamic routing in profile route 
- Parallel route in settings route
- Intercepting route in createPost route

### Public/assets
In Assets folder you can put following things.
- Images
- Video
- Icons

### Components

Component will have all the components which are reuseable anywhere in website. Like - Button - Cards - DropDownBtn - inputs - Modal - Popups - Toast - Tooltip - Text/Heading/Title - Skeleton - Spiner/Loader


### constants

Here we provide JSON Formate of data in frontend in React APP.

- products data
- users data


### Services

In Services we put configuration file, like when you are using google firebase then your firebase config file will be in services folder.

The **"services"** folder is often used to contain code related to making **\*`API`** requests and managing data from external sources. This folder helps separate the concerns of your application by isolating data fetching and manipulation logic from the components that render the UI. 


### Store
"store" folder in a React application typically refers to a directory where you manage your application's state using state management libraries like 
- Redux 
- Redux Toolkit
- Context Api


### Utils

**`Utils`** folder is a common convention in many software projects, including React applications, for storing utility functions and helper modules that provide general-purpose functionality across different parts of the application. 
Example: 
```javascript
// utils/helpers.js
export const hideEmail = (email) => {
    const [name, domain] = email.split("@");
    const hiddenEmail = `${name[0]}${new Array(name.length).join("*")}@${domain}`;
    return hiddenEmail;
}
```

### .eslintrc.cjs

ESLint, which is a popular tool for linting and enforcing coding style and best practices in JavaScript code. The .eslintrc.cjs file is written in CommonJS module format and is used to configure ESLint for your project.

### .gitignore

.gitignore file contain all those files,folders name which user want to skip to push online. If you don't want to push any specific file/folder then you should put their name in .gitignore

### jscongig.json

- File Purpose
- Configuration Setup:
- JSON Format

```javascript
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```
