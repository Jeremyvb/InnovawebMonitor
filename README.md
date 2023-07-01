# InnovawebMonitor
* Avance proyecto para a asignatura Ingeniería de Software (primer semestre 2023) *
* Integrantes: Adolfo Lazcano, Jeremy Villalobos y José Parada *
* Fecha de entrega: 30/06/2023 *

Introducción al proyecto

En el entorno empresarial actual, la accesibilidad y la eficiencia en la gestión de la información son factores clave de éxito para cualquier empresa. Esto se complica un poco más cuando 
cierta información es rescatada de los servicios que presta Amazon a las empresas, donde la adquisición y administración de datos relevantes plantea desafíos importantes de implementación. 
Como respuesta a esta necesidad, surge la idea de un proyecto innovador cuya tarea principal es resolver de manera efectiva estos problemas de lentitud en el acceso a los datos para la toma 
de decisiones y la gestión de estos mismos, y también optimizar la experiencia de los usuarios y clientes involucrados dentro del proyecto.  

¿Cuales son las principales funcionalidades del proyecto a construir?

- Manejar una satisfactoria gestión de usuarios.
- Manejar dentro de la aplicación una corecta sesión de los usuarios.
- Poder traer la información de los proyectos desde los servicios de amazon.
- Mostrar esta información en un dashboard.
- Poder manipular cierta información de los proyectos desde la aplicación.
- Implementar rangos a los usuarios.

Datos importantes a saber del proyecto

- El proyecto cuenta con una conexión a base de datos mysql.
- Todas las dependencias necesarias para el desarrollo fueron descargas en un inicio.
- Todo el código desarrollado de encuentra disponible en el repositio actual.

Estructura del proyecto

- node_modules (carpeta)
    - *todos los módulos*
- src (carpeta)
    - controllers (carpeta)
        - LoginController.js
    - img (carpeta)
        - template.jpg
    - routes (carpeta)
        - Llogin.js
    - views (carpeta)
        - layouts (carpeta)
            - main.hbs
        - login (carpeta)
            - index.hbs
            - register.hbs
        - home.hbs
    - app.js
package-lock.json
packaje.json

Pruebas del proyecto

- Pruebas módulo de registro de usuario.
- Pruebas módulo inicio de sesión.
- Pruebas Correcto manejo de sesión de usuarios.
- Las pruebas hechas en el proyecto se pueden visualizar en el vídeo adjuntado en la entrega vía aula pucv.
