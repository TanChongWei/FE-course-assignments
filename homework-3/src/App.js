import React from 'react'
import LoginForm from './LoginForm'
import getListings from './utils/getListings'
import addToCart from './helpers/addToCart'
import CartItem from './components/CartItem'
import { ListingItem } from './components/ListingItem'
import { useAuthState } from './utils/authState'
import { getCartItems } from './utils/getCartItems'
import './App.css'

export default function App(props) {
  const {listings} = getListings() 
  const authState = useAuthState()
  const cartItems = getCartItems()
  return (
    authState.status === "anon" 
      ? (
        <div>
          <LoginForm onSuccess={(accessToken) => {
            authState.login(accessToken)}}/>
        </div>
      ) 
      : (
        <div>
          <div>
            {listings.map((l) => (
              <ListingItem 
                imageUrl={l.imageUrl}
                title={l.title}
                description={l.description}
                price={l.price}
                availableStock={l.numOfStock}
                onAddToCart={
                  authState.status === 'authenticated'
                    ? () => addToCart(l._id, authState.accessToken)
                    : undefined
                }
              />
            ))}
          </div>
          <div>
            {cartItems.map((item) => (
              <div>
                <h1>Item</h1>
                <CartItem />
              </div>
            ))}
          </div>
        </div>
      ) 
  )
}
