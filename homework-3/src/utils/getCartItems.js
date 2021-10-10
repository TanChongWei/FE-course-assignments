import React from 'react'

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

const getData = (token, signal) => {
  console.log('getdata-', token)
  return fetch(`https://ecomm-service.herokuapp.com/marketplace/cart/items`, {method:"GET", headers: {
    accept: "application/json",
    "content-Type":"application/json",
    Authorization: `Bearer ${window.localStorage.getItem('token')}`
  }, signal})
    .then((res) => res.json())}

export function getCartItems() {
  const [cartItems, setCartItems] = React.useState([])

  React.useEffect(() => {
    const controller = new AbortController()
    getData(controller.signal).then((res) => {
      setCartItems(res)
    })
    return () => {
      controller.abort()
    }
  }, [cartItems.length])

  console.log("cart-", cartItems)
  return cartItems
}