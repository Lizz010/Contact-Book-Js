const nombre = document.querySelector('.nombre')
const telefono = document.querySelector('.telefono')
const email = document.querySelector('.email')
const botonadd = document.querySelector('.botonadd')
const listado = document.querySelector('.listado')

//Configurando localStorage
const ls = window.localStorage

//Creando un evento al button y asignando una arrow function
botonadd.onclick = () => {
	let contact = {
		id: Math.random(1,100),
		nombre: nombre.value,
		telefono: telefono.value,
		email: email.value
	}
	console.log(contact)
}