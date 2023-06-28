import React from "react"
import TransparentBackground from "./TransparentBG"
import ListItem from "./ListItem"

const Cart: React.FC = () => {
	return (
		<>
			<TransparentBackground />
			<aside className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  lg:top-1 lg:right-2 bg-white  w-96 rounded-lg h-[90%]">
				<div className="cart-content py-10 px-5 w-full h-full ">
					<h1 className="text-center text-2xl font-bold">Cart</h1>
					<ul className="cart-items mt-5 grid grid-cols-1 overflow-y-scroll h-[95%]">
						<li>
							<ListItem />
						</li>
						<li>
							<ListItem />
						</li>
						<li>
							<ListItem />
						</li>

					</ul>
				</div>
			</aside>
		</>
	)
}

export default Cart
