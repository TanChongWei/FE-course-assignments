export default function addToCart(id, token) {
  fetch("https://ecomm-service.herokuapp.com/marketplace/cart/items", {
    method: "POST",
    body: JSON.stringify({
      quantity: 1,
      id,
    }),
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      console.log('added to cart')
      return res.json()
    }
    throw new Error(res.statusText)
  })
}