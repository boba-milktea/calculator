# Elementary Calculator

This document outlines the strategy for developing the **Elementary Calculator**, focusing on practicing DOM manipulation with JavaScript.

---

## Setup

- Create a new repository for the calculator project
- Protect the `main` branch
- Enable GitHub Pages for hosting

---

### Calculator Structure

This feature will be developed in the `calculator-structure` branch.

#### JavaScript

- Dynamically create all the calculator elements using JavaScript:
  - A display area for showing input and results
  - Buttons for digits (`0-9`)
  - Buttons for operations (`+`, `-`, `*`, `/`)
  - A clear (`C`) button
  - An equals (`=`) button

#### CSS

- Basic styling for layout and readability
- Make sure the calculator is responsive for mobile and desktop use

---

### Calculator Logic

This feature will be developed in the `calculator-interactions` branch.

#### JavaScript

- Add click event listeners to the buttons
- Use the `eval()` function to perform calculations
- Display results dynamically in the calculator display
- Implement basic error handling for invalid operations (e.g., division by zero)
- Clear the display when the `C` button is pressed
- Handle chaining operations (e.g., `2 + 3 * 4`)
- Prevent multiple consecutive operators from being entered
