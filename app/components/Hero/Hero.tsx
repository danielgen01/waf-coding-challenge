import React from "react"
import Image from "next/image"
import { BsArrowDownRight } from "react-icons/bs"
import { Link } from "react-scroll"

const Hero: React.FC = () => {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-2 mt-5 place-items-center px-10 lg:px-20 gap-4 py-1 lg:py-10">
			<div className="description flex flex-col gap-5 lg:gap-10 md:items-center ">
				<h1 className="text-4xl text-main-text-color font-semibold leading-normal text-left lg:text-7xl md:text-center">
					Buy your textbooks for the best{" "}
					<span className="text-dark-red">price</span>
				</h1>
				<p className="text-[rgba(0,0,0,0.48)] font-semibold lg:text-2xl md:text-center">
					Discover the best prices for buying and selling textbooks in our
					marketplace, Buy and sell with confidence today!
				</p>

				<div className="buttons">
					<Link to="allbooks" smooth={true} duration={1000} offset={-50}>
						<button className="bg-dark-red px-5 py-3 rounded-full text-white lg:px-10 lg:py-5 text-xl hover:opacity-80 duration-150 flex items-center gap-3">
							See all books <BsArrowDownRight />
						</button>
					</Link>
				</div>
			</div>

			<div className="image-container bg-bright-blue rounded-tr-[100px] rounded-bl-[100px]">
				<Image src={"/images/Books.png"} width={500} height={200} alt="Books" />
			</div>
		</section>
	)
}

export default Hero
