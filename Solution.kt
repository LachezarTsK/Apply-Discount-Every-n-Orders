
class Cashier(n: Int, discount: Int, products: IntArray, prices: IntArray) {

    private companion object {
        val RANGE_OF_PRODUCT_ID = intArrayOf(1, 200)
    }

    private var productID_toPrice = IntArray(RANGE_OF_PRODUCT_ID[1] + 1)
    private var nthCustomerEligibleForDiscount = n
    private var discountedPriceFraction: Double = 0.0
    private var countCustomers = 0

    init {
        this.discountedPriceFraction = (100 - discount.toDouble()) / 100
        for (i in products.indices) {
            productID_toPrice[products[i]] = prices[i]
        }
    }

    fun getBill(product: IntArray, amount: IntArray): Double {
        ++countCustomers
        var totalPrice: Double = 0.0

        for (i in product.indices) {
            val price = productID_toPrice[product[i]]
            totalPrice += price * amount[i]
        }

        if (countCustomers % nthCustomerEligibleForDiscount == 0) {
            totalPrice *= discountedPriceFraction
        }

        return totalPrice
    }
}
