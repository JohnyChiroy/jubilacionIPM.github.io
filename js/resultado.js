// Recuperar resultados del localStorage
const primerNombre = localStorage.getItem('primerNombre');
const segundoNombre = localStorage.getItem('segundoNombre');
const primerApellido = localStorage.getItem('primerApellido');
const segundoApellido = localStorage.getItem('segundoApellido');
const edad = localStorage.getItem('edad');
const correo = localStorage.getItem('correo');
const telefono = localStorage.getItem('telefono');
const genero = localStorage.getItem('genero');
const pertenencia = localStorage.getItem('pertenencia');
const añosCotizados = localStorage.getItem('añosCotizados');
const salarioPromedio = localStorage.getItem('salarioPromedio');
const montoPension = localStorage.getItem('montoPension');

// Mostrar resultados
const resultadoDiv = document.getElementById('resultado');
resultadoDiv.innerHTML = `
    <p><strong>Nombre del Solicitante:</strong> ${primerNombre + " " + segundoNombre + " " + primerApellido + " " + segundoApellido}</p>
    <p><strong>Edad:</strong> ${edad}</p>
    <p><strong>Correo Electrónico:</strong> ${correo}</p>
    <p><strong>Teléfono:</strong> ${telefono}</p>
    <p><strong>Género:</strong> ${genero}</p>
    <p><strong>Pertenencia Sociolingüística:</strong> ${pertenencia}</p>
    <p><strong>Años Cotizados:</strong> ${añosCotizados}</p>
    <p>El promedio de su salario es de: <strong>${salarioPromedio} Quetzales</strong></p>
    <p>El monto aproximado de Pensión es de: <strong>${montoPension} Quetzales </strong></p>
`;

function volver() {
    window.location.href = 'index.html'; 
}