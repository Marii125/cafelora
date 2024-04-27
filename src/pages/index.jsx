import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/header/Header';
import { Banner } from '../components/banner/Banner';
import { Menu } from '../components/menu/Menu';
import { Gallery } from '../components/gallery/Gallery';
import { Contact } from '../components/contact/Contact';
import { Footer } from '../components/footer/Footer';

const response = await fetch('http://localhost:4000/api/drinks');
const { data } = await response.json();

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={data} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

const button = document.querySelector('.nav-btn');
button.addEventListener('click', () => {
  const nav = document.querySelector('.rollout-nav');
  nav.classList.toggle('nav-closed');
});

const buttonClosed = document.querySelector('.rollout-nav');
buttonClosed.addEventListener('click', () => {
  buttonClosed.classList.toggle('nav-closed');
});
