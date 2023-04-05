const order = {};

// if (
//   order &&
//   order.customer &&
//   order.customer.address &&
//   !order.customer.address.city
// ) {
//   console.log("City is required");
// }

const isDefined = order.customer.address.city
  ? "City is defined"
  : "City is required";

console.log(isDefined);
