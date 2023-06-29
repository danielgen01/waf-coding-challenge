import React from "react"
import Booklist from "../../../BookList.json"
import { Product } from "./Product"

type Item = {
	id: any
	title: string
	author: string
	price: number
	image: string
	quantity: number
}

type ProductListProps = {
	cartItems: Item[]
	setCartItems: any
}

export type ProductProps = Item & ProductListProps

const Products: React.FC<ProductListProps> = ({ cartItems, setCartItems }) => {
	return (
		<section
			className="py-32 flex flex-col px-10 lg:px-20 gap-5 mt-10 "
			id="allbooks"
		>
			<div className="headline  bg-grayish-white flex justify-center h-20 items-center rounded-md">
				<h3 className="font-bold text-3xl">All books</h3>
			</div>

			<ul className="items grid grid-cols-2 xl:grid-cols-3 gap-5 gap-y-20">
				{Booklist.map((book) => (
					<Product
						key={book.id}
						title={book.name}
						image={book.imageSrc}
						author={book.author}
						price={book.price}
						id={book.id}
						cartItems={cartItems}
						setCartItems={setCartItems}
						quantity={1}
					/>
				))}
			</ul>
		</section>
	)
}

export default Products
