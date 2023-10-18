// Aguarda o evento 'DOMContentLoaded' para garantir que o código seja executado após o carregamento do DOM.
document.addEventListener('DOMContentLoaded', function() {
    // Quando a página é rolada, adiciona ou remove a classe "scrolled" na barra de navegação.
    window.addEventListener('scroll', () => {
        // Obtém o elemento da barra de navegação pelo seu ID.
        const navbar = document.getElementById('navbar');
        // Verifica se o usuário rolou a página para baixo (scrollY > 0).
        if (window.scrollY > 0) {
            // Adiciona a classe "scrolled" à barra de navegação.
            navbar.classList.add('scrolled');
        } else {
            // Remove a classe "scrolled" da barra de navegação.
            navbar.classList.remove('scrolled');
        }
    });
});
