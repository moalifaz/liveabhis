import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
// import Topbar from './Components/topbar/Topbar';
import Home from './Components/Sidebar/Home/Home';
import Institutes from './Components/Sidebar/Institutes/Institutes';
import Admins from './Components/Sidebar/Admins/Admins';
import Reports from './Components/Sidebar/Reports/Reports';
import ELibrary from './Components/Sidebar/E-Library/E-Library';
import Support from './Components/Sidebar/Support/Support';
import InstituteTable from './Components/Sidebar/Institutes/InstituteTable';
import AdminsTable from './Components/Sidebar/Admins/AdminsTable';
import ReportsTable from './Components/Sidebar/Reports/ReportsTable';
import ELibraryTable from './Components/Sidebar/E-Library/ELibraryTable';



function App() {
  return (
    <div className="App">
    <Sidebar/>
    {/* <Topbar/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/institute' element={<Institutes/>}>
        <Route path='/institute/add' element={<InstituteTable/>}/>
        </Route>
      <Route path='/admins' element={<Admins/>}/>
        <Route path='/admins/add' element={<AdminsTable/>}/>
      
      <Route path='/reports' element={<Reports/>}/>
        <Route path='/reports/add' element={<ReportsTable/>}/>
      <Route path='/elibrary' element={<ELibrary/>}/>
        <Route path='/elibrary/add' element={<ELibraryTable/>}/>
      <Route path='/support' element={<Support/>}/>
    </Routes>
    </div>
  );
}

export default App;
