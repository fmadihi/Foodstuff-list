(function () {

    /*check input not empty*/
    document.getElementById("btn1").addEventListener("click", function () {
        var item = document.getElementById("item").value;
        (item == "") ? alert("input is invalid") : listWrite();
    })
    /*input is valid */
    function listWrite() {
        /*craete element with img to add before #btn2*/
        const span = document.createElement("span");
        const div = document.createElement("div");
        const img = document.createElement("img");

        /*set src ana event to img */
        img.setAttribute("src", "./image/delete.png");
        img.setAttribute("onclick", "singleDelete(this)");
        /*set input value to span*/
        span.innerHTML = item.value;
        div.appendChild(span);
        div.appendChild(img)

        const elem = document.getElementById("frm");
        elem.insertBefore(div, document.getElementById('btn2'));
        item.value = "";

        /*show and hide sectio "done successfully"*/
        shown();
        hiden();
        /*end show and hide sectio "done successfully"*/
    }

    /*second box----> delete all member in the list*/
    document.getElementById("btn2").addEventListener("click", function () {
        const elem = document.querySelectorAll("div");
        elem.forEach((e) => {
            e.remove();
            shown();
            hiden();
        });

    })
})();
/*delete single item*/
function singleDelete(e) {
    e.parentNode.remove();
    shown();
    hiden();
}
function shown() {
    setTimeout(() => {
        const box = document.getElementById("show");
        box.style.display = 'block';
    }, 10);
}
function hiden() {
    setTimeout(() => {
        const box = document.getElementById('show');
        box.style.display = 'none';
    }, 3000);
}
