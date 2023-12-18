const shareBtn = document.querySelector("#share-icon")
const showIcons = document.querySelector(".social-media-links")

shareBtn.addEventListener("click", function(){
   if(!showIcons.classList.contains("show")){
      showIcons.classList.add("show")
   } else{
      showIcons.classList.remove("show")
   }
})