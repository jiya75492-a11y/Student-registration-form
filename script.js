document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let roll = document.getElementById("roll").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let course = document.getElementById("course").value;
    let contact = document.getElementById("contact").value;

    if (name === "" || email === "" || roll === "" || !gender || course === "" || contact === "") {
        alert("Bhadhi fields bharvi jaruri che!");
    } else {
        alert("Form Submitted Successfully!");
    }
});