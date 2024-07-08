# Ecommerce Backend

Esta es una API para un ecommerce que proporciona un CRUD completo para un catálogo de productos y la gestión de pedidos. Está construida con Express.js y MongoDB, y escrita en TypeScript.

## Requisitos

- Node.js
- npm
- Docker
- Docker Compose

## Instalación

1. Clona el repositorio

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Instala las dependencias

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

   ```plaintext
   MONGODB_URI=mongodb://localhost:27017/ecommerce
   MONGO_USER=tu_usuario
   MONGO_PASS=tu_contraseña
   ```

4. Configura y ejecuta la base de datos MongoDB usando Docker Compose

   ```bash
   docker-compose up -d
   ```

5. Ejecuta el servidor en modo desarrollo
   ```bash
   npm run dev
   ```

## Estructura del Proyecto

ecommerce - backend
├── src
│ ├── models
│ │ ├── Product.ts
│ │ └── Order.ts
│ ├── routes
│ │ ├── productRoutes.ts
│ │ └── orderRoutes.ts
│ ├── server.ts
├── .env  
|── docker-compose.yml
├── package.json
├── tsconfig.json
└── .gitignore

## Endpoints

### Productos

#### Crear un producto

- **URL**: `/api/products`
- **Método**: `POST`
- **Body**:
  ```json
  {
    "name": "Nombre del producto",
    "description": "Descripción del producto",
    "price": 100,
    "category": "Categoría del producto",
    "stock": 10
  }
  ```

## Ejemplo

#Pruebe creando con el Endpoint que se encuentra arriba que es el de crear un producto, para que tenga una buena experiencia

```json
{
  "products": [
    {
      "name": "Jeans Slim Fit",
      "description": "Estos jeans ajustados de mezclilla azul oscuro son perfectos para quienes buscan un look moderno y ajustado. Fabricados con materiales de alta calidad, ofrecen comodidad y estilo al mismo tiempo.",
      "price": 50,
      "category": "Ropa",
      "stock": 60,
      "image": "https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "name": "Sudadera con Capucha",
      "description": "Esta sudadera con capucha es una prenda imprescindible en cualquier guardarropa. Fabricada con algodón suave y disponible en color gris, es ideal para mantenerse cómodo y cálido en los días frescos.",
      "price": 45,
      "category": "Ropa",
      "stock": 75,
      "image": "https://images.pexels.com/photos/6186448/pexels-photo-6186448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "name": "Camiseta Básica Blanca",
      "description": "Esta camiseta básica está hecha de algodón 100%, lo que la hace suave y cómoda. Es ideal para el uso diario y combina perfectamente con cualquier estilo. Disponible en color blanco puro.",
      "price": 20,
      "category": "Ropa",
      "stock": 100,
      "image": "https://images.pexels.com/photos/22441295/pexels-photo-22441295/free-photo-of-colgando-rama-percha-fotografia-de-moda.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]
}
```

#### Obtener todos los productos

- **URL**: `/api/products`
- **Método**: `GET`

#### Obtener un producto por ID

- **URL**: `/api/products/:id`
- **Método**: `GET`

#### Actualizar un producto por ID

- **URL**: `/api/products/:id`
- **Método**: `PATCH`
- **Body**:
  ```json
  {
    "name": "Nuevo nombre del producto",
    "price": 150
  }
  ```

#### Eliminar un producto por ID

- **URL**: `/api/products/:id`
- **Método**: `DELETE`

### Pedidos

#### Crear un pedido

- **URL**: `/api/orders`
- **Método**: `POST`
- **Body**:
  ```json
  {
    "products": [
      {
        "productId": "ID_DEL_PRODUCTO",
        "quantity": 2
      }
    ],
    "totalAmount": 200,
    "status": "Pending"
  }
  ```

#### Obtener todos los pedidos

- **URL**: `/api/orders`
- **Método**: `GET`

#### Obtener un pedido por ID

- **URL**: `/api/orders/:id`
- **Método**: `GET`

#### Actualizar un pedido por ID

- **URL**: `/api/orders/:id`
- **Método**: `PATCH`
- **Body**:
  ```json
  {
    "status": "Completed"
  }
  ```

#### Eliminar un pedido por ID

- **URL**: `/api/orders/:id`
- **Método**: `DELETE`

## Scripts de NPM

- `npm run build`: Compila el proyecto TypeScript.
- `npm run start`: Inicia el servidor usando el archivo compilado.
- `npm run dev`: Inicia el servidor en modo desarrollo con reinicio automático.

## Contribuir

Si deseas contribuir a este proyecto, por favor realiza un fork del repositorio y crea una rama para tu funcionalidad o corrección de errores. Luego, envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Mira el archivo [LICENSE](LICENSE) para más detalles.
