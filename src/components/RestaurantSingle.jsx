import AdressBlock from './Single/AdressBlock';
import ChangeBlock from './Single/ChangeBlock';
import ContactBlock from './Single/ContactBlock';
import CuisineBlock from './Single/CuisineBlock';
import DietBlock from './Single/DietBlock';
import OpeningHoursBlock from './Single/OpeningHoursBlock';
import WheelchairBlock from './Single/Wheelchair';

export default function RestaurantSingle({ restaurant }) {
	const tags = restaurant.tags;
	const hasContactInfo = [
		'contact:facebook',
		'contact:instagram',
		'contact:phone',
		'contact:website',
		'contact:fax',
		'phone',
		'website',
		'website:menu',
		'contact:tiktok',
	].some((key) => tags?.[key]);
	const hasDietInfo = [
		'diet:vegetarian',
		'diet:vegan',
		'diet:kosher',
		'diet:halal',
		'diet:gluten_free',
	].some((key) => tags?.[key]);
	const wheelchairInfo = [
		'wheelchair',
		'wheelchair:description',
		'toilets:wheelchair',
	].some((key) => tags?.[key]);
	return (
		<div className="restaurantsingle" key={restaurant.id}>
			<h2>{tags['name']}</h2>
			{tags['cuisine'] && <CuisineBlock tags={tags} />}
			{hasDietInfo && <DietBlock tags={tags} />}
			{wheelchairInfo && <WheelchairBlock tags={tags} />}
			<AdressBlock tags={tags} />
			{hasContactInfo && <ContactBlock tags={tags} />}
			{tags['opening_hours'] && <OpeningHoursBlock tags={tags} />}
			<ChangeBlock type={restaurant.type} id={restaurant.id} />
		</div>
	);
}
