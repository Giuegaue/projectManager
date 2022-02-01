import './App.css';
import {Link, Switch, Route, Redirect} from 'react-router-dom'
import Main from './components/Main';
import Create from './components/Create'
import View from './components/View'
import Update from './components/Update'


function App() {

  return (
    <div className="App">
      <h1>
        New Product
      </h1>
      <Link to ="/">Home</Link>
      <Create/>
      <Switch>
        <Route path ="/Main/update/:id">
          <Update/>
        </Route>
        <Route path="/Main/:id">
          <View/>
        </Route>
        <Route path="/Main">
          <Main/>
        </Route>
        <Route path = "/">
          <Redirect to="/Main"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
