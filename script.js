const info = document.createElement("div");
info.setAttribute("class", "userDetails");
document.body.append(info);
async function getimage() {
  try{
  const data = await fetch("https://dog.ceo/api/breeds/image/random");
  const deatils = await data.json();
  console.log(deatils.message);
  document.querySelector(".userDetails").innerHTML='';
  createuserdeatails(deatils.message);
  }
  catch (err){
    return "please use another API"
  }
}
getimage();

function createuserdeatails(img) {
  const infor = document.createElement("div");
  infor.setAttribute("class", "container");
  infor.innerHTML = `
  <div class="button1">
  <button class="btn" onclick="moveimages()">Next-image</button>
  </div>
  <div class="cat-container">
  <img class="cat-pic" src=${img} >
  </div>
  `;
  document.querySelector(".userDetails").append(infor);
}

function moveimages(){
  getimage();
}
