# Quick Alert
Quick Alert é uma maneira rápida de adicionar alertas personalizados ao seu projeto

o uso do Quick Alert é muito simples, você pode passar um objeto com até quatro propriedades:

title: O título do seu alerta.

message: A mensagem que você deseja passar (Você pode passar como parametro um title e message, ou somente um dos dois).

trigger: O Gatilho para o alerta, uma opção caso deseje usar um alerta de forma simples ao clicar em um botão por exemplo,
        são usados os gatilhos do JavaScript (esta propriedade é opcional).
        exemplos: "click", "mouseleave", "mouseenter"

target: Se você definir a propriedade trigger, será necessário definir um alvo que ativara o gatilho por meio desta propriedade,
        o alvo será selecionado por meio de um querySelector, logo você tera que usar a sintaxe deste.
        exemplo: " target:'#divTarget' "

Ambas as propriedades trigger e targets são opcionais, você pode usar somente as propriedades title e message

  - Uso simples:
        
        new quickal({
            title: "Este é um alerta do Quick Alert :D",
            message: "uma maneira rápida de adicionar alertas personalizados ao seu projeto!",
            trigger: "click",
            target: "#alertbtn1"
        })

  - Uso personalizado:
   
        function showalert() {
            const txt2 = document.querySelector("#text2")
            const txt = document.querySelector("#text")
            if (txt.value.length == 0 && txt2.value.length == 0) {
                new quickal({
                    title: "Erro",
                    message: "Nenhum texto foi inserido :("
                })
            } else {
                new quickal({
                    title: txt.value,
                    message: txt2.value
                })
            }
        }
        
  Acesse a demo dentro do projeto para melhor entendimento do funcionamento.
