document.getElementById("random-btn").addEventListener("click", function(){
    randomHeadliner();
    var element = document.getElementById("rotate-block");
    element.classList.remove("rotate-back");
    element.classList.add("rotate");
    setTimeout(function(){
      element.classList.remove("rotate");
      element.classList.add("rotate-back");
    }, 1000);
});