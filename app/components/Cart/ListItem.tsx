import React from "react"
import Image from "next/image"

const ListItem: React.FC = () => {
	return (
		<section className="cart-item grid grid-cols-3 w-full h-20 w-full">
			<div className="image-title-price flex flex-col items-center gap-2">
				<Image
					src={"/images/feuerklech.jpg"}
					width={75}
					height={25}
					alt="product-img"
				/>
				<span className="font-bold text-[#393280] text-md text-center xl:text-xl">
					Title
				</span>
				<p className="text-[#ED553B] font-bold text-lg xl:text-xl">Price</p>
			</div>

			<div className="quantity flex items-center justify-center">
				<input
					type="number"
					defaultValue={0}
					className="w-10 border-2 border-gray-400 rounded-md text-center"
				/>
			</div>

			<div className="remove flex items-center justify-center">
				<button className="bg-dark-red text-white font-sembibold py-2 px-4 rounded-full hover:opacity-75 duration-150 outline-none">
					Remove
				</button>
			</div>
		</section>
	)
}

export default ListItem
