let readMore = document.getElementsByClassName("read-more");
let blogs = document.getElementsByClassName("blogs");
function show(e){ 
    index = parseInt(e.value);
        blogs[index].style.overflow = "visible";
        blogs[index].style.height = "fit-content";
}

function hide(e){

    index = parseInt(e.value);
    blogs[index].style.overflow = "hidden";
    blogs[index].style.height = "25vh";
}
