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

```
├─ app
│  ├─ (auth)
│  │  ├─ error.jsx
│  │  ├─ layout.jsx
│  │  ├─ login
│  │  │  └─ page.jsx
│  │  └─ signup
│  │     └─ page.jsx
│  ├─ (dashboard)
│  │  ├─ dashboard
│  │  │  └─ page.jsx
│  │  ├─ error.jsx
│  │  ├─ layout.jsx
│  │  ├─ profile
│  │  │  ├─ page.jsx
│  │  │  └─ [id]
│  │  │     └─ page.jsx
│  │  └─ settings
│  │     ├─ @account
│  │     │  ├─ default.jsx
│  │     │  └─ page.jsx
│  │     ├─ @notification
│  │     │  ├─ default.jsx
│  │     │  └─ page.jsx
│  │     ├─ @privacy
│  │     │  ├─ default.jsx
│  │     │  └─ page.jsx
│  │     ├─ default.jsx
│  │     ├─ layout.js
│  │     └─ page.jsx
│  ├─ (root)
│  │  ├─ createPost
│  │  │  ├─ @modal
│  │  │  │  ├─ (...)login
│  │  │  │  │  └─ page.jsx
│  │  │  │  └─ default.jsx
│  │  │  ├─ layout.jsx
│  │  │  └─ page.jsx
│  │  ├─ error.jsx
│  │  ├─ layout.jsx
│  │  └─ page.jsx
│  ├─ api
│  │  └─ auth
│  │     └─ [...nextauth]
│  │        └─ route.js
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.jsx
│  └─ not-found.jsx
├─ components
│  ├─ footer
│  │  └─ Footer.jsx
│  ├─ forms
│  │  ├─ Loginform.jsx
│  │  └─ SignupForm.jsx
│  ├─ layout
│  │  └─ DashboardSidebar.jsx
│  ├─ navbar
│  │  ├─ DashboardNavbar.jsx
│  │  └─ Navbar.jsx
│  └─ shared
│     ├─ button
│     │  └─ Button.jsx
│     ├─ dropdown
│     │  └─ Dropdown.jsx
│     ├─ inputs
│     │  └─ Inputs.jsx
│     ├─ modal
│     │  └─ Modal.jsx
│     ├─ OtpInputs
│     │  └─ otpInputs.jsx
│     └─ phoneInput
│        ├─ Dropdown.jsx
│        └─ PhoneInput.jsx
├─ db
│  └─ index.js
├─ hooks
│  ├─ useClickOutside.js
│  ├─ useFetch.js
│  └─ usePagination.js
├─ public
│  ├─ assets
│  │  ├─ icons
│  │  └─ images
│  ├─ next.svg
│  └─ vercel.svg
├─ README.md
├─ services
│  ├─ apiSlices
│  │  └─ productsSlice.js
│  └─ socket
│     └─ index.js
├─ store
│  ├─ actions
│  ├─ contexts
│  │  └─ userContext.jsx
│  ├─ index.js
│  └─ reducers
│     └─ counterSlice.js
└─ utils
   ├─ ContextProvider.jsx
   └─ helpers.js
├─ jsconfig.json
├─ auth.js
├─ middleware.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ tailwind.config.js

```