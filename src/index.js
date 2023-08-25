import React from "react"; 
import ReactDOM from "react-dom"; 
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { marked } from 'marked';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

- And of course, there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Dog Pic below !
1. ![Dog](https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/dachshund-dog-swimming-in-pool-les-classics.jpg)`
    }
  }
  
  handleInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  
  render(){
    return (
      <div>
        <Editor input = {this.state.input} onInputChange = {this.handleInputChange} />
        <Preview input = {this.state.input} />
      </div>
    )
  }
}


class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    
    return (
      <div className="form-group container">
          <textarea className="form-control" id="editor" value={this.props.input}
          onChange={this.props.onInputChange} placeholder='Write something!'></textarea>
      </div>
    )
  }
}

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const options = {
      renderer: new marked.Renderer(),
    };
    
    
    //img
    
    options.renderer.image = (href, title, text) => {
      return `<img src="${href}" alt="${text}" title="${title}" class="img-fluid" />`;
    };
    
    //line br
    
    options.renderer.text = (text) => {
      return text.replace(/\n/g, "<br>");
    };
    
    return (
      <div id='preview-box' className="container mt-5">
        <div className="container pt-3" id="preview" dangerouslySetInnerHTML = {{__html: marked(this.props.input, options)
      }}></div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
