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
          {layers.map((ingredients) => {
            return (
              <Layer
                key={ingredients.id}
                color={ingredients.color}
                label={ingredients.label}
              />
            );
          })}

          {/*     <Layer color={'#feeeca'} label={'mléčná pěna'} /> */}
          {/* <div className="layer">
            <div
              className="layer__color"
              style={{ backgroundColor: '#613916' }}
            ></div>
            <div className="layer__label">espresso</div>
          </div> */}
        </div>
      </div>
      <form className="drink__controls">
        <input type="hidden" className="order-id" value="0" />
        <button className="order-btn">Objednat</button>
      </form>
    </div>
  );
};
