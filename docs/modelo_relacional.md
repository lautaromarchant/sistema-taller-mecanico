# MODELO RELACIONAL (MR)
**Sistema de Gestión para Taller Mecánico**

A partir del Diagrama de Entidad Relación DER realizado, se establece la siguiente estructura de tablas, claves primarias (PK) y claves foráneas (FK):

* **CLIENTES** (<u>id_cliente</u> [PK], nombre, apellido, dni, telefono, email)
* **MECANICOS** (id_mecanico [PK], nombre, apellido, dni, especialidad, telefono)
* **PROVEEDORES** (id_proveedor [PK], nombre_empresa, telefono, direccion, email)
* **VEHICULOS** (<u>patente</u> [PK], marca, modelo, anio, id_cliente [FK -> CLIENTES.id_cliente])
* **REPUESTOS** (<u>id_repuesto</u> [PK], nombre, precio_unitario, stock)
* **SERVICIOS** (id_servicio [PK], nombre, costo_base, descripcion)
* **ORDENES_TRABAJO** (<u>id_orden</u> [PK], fecha_ingreso, diagnostico, estado, costo_mano_obra, total_facturado, patente [FK -> VEHICULOS.patente], id_servicio [FK -> SERVICIOS.id_servicio])
* **DETALLES_ORDEN** (<u>id_detalle</u> [PK], cantidad, precio_aplicado, id_orden [FK -> ORDENES_TRABAJO.id_orden], id_repuesto [FK -> REPUESTOS.id_repuesto])

---

### Reglas de Transformación Aplicadas:
1. Las entidades del DER pasaron directamente a ser tablas relacionales.
2. Las claves primarias (PK) quedaron identificadas y subrayadas para cada tabla.
3. Las relaciones 1:N pasaron la clave primaria del lado "1" como clave foránea (FK) a la tabla del lado "N" (por ejemplo, `id_cliente` en `VEHICULOS`).
4. La relación N:M entre `ORDEN_TRABAJO` y `REPUESTOS` se transformó en la tabla intermedia `DETALLES_ORDEN`, incorporando las claves foráneas de ambas tablas relacionadas.
