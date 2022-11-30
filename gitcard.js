//Id 
let text = document.querySelector("#usuario-github")
let botao = document.querySelector("#buscar-github");
let repo = document.querySelector("#repositorios");
//let repo_url = repo.querySelector("a");
let seguidores = document.querySelector("#seguidores");

let avatar = document.querySelector(".avatar");
let avatarImagem = avatar.querySelector("img");
let nome = document.querySelector(".content h1");

const getGitHubInfo = function (username) {
    var url = 'https://api.github.com/users/' + username;

    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let xhr = JSON.parse(this.responseText);
            avatarImagem.src = xhr.avatar_url;
            nome.innerHTML = xhr.name;
            seguidores.href = xhr.followers_url;
            repo.href = xhr.repos_url;
        }
    };

    ajax.open('GET', url, true);
    ajax.send();

};

botao.addEventListener("click", function (e) {
    e.preventDefault();
    getGitHubInfo(text.value);
});
