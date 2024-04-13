document.getElementById('btn-enviar').addEventListener('click', function() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var idade = document.getElementById('idade').value;
    var logradouro = document.getElementById('logradouro').value;
    var numero = document.getElementById('numero').value;
    var bairro = document.getElementById('bairro').value;
    var cidade = document.getElementById('cidade').value;
    var estado = document.getElementById('estado').value;

    if (!nome || !email || !idade || !logradouro || !numero || !bairro || !cidade || !estado) {
        alert('Por favor, preencha todos os campos obrigatórios');
    } else {
        alert('Inscrição feita com sucesso!');
        document.getElementById('formInscricao').submit();
    }
});
