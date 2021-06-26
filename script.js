const arrowFunc = (function() {

  const imgArray = Array.from(document.querySelectorAll(".slider-image"))

  const nextImage = () => {

    if (imgArray[imgArray.length-1].style.display === "none") {

      for (i = 0; i <= imgArray.length; i++) {

        if (imgArray[i].style.display != "none") {
          imgArray[i].style.display = "none";
          imgArray[i + 1].style.display = "block";
          break;
        }
      }

    } else {
      return false;
    }
  }
    
  const previousImage = () => {

    if (imgArray[0].style.display === "none") {

      for (i = 0; i <= imgArray.length; i++) {

        if (imgArray[i].style.display === "block") {
          imgArray[i].style.display = "none";
          imgArray[i - 1].style.display = "block";
          return;
        }
      }

    } else {
      return false;
    }
  }

  return {
    nextImage,
    previousImage
  }
  
})();

const btnFunc = (() => {

  const imgArray = Array.from(document.querySelectorAll(".slider-image"))

  const chooseImg = (element) => {

    for (i = 0; i < imgArray.length; i++) {

      if (i == element.getAttribute("data-key")) {
        imgArray[i].style.display = "block"

      } else {
        imgArray[i].style.display = "none"
      }
    }
  }

  return {
    chooseImg
  }


})();

const timeoutFunc = (() => {

  const imgArray = Array.from(document.querySelectorAll(".slider-image"))

  const timeOutSetting = () => {
    for (i = 0; i < imgArray.length; i++) {

      if (imgArray[i].style.display !== "none") {

        if (i === imgArray.length-1) {
          imgArray[i].style.display = "none"
          imgArray[0].style.display = "block"
          break;

        } else {
          imgArray[i].style.display = "none"
          imgArray[i+1].style.display = "block"
          break;
        }
      }
    }
  }

  return {
    timeOutSetting
  }


})();

const myListeners =  (function() {

  const nextArrowListener = () => {
    document.querySelector("#arrow-next").addEventListener('click', () => {
      arrowFunc.nextImage();
    })
  }

  const previousArrowListener = () => {
    document.querySelector("#arrow-back").addEventListener('click', () => {
      arrowFunc.previousImage();
    })
  }

  const btnListener = () => {
    for (i = 0; i < document.querySelectorAll(".slider-op").length; i++) {
      document.querySelectorAll(".slider-op")[i].setAttribute('data-key', i)
      document.querySelectorAll(".slider-op")[i].addEventListener('click', (e) => {
        btnFunc.chooseImg(e.target)
      })
    }
  }

  return {
    nextArrowListener,
    previousArrowListener,
    btnListener
  }
})();


(function () {
  myListeners.nextArrowListener();
  myListeners.previousArrowListener();
  myListeners.btnListener();
  setInterval(()=>{
    timeoutFunc.timeOutSetting()
  }, 3000)
  
})();