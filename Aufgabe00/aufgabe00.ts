var user: string | null = prompt("Wie ist dein Name?");

window.addEventListener("load", function(): void {
    document.getElementById("greeting").innerHTML = "Hallo " + user + "! Willkommen auf meiner Seite.";
});