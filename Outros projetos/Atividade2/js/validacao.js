document.getElementById('btn-enviar').addEventListener('click', function() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var idade = document.getElementById('idade').value;
    var logradouro = document.getElementById('logradouro').value;
    var numero = document.getElementById('numero').value;
    var bairro = document.getElementById('bairro').value;
    var cidade = document.getElementById('cidade').value;
    var estado = document.getElementById('estado').value;

    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!nome){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor, preencha seu nome."
        });

    } else if(!email || !regexEmail.test(email)){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor, preencha seu email."
        });

    } else if(!idade){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor, preencha sua idade."
        });

    } else if(!logradouro){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor, preencha seu logradouro."
        });

    } else if(!numero ){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor, preencha seu numero."
        });

    } else if(!bairro ){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor, preencha seu bairro."
        });

    } else if(!cidade){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor, preencha sua cidade."
        });

    } else if(!estado){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor, preencha seu estado."
        });

    } else {
        Swal.fire({
            title: "Case lá...",
            text: "Deseja enviar sua inscrição ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim"

        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire({
            title: "Muito bom !",
            text: "Inscrição enviada com sucesso",
            icon: "success"

            }).then(() => {
                document.getElementById("formInscricao").reset();
            });
            }
        });
    }
});