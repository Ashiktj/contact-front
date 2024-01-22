import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import View from './Pages/View'
import Edit from "./Pages/Edit"
import Add from './Pages/Add'
import Dashboard from './Pages/Dashboard';
import axios from 'axios'





function App() {
  return (
    <div className="App">
      <header><Header /> </header>
      <section>
        < Routes>
        <Route path='/dashboard' element={<Dashboard/>} />

          <Route path='/' element={<Home />} />
          <Route path='/add' element={<Add/>} />
          <Route path='/view/:id' element={<View />} />
          <Route path='/edit/:id' element={<Edit />} />

        </Routes>
      </section>
      <footer><Footer /></footer>


    </div>
  );
}

export default App;
