import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ImageUpload from './components/ImageUpload';
import GetImages from './components/GetImages';
export class App extends Component {
  render() {
    return (
      <div>
      <h1 className="text-center">Image Upload Application </h1>
      <Router>
          <nav>
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to="/"> Home </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/Images"> Images </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" Component={ImageUpload}>
            <ImageUpload />
            </Route>
            <GetImages path="/Images" Component={GetImages}>
              <GetImages/>
            </GetImages>
            <Route path="*">
            <ImageUpload/>
          </Route>
          </Switch>
        </Router>
     </div>
    )
  }
}

export default App;

