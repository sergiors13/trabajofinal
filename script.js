let gmail = document.getElementById("gmail");
let instagram = document.getElementById("instagram");
let github = document.getElementById("github");

function abrirMail(){
    window.open("https://mail.google.com/mail/u/0/#inbox")
};
function abrirInstagram(){
    window.open("https://www.instagram.com/sergiorsingher/")
};
function abrirGithub(){
    window.open("https://github.com/sergiors13")
};

gmail.addEventListener("click", abrirMail);
instagram.addEventListener("click", abrirInstagram);
github.addEventListener("click", abrirGithub);

function escalarIcon1(){
    gmail.classList.add("classEscala")
}
function escalarIcon2(){
    github.classList.add("classEscala")
}
function escalarIcon3(){
    instagram.classList.add("classEscala")
}
gmail.addEventListener("mouseover", escalarIcon1)
github.addEventListener("mouseover", escalarIcon2)
instagram.addEventListener("mouseover", escalarIcon3)

function removerClase1(){
    gmail.classList.remove("classEscala")
}
function removerClase2(){
    github.classList.remove("classEscala")
}
function removerClase3(){
    instagram.classList.remove("classEscala")
}
gmail.addEventListener("mouseout", removerClase1)
github.addEventListener("mouseout", removerClase2)
instagram.addEventListener("mouseout", removerClase3)


