let listaDeNumeroSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumero();
let tentativa = 1;
function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function mensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto!');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}
mensagemInicial();
function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor');
        } else {
            exibirTextoNaTela('p','O número secreto é maior');
        }
        tentativa++;
        limparCampo();
    }
}
function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
    let quantidadeElementoLista = listaDeNumeroSorteados.length;
    if (quantidadeElementoLista == numeroLimite){
        listaDeNumeroSorteados = [];
        console.log('Limpo');s
    }
    if (listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumero();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativa = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}