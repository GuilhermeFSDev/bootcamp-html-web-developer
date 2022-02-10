function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar () {
    window.open("https://github.com/GuilhermeFSDev/aula_javascript");
    window.location.href="https://github.com/GuilhermeFSDev/aula_javascript";
}

function trocar (elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar (elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load () {
    alert("página carregada");
}

function funcaoChange (elemento) {
    console.log(elemento.value);
}

// var validar = 0;
// function validaIdade (idade) {
//     //var validar;
//     if (idade >= 18) {
//         validar = true;
//     } else {
//         validar = false;
//     } 
//     return validar;
// }
// var idade = prompt("Digite sua idade: ");
// validaIdade(idade)
// console.log(validar);

// function soma(n1,n2) {
//     return n1 + n2;
// }
// alert(soma(5,10));

// var d = new Date();
// alert(d.getMonth()+1);
// alert(d.getMinutes());

// var count;
// for (count = 0; count <= 5; count++) {
//     console.log(count);
// }

// var count = 0;
// while (count <= 5) {
//     console.log(count);
//     count++;
// };

// var idade = prompt("Qual sua idade?");
// if (idade >= 18) {
//     alert("Maior de idade");
// } else {
//     alert("Menor de idade");
// }

// var fruta = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
// console.log(fruta);
// console.log(fruta[1].nome);

// var lista = ["maça", "pera", "laranja"];
// // lista.push = ("uva");
// // lista.pop ();
// //console.log(lista.toString());
// console.log(lista.join(""));

// var nome = "Guilherme Ferreira";
// var n1 = 27;
// var n2 = 10;
// var frase = "Japão é o melhor time do mundo";
// //alert(nome + " tem " + idade + " anos");
// //alert(idade + idade2);
// console.log(nome);
// console.log(n1 + n2);
// console.log(frase.toLowerCase());