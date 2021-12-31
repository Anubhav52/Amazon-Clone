import './App.css';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    //only runs once when the app components loads

    auth.onAuthStateChanged((authUser) => {
      console.log('user :', authUser);

      if (authUser) {
        // either the user logged in or the user was already logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={[<Header />, <Home />]} />
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={[<Header />, <Checkout />]} />
          <Route
            path='/payment'
            element={[
              <Header lower_display_none='_lower_display_none' />,
              <Payment />,
            ]}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
