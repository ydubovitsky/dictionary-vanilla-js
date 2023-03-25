import styles from "./styles.module.scss";

export class Hero {

  element = null;
  dataElements = null;

  constructor({ title, subTitle } = {}) {
    this.title = title;
    this.subTitle = subTitle;

    // Invoke function
    this.render();
  }

  getTemplate() {
    return `
      <div class=${styles["container"]}>
        <h1 data-element="title" class=${styles["title"]}>${this.title}</h1>
        <p data-element="sub-title" class=${styles["sub-title"]}>${this.subTitle}</p>
      </div>
    `
  }

  /**
   * Возвращает объект содержащий все data-element; данные элементы нужны для обращения к ним без повторной выборки элементов
   * @param {*} DOMElement 
   */
  getDataElements(DOMElement) {
    const elements = DOMElement.querySelectorAll("[data-element]");
    this.dataElements = Array.from(elements).reduce((accumulator, curElement) => {
      return {
        ...accumulator,
        [curElement.nodeName]: curElement
      }
    }, {})
  }

  render() {
    const element = document.createElement("div");
    element.innerHTML = this.getTemplate();
    this.element = element.firstElementChild;

    this.getDataElements(this.element);
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
    this.element = null;
    this.dataElements = {};
  }
}