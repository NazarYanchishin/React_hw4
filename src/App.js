import React from "react";
import HomePage from "./Home";
import Post from "./Post";
import Photo from "./img";
import ContactBook from "./Contcts/contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

export default function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/post">Post</Link>
              </li>
              <li>
                <Link to="/photo">Photo</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/post">
              <Post
                  author={{
                    name: "Anakin Skywalker",
                    photo: ANAKIN_IMAGE,
                    nickname: "@dart_vader"
                  }}
                  content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
                  image={RAY_IMAGE}
                  date={"26 февр."}
              />
            </Route>
            <Route path="/photo">
              <Photo />
            </Route>
            <Route exact path="/">
            <HomePage/>
          </Route>
            <Route path="/contact">
            <ContactBook />
          </Route>
          </Switch>
        </div>
      </Router>
  );
}
