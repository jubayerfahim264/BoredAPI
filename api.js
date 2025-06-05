let loadBtn = document.getElementById('loadBtn');
let clickCount = 0;
loadBtn.addEventListener('click',()=>{
    clickCount++;
    document.getElementById('clickCount').innerText = clickCount;
fetch("http://localhost:3000/proxy?url=https://bored-api.appbrewery.com/random")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("actitivity").innerText = data.activity;
    document.getElementById("type").innerText = data.type;

let pricetext = String(data.price);

if(pricetext === '0'){
    document.getElementById("price").innerText = "Free"
}else{
  document.getElementById("price").innerText = data.price + "$";  
}
  }).catch((error) => {
    alert.error("Error fetching data:", error);
  });

})

