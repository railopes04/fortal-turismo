
//===============Script_do_scroll,rolagem===============//

window.addEventListener("scroll", function(){
  let header = document.querySelector('#header')
  header.classList.toggle('rolagem', window.scrollY > 0)
})

//=================Script_do_botao=====================//

const nav = document.querySelector("#nav");
const btnMenu = document.querySelector("#btn-mobile");
const menu = document.querySelector("#menu");

function handleButtonClick(event) {
  if (event.type === "touchstart") event.preventDefault();
  event.stopPropagation();
  nav.classList.toggle("active");
  handleClickOutside(menu, () => {
    nav.classList.remove("active");
    setAria();
  });
  setAria();
}

function handleClickOutside(targetElement, callback) {
  const html = document.documentElement;
  function handleHTMLClick(event) {
    if (!targetElement.contains(event.target)) {
      targetElement.removeAttribute("data-target");
      html.removeEventListener("click", handleHTMLClick);
      html.removeEventListener("touchstart", handleHTMLClick);
      callback();
    }
  }
  if (!targetElement.hasAttribute("data-target")) {
    html.addEventListener("click", handleHTMLClick);
    html.addEventListener("touchstart", handleHTMLClick);
    targetElement.setAttribute("data-target", "");
  }
}

function setAria() {
  const isActive = nav.classList.contains("active");
  btnMenu.setAttribute("aria-expanded", isActive);
  if (isActive) {
    btnMenu.setAttribute("aria-label", "Fechar Menu");
  } else {
    btnMenu.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);


//=================Script_das_imagens1=====================//


let time = 5000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)


//=================Script_das_imagens2=====================//


const imgs = document.getElementById("img");
const img = document.querySelectorAll(".filters");

let idx = 0;

function carrossel(){
  idx++;

  if(idx > img.length - 1){
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 100}%)`;

}

setInterval(carrossel, 4000);


