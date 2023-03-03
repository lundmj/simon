function login(){
    const name_el = document.querySelector("#name");
    localStorage.setItem("userName", name_el.value);
    window.location.href = "play.html";
}