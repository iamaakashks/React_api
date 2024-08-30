import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Details from './components/Details';

export default function App(){
  return (
    <div className='main w-full h-screen'>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  )
}