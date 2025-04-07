export default function ContactBlock({ tags }) {
	return (
		<div className="contact">
			<h3>Kontaktdaten</h3>
			{tags['contact:facebook']} {tags['contact:instagram']}{' '}
			{tags['contact:tiktok']}
			<br />
			{tags['contact:phone']} {tags['phone']} {tags['contact:fax']}
			<br />
			{tags['contact:website']} {tags['contact:website:menu']}
		</div>
	);
}
