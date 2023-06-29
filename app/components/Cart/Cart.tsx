import React, { useState } from "react"
import TransparentBackground from "./TransparentBG"
import ListItem from "./ListItem"

type cartprops = {
	isCartOpen: boolean
	setIsCartOpen: any
	cartItems: any
	setCartItems: any
}

const Cart: React.FC<cartprops> = ({
	isCartOpen,
	setIsCartOpen,
	cartItems,
	setCartItems,
}) => {
	function toggleCart() {
		setIsCartOpen(!isCartOpen)
	}

	const calculateTotal = () => {
		let total = 0
		cartItems.forEach((item: any) => {
			total += item.price * item.quantity
		})
		return total
	}

	return (
		<section style={{ display: isCartOpen ? "block" : "none" }}>
			<TransparentBackground toggleCart={toggleCart} />
			<aside className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:-translate-x-0 lg:-translate-y-0  
			2xl:left-[70%] lg:top-1 md:ml-auto bg-white w-[85%] lg:w-[500px] rounded-lg h-[80%] lg:h-[90%] overflow-hidden">
				<div className="cart-content py-10 px-1 w-full h-full ">
					<h1 className="text-center text-2xl font-bold">Cart</h1>
					<h2>Total: € {calculateTotal()}</h2>
					<ul className="cart-items mt-5 grid grid-cols-1 overflow-y-scroll h-[95%] ">
						{cartItems.map((item: any, index: number) => (
							<li key={index}>
								<ListItem
									item={item}
									cartItems={cartItems}
									setCartItems={setCartItems}
								/>
							</li>
						))}
					</ul>
				</div>
			</aside>
		</section>
	)
}

export default Cart
