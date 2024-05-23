# Text Editor PWA

This project is a progressive web application (PWA) text editor that runs in the browser. It is a single-page application that meets the PWA criteria and features data persistence techniques using IndexedDB, ensuring functionality both online and offline. The application is built with a client-server folder structure and uses modern JavaScript with Webpack for bundling.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Description

This PWA text editor is designed to demonstrate the concepts learned in the course, such as service workers, IndexedDB, and Webpack. The application provides a seamless text editing experience with offline capabilities. When the application is opened, it immediately creates a database storage using IndexedDB. Any content entered into the text editor is saved automatically when the user clicks off the DOM window, and it is retrieved when the text editor is reopened. Additionally, the application can be installed on the desktop as an icon, providing quick access to the editor.

## Features

- **Client-Server Folder Structure**: 
    - Organized codebase with distinct client and server directories.
- **Webpack Bundling**: 
    -  JavaScript files are bundled using Webpack, ensuring efficient loading and management of assets.
- **IndexedDB Integration**: 
    -  Uses IndexedDB for data persistence, allowing content to be saved and retrieved even when offline.
- **Service Worker**: 
    - Registers a service worker using Workbox for caching static assets and enabling offline functionality.
- **PWA Installability**: 
    - Application can be installed on the desktop as a standalone app.
- **Modern JavaScript**: 
    - Utilizes next-gen JavaScript features to ensure compatibility and functionality in the browser.


## Installation

To use the Social Network API, follow these steps:

1. **Clone the Repository**: Clone the Text Editor repository to your local machine using Git.
   ```bash
   git clone https://github.com/yourusername/text-editor.git
   ```
2. **Navigate to the Project Directory**: Change your current directory to the Text Editor project directory.
    ```bash
    cd text editor
    ```
3. **Verify npm Installation**: If Node.js is installed, this command will display its version number. If not, you need to install Node.js from the official website.
    ```bash
    node --version
    ```
4. **Install Dependencies**: Install the required dependencies using npm (Node Package Manager).
    ```bash
    npm install
    ```
5. **Verify**: To verify that you have installed the correct node package. Please use this command.
    ```bash
    npm ls 
    ```
Once you've completed these steps, you're all set up to use the Text Editor!

## Usage

1. **Navigate to the Project Directory**: Change your current directory to the Text Editor project directory.
    ```bash
    cd text-editor
    ```
2. **Start Server**: Navigate to the root folder in your terminal.
    ```bash
    npm start
    ```

 
Now you're all set up to start using the Text Editor for all of your Text Editor Creation needs!

LINK TO APP: [TEXT EDITOR](https://text-editor-2g51.onrender.com/)

## Contributing

Thank you for your interest in contributing to the Text Editor project. At this time, we are not accepting contributions.

We appreciate your understanding and support!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Tests

Currently there are no available tests for this application.


## Questions

If you have any questions or need assistance with the Text-Editor, feel free to reach out:

- **GitHub Profile**: [Your GitHub Profile](https://github.com/yourusername)
  Please visit my GitHub profile for additional information and projects.