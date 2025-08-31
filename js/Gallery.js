function gallery(){
  let thumbnails = document.querySelectorAll("#gallery-thumbs img")
  let mainImageSrc = document.querySelector("#gallery-photo img")
  let galleryInfo = document.querySelector("#gallery-info")
  let title = galleryInfo.querySelector(".title")
  let description = galleryInfo.querySelector(".description")

  thumbnails.forEach(function(thumbnail){
    let newImageSrc = thumbnail.dataset.largeVersion
    let largeVersion = new Image();
    largeVersion.src = newImageSrc
    
    thumbnail.addEventListener("click", function(){
      let newMainImageSrc = thumbnail.dataset.largeVersion
      mainImageSrc.setAttribute("src", newMainImageSrc)
      document.querySelector(".current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");
      title.innerHTML = thumbnail.dataset.title
      description.innerHTML = thumbnail.dataset.description
    })
  })
}