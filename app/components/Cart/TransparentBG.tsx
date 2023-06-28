import React from "react"

type props = {
	toggleCart: any
}

const TransparentBackground: React.FC<props> = ({ toggleCart }) => {
	return (
		<div
			className="bg-black/50 fixed h-screen w-screen top-0 left-0 cursor-pointer"
			onClick={toggleCart}
		></div>
	)
}

export default TransparentBackground
