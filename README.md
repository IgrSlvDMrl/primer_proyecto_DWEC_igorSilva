# primer_proyecto_DWEC_igorSilva
el objetivo de este programa es una calculadora con memoria

resumen de funcionamiento:

la función principal siendo calculadora(), donde seleccionamos la operación que queremos realizar,
dentro de la misma contamos con la función validarInput() que nos valida si se ha introducido
un numero y después lo parsea a float para facilitar su manejo.

la función operación(), es la función donde se realizan las operaciones y se hace el control de errores
después de que se realize la operación deseada esta se guarda en un array llamado historial, por
medio de una función llamada guardarHistorial(), esta construye un obejeto operación en el que se incluye,
el tipo de operación, ambos numeros y el resultado y a continuación efectua un push al array historial.

luego contamos con la función mostrarHistorial(), que es una de las opciones de calculadora(), y que como
su nombre indica recorre el array y nos muestra su contenido, además en el caso de estar vacio nos salta un mensaje
cabe destacar que contamos con una función adicional operaciónEscrita para traducir los numeros para cada operación
a su operación designada, facilitando su lectura en el historial.
