# Configuración de Instagram API

Esta guía te ayudará a configurar la integración con Instagram para mostrar tus últimas publicaciones en el footer del sitio web.

## Pasos para obtener las credenciales de Instagram

### 1. Crear una aplicación en Meta for Developers

1. Ve a [Meta for Developers](https://developers.facebook.com/)
2. Inicia sesión con tu cuenta de Facebook
3. Haz clic en **"Mis aplicaciones"** en la esquina superior derecha
4. Haz clic en **"Crear aplicación"**
5. Selecciona **"Consumer"** como tipo de aplicación
6. Completa los detalles de tu aplicación:
   - Nombre de la aplicación: "Taurel Web Instagram"
   - Correo de contacto de la aplicación
   - Selecciona tu cuenta de negocio (o crea una)

### 2. Configurar Instagram Basic Display API

1. En el panel de tu aplicación, busca **"Instagram Basic Display"** en el menú lateral
2. Haz clic en **"Configurar"** o **"Set Up"**
3. Completa la configuración básica:
   - **Valid OAuth Redirect URIs**: `https://localhost/` (para desarrollo)
   - **Deauthorize Callback URL**: `https://localhost/`
   - **Data Deletion Request URL**: `https://localhost/`
4. Guarda los cambios

### 3. Agregar un usuario de prueba de Instagram

1. En la sección **"User Token Generator"**, desplázate hasta **"Add or Remove Instagram Testers"**
2. Haz clic en **"Add Instagram Testers"**
3. Ingresa tu nombre de usuario de Instagram
4. Ve a tu cuenta de Instagram:
   - Ve a **Configuración > Apps and Websites > Tester Invites**
   - Acepta la invitación

### 4. Generar un token de acceso

1. De vuelta en la configuración de Instagram Basic Display
2. En la sección **"User Token Generator"**
3. Haz clic en **"Generate Token"** junto a tu cuenta de Instagram
4. Autoriza la aplicación
5. Copia el **Token de acceso** generado
6. Copia también tu **Instagram User ID** (se muestra junto al token)

### 5. Configurar las variables de entorno

1. En la raíz de tu proyecto, crea un archivo `.env` (ya existe `.env.example` como plantilla)
2. Copia el contenido de `.env.example` a `.env`
3. Reemplaza los valores con tus credenciales:

```env
VITE_INSTAGRAM_TOKEN=tu_token_de_acceso_real
VITE_INSTAGRAM_USER_ID=tu_user_id_real
```

### 6. Renovar el token (importante)

⚠️ **Los tokens de acceso expiran después de 60 días**

Para obtener un token de larga duración:

1. Usa el token de corta duración obtenido anteriormente
2. Haz una petición a:
```
https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret={tu-app-secret}&access_token={tu-token-corto}
```
3. Esto te dará un token que dura 60 días
4. Antes de que expire, puedes renovarlo con:
```
https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token={tu-token-actual}
```

## Estructura de archivos

- **`app/services/instagramService.ts`**: Servicio que obtiene las publicaciones de Instagram
- **`app/components/Footer.tsx`**: Componente que muestra las publicaciones en el footer
- **`.env`**: Variables de entorno (no se sube a git)
- **`.env.example`**: Plantilla de variables de entorno

## Funcionamiento

La integración funciona de la siguiente manera:

1. Al cargar el Footer, se ejecuta un `useEffect` que llama a `getInstagramPosts(3)`
2. Este servicio hace una petición a la API de Instagram Graph
3. Obtiene las últimas 3 publicaciones con sus imágenes y enlaces
4. Mientras carga, muestra un skeleton loader animado
5. Una vez cargadas, muestra las miniaturas de las publicaciones
6. Al hacer clic en una miniatura, se abre la publicación en Instagram

## Solución de problemas

### Error: "Instagram credentials not configured"
- Verifica que hayas creado el archivo `.env`
- Asegúrate de que las variables tengan el prefijo `VITE_`
- Reinicia el servidor de desarrollo después de crear/modificar `.env`

### Error: "Error fetching Instagram posts"
- Verifica que tu token no haya expirado
- Asegúrate de que tu cuenta de Instagram sea pública o esté agregada como tester
- Revisa que el User ID sea correcto

### Las publicaciones no se actualizan
- Las publicaciones se cargan cuando se monta el componente
- Recarga la página para ver las últimas publicaciones
- Considera implementar un sistema de cache si lo necesitas

## Recursos adicionales

- [Documentación oficial de Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api)
- [Instagram Graph API Reference](https://developers.facebook.com/docs/instagram-api)
- [Cómo obtener tokens de larga duración](https://developers.facebook.com/docs/instagram-basic-display-api/guides/long-lived-access-tokens)
