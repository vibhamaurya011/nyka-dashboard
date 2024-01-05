import Navbar from "./components/navbar/Navbar";
import MaimRoute from "./route/mainRoute";
function App() {
  return (
    <div className="flex bg-gray-100 h-screen">
      <div className="w-1/4 p-4 t-0 l-0">
        <Navbar />
      </div>
      <div className="w-3/4 p-4"> 
        <MaimRoute />
      </div>
    </div>
  );
}

export default App;
