# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshots-of-my-final-project)
  - [Link](#link)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshots of my final project

<span>
<img src="./images/desktop-complete.png" height=400>
<img src="./images/mobile-complete.png" height=400>
</span>

### Link

- Live Site URL: [project hosted on Netlify](https://mellow-sprinkles-476ed8.netlify.app)

## My process

Started with mobile design first. Created the utility classes (fonts, colors, sizes), followed by the buttons and layout.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS Query Logic

### What I learned

using js for dom manipulation, single page interative element.

```css
.submit-button:hover {
  color: hsl(var(--clr-orange));
  background-color: hsl(var(--clr-white));
  cursor: pointer;
}
```

```js
buttonList.forEach((item) => {
  item.classList.remove("active");
});
```

### Continued development

Improvement would be find best practises for javascript and html communication.

### Useful resources

- [Create a Design System with CSS](https://www.youtube.com/watch?v=lRaL-8qZ0mM) - This helped me for use more complex CSS tools. I really liked this pattern and will use it going forward.
- [Pure CSS Custom Styled Radio Buttons](https://moderncss.dev/pure-css-custom-styled-radio-buttons/) - This is an amazing solution which helped me finally understand Radio Buttons. I'd recommend it to anyone still learning this concept.
