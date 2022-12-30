import { Routes, Route } from 'react-router-dom';
import Home from './components/Routes/home/home.component';

import Navigation from './components/Routes/navigation/navigation.component';

const Shop = () => (
  <div>
    <h1>Clothes</h1>
  </div>
)

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='shop' element={<Shop />} ></Route>
      </Route>
    </Routes>
  )
}

export default App;
