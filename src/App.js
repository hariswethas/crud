import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StudentTable from './StudentTable';
import CreateTable from './CreateTable';
import EditingTable from './EditingTable';
import ViewTable from './ViewTable';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentTable />} />
        <Route path="/student/create" element={<CreateTable />} />
        <Route path="/student/edit/:studentId" element={<EditingTable />} />
        <Route path="/student/view/:studentId" element={<ViewTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
