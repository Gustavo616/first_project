function validar() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    var cel = document.getElementById("cel");
    var cep = document.getElementById("cep");
    var sexo = document.getElementById("sexo");
    var ende = document.getElementsById('endereco');

    if (name.value == "") {
        console.log(name);
        alert("Nome inválido");
        name.focus();
        name.style.backgroundColor = "red";
        return;
    }else{
        name.style.backgroundColor = "white";  
    }
    if (email.value == "" || !emailCoisa(email.value)) {
        alert("Email inválido");
        email.focus();
        email.style.backgroundColor = "red";
        return
    }else{
        email.style.backgroundColor = "white";  
    }
    if (senha.value.length < 6) {
        alert("Senha inválida");
        senha.focus();
        senha.style.backgroundColor = "red";
        return;
    }else{
        senha.style.backgroundColor = "white";  
    }
    if (cel.value == "") {
        alert("Celular inválido");
        cel.focus();
        cel.style.backgroundColor = "red";
        return;
    }else{
        cel.style.backgroundColor = "white";  
    }
    if (cep.value == "") {
        alert("Cep inválido");
        cep.focus();
        cep.style.backgroundColor = "red";
        return;
    }else{
        cep.style.backgroundColor = "white";  
    }
    if (sexo.value == "valor1") {
        alert("Qual o seu gênero");
        sexo.focus();
        sexo.style.backgroundColor = "red";
        return;
    }else{
        sexo.style.backgroundColor = "white";  
    }

}
function emailCoisa(x) {
    var emailValidar = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    return emailValidar.test(x);
}
function mask(cel, mcel) {
    setTimeout(function () {
        var v = mcel(cel.value); //chama a função da mascara para preencher cada cada digito//
        if (v != cel.value) { //verifica se a mascara é diferente do que está para o usuario//
            cel.value = v; //se sim o valor recebe o valor incluido na mascara//
        }
    }

    )

}

function mcel(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
        r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
        r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
        r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
        r = r.replace(/^(\d*)/, "($1");
    }
    return r;
}
function scep(cep) {
    var script = document.createElement("script");
    script.src = "https://viacep.com.br/ws/" + cep + "/json/?callback=meucallback"
    document.body.appendChild(script)
}

function mask2(cep, pcep) {
    setTimeout(function () {
        var p = pcep(cep.value); //chama a função da mascara para preencher cada cada digito//
        if (p != cep.value) { //verifica se a mascara é diferente do que está para o usuario//
            cep.value = p; //se sim o valor recebe o valor incluido na mascara//
        }
    }

    )

}

function pcep(p) {
    var r = p.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 5) {
        r = r.replace(/^(\d{5})(\d{0,4}).*/, "$1-$2");
    }
    return r;
}

function meucallback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        alert("CEP não encontrado.");

    }
} 
  
document.getElementById("cep").onmouseleave = function() {
    if (cep.value.length>7) {
        document.getElementById("endereco").style.display = "initial";
    }
    }
