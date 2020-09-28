### **1. React component types**

Function component:
```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Class component:
```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

The differences:
- Function component is just a plain JavaScript function, you cannot use setState() in your component. If you want to use state, you have to use Class component or Pass the state from Parent component to props in Function component. But since React 16.8, you can use "State Hook" (**useState**) to use state. https://zh-hans.reactjs.org/docs/hooks-state.html
- Functin component don't have lifecycle. But you can use "Effect Hook" (**useEffect**) since React 16.8. https://reactjs.org/docs/hooks-effect.html
- Function component without State Hook and Effect Hook is **stateless**. Class component is **stateful**

When to use Function component:
- When there are only presentational elements, no state and lifecycle to manage.

<br/>

### **2. React Lifecycle**

**Mount:**
- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()

**Update:**
- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

**UnMount:**
- componentWillUnmount()

More: https://zh-hans.reactjs.org/docs/react-component.html

<br/>

### **3. JSX**

JSX stands for JavaScript XML.

JSX allows writing HTML in JavaScript code.

JSX converts HTML tags into react elements.

You are not required to use JSX, but JSX makes it easier to write React applications.

**JSX Code:**
```javascript
const myelement = <h1>I Love JSX!</h1>;
ReactDOM.render(myelement, document.getElementById('root'));
```

**Same code without JSX, with pure React**
```javascript
const myelement = React.createElement("h1", null, "I Love JSX!");
ReactDOM.render(myelement, document.getElementById('root'));
```

To check yourself, you can try to play with babel compiler online: https://babeljs.io/repl

<br/>

### **4. Node.js**

Node.js is a Javascript runtime environment.
It's built on top of **Chrome's V8 JavaScript engine**.

Every browser has their own Javascript engine that converts javascript into code that a computer can understand. For example, Microsoft Edge uses Chakra, Firefox uses SpiderMonkey, and chrome uses V8. This explains why JavaScript code can behave differently in other browsers.

In 2009, Ryan Dahl took Chrome's V8 engine, and put it into a C++ program, to be able to run JavaScript out of web browers, and named in Node.

![](./resources/imgs/002_nodejs_v8.png)

More:
https://medium.com/@michaelhenderson/what-is-nodejs-and-why-you-need-to-learn-it-f0760ba9a76a
https://www.freecodecamp.org/news/what-exactly-is-node-js-ae36e97449f5/

<br/>

### **5. NPM vs NPX**

**NPM**: Node Package Manager

- NPM is a CLI tool to install, manage Node.js applications
- NPM is the largest online Node.js packages repository in the world

**NPX** is a CLI tool comes with npm version 5.2.

NPM install the package in global scope, and NPX install package in local scope temperarily.

**Create react-app with NPM:**

```javascript
> npm install -g create-react-app // Install create-react-app  in the machine
> create-react-app my-react-app    // create an app with create-react-app
```

**Create react-app with NPX:**

```javascript
> npx create-react-app my-react-app    // create an app with create-react-app
```

More:
https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/
https://medium.com/itsems-frontend/whats-npx-e83400efe7f8
https://juejin.im/post/6844903945664462855

<br/>

### **6. Create React App**

Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.

```bash
> npx create-react-app my-app
```

<br/>

### **7. NPM commands**

- **npm start**:  starts the development server and auto-reloads the page any time you make edits
- **npm run build**:  bundles the app into static files for production
- **npm test**: starts the test runner and lets you test your app with Jest as you build it
- **npm run eject**:  takes your app out of the create-react-app setup, which lets you customize your project configuration

<br/>

### **8. Redux**

Redux is a pattern and library for **managing and updating application state**, using events called **actions**.

It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

<br/>


### **9. Virtual DOM vs DOM**

Just to get things straight - DOM stands for Document Object Model and is an abstraction of a structured text. For web developers, this text is an HTML code, and the DOM is simply called HTML DOM. Elements of HTML become nodes in the DOM.

So, whenever we want to dynamicly change the content of the web page, we modify the DOM:

```javascript
var item = document.getElementById("myLI");
item.parentNode.removeChild(item);
```

document is an abstraction of the root node, while getElementById, parentNode and removeChild are methods from HTML DOM API.

The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. 

It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called **reconciliation**.


![](./resources/imgs/004_virtual_dom.png)



https://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/


<br/>

### **10. Pure component**

React.PureComponent is exactly the same as React.Component except that it handles the shouldComponentUpdate() method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.


We have a lifecycle method called **shouldComponentUpdate** which by default returns true (Boolean) value.

The purpose of the shouldComponentUpdate is we can custom implement the default behavior and decide when react should update or re-render the component.

Generally we use state or props value to decide the update cycle. React has now provided us a PureComponent which does the comparison of state and props to decide the update cycle. We don’t need to override shouldComponentUpdate if we extend class with PureComponent.

React does the shallow comparisons of current state and props with new props and state to decide whether to continue with next update cycle or not.


<br/>


### **11. What is State**

State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components.

<br/>


### **12. What is Props**


Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes. They are data passed down from a parent component to a child component.

The primary purpose of props in React is to provide following component functionality:

- Pass custom data to your component.
- Trigger state changes.
- Use via this.props.reactProp inside component's render() method.

<br/>





