function cards() {
  // menu cards template

  // мой вариант конструктора

  class MenuCard {
    constructor(src, alt, title, desc, price, parentElement, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.desc = desc;
      this.price = price;
      this.classes = classes;
      this.parentElement = document.querySelector(parentElement);
      this.convertation = 27;
      this.converToUAH();
    }

    converToUAH() {
      this.price = this.price * this.convertation;
    }

    render() {
      const element = document.createElement("div");
      if (this.classes.length === 0) {
        this.element = "menu__item";
        element.classList.add(this.element);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }

      element.innerHTML = `           
                <img src=${this.src} alt=${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.desc}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>            
            `;

      this.parentElement.append(element);
    }
  }

  // const getResours = async (url) => {
  //   const res = await fetch(url);

  //   if (!res.ok) {
  //     throw new Error(`Ошибка в url ${url} и в ${res.status}`);
  //   }

  //   return await res.json();
  // };

  // getResours('http://localhost:3000/menu')
  //   .then(data => {
  //     data.forEach( ({img, altimg, title, descr, price}) => {
  //         new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
  //     });
  //   });

  axios.get("http://localhost:3000/menu")
  .then((datam) => {
    datam.data.forEach(({ img, altimg, title, descr, price }) => {
      new MenuCard(
        img,
        altimg,
        title,
        descr,
        price,
        ".menu .container"
      ).render();
    });
  });
}

export default cards;
