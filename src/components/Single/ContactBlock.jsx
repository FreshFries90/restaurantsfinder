export default function ContactBlock({ tags }) {
	return (
		<div className="contact">
			<h3>Kontaktdaten</h3>
			<div className="details">
				{tags['contact:facebook'] && (
					<a
						href={
							tags['contact:facebook'].startsWith('http')
								? tags['contact:facebook']
								: `https://facebook.com/${tags['contact:facebook'].replace(
										/^@/,
										''
								  )}`
						}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img alt="Facebook" src="src/images/icons/facebook.png" />
					</a>
				)}

				{tags['contact:instagram'] && (
					<a
						href={
							tags['contact:instagram'].startsWith('http')
								? tags['contact:instagram']
								: `https://instagram.com/${tags['contact:instagram'].replace(
										/^@/,
										''
								  )}`
						}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img alt="Instagram" src="src/images/icons/instagram.png" />
					</a>
				)}
				{tags['contact:tiktok'] && (
					<a href={tags['contact:tiktok']} target="_blank">
						<img alt="TikTok" src="src/images/icons/tiktok.png"></img>
					</a>
				)}
				{tags['contact:phone'] ? (
					<a
						href={`tel:${tags['contact:phone'].replace(/\s+/g, '')}`}
						target="_blank"
					>
						<img alt="Phone" src="src/images/icons/phone.png" />
					</a>
				) : (
					tags['phone'] && (
						<a
							href={`tel:${tags['phone'].replace(/\s+/g, '')}`}
							target="_blank"
						>
							<img alt="Phone" src="src/images/icons/phone.png" />
						</a>
					)
				)}
				{tags['fax'] && (
					<a href={`tel:${tags['fax'].replace(/\s+/g, '')}`} target="_blank">
						<img alt="Fax" src="src/images/icons/fax.png"></img>
					</a>
				)}
				{tags['contact:website'] && (
					<a href={tags['contact:website']} target="_blank">
						<img alt="Website" src="src/images/icons/website.png"></img>
					</a>
				)}
				{tags['website'] && (
					<a href={tags['website']} target="_blank">
						<img alt="Website" src="src/images/icons/website.png"></img>
					</a>
				)}
				{tags['website:menu'] && (
					<a href={tags['website:menu']} target="_blank">
						<img alt="Speisekarte" src="src/images/icons/menu.png"></img>
					</a>
				)}
			</div>
		</div>
	);
}
