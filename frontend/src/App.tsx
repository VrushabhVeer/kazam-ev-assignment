import "./App.css";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
