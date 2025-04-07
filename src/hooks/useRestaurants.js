import { useEffect, useState } from 'react';
import axios from 'redaxios';

export default function useRestaurants(longitude, latitude, radius) {
	const [restaurants, setRestaurants] = useState([]);

	useEffect(() => {
		if (!longitude || !latitude || !radius) return;

		const query = `
			[out:json][timeout:25];
				(
					node["amenity"="restaurant"](around:${radius},${latitude},${longitude});
					way["amenity"="restaurant"](around:${radius},${latitude},${longitude});
					relation["amenity"="restaurant"](around:${radius},${latitude},${longitude});
				);
			out center tags;
		`;

		const fetchRestaurants = async () => {
			try {
				const response = await axios.post(
					'https://overpass-api.de/api/interpreter',
					query,
					{ headers: { 'Content-Type': 'text/plain' } }
				);

				// Elemente filtern: Nur solche mit name und Adresse
				const filtered = response.data.elements.filter((el) => {
					const tags = el.tags || {};
					return tags.name && tags['addr:street'] && tags['addr:housenumber'];
				});

				setRestaurants(filtered);
			} catch (error) {
				console.error('Fehler beim Laden der Restaurants:', error);
			}
		};

		fetchRestaurants();
	}, [longitude, latitude, radius]);

	return restaurants;
}
