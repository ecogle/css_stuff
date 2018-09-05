function createMe() {
    var stat = document.getElementById("firstOne");

    for (var x = 0; x < 5; x++) {
        var para = document.createElement("p");
        var node = document.createTextNode("This is the " + x + " element");
        para.set
        para.appendChild(node);
        stat.appendChild(para);

    }
}

function showWindow(){
    window.open("http://www.google.com",'mywindow',"width=800,height=500,toolbar=yes");
}