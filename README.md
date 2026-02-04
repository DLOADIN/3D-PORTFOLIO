# 3D Portfolio

A visually immersive portfolio showcasing 3D assets built with **Three.js**, interactive animations using **Framer Motion**, and a modern user interface powered by **React.js**.

## Table of Contents
- [About the Project](#about-the-project)
- [Live Demo](#live-demo)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About the Project

The 3D Portfolio project is a modern web-based portfolio designed to showcase my personal work and skills in a unique, engaging, and dynamic way. This project leverages the power of **Three.js** for 3D rendering, **Framer Motion** for smooth and eye-catching animations, and **React.js** to handle the user interface and interactivity.

The primary goal of the project is to create a memorable experience for visitors that highlights both design and technical abilities while offering an intuitive way to explore projects and information.

## Live Demo
Check out the live demo [here](https://3d-portfolio-pink-one.vercel.app/)

## Built With

This project was built using several modern web technologies:
- **Three.js**: For 3D asset rendering and animations
- **React.js**: Frontend library for building user interfaces
- **Framer Motion**: Motion library for high-performance animations
- **React Three Fiber**: A React renderer for Three.js
- **Styled-components**: For modular and customizable styles

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:
- Node.js
- npm or yarn package manager

### Installation

1. Clone the repo:
    ```bash
    git clone https://github.com/DLOADIN/3D-PORTFOLIO
    ```

2. Navigate to the project directory:
    ```bash
    cd 3D-portfolio
    ```

3. Install dependencies:
    ```bash
    npm install
    # or if using yarn
    yarn install
    ```

4. Start the development server:
    ```bash
    npm start
    # or if using yarn
    yarn start
    ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Usage

### Navigation

The portfolio includes different sections such as:
- **Home**: An introductory 3D scene with animated elements.
- **Projects**: Showcases previous projects with interactive 3D models.
- **About Me**: A brief bio presented in a creative, animated format.
- **Contact**: An animated contact form with integrated email support.

### Adding New Projects

To add a new project to your portfolio:
1. Go to `src/data/projects.js`
2. Add the new project details:
    ```js
    {
      title: 'Project Title',
      description: 'Short project description...',
      link: 'https://link-to-project.com',
    }
    ```
3. Your project will now appear on the portfolio.

## Features

- **3D Scene**: Fully interactive 3D environment powered by **Three.js** and **React Three Fiber**.
- **Smooth Animations**: Animations are handled using **Framer Motion**, providing a sleek user experience.
- **Responsive Design**: Optimized for both desktop and mobile users.
- **Customizable**: Easily update and expand the portfolio with new projects, skills, or sections.
- **Interactive Elements**: Hover effects and animations that enhance user engagement.

## Contributing

Contributions are what make the open-source community such a great place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

To contribute:
1. Fork the project
2. Create your feature branch (`git checkout -b feature/NewFeature`)
3. Commit your changes (`git commit -m 'Add some NewFeature'`)
4. Push to the branch (`git push origin feature/NewFeature`)
5. Open a pull request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Builder's Name - Manzi David
Builder's Email - themanzi.david@gmail.com

Project Link: https://github.com/DLOADIN/3D-PORTFOLIO
