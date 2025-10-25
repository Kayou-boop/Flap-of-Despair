/* * FUNÇÃO DE MANUSEIO DE GAME OVER (Para ser usada em sheldon.html, franklin.html, maisie.html)
 * * Esta função salva a URL da página de jogo atual no localStorage e, em seguida,
 * redireciona o jogador para a página gameover.html.
 */
function handleGameOver() {
    // 1. **Salva a URL da página atual no localStorage.**
    // O gameover.html usará esta chave ('gameover_return_page') para saber para onde voltar.
    // Usamos window.location.href para obter a URL completa (ex: 'http://.../sheldon.html').
    localStorage.setItem('gameover_return_page', window.location.href);

    // Opcional: Adiciona um pequeno log no console para facilitar a depuração.
    console.log(`[Game Over Handler] Salvando URL de retorno: ${window.location.href}`);
    
    // 2. **Redireciona o jogador para a tela de Game Over.**
    // Certifique-se de que o caminho ('gameover.html') está correto.
    window.location.href = 'gameover.html';
}

// ----------------------------------------------------------------------------------
// EXEMPLO DE USO:
// 
// Para acionar o Game Over quando o jogador falhar, basta chamar handleGameOver().
// Você pode anexar esta função a qualquer evento de falha no seu código.
//
// Exemplo em sheldon.html:
// if (playerCollided()) {
//     handleGameOver();
// }
// ----------------------------------------------------------------------------------
