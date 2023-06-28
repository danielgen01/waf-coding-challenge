"use client"
import Image from "next/image"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Products from "./components/Products/Products"
import Cart from "./components/Cart/Cart"
import { useState } from "react"

export default function App() {
	const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
	const [cartItems, setCartItems] = useState([])

	return (
		<>
			<Header isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} cartItems={cartItems} />
			<main>
				<Hero />
				<Products cartItems={cartItems} setCartItems={setCartItems}/>
				<Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} cartItems={cartItems} />
			</main>

			<footer></footer>
		</>
	)
}
