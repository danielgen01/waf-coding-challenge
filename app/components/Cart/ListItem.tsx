import React from "react"
import Image from "next/image"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

type Book = {
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

	const handlePlusButtonClick = () => {
		const updatedCartItems = cartItems.map((cartItem: Book) => {
			if (cartItem.id === item.id) {
				return { ...cartItem, quantity: cartItem.quantity + 1 }
			}
			return cartItem
		})
		setCartItems(updatedCartItems)
	}

	const removeItem = () => {
		const updatedCartItems = cartItems.filter((cartItem: Book) => {
			return cartItem.id !== item.id
		})
		setCartItems(updatedCartItems)
	}
	

	return (
		<section className="cart-item grid grid-cols-3 w-full h-[33%]">
			<div className="image-title-price flex flex-col items-center gap-2">
				<Image src={item.image} width={75} height={25} alt="product-img" />
				<span className="font-bold text-[#393280] text-center text-sm">
					{item.title}
				</span>
				<p className="text-[#ED553B] font-bold text-lg xl:text-xl">
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
