import Clock from "./Clock";
import PropTypes from 'prop-types';

function Watches({ listWatches, onDelete }) {

  return (
    <ul className="watch__items">
      {listWatches.map((item) => 
          <li className="watch__item" key={item.id}>
            <Clock watch={item} onDelete={onDelete} />   
          </li> 
      )}
    </ul>
  );
}

Watches.propTypes = {
  listWatches: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Watches