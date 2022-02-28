function changeHeading(){

    var element = document.getElementById("programHead");
    element.firstChild.nodeValue = "My Programming";
    var paragrah = document.getElementById("para");
    paragrah.firstChild.nodeValue = "Hello to Computer Programming";

}
document.addEventListener('click',changeHeading);