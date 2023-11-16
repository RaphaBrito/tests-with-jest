import './App.css'
import ComponentWithState from "./components/ComponentWithState";
import DataComponent from "./components/DataComponent";

 function App() {
  return (
    <div className="App">
      <h1>Olá! Vamos aprender a testar componentes!</h1>
      <h2>Vamos lá!!</h2>
      <ComponentWithState />
      <DataComponent />
    </div>
  );
}

export function add(a, b) {
  return a + b;
}

export default App
