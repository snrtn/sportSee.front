import calorie from '../assets/fire.svg';
import proteine from '../assets/chicken.svg';
import glucide from '../assets/apple.svg';
import lipide from '../assets/burger.svg';
import './nutrients.styles.css';

const Nutrients = ({ data }) => {
	return (
		<section className='nutrient_container'>
			<article>
				<div className='nutrient_icon_box'>
					<img src={calorie} alt='icon de calorie' className='nutrient_icon' />
				</div>
				<div>
					<div>
						<p className='nutrient_title'>{data.data?.keyData.calorieCount}kCal</p>
						<p className='nutrient_desc'>Calories</p>
					</div>
				</div>
			</article>
			<article>
				<div className='nutrient_icon_box'>
					<img src={proteine} alt='icon de calorie' className='nutrient_icon' />
				</div>
				<div>
					<p className='nutrient_title'>{data.data?.keyData.proteinCount}g</p>
					<p className='nutrient_desc'>Proteines</p>
				</div>
			</article>
			<article>
				<div className='nutrient_icon_box'>
					<img src={glucide} alt='icon de calorie' className='nutrient_icon' />
				</div>
				<div>
					<p className='nutrient_title'>{data.data?.keyData.carbohydrateCount}g</p>
					<p className='nutrient_desc'>Glucides</p>
				</div>
			</article>
			<article>
				<div className='nutrient_icon_box'>
					<img src={lipide} alt='icon de calorie' className='nutrient_icon' />
				</div>
				<div>
					<p className='nutrient_title'>{data.data?.keyData.lipidCount}g</p>
					<p className='nutrient_desc'>Lipides</p>
				</div>
			</article>
		</section>
	);
};

export default Nutrients;
