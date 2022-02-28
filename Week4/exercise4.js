function changeHeading(){

    var element = document.getElementById("programHead");
    element.firstChild.nodeValue = "My Programming";
    var paragrah = document.getElementById("para");
    element.firstChild.nodeValue = "Hello to Computer Programming";

}
document.addEventListener('DOMContentLoaded',changeHeading);