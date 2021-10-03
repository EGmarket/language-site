import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     
     
    </div>
  );
}

export default App;
