# Documentacion DataDelivery

Esta es una pequeña librería que proporciona funciones para obtener productos generales.

## Uso

Para utilizar esta librería, primero debes traerla como un src de js:

```html
<script src="https://rcristianh.github.io/datos/getProducts.js"></script>
```

Luego, importa las funciones necesarias en tu proyecto, para ello simplemente usa:

```javascript
GetProducts
```

Ahora puedes utilizar las funciones en tu código.

## Funciones Disponibles

### `data`

Esta función devuelve un array de productos generales.

**Parámetros:** Ninguno

**Retorno:** Un array de objetos que representan productos generales, cada objeto tiene las siguientes propiedades:
- `shortName`: El nombre corto del producto.
- `name`: El nombre completo del producto.
- `price`: El precio del producto.

## Ejemplo de Uso

```javascript
const productos = GetProducts.data;
console.log(productos);
```

## Configuración de Webpack

Si estás utilizando Webpack, puedes integrar esta librería en tu flujo de construcción. Aquí hay un ejemplo de configuración de Webpack:

```javascript
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'getProducts.js',
    library: 'GetProducts',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};
```

Este archivo de configuración de Webpack generará un archivo `getProducts.js` en la carpeta `dist`, que podrás usar en cualquier entorno.

---

Por favor, asegúrate de ajustar la información según corresponda y de agregar cualquier detalle adicional que consideres necesario. ¡Avísame si necesitas más ayuda!
