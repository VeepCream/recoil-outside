import { promiseSetRecoil, promiseGetRecoil } from "recoil-outside"
import { store } from "./Store"

export const setTest = async() => {
    await promiseSetRecoil(store, "Success")
}

export const getTest = async() => {
    const value = await promiseGetRecoil(store)
    return value
}