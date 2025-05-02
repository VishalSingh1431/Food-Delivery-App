import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Pages/Home';
import Breakfast from './Component/Pages/Breakfast';
import Lunch from './Component/Pages/Lunch';
import Dinner from './Component/Pages/Dinner';
import Beverages from './Component/Pages/Beverages';
import Desserts from './Component/Pages/Desserts';
import Landing from './Component/Pages/Landing';
import All from './Component/All';
import Email from './Component/Email';

function App() {
  return (
    <>
      <Navbar />
      <Landing /> {/* Always visible */}
      <Home />    {/* Always visible */}
      
      <Routes>
        <Route path="/all" element={<All />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/email" element={<Email/>} />
        <Route path="/desserts" element={<Desserts />} />
      </Routes>
    </>
  );
}

export default App;
