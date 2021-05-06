function preventKey(event, expectedKey, expectedCode) {

    const code = event.which || event.keyCode;



    if (expectedKey === event.key || code === expectedCode) {

        return true;

    }

    return false;

}







function start(e) {

    // default

    document.getElementById('svgimage').innerHTML = document.getElementById('content').value;



    // listener

    document.getElementById('content').addEventListener("input", function () {

        document.getElementById('svgimage').innerHTML = document.getElementById('content').value;

    });

    
}



window.addEventListener("load", start, false);