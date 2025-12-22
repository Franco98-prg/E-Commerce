#  Kafëa - E-commerce de Café

Este proyecto es una **Single Page Application (SPA)** de e-commerce desarrollada con **React JS** para la venta de productos de café de especialidad. La aplicación simula un flujo de compra completo, desde la navegación por categorías hasta la generación de una orden de compra.

##  Funcionalidades Principales

- **Catálogo de Productos:** Vista de listado de productos traídos dinámicamente desde **Firebase Firestore**.
- **Filtros por Categoría:** Navegación fluida entre diferentes tipos de productos (Granos, Tea, Merch) utilizando **React Router**.
- **Detalle de Producto:** Vista individual con descripción, precio y control de stock.
- **Carrito de Compras:** Gestión global del estado del carrito mediante **Context API** (agregar, eliminar ítems, vaciar carrito, cálculo de totales).
- **Checkout:** Formulario de finalización de compra que genera una orden en la base de datos y devuelve un ID de seguimiento al usuario.
- **Validación de Stock:** Control para no permitir agregar más unidades de las disponibles.

##  Tecnologías Utilizadas

- **React JS** (Vite)
- **Firebase / Firestore** (Base de datos NoSQL y almacenamiento de órdenes)
- **React Router DOM** (Navegación SPA)
- **CSS Modules** (Estilado de componentes)
- **Context API** (Manejo de estado global)

##  Instalación y Puesta en Marcha

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/Franco98-prg/E-Commerce](https://github.com/Franco98-prg/E-Commerce)
    cd e-commerce-kafea
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configuración de Firebase:**
    Crea un archivo en `src/firebase/config.js` con tus credenciales:
    ```javascript
    import { initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore";

    const firebaseConfig = {
      apiKey: "TU_API_KEY",
      authDomain: "TU_PROJECT_ID.firebaseapp.com",
      projectId: "TU_PROJECT_ID",
      storageBucket: "TU_PROJECT_ID.firebasestorage.app",
      messagingSenderId: "...",
      appId: "..."
    };

    const app = initializeApp(firebaseConfig);
    export const db = getFirestore(app);
    ```

4.  **Ejecutar el proyecto:**
    ```bash
    npm run dev
    ```

##  Estructura del Proyecto

El proyecto sigue una estructura de componentes Contenedores y de Presentación:

- `src/components/containers`: Lógica de negocio y conexión con APIs (`ItemListContainer`, `ItemDetailContainer`, `Cart`, `Checkout`).
- `src/components/common`: Componentes reutilizables (`Button`, `Counter`, `CartWidget`).
- `src/context`: Estado global del carrito (`CartContext`).
- `src/firebase`: Configuración de la base de datos.

---
Proyecto realizado para el curso de React JS Coderhouse.
