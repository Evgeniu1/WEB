document.getElementById("email").value = getSavedValue("email");
document.getElementById("name").value = getSavedValue("name");
document.getElementById("phone").value = getSavedValue("phone");

document.getElementById("textContact").value = getSavedValue("textContact");
console.log("test")

function saveValue(e) {
    var id = e.id;
    var val = e.value;
    localStorage.setItem(id, val);
}

function getSavedValue(v) {
    if (!localStorage.getItem(v)) {
        return "";
    }
    return localStorage.getItem(v);
}