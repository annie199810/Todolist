import reactLogo from "./assets/react.svg";
import "./App.css";
import React from "react";
import { useEffect } from "react";
import Button from "./assets/components/button";
import Navigation from "./assets/components/footer";
import Heading from "./assets/components/topnav";
import Purchase from "./assets/components/products";
import Student from "./assets/components/interns";
import Instagram from "./assets/components/followers";
import Paragraph from "./assets/components/head";
import Coloring from "./assets/components/theme";
import Appp from "./assets/components/todo";
import TodoList from "./assets/components/Block";

function App() {
  const products = [
    { name: "Nike Shoes", price: 560 },
    { name: "Trends Shoes", price: 860 },
    { name: "Adidas Shoes", price: 960 },
    { name: "Smart Shoes", price: 660 },
    { name: "Lazer Shoes", price: 760 },
  ];

  const interns = [
    { name: "Meena Manogari", place: "Bangalore" },
    { name: "Vignesh Kumar", place: "Hyderabad" },
    { name: "Aaron Stains", place: "Mumbai" },
    { name: "Jerlin Madhu", place: "Delhi" },
    { name: "Andrews Annie", place: "Kerala" },
  ];

  const followers = [
    { name: "-_srinithi_sivakumar_-", bio: "Srinithi" },
    { name: "-V-I-C-K-Y", bio: "Vignesh Kumar" },
    { name: "__.rag__", bio: "RaageshrajaN" },
    { name: "roby3_24", bio: "Jitto Robinson" },
    { name: "__.roi._.kk__.", bio: "Jerson" },
  ];
  s;
  const Items = [
    { name: "Good Morning" },
    { name: "Good noon" },
    { name: "Good evening" },
    { name: "Good Night" },
    { name: "Good Midnight" },
  ];

  /* const [visible, setVisible] = React.useState(products);*/
  const [productsState, setProductState] = React.useState(products);
  const [foll, setFoll] = React.useState(followers);
  const [sidebarIsOn, setSidebarState] = React.useState(false);
  const [onTheme, setTheme] = React.useState(false);
  const [todoItems, setTodoItems] = React.useState(Items);

  const increase = (currentIndex) => {
    const updatedData = productsState.map((product, index) => {
      if (currentIndex === index) {
        return { ...product, addCart: product.addCart + 1 };
      }
      return product;
    });
    setProductState(updatedData);
  };

  const decrease = (currentIndex) => {
    const updatedData = productsState.map((product, index) => {
      if (currentIndex === index) {
        return { ...product, addCart: product.addCart - 1 };
      }
      return product;
    });
    setProductState(updatedData);
  };

  useEffect(() => {}, []);

  const handleToggleCart = (currentIndex) => {
    const updatedData = productsState.map((product, index) => {
      if (currentIndex === index) {
        return { ...product, addCart: 1 };
      }
      return product;
    });
    setProductState(updatedData);
  };

  function handlefollow(follower, index) {
    console.log("index", index);
    console.log("follower", follower);
    const mutated = foll.map((follower, ind) => {
      if (ind === index) {
        return { ...follower, isFollowing: !follower.isFollowing };
      } else {
        return follower;
      }
    });
    setFoll([...mutated]);
    console.log("mutated", mutated);
  }
  console.log(foll);

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

  /*const change_option = (
    <h1
      className="change_option"
      onClick={(e) => {
        e.preventDefault();
        setTodoItems(true);
      }}
    >
      <button>Edit</button>
    </h1>
  );

  const delete_option = (
    <h1
      className="delete_option"
      onClick={(e) => {
        e.preventDefault();
        setTodoItems(true);
      }}
    >
      <button>Delete</button>
    </h1>
  );*/
  const hamburger = (
    <b
      className="hamburger"
      onClick={(e) => {
        e.preventDefault();
        setSidebarState(true);
      }}
    >
      MENU
    </b>
  );

  const sidebar = (
    <div className="sidebar">
      <div className="sidebar_menu">
        <h4>Menu</h4>
        <b
          onClick={(e) => {
            e.preventDefault();
            setSidebarState(false);
          }}
        >
          close
        </b>
      </div>
    </div>
  );

  const topnav = (
    <div className="App">
      <b>LOGO</b>
      <div className="nav">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">Settings</a>
        <a href="#" id="button">
          LOGIN
        </a>
        {hamburger}
      </div>
    </div>
  );

  const head = (
    <div style={{ backgroundColor: onTheme ? "white" : "darkgrey" }}>
      <h1>Head</h1>
      <p>
        The element is a container for metadata (data about data) and is placed
        between the tag and the tag. Metadata is data about the HTML document.
        Metadata is not displayed. Metadata typically define the document title,
        character set, styles, scripts, and other meta information.
      </p>
      {switchtheme}
      {newtheme}
    </div>
  );

  // array_name.map((array_item)=>{return(<div></div>)})
  // const renderProducts=<div className='product_card'><h4><b>Price</b></h4></div>
  // const renderProducts = console.log(products[3].price)

  const content = (
    <div>
      <h1>Content</h1>
    </div>
  );

  const increment = () => alert("-_!!Hello Sweeetie!!_-");

  const renderProducts = productsState.map((product, index) => {
    return (
      <div className="product_card">
        <h4>{product.name}</h4>
        <b>{product.price}</b>
        <div className="counter">
          <span className="counter_output">{product.addCart}</span>
          {!product.addCart ? (
            <div className="btn_container">
              <button
                className="control_btn"
                onClick={() => handleToggleCart(index)}
              >
                Add to cart
              </button>
            </div>
          ) : (
            <div className="btn_container">
              <button className="control_btn" onClick={() => increase(index)}>
                +
              </button>
              <button className="control_btn" onClick={() => decrease(index)}>
                -
              </button>
            </div>
          )}
        </div>
      </div>
    );
  });

  const renderInterns = interns.map((intern) => {
    return (
      <div className="intern_card">
        <h4>{intern.name}</h4>
        <b>{intern.place}</b>
      </div>
    );
  });
  const renderFollwe = foll.map((followers, index) => {
    return (
      <div className="follow_card">
        <h4>{followers.name}</h4>
        <b>{followers.bio}</b>
        <div className="button_change">
          <button onClick={() => handlefollow(followers, index)}>
            {followers.isFollowing ? "unFollow" : "Follow"}
          </button>
        </div>
      </div>
    );
  });

  const renderItems = todoItems.map((Items, index) => {
    return (
      <div className="todo-list">
        <li>Items.name</li>
      </div>
    );
  });

  const footer = (
    <div>
      <h1>Footer</h1>
    </div>
  );

  return (
    <React.Fragment>
      {sidebarIsOn && sidebar}
      {topnav}
      {head}
      {content}
      <div className="product_section">{renderProducts}</div>
      <div className="intern_section">{renderInterns}</div>
      <div className="follow_section">{renderFollwe}</div>
      <div className="item_section">{renderItems}</div>

      {footer}
      <Button>click</Button>
      <Heading />
      <Coloring />
      <Paragraph />
      <div className="item">
        {products.map((product, index) => {
          return (
            <Purchase
              key={index}
              name={product.name}
              price={product.price}
              increment={increment}
            />
          );
        })}
      </div>
      <Student />
      <div className="app">
        {followers.map((followers, index) => {
          return (
            <Instagram key={index} name={followers.name} bio={followers.bio} />
          );
        })}
      </div>
      <Navigation />
      <Appp />
      <Todolist />
    </React.Fragment>
  );
}

export default App;
