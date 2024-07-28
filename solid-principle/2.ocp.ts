/**
 * ------------------------------------------------------------------
 * In this DiscountCalculator we calculate the discount amount
 * for each customer types. To add a new customer type we
 * need to modify the existing if elase statement.
 *
 * This violate the OCP because
 * classes should be opened to extension but closed to modification
 * -------------------------------------------------------------------
 */

class DiscountCalculator {
  calculateDiscount(customerType: string): number {
    if (customerType === 'regular') {
      return 0.1;
    } else if (customerType === 'vip') {
      return 0.2;
    } else {
      return 0;
    }
  }
}

const discountCalculator = new DiscountCalculator();
const regularDiscount = discountCalculator.calculateDiscount('regular');
const vipDiscount = discountCalculator.calculateDiscount('vip');
const newDiscount = discountCalculator.calculateDiscount('new');

/**
 * -----------------------------------------------------
 * Solution for the above violation of the OCP as bellow
 * -----------------------------------------------------
 */
// Base discount class
abstract class Discount {
  abstract calculate(): number;
}

// Regular customer discount class
class RegularCustomerDiscount extends Discount {
  calculate(): number {
    return 0.1;
  }
}

// VIP customer discount class
class VIPCustomerDiscount extends Discount {
  calculate(): number {
    return 0.2;
  }
}

// New customer discount class
class NewCustomerDiscount extends Discount {
  calculate(): number {
    return 0;
  }
}

// Discount calculator class
class DiscountCalculator {
  calculateDiscount(discount: Discount): number {
    return discount.calculate();
  }
}

const discountCalculator = new DiscountCalculator();
const regularDiscount = discountCalculator.calculateDiscount(
  new RegularCustomerDiscount()
);
const vipDiscount = discountCalculator.calculateDiscount(
  new VIPCustomerDiscount()
);
