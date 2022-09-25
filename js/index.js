var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCat = document.getElementById("productCat");
var productDesc = document.getElementById("productDesc");
var tableRow = document.getElementById("tableRow");
var btn = document.getElementById("bt");
var search= document.getElementById("search");

var x=true;
var y;

var list = [];
if(localStorage.getItem('obj')!=null){
  list=JSON.parse(localStorage.getItem('obj'))
  display()
}

function addProduct() {
  var productObject = {
    pname: productName.value,
    pprice: productPrice.value,
    pcat: productCat.value,
    pdesc: productDesc.value,
  };
  if(x==true){
    list.push(productObject);

  }
  else{
    list[y]=productObject ;
  }

  localStorage.setItem("obj",JSON.stringify(list))
  // display()
  clear();
  
  


}
function clear() {
  productName.value = "";
  productPrice.value = "";
  productCat.value = "";
  productDesc.value = "";
}

function display() {
  var box = "";
  for (var i = 0; i < list.length; i++) {
    box += `
    <tr>
    <td>${i + 1}</td>
    <td>${list[i].pname}</td>
    <td>${list[i].pprice}</td>
    <td>${list[i].pcat}</td>
    <td>${list[i].pdesc}</td>
    <td > <button onclick='del(${i})' class="btn btn-info ">Delete</button> </td>
    <td  ><button onclick='updated(${i})'  class="btn btn-warning ">Upadted</button></td>

    </tr>
  
    `;
  }
  document.getElementById("tableRow").innerHTML = box;

}
function del (index){
  list.splice(index,1)
  localStorage.setItem("obj",JSON.stringify(list))
  display()

}
function updated(index){
   productName.value=list[index].pname;
    productPrice.value=list[index].pprice;
    productCat.value=list[index].pcat;
    productDesc.value=list[index].pdesc;
    btn.innerHTML="updated"
  x=false
  y=index
   
  
}
function searchdata(term){
  var box=' ';
  for(var i=0;i<list.length ;i++){
    if(list[i].pname.toLowerCase().includes(term.toLowerCase())){
      box += `
    <tr>
    <td>${i + 1}</td>
    <td>${list[i].pname}</td>
    <td>${list[i].pprice}</td>
    <td>${list[i].pcat}</td>
    <td>${list[i].pdesc}</td>
    <td > <button onclick='del(${i})' class="btn btn-info ">Delete</button> </td>
    <td  ><button onclick='updated(${i})'  class="btn btn-warning ">Upadted</button></td>

    </tr>
  
    `;

    }
  }
  document.getElementById("tableRow").innerHTML=box;

}



// /////search func///
// function search(term){
//   // term=search.value
//    var box=" "
// for(var i=0 ; i<list.length;i++){
//   if(list[i].pname.toLowerCase().includes(term.toLowerCase()) == true){
//     box += `
//     <tr>
//     <td>${i + 1}</td>
//     <td>${list[i].pname}</td>
//     <td>${list[i].pprice}</td>
//     <td>${list[i].pcat}</td>
//     <td>${list[i].pdesc}</td>
//     <td > <button onclick='del(${i})' class="btn btn-info ">Delete</button> </td>
//     <td  ><button onclick='updated(${i})'  class="btn btn-warning ">Upadted</button></td>

//     </tr>
  
//     `;
// }
// }
//     document.getElementById("tableRow").innerHTML = box;
  

// }

