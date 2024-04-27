import { Layer } from '../layer/Layer';
import './style.css';

export const Drink = ({ id, name, image, ordered, layers }) => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={'http://localhost:4000' + image} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((ingredients, index) => {
            return (
              <Layer
                key={index}
                color={ingredients.color}
                label={ingredients.label}
              />
            );
          })}
        </div>
      </div>
      <form data-id={id} data-ordered={ordered} className="drink__controls">
        <input type="hidden" className="order-id" value="0" />
        <button
          className={
            ordered === true ? 'order-btn order-btn--ordered' : 'order-btn '
          }
        >
          {ordered === true ? 'Zrušit' : 'Objednat'}
        </button>
      </form>
    </div>
  );
};
