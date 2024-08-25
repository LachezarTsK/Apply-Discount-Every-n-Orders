
#include <array>
#include <vector>
using namespace std;

/*
// The code will run faster with ios::sync_with_stdio(0).
// However, this should not be used in production code and interactive problems.
// In this particular problem, it is ok to apply ios::sync_with_stdio(0).

// Many of the top-ranked C++ solutions for time on leetcode apply this trick,
// so, for a fairer assessment of the time percentile of my code
// you could outcomment the lambda expression below for a faster run.
const static auto speedup = [] {
    ios::sync_with_stdio(0);
    return nullptr;
}();
*/

class Cashier {

    static constexpr array<int, 2>  RANGE_OF_PRODUCT_ID{ {1, 200} };

    array<int, RANGE_OF_PRODUCT_ID[1] + 1> productID_toPrice{};
    int nthCustomerEligibleForDiscount{};
    double discountedPriceFraction{};
    int countCustomers{};

public:
    Cashier(int n, int discount, const vector<int>& products, const vector<int>& prices) {
        this->nthCustomerEligibleForDiscount = n;
        this->discountedPriceFraction = (double)(100 - discount) / 100;

        for (size_t i = 0; i < products.size(); ++i) {
            productID_toPrice[products[i]] = prices[i];
        }
    }

    double getBill(const vector<int>& product, const vector<int>& amount) {
        ++countCustomers;
        double totalPrice = 0;

        for (size_t i = 0; i < product.size(); ++i) {
            int price = productID_toPrice[product[i]];
            totalPrice += price * amount[i];
        }

        if (countCustomers % nthCustomerEligibleForDiscount == 0) {
            totalPrice *= discountedPriceFraction;
        }

        return totalPrice;
    }
};
