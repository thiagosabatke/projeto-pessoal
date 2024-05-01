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