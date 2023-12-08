
        function convertTemperatures(value) {
            value = parseFloat(value);

            // Convert to Celsius
            document.getElementById("celsius").value = (value - 32) / 1.8;

            // Convert to Kelvin
            document.getElementById("kelvin").value = ((value - 32) / 1.8) + 273.15;
        }
