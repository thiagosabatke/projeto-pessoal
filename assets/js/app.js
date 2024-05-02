function EnviarMensagem(){
    let nome = document.getElementById('input_nome').value;
    let email = document.getElementById('input_email').value;
    let telefone = document.getElementById('input_telefone').value;
    let mensagem = document.getElementById('input_mensagem').value;

    if(nome == '' || email == '' || telefone == '' || mensagem == '') {
        alert('responda todos os campos do formulário');
    } else {
        alert(`${nome}, sua mensagem foi enviada com sucesso!`)
    }
}

function mudarProjeto1(){
    document.getElementById('nome_do_projeto').textContent = 'Projeto Pessoal';
    let link_projeto = document.getElementById('link_do_projeto');
    link_projeto.href = 'https://github.com/thiagosabatke/projeto-pessoal'
    link_projeto.textContent = 'github';
}

function mudarProjeto2(){
    document.getElementById('nome_do_projeto').textContent = 'Projeto ToDo-List'
    let link_projeto = document.getElementById('link_do_projeto');
    link_projeto.href = 'https://github.com/thiagosabatke/ToDo-List-JS'
    link_projeto.textContent = 'github';
}

function mudarProjeto3(){
    document.getElementById('nome_do_projeto').textContent = 'Projeto Gestão de Notas'
    let link_projeto = document.getElementById('link_do_projeto');
    link_projeto.href = 'https://github.com/thiagosabatke/Gestao-de-Notas-JS'
    link_projeto.textContent = 'github';
}