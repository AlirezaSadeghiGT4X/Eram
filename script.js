function DropdownHandler() {
    if (localStorage.getItem("svgClicked") != "true") {
        localStorage.setItem("dropdown", "none")
    }
    localStorage.setItem("svgClicked", "false")
}
