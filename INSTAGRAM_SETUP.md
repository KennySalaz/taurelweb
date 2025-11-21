# Configuración de Instagram Feed con Elfsight

Esta guía te ayudará a configurar el widget de Elfsight Instagram Feed para mostrar tus últimas publicaciones en el footer del sitio web.

## 🚀 Configuración de Elfsight Instagram Feed

### 1. Crear cuenta en Elfsight

1. Ve a [Elfsight](https://apps.elfsight.com/)
2. Haz click en **"Sign Up"** o **"Registrarse"**
3. Puedes registrarte con:
   - Email
   - Cuenta de Google
   - Cuenta de Facebook

### 2. Crear el widget de Instagram Feed

1. Una vez dentro del panel, haz click en **"Create Widget"** o **"Crear Widget"**
2. Busca y selecciona **"Instagram Feed"**
3. Haz click en **"Connect Instagram"** para conectar tu cuenta
4. Autoriza el acceso a tu cuenta de Instagram

### 3. Configurar el widget

Ajusta las siguientes configuraciones para que se vea perfecto en el footer:

#### **Layout (Diseño)**
- **Layout type**: Grid (Cuadrícula)
- **Columns**: 3
- **Rows**: 1
- **Posts to show**: 3

#### **Header (Encabezado)**
- **Show header**: OFF (Desactivado)
- **Show username**: OFF (Desactivado)
- **Show profile picture**: OFF (Desactivado)

#### **Posts (Publicaciones)**
- **Show captions**: OFF (Opcional)
- **Show likes**: OFF (Desactivado)
- **Show comments**: OFF (Desactivado)

#### **Follow Button (Botón de seguir)**
- **Show follow button**: OFF (Desactivado)

#### **Theme (Tema)**
- **Theme**: Custom (Personalizado)
- **Background color**: Transparente o #233c67 (para que combine con el footer)
- **Text color**: #ffffff (blanco)

#### **Spacing (Espaciado)**
- **Gap between posts**: 14px

### 4. Obtener el Widget ID

1. Una vez configurado, haz click en **"Add to website"** o **"Agregar a sitio web"**
2. Verás un código similar a este:

```html
<script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
<div class="elfsight-app-12345678-abcd-1234-efgh-123456789abc"></div>
```

3. Copia el **Widget ID** (la parte después de `elfsight-app-`)
   - En el ejemplo sería: `12345678-abcd-1234-efgh-123456789abc`

### 5. Configurar el Widget ID en el código

Abre el archivo `app/components/Footer.tsx` y busca la línea 290 aproximadamente:

```tsx
<div 
  className="elfsight-app-a7f4f4a7-c5b8-4b9c-a9d4-3e8f7c2d1a5b"
  data-elfsight-app-lazy
/>
```

Reemplaza `a7f4f4a7-c5b8-4b9c-a9d4-3e8f7c2d1a5b` con tu **Widget ID** real.

### 6. Activar/Desactivar el widget

En el archivo `Footer.tsx`, línea 23, encontrarás:

```tsx
const [useElfsight, setUseElfsight] = useState(true);
```

- **`true`**: Usa el widget de Elfsight (dinámico, se actualiza automáticamente)
- **`false`**: Usa las imágenes estáticas de fallback

## 💰 Planes de Elfsight

### Plan Gratuito
- ✅ Widget funcional
- ✅ Actualización automática
- ⚠️ Marca de agua "Powered by Elfsight"
- ⚠️ Límite de visualizaciones mensuales

### Plan Lite ($5/mes)
- ✅ Sin marca de agua
- ✅ Ilimitadas visualizaciones
- ✅ Soporte por email

### Plan Pro ($10/mes)
- ✅ Todo lo del plan Lite
- ✅ Widgets ilimitados
- ✅ Soporte prioritario

## 🔄 Alternativa: Usar imágenes estáticas

Si no quieres usar Elfsight, puedes desactivar el widget:

1. En `Footer.tsx`, cambia:
```tsx
const [useElfsight, setUseElfsight] = useState(false);
```

2. Las imágenes de fallback se encuentran en:
   - `app/assets/redes/1.jpg`
   - `app/assets/redes/2.jpg`
   - `app/assets/redes/3.jpg`

3. Reemplaza estas imágenes con tus últimas publicaciones cuando quieras actualizar

## 🎨 Personalización adicional

Los estilos del widget se encuentran en `app/styles/footer.css` líneas 120-180.

Puedes ajustar:
- Tamaño de las tarjetas (actualmente 110px x 110px)
- Espaciado entre tarjetas (gap: 14px)
- Efectos hover
- Sombras y bordes

## ⚙️ Verificar que funciona

1. Guarda los cambios en `Footer.tsx`
2. Reinicia el servidor de desarrollo si es necesario
3. Abre el sitio web y ve al footer
4. Deberías ver tus 3 últimas publicaciones de Instagram

## 🆘 Solución de problemas

### El widget no se muestra
- Verifica que el Widget ID esté correctamente configurado
- Revisa la consola del navegador para ver errores
- Asegúrate de que `useElfsight` esté en `true`

### Se muestra "Powered by Elfsight"
- Es normal en el plan gratuito
- Actualiza a plan de pago para removerlo

### Las publicaciones no se actualizan
- El widget se actualiza automáticamente cada 24 horas
- Puedes forzar actualización desde el panel de Elfsight

### El widget se ve desalineado
- Revisa los estilos CSS en `footer.css`
- Asegúrate de que las clases CSS no estén siendo sobrescritas

## 📞 Soporte

- **Elfsight Support**: [https://elfsight.com/support/](https://elfsight.com/support/)
- **Documentación**: [https://elfsight.com/instagram-feed-instashow/](https://elfsight.com/instagram-feed-instashow/)

---

## 🔗 Enlaces útiles

- [Panel de Elfsight](https://apps.elfsight.com/panel/applications/)
- [Instagram Feed Widget](https://apps.elfsight.com/panel/applications/instashow/)
- [Guía de personalización](https://help.elfsight.com/article/522-instagram-feed-widget-customization)

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
