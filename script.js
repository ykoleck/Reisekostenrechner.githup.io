






document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reiseForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Verhindert das Neuladen der Seite

        // Eingabewerte erfassen
        const km = parseFloat(document.getElementById("km").value);
        const spritpreis = parseFloat(document.getElementById("spritpreis").value);
        const verbrauch = parseFloat(document.getElementById("verbrauch").value);
        const unterkunft = parseFloat(document.getElementById("unterkunft").value);
        const reisende = parseInt(document.getElementById("reisende").value);

        // Validierung
        if (isNaN(km) || isNaN(spritpreis) || isNaN(verbrauch) || isNaN(unterkunft) || isNaN(reisende) || reisende <= 0) {
            alert("Bitte alle Felder korrekt ausfüllen.");
            return;
        }

        // Berechnungen
        const gesamtSpritkosten = (km / 100) * verbrauch * spritpreis;
        const gesamtUnterkunftskosten = unterkunft;
        const gesamtkosten = gesamtSpritkosten + gesamtUnterkunftskosten;

        const spritkostenProPerson = gesamtSpritkosten / reisende;
        const unterkunftskostenProPerson = gesamtUnterkunftskosten / reisende;
        const kostenProPerson = gesamtkosten / reisende;

        // Debugging: Berechnete Werte ausgeben
        console.log("Gesamte Spritkosten:", gesamtSpritkosten);
        console.log("Gesamte Unterkunftskosten:", gesamtUnterkunftskosten);
        console.log("Gesamtkosten:", gesamtkosten);
        console.log("Spritkosten pro Person:", spritkostenProPerson);
        console.log("Unterkunftskosten pro Person:", unterkunftskostenProPerson);
        console.log("Kosten pro Person:", kostenProPerson);

        // Ergebnisse im localStorage speichern
        localStorage.setItem("spritkostengesamt", gesamtSpritkosten.toFixed(2));
        localStorage.setItem("unterkunftgesamt", gesamtUnterkunftskosten.toFixed(2));
        localStorage.setItem("gesamtkosten", gesamtkosten.toFixed(2));
        localStorage.setItem("spritkostenpro", spritkostenProPerson.toFixed(2));
        localStorage.setItem("unterkunftpro", unterkunftskostenProPerson.toFixed(2));
        localStorage.setItem("kostenpro", kostenProPerson.toFixed(2));

        // Weiterleitung zur Ergebnisseite
        window.location.href = "result.html";
    });
});





// Warten auf das Absenden des Formulars
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Verhindert das automatische Neuladen der Seite
    
    // Hier holst du die Eingabewerte
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Beispiel für eine Login-Überprüfung (kann durch echte Logik ersetzt werden)
    if (username === "deinUsername" && password === "deinPasswort") {
        // Erfolgreiches Login - Weiterleitung zur index.html
        window.location.href = "index.html"; // Weiterleiten zur Hauptseite
    } else {
        // Fehlerhafte Anmeldung, zeige eine Fehlermeldung
        alert("Login fehlgeschlagen. Bitte überprüfe deine Eingaben.");
    }
});
