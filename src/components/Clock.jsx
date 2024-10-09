import  { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import dayjs from 'dayjs'

function Clock({ watch, onDelete }) {
    const difference = new Date().getTimezoneOffset() / 60 + Number(watch.timeZone);
    const [second, setSecond] = useState(dayjs().format('s'));
    const [minute, setMinute] = useState(dayjs().format('m'));
    const [hour, setHour] = useState(Number(dayjs().format('h')) + difference);

    useEffect(() => {
        const tiktak = setInterval(() => {
            setSecond(dayjs().format('s'));
            setMinute(dayjs().format('m'));
            setHour(Number(dayjs().format('h')) + difference);
        }, 1000)
        return () => clearInterval(tiktak);
    }, [difference]);

    return (
        <div className="watch__item">
            <p className="city__title">
                {watch.nameWatch} <br/> ({watch.timeZone >= 0 ? 'UTC: +' : 'UTC: -'}{Math.abs(watch.timeZone)}) 
                <button className="delete__button button" onClick={() => onDelete(watch.id)}>X</button>
            </p>
            <div className="watch__wrapper">
            <div className="watch__center"></div>
                <div className="watch__second" style={{ transform: `rotate(${second * 6}deg)` }}></div>
                <div className="watch__minute" style={{ transform: `rotate(${minute * 6}deg)` }}></div>
                <div className="watch__hour" style={{ transform: `rotate(${hour * 30 + minute / 12 * 6}deg)` }}></div>
            </div>
        </div>
    );
}

Clock.propTypes = {
    watch: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Clock
