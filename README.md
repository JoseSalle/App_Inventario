# Inventario Frontend

Este proyecto es la interfaz de usuario para el sistema de gestión de inventario. Está construido con [Angular](https://angular.io/) versión 20.3.0 y utiliza [Bootstrap](https://getbootstrap.com/) para el diseño.

## Características

-   **Gestión de Categorías**: Crear, listar, editar y eliminar categorías de productos.
-   **Gestión de Productos**: Administrar el inventario de productos con sus precios y stock.
-   **Gestión de Proveedores**: Mantener un registro de proveedores con su información de contacto.
-   **Diseño Responsivo**: Interfaz adaptable a diferentes dispositivos gracias a Bootstrap.

## Requisitos Previos

Asegúrate de tener instalado:

-   [Node.js](https://nodejs.org/) (versión compatible con Angular 20)
-   [Angular CLI](https://github.com/angular/angular-cli) (`npm install -g @angular/cli`)
-   El backend de la aplicación ejecutándose en `http://localhost:3000`.

## Instalación

1.  Clona el repositorio o navega a la carpeta del proyecto:
    ```bash
    cd FrontEnd/Inventario
    ```

2.  Instala las dependencias:
    ```bash
    npm install
    ```

## Ejecución

Para iniciar el servidor de desarrollo:

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias algún archivo fuente.

## Estructura del Proyecto

-   `src/app/pages`: Contiene los componentes principales para cada módulo (Categorías, Productos, Proveedores).
-   `src/app/services`: Servicios para la comunicación con la API del backend.
-   `src/app/components`: Componentes reutilizables de la interfaz.

## Scripts Disponibles

-   `npm start`: Inicia el servidor de desarrollo en el puerto 4200.
-   `npm test`: Ejecuta las pruebas unitarias con Karma.
