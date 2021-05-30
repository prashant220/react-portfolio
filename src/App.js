import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact'
import Project from './Project/Project'
import Resume from './Resume/Resume'
import './App.css';
import { Route,Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import Footer from './Footer/Footer';
import Protected from './Protected/Protected'
function App() {
  return (
    

 
    <div className="App">
      <Navbar/>
   
  <Switch>
  <Route exact path="/" component={SignUp}/>
  <Route exact path="/login" component={Login}/>
 {/* <Protected Cmp={Home}/> */}
  <Route exact path="/home" component={Home}/>
     <Route exact path="/about" component={About}/>
     <Route exact path="/project" component={Project}/>
     <Route exact path="/resume" component={Resume}/>
     <Route exact path="/contact" component={Contact}/>


  </Switch>
      
 
  
  <Footer/>
  
  

   
  </div>
    
  );
}

export default App;
