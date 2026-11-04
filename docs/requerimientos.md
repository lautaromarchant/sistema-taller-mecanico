DOCUMENTACIÓN DEL PROYECTO - ETAPA 1
Sistema de Gestión para Taller Mecánico

1. Recolección de Datos (Informe)
¿Qué datos e información mantiene actualmente el taller y cómo los mantiene?

Hoy en día en el taller se manejan con fichas en papel y algunas planillas de Excel bastante simples. Guardan los datos básicos del cliente como el nombre y el teléfono, la patente del auto y anotan a mano en un cuaderno qué fallas tiene el vehículo o qué repuestos le fueron cambiando.

¿Qué nueva información se desea obtener con el nuevo sistema?

Queremos armar una especie de historia clínica digital para cada auto usando la patente. La idea es que al buscar un auto se pueda ver la fecha en la que entró, qué arreglos se le hicieron, qué repuestos se usaron, la mano de obra y el precio final que se le cobró.

¿Tiene actualmente un sistema informático?

No, no tienen ningún sistema centralizado. Al tener todo anotado en cuadernos o planillas sueltas, pierden bastante tiempo buscando qué se le hizo a un auto cuando vuelve al taller.

Información innecesaria, duplicada o inconsistente:

Hay nombres de clientes anotados varias veces en distintos cuadernos y con datos diferentes. Con el nuevo sistema se va a organizar mejor para que cada cliente tenga sus autos asociados y no se repita la información.

Nuevos datos a considerar:

Vamos a agregar el estado del trabajo para saber si el auto está esperando repuesto, en arreglo o listo para entregar, y también un control del stock de repuestos que quedan en el taller.

Funcionalidades deseables a incorporar:

Un buscador rápido por patente, que el sistema te arme el total a cobrar de forma automática y que descuente del inventario los repuestos que se van usando.

2. Especificación de Requerimientos
Requerimientos Funcionales
RF1 - Clientes: Poder guardar, modificar y buscar datos de clientes como Nombre, DNI y Teléfono.

RF2 - Vehículos: Guardar los autos vinculados a su dueño mediante la patente, marca, modelo y año.

RF3 - Órdenes de Trabajo: Crear una ficha para el auto que entra al taller, poniendo la fecha, el problema que tiene, el estado del arreglo y notas del mecánico.

RF4 - Repuestos: Cargar la lista de repuestos con su precio y cuántos hay guardados en el taller.

RF5 - Historial por Patente: Poder poner la patente de un auto en el buscador y que el sistema te muestre todo el historial de arreglos que se le hicieron.

RF6 - Facturación: Que el sistema sume automáticamente el valor de los repuestos usados más la mano de obra para saber cuánto hay que cobrarle al cliente.

Requerimientos No Funcionales
RNF1 - Pantalla Web: La interfaz tiene que ser sencilla de usar y rápida, hecha con HTML, CSS y JavaScript.

RNF2 - Base de Datos: Los datos se van a guardar en una base de datos SQL para que no se pierda la información al apagar la computadora.

RNF3 - Control de Cambios: Usar Git y GitHub para trabajar juntos y tener el código respaldado.