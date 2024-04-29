function calcular() {

    let nombre = prompt("Ingresa tu nombre:")
    if (nombre !== "" && nombre !== null) {
        let consulta = confirm("Hola " + nombre + ", a continuación calcularemos el porcentaje de IVA")

        if (consulta == true) {

            let numero = parseInt(prompt("Ingresa el valor a calcular"))

            let iva = parseInt(prompt("Ingrese:\n1 para un IVA del 10,5% \n2 para un IVA del 21%"))

            const iva1 = 0.105
            const iva2 = 0.21

            switch (iva) {
                case 1:
                    let iva10 = confirm("El monto del IVA es: " + numero * iva1 + "\n\nDesea sumar los valores?")
                    if (iva10 == true) {
                        alert("El monto total es " + ((numero * iva1) + numero))
                    }
                    else {
                        alert("Hasta luego")
                    }
                    break
                case 2:
                    let iva21 = confirm("El monto del IVA es: " + numero * iva2 + "\n\nDesea sumar los valores?")
                    if (iva21 == true) {
                        alert("El monto total es " + ((numero * iva2) + numero))
                    }
                    else {
                        alert("Hasta luego")
                    }
                    break

                default:
                    alert("Debe ingresar el valor 1 o 2")
            }
        }
        
    } else {
        alert("Ingrese un nombre valido")
    }
}
calcular()


