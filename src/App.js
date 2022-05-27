import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom'
import { productInputs, userInputs } from "./formSource";
import './style/dark.scss'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const {darkmode} = useContext(DarkModeContext)

  return (
    <div className={darkmode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route exact path="users">
              <Route index element = {<List/>}/>
              <Route path="new" element = {<New inputs={userInputs} title="Add New User"/>}/>
              <Route path=":userId" element = {<Single/>}/>
            </Route>
            <Route exact path="products">
              <Route index element = {<List/>}/>
              <Route path="new" element = {<New inputs={productInputs} title="Add New Product"/>}/>
              <Route path=":productId" element = {<Single/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;