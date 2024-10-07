
import { useState } from "react";
import "./Watches.css";

const TimeZone = {
  New_York: "America/New York",
  Moscow: "Europe/Moscow",
  London: "Europe/London",
  Tokyo: "Asia/Tokyo"
};

function WatchForm({ onAdd, cityList }) {
  const [selectedCity, setSelectedCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedCity && !cityList.includes(selectedCity)) {

      const timezone = TimeZone[selectedCity];

      onAdd({ name: selectedCity, timezone });
      setSelectedCity("");
    }
  };

  return (
    <form className="watch__form" onSubmit={handleSubmit}>
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        required
      >
        <option value="Выберите город"></option>
        {Object.keys(TimeZone)
          .filter((city) => !cityList.includes(city))
          .map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
      </select>
      <button className="add__watch button" type="submit" value="submit">Добавить часы</button>
    </form>
  );
}   

export default WatchForm;
