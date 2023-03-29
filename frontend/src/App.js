
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Login from "./Page/login";
import Register from "./Page/Register"
import Error from "./Page/pageError"

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={< Login />} />
      <Route path="/Register" element={<Register />}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}
export default App;
