
// El adivino
let edadMorir = "No morirás sino hasta los años 100. "
let mayorLogro = "Y tu mayor logro será: crear una empresa."
let dondeVivir = "De adulto, vivirás en Barranco "
let dondeTrabajar = "Dueño de mi empresa. "
let sueldo = "estarás ganando al mes S/3000. "
let todo = dondeVivir + sueldo + dondeTrabajar +  edadMorir + mayorLogro
let oracion = document.getElementById("oracion")
oracion.innerHTML = todo

// Calculadora de edad
let naci = 2001
let edadProximo = 2032
let posibleEdad = edadProximo - naci
let segundaOpcion = posibleEdad - 1
let oracion2 = ` ${posibleEdad} o ${segundaOpcion} en el año ${edadProximo}`
let calculadora = document.getElementById("calculadora")
calculadora.innerHTML = oracion2

// Helados de por vida
let edadActual = 18 
let edadMorir2 = 100
let comerHelados = 5
let diasResto = (edadMorir2 - edadActual) * 365 
let heladosResto = diasResto * comerHelados
let oracion3 = `Si tuviera helados de por vida, podría llegar a comer ${heladosResto}`
let helados = document.getElementById("helados")
helados.innerHTML = oracion3

// Geometria
// Ejercicios
// Repaso de variables y operadores básicos. 

// El adivino. 
// ¿Por qué pagar un adivino si podemos programar nuestro propio futuro?
// Almacena lo siguiente en una variable: edad en la que morirás, cuál será tu mayor logro, dónde vivirás de adulto, en qué estarás trabajando y cuánto ganarás al mes. 
// Luego imprime en la pantalla (puedes usar cualquiera de los 3 métodos que hemos visto en clase: console.log(), alert() o innerHTML) lo siguiente: “De adulto, vivirás en A, estarás ganando B al mes trabajando en C. No morirás sino hasta los D años. Y tu mayor logro será: E“;
// Haz una versión con concatenación, y otra versión con Template Literals. 

// La calculadora de edad. 
// ¿Quieres saber cuántos años tendrás en el año 2032? 
// Almacena tu año de nacimiento en una variable. 
// Almacena el año futuro que desees comprobar en una variable.
// Calcula las dos posibles edades que podrías tener ese año según las variables que guardaste. 
// Por ejemplo, si naciste en 1990, en el 2030 cumplirás 40 años, pero dependiendo de qué mes sea, podrías aún tener 41. 
// Luego imprime en la pantalla (puedes usar cualquiera de los 3 métodos que hemos visto en clase) lo siguiente: “Tendré AA o BB en el año YYYY”, sustituyendo los valores.  

// Helados de por vida.
// ¿Alguna vez te preguntaste cuántos helados podrías comer si tuvieras helados de por vida? 
// Almacena en una variable tu edad actual
// Almacena en una variable la edad que tendrás cuando mueras. 
// Almacena en una variable la cantidad máxima de helados que comerías por día. 
// Calcula cuántos comerías por el resto de tu vida. 
// Imprime en pantalla: “Si tuviera helados de por vida, podría llegar a comer XX”

// El geómetra. 
// Calcula fácilmente el área de un círculo. Recuerda: el área de un círculo es igual a PI * radio al cuadrado. 
// (area = PI r2 ) y para extraer su circunferencia, debemos multiplicar PI*diámetro. Y para sacar el diámetro debemos multiplicar el radio por 2. (Tip: pueden buscar en internet como obtener PI con Javascript)
// Almacenar en una variable el valor del radio. 
// Calcular la circunferencia basada en el radio, e imprimir “La circunferencia es AA”
// Calcular el área en función del radio, e imprimir “El área del círculo es: BB”. 



// El egocéntrico. 
// Crea un string que contenga los nombres de todos los alumnos de tu mesa separados por comas (todo dentro de una misma cadena de texto). Coloca tu nombre en el medio. 
// Con el método slice(), extrae tu nombre de la cadena de texto. 
// Con el método substr(), vuelve a extraer tu nombre de la cadena de texto. 
// Utilizando el método replace() varias veces, reemplaza los nombres de todos tus compañeros con tu propio nombre. 
//  Finalmente, convierte toda la cadena de texto a mayúsculas. 
