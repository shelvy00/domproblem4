 /*function getOption() {
 	const myCars = document.getElementById("cars");
 	const numOfCars = document.getElementById("cars").length;

 }*/

 function getOption() {
  let numOfCars = document.getElementById("cars").options.length;
 let par = document.getElementById("p1");
 p1.innerHTML = "Found " + numOfCars + " options in the list.";
  var carName = document.getElementById("cars").value;
  let par2 = document.getElementById("p2")
  p2.innerHTML = "You selected: " + carName;
}
