const imgs = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg"
];

const container = document.getElementById("container");

function renderImages() {
  let imgsDOM = "";
  for (let i = 0; i < imgs.length; i++) {
    imgsDOM += `<img alt="staff image" class="staff-img" src="${imgs[i]}">&nbsp;`;
  }
  container.innerHTML = imgsDOM;
}

renderImages();
