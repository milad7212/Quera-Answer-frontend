// You can use this file to define your functions
import { ORDER_TYPE } from "../types";

const addTotal = (arr) => {
    let finalArr = [];
    arr.map((el, index) => {
        let objHelper = {...el };
        if (index == 0) {
            objHelper.total = el.quantity;
            finalArr.push(objHelper);
        } else {
            objHelper.total = el.quantity + finalArr[index - 1].total;
            finalArr.push(objHelper);
        }
    });
    return finalArr;
};

export const sortSellData = (data) => {
    let obj = {};
    let arr = [];
    data
        .filter((item) => item.type == ORDER_TYPE.SELL)
        .sort((a, b) => a.price - b.price)
        .map((el) => {
            if (obj[el.price]) {
                obj[el.price] = obj[el.price] + el.quantity;
            } else {
                obj[el.price] = el.quantity;
            }
        });
    for (let [key, value] of Object.entries(obj)) {
        arr.push({ quantity: value, price: key, type: "sell" });
        console.log(key, value);
    }
    return addTotal(arr);
};
export const sortBuyData = (data) => {
    let obj = {};
    let arr = [];
    data
        .filter((item) => item.type == ORDER_TYPE.BUY)
        .sort((a, b) => b.price - a.price)
        .map((el) => {
            if (obj[el.price]) {
                obj[el.price] = obj[el.price] + el.quantity;
            } else {
                obj[el.price] = el.quantity;
            }
        });
    for (let [key, value] of Object.entries(obj)) {
        arr.unshift({ quantity: value, price: key, type: "buy" });

    }
    return addTotal(arr);
};

export const lastTotal = (data) => {
    return data[data.length - 1].total;
};