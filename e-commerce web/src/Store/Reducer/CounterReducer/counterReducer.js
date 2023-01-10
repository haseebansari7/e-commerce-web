const cart = [];

const counterReducer = (state = cart, action) => {
    const product = action.payload;

    // switch (action.type) {
    //     case "ADDITEM":
    if (action.type == "ADDITEM") {
        const exist = state.find((x) => x.id === product.id);
        if (exist) {
            return state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
        } else {
            return [...state, { ...product, qty: 1 }]
        }
    }
    // break;
    // case "DELETEITEM":
    else if (action.type == "DELETEITEM") {
        const exist1 = state.find((x) => x.id === product.id);
        if (exist1.qty === 1) {
            return state.filter((x) => x.id !== exist1.id);
        }
        else {
            return state.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x)
        }
    }
    else{
        return state;
    }
    // break;

    // default:

}
// }
export default counterReducer;