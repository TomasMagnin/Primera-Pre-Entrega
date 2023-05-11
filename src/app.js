import express from "express";                                  // Importamos el modulo de servidor en express.
import {productsRouter} from "./routes/products.routes.js";     // Importamos los endpoint Productos.
import {cartsRouter} from "./routes/carts.routes.js";           // Importamos los endpoint Carts.

const app = expres();                                           // Asignamos la funcionaldiad del servidor en la app express.
const port = 8080;                                              // Asignamos el N° de puerto a una varibale. 

// Middlewares
app.use(express.json());                                        // Declaramos que el servidor utiliza formato JSON por defecto.
app.use(express.urlencoded({extended: true}));                  // Declaramos que extendemos lo que recive por URL, para recivir datos complejos y porder mapearlos desde la URL.

app.use(`/api/products`, productsRouter);                       // Le decimos a la app, que use todo lo que esta en la ruta users, lo maneja productsRouter.
app.use(`/api/carts`, cartsRouter);                             // Le decimos a la app, que use todo lo que esta en la ruta users, lo maneja cartsRouter.

app.use(express.static("public"));                              // Usamos una carpeta public, para guardar archivos estaticos, donde puede acceder el usuario. El nombre del directorio no forma parte de la URL.

app.listen(port, ()=> {
    console.log(`App listen on port: ${port}  http://localhost:${port} `);  // Le decimos al servidor en que puerto recivir las peticiones.
});

app.get("*", (res, req) => {                                    // Si no machea con ninguna ruta entra a esta middleware default.
    return res.status(400).json({
        status: "error",                                        // En caso positivo succes.
        msj: "No se encuentra ruta URL",
        data: {},                                               // En caso positivo serian los datos.
    })
});











