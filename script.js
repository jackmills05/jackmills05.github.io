let active= false
function navigationBar() {
    active=!active
    document.getElementById("toggleable")
    var element = document.createElement('div')
    var body = document.getElementsByTagName('body')[0]
    console.log(active)
    if (active) {
        console.log("On");
        element.innerHTML = `
        <h2 id="taskbar">Taskbar</h2>
        `;
        document.body.appendChild(element)
        body.style.marginLeft = "15%";
        body.style.marginTop = "0px";
    } else {
        console.log("Off");
        const element = document.getElementById("taskbar")
        element.remove();        
        body.style.marginLeft = "0px";
    }

}
