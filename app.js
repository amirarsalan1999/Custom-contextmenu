let flag = false;
let contextMenu = document.getElementById("context-menu").style;
function customMenu (event) {
    
    if(flag){
        flag = false;
        event.preventDefault();
        contextMenu.display = "block"
        contextMenu.marginLeft = event.x + "px"
        contextMenu.marginTop = event.y + "px"
    }else{
        flag = true;
        event.preventDefault();
        contextMenu.display = "block"
        contextMenu.marginLeft = event.x + "px"
        contextMenu.marginTop = event.y + "px"
    }
    
}

function hideContextmenu () {
    contextMenu.display = "none"
}
