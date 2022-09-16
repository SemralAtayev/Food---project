function calc() {
  //calculator

  const result = document.querySelector(".calculating__result span");

  let gender, height, weight, age, ratio;

  if (localStorage.getItem("gender")) {
    gender = localStorage.getItem("gender");
  } else {
    gender = "female";
    localStorage.setItem("gender", "female");
  }

  if (localStorage.getItem("ratio")) {
    ratio = localStorage.getItem("ratio");
  } else {
    ratio = 1.375;
    localStorage.setItem("ratio", 1.375);
  }

  function addActiveClass(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((elem) => {
      elem.classList.remove(activeClass);

      if (
        elem.getAttribute("id") === localStorage.getItem("gender") ||
        elem.getAttribute("data-ratio") === localStorage.getItem("ratio")
      ) {
        elem.classList.add(activeClass);
      }
    });
  }
  addActiveClass("#gender div", "calculating__choose-item_active");
  addActiveClass(
    ".calculating__choose.calculating__choose_big div",
    "calculating__choose-item_active"
  );

  function calcResult() {
    if (!gender || !height || !weight || !age || !ratio) {
      result.innerHTML = "____";
      return;
    } else {
      if (gender === "female") {
        result.innerHTML =
          Math.round(447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio;
      } else {
        result.innerHTML = Math.round(
          (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio
        );
      }
    }
  }

  calcResult();

  function getStaticInfo(parent, activeClass) {
    const calcChoose = document.querySelectorAll(`${parent} div`);

    calcChoose.forEach((e) => {
      e.addEventListener("click", (event) => {
        if (event.target.getAttribute("id") === "female") {
          gender = "female";
          localStorage.setItem("gender", event.target.getAttribute("id"));
        } else if (event.target.getAttribute("id") === "male") {
          gender = "male";
          localStorage.setItem("gender", event.target.getAttribute("id"));
        }

        if (event.target.hasAttribute("data-ratio")) {
          ratio = +event.target.getAttribute("data-ratio");
          localStorage.setItem(
            "ratio",
            +event.target.getAttribute("data-ratio")
          );
        }

        calcChoose.forEach((ev) => {
          ev.classList.remove(activeClass);
        });

        event.target.classList.add(activeClass);

        calcResult();
      });
    });
  }

  function getDinamicInfo(parent) {
    const input = document.querySelector(parent).querySelectorAll("input");
    input.forEach((e) => {
      e.addEventListener("input", (event) => {
        if (event.target.id === "height") {
          if (event.target.value.match(/\D/g)) {
            event.target.style.border = "1px solid red";
          } else {
            event.target.style.border = "";
            height = +e.value;
          }
        }
        if (event.target.id === "weight") {
          if (event.target.value.match(/\D/g)) {
            event.target.style.border = "1px solid red";
          } else {
            event.target.style.border = "";
            weight = +e.value;
          }
        }
        if (event.target.id === "age") {
          if (event.target.value.match(/\D/g)) {
            event.target.style.border = "1px solid red";
          } else {
            event.target.style.border = "";
            age = +e.value;
          }
        }

        calcResult();
      });
    });
  }

  getStaticInfo("#gender", "calculating__choose-item_active");
  getStaticInfo(
    ".calculating__choose.calculating__choose_big",
    "calculating__choose-item_active"
  );

  getDinamicInfo(".calculating__choose_medium");
}

export default calc;