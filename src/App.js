import './App.css';
import ADA from './pages/50001';
import SED from './pages/50002';
import MOC from './pages/50003';
import OS from './pages/50004';
import Home from './pages/homepage';
import DRP from './pages/DRP';
import PS from './pages/50008';
import NetworksAndCommunications from './pages/50005';
import Compilers from './pages/50006';
import Prolog from './pages/50007.2';
import Lab2 from './pages/50007.1';
import Law from './pages/50010.2';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom/dist';


function App() {
  return (
    <div className='bg-white dark:bg-[#1e2124] dark:text-white'>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/50001" element={<ADA />}/>
          <Route path="/50002" element={<SED />}/>
          <Route path="/50003" element={<MOC />}/>
          <Route path="/50004" element={<OS />}/>
          <Route path="/50005" element={<NetworksAndCommunications />}/>
          <Route path="/50006" element={<Compilers />}/>
          <Route path="/50007.1" element={<Lab2 />}/>
          <Route path="/50007.2" element={<Prolog />}/>
          <Route path="/50008" element={<PS />}/>
          <Route path="/DRP" element={<DRP />}/>
          <Route path="/50010.2" element={<Law />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}


export default App;
