(function(){
/*check input not empty*/
document.getElementById("btn1").addEventListener("click",function(){
    var item = document.getElementById("item").value;
    (item=="") ? alert("input is invalid") : listWrite();
})
/*input is valid */
function listWrite(){
    /*craete element with img to add before #btn2*/
    const span = document.createElement("span");
    const div = document.createElement("div");
    const img = document.createElement("img");

    /*set src to img */
    img.setAttribute("src","./image/delete.png");
    /*set input value to span*/
    span.innerHTML = item.value;
    div.appendChild(span);
    div.appendChild(img)
    
    const elem = document.getElementById("frm");
    elem.insertBefore(div,document.getElementById('btn2'));
}

/*second box----> delete all member in the list*/
document.getElementById("btn2").addEventListener("click",function(){
    alert("ok")
})

})();
