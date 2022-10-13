import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Add from './pages/Add';
import Books from './pages/Books';
import NotFound from './pages/NotFound';
import Update from './pages/Update';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route path='/' element={<Books/>} />
  <Route path='/add' element={<Add/>} />
  <Route path='/update' element={<Update/>} />
  <Route path="*" element={<NotFound />} />
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
