import React from "react"
import Image from "next/image"
import { BsArrowDownRight } from "react-icons/bs"

const Hero: React.FC = () => {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-2 mt-5 place-items-center px-10 lg:px-20 gap-4">
			<div className="description flex flex-col gap-5 lg:gap-10">
				<h1 className="text-5xl text-main-text-color font-semibold leading-normal text-left lg:text-7xl">
					Buy your textbooks for the best{" "}
					<span className="text-dark-red">price</span>
				</h1>
				<p className="text-[rgba(0,0,0,0.48)] font-semibold lg:text-2xl">
					Discover the best prices for buying and selling textbooks in our
					marketplace, Buy and sell with confidence today!
				</p>

				<div className="buttons">
					<button className="bg-dark-red px-5 py-3 rounded-full text-white lg:px-10 lg:py-5 text-xl hover:opacity-80 duration-150 flex items-center gap-3">
						See all books <BsArrowDownRight />
					</button>
				</div>
			</div>

			<div className="image-container bg-bright-blue rounded-tr-3xl rounded-bl-3xl">
				<Image src={"/images/Books.png"} width={500} height={200} alt="Books" />
			</div>
		</section>
	)
}

export default Hero
