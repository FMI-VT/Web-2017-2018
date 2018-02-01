  var i = 0;
  function changeNext(){
      if(i == 2) i = 0;
      else i++;
      document.getElementById("main-picture").src="eleni"+ i + ".jpg";
  }
  function changePrev(){
      if(i == 0) i = 2;
      else i--;
      document.getElementById("main-picture").src="eleni"+ i + ".jpg";
  }
