# Interactive Compliment & Joke Generator ✨

A fun and visually engaging single-page web application that delivers a random compliment or tells you a joke at the click of a button. Built with vanilla HTML, CSS, and JavaScript, it features a modern "glassmorphism" card design, an animated gradient background, and an interactive spotlight effect that follows your cursor.



## Live Demo

Open `index.html` in your favorite web browser. No build step or server is required.

---

## Features

-   **Dynamic Content**: Get a compliment or a joke with a setup and a delayed punchline.
-   **Engaging UI**: A clean, "playing card" inspired design that holds the displayed text.
-   **Animated Background**: A beautiful, subtly shifting gradient background provides a relaxing ambiance.
-   **Interactive Spotlight**: A radial gradient follows the user's mouse movements, creating a spotlight effect that highlights the interface.
-   **Smoother Reveal Animations**: The joke punchline fades in and lifts up with easing, while the setup text shifts up slightly for a cohesive effect.
-   **Responsive Design**: The layout adapts gracefully to different screen sizes, making it fully accessible on mobile devices and desktops.
-   **Zero Dependencies**: Written entirely in vanilla HTML, CSS, and JavaScript. No frameworks or external libraries are needed (aside from Google Fonts).
-   **No Repeats Per Cycle**: Compliments and jokes are de-duplicated and served from shuffled queues so you won't see the same item again until you've cycled through them all. Immediate repeats across cycles are avoided too.

---

## Technologies Used

-   **HTML5**: For the basic structure and content of the application.
-   **CSS3**: In `style.css` for all styling, including:
    -   **CSS Variables**: For an easily maintainable color palette.
    -   **Flexbox**: For responsive layout management.
    -   **@keyframes**: For the background gradient, content fade-in, and punchline reveal animations.
    -   **Pseudo-elements**: To create the interactive spotlight effect.
    -   **Transitions**: For smooth hover/press states and the setup text lift.
-   **Vanilla JavaScript**: In `script.js` for all the application logic, including:
    -   DOM Manipulation to update the text and styles.
    -   Event Listeners for button clicks and mouse movement.
    -   `setTimeout` for the delayed punchline reveal.
    -   Dedupe + Shuffle Queues to guarantee no repeats until all items are shown.

---

## How to Use

To run this project locally, follow these simple steps:

1.  **Clone or download** this repository.
2.  **Favicon (Optional)**: The code references a `favicon.png`. You can provide your own 16x16 or 32x32 pixel image named `favicon.png` in the same directory, or remove the `<link rel="icon" ...>` line from the `<head>` in `index.html`.
3.  **Open in Browser**: Double-click `index.html` (ensure `style.css` and `script.js` are alongside it) in any modern browser: Chrome, Firefox, Edge, or Safari.

That's it! You can now generate compliments and jokes.

---

## Code Overview

The application is split into three files for clarity and maintainability:

- `index.html` — Markup and Google Fonts links.
- `style.css` — All styling: variables, background animation, spotlight pseudo-element, playing card layout, buttons, and reveal transitions.
- `script.js` — App logic: non-repeating selection, DOM updates, event handlers, and the timed punchline reveal.

### HTML Structure

The `<body>` contains a single `<main class="container">` which holds:
-   A `.playing-card` div that serves as the main content display area.
-   Two corner `div` elements (`#corner-top`, `#corner-bottom`) for the decorative icons.
-   A `#display-text-area` that contains spans for the main text/setup (`#main-text`) and the punchline (`#punchline`).
-   A `.button-container` with two buttons (`#new-compliment-btn`, `#new-joke-btn`).

### CSS Styling

All styles live in `style.css`. Key features include:

-   **`:root` variables**: Centralize all color and mouse position values for easy customization.
-   **Animations**:
    -   `gradient-animation`: Creates the slow, looping movement of the background gradient.
    -   `spotlight-drift`: A fallback animation for the spotlight on touch devices.
    -   `fade-in`: A gentle entry animation for the main container on page load.
    -   `punchline-reveal`: A subtle animation to make the punchline appear after a delay.
-   **`body::before` pseudo-element**: This is the core of the spotlight effect. It's a `fixed` position element with a `radial-gradient` background. Its position is updated dynamically by JavaScript via CSS variables (`--mouse-x`, `--mouse-y`).
-   **Reveal polish**: The punchline uses a fade-and-lift animation; when visible, the setup text smoothly lifts a few pixels for a cohesive feel.

### JavaScript Logic

All logic lives in `script.js`.

-   **Data**: Compliments and jokes are stored in arrays and de-duplicated at startup.
-   **Non-repeating rotation**: Items are shuffled into queues; each click pops the next item so no repeats occur until the queue is exhausted. When refilled, the first item is swapped if it would match the last seen one to avoid immediate repeats across cycles.
-   **Animations**: Jokes show the setup immediately, then reveal the punchline after a short delay using a fade-and-lift animation while the setup gently shifts up.
-   **Element References**: Key DOM elements are selected and stored for efficient access.
-   **Event Listeners**: Button clicks trigger generators; mousemove updates spotlight CSS variables.
-   **Initial State**: A compliment is generated on load so the card isn’t empty.