function changeHeading(){

    var element = document.getElementById("programHead");
    element.firstChild.nodeValue = "My Programming";

}
document.addEventListener('DOMContentLoaded',changeHeading);