function projectsgallery(path, description) {
  //iterate to generate img srcs
  var images = []
  for (let i = 1; i <= 10; i++) {
    // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

    const img = document.createElement("img");
    img.src = path + "image" + i + ".png";
    img.classList.add("gallery-modal-img");
    images.push(img)
    document.getElementById('gallery-modal').appendChild(img);
  }
  images.forEach((e) => e.addEventListener("click", function () {
    images.forEach(el => el.classList.remove("img-gallery-selection"))
    e.classList.add("img-gallery-selection")
  }));

  // Get the modal
  var modal = document.getElementById('modal-project');

  // create the image to display
  const img = document.createElement("img");
  img.src = path + "image1.png";
  img.alt = description
  var modalImg = document.getElementById("imgmodal");

  var captionText = document.getElementById("caption");
  // Get the image and insert it inside the modal - use its "alt" text as a caption

  modal.style.display = "block";
  modalImg.src = images[0].src;
  images.forEach((e) => e.addEventListener("click", function () {
    modalImg.src = e.src
  }))
  captionText.innerHTML = img.alt;


  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close-modal")[0];

  // When the user clicks on <span> (x), close the modal and remove images from modal
  span.onclick = function () {
    modal.style.display = "none";
    images.forEach(el => el.classList.remove("img-gallery-selection"))
    const node = document.getElementById('gallery-modal')
    node.textContent = ''
  }
}

