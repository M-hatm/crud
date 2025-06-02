var Pname=document.getElementById("Pname");
var Price=document.getElementById("Price");
var category=document.getElementById("category");
var image=document.getElementById("image");
var desc=document.getElementById("desc");
var add=document.getElementById("add");
var reset=document.getElementById("reset");

var currentIndex;
var productList=[];

if(localStorage.getItem('product') !== null){
    productList=JSON.parse (localStorage.getItem('product'));

    diplayProducts();
}else{
    productList=[];
}




add.onclick=addProduct;
reset.onclick=resetForm;
function addProduct(){

var product={
    name: Pname.value,
    price:Price.value,
    category:category.value,
    image:`img/${image.files[0].name}`,
    desc:desc.value
}
if(document.getElementById("add").innerHTML ==='Add Product'){
    productList.push(product);

}else{
    productList.splice(currentIndex,1,product);
    document.getElementById("add").innerHTML="Add Product";
    }
    


//productList.push(product);
localStorage.setItem('product',JSON.stringify(productList))
diplayProducts();
resetForm();
}



//display 
function diplayProducts(){
    var cartona=``;
    for(var i=0 ; i<productList.length; i++){
        cartona+=`
        <div class="col-md-4 col-sm-6">
            <div class="img w-100">
                <img class="w-100" src="${productList[i].image}" alt="">
            </div>
<div class="name py-2 fw-bold"> productname: <span class="text-danger fw-bold" >${productList[i].name}</span></div>
<div class="price py-2 fw-bold"> productPrice: <span class="text-danger fw-bold">${productList[i].price}</span></div>
<div class="category py-2 fw-bold"> productCategory: <span class="text-danger fw-bold">${productList[i].category}</span></div>
<div class="Description py-2 fw-bold"> productDescription: <span class="text-danger fw-bold">${productList[i].desc}</span></div>

 <button onclick="deleteProduct(${i})" class="btn btn-outline-danger my-3">Delete</button>
<button onclick="updateProduct(${i})" class="btn btn-outline-info">Update</button>
        </div>
        `
    }
document.getElementById("rowData").innerHTML=cartona;
}



function resetForm(){
    Pname.value='';
    Price.value='';
    category.value='';
    image.value='';
    desc.value='';
}





function deleteProduct(index){
    productList.splice(index,1);
    diplayProducts();
    localStorage.setItem('product',JSON.stringify(productList));
    
}

function updateProduct(index){
    currentIndex=index;
   Pname.value= productList[index].name;
   Price.value= productList[index].price;
   category.value= productList[index].category;
   desc.value= productList[index].desc;
   
   image.firstChild= productList[index].image;
   document.getElementById("add").innerHTML="Update";
   
}














/*
var pname=document.getElementById("Pname");
var Price=document.getElementById("Price");
var category=document.getElementById("category");
var image=document.getElementById("image");
var desc=document.getElementById("desc");
var add=document.getElementById("add");
var reset=document.getElementById("reset");
reset.onclick=resetForm;
var productList;


if(localStorage.getItem('product') ==null){
   
     productList=[];
}else{
    productList=JSON.parse(localStorage.getItem('product'))
    display();
}


add.onclick=addProduct;



function addProduct(){

    var product={
    Pname: pname.value,
    price:Price.value,
    category:category.value,
    
    desc:desc.value
    
}
productList.push(product);
localStorage.setItem('product',JSON.stringify(productList))
display();
resetForm()



}

//display
function display(){
    var cartona='';
    for(var i=0;i<productList.length;i++){
        cartona +=`
        <div class="col-md-4 col-sm-6">
            <div class="img w-100">
                <img class="w-100" src="img/chefs-1.jpg" alt="">
            </div>
<div class="name py-2 fw-bold"> productname: <span>${pname.value}</span></div>
<div class="price py-2 fw-bold"> productPrice: <span>${Price.value}</span></div>
<div class="category py-2 fw-bold"> productCategory: <span>${category.value}</span></div>
<div class="Description py-2 fw-bold"> productDescription: <span>${desc.value}</span></div>

 <button onclick="deleteProduct(${i})" class="btn btn-outline-danger my-3">Delete</button>
<button class="btn btn-outline-info">Update</button>
        </div>
        `
    }
    document.getElementById("rowData").innerHTML=cartona;
}


//reset
function resetForm(){
    pname.value='';
    Price.value='';
    category.value='';
    desc.value='';
}
function deleteProduct(index){
    productList.splice(index,1);
    localStorage.setItem('product',JSON.stringify(productList))
    display();

}*/