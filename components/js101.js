const a = 10; // متغير نهائي
// a = 11

var b = 11; // متغير غير نهائي

let c = 10; // متغير غير نهائي ضعيف

b = true;
b = b + 1;

var d = "";

if (d.length) {
  console.log("yes");
} else {
  console.log("no");
}

// false || undefined || null || 0 || '' || ""

console.log("b: ", b);

//Functions
var speed = 0;
const speedUp = (s, y, d) => {
  console.log(s + y + d);
  speed++;
};

const isMAxSpeed = () => speed >= 100;

// const isMAxSpeed = () => {
// return speed > 100
// }

function slowDown() {
  if (speed > 0) {
    speed--;
  } else {
    return false;
  }
}

speedUp();
console.log("speed: ", speed);

//JSON
//JavaScript Object Notation

const car = {
  //key : value
  brand: "VW",
  speed: 0,
  wheels: 4,
};

car.speed = 1;
car.color = "red";

console.log("car: ", car);
