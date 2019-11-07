function myImage() {
  var d = moonArray[phase];

  var images = document.querySelector('#rotatingImages');

  images.setAttribute('src', d);

  if(phase < moonArray.length - 1){
    phase++;
  }else{
    phase = 0;
  }
}
