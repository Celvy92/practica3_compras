// Arreglo de productos con al menos 5 elementos
const productos = [
    { nombre: "Camiseta", precio: 25, categoria: "Ropa" },
    { nombre: "Zapatos", precio: 50, categoria: "Calzado" },
    { nombre: "Auriculares", precio: 80, categoria: "Electrónica" },
    { nombre: "Cargador", precio: 15, categoria: "Accesorios" },
    { nombre: "Bolso", precio: 120, categoria: "Ropa" },
    { nombre: "Gorra", precio: 45, categoria: "Accesorios" }  // Añadido el sexto producto
];

// Filtrar productos que cuesten menos de 100
const productosBaratos = productos.filter(producto => producto.precio < 100);
console.log("Productos con precio menor a 100:");
console.log(productosBaratos);

// Ordenar productos alfabéticamente por nombre
const productosOrdenados = productosBaratos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("Productos ordenados alfabéticamente:");
console.log(productosOrdenados);

// Crear un nuevo arreglo con solo los nombres de los productos
const nombresProductos = productosOrdenados.map(producto => producto.nombre);
console.log("Nombres de los productos:");
console.log(nombresProductos);

// Mostrar los productos en la página
const listaDeProductos = document.getElementById("productos-lista");

productosOrdenados.forEach(producto => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    listaDeProductos.appendChild(li);
});
