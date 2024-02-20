# Owloops Extension

## Overview

The Owloops Browser Automation Extension is a comprehensive tool for automating repetitive tasks directly in your browser. Combining the capabilities of full browser automation with the ease of exporting test scripts from Chrome DevTools Recorder. This tool is designed to leverage GPT-4 for executing ad-hoc instructions and is being actively developed to support saved and scheduled workflows in the future.

### Features

- **Ad-hoc Instructions Execution:** Utilize GPT-4 to automate repetitive actions with immediate instructions.
- **Export as Owloops Test Script:** Seamlessly export recordings from Chrome DevTools Recorder for quick test script generation. (This feature relies on the [owloops-chrome-recorder](https://github.com/Owloops/owloops-chrome-recorder) library)
- **Research Preview:** Currently in the research preview phase, inviting users to test and contribute towards improving the extension.

### Installation Instructions

The Owloops extension is available for manual installation via the [GitHub repository](https://github.com/Owloops/owloops-extension), with plans for a future Chrome Web Store release. Follow these steps for installation:

1. **Prerequisites:** Ensure you have Node.js >= 16 installed on your machine.
2. **Setup:** Clone the repository, run `yarn` to install dependencies, and `yarn build` to build the package.
3. **Loading the Extension:** Enable Developer mode in Chrome's `chrome://extensions/` page, click on `Load unpacked extension`, and select the `build` folder.

### How It Works

Owloops simplifies browser automation by interpreting user instructions and executing actions such as clicks and text input, leveraging advanced models like GPT-4 for understanding and processing tasks. The action cycle is designed with a focus on safety and efficiency, enabling users to automate tasks with precision and minimal effort.

### Running Owloops in Your Browser

After installation, the Owloops extension can be activated in two ways:

- **As a Popup:** Use keyboard shortcuts (`cmd+shift+y` on Mac or `ctrl+shift+y` on Windows/Linux) or click the extension logo.
- **In DevTools:** A new panel labeled "Owloops" appears in the browser's developer tools for more integrated tasks.

Input your OpenAI API Key in the provided box for secure storage, and begin automating tasks on any webpage.

## Resources and Further Reading

To further explore Owloops and browser automation:

- Visit the [Chrome Extensions Getting Started Guide](https://developer.chrome.com/extensions/getstarted) for an introduction to Chrome extension development.
- Check out the original Taxy AI project on GitHub: [Taxy AI GitHub Repository](https://github.com/TaxyAI/browser-extension).
