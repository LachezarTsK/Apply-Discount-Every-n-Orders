
class Cashier {

    private static RANGE_OF_PRODUCT_ID = [1, 200];

    private productID_toPrice: number[];
    private nthCustomerEligibleForDiscount: number;
    private discountedPriceFraction: number;
    private countCustomers: number;

    constructor(n: number, discount: number, products: number[], prices: number[]) {
        this.nthCustomerEligibleForDiscount = n;
        this.discountedPriceFraction = (100 - discount) / 100;
        this.productID_toPrice = new Array(Cashier.RANGE_OF_PRODUCT_ID[1] + 1);
        this.countCustomers = 0;

        for (let i = 0; i < products.length; ++i) {
            this.productID_toPrice[products[i]] = prices[i];
        }
    }

    getBill(product: number[], amount: number[]): number {
        ++this.countCustomers;
        let totalPrice = 0;

        for (let i = 0; i < product.length; ++i) {
            const price = this.productID_toPrice[product[i]];
            totalPrice += price * amount[i];
        }

        if (this.countCustomers % this.nthCustomerEligibleForDiscount === 0) {
            totalPrice *= this.discountedPriceFraction;
        }

        return totalPrice;
    }
}
