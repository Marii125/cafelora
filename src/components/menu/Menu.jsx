import { Drink } from '../drink';
import { Layer } from '../layer/Layer';
import './Menu.css';

export const Menu = ({ drinks }) => {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
          {drinks.map((drink) => {
            return (
              <Drink
                key={drink.id}
                id={drink.id}
                name={drink.name}
                ordered={drink.ordered}
                image={drink.image}
                layers={drink.layers}
              />
            );
          })}

          {/* <Drink
            id={0}
            name="Romano"
            ordered={false}
            image="http://localhost:4000/assets/cups/romano.png"
            layers={[
              {
                color: '#fbdf5b',
                label: 'citrón',
              },
              {
                color: '#613916',
                label: 'espresso',
              },
            ]}
          /> */}
          {/* <div className="drink">
            <div className="drink__product">
              <div className="drink__cup">
                <img src="/cups/espresso.png" />
              </div>
              <div className="drink__info">
                <h3>Espresso</h3>
                <div className="layer">
                  <div
                    className="layer__color"
                    style={{ backgroundColor: '#613916' }}
                  ></div>
                  <div className="layer__label">espresso</div>
                </div>
              </div>
            </div>
            <form className="drink__controls">
              <input type="hidden" className="order-id" value="0" />
              <button className="order-btn">Objednat</button>
            </form>
          </div>

          <div className="drink">
            <div className="drink__product">
              <div className="drink__cup">
                <img src="/cups/doppio.png" />
              </div>
              <div className="drink__info">
                <h3>Doppio</h3>
                <div className="layer">
                  <div
                    className="layer__color"
                    style={{ backgroundColor: '#613916' }}
                  />
                  <div className="layer__label">espresso</div>
                </div>
              </div>
            </div>
            <form className="drink__controls">
              <input type="hidden" className="order-id" value="1" />
              <button className="order-btn">Objednat</button>
            </form>
          </div>

          <div className="drink">
            <div className="drink__product">
              <div className="drink__cup">
                <img src="/cups/lungo.png" />
              </div>
              <div className="drink__info">
                <h3>Lungo</h3>
                <div className="layer">
                  <div
                    className="layer__color"
                    style={{ backgroundColor: '#b0dee1' }}
                  />
                  <div className="layer__label">voda</div>
                </div>
                <div className="layer">
                  <div
                    className="layer__color"
                    style={{ backgroundColor: '#613916' }}
                  />
                  <div className="layer__label">espresso</div>
                </div>
              </div>
            </div>
            <form className="drink__controls">
              <input type="hidden" className="order-id" value="2" />
              <button className="order-btn">Objednat</button>
            </form>
          </div> */}
        </div>

        <div className="order-detail">
          <a href="/order.html">Detail objednávky</a>
        </div>
      </div>
    </section>
  );
};
