document.addEventListener("DOMContentLoaded", () => {
    // Ergebnisse aus localStorage abrufen
    const spritkostengesamt = localStorage.getItem("spritkostengesamt");
    const unterkunftgesamt = localStorage.getItem("unterkunftgesamt");
    const gesamtkosten = localStorage.getItem("gesamtkosten");
    const spritkostenpro = localStorage.getItem("spritkostenpro");
    const unterkunftpro = localStorage.getItem("unterkunftpro");
    const kostenpro = localStorage.getItem("kostenpro");

    // Debugging: LocalStorage-Werte überprüfen
    console.log("Spritkosten Gesamt:", spritkostengesamt);
    console.log("Unterkunftskosten Gesamt:", unterkunftgesamt);
    console.log("Gesamtkosten:", gesamtkosten);
    console.log("Spritkosten pro Person:", spritkostenpro);
    console.log("Unterkunftskosten pro Person:", unterkunftpro);
    console.log("Kosten pro Person:", kostenpro);

    // Überprüfen, ob die Daten vorhanden sind
    if (!spritkostengesamt || !unterkunftgesamt || !gesamtkosten || !spritkostenpro || !unterkunftpro || !kostenpro) {
        alert("Fehler: Keine Ergebnisse gefunden.");
        return;
    }

    // Ergebnisse in die Tabelle einfügen
    document.getElementById("spritkostengesamt").textContent = `${spritkostengesamt} €`;
    document.getElementById("unterkunftgesamt").textContent = `${unterkunftgesamt} €`;
    document.getElementById("gesamtkosten").textContent = `${gesamtkosten} €`;

    document.getElementById("spritkostenpro").textContent = `${spritkostenpro} €`;
    document.getElementById("unterkunftpro").textContent = `${unterkunftpro} €`;
    document.getElementById("kostenpro").textContent = `${kostenpro} €`;
});
