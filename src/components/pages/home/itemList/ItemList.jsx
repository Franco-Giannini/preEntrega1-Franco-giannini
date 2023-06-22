  
const ItemList = ( {saludo, cambiarSaludo, cambiarNombre} ) => {

    let nombreUSuario = "carmen"

    return(
        <div>
            <h2>{saludo}</h2>
            <button onClick={() => cambiarSaludo("bien")}>Cambiar saludo</button>
            <button onClick={() => cambiarNombre(nombreUSuario)}>Cambiar nombre</button>
        </div>
    )
}

export default ItemList 