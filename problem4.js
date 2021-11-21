 /*function getOption() {
 	const myCars = document.getElementById("cars");
 	const numOfCars = document.getElementById("cars").length;

 }*/

 function getOption() {
  const numOfCars = document.getElementById("cars").options.length;
  const par = document.getElementById("p1");
  par.innerHTML = "Found " + numOfCars + " options in the list.";
  const carName = document.getElementById("cars").value;
  const par2 = document.getElementById("p2")
  par2.innerHTML = "You selected: " + carName;
  for (let i = 0; i < numOfCars.length; i++) {                                   //write a "for" loop to display the items inside the list;
        console.log(numOfCars.options[i].text);
    }
}
