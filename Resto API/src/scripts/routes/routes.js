import Home from "../views/pages/home";
import Favorite from "../views/pages/favorite";
import AboutUs from "../views/pages/aboutus";
import Detail from "../views/pages/detail";

const routes = {
    '/': Home,
    '/home': Home,
    '/favorite': Favorite,
    '/aboutus' : AboutUs,
    '/detail/:id': Detail,
  };

  const router = {
    async render() {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes[url.path];
      if (page) {
        document.querySelector('#main').innerHTML = await page.render();
        await page.afterRender();
      }
    },
  };
  
   
  export default routes;