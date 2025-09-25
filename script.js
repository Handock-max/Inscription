// ---------------------------
// Script JS pour le formulaire
// ---------------------------

// Elements principaux
const btnInscription = document.getElementById("btnInscription");
const accueil = document.getElementById("accueil");
const formulaire = document.getElementById("formulaire");
const merci = document.getElementById("merci");
const btnContact = document.getElementById("btnContact");

const form = document.getElementById("registrationForm");
const pages = document.querySelectorAll(".form-page");
let currentPage = 0;

// ---------------------------
// Afficher le formulaire après clic sur "Je m'inscris"
// ---------------------------
btnInscription.addEventListener("click", () => {
  accueil.classList.add("hidden");
  formulaire.classList.remove("hidden");
  showPage(currentPage);
});

// ---------------------------
// Fonction pour afficher la page actuelle du formulaire
// ---------------------------
function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.toggle("hidden", i !== index);
  });
}

// ---------------------------
// Navigation "Suivant" et "Précédent"
// ---------------------------
document.querySelectorAll(".next").forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
      currentPage++;
      showPage(currentPage);
    }
  });
});

document.querySelectorAll(".prev").forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      showPage(currentPage);
    }
  });
});

// ---------------------------
// Soumission du formulaire
// ---------------------------
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Collecte des données
  const data = {
    nom_complet: document.getElementById("nom_complet").value,
    email: document.getElementById("email").value,
    telephone: document.getElementById("telephone").value,
    ville: document.getElementById("ville").value,
    type_formation: document.getElementById("type_formation").value,
    // A compléter : formation_detail, montant_paye selon sélection
    mode_participation: document.getElementById("mode_participation").value,
    motivation: document.getElementById("motivation").value,
    centres_interet: Array.from(document.querySelectorAll(".checkbox-group input:checked")).map(cb => cb.value).join(", "),
    date_inscription: new Date().toISOString()
  };

  // ---------------------------
  // Ici tu peux connecter à Supabase
  // ---------------------------
  // Exemple :
  // const { data: supaData, error } = await supabase
  //   .from('inscriptions')
  //   .insert([data]);

  console.log("Données à envoyer :", data);

  // Affichage message de remerciement
  formulaire.classList.add("hidden");
  merci.classList.remove("hidden");
});

// ---------------------------
// Bouton contact WhatsApp
// ---------------------------
btnContact.addEventListener("click", () => {
  const phoneNumber = "[NUMERO_WHATSAPP]"; // à compléter
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(isMobile){
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  } else {
    alert("Merci de nous contacter via WhatsApp : " + phoneNumber);
  }
});
