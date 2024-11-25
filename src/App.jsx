
import Routing from "./router/Routing"
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Routing/>
      <ToastContainer/>
    </>
  )
}

export default App;