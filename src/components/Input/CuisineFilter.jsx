const topCuisines = [
	{ value: 'german', label: 'Deutsch' },
	{ value: 'italian', label: 'Italienisch' },
	{ value: 'greek', label: 'Griechisch' },
	{ value: 'chinese', label: 'Chinesisch' },
	{ value: 'american', label: 'Amerikanisch' },
	{ value: 'spanish', label: 'Spanisch' },
	{ value: 'french', label: 'Französisch' },
	{ value: 'thai', label: 'Thailändisch' },
	{ value: 'indian', label: 'Indisch' },
	{ value: 'japanese', label: 'Japanisch' },
];

export default function CuisineFilter({ cuisine, setCuisine }) {
	return (
		<select
			id="cuisine-select"
			name="cuisine"
			value={cuisine}
			onChange={(e) => setCuisine(e.target.value)}
		>
			<option value="">Alle Küchen</option>
			{topCuisines.map(({ value, label }) => (
				<option key={value} value={value}>
					{label}
				</option>
			))}
		</select>
	);
}
