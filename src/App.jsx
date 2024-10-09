import { useState } from "react";
import "./App.css";
import WatchForm from "./components/WatchForm";
import Watches from "./components/Watches";

function App() {
  const [listWatches, setListWatches] = useState([]);

  const addWatch = (newWatch) => {
    setListWatches((prev) => [...prev, newWatch]);
  };

  const onDelete = (id) => {
    setListWatches((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <WatchForm addWatch={addWatch} />
      <Watches listWatches={listWatches} onDelete={onDelete} />
    </>
  );
}

export default App;
