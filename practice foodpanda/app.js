let allItems = [];

function addItems() {
  let getId = document.querySelector("#pid");
  let getname = document.querySelector("#pname");
  let getprice = document.querySelector("#pprice");

  let obj = {
    pid: getId.value,
    pname: getname.value,
    pprice: getprice.value,
  };
  allItems.push(obj);
  localStorage.setItem("items", JSON.stringify(allItems));
}
