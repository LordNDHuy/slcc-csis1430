function changeGallery(gal){
    console.log(gal)
    var gall = document.getElementById('thumbs').children;
    for(var i = 0; i < gall.length; i++){
      gall[i].setAttribute('src', "images/"+gal+"/img"+(i+1)+".jpg");
    }
    console.log(gall)

}

function showPreview(src){
  var post = document.getElementById('preview')
  post.setAttribute('src', src);
}
