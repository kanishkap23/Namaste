//react element(object => HTML(browser understandable)

const parent = React.createElement("div",
    { id: "parent" }, [
    React.createElement("div",
        { id: "child" }, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "i'm an h2 tag")
    ]
    ),
    React.createElement("div",
        { id: "child2" }, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "i'm an h2 tag")
    ]
        //to give more than one children, give array of children
    )
]

)

//JSX



console.log(parent);
const heading = React.createElement("h1", { id: "heading", xyz: 'abc' }, "Hello World from React!");
// console.log(heading);
//return an object(h1 is not  tag , it is a react element)  
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(parent);
//this render function takes the object and convert it into the heading tag and put it on the DOM  