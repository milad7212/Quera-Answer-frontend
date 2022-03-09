// You can use this file to define your functions
import { ORDER_TYPE } from "../types";
export const sortSellData = (data) => {
    return data
        .filter((item) => item.type == ORDER_TYPE.SELL)
        .sort((a, b) => a.price - b.price);
};
export const sortBuyData = (data) => {
    return data
        .filter((item) => item.type == ORDER_TYPE.BUY)
        .sort((a, b) => b.price - a.price);
};