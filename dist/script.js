function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

const initialMarkdown = `
### Headers

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### List

- list item one
- list item two
- list item three

### Links

[FreeCodeCamp](https://learn.freecodecamp.org)

[Google](https://www.google.com "World's Most Popular Search Engine")

### Text Decorations

*italic*

**bold**

***bold and italic***

### Images

![alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR12jlYyyibnO8o7iMGy5vgx05rKxW1oECuq9LzbcdnlLJXBKkn&usqp=CAU 'Orange Chicken')

### Blockquote

> "Dream big and dare to fail."
- Norman Vaughan

### Code

\`npm install create-react-app -g\`

\`\`\`
function addTwoNumbers(a, b) {
  return a + b
}
const name = 'Julio'
const age = 32
const number = Math.random() * 10
\`\`\`
`;

var renderer = new marked.Renderer();

renderer.link = function (href, title, text) {
  return `<a href=${href} target="_blank">${text}</a>`;
};

marked.setOptions({
  renderer,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
  breaks: true });


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleChange",






    e => this.setState({ markdown: e.target.value }));this.state = { markdown: initialMarkdown };}

  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", { className: "title" }, "Markdown Previewer"),
      React.createElement("div", { className: "container" },

      React.createElement("div", { className: "left" },
      React.createElement("textarea", { id: "editor", value: this.state.markdown, onChange: this.handleChange })),



      React.createElement("div", { className: "right" },
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.markdown) } })))));





  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));