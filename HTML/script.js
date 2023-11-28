document.getElementById('login-form').addEventListener('submit', function(event) {
   event.preventDefault(); // Impede o envio padrão do formulário

   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;

   // Realize a autenticação do usuário aqui (por exemplo, usando uma API REST)

   if (username && password) {
       alert('Login bem-sucedido!');
       window.location.href = '/chat'; // Redireciona para a página de chat após o login bem-sucedido
   } else {
       alert('Por favor, preencha todos os campos.');
   }
});