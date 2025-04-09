export default function WheelchairBlock({ tags }) {
	const wheelchairValue = tags['wheelchair'];
	const toiletswheelchairValue = tags['toilets:wheelchair'];
	return (
		<div className="wheelchair">
			<div className="wheelchairicons">
				{wheelchairValue && (
					<img
						className={`wheelchair ${wheelchairValue}`}
						alt="Rollstuhlfahrergeeignet"
						src="src/images/icons/wheelchair.png"
					></img>
				)}
				{toiletswheelchairValue && (
					<img
						className={`toiletswheelchair ${toiletswheelchairValue}`}
						alt="Toiletten für Rollstuhlfahrer"
						src="src/images/icons/wheelchairwc.png"
					></img>
				)}
			</div>
			{tags['wheelchair:description'] && (
				<p>{tags['wheelchair:description']}</p>
			)}
		</div>
	);
}
