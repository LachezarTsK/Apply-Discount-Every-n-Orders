
class Cashier {

    private static RANGE_OF_PRODUCT_ID = [1, 200];

    private productID_toPrice: number[];
    private nthCustomerEligibleForDiscount: number;
    private discountedPriceFruction: number;
    private countCustomers: number;

    constructor(n, discount, products, prices) {
        this.nthCustomerEligibleForDiscount = n;
        this.discountedPriceFruction = (100 - discount) / 100;
        this.productID_toPrice = new Array(Cashier.RANGE_OF_PRODUCT_ID[1] + 1);
        this.countCustomers = 0;

        for (let i = 0; i < products.length; ++i) {
            this.productID_toPrice[products[i]] = prices[i];
        }
    }

    getBill(product, amount) {
        ++this.countCustomers;
        let totalPrice = 0;

        for (let i = 0; i < product.length; ++i) {
            const price = this.productID_toPrice[product[i]];
            totalPrice += price * amount[i];
        }

        if (this.countCustomers % this.nthCustomerEligibleForDiscount === 0) {
            totalPrice *= this.discountedPriceFruction;
        }

        return totalPrice;
    }
}
