// Meta function guaranteed to run after the DOM is ready
function onDomReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

onDomReady(function () {
    document.addEventListener("keydown", function(event) {
        const key = event.key; // Or const {key} = event; in ES6+
        if (key === "Enter" || key === " ") {
            document.getElementById("dailyMessagesDiv").style.display = "none";
            document.getElementById("equipPet").style.display = "none"
            document.getElementById("messageInner").innerHTML = ""
        }
    });
});