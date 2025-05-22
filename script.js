import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";

//Easter egg, non leggere

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnVideo").addEventListener("click", mettiVideo);
});

const videoSound = new Audio("tf_nemesis.mp3");
const easterSound = new Audio("1743703072-y2matevideo-320kbps-bombardino-crocodilo-brainrot-brainrotai_eAmQCBpw.mp3");
const failSound = new Audio("wah-wah-sad-trombone-6347.mp3");

function mettiVideo() {
  const video = document.getElementById("x");
  video.innerHTML =
    '<iframe width="600px" height="700px" src="https://www.youtube.com/embed/SxczvqJNojQ?si=-d9wZ9_ADS2uZzak&autoplay=1" title="Teknologia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

  const scorriSU = document.getElementById("Prenota");
  scorriSU.scrollIntoView({ behavior: "smooth" });
  videoSound.play();
  setTimeout(() => {
    videoSound.pause();
    videoSound.currentTime = 0;
  }, 1000);

  const contenitore = document.createElement("div");
  contenitore.className = "col-12 col-md-6 col-lg-4 m-0 p-0";

  const immagine = document.createElement("img");
  immagine.src = "oynqiuq4a9k51.jpg";
  immagine.alt = "Immagine statica";
  immagine.style.width = "100%";
  immagine.style.height = "100%";
  immagine.style.objectFit = "cover";

  const mappa = document.getElementById("mappa");
  contenitore.appendChild(immagine);
  mappa.parentNode.replaceChild(contenitore, mappa);

  document.getElementById("txt1").textContent = "";
  document.getElementById("txt2").textContent = "Ti avevo avvisato";
  document.getElementById("txt3").textContent = "";
}

document.getElementById("easter").onclick = function () {
  this.classList.toggle("attivato");

  window.scrollTo({ top: 0, behavior: "smooth" });
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  document.querySelector(".immagineHero").style.backgroundImage =
    "url('https://cdn-0001.qstv.on.epicgames.com/DeWFZjGciBtKpknWZf/image/landscape_comp.jpeg')";
  document.getElementById("titolo").textContent = "Bombardiro Crocodilo";
  document.getElementById("titolo2").textContent = "L'unico. Il solo.";
  document.getElementById("titolo3").textContent = "";
  
  easterSound.play();
};

const bottoni = document.querySelectorAll("button");

bottoni.forEach((bottone) => {
  const èNelForm = bottone.closest("form");
  const èBtnVideo = bottone.id === "btnVideo";
  const èNascosto = bottone.classList.contains("btnNascosto");

  if (!èNelForm && !èBtnVideo && !èNascosto) {
    bottone.addEventListener("click", () => {
      failSound.currentTime = 0;
      failSound.play();
    });
  }
});

const suonoForm = new Audio("successo.mp3");


//-------------------DATABASE-------------------------

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDCBxIfeCIzp7dRU8HMdaEqAk7XxsgAUKc",
    authDomain: "database-progetto-5d7f1.firebaseapp.com",
    projectId: "database-progetto-5d7f1",
    storageBucket: "database-progetto-5d7f1.firebasestorage.app",
    messagingSenderId: "707736621954",
    appId: "1:707736621954:web:d850e80c3aacfbf8dc759b"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const collezione = collection(db, "Dati-Prenotazione");

window.formSubmit = async function () {
  const nome = document.getElementById("nome").value;
  const cognome = document.getElementById("cognome").value;
  const numero = document.getElementById("numero").value;
  const numclienti = document.getElementById("numclienti").value;
  const giorno = document.getElementById("giorno").value;
  const ora = document.getElementById("ora").value;
  const messaggio = document.getElementById("messaggio").value;

if (!nome || !cognome || !numero || !numclienti || !giorno || !ora) {
    alert("Non sei divertente. Compila tutti i campi obbligatori prima di inviare!");
    return;
  }
  const consenso = document.getElementById("consenso").checked;
if (!consenso) {
  alert("Devi accettare la Privacy Policy prima di inviare!");
  return;
}


  const dati = {
    nome,
    cognome,
    numero,
    numclienti,
    giorno,
    ora,
    messaggio,
  };

  console.table(dati);
  suonoForm.play();
  try {
    await addDoc(collezione, dati);
    alert("Prenotazione inviata con successo!");
    document.getElementById("form").reset();
  } catch (error) {
    console.error("Errore durante l'invio:", error);
    alert("Errore durante l'invio. Riprova.");
  }
};
