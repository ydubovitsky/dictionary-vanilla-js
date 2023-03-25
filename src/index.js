import { Hero } from './components/hero/Hero.component';
import "./styles.scss";

const props = {
  title : "Лучший словарь в мире",
  subTitle: "Вы найдете английские слова со значениями, которые необходимы учащимся среднего уровня, с полезными переводами на русский язык"
}
const hero = new Hero(props);

const root = document.getElementById("root");
root.append(hero.element);
