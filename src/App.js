import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from './view/Auth'
import Landing from './components/Landing'
import DashBoard from './view/DashBoard'
import Store from './view/Store'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {

  return (
    <div className="background">
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Landing}></Route>
        <Route exact path='/login' render={props => <Auth {...props} authRoute='login' />}></Route>
        <Route exact path='/register' render={props => <Auth {...props} authRoute='register' />}></Route>
        <Route exact path='/dashboard' component={DashBoard} />
        <Route exact path='/store' component={Store} />
      </Switch>
      <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
