import { useEffect, useState } from "react";
import moment from 'moment-timezone';
import { Text } from "@chakra-ui/react";

export default function Clock ({clock, onDelete}) {


  const setTime = useState(moment().tz(clock).format('hh:mm:ss'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment().tz(clock).format('hh:mm:ss'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="watch__container">
      <div className="watch__items">
        <Text className="watch__item">
        </Text>
      </div>
      <div className="clock__label">{clock}</div>
      <button className="delete__button" onClick={() => onDelete(clock)}> X </button>
    </div>
  );
};



