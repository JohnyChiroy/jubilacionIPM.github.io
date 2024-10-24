function calcularPension() {
    const primerNombre = document.getElementById('primerNombre').value;
    const segundoNombre = document.getElementById('segundoNombre').value;
    const primerApellido = document.getElementById('primerApellido').value;
    const segundoApellido = document.getElementById('segundoApellido').value;
    const edad = parseInt(document.getElementById('edad').value);
    const correo = document.getElementById('correo').value || "No proporcionado";
    const telefono = document.getElementById('telefono').value;
    const genero = document.getElementById('genero').value;
    const pertenencia = document.getElementById('pertenencia').value;
    const añosCotizados = parseInt(document.getElementById('añosCotizados').value);
//arreglo salarios
    const salarios = [
        parseFloat(document.getElementById('salario1').value),
        parseFloat(document.getElementById('salario2').value),
        parseFloat(document.getElementById('salario3').value),
        parseFloat(document.getElementById('salario4').value),
        parseFloat(document.getElementById('salario5').value),
    ];


    if (edad < (genero === "hombre" ? 60 : 55)) {
        alert("La edad mínima de jubilación es 60 años para hombres y 55 años para mujeres.");
        return; 
    }


    if (añosCotizados < 20) {
        alert("Debe tener un mínimo de 20 años cotizados.");
        return;
    }


    let totalSalarios = salarios[0] + salarios[1] + salarios[2] + salarios[3] + salarios[4];

    const salarioPromedio = totalSalarios / 5;

    // porcentaje de pensión en 50%.
    let porcentajePension = 0.50;

    //Años cotizados son mayores a 20, añade un 2% adicional por cada año extra.
    if (añosCotizados > 20) {
        const añosAdicionales = añosCotizados - 20;
        porcentajePension += (añosAdicionales * 0.02); // 2% adicional por cada año extra.
    }

    // Calcula el monto de la pensión.
    const montoPension = salarioPromedio * porcentajePension;

    localStorage.setItem('primerNombre', primerNombre);
    localStorage.setItem('segundoNombre', segundoNombre);
    localStorage.setItem('primerApellido', primerApellido);
    localStorage.setItem('segundoApellido', segundoApellido);
    localStorage.setItem('edad', edad);
    localStorage.setItem('correo', correo);
    localStorage.setItem('telefono', telefono);
    localStorage.setItem('genero', genero);
    localStorage.setItem('pertenencia', pertenencia);
    localStorage.setItem('añosCotizados', añosCotizados);
    localStorage.setItem('salarioPromedio', salarioPromedio.toFixed(2));
    localStorage.setItem('montoPension', montoPension.toFixed(2));

    window.location.href = "resultado.html";
}