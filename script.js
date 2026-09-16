// 
// SCRIPT PRINCIPAL DO SITE — COMPLETO 
// 

console.log(" Mundo da Tecnologia — Site carregado com sucesso!");

// 
// FUNÇÃO: CORRIGIR QUIZ
// 
function corrigirQuiz() {
    let acertos = 0;
    let total = 3;

    // Verificar pergunta 1
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "certo") acertos++;

    // Verificar pergunta 2
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "certo") acertos++;

    // Verificar pergunta 3
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "certo") acertos++;

    // Exibir resultado
    const divResultado = document.getElementById("resultado-quiz");
    
    if (!divResultado) return; // Sai se não estiver na página do Quiz
    
    divResultado.style.display = "block";

    if (acertos === total) {
        divResultado.style.background = "#d4edda";
        divResultado.style.color = "#155724";
        divResultado.style.padding = "15px";
        divResultado.style.borderRadius = "8px";
        divResultado.innerHTML = ` Parabéns! Você acertou TODAS as ${total} perguntas! Continue assim!`;
    } else if (acertos >= 1) {
        divResultado.style.background = "#fff3cd";
        divResultado.style.color = "#856404";
        divResultado.style.padding = "15px";
        divResultado.style.borderRadius = "8px";
        divResultado.innerHTML = ` Você acertou ${acertos} de ${total}. Reveja as respostas e tente novamente!`;
    } else {
        divResultado.style.background = "#f8d7da";
        divResultado.style.color = "#721c24";
        divResultado.style.padding = "15px";
        divResultado.style.borderRadius = "8px";
        divResultado.innerHTML = ` Você ainda não acertou nenhuma. Leia o conteúdo com atenção e tente de novo! 💪`;
    }
}

// 
// FUNÇÃO: FORMULÁRIO DE CONTATO
//
window.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formContato");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault(); // Impede recarregar a página

            const nome = document.getElementById("nome").value;
            const resposta = document.getElementById("resposta");

            if (resposta) {
                resposta.style.display = "block";
                resposta.style.background = "#d4edda";
                resposta.style.color = "#155724";
                resposta.innerHTML = `✅ Olá <strong>${nome}</strong>! Sua mensagem foi enviada com sucesso! Em breve entraremos em contato. 💛<br><br>(Este é um projeto de demonstração — em um site real, a mensagem seria enviada para o servidor.)`;
                form.reset();
            }
        });
    }
});

// 
//  ANIMAÇÃO AO ROLAR A PÁGINA
// 
document.addEventListener("DOMContentLoaded", function() {
    const cartoes = document.querySelectorAll(".cartao, .card");
    
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    cartoes.forEach(cartao => {
        cartao.style.opacity = "0";
        cartao.style.transform = "translateY(20px)";
        cartao.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observador.observe(cartao);
    });
});

//
// MENSAGEM DE AJUDA NO CONSOLE
// 
console.log("%c Mundo da Tecnologia", "font-size: 16px; font-weight: bold; color: #2c5aa0;");
console.log("%cSite criado com carinho para Pais e Filhos ", "color: #4a90d9;");
console.log("%cSe precisar de ajuda, consulte a página de Contato!", "color: #666;");