import { Route, Routes } from "react-router-dom";
import { Header,Footer } from "./components";
import { Login,Signup,Home, ForgotPass } from "./pages";

function App() {
  return (
    <div>
      <Header/>
      <Routes>

        {/* Dynamic routes should be there after integrating backend and checking for authentication */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPass />} />



      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
