# MODELO RELACIONAL (MR)
**Sistema de Gestión para Taller Mecánico**

A partir del Diagrama de Entidad Relación DER realizado, se establece la siguiente estructura de tablas, claves primarias (PK) y claves foráneas (FK):

* **CLIENTES** (<u>id_cliente</u> [PK], nombre, apellido, dni, telefono, email)
* **MECANICOS** (id_mecanico [PK], nombre, apellido, dni, especialidad, telefono, email, usuario, contraseña)
* **PROVEEDORES** (id_proveedor [PK], nombre_empresa, telefono, direccion, email)
* **VEHICULOS** (<u>patente</u> [PK], marca, modelo, anio, color, kilometraje, nivel_combustible, estado_general, inventario, fotos, id_cliente [FK -> CLIENTES.id_cliente])
* **REPUESTOS** (<u>id_repuesto</u> [PK], id_proveedor [FK -> PROVEEDORES.id_proveedor], nombre, precio_unitario, stock)
* **SERVICIOS** (id_servicio [PK], nombre, costo_base, descripcion)
* **ORDENES_TRABAJO** (<u>id_orden</u> [PK], patente [FK -> VEHICULOS.patente], id_mecanico [FK -> MECANICOS.id_mecanico], fecha_inicio, fecha_fin,estado, id_repuesto [FK -> REPUESTOS.id_repuesto], id_servicio [FK -> SERVICIOS.id_servicio], notas_mecanico, costo_mano_obra, impuestos, total_facturado)

---

### Reglas de Transformación Aplicadas:
1. Las entidades del DER pasaron directamente a ser tablas relacionales.
2. Las claves primarias (PK) quedaron identificadas y subrayadas para cada tabla.
3. Las relaciones 1:N pasaron la clave primaria del lado "1" como clave foránea (FK) a la tabla del lado "N" (por ejemplo, `id_cliente` en `VEHICULOS`).
4. La relación N:M entre `ORDEN_TRABAJO` y `REPUESTOS` se transformó en la tabla intermedia `DETALLES_ORDEN`, incorporando las claves foráneas de ambas tablas relacionadas.
