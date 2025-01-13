import { testimonial1, testimonial2, testimonial3 } from "../../assets";
import "./Testimonials.css";

const Testimonials = () => {
	return (
		<section
			id='testimonials'
			className='dark-gray'>
			<div className='wrapper'>
				<h2>What our students say?</h2>

				<div className='content-container'>

						<div className='testimonial'>
							<img
								src={testimonial1}
								alt=''
							/>
							<div className='reviewer-details'>
								<div className='name'>John Doe</div>
								<div className='company-name'>Union Steet</div>
								<div className='review'>Thanks alot</div>
							</div>
						</div>
						<div className='testimonial'>
							<img
								src={testimonial2}
								alt=''
							/>
							<div className='reviewer-details'>
								<div className='name'>John Doe</div>
								<div className='company-name'>Union Steet</div>
								<div className='review'>Thanks alot</div>
							</div>
						</div>
						<div className='testimonial'>
							<img
								src={testimonial3}
								alt=''
							/>
							<div className='reviewer-details'>
								<div className='name'>John Doe</div>
								<div className='company-name'>Union Steet</div>
								<div className='review'>Thanks alot</div>
							</div>
						</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
