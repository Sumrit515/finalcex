import axios from "axios"

export const useFetchPendingOrders = async () => {
    try {
     
        const {data} = await axios.get(`/api/fetch-user-orders?orderStatus=notFilled`)
        return data

    } catch(e) {
        console.log('[FETCH_PENDING_ORDER_HOOK]',e)
    }
}

export const useFetchFilledOrders = async () => {
    try {
     
        const {data} = await axios.get(`/api/fetch-user-orders?orderStatus=filled`)
        return data

    } catch(e) {
        console.log('[FETCH_FILLED_ORDER_HOOK]',e)
    }
}

export const useFetchUserTrades = async () => {
    try {
        const {data} = await axios.get(`/api/fetch-user-trades`)
        return data
    } catch(e) {
        console.log("[FETCH_USER_TRADES_HOOK]", e)
    }
}

