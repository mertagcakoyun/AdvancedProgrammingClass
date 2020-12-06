var title = "Race Animation"
var plane = document.createElement("img");
var car = document.createElement("img");
var train = document.createElement("img");
var line = document.createElement("br");
var line2 = document.createElement("br");
var line3 = document.createElement("br");
var btn = document.createElement("button");

plane.id = "plane";
plane.style.position = "relative";
plane.style.cursor = "pointer";
plane.style.width = "100px";
plane.style.height = "50px";

train.style.position = "relative";
train.style.cursor = "pointer";
train.style.zIndex = "2";
train.style.width = "100px";
train.style.height = "50px";

car.style.position = "relative";
car.style.cursor = "pointer";
car.style.width = "100px";
car.style.height = "50px";

plane.src =
    "https://lh3.googleusercontent.com/proxy/BrmV9NQgIsyIs7fN5U6NTb7kMBRh-HuOXvGBEqvtufYRBIqpyCQZ_N3Jb0g9kj9DX3SFXTdRq_iwTtW3VVJlBfVH6X-soa4";

car.src = "https://thewildcattribune.com/wp-content/uploads/2014/02/cartoon_car_with_driver.jpg";
car.id = "car";

train.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwtFK6NykQO_eJ6V-dX87RyYlEdl7PoURXIA&usqp=CAU";
train.id = "train"

btn.id = "StartRace"
document.title = title;
document.body.appendChild(plane);
document.body.appendChild(line2);
document.body.appendChild(train);
document.body.appendChild(line);
document.body.appendChild(car);
document.body.appendChild(line3);
document.body.appendChild(btn);
btn.innerText = "Start Race"
plane1 = document.getElementById("plane");

const x0 = "translateX(0)", time = { transform: [x0, "translateX(500px)"] };


function race() {
    train.animate(time, 2000);
    plane.animate(time, 700);
    car.animate(time, 900);
}

btn.onclick = race;