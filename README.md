# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
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

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: [Github](https://github.com/yMeeraki/tip-calculator-app)
- Live Site URL: [netlify](https://ta-fem.netlify.app)

## My process

### Built with

- **Semantic HTML5**: For structuring the web page elements meaningfully.
- **CSS custom properties**: Used for defining reusable design values and colors.
- **Flexbox**: For arranging elements flexibly and creating responsive layouts.
- **CSS Grid**: For creating a grid layout in various sections.
- **JavaScript (Vanilla)**: For calculating the tip amount and handling form interactions.
- **Mobile-first workflow**: Designed to ensure optimal display on mobile devices.


### What I learned

While working on the Tip Calculator project, I gained valuable insights into HTML, CSS, and JavaScript functionality. Here are some key takeaways:

**Semantic HTML**: Using semantic elements like `<main>`, `<form>`, and `<section>` not only improves accessibility but also enhances the structure of the HTML document. This helps in creating more meaningful and maintainable code.

   ```html
   <main class="card">
       <form class="form-section">
           <label for="input-bill-amt" class="input-label">Bill</label> 
           <input id="input-bill-amt" step=".01" placeholder="0" type="number" class="input-value"/>
           <!-- More form elements here -->
       </form>
   </main>
   ```
**Responsive Design**: Implementing a mobile-first approach allowed me to create a user-friendly interface that adapts to various screen sizes using media queries and flexible layouts with Flexbox and CSS Grid.

 ```
@media (max-width: 768px) {
    .card {
        flex-direction: column;
        width: 35rem;
        padding: 1rem;
    }
} ```

**JavaScript DOM Manipulation:** I learned how to effectively use the Document Object Model (DOM) to manipulate elements dynamically. For instance, updating the tip and total amounts based on user input required understanding event listeners and DOM methods.

 ```
const billAmountInput = document.querySelector("#input-bill-amt");
const totalAmt = document.querySelector("#total-amt");

billAmountInput.addEventListener('input', function() {
    const billAmount = parseFloat(billAmountInput.value);
    // Calculation logic...
    totalAmt.textContent = `$${total.toFixed(2)}`;
}); ```

**Error Handling:** Implementing error messages to guide users when they input invalid data (like zero for the number of people) is crucial for enhancing user experience. I learned to show and hide error messages using CSS styles dynamically.

 ```
if (totalPersons === 0) {
    errorMessage.style.display = 'block';
    document.querySelector("#input-no-of-people").style.border = "1px solid rgb(255, 101, 101)";
} ```


### Continued development

In future projects, I plan to focus on the following areas for continued growth and improvement:

1. **Advanced JavaScript Concepts**: I want to deepen my understanding of JavaScript, particularly concepts like asynchronous programming (promises, async/await) and higher-order functions. This will help me write more efficient and cleaner code.

2. **State Management in React**: As I continue to work with React, I aim to learn about state management libraries like Redux or Context API. Understanding how to manage state effectively will enhance the scalability and maintainability of my applications.

3. **Responsive Web Design**: While I have a basic grasp of responsive design principles, I want to explore more about CSS Grid and Flexbox to create complex layouts that are both responsive and user-friendly.

4. **Testing**: I plan to learn more about testing methodologies, especially unit testing and integration testing with frameworks like Jest or React Testing Library. Writing tests will help ensure my applications are robust and bug-free.

5. **Accessibility**: Improving the accessibility of my web applications is important to me. I want to learn more about ARIA roles, keyboard navigation, and other best practices to make my projects usable for everyone.

6. **Performance Optimization**: I want to focus on optimizing the performance of my applications by learning about techniques like code splitting, lazy loading, and optimizing images to enhance user experience.

7. **Version Control with Git**: I would like to become more proficient with Git, including branching strategies, pull requests, and collaboration workflows to improve my development process in team environments.

By focusing on these areas, I hope to build more effective, efficient, and accessible web applications in my future projects.


### Useful Resources

- [Scrimba - Learn JavaScript](https://v2.scrimba.com/learn-javascript-c0) - This platform helped me reinforce my understanding of JavaScript fundamentals through interactive coding exercises. I found the hands-on approach very effective for learning.

- [freeCodeCamp - Learn Form Validation by Building a Calorie Counter](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/learn-form-validation-by-building-a-calorie-counter/step-10) - This article was instrumental in teaching me form validation techniques. The practical examples were particularly helpful for applying the concepts in real-world scenarios.

## Author

- Frontend Mentor - [@yMeeraki](https://www.frontendmentor.io/profile/yMeeraki)