const productos = [{ id: 1,  nombre: "Lavandina", precio: 95 },
                  {  id: 2,  nombre: "Jabón Líquido", precio: 100 },
                  {  id: 3,  nombre: "Jabón blanco"  , precio: 40},
                  {  id: 4,  nombre: "Limpiador de pisos" , precio: 150}];

for (const producto of productos) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
}
