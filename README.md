# Dr. Erick Ponce | Cirujano Ortopeda y Traumatólogo en San Pedro Sula

Sitio web médico oficial del **Dr. Erick Ponce**, Especialista en Ortopedia y Traumatología, Artroscopia y Medicina del Deporte en **San Pedro Sula, Cortés, Honduras**.

Construido con **Astro**, **Tailwind CSS** y **Vanilla JS**, diseñado bajo arquitectura modular de componentes, **Mobile-First**, protección multicapa contra scrapers/bots de spam, **SEO Local** y **GEO (Generative Engine Optimization)**.

---

## Estructura del Proyecto

```text
├── .github/workflows/
│   └── deploy.yml                  # Despliegue automático a GitHub Pages
├── public/
│   ├── CNAME                       # Dominio personalizado: drerickponceortopeda.com
│   ├── llms.txt                    # Contexto estructurado para motores de IA (GEO)
│   ├── robots.txt                  # Reglas de rastreo para Google, Bing, GPTBot, ClaudeBot, PerplexityBot y bloqueo de scrapers de spam
│   ├── sitemap.xml                 # Sitemap XML con imágenes indexables
│   └── assets/img/                 # Imágenes optimizadas en formato WebP
│       ├── dr-erick-ponce-hero.webp
│       ├── dr-erick-ponce-consulta.webp
│       ├── og-dr-erick-ponce.webp
│       └── servicios/
│           ├── fracturas.webp
│           ├── rodilla.webp
│           ├── hombro.webp
│           ├── medicina-deportiva.webp
│           ├── terapias-biologicas.webp
│           └── ortopedia-general.webp
├── src/
│   ├── components/
│   │   ├── TopBar.astro            # Barra superior con contacto rápido protegido
│   │   ├── Navbar.astro            # Menú sticky responsivo + hamburguesa móvil
│   │   ├── Hero.astro              # Hero 2 columnas, H1 SEO, badges académicos y doble CTA
│   │   ├── MetricsBar.astro        # Barra de métricas y credenciales médicas
│   │   ├── AboutSpecialist.astro   # Perfil profesional y formación (UNAH-VS, Guatemala, Argentina)
│   │   ├── Services.astro          # Grid de 6 servicios ortopédicos y traumatológicos
│   │   ├── PatientResources.astro  # Enfoque centrado en el paciente y guías rápidas
│   │   ├── LocationContact.astro   # Clínicas en SPS, formulario anti-spam, mapa e info de contacto
│   │   ├── Faq.astro               # Acordeón interactivo de Preguntas Frecuentes
│   │   ├── Footer.astro            # Pie de página, enlaces y aviso de privacidad médica
│   │   └── WhatsAppFab.astro       # Botón flotante de WhatsApp con animación de pulso
│   ├── data/
│   │   └── doctorData.ts           # Fuente centralizada de datos médicos, servicios y enlaces
│   ├── layouts/
│   │   └── Layout.astro            # Meta tags SEO/OG, JSON-LD Physician + FAQPage y scripts Vanilla JS
│   └── pages/
│       └── index.astro             # Landing Page principal ensamblada por componentes
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## Protección Anti-Scrapers y Anti-Spam

1. **Ofuscación Base64 en el DOM (`data-protected-contact`):** Los enlaces de WhatsApp, teléfono (`+504 3191-3419`) y correo electrónico (`eponce2290@hotmail.com`) no exponen cadenas `mailto:` o `tel:` planas a recolectores de spam estáticos; se hidratan dinámicamente ante eventos de interacción humana (`pointerenter`, `focus`, `touchstart`, `click`).
2. **Fragmentación con caracteres Zero-Width (`&#8203;`):** Evita el escaneo por expresiones regulares simples sobre el HTML estático sin afectar la lectura del paciente.
3. **Honeypot + Validación Temporal en el Formulario:** El formulario rápido de citas incluye un campo trampa invisible (`website_hp`) y verificación de tiempo mínimo de llenado (`> 1.2s`) para bloquear bots automatizados.
4. **Reglas en `robots.txt`:** Bloqueo explícito de recolectores de correo (`EmailCollector`, `EmailSiphon`, `ExtractorPro`, `WebBandit`) manteniendo acceso total a buscadores y agentes de IA legítimos (`Googlebot`, `GPTBot`, `ClaudeBot`, `PerplexityBot`).

---

## Comandos de Desarrollo y Producción

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local
npm run dev

# Generar build estático optimizado en ./dist/
npm run build

# Previsualizar el build de producción
npm run preview
```
