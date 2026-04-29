# CLAUDE.md — Repo `sitio-web` (surmetric.cl)

> Archivo guía para Claude Code, Claude Cowork y cualquier asistente IA
> que trabaje sobre este repositorio. Renómbralo a `CLAUDE.md` al
> ubicarlo en la raíz del repo.

---

## 1. Identidad del repo

- **Nombre actual del paquete**: `sitio-web` (deuda menor de naming, no urgente)
- **Función**: sitio comercial de Surmetric SpA, captación de prospects, presentación de servicios
- **Producto**: Surmetric (consultoría)
- **Hosting**: Vercel plan Hobby — ver §10, deuda P6
- **Dominio**: surmetric.cl (DNS gestionado por Hostinger)
- **Costo atribuido**: USD 0/mes (Vercel Hobby) + parte proporcional Hostinger

---

## 2. Contexto mínimo que Claude debe respetar

- **Empresa**: Surmetric SpA, consultora chilena de ingeniería en estrategia tecnológica, 2 socios, sur de Chile
- **Audiencia del sitio**: gerentes y dueños de empresas industriales en Chile/LatAm que evalúan transformación digital, BI, automatización, arquitectura técnica
- **Productos a comunicar**:
  - Servicios de consultoría Surmetric (arquitectura de datos, estrategia de producto técnico, optimización con IA)
  - Surdat (SaaS BI por módulos) — actualmente con cliente único Top Reman
- **Posición consciente sobre Vercel Hobby**: el plan Hobby prohíbe uso comercial. surmetric.cl ES uso comercial. Hay 3 opciones documentadas (Pro USD 20/mes, migrar a Render, aceptar riesgo) y la decisión está pendiente — ver §10.

---

## 3. Stack y comandos

### Stack confirmado

- **Framework**: Next.js 16.2.2 (App Router)
- **UI**: React 19, Tailwind CSS 4 (con `@tailwindcss/postcss`)
- **Lenguaje**: TypeScript 5
- **Linter**: ESLint 9 con `eslint-config-next`
- **Tests**: **no hay** (no es prioridad para sitio estático/marketing)

### Comandos

```bash
npm install            # instalar deps
npm run dev            # next dev (hot reload)
npm run build          # next build (producción)
npm start              # next start (servidor producción local)
npm run lint           # eslint
```

---

## 4. Convenciones obligatorias

### Branding → **C3 (crítica para este repo)**

**Todo elemento visual respeta la skill `surmetric-branding`**:

- **Paleta principal**: turquesa-oscuro (consultar tokens exactos en la skill)
- **Tipografía**: Inter
- **Logo**: variantes oficiales (lockup, isotipo, blanco, monocromático). Ver `surmetric_lockup_final_2.png` y archivos derivados
- **Área de protección del logo**: respetar siempre
- **No improvisar paletas, tipografías ni variantes del logo**

Antes de generar cualquier componente visual nuevo (sección, hero, CTA,
footer, formulario), Claude debe leer `/mnt/skills/user/surmetric-branding/SKILL.md`
y aplicar los tokens correspondientes.

### Cumplimiento Ley 21.719 → **S2 (crítica si hay formularios)**

**Cualquier formulario que recolecte datos personales** (nombre, email,
teléfono, empresa, RUT, etc.) debe cumplir desde el día uno con:

- **Deber de informar**: aviso visible explicando qué datos se recolectan, para qué finalidad, dónde se almacenan, por cuánto tiempo, derechos del titular (acceso, rectificación, cancelación, oposición, portabilidad)
- **Consentimiento explícito**: checkbox NO pre-marcado, vinculado a política de privacidad accesible
- **Política de privacidad publicada**: página `/privacidad` con contenido alineado a Ley 21.719 (vigente desde 1 dic 2026)
- **Cifrado en tránsito**: HTTPS obligatorio (Vercel lo da por defecto)
- **Almacenamiento**: si los datos van a un backend o servicio externo (CRM, Notion, email), verificar región compatible y existencia de cláusulas contractuales adecuadas

**Si Claude propone agregar un formulario sin cumplir lo anterior, debe
detenerse y avisar**, citando S2.

### Naming en branding visible

**El producto SaaS se llama Surdat, no Symdat**. Si en algún componente,
texto, metadata, alt-text o SEO copy aparece "Symdat", debe corregirse.
Esto es operacionalización de **P5** y de ADR-0004.

### Performance y SEO

- Next.js 16 + Server Components: aprovechar SSR/SSG por defecto
- Imágenes con `next/image` siempre, nunca `<img>` raw
- Metadata API de Next.js para SEO (no `next/head` legacy)
- Lighthouse Performance objetivo: 90+ en producción
- Core Web Vitals dentro de "good"

### Accesibilidad

- Cumplir WCAG 2.1 nivel AA mínimo
- Contraste verificado para paleta turquesa-oscuro
- Navegación por teclado
- Alt-text descriptivo en imágenes (no decorativas)
- Labels en formularios

### Commits y branching

- **Conventional Commits** obligatorio: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `style:`
- Trunk-based: ramas cortas desde `main`
- Prefijos: `feat/`, `fix/`, `chore/`
- **Nunca push directo a `main`**: siempre PR (Vercel previews automáticos)

### Estilo de código

- ESLint preset `eslint-config-next` — no agregar reglas custom sin discutir
- Tailwind 4: usar utilidades nativas, evitar CSS custom salvo casos justificados
- Componentes en `app/` siguiendo App Router de Next.js 16
- TypeScript estricto: no usar `any` salvo justificación en comentario

---

## 5. Directrices aplicables (referencias al documento maestro v6)

| Código | Nombre corto | Cuándo se activa en este repo |
|---|---|---|
| **P1** | Servicio nuevo se justifica por dolor concreto | Agregar dependencia, integración externa |
| **P3** | Multi-cloud por especialización | Migrar Vercel a Render |
| **P5** | Naming consistente | "Surdat" no "Symdat" en cualquier copy o metadata |
| **P6** | TOS leídos antes de pagar | **Crítica para este repo** — Vercel Hobby es uso comercial |
| **P7** | Inventario antes de diseño | Antes de proponer servicio nuevo |
| **C1** | Crítica antes que validación | Default rechazar features especulativas |
| **C2** | Confirmar antes de inventar | `[confirmar]` antes que inventar |
| **C3** | Branding oficial Surmetric | **Crítica para este repo** — todo visual |
| **S2** | Ley 21.719 como piso | **Crítica si hay formularios** |
| **E1** | CostWatcher antes de escalar IA | Si se integra IA en el sitio (chatbot, etc.) |

**Detalle completo**: ver `Surmetric_Arquitectura_y_Directrices_v6.docx` en Notion.

---

## 6. Excepciones a los gates (cuándo Claude procede sin preguntar)

**Claude procede directamente si la solicitud es:**

- Debug de código existente
- Edición de copy ya publicado (sin agregar funcionalidad)
- Ajuste de espaciado, tipografía dentro de la paleta oficial
- Refactor local de componentes
- Agregar comentarios o documentación
- Mejorar accesibilidad de componente existente

**Claude SÍ aplica gates, aunque parezca menor, si:**

- Agrega o cambia dependencia (`package.json`)
- Agrega un formulario que recolecta datos personales (S2)
- Cambia paleta, tipografía, logo o cualquier token de branding (C3)
- Integra servicio externo (analytics, chatbot, CRM, formularios SaaS)
- Modifica metadata SEO o estructura de URLs
- Cambia configuración de Vercel o variables de entorno productivas

---

## 7. Archivos y paths sensibles que Claude NO toca

**Lectura prohibida:**

- `**/.env`, `**/.env.*` (excepto `.env.example`)
- Cualquier credencial de analytics, CRM, formularios externos

**Modificación prohibida sin pedido explícito y revisión humana:**

- Tokens de branding (paleta, tipografía, logos) — solo se cambian con ADR
- `next.config.*` (afecta build de producción)
- `.github/workflows/**`
- Página `/privacidad` (cambios deben revisarse por implicaciones legales)

---

## 8. Política de PR

- Cada PR genera preview automático en Vercel
- Revisión humana obligatoria antes de merge
- **Nunca auto-merge a `main`**
- Lighthouse y typecheck deben pasar antes de mergear

Cuando se active Fase 3 (ADR-0002):

- `claude-code-action` aplicará las mismas restricciones que en otros repos
- Nunca `--dangerously-skip-permissions`
- Siempre rama + PR

---

## 9. Comportamiento crítico esperado de Claude

- **Default a rechazar**: si una propuesta no se defiende con evidencia, decirlo
- **Sin invención**: `[confirmar]` antes que inventar
- **Citar directrices por código**: P1, C3, S2, etc.
- **Branding no se improvisa**: leer la skill antes de tocar visuales

---

## 10. Deuda técnica y decisiones pendientes

| Deuda / Decisión pendiente | Origen | Estado |
|---|---|---|
| Posición sobre Vercel Hobby vs Pro vs migración a Render | P6, doc v6 §3.2 | Decisión agendada semana 1 plan v6 |
| `name: "sitio-web"` debería ser `surmetric-web` | P5 | Cambio menor, no urgente |
| Política de privacidad alineada Ley 21.719 si hay formularios | S2 | Pendiente cuando se agregue primer formulario con datos |
| Linter sin reglas custom — preset Next.js | Decisión consciente, no deuda | OK |
| Sin tests automatizados | Decisión consciente para sitio marketing | OK |

---

## 11. Referencias

- **Documento maestro**: `Surmetric_Arquitectura_y_Directrices_v6.docx`
- **Plan implementación governance**: `Surmetric_Plan_Implementacion_Governance_12_semanas.docx`
- **ADRs aplicables**:
  - ADR-0001: Stack multi-cloud (justifica Vercel separado de Render)
  - ADR-0004: Rename Symdat → Surdat (cualquier copy del sitio debe respetarlo)
- **Skill de branding**: `/mnt/skills/user/surmetric-branding/SKILL.md` — consultar SIEMPRE antes de generar visual
- **Brochure corporativo**: `Surmetric_Brochure.pdf` — fuente de tono de copy y propuesta de valor
- **Mision y objetivo**: `objetivo_y_mision` (proyecto Claude.ai)

---

## 12. Versión del archivo

- **v1.0** — 27 abril 2026 — versión inicial alineada con documento maestro v6
- Cada cambio se commitea como `docs(claude-md): ...` con referencia al ADR que lo motiva.