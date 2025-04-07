import AdressBlock from './Single/AdressBlock';
import ContactBlock from './Single/ContactBlock';
import CuisineBlock from './Single/CuisineBlock';
import OpeningHoursBlock from './Single/OpeningHoursBlock';

export default function RestaurantSingle({ restaurant }) {
	const tags = restaurant.tags;

	return (
		<div className="restaurantsingle" key={restaurant.id}>
			<h2>{tags['name']}</h2>
			<CuisineBlock tags={tags} />
			<AdressBlock tags={tags} />
			<ContactBlock tags={tags} />
			{tags['opening_hours'] && <OpeningHoursBlock tags={tags} />}
		</div>
	);
}
