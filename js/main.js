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
    document.getElementById("cart-slide").style.width = "320px";
}
