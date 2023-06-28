"use client"
import Image from "next/image"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Products from "./components/Products/Products"
import Cart from "./components/Cart/Cart"
import { useState } from "react"

export default function App() {
	const [isCartOpen, setIsCartOpen] = useState<boolean>(false)

	return (
		<>
			<Header isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
			<main>
				<Hero />
				<Products />
				<Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
			</main>

			<footer></footer>
		</>
	)
}
