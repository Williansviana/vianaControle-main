import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

const auth = getAuth(app);

// Monitora o estado de autenticação em tempo real
onAuthStateChanged(auth, user => {
  if (user) {
    // Usuário autenticado: inicializa o sistema
    uid = user.uid;
    loadSalario();
    loadData();
  } else {
    // Usuário não autenticado: redireciona para a página de login
    window.location.replace("login.html");
  }
});