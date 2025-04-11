import { useEffect, useState } from 'react';
import axios from 'redaxios';

export default function useRestaurants(
	longitude,
	latitude,
	radius,
	cuisine,
	vegan,
	vegetarian,
	kosher,
	halal,
	glutenfree,
	wheelchair
) {
	const [restaurants, setRestaurants] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setRestaurants([]);
		if (!longitude || !latitude || !radius) return;
		const cuisineFilter = cuisine ? `["cuisine"="${cuisine}"]` : '';
		const veganFilter = vegan ? '["diet:vegan"~"^(yes|only)$"]' : '';
		const vegetarianFilter = vegetarian
			? '["diet:vegetarian"~"^(yes|only)$"]'
			: '';
		const halalFilter = halal ? '["diet:halal"~"^(yes|only)$"]' : '';
		const kosherFilter = kosher ? '["diet:kosher"~"^(yes|only)$"]' : '';
		const glutenfreeFilter = glutenfree
			? '["diet:gluten_free"~"^(yes|only)$"]'
			: '';
		const wheelchairFilter = wheelchair ? '["wheelchair"="yes"]' : '';
		const filter = [
			cuisineFilter,
			veganFilter,
			vegetarianFilter,
			halalFilter,
			kosherFilter,
			glutenfreeFilter,
			wheelchairFilter,
		].join('');

		const query = `
			[out:json][timeout:25];
				(
					node["amenity"="restaurant"]${filter}(around:${radius},${latitude},${longitude});
					way["amenity"="restaurant"]${filter}(around:${radius},${latitude},${longitude});
					relation["amenity"="restaurant"]${filter}(around:${radius},${latitude},${longitude});
				);
			out center tags;
		`;

		const fetchRestaurants = async () => {
			setLoading(true);
			try {
				const response = await axios.post(
					'https://overpass-api.de/api/interpreter',
					query,
					{ headers: { 'Content-Type': 'text/plain' } }
				);

				const filtered = response.data.elements.filter((el) => {
					const tags = el.tags || {};
					return tags.name && tags['addr:street'] && tags['addr:housenumber'];
				});

				setRestaurants(filtered);
			} catch (error) {
				console.error('Fehler beim Laden der Restaurants:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchRestaurants();
	}, [
		longitude,
		latitude,
		radius,
		cuisine,
		vegan,
		vegetarian,
		halal,
		kosher,
		glutenfree,
		wheelchair,
	]);

	return { restaurants, loading };
}
