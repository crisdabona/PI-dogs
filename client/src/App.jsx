import { Route, Routes } from 'react-router';
import Landing from './views/landing/Landing'
import Home from './views/home/Home'
import Detail from './views/detail/Detail'
import Create from './views/create/Create'
import Error from './views/error/Error';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Landing /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/home/:id' element={ <Detail /> } />
        <Route path='/create' element={ <Create /> } />
        <Route path='*' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
