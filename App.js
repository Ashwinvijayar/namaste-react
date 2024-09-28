const parent = React.createElement(
  "div",
  { id: "parent" },

  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "this is reactheading parent-child"),
      React.createElement("h2", {}, "this is react heading sibling-child"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "this is reactheading parent-child2"),
      React.createElement("h2", {}, "this is react heading sibling-child2"),
    ]),
  ]
);

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(parent);
