import Login from '../Login';
import './index.css'
function App() {
    return (
      <div className="center-div">
        <div className='inner-div'>
            <h4 className='text-center'>
            Welcome to your daily schedule system.
            Login to setup today's program.
            </h4>
            <Login />
        </div>
      </div>
    );
  }
  
  export default App;
  