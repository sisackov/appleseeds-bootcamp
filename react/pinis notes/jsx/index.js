//cdn = Content Delivery Network  access to its servers fast
//consoel log React
// console.log(React);
// console.log(typeof React);
//! JSX is just syntactic sugar for React.createElement
//* React.createElement(type(html element), props{}, children[])
const myTitle = React.createElement('h1', {}, 'Hello from React!!!!');

//! Here we create our own simple React.createElement method
const MyReact = {
    createElement(el, props, text) {
        return (document.createElement(el).innerText = text);
    },
};
const x = MyReact.createElement('h1', {}, 'hellooo');
// const domContainer = document.querySelector("#react");
// ReactDOM.render(myTitle, domContainer);
//* ReactDOM.render(element,container)
//* render method will take our code and create nodes depending on their "type" property and create the virtual dom. Each time we call the render function, it looks at the old virtual dom to the newly created one, sees which nodes need to update it then goes to the real dom and only updates those nodes.
//* This is why we can use react across al platforms. What React does is, simply construct a tree of UI which could be used not only on web, but on environments like mobile too,
const myTitle2 = React.createElement('h1', { className: 'brown' }, 'hello');
//now console log myTitle and view the properties it gets.
const paragraph = React.createElement('p', {}, 'I love react so much');
const container = React.createElement('div', {}, [myTitle, paragraph]);
console.log(container);

//! Can embed children like so:
const my2ndContainer = React.createElement('div', {}, [
    React.createElement('ul', {}, [
        React.createElement('li', {}, 'myFirstLi'),
        React.createElement('li', {}, 'my2ndLi'),
        React.createElement('li', {}, 'myThirdLi'),
    ]),
]);

//! Now lets put some JSX inside
const myJSX = <div>Hello World</div>;
const MyJsxComponent = () => {
    return <div>I AM JSX!!!</div>;
};

// console.log(myJSX);

const domContainer = document.querySelector('#react');

ReactDOM.render(myJSX, domContainer);
