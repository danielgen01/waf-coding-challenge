import React from "react"
import Image from "next/image"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

export type Book = {
	title: string
	price: number
	id: any
	image: string
	quantity: number
}

type ListItemProps = {
	item: Book
	cartItems: []
	setCartItems: any
}

const ListItem: React.FC<ListItemProps> = ({
	item,
	cartItems,
	setCartItems,
}) => {
	// remove 1 quanty from the clicked cart item
	const handleMinusButtonClick = () => {
		if (item.quantity > 1) {
			const updatedCartItems = cartItems.map((cartItem: Book) => {
				if (cartItem.id === item.id) {
					return { ...cartItem, quantity: cartItem.quantity - 1 }
				}
				return cartItem
			})
			setCartItems(updatedCartItems)
		}
	}

	// add 1 quanty to the clicked cart item
	const handlePlusButtonClick = () => {
		const updatedCartItems = cartItems.map((cartItem: Book) => {
			if (cartItem.id === item.id) {
				return { ...cartItem, quantity: cartItem.quantity + 1 }
			}
			return cartItem
		})
		setCartItems(updatedCartItems)
	}

	// Delete the clicked cart item from the cart array
	const removeItem = () => {
		const updatedCartItems = cartItems.filter((cartItem: Book) => {
			return cartItem.id !== item.id
		})
		setCartItems(updatedCartItems)
	}

	return (
		<section className="cart-item grid grid-cols-3 w-[95%] h-[33%] gap-2 py-5">
			<div className="image-title-price flex flex-col items-center gap-2 w-full">
				<Image src={item.image} width={75} height={25} alt="product-img" />
				<span className="font-bold text-[#393280] text-center text-[10px]">
					{item.title}
				</span>
				<p className="text-[#ED553B] font-bold text-md xl:text-xl">
					€ {item.price * item.quantity}
				</p>
			</div>

			<div className="quantity flex items-center justify-center ">
				<button>
					<AiOutlineMinus
						className="cursor-pointer"
						onClick={handleMinusButtonClick}
					/>
				</button>
				<input
					type="number"
					value={item.quantity}
					readOnly={true}
					className="w-10  rounded-md text-center outline-light-blue cursor-default"
				/>
				<button>
					<AiOutlinePlus
						className="cursor-pointer"
						onClick={handlePlusButtonClick}
					/>
				</button>
			</div>

			<div className="remove flex items-center justify-center">
				<button
					className="bg-dark-red text-white font-sembibold py-2 px-4 rounded-full hover:opacity-75 duration-150 outline-none"
					onClick={removeItem}
				>
					Remove
				</button>
			</div>
		</section>
	)
}

export default ListItem
