import "./App.css";
import Place from "./Pages/Place";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <body>
      <Header />
      <div className="grid grid-cols-5 gap-4 px-5">
        <Sidebar />
        <section className="border-l-4 col-start-2 col-end-6">
          <Place />
          <Place />
          <Place />
        </section>
      </div>
    </body>
  );
}

export default App;
