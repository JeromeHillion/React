import "../styles/Cart.css"

function Cart() {

    const monstera = {
        name: "Monstera",
        price: 8
    }

    const lierre = {
        name: "Lierre ",
        price: 10
    }

    const fleur = {
        name: "Fleur",
        price: 15
    }

    return (
        <div className="lmj-cart">
            <h2>Panier</h2>
            <ul>
                <li>{monstera.name + " : " + monstera.price + " €"}</li>
                <li>{lierre.name + " : " + lierre.price + " €"}</li>
                <li>{fleur.name + " : " + fleur.price + " €"}</li>
            </ul>
            <p>total : {monstera.price + lierre.price + fleur.price + " €"}</p>
        </div>
    )
}
export default Cart