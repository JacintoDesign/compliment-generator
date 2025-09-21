# Interactive Compliment & Joke Generator ✨

A fun and visually engaging single-page web application that delivers a random compliment or tells you a joke at the click of a button. Built with vanilla HTML, CSS, and JavaScript, it features a modern "glassmorphism" card design, an animated gradient background, and an interactive spotlight effect that follows your cursor.



## Live Demo

*To view a live version, simply save the code as an `index.html` file and open it in your favorite web browser!*

---

## Features

-   **Dynamic Content**: Get a random compliment or a joke with a setup and a delayed punchline.
-   **Engaging UI**: A clean, "playing card" inspired design that holds the displayed text.
-   **Animated Background**: A beautiful, subtly shifting gradient background provides a relaxing ambiance.
-   **Interactive Spotlight**: A radial gradient follows the user's mouse movements, creating a spotlight effect that highlights the interface.
-   **Smooth Animations**: Enjoy smooth fade-in animations for the main container and a "reveal" animation for the joke's punchline.
-   **Responsive Design**: The layout adapts gracefully to different screen sizes, making it fully accessible on mobile devices and desktops.
-   **Zero Dependencies**: Written entirely in vanilla HTML, CSS, and JavaScript. No frameworks or external libraries are needed (aside from Google Fonts).

---

## Technologies Used

-   **HTML5**: For the basic structure and content of the application.
-   **CSS3**: For all styling, including:
    -   **CSS Variables**: For an easily maintainable color palette.
    -   **Flexbox**: For responsive layout management.
    -   **@keyframes**: For the background gradient, content fade-in, and punchline reveal animations.
    -   **Pseudo-elements**: To create the interactive spotlight effect.
    -   **Transitions**: For smooth hover and active states on buttons.
-   **Vanilla JavaScript**: For all the application logic, including:
    -   DOM Manipulation to update the text and styles.
    -   Event Listeners for button clicks and mouse movement.
    -   `setTimeout` for the delayed punchline reveal.

---

## How to Use

To run this project locally, follow these simple steps:

1.  **Download the file**: Save the provided code as `index.html`.
2.  **Favicon (Optional)**: The code references a `favicon.png`. You can create your own 16x16 or 32x32 pixel image named `favicon.png` and place it in the same directory, or simply remove the `<link rel="icon" ...>` line from the `<head>` section.
3.  **Open in Browser**: Open the `index.html` file in any modern web browser like Google Chrome, Firefox, or Microsoft Edge.

That's it! You can now generate compliments and jokes.

---

## Code Overview

The entire application is self-contained within a single HTML file for simplicity.

### HTML Structure

The `<body>` contains a single `<main class="container">` which holds:
-   A `.playing-card` div that serves as the main content display area.
-   Two corner `div` elements (`#corner-top`, `#corner-bottom`) for the decorative icons.
-   A `#display-text-area` that contains spans for the main text/setup (`#main-text`) and the punchline (`#punchline`).
-   A `.button-container` with two buttons (`#new-compliment-btn`, `#new-joke-btn`).

### CSS Styling

The styling is embedded within a `<style>` tag in the `<head>`. Key features include:

-   **`:root` variables**: Centralize all color and mouse position values for easy customization.
-   **Animations**:
    -   `gradient-animation`: Creates the slow, looping movement of the background gradient.
    -   `spotlight-drift`: A fallback animation for the spotlight on touch devices.
    -   `fade-in`: A gentle entry animation for the main container on page load.
    -   `punchline-reveal`: A subtle animation to make the punchline appear after a delay.
-   **`body::before` pseudo-element**: This is the core of the spotlight effect. It's a `fixed` position element with a `radial-gradient` background. Its position is updated dynamically by JavaScript via CSS variables (`--mouse-x`, `--mouse-y`).

### JavaScript Logic

The JavaScript is embedded in a `<script>` tag before the closing `</body>` tag.

-   **Data**: Compliments and jokes are stored in `const` arrays.
-   **Element References**: Key DOM elements are selected and stored in variables for efficient access.
-   **Functions**:
    -   `updateCardStyle()`: Randomly selects an emoji and color to apply to the card's corner icons.
    -   `generateNewCompliment()`: Selects a random compliment, updates the DOM, and calls `updateCardStyle()`.
    -   `generateNewJoke()`: Selects a random joke, displays the setup, and uses `setTimeout` to reveal the punchline after 2.5 seconds.
-   **Event Listeners**:
    -   `click` listeners on the two main buttons trigger the content generation functions.
    -   A `mousemove` listener on the `window` updates the CSS variables for the spotlight effect in real-time.
-   **Initial Call**: `generateNewCompliment()` is called once on page load to ensure the card isn't empty when the user first arrives.