import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/styles.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Index } from "./pages/index.jsx";
import { About } from "./pages/about";
import { Help } from "./pages/help";
import { Layout } from "./pages/layout";
import { RegisterForm } from "./pages/register";

function App() {
  return (
    <>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout />}>
           <Route index element={<Index />} />
           <Route path="about" element={<About />} />
           <Route path="help" element={<Help />} />
           <Route path="register" element={<RegisterForm />} />
         </Route>
       </Routes>

     </BrowserRouter>
    </>
  );
}

export default App;
