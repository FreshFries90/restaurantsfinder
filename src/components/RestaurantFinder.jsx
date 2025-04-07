import RestaurantSingle from './RestaurantSingle';

export default function RestaurantFinder({ restaurants = [] }) {
	return (
		<div className="restaurantsoverview">
			{restaurants.map((r) => (
				<RestaurantSingle key={r.id} restaurant={r} />
			))}
		</div>
	);
}
