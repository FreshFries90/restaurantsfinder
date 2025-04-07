export default function OpeningHoursBlock({ tags }) {
	const rawHours = tags['opening_hours'] || '';

	const translatedHours = rawHours
		.replace(/\bPH\b/g, 'Feiertage')
		.replace(/\bMo\b/g, 'Montag')
		.replace(/\bTu\b/g, 'Dienstag')
		.replace(/\bWe\b/g, 'Mittwoch')
		.replace(/\bTh\b/g, 'Donnerstag')
		.replace(/\bFr\b/g, 'Freitag')
		.replace(/\bSa\b/g, 'Samstag')
		.replace(/\bSu\b/g, 'Sonntag')
		.replace(/\boff\b/g, 'Ruhetag')
		.replace(/;/g, ' ')
		.replace(/\+/g, ' - Open End')
		.replace(/,/g, ' & ');
	const date = new Date(tags['check_date:opening_hours']);
	const lastCheckDate = date.toLocaleDateString('de-DE');
	return (
		<div className="openinghours">
			<h3>Öffnungszeiten</h3>
			{translatedHours}
			<br />
			{tags['check_date:opening_hours'] && (
				<>Die Öffnungszeiten wurden zuletzt am {lastCheckDate} überprüft</>
			)}
			{!tags['check_date:opening_hours'] && (
				<>
					Es ist unbekannt wie alt der Datensatz ist. Bitte überprüfe die
					Öffnungszeiten manuell, bevor du den Laden besuchst
				</>
			)}
		</div>
	);
}
