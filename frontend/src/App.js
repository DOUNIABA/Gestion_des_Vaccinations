
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Login from "./Page/login";
import Register from "./Page/Register"
import Home from "./Page/home"
import PageErreur from "./Page/pageError"

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/login" element={< Login />} />
      <Route path="/Register" element={<Register />}/>
      <Route path="/home" element={<Home />}/>

      <Route path="*" element={<PageErreur />} />
    </Routes>
    
    </BrowserRouter>
  );
}
export default App;
