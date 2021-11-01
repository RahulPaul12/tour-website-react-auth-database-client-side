
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Details from './Components/Details/Details';
import Doctors from './Components/Doctors/Doctors';
import Home from './Components/Home/Home';
import Header from './Components/Home/Navbar/Header';
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound/Notfound';
import Authprovider from './Components/Context/Authprovider';
import Footer from './Components/Footer/Footer';


import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Privateroute from './Components/Login/PrivateRoute/Privateroute';
import Register from './Components/Register/Register';
import Blogs from './Components/Blogs/Blogs';
import Addservice from './Components/Addservice/Addservice';

import Hotels from './Components/Hotels/Hotels';


function App() {
  return (
    <div>

      <Authprovider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/addservice">
              <Addservice></Addservice>
            </Route>
            
           
            <Privateroute path="/blogs">
              <Blogs></Blogs>
            </Privateroute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Privateroute path="/details/:serviceId">
              <Details></Details>
            </Privateroute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </Authprovider>
    </div>

  );
}

export default App;
