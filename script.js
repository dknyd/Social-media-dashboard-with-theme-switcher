const switchToggle = document.querySelector('.switch input');
const lightCSS = document.querySelector('link[href="style_light.css"]');
const darkCSS = document.querySelector('link[href="style_dark.css"]');
const currentMode = document.querySelector('.current__mode');

switchToggle.addEventListener('change', function () {
    if (switchToggle.checked) {
        // Light mode
        darkCSS.disabled = true;
        lightCSS.disabled = false;
        console.log('Switched to Light Mode');
        currentMode.innerHTML = "Light Mode";
    } else {
        // Dark mode
        darkCSS.disabled = false;
        lightCSS.disabled = true;
        console.log('Switched to Dark Mode');
        currentMode.innerHTML = "Dark Mode";
    }
});
