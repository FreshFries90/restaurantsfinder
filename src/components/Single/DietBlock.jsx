export default function DietBlock({ tags }) {
	const veganValue = tags['diet:vegan'];
	const vegetarianValue = tags['diet:vegetarian'];
	const kosherValue = tags['diet:kosher'];
	const halalValue = tags['diet:halal'];
	const glutenFreeValue = tags['diet:gluten_free'];
	return (
		<div className="diet">
			{veganValue && (
				<img
					className={`vegan ${veganValue}`}
					alt="Vegan"
					src="src/images/icons/vegan.png"
				></img>
			)}
			{vegetarianValue && (
				<img
					className={`vegetarian ${vegetarianValue}`}
					alt="Vegetarisch"
					src="src/images/icons/vegetarian.png"
				></img>
			)}
			{kosherValue && (
				<img
					className={`kosher ${kosherValue}`}
					alt="Kosher"
					src="src/images/icons/kosher.png"
				></img>
			)}
			{halalValue && (
				<img
					className={`halal ${halalValue}`}
					alt="Halal"
					src="src/images/icons/halal.png"
				></img>
			)}
			{glutenFreeValue && (
				<img
					className={`glutenfree ${glutenFreeValue}`}
					alt="Halal"
					src="src/images/icons/gluten-free.png"
				></img>
			)}
		</div>
	);
}
