# Interactive Photo Gallery and Coding Challenges

COA TASKFORCE PRO TAKE HOME CHALLENGE

## Table of Contents

- [Interactive Photo Gallery and Coding Challenges](#interactive-photo-gallery-and-coding-challenges)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Challenges](#challenges)
    - [Array Manipulation](#array-manipulation)
    - [String Transformation](#string-transformation)
  - [Setup Instructions](#setup-instructions)
    - [1. Clone the Repository](#1-clone-the-repository)
    - [2. Run the `index.html` file in your browser](#2-run-the-indexhtml-file-in-your-browser)
  - [Checking the Challenges](#checking-the-challenges)
  - [Usage](#usage)
  - [Code Quality and Tests](#code-quality-and-tests)
  - [Contributing](#contributing)
  - [Contact](#contact)
  - [License](#license)

## Project Overview

This project includes an Interactive Photo Gallery based on the provided [Figma designs](https://www.figma.com/design/XF6xlvvHBv12WFveDjVoso/COA-Take-home-Challenge?node-id=1-524&t=W3iw3cwE5Eax1tJX-0) and two programming challenges. The gallery is built to be highly responsive, matching the design specifications and providing a seamless user experience across different devices and browsers.

## Features

- Fully responsive photo gallery.
- Hover interaction for a more engaging user experience.
- Cross-browser compatibility.
- Clean and well-structured codebase
  - [index.html](index.html), [style.css](style.css), [main.js](main.js) store the `HTML code`, `CSS styles`, and `JavaScript scripts` respectively.
  - The images are stored the [media](media/) directory.
- Additional coding challenges involving array manipulation and string transformation.

## Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript**

## Challenges

Below is the list of the challenges and the corresponding solutions implemented in the project.

### Array Manipulation

**Objective**: Determine if there is a subarray within an array that sums up to a target value.

**Solution Approach**:

- Iterate through the array to find subarrays.
- Use a sliding window or prefix sums technique to manage time and space complexity efficiently.

[Solution](./Challenges/arrayMap.js)

### String Transformation

**Objective**: Reverse or replace characters in a string based on specific conditions.

**Solution Approach**:

- Use conditional statements to apply transformations.
- Make use of efficient string handling functions in JavaScript to ensure optimal performance.

[Solution](./Challenges/stringTransform.js)

## Setup Instructions

Follow these two steps to setup the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/princenzmw/Taskforce_PRO_Challenge.git
cd Taskforce_PRO_Challenge
```

### 2. Run the `index.html` file in your browser

```bash
start index.html        # on Windows
open index.html         # on Mac
xdg-open index.html     # on Linux
```

## Checking the Challenges

In Terminal, Navigate to `Challenges` folder then run the following commands to check how the code work.

```bash
cd Challenges
node arrayMap.js # If you have node installed
node stringTransform.js # Also requires to have node installed
```

You can also run them in the Browser console.
Feel free to change any data passed as example to check all the functionalities.

## Usage

To use the Interactive Photo Gallery:

1. Open the `index.html` file in your preferred browser.
2. Once the gallery has loaded, you can interact with the photos by hovering over them to see more details.
3. Click on any photo or it's corresponding `Know more →` link to view it in full size.
4. To exit the full size mode, click on the close button in the upper right corner, or click beyond the photo
5. Check the responsiveness in developr tool by inspecting or click `Ctrl`+`Shft`+`I` to view it on different scree sizes

## Code Quality and Tests

- Code is formatted with Prettier to ensure consistency and readability.
- No Unit tests or any type of tests written for now.
- No CI/CD pipeline is configured to run tests.

## Contributing

- If you would like to contribute, please fork the repository and issue a pull request with your updates.

## Contact

For any questions or suggestions regarding the project, please reach out via:

- Email: [princenzmw@gmail.com](mailto:princenzmw@gmail.com)
- GitHub: [@princenzmw](https://github.com/princenzmw) ❤️

## License

This project is licensed under the MIT License.
