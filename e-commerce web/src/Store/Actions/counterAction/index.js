const addCart =(product)=>{
    return{
        type:"AAdITEM",
        payload:product
    }
}
const deleteCart =(product)=>{
    return{
        type:"DELETEITEM",
        payload:product
    }
}

export {addCart,deleteCart}