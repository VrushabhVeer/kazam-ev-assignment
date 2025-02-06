import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar />
      <AppRoutes />
      <ToastContainer toastClassName="font-quicksand text-black font-medium" />
    </div>
  );
}

export default App;
