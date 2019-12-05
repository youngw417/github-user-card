import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import UserCards from './components/UserCards';
import Followers from './components/Followers';
import Home from './components/Home';
import axios from 'axios';


// change to class component

// getch the data

// display with components
  // create a usercard component
  // create followers comonent


class App extends React.Component {

  state = {
    user: {}
  }

  componentDidMount() {
     axios.get('https://api.github.com/users/youngw417').then(res => {
       console.log('res', res);
       this.setState({user: res.data})
     })
  }

  render() {
    return (
    <Router>
       <div className="App">
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/usercards" render ={(props) =><UserCards {...props} user={this.state.user} />}/>
      <Route path="/followers" component={Followers} />
    

    </div>
    </Router>
   
  );
  }
  
}

export default App;
