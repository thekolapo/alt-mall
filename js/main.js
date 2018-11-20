function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("cart-slide").style.width = "0";
}

function GotoMainSection(){
    document.getElementById("overlay").style.height = "100%";
    setTimeout(showMainSection, 800);
}

function showMainSection(){
    document.getElementById("landing").style.display = "none";
    document.getElementById("main-section").style.display = "block";
    document.getElementById("overlay").style.height = "0%";
}

function gotoProductsPage(){
    window.location.href = "/product.html";
}

function gotoProductListPage(){
    window.location.href = "/product-list.html";
}

function showCart(){
    document.getElementById("cart-slide").style.width = "330px";
}

function switchBetweenProductsAndVendors(index){
    for(var i = 0; i<2; i++){
        document.getElementsByClassName("nav-button").item(i).classList.add("background-none");
    }
    document.getElementsByClassName("nav-button").item(index).classList.remove("background-none");

    if(index == 0){
        document.getElementsByClassName("nav-bottom-products").item(0).style.display = "block";
        document.getElementsByClassName("nav-bottom-vendors").item(0).style.display = "none";
    }
    else{
        document.getElementsByClassName("nav-bottom-products").item(0).style.display = "none";
        document.getElementsByClassName("nav-bottom-vendors").item(0).style.display = "block";
    }
}

var currentProductImageIndex = 0;

function switchProductImage(index){
    if(index == "prev"){
       if(currentProductImageIndex == 0){
           currentProductImageIndex = 3;
       }
       else{
           currentProductImageIndex -= 1;
       }

       index = currentProductImageIndex;
    }
    else if(index == "next"){
        if(currentProductImageIndex == 3){
            currentProductImageIndex = 0;
        }
        else{
            currentProductImageIndex += 1;
        }

        index = currentProductImageIndex;
    }
    
    var imgSrc = document.getElementById("product-small-img-"+index).src;
    document.getElementById("product-big-image").src = imgSrc;
    currentProductImageIndex = index;
}

function showProductSection(section){
    if(section == "product-specification"){
        document.getElementById("customer-reviews").style.display = 'none';
        document.getElementById("product-specification").style.display = 'block';
        document.getElementById("line-2").style.display = 'none';
        document.getElementById("line-1").style.display = 'block';
        
        document.getElementsByClassName("btn-show-more").item(0).style.display = 'none';
    }
    else{
        document.getElementById("customer-reviews").style.display = 'block';
        document.getElementById("product-specification").style.display = 'none';
        document.getElementsByClassName("btn-show-more").item(0).style.display = 'block';
        document.getElementById("line-2").style.display = 'block';
        document.getElementById("line-1").style.display = 'none';
    }
}

function goToSection(section){
    window.location.href = section;
}

function toggleSideNav(x){
    $(x).siblings().toggle();
}

