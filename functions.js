export const test = () => {
  console.log(2 + 5, "sumar");
};
export const data = {
  arepas: [
    { shortName: "Delgada", name: "Delgada", price: 1700, catalog: True, extras: [ 1001, 1002, 1003 ] },
    { shortName: "Delgada Q", name: "Delgada Queso", price: 4800 },
    { shortName: "Gratinada", name: "Gratinada", price: 6700 },
    { shortName: "Gorda", name: "Gorda", price: 1400, catalog: True, extras: [ 2001, 2002 ] },
    { shortName: "Gorda Q", name: "Gorda Queso", price: 3700 },
    { shortName: "Gorda L", name: "Gorda Loncha", price: 3200 },
    { shortName: "Sin sal", name: "Sin sal", price: 600, catalog: True, extras: [ 2001, 2002, 3001 ] },
    { shortName: "Sin sal Q", name: "Sin sal Queso", price: 3000 },
    { shortName: "Sin Sal L", name: "Sin Sal Loncha", price: 2600 },
    { shortName: "Loncha", name: "Queso Loncha", price: 1800 },
    { shortName: "Guiso", name: "Guiso", price: 900 },
  ],
  paquetes: [
    { shortName: "Delgada", name: "Paquete Delgada", price: 17000, catalog: True },
    { shortName: "Gorda", name: "Paquete Gorda", price: 14000, catalog: True },
    { shortName: "Sin sal", name: "Paquete Sin sal", price: 6000, catalog: True },
    { shortName: "Sin sal", name: "Paquete SS Llevar", price: 6500, catalog: True },
  ],
  bebidas: [
    { shortName: "Cafe", name: "Cafe", price: 1400, catalog: True },
    { shortName: "Cafe M", name: "Cafe M", price: 800 },
    { shortName: "Cafe Leche", name: "Cafe Leche", price: 1800, catalog: True },
    { shortName: "Cafe Leche", name: "Cafe Leche", price: 900 },
    { shortName: "Cafe Especial", name: "Cafe Especial", price: 1600, catalog: True },
    { shortName: "Cafe E Leche", name: "Cafe E Leche", price: 2000 },
    { shortName: "Chocolate", name: "Chocolate", price: 2700, catalog: True },
    { shortName: "Vaso", name: "Vaso", price: 300 },		
  ],
  huevos: [
    { shortName: "Huevos", name: "Huevos", price: 2700, catalog: True, extras: [ 4001 ] },
    { shortName: "Huevo", name: "Huevo", price: 2000 },
    { shortName: "Pericos", name: "Pericos", price: 4500, catalog: True, extras: [ 4001 ] },
    { shortName: "Huevo", name: "Huevo Adicional", price: 700 },
    { shortName: "Domicilio", name: "Domicilio", price: 1000 },
    
    {
      input: "input",
      inputType: "number",
      inputPlaceholder: "Otro Precio",
      inputClass: "number-input",
    },
    {
      input: "input",
      inputType: "text",
      inputPlaceholder: "Nombre",
      inputClass: "name-input",
    },
    {
      input: "input",
      inputType: "text",
      inputPlaceholder: "0.0.0.0:0",
      inputClass: "ip-input",
    },
  ],
};
export const additional = {
  extras: [
    {id: 1001, nameAddiction: "Queso Rayado", price: 3100 },
    {id: 1002, nameAddiction: "Gratinada", price: 5000 },
    {id: 1003, nameAddiction: "Pericos", price: 4500 },
    {id: 2001, nameAddiction: "Queso Rayado", price: 3700 },
    {id: 2002, nameAddiction: "Queso Loncha", price: 1800 },
    {id: 3001, nameAddiction: "Guiso", price: 900 },
    {id: 4001, nameAddiction: "1 Huevo", price: 700 },
  ],
};
