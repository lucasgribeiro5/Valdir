function entrar() {
    var btn = document.getElementById('entrarBtn');
    var carregandoDiv = document.getElementById('carregando');

    // Mostrar o texto de "Carregando..." e ocultar o botão de entrada
    carregandoDiv.style.display = 'block';
    btn.style.display = 'none';

    // Simular uma operação de carregamento (aqui você pode fazer uma requisição AJAX, etc.)
    setTimeout(function() {
        // Simulando um tempo de carregamento de 2 segundos
        // Após o carregamento, ocultar o texto de "Carregando..." e mostrar novamente o botão de entrada
        carregandoDiv.style.display = 'none';
        btn.style.display = 'block';
    }, 1500);
}
