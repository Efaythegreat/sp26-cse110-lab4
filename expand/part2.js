
function discountPrices(prices, discount){
    const discounted = []
    // const finalPrice = 0
    const length = prices.length

    for (let i = 0; i < length; i++){
        const discountedPrice = prices[i] * (1 - discount);
        // finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(discountedPrice);
    }

    // console.log(i);
    // console.log(discountedPrice);
    // console.log(finalPrice);

    // console.log(length);

    return discounted;
}

// console.log(discountPrices([100, 200, 300], 0.5));
// discountPrices([100, 200, 300], 0.5)

function modifyArray(array, callback){
    const newArr = []
    for (let i = 0; i < array.length; i++){
        newArr.push(callback(array[i]));
    }
    return newArr;
}
function doSomething(num) {
    return num * 2;
}

modifyArray([1,2,3], doSomething);