# 📦 Guía de Configuración de la Nube (Supabase) y Ciberseguridad

Esta guía te explica cómo conectar tu aplicación a una base de datos PostgreSQL empresarial en **Supabase** (totalmente gratis) para que puedas acceder y registrar insumos tanto desde tu **computador** como desde tu **teléfono celular** en tiempo real.

---

### Paso 1: Crear cuenta y proyecto en Supabase (2 minutos)
1. Entra a [https://supabase.com](https://supabase.com) y crea una cuenta gratuita (puedes iniciar sesión con GitHub o tu correo).
2. Haz clic en **"New project"** (Nuevo proyecto).
3. Asigna un nombre al proyecto (ejemplo: `inventario-umetro`) y crea una contraseña segura para la base de datos.
4. Selecciona la región más cercana (ejemplo: `South America (São Paulo)` o `East US`).
5. Haz clic en **"Create new project"**. Espera 1 minuto mientras se inicializa la base de datos.

---

### Paso 2: Ejecutar el Script de Seguridad y Datos Iniciales
1. En el panel izquierdo de tu proyecto Supabase, ve a **SQL Editor** (icono con forma de terminal `>_`).
2. Haz clic en **"New query"**.
3. Abre el archivo [`supabase_setup.sql`](file:///c:/Users/Monsalvo/OneDrive%20-%20Unibarranquilla/Documentos/APP%20inventario%20U.Metropolitana/supabase_setup.sql) que creamos en tu proyecto, copia todo su contenido y pégalo en el editor de Supabase.
4. Haz clic en el botón verde **"Run"** (o presiona `Ctrl + Enter`).
5. ¡Listo! Verás el mensaje `Success. No rows returned`. Con esto:
   - Se crearon las tablas de `insumos`, `empleados` y `movimientos`.
   - Se activó **Row Level Security (RLS)** y las reglas de auditoría inmutable (nadie puede alterar o borrar entregas pasadas).
   - Se cargaron automáticamente los **43 insumos reales** de tu inventario.

---

### Paso 3: Conectar la Aplicación Web
1. En Supabase, ve a **Project Settings** (icono de engranaje abajo a la izquierda) -> **API**.
2. Copia los siguientes dos datos:
   - **Project URL** (ejemplo: `https://abcdefghijkl.supabase.co`)
   - **Project API Keys** -> Copia la clave llamada **`anon` `public`**.
3. Abre tu aplicación (`index.html`) en tu navegador.
4. Ve a la pestaña **Ciberseguridad & Nube**.
5. Pega tu **URL** y tu **Anon Key** en las casillas correspondientes y haz clic en **"Conectar y Sincronizar Nube"**.
6. ¡Listo! El indicador del encabezado cambiará a **"Nube Supabase Conectada"** con un punto verde.

---

### 📱 Cómo instalarla como App en tu Celular (PWA)
1. Sube tu carpeta a cualquier servicio de hosting gratuito como **Netlify**, **Vercel** o **GitHub Pages** (o ábrela mediante un enlace en tu red local).
2. Abre el enlace en el navegador de tu celular (Google Chrome en Android o Safari en iPhone).
3. Toca los tres puntos del menú del navegador y selecciona **"Agregar a la pantalla principal"** o **"Instalar aplicación"**.
4. Se creará un icono con el logo en tu pantalla de inicio y se abrirá a pantalla completa como una aplicación nativa.

