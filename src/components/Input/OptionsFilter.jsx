export default function OptionsFilter({
	wheelchair,
	setWheelchair,
	vegan,
	setVegan,
	vegetarian,
	setVegetarian,
	glutenfree,
	setGlutenfree,
	halal,
	setHalal,
	kosher,
	setKosher,
}) {
	return (
		<div className="wheelchairanddiet">
			<label>
				<input
					type="checkbox"
					checked={wheelchair}
					onChange={(e) => setWheelchair(e.target.checked)}
				/>
				rollstuhlgerecht
			</label>
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
	);
}
