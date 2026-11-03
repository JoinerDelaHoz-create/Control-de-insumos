# 🏢 Sistema de Control y Auditoría de Insumos - Almacén Central

Aplicación web empresarial responsiva y progresiva (PWA) diseñada para el control exhaustivo de inventario, registro de entregas por empleado con marca temporal inmutable, auditoría y reabastecimiento de insumos.

---

## 🚀 Inicio Rápido (En 5 segundos)

1. **Abre el archivo [`index.html`](file:///c:/Users/Monsalvo/OneDrive%20-%20Unibarranquilla/Documentos/APP%20inventario%20U.Metropolitana/index.html) con tu navegador favorito** (Google Chrome, Microsoft Edge, Brave, Firefox, etc.).
2. ¡La aplicación ya está funcionando! Incluye **los 43 insumos reales** de tu inventario inicial precargados y listos para operar.
3. El PIN inicial de Administrador es: `1234` (puedes cambiarlo en la pestaña de Seguridad).

---

## 📋 Módulos Principales

### 1. 📦 Stock Actual (Catálogo de Insumos)
* Vista detallada de las cantidades en stock de los 43 insumos.
* Buscador dinámico por nombre o categoría.
* Alertas visuales:
  * 🟢 **Verde (Óptimo):** Stock suficiente.
  * 🟡 **Amarillo (Bajo):** Menos de 5 unidades.
  * 🔴 **Rojo (Crítico / Agotado):** 2 unidades o menos.
* Acciones rápidas en cada fila: botón para **Entregar** y botón para **Reabastecer (Entrada)**.

### 2. 📤 Entregar Insumo (Salidas a Empleados)
* Selección rápida del empleado receptor y del insumo a entregar.
* Validador de stock disponible (impide entregar más de lo existente).
* **Fecha y Hora exacta generadas automáticamente** con precisión de segundo.
* Campo de observaciones opcional (área, turno, justificación).

### 3. 📥 Reabastecer (Entradas de Insumos)
* Selección del insumo recibido y cantidad ingresada.
* Actualiza y suma automáticamente el stock general.
* Registro de auditoría con origen, proveedor o número de remisión.

### 4. 👥 Personal a Cargo (Directorio de Empleados)
* Añadir nuevos empleados (nombre completo, cargo/área, cédula, teléfono).
* Editar datos o remover empleados de la lista activa.
* Botón directo **"Ver Historial"** en la tarjeta de cada empleado para consultar al instante todo lo que se le ha entregado.

### 5. 📜 Historial & Auditoría por Persona
* Buscador y filtro por nombre de empleado.
* Trazabilidad completa: qué insumo recibió, cuántas unidades, fecha exacta y hora exacta.
* **Exportación oficial a Excel (.xlsx)** con un solo clic.
* Botón de impresión directa / guardado en PDF.

### 6. 🛡️ Ciberseguridad y Conexión Nube (Supabase)
* Modo dual: **Offline-First local** y sincronización en tiempo real con **Supabase PostgreSQL**.
* Respaldo completo de la base de datos descargable en formato seguro **JSON** y **Excel global**.
* Protección de registros inmutables (Append-Only) y Row-Level Security (RLS).

