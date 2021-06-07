// Import All Our Components
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";

// Import React and hooks
import React, { useState, useEffect } from "react";

// Import components from React Router
import { Route, Switch } from "react-router-dom";


function App(props) {
  ////////////////////
  // Style Objects
  ////////////////////

  const h1 = {
    textAlign: "center",
    margin: "10px",
  };

  ///////////////
  // State & Other Variables
  ///////////////


  // Our Api Url from backend Heroku
  const url = "https://blog-rail-ma.herokuapp.com/posts/";

    // State to Hold The List of Posts
    const [posts, setPosts] = useState([]);

    // Function to get list of Todos from API
    const getTitles = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data);
    };

    //////////////
    // useEffects
    //////////////

    // useEffect to get list of titles when page loads
  useEffect(() => {
    getTitles();
  }, []);

  
  /////////////////////
  // returned JSX
  /////////////////////
  return (
    <div>
      <h1 style={h1}>Titles and Roles</h1>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <AllPosts {...routerProps} posts={posts} />}
        />
        <Route
          path="/post/:id"
          render={(routerProps) => (
            <SinglePost {...routerProps} posts={posts} />
          )}
        />
        <Route
          path="/new"
          render={(routerProps) => <Form {...routerProps} />}
        />
        <Route
          path="/edit"
          render={(routerProps) => <Form {...routerProps} />}
        />
      </Switch>
    </div>
  );
}

export default App;
