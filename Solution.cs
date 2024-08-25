
using System;

public class Cashier
{
    private static readonly int[] RANGE_OF_PRODUCT_ID = { 1, 200 };

    private readonly int[] productID_toPrice;
    private readonly int nthCustomerEligibleForDiscount;
    private readonly double discountedPriceFraction;

    private int countCustomers;

    public Cashier(int n, int discount, int[] products, int[] prices)
    {
        nthCustomerEligibleForDiscount = n;
        this.discountedPriceFraction = (double)(100 - discount) / 100;
        productID_toPrice = new int[RANGE_OF_PRODUCT_ID[1] + 1];

        for (int i = 0; i < products.Length; ++i)
        {
            productID_toPrice[products[i]] = prices[i];
        }
    }

    public double GetBill(int[] product, int[] amount)
    {
        ++countCustomers;
        double totalPrice = 0;

        for (int i = 0; i < product.Length; ++i)
        {
            int price = productID_toPrice[product[i]];
            totalPrice += price * amount[i];
        }

        if (countCustomers % nthCustomerEligibleForDiscount == 0)
        {
            totalPrice *= discountedPriceFraction;
        }

        return totalPrice;
    }
}
