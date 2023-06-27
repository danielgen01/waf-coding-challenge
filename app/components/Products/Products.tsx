import React from "react"
import Booklist from "../../../BookList.json"
import Image from "next/image"
import { BsHandbag } from "react-icons/bs"

const Products: React.FC = () => {
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
					/>
				))}
			</ul>
		</section>
	)
}

export default Products

type Book = {
	id: any
	title: string
	author: string
	price: number
	image: string
}

const Product: React.FC<Book> = ({ title, image, author, price, id }) => {
	return (
		<div className="h-96 rounded-md">
			<div className="product-container-content px-10 py-10 shadow-lg h-72 flex flex-col gap-5 items-center">
				<Image src={image} alt="img" width={120} height={100} />
				<button className="flex items-center gap-2 bg-dark-red text-white font-normal rounded-md px-2 hover:opacity-80 duration-200 md:text-md xl:text-2xl py-1">
					Add to bag <BsHandbag />
				</button>
			</div>

			<div className="book-description flex flex-col items-center mt-4 gap-2">
				<span className="font-bold text-[#393280] text-md text-center xl:text-xl">
					{title}
				</span>
				<p className="text-sm xl:text-lg">{author}</p>
				<span className="text-[#ED553B] font-bold text-xl xl:text-2xl">€ {price}</span>
			</div>
		</div>
	)
}
