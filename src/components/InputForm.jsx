import { useState } from 'react';
import axios from 'redaxios';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantFinder from './RestaurantFinder';
import CuisineFilter from './Input/CuisineFilter';

export default function InputForm() {
	const [address, setAddress] = useState('');
	const [coordinates, setCoordinates] = useState(null);
	const [radius, setRadius] = useState(5000);
	const [cuisine, setCuisine] = useState('');
	const [vegetarian, setVegetarian] = useState('');
	const [vegan, setVegan] = useState('');
	const [kosher, setKosher] = useState('');
	const [halal, setHalal] = useState('');
	const [glutenfree, setGlutenfree] = useState('');

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
		radius,
		cuisine,
		vegan,
		vegetarian,
		kosher,
		halal,
		glutenfree
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
				<option value="1000">1 km</option>
				<option value="2000">2 km</option>
				<option value="5000">5 km</option>
				<option value="10000">10 km</option>
				<option value="25000">25 km</option>
				<option value="50000">50 km</option>
			</select>
			<CuisineFilter
				restaurants={restaurants}
				cuisine={cuisine}
				setCuisine={setCuisine}
			/>

			<div className="dietoptions">
				<label>
					<input
						type="checkbox"
						checked={vegan}
						onChange={(e) => setVegan(e.target.checked)}
					/>
					vegan
				</label>
				<label>
					<input
						type="checkbox"
						checked={vegetarian}
						onChange={(e) => setVegetarian(e.target.checked)}
					/>
					vegetarisch
				</label>
				<label>
					<input
						type="checkbox"
						checked={glutenfree}
						onChange={(e) => setGlutenfree(e.target.checked)}
					/>
					gluten-frei
				</label>
				<label>
					<input
						type="checkbox"
						checked={halal}
						onChange={(e) => setHalal(e.target.checked)}
					/>
					halal
				</label>
				<label>
					<input
						type="checkbox"
						checked={kosher}
						onChange={(e) => setKosher(e.target.checked)}
					/>
					kosher
				</label>
			</div>
			<button type="submit">Suchen</button>

			{coordinates?.lat && coordinates?.lon && restaurants && (
				<p>{restaurants.length} Restaurants gefunden.</p>
			)}
			{coordinates?.lat && coordinates?.lon && restaurants && (
				<RestaurantFinder restaurants={restaurants} />
			)}
			{coordinates?.lat && coordinates?.lon && (
				<p>
					Das Restaurant, das du suchst, taucht hier nicht auf? Dann füge es
					jetzt{' '}
					<a
						href={`https://www.openstreetmap.org/#map=16/${coordinates.lat}/${coordinates.lon}`}
						target="_blank"
					>
						hier
					</a>{' '}
					hinzu.
				</p>
			)}
		</form>
	);
}
