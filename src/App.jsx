import React from "react";
import Clock from "./components/Clock";
import WatchForm from "./components/WatchForm";
import "./App.css";

function App() {

  const [clocks, setClocks] = React.useState([]);

  const addClock = (clock) => {
    setClocks([...clocks, clock]);
  };

  const removeClock = (name) => {
    setClocks(clocks.filter(clock => clock.name !== name));
  };

  return (
    <>
      <div className="app">
      <h1 className="title">Мировые часы</h1>
      <WatchForm onAdd={addClock} existingCities={clocks.map(clock => clock.name)} />
      <div className="clocks__wrapper">
        {clocks.map((clock) => (
          <Clock key={clock.name} clock={clock} onDelete={removeClock} />
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
