function swapImage()
{
    if(i < path.length - 1) {
        i++; 
    } else {
        i = 0;
    }
    setTimeout("swapImage()",1000);
}

window.onload = function() {
    var i = 0;
    var path = new Array();

    // Списък с картинки
    path[0] = "images/photo1.jpg";
    path[1] = "images/photo2.jpg";
    path[2] = "images/photo3.jpg";
    path[3] = "images/photo4.jpg";
    path[4] = "images/photo5.jpg";
    path[5] = "images/photo6.jpg";
    path[6] = "images/photo7.jpg";
    
    swapImage();
}
