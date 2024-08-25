
package main

import "fmt"

var RANGE_OF_PRODUCT_ID [2]int = [2]int{1, 200}

type Cashier struct {
    productID_toPrice              []int
    nthCustomerEligibleForDiscount int
    discountedPriceFraction        float64
    countCustomers                 int
}

func Constructor(n int, discount int, products []int, prices []int) Cashier {
    cashier := Cashier{
        productID_toPrice:              make([]int, RANGE_OF_PRODUCT_ID[1]+1),
        nthCustomerEligibleForDiscount: n,
        discountedPriceFraction:        (100.0 - float64(discount)) / 100.0,
        countCustomers:                 0,
    }

    for i := range products {
        cashier.productID_toPrice[products[i]] = prices[i]
    }
    return cashier
}

func (this *Cashier) GetBill(product []int, amount []int) float64 {
    this.countCustomers++
    var totalPrice float64 = 0

    for i := range product {
        price := this.productID_toPrice[product[i]]
        totalPrice += float64(price * amount[i])
    }

    if this.countCustomers%this.nthCustomerEligibleForDiscount == 0 {
        totalPrice *= this.discountedPriceFraction
    }

    return totalPrice
}
