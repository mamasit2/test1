document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.querySelector(".play-button");
  const censoredText = document.querySelector(".censored-text");
  const dynamicImage = document.getElementById("dynamic-image");
  let isGif = true;

  playButton.addEventListener("click", function () {
      censoredText.style.display = "block";
  });

  setInterval(() => {
      if (isGif) {
          dynamicImage.src = "/IMG_2.JPG"; // Укажите правильный путь к загруженному изображению
      } else {
          dynamicImage.src = "cat_movement_catgirl.gif";
      }
      isGif = !isGif;
  }, 2000); // Меняет изображение каждые 5 секунд
});
