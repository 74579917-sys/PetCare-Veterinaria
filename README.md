# PetCare Veterinaria

Descripción
- Página web promocional para una veterinaria moderna.
- Objetivo: Promocionar servicios médicos y campañas de adopción.
- Público: Dueños de mascotas.
- Tono: Alegre, confiable.
- Tecnologías: HTML y CSS (sin JS ni frameworks).

Estructura requerida del repositorio
- /index.html
- /css/styles.css
- /img/  (imagenes)
- /docs/brief.pdf
- /docs/concepto.pdf
- README.md

Ramas obligatorias
- main: rama protegida con la versión final/producción.
- desarrollo: rama principal de trabajo colaborativo.
- estilos: rama para cambios mayores de CSS (opcional para tareas específicas de UI).

Flujo de trabajo sugerido (Git)
1. Clonar:
   git clone https://github.com/<tu-usuario>/<tu-repo>.git
2. Crear branch desde desarrollo (o crear desarrollo si no existe):
   git checkout -b desarrollo
3. Trabajar en una nueva rama por tarea (por ejemplo, feat/servicios):
   git checkout -b feat/servicios
4. Hacer commits descriptivos (ver guía más abajo).
5. Pushear la rama:
   git push origin feat/servicios
6. Crear Pull Request a la rama `desarrollo` en GitHub.
7. Revisar, aprobar y mergear (preferible con squash/merge para commits limpios).
8. Desde `desarrollo` abrir PR hacia `main` cuando esté listo para entregar.

Reglas de commits (obligatorio)
- Usa mensajes en español, en tiempo imperativo y claros:
  - Ejemplos:
    - "Agregar estructura HTML inicial (index.html)"
    - "Agregar estilos base y variables de color"
    - "Agregar tarjetas de mascotas en sección Adopciones"
    - "Subir brief y concepto en /docs"
- Incluye siempre lo que se cambió y dónde (archivo o sección).
- Evitar mensajes vagos como "cambios" o "update".

Ejemplos de mensajes cortos recomendados
- feat(index): agregar seccion Servicios con tres tarjetas
- style(css): variables de color y tipografía
- docs: agregar brief.pdf y concepto.pdf
- fix(img): reemplazar ruta de imagen pet1.jpg

Colaboradores
- En GitHub: Settings → Manage access → Invite collaborators.
- Asignar a cada integrante permisos de escritura.
- Cada colaborador debe crear su propia rama para sus tareas y abrir PRs.

Pull request template (sugerido)
- Título: tipo/area: descripción corta
- Descripción:
  - Qué se hizo
  - Archivos principales modificados
  - Cómo probarlo (local)
  - Issues relacionados (si aplica)

Checklist para entrega
- [ ] index.html presente y validado
- [ ] css/styles.css con estilos principales
- [ ] imágenes en /img
- [ ] docs/brief.pdf y docs/concepto.pdf subidos
- [ ] README.md actualizado
- [ ] ramas: main, desarrollo, estilos (existen)
- [ ] Commits descriptivos en cada paso
- [ ] Al menos 1 PR aprobado y mergeado

Contacto
- Si necesitan ayuda con Git/GitHub me pueden preguntar y les doy comandos concretos.