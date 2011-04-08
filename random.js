//test randomised positioning

function showaddservice() {    
    if (document.all) {
        document.all.addservice.style.posTop=randomposition(600)
        document.all.addservice.style.posLeft=randomposition(800)
        document.all.addservice.style.visibility="visible"
    }
    if (document.layers) {
        document.addservice.top=randomposition(600)
        document.addservice.left=randomposition(1024)
        document.addservice.visibility="visible"
    }
    
    //setTimeout(code, delay) delay : 1000 = 1초
    var timer =setTimeout("hideaddservice()",1000*15)
    
}
function hideaddservice() {    
    if (document.all) {document.all.addservice.style.visibility="hidden"}
    if (document.layers) {document.addservice.visibility="hidden"}
    var timer =setTimeout("showaddservice()",1000*15)
}
function randomposition(range) {        
    //return Math.floor(range*Math.random())
    return Math.floor(Math.floor(Math.random() * 600) + 1)
}

// JavaScript Document