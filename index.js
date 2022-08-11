
// let random_number = Math.floor(Math.random()*2)+1;
// let random_img = "images/bulb" + random_number + ".jpg";
// document.querySelector("img").setAttribute("src", random_img);

// let img_source = document.getElementById("bulb").src;
// // alert(img_source)

// let src = img_source.split("images/");
//  alert(src[1]);

 
//  function turn_bulb(){
//     //  window.location.reload();
//      if(src[1] === "bulb1.jpg"){
//          document.querySelector("img").setAttribute("src", "images/bulb2.jpg");
//          let img_source = document.getElementById("bulb").src;
//      }
//      else{
//          document.querySelector("img").setAttribute("src", "images/bulb1.jpg");
//          let img_source = document.getElementById("bulb").src;
//      }
// }



function turn_bulb_on(){
    document.getElementById("bulb_img").src = "images/bulb2.jpg";
}

function turn_bulb_off(){
    document.getElementById("bulb_img").src = "images/bulb1.jpg";
}