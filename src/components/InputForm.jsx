import { useState } from 'react';
import axios from 'redaxios';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantFinder from './RestaurantFinder';

export default function InputForm() {
	const [address, setAddress] = useState('');
	const [coordinates, setCoordinates] = useState(null);
	const [radius, setRadius] = useState(5000); // Default 5 km
	const handleGeocode = async (e) => {
		e.preventDefault();
		if (!address) return;

		try {
			const response = await axios.get(
				'https://nominatim.openstreetmap.org/search',
				{
					params: {
						q: address,
						format: 'json',
						limit: 1,
					},
					headers: {
						'Accept-Language': 'de',
					},
				}
			);

			if (response.data.length > 0) {
				const { lat, lon } = response.data[0];
				setCoordinates({ lat, lon });
			} else {
				alert('Keine Koordinaten gefunden.');
			}
		} catch (error) {
			console.error('Geocoding-Fehler:', error);
		}
	};

	const restaurants = useRestaurants(
		coordinates?.lon,
		coordinates?.lat,
		radius
	);
	return (
		<form onSubmit={handleGeocode}>
			<input
				type="text"
				id="addressInput"
				placeholder="Adresse eingeben"
				value={address}
				onChange={(e) => setAddress(e.target.value)}
			/>

			<select
				id="radiusInput"
				value={radius}
				onChange={(e) => setRadius(Number(e.target.value))}
			>
				<option value="2000">2 km</option>
				<option value="5000">5 km</option>
				<option value="10000">10 km</option>
				<option value="25000">25 km</option>
				<option value="50000">50 km</option>
			</select>

			<button type="submit">Suchen</button>

			{restaurants && restaurants.length >= 1 && (
				<p>{restaurants.length} Restaurants gefunden.</p>
			)}
			{restaurants && <RestaurantFinder restaurants={restaurants} />}
		</form>
	);
}
