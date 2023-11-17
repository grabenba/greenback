# DESARROLLO DE API REST CON DB NO-SQL

Armar la API de Greenback.io, una app para administrar la economía y finanzas personales. La app permite el registro de usuarios, los cuales pueden llevar un registro de sus gastos y sus ingresos semanalmente, almacenar todos los moviemientos en una DB, tener acceso a un historial con fechas y detalles de cada gasto, etc.

-   Un usuario puede:
    -   Registrarse
    -   Login | Logout
    -   Ingresar un nuevo movimiento, el cual puede ser un ingreso o egreso de dinero.
    -   Acceder a la información de su cuenta.

La base de datos consta de 3 entidades principales:

-   USERS: Cada usuario registrado tiene asociado un id único, nombre completo, email y password.
-   MOVEMENTS: Cada movimiento registrado en la app tiene asociado un id unico, un timestamp en formato ISO, transactionInfo: 'income' | 'outcome', amount que es un valor numérico decimal y tags: string[] con un valor de máximo 3 tags (['food', 'supermarket', 'dessert'] por ejemplo).
-   ACCOUNT: La cual tiene asociada el historial de movimientos de un usuario en history: object[], y el balance de la cuenta en balance que es un numero decimal que refleja la plata disponible o que debe.

## EJERCICIO

-   Sistema de autenticacion de usuarios con auth mediante tokens.
-   CRUD a Firestore.
-   CRUD a PostgreSQL con Sequelize.

### PASOS

-   Adjuntar un ERD de la DB al proyecto con drawSQL.
-   Endpoint de ping que devuelve estado del servidor y versión.
-   Hasheo de password al registrar usuario.
-   Utilizar middleware para validar el token. Enviar el token desde el cliente en el header que corresponda.
-   Crear y configurar archivo de configuración y carga de variables de entorno.
-   Desarrollar un buen sistema de filtrado para obtención de datos, que no sean sensitivos (case insensitive)
-

### A TENER EN CUENTA

-   Documentar la API de forma clara.
-   NO COMMITEAR NI PUSHEAR LAS VARIABLES DE ENTORNO: Malísima práctica de seguridad.
-   La documentación no tiene que repetir cosas que están en el enunciado. Tiene que ser clara y concisa, facil y rápida de entender.
-   Debe tener suficientes ejemplos de uso para todos los casos. Cosa de que el usuario pueda probar directamente esos comandos y ver los resultados esperados.
-   Tiene que haber una clara distinción de capas y responsabilidades. Cada capa debe tener la lógica correspondiente.
-   Los códigos de estado deben estar correctamente utilizados, según corresponda a cada situación.
-   Las funciones/métodos debe retornar siempre el mismo tipo de dato, no debería retornar un número o un objeto dependiendo del caso. Para casos de error, lo mejor es arrojar una excepeción/error. Esto es para mantener la coherencia y la intelegibilidad del código.
-   Tratar de agrupar lógica para no repetir código (DRY).
-   Tratar de tener pocas fuentes de la verdad, cosa de cambiar el código en un sólo punto.
-   Deteberse siempre a pensar bien el nombre de las variables/funciones.
-   Cada función debe tener una tarea en específico y cumplirla, siendo coherente con su nombre.
-   KISS: Keep it simple, stupid.

# LINKS

-   [Constantes - Estructura de carpetas](https://medium.com/@z_callan/javascript-project-architecture-constants-deddfde3c8a8)
-   [Constantes - Estructura del archivo](https://dev.to/edwinwong90/tips-to-create-a-constants-file-in-javascript-cnm)
