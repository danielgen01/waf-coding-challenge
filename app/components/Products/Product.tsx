import { ProductProps } from "./Products"
import React from "react"
import Image from "next/image"
import { BsHandbag } from "react-icons/bs"

export const Product: React.FC<ProductProps> = ({
	title,
	image,
	author,
	price,
	id,
	cartItems,
	setCartItems,
}) => {
	function addToCart() {
		// check if the product has already been added
		const existingItem = cartItems.find((cartItem: any) => cartItem.id === id)

		if (existingItem) {
			// if item already exists quantity +=1
			const updatedCartItems = cartItems.map((cartItem: any) => {
				if (cartItem.id === id) {
					return { ...cartItem, quantity: cartItem.quantity + 1 }
				}
				return cartItem
			})
			setCartItems(updatedCartItems)
		} else {
			// if the item is not already in the array create new item
			const newItem = { id, title, author, price, image, quantity: 1 }
			setCartItems([...cartItems, newItem])
		}
	}

	return (
		<div className="h-96 rounded-md product-entire-container">
			<div className="product-content justify-center lg:py-10 shadow-lg h-72 flex flex-col gap-5 items-center">
				<Image
					src={image}
					alt="img"
					width={120}
					height={100}
					className="hover:scale-105 duration-200"
				/>
				<button
					className="flex items-center gap-2 bg-dark-red text-white font-normal rounded-md px-2 hover:opacity-80 duration-200 md:text-md xl:text-2xl py-1"
					onClick={addToCart}
				>
					Add to bag <BsHandbag />
				</button>
			</div>
			{/* The book description like title, author etc... */}
			<div className="book-description flex flex-col items-center mt-4 gap-2">
				<span className="font-bold text-[#393280] text-md text-center xl:text-xl">
					{title}
				</span>
				<p className="text-sm xl:text-lg">{author}</p>
				<span className="text-[#ED553B] font-bold text-xl xl:text-2xl">
					€ {price}
				</span>
			</div>
		</div>
	)
}
