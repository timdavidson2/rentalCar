
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BookingCar from './pages/BookingCar'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Route path ='/' exact component={Home} />
        <Route path ='/login' component={Login} />
        <Route path ='/register'  component={Register} />
        <Route path ='/bookingcar'  component={BookingCar} />
     </BrowserRouter>
    </div>
  );
}

export default App;
