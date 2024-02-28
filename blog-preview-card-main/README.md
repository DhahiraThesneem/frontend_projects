# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS).

If you are new to tailwind CSS, you can follow this project how to set up tailwind css into your project.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page
- While clicking on the heading of the card, the shadow should be widen.

### Screenshot

![Desktop Screenshot](./asset/images/Screenshot_desktop.png) ![Mobile Screenshot](./asset/images/Screenshot_mobile.png)

### Links

- Solution URL: [My solution URL here](https://github.com/DhahiraThesneem/frontend_projects/tree/main/blog-preview-card-main)
- Live Site URL: [My live site URL here](https://dhahirathesneem.github.io/frontend_projects/blog-preview-card-main/)

## My process

### Built with

- Semantic HTML5 markup
- [Tailwind CSS](https://tailwindcss.com/) - Tailwind CSS 
- Flexbox
- Mobile-first workflow
- Responsible Design

**Note: This project get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The procedure to use Tailwnd CLI tool will be discussed in [What I learned](#what-i-learned) section.**

### What I learned

#### Use Tailwind CSS using Tailwind CLI tool

1. Install Tailwind CSS
  - npm install -D tailwindcss
  - npx tailwindcss init
2. Configure your template paths in tailwind.config.css file
  ```js
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```
3. Add the Tailwind directives to your CSS (here input.css)
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
4. Start the Tailwind CLI build process
  ```terminal
    npx tailwindcss -i ./input.css -o ./output.css --watch
  ```
5. Start using Tailwind CSS in your HTML by linking output.css
 ```
   <link href="./output.css" rel="stylesheet">
 ```

We can custom any styles via tailwind.config.js or/and input.css

One more challenge i have faces is because of node_modules build by tailwind css. I have deleted those generated node modules from my project.

### Continued development

In future this project to be build using React Js. Because, active feature is not acheived through CSS in this Project. I have used Javascript to achieve this feature.

### Useful resources

- [Example resource 1](https://tailwindcss.com/) - This helped me for learing Tailwind CSS.


## Author

- Frontend Mentor - [@DhahiraThesneem](https://www.frontendmentor.io/profile/DhahiraThesneem)
