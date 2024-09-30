document.addEventListener('DOMContentLoaded', function () {
    
    const botonConvertir = document.getElementById("convertir");
    const temperaturaInput = document.getElementById("temperaturaInput");
    const celsiusTemperatura = document.getElementById("celsius");
    const fahrenheitTemperatura = document.getElementById("fahrenheit");
    const kelvinTemperatura = document.getElementById("kelvin");

    botonConvertir.addEventListener("click", function() {
        const temperatura = Number(temperaturaInput.value);

        if (isNaN(temperatura)) {
            alert("Ingresa un número válido");
        } else {

            const fahrenheit = (temperatura * 9 / 5) + 32;
            const kelvin = temperatura + 273.15;

            celsiusTemperatura.innerHTML = `${temperatura}°C`;
            fahrenheitTemperatura.innerHTML = `${fahrenheit.toFixed(2)}°F`;
            kelvinTemperatura.innerHTML = `${kelvin.toFixed(2)}°K`;
        }
    });
});