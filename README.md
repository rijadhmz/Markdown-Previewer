## Markdown Previewer

This project involves a React application that functions as a "Markdown Previewer." It was developed as part of the FreeCodeCamp "Front End Development Libraries" course certification.

### Project Description

The Markdown Previewer is a web application built using React and the Marked library. It allows users to input Markdown text and instantly preview the rendered HTML output. The previewer supports GitHub-flavored Markdown and provides a live rendering experience.

### Challenge Requirement

The challenge required building an app that fulfills the following user stories:

1. The app contains a textarea element with the id "editor."
2. The app contains an element with the id "preview."
3. As the user types in the "editor," the content is updated and displayed in the "preview" area.
4. GitHub-flavored Markdown is rendered as HTML in the "preview" area.
5. On initial load, the "editor" contains valid markdown representing different elements.
6. On initial load, the default markdown in the "editor" is rendered as HTML in the "preview."

### Implementation Details

The project leverages React to build a user interface with two components: "Editor" and "Preview." The "marked" library is used to parse the Markdown input and generate the corresponding HTML output. The "Renderer" from Marked is customized to handle images and line breaks.

### Technologies Used

- React
- Marked library (for Markdown parsing)
- Bootstrap (for styling)

### Example

![Markdown-Previewer](https://github.com/rijadhmz/Markdown-Previewer/blob/master/images/example.png?raw=true)

### Project URL

To interact with the deployed project, visit my [Codepen Project](https://codepen.io/rijadhmz/pen/gOQeBLV).

This project showcases the integration of React, external libraries, and the ability to dynamically render HTML content from Markdown input.
