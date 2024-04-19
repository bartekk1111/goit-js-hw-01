function getShippingMessage(country, price, deliveryFree) {
    return `Shipping to ${country} will cost ${price + deliveryFree} credits`;
}
