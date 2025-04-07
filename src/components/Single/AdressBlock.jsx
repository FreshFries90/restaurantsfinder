export default function AdressBlock({ tags }) {
	return (
		<div className="adress">
			<h3>Adresse</h3>
			{tags['addr:street']} {tags['addr:housenumber']?.replace(/;/g, '/')}
			<br />
			{tags['addr:postcode']} {tags['addr:city']} {tags['addr:suburb']}
		</div>
	);
}
