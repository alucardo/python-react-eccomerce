import { CARD_ADD_ITEM, CARD_REMOVE_ITEM } from '../constants/cartConstants'
import axios from "axios";


export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: CARD_ADD_ITEM,
        payload: {
            product: data.id,
            name: data.name,
            price: data.price,
            image: data.image,
            count_in_stock: data.count_in_stock,
            qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CARD_REMOVE_ITEM,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}

