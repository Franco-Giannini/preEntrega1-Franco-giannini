import CartWidget from "../../common/cartWidget/cartWidget"


const Navbar = () =>{
    return(
        <div>
            <h2>logo</h2>
            <ul>
                <li>todo</li>
                <li>herramientas</li>
                <li>soldadoras</li>
            </ul>
            <h3>carrito</h3>
            <CartWidget/>
        </div>
    )
}

export default Navbar