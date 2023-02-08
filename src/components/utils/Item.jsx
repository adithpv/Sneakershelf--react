import React from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart } from "../../app/CartSlice";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

const Item = ({
	ifTrue,
	id,
	color,
	shadow,
	title,
	text,
	img,
	btn,
	rating,
	price,
}) => {
	const dispatch = useDispatch();

	const onAddToCart = () => {
		const item = { id, title, text, img, color, shadow, price };
		dispatch(setAddItemToCart(item));
	};

	return (
		<>
			<div
				className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
					ifTrue ? "justify-items-start" : "justify-items-center"
				} rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
			>
				<div
					className={`grid items-center  ${
						ifTrue ? "justify-items-start" : "justify-items-center"
					}`}
				>
					<h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium  ">
						{title}
					</h1>
					<p className="text-slate-200 lg:text-lg   text-base md:text-sm font-normal">
						{text}
					</p>

					<div className="flex items-center justify-between w-28 my-2">
						<div className="flex items-center bg-white px-1 rounded ">
							<h1 className="text-black text-sm font-medium">${price}</h1>
						</div>
						<div className="flex items-center gap-1">
							<StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
							<h1 className="text-sm font-normal text-slate-100">{rating}</h1>
						</div>
					</div>

					<div className="flex items-center gap-3">
						<button
							type="button"
							onClick={() => onAddToCart()}
							className="bg-white  button-theme p-0.5 shadow-sm 
              "
						>
							<ShoppingBagIcon className="icon-style text-slate-900" />
						</button>
						<button
							type="button"
							onClick={() => {
								onAddToCart();
							}}
							className="bg-white/90  button-theme px-2 py-1 shadow-sm  text-sm text-black hover:scale-110 hover:shadow-sm hover:shadow-white "
						>
							{btn}
						</button>
					</div>
				</div>
				<div
					className={`flex items-center ${
						ifTrue ? "absolute top-5 right-1" : "justify-center"
					}`}
				>
					<img
						src={img}
						alt={`img/item-img${id}`}
						className={` transitions-theme hover:-rotate-0 ${
							ifTrue
								? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
								: "h-36 w-64"
						}  `}
					/>
				</div>
			</div>
		</>
	);
};

export default Item;
