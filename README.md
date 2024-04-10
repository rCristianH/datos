# DataDelivery Documentation

This is a small library that provides functions to retrieve general products.

## Usage

To use this library, first include it as a JavaScript source:

```html
<script src="https://rcristianh.github.io/datos/getProducts.js"></script>
```

Then, import the necessary functions into your project using:

```javascript
GetProducts
```

Now you can use the functions in your code.

## Available Functions

### `data`

This function returns an array of general products.

**Parameters:** None

**Return:** An array of objects representing general products, each object has the following properties:
- `shortName`: The short name of the product.
- `name`: The full name of the product.
- `price`: The price of the product.

## Example Usage

```javascript
const products = GetProducts.data;
console.log(products);
```

## Webpack Configuration

If you are using Webpack, you can integrate this library into your build flow. Here's an example Webpack configuration:

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

This Webpack configuration file will generate a `getProducts.js` file in the `dist` folder, which you can use in any environment.
