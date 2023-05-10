// CREDITS : https://www.cssscript.com/image-zoom-pan-hover-detail-view/

// (A) ADD ZOOM TO IMAGE
var addZoom = target => {
  // (A1) GET CONTAINER + IMAGE SOURCE
  let container = document.getElementById(target),
      imgsrc = container.querySelector('.gallery__img').getAttribute('src');

  // (A2) LOAD IMAGE + ATTACH ZOOM
  let img = new Image();
  img.src = imgsrc;
  img.onload = () => {
    // (A2.1) CALCULATE ZOOM RATIO
    let ratio = img.naturalHeight / img.naturalWidth,
        percentage = ratio * 100 + "%";

    // (A2.2) ATTACH ZOOM ON MOUSE MOVE
    container.onmousemove = e => {
      let rect = e.target.getBoundingClientRect(),
          xPos = e.clientX - rect.left,
          yPos = e.clientY - rect.top,
          xPercent = xPos / (container.clientWidth / 100) + "%",
          yPercent = yPos / ((container.clientWidth * ratio) / 100) + "%";

      Object.assign(container.style, {
        backgroundPosition: xPercent + " " + yPercent,
        backgroundSize: img.naturalWidth + "px"
      });
    };

    // (A2.3) RESET ZOOM ON MOUSE LEAVE
    container.onmouseleave = e => {
      Object.assign(container.style, {
        backgroundPosition: "center",
        backgroundSize: "cover"
      });
    };
  }
};

// (B) ADD ZOOM TO GALLERY IMAGES ON HOVER
let galleryItems = document.querySelectorAll('.gallery__item');
galleryItems.forEach(item => {
  item.addEventListener('mouseover', e => {
    addZoom(e.currentTarget);
  });
});
