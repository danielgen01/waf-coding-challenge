import React from "react"
import Image from "next/image"

type Book = {
	title:string
	price:number
	id:any 
	image:string
	quantity:number
}

type ListItemProps = {
	item:Book
}

const ListItem: React.FC<ListItemProps> = ({item}) => {
	console.log(item)

	return (
		<section className="cart-item grid grid-cols-3 w-full h-[33%]">
			<div className="image-title-price flex flex-col items-center gap-2">
				<Image
					src={item.image}
					width={75}
					height={25}
					alt="product-img"
				/>
				<span className="font-bold text-[#393280] text-md text-center xl:text-xl">
				 {item.title}
				</span>
				<p className="text-[#ED553B] font-bold text-lg xl:text-xl">€ {item.price}</p>
			</div>

			<div className="quantity flex items-center justify-center ">
				<input
					type="number"
					value={item.quantity}
					className="w-10 border-2 border-gray-400 rounded-md text-center outline-light-blue"
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
