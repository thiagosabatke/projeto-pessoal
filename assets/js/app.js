function getRepoGithub(repoNameToDisplay, elementId) {
    fetch('https://api.github.com/users/thiagosabatke/repos')
    .then(resposta => resposta.json())
    .then(data => {
        const repo = data.find(repo => repo.name === repoNameToDisplay);
        const repositorios = document.getElementById(elementId);

        if (repo && repositorios) {
            let projeto = document.createElement('div');
            projeto.className = 'projeto-repo';

            projeto.innerHTML = 
                `<div>
                    <h4 class="title">${repo.name}</h4>
                    <span class="date-create">${new Date(repo.created_at).toLocaleDateString()}</span>
                </div>
                <div>
                    <a href="${repo.html_url}" target="_blank">${repo.html_url}</a>
                    <span class="language">
                        <span class="circle"></span>${repo.language || 'N/A'}
                    </span>
                </div>`;

            repositorios.appendChild(projeto);
        } else if (!repo) {
            console.log(`Repositório com o nome "${repoNameToDisplay}" não encontrado.`);
        } else {
            console.log(`Elemento com o ID "${elementId}" não encontrado.`);
        }
    })
    .catch(error => console.error('Erro', error));
}

getRepoGithub('Gestao-de-Notas-JS', 'elemento1');
getRepoGithub('ToDo-List-JS', 'elemento2');
getRepoGithub('projeto-pessoal', 'elemento3');
getRepoGithub('Consulta_CEP_JS', 'elemento4');
getRepoGithub('Lotacao-leitos', 'elemento5');