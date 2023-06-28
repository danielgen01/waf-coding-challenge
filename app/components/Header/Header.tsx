import React from "react"
import Image from "next/image"
import BagIcon from "@/public/icons/components/Bag"
import { BsHandbag } from "react-icons/bs"
import Link from "next/link"

type Headerprops = {
	isCartOpen: boolean
	setIsCartOpen: any
	cartItems:any
}

const Header: React.FC<Headerprops> = ({ isCartOpen, setIsCartOpen , cartItems}) => {
	function toggleCart() {
		setIsCartOpen(!isCartOpen)
	}

	return (
		<header className="px-5 lg:px-10 flex items-center h-32 justify-between shadow-md">
			<Link className="logo flex items-center gap-2" href={"/"}>
				<Image src={"/images/logoo.png"} alt="logo" width={80} height={25} />
				<div className="text">
					<h1 className=" font-bold text-2xl">Bookoe</h1>
					<p className="font-light">Online Book Store</p>
				</div>
			</Link>

			<div className="cart-icon">
				<button className="flex items-center" onClick={toggleCart}>
					<BsHandbag className="text-3xl" />
					<span className="bg-dark-red rounded-full w-5 h-5 flex items-center justify-center text-white font-bold px-1 py-1 -ml-4 -mt-2">
						{cartItems.length}
					</span>
				</button>
			</div>
		</header>
	)
}

export default Header
