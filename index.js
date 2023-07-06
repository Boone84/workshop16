const calculateRefillTotal = (pricePerRefill, refills) => {
  const refillTotal = pricePerRefill * refills;
  return refillTotal;
};

const applySubscriptionDiscount = (refillTotal, subscription) => {
  let discountedTotal;
  if (subscription) {
    const discountAmount = refillTotal * 0.25;
    discountedTotal = refillTotal - discountAmount;
  } else {
    discountedTotal = refillTotal;
  }
  return discountedTotal;
};

const applyCouponDiscount = (discountedTotal, coupon) => {
  let finalAmount;
  if (coupon) {
    finalAmount = discountedTotal - 10;
  } else {
    finalAmount = discountedTotal;
  }
  return finalAmount;
};

// Test with the given customer objects
const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

const timmyRefillTotal = calculateRefillTotal(timmy.pricePerRefill, timmy.refills);
const timmyDiscountedTotal = applySubscriptionDiscount(timmyRefillTotal, timmy.subscription);
const timmyFinalAmount = applyCouponDiscount(timmyDiscountedTotal, timmy.coupon);
console.log(`Your grand total is $${timmyFinalAmount}.`);

const sarahRefillTotal = calculateRefillTotal(sarah.pricePerRefill, sarah.refills);
const sarahDiscountedTotal = applySubscriptionDiscount(sarahRefillTotal, sarah.subscription);
const sarahFinalAmount = applyCouponDiscount(sarahDiscountedTotal, sarah.coupon);
console.log(`Your grand total is $${sarahFinalAmount}.`);

const rockyRefillTotal = calculateRefillTotal(rocky.pricePerRefill, rocky.refills);
const rockyDiscountedTotal = applySubscriptionDiscount(rockyRefillTotal, rocky.subscription);
const rockyFinalAmount = applyCouponDiscount(rockyDiscountedTotal, rocky.coupon);
console.log(`Your grand total is $${rockyFinalAmount}.`);
