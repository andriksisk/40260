export function mostrar() {
    console.log("los parámetros");

    let user = document.getElementById("user");
    let password = document.getElementById("password");

    console.log(password.value);
    console.log(user.value);

    let formulario = document.getElementsByTagName("form");
    console.log(formulario);

    user.setAttribute("name", "q");
    password.setAttribute("name", "password");
    formulario[0].setAttribute("action", "https://google.com/search");
    formulario[0].submit();
}