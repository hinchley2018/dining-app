export function getTotal(cartItems) {
    let total = 0;
    for(let item of cartItems){
        total += item.price
    }
    return total;
}