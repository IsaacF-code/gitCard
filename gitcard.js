//Id 
let text = document.querySelector("#usuario-github")
let botao = document.querySelector("#buscar-github");

let repo = document.querySelector("#repositorios");
let seguidores = document.querySelector("#seguidores");
let gists = document.querySelector("#gists");

//Estatísticas
let numRepo = document.querySelector("#numero_repo");
let numSeguidores = document.querySelector("#numero_seguidores");
let numGists = document.querySelector("#numero_gists");

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

            numRepo.innerHTML = xhr.public_repos;
            numSeguidores.innerHTML = xhr.followers;
            numGists.innerHTML = xhr.public_gists;

            gists.href = xhr.gists_url;
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
