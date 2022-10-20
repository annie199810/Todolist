import React from "react";
const Coloring = () => {
  const [onTheme, setTheme] = React.useState(false);
  const switchtheme = (
    <h1
      className="switchtheme"
      onClick={(e) => {
        e.preventDefault();
        setTheme(true);
      }}
    >
      <button>Light</button>
    </h1>
  );

  const newtheme = (
    <h1
      className="newtheme"
      onClick={(e) => {
        e.preventDefault();
        setTheme(false);
      }}
    >
      <button>Dark</button>
    </h1>
  );

  return (
    <div style={{ backgroundColor: onTheme ? "white" : "darkgrey" }}>
      {switchtheme}
      {newtheme}
    </div>
  );
};
export default Coloring;
