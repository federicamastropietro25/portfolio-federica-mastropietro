/* ============================================================
   INVIO DEL MODULO DI CONTATTO CON EMAILJS
   Questo è l'UNICO file JavaScript del sito (insieme alla libreria di EmailJS): serve solo nella pagina Contatti.
   ============================================================ */

/* ------------------------------------------------------------
   1. LE MIE CHIAVI DI EMAILJS (un solo punto, qui)
   Si trovano nel mio account su emailjs.com:
   - Service ID: in "Email Services" (il servizio collegato alla mia casella)
   - Template ID: nel template "Contact Us"
   - Public Key: in "Account > General"
   La Public Key è fatta per stare nel codice: è "pubblica" di proposito.
   Se un giorno cambio servizio o template, modifico solo queste tre righe.
   ------------------------------------------------------------ */
const EMAILJS_SERVICE_ID = "service_swh5wpg";
const EMAILJS_TEMPLATE_ID = "template_g2xongp";
const EMAILJS_PUBLIC_KEY = "1Eoi1tyGH7eSuYyv9";

/* ------------------------------------------------------------
   2. I TESTI CHE MOSTRO DOPO L'INVIO
   ------------------------------------------------------------ */
const TESTO_SUCCESSO = "Grazie! Il tuo messaggio è stato inviato, ti risponderò il prima possibile.";
const TESTO_ERRORE = "Non è stato possibile inviare il messaggio. Riprova tra poco o scrivimi direttamente.";
const TESTO_BOTTONE_INVIO = "Invio in corso...";

/* ------------------------------------------------------------
   3. COLLEGO IL MODULO A EMAILJS
   ------------------------------------------------------------ */
const modulo = document.querySelector("#modulo-contatti");
const esito = modulo.querySelector(".esito-invio"); // il paragrafo dove scrivo il messaggio di esito
const bottone = modulo.querySelector("button[type='submit']");
const testoBottoneOriginale = bottone.textContent;

// Preparo la libreria di EmailJS con la mia Public Key
emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

// Scrive il messaggio di esito (verde se è andato bene, rosso se c'è stato un errore)
function mostraEsito(testo, riuscito) {
  esito.textContent = testo;
  esito.classList.toggle("esito-successo", riuscito);
  esito.classList.toggle("esito-errore", !riuscito);
}

// Quando premo "Invia Messaggio" il browser controlla prima i campi (required, email valida).
// Questo codice parte SOLO se tutti i campi sono validi.
modulo.addEventListener("submit", function (evento) {
  evento.preventDefault(); // non ricarico la pagina: invio i dati da qui

  // Disattivo il bottone mentre invio, così non si può premere due volte
  bottone.disabled = true;
  bottone.textContent = TESTO_BOTTONE_INVIO;
  esito.textContent = "";
  esito.classList.remove("esito-successo", "esito-errore");

  // sendForm legge i campi del modulo (name, email, message) e li manda al template di EmailJS
  emailjs
    .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, modulo)
    .then(function () {
      mostraEsito(TESTO_SUCCESSO, true);
      modulo.reset(); // svuoto i campi
    })
    .catch(function () {
      mostraEsito(TESTO_ERRORE, false);
    })
    .finally(function () {
      // In ogni caso riattivo il bottone
      bottone.disabled = false;
      bottone.textContent = testoBottoneOriginale;
    });
});
