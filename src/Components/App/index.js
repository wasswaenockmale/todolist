import { Component } from 'react';
import Header  from '../Header';
import Login from '../Login';
import './index.css'
class App extends Component {
    render(){
        return (
            <div>
              <Header/>
              <div className="center-div">
              <div className='inner-div'>
                  <h4 className='text-center'>
                  Welcome to your daily schedule system.
                  Login to setup today's program.
                  </h4>
                  <Login />
              </div>
            </div>
            </div>
          );
    }
  }
  
  export default App;
  