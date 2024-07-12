This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

How to run the project
```javascript
yarn
```
and
```javascript
yarn dev
```

Following packages are used in this project:

- [Axios](https://www.npmjs.com/package/axios)
- [Tailwind](https://tailwindcss.com/docs)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [Socket.IO](https://socket.io/docs/v4/tutorial/introduction)
- [Next-auth](https://authjs.dev/getting-started/installation)

```
Next JS Advanced Folder Structure
.
├─ app
│  ├─ (auth)
│  │  ├─ login
│  │  │  └─ page.jsx
│  │  └─ signup
│  │     └─ page.jsx
│  │  ├─ error.jsx
│  │  ├─ layout.jsx
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
│  ├─ constants
│  │  └─ index.js
|  ├─ ContextProvider.jsx
|  ├─ index.js
├─ README.md
├─ jsconfig.json
├─ auth.js
├─ middleware.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ tailwind.config.js

```


## Folders include

- `app`
- `components`
- `public`
- `db`
- `hooks`
- `services`
- `store`
- `utils`


### Routing examples

Route groups

```
├─ app
│  ├─ (auth)
│  │  ├─ login
│  │  │  └─ page.jsx
│  │  └─ signup
│  │     └─ page.jsx
│  │  ├─ error.jsx
│  │  ├─ layout.jsx
│  ├─ (dashboard)
│  │  ├─ dashboard
│  │  │  └─ page.jsx
│  │  ├─ error.jsx
│  │  ├─ layout.jsx
│  │  ├─ profile
│  │  │  ├─ page.jsx
│  │  │  └─ [id]
│  │  │     └─ page.jsx
```


Dynamic routing 

```
├─ app
│  ├─ (dashboard)
│  │  ├─ profile
│  │  │  ├─ page.jsx
│  │  │  └─ [id]
│  │  │     └─ page.jsx
```

Parallel routing 

```
│  ├─ (dashboard)
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
```

Intercepting route 

```
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
```



### Components

Includes common reusable shared components


### db

Here we provide JSON Formate of data in frontend in React APP.

- products data
- users data


### Services

In Services we put configuration file, like when you are using google firebase then your firebase config file will be in services folder.

The **"services"** folder is often used to contain code related to making **\*`API`** requests and managing data from external sources. This folder helps separate the concerns of your application by isolating data fetching and manipulation logic from the components that render the UI. 


### Hooks

Consists of custom hooks to separate the business logic of the components and for their reusability

```
├─ hooks
│  ├─ useClickOutside.js
│  ├─ useFetch.js
│  └─ usePagination.js
```


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
export function debounceFn(func, delay) {
    let timer;

    return (...args) => {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            func(...args)
        }, delay)
    }
};
```

### jscongig.json

```javascript
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```
