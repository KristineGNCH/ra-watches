import { useState } from "react";
import PropTypes from "prop-types";

function WatchForm({ addWatch }) {
  const [nameWatch, setNameWatch] = useState("");
  const [timeZone, setTimeZone] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addWatch({ nameWatch, timeZone, id: Date.now() });
    setNameWatch("");
    setTimeZone("");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="city__wrapper">
        <p className="city__title">Название</p>
        <input
          className="form__input "
          type="text"
          id="watchName"
          value={nameWatch}
          onChange={(e) => setNameWatch([e.target.value])}
          required
        />
      </div>
      <div className="timezone">
        <p className="timezone__title">Временная зона</p>
        <input
          className="form__input "
          type="number"
          id="timeZone"
          value={timeZone}
          onChange={(e) => setTimeZone([e.target.value])}
          required
        />
      </div>
      <button className="add__button button">Добавить</button>
    </form>
  );
}

WatchForm.propTypes = {
  addWatch: PropTypes.func.isRequired,
};

export default WatchForm;
