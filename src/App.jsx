import 'simplebar';
import 'simplebar/dist/simplebar.css';
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";

const App = () => {

  const animScroll = () => {
    const animItems = document.querySelectorAll(".anim-js");
    const offset = (el) => {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.scrollY;
      return {
        top: rect.top + scrollTop,
      };
    };

    animItems.forEach((item) => {
      const animItemHeight = item.offsetHeight;
      const animItemOffset = offset(item).top;
      let animItemPoint = window.innerHeight - animItemHeight / 4;

      if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
        item.classList.add("scroll");
      }
    });
  };

  setTimeout(animScroll, 300);
  window.addEventListener("scroll", animScroll);

  return (
    <div className="App">
      <Header />
      <Intro />
    </div>
  );
}

export default App;
