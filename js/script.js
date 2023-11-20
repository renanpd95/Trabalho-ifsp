
//codigo cadastrar usuario

function enviarDados(event) {
    event.preventDefault();  

    const formCadastro = document.getElementById('formCadastro');
    
    // lógica para coletar os dados do formulário
    const formData = new FormData(formCadastro);
    const dados = {};
    formData.forEach((value, key) => {
        dados[key] = value;
    });

    // lógica para enviar os dados para o servidor
    fetch('http://localhost:3000/cadastrarDados', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Cadastro realizado com sucesso!', data);
        alert('Cadastro realizado com sucesso!');
        window.location.href ='login.html';
    })
    .catch(error => {
        console.error('Erro durante o cadastro:', error);
    });
}




//codigo cadastrar usuario

function enviarDados(event) {
    event.preventDefault();  

    const formCadastro = document.getElementById('formCadastro');
    
    // lógica para coletar os dados do formulário
    const formData = new FormData(formCadastro);
    const dados = {};
    formData.forEach((value, key) => {
        dados[key] = value;
    });

    // lógica para enviar os dados para o servidor
    fetch('http://localhost:3000/cadastrarDados', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Cadastro realizado com sucesso!', data);
        alert('Cadastro realizado com sucesso!');
        window.location.href ='login.html';
    })
    .catch(error => {
        console.error('Erro durante o cadastro:', error);
    });
}


//codigo cadastrar usuario