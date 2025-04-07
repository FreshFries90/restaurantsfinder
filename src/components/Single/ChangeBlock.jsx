export default function ChangeBlock({ type, id }) {
	return (
		<div>
			<p>
				Du willst Änderungen an diesem Beitrag vornehmen? Dann klicke{' '}
				<a
					href={`https://www.openstreetmap.org/${type}/${id}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					hier
				</a>
			</p>
		</div>
	);
}
