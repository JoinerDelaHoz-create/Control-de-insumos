# ☁️ Guía Rápida: Sincronización en la Nube con JSONBin.io

Para que **lo que registres en tu PC se vea inmediatamente en tu celular (y viceversa)** y **los datos nunca se borren al cerrar la pestaña**, utilizaremos **JSONBin.io**.

---

### Paso 1: Obtener tu Master Key gratuita (1 minuto)

1. Ingresa a [https://jsonbin.io](https://jsonbin.io) y haz clic en **Sign Up / Log In** (puedes entrar directamente con tu cuenta de Google o GitHub).
2. En el menú lateral izquierdo o superior, haz clic en **API Keys**.
3. Verás una clave llamada **`Master Key`** (comienza por algo como `$2a$10$...`).
4. Haz clic en el botón de **Copiar** al lado de tu Master Key.

---

### Paso 2: Conectar la aplicación en tu PC (10 segundos)

1. Abre tu aplicación [`index.html`](file:///c:/Users/Monsalvo/OneDrive%20-%20Unibarranquilla/Documentos/APP%20inventario%20U.Metropolitana/index.html) e inicia sesión (`admin` / `admin1234`).
2. Ve a la pestaña **Nube JSONBin** (o haz clic en el botón amarillo *"Conectar JSONBin"* en el banner superior).
3. En la casilla **JSONBin Master Key**, pega la clave que copiaste en el Paso 1.
4. Haz clic en el botón verde: **"Crear Bin en la Nube con los 43 Insumos"**.
5. ¡Listo! El sistema subirá todo a la nube y te mostrará una ventana con tu **Bin ID** (un código de números y letras).

---

### Paso 3: Conectar la aplicación en tu Teléfono Celular (15 segundos)

1. Abre el enlace de la aplicación en el navegador de tu celular (ejemplo: tu enlace de Vercel o la app instalada).
2. Inicia sesión (`admin` / `admin1234`).
3. Ve a la pestaña **Nube JSONBin**.
4. Pega tu **Master Key** y el **Bin ID** que obtuviste en el Paso 2.
5. Haz clic en **"Conectar Bin Existente"**.

---

### 🚀 ¡Magia lista!
A partir de este momento:
* Si haces una entrega en la computadora, se guarda en la nube y **se actualiza en tu teléfono al instante**.
* Si cierras el navegador o apagas la computadora, **toda la información se mantiene guardada**.
* En la parte superior verás un botón **"Sincronizar"** con un icono giratorio que puedes presionar cuando quieras refrescar al segundo.
* Si subiste tu proyecto a **Vercel**, solo actualiza los archivos `index.html` y `app.js` en tu repositorio de GitHub para que la versión online reciba esta mejora inmediatamente.

