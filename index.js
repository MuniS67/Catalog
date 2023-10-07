let doc = document;
let cont = doc.querySelector(".container");
let h2 = doc.querySelector("h2");
let btnCount = doc.querySelector("[data-count]");
let btnAll = doc.querySelector("[data-all]");
let btnBusket = document.querySelector("[data-basket]");
let basket = document.querySelector(".basket");
let basketCOntent = document.querySelector(".basket-content");
let busketClose = document.querySelector("[data-busketClose]");
let busket = [];
h2.innerHTML = `You have <b>${busket.length}</b> elements in busket`;

let catalog = [];

reload(arr);

function reload(arr) {
  for (let item of arr) {
    catalog.push(item);
    let mainDiv = doc.createElement("div");
    let mainImg = doc.createElement("img");
    let middleDiv = document.createElement("div");
    let h1 = doc.createElement("h1");
    let p = doc.createElement("p");
    let btn = doc.createElement("button");
    let bottomDiv = doc.createElement("div");
    let bottomDivBox1 = doc.createElement("div");
    let bottomDivBox2 = doc.createElement("div");
    let bottomDivBox3 = doc.createElement("div");
    let box1p = doc.createElement("p");
    let box2p = doc.createElement("p");
    let box3p = doc.createElement("p");
    let box1img = doc.createElement("img");
    let box2img = doc.createElement("img");
    let box3img = doc.createElement("img");

    mainDiv.classList.add("mainDiv");
    mainImg.classList.add("mainImg");
    middleDiv.classList.add("middleDiv");
    h1.classList.add("h1");
    p.classList.add("p");
    bottomDiv.classList.add("bottomDiv");
    bottomDivBox1.classList.add("bottomDivBox");
    bottomDivBox2.classList.add("bottomDivBox");
    bottomDivBox3.classList.add("bottomDivBox");
    box1p.classList.add("boxP");
    box2p.classList.add("boxP");
    box3p.classList.add("boxP");
    btn.classList.add("btn");
    box1img.classList.add("boxImg");
    box2img.classList.add("boxImg");
    box3img.classList.add("boxImg");

    mainImg.setAttribute("src", item.image);
    box1img.setAttribute("src", "./icons/price.svg");
    box2img.setAttribute("src", "./icons/star.svg");
    box3img.setAttribute("src", "./icons/box.svg");

    h1.innerHTML = `${item.category} (${item.rating.count})`;
    p.innerHTML =
      item.description.length > 100
        ? item.description.slice(0, 90) + " <b>...read</b>"
        : item.description;
    box1p.innerHTML = item.price;
    box2p.innerHTML = item.rating.rate;
    box3p.innerHTML = item.rating.count;
    btn.innerHTML = "В избранное";

    cont.append(mainDiv);
    mainDiv.append(mainImg, middleDiv);
    middleDiv.append(h1, p, bottomDiv, btn);
    bottomDiv.append(bottomDivBox1, bottomDivBox2, bottomDivBox3);
    bottomDivBox1.append(box1img, box1p);
    bottomDivBox2.append(box2img, box2p);
    bottomDivBox3.append(box3img, box3p);

    btn.onclick = () => {
      btn.classList.toggle("btn_added");
      if (btn.innerHTML === "Добавлено") {
        btn.innerHTML = "В избранное";
        busket.splice(item, 1);
        item.choose = false;
      } else {
        btn.innerHTML = "Добавлено";
        busket.push(item);
        item.choose = true;
      }
      h2.innerHTML = `You have <b>${busket.length}</b> elements in busket`;
      if (item.choose === true) {
        basketCOntent.append(`name: ${item.title}, price: ${item.price}`);
      }
    };

    btnBusket.onclick = () => {
      basket.classList.add("backet_active");
      basket.classList.remove("backet_hide");
      document.body.style.overflowY = "hidden";
    };
    busketClose.onclick = () => {
      basket.classList.remove("backet_active");
      basket.classList.add("backet_hide");
      document.body.style.overflowY = "auto";
    };
  }
}

let allDivs = document.querySelectorAll(".mainDiv");

btnCount.onclick = () => {
  showFiveElem();
};
function showFiveElem() {
  for (let i = 0; i < allDivs.length; i++) {
    if (i < 5) {
      allDivs[i].classList.remove("hide");
      allDivs[i].classList.add("active");
    } else {
      allDivs[i].classList.remove("active");
      allDivs[i].classList.add("hide");
    }
  }
}

btnAll.onclick = () => {
  showAllElem();
};
function showAllElem() {
  for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].classList.add("active");
  }
}
