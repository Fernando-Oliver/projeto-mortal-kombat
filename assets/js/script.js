/*
        OBJETIVO 1 - Quando passar o mouse em cima do personagem temos que: 
            - colocar a classe selecionado no personagem que passamos o mouse em cima para adcionar a animação nele
            - retirar a classe selecionado do personagem que está selecionado
    */

const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");
    personagem.classList.add("selecionado");

    /*
        OBJETIVO 2 - quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande
            - alterar a imagem do jogador 1
            - alterar o nome do jogador 1
    */

            const idSelecionado = personagem.attributes.id.value;
            
            const imagemjogador1 = document.getElementById('personagem-jogador-1');
            imagemjogador1.src = `./assets/img/${idSelecionado}.png`

        
            const nomeJogador1 = document.getElementById('nome-jogador-1');
            const nomeSelecionado = personagem.getAttribute('data-name');
            nomeJogador1.innerHTML = nomeSelecionado;
  });
});
