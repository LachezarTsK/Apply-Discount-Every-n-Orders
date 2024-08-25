
class Cashier {

    static #RANGE_OF_PRODUCT_ID = [1, 200];

    #productID_toPrice = [];
    #nthCustomerEligibleForDiscount = 0;
    #discountedPriceFraction = 0;
    #countCustomers = 0;

    /**
     * @param {number} n
     * @param {number} discount
     * @param {number[]} products
     * @param {number[]} prices
     */
    constructor(n, discount, products, prices) {
        this.#nthCustomerEligibleForDiscount = n;
        this.#discountedPriceFraction = (100 - discount) / 100;
        this.#productID_toPrice = new Array(Cashier.#RANGE_OF_PRODUCT_ID[1] + 1);

        for (let i = 0; i < products.length; ++i) {
            this.#productID_toPrice[products[i]] = prices[i];
        }
    }

    /** 
     * @param {number[]} product 
     * @param {number[]} amount
     * @return {number}
     */
    getBill(product, amount) {
        ++this.#countCustomers;
        let totalPrice = 0;

        for (let i = 0; i < product.length; ++i) {
            const price = this.#productID_toPrice[product[i]];
            totalPrice += price * amount[i];
        }

        if (this.#countCustomers % this.#nthCustomerEligibleForDiscount === 0) {
            totalPrice *= this.#discountedPriceFraction;
        }

        return totalPrice;
    }
}
