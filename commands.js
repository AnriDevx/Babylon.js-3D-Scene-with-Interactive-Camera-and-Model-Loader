// commands.js

const commandInput = document.getElementById("commandInput");
const backgroundMusic = document.getElementById("backgroundMusic");

function executeCommand(command) {
    switch (command) {
        case 'music':
            if (backgroundMusic.readyState >= 3) {
                backgroundMusic.play();
                console.log("Music playing...");
            } else {
                console.log("Audio file is not ready.");
            }
            break;

        case 'pause music':
            backgroundMusic.pause();
            console.log("Music paused.");
            break;

        case 'fire':
            window.columns.forEach(column => applyFireEffect(column));
            console.log("Fire effect applied.");
            break;

        case 'off fire':
            removeFireEffects();
            console.log("Fire effect removed.");
            break;

        case 'laser':
            window.columns.forEach(column => applyLaserEffect(column));
            console.log("Laser effect applied.");
            break;

        case 'off laser':
            removeLaserEffects();
            console.log("Laser effect removed.");
            break;

        case 'smoke':
            window.columns.forEach(column => applySmokeEffect(column));
            console.log("Smoke effect applied.");
            break;

        case 'off smoke':
            removeSmokeEffects();
            console.log("Smoke effect removed.");
            break;

        default:
            console.log("Unknown command:", command);
    }
}

// Command input listener
commandInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const command = commandInput.value.trim().toLowerCase();
        executeCommand(command);
        commandInput.value = "";
    }
});
