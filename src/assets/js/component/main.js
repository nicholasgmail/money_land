

const $anime = function(){
   window.addEventListener("scroll", showVisible);
showVisible();

function gov($i) {
  var $hero = document.querySelector(".hero");
  var $mapAnimate = document.querySelector(".section-map-animation");
    var $t = $hero.style.top;
    var $l = $hero.style.left;
    let box = $hero.getBoundingClientRect();
    let top = box.top + pageYOffset;
    let left = box.left + pageXOffset;
    console.log( top);
    console.log( left);
    /* if($i >= 500){ */
/*   $hero.style.left = ++$hero.offsetLeft + 5 + "px";*/
  $hero.style.top = ++$i * 2  + "px"; 
    /* }else{
      $hero.style.left = --$hero.offsetLeft + 5 + "px";
  $hero.style.top = --$hero.offsetTop + 5 + "px";
    } */
}
window.addEventListener("scroll", function (e) {
  var $el = e.target;
  var $i = $el.scrollingElement.scrollTop;
  if ($i > 500) {
    gov($i);
  }
});
}

export default $anime;