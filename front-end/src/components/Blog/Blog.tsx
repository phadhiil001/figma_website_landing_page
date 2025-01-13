import { blog1, blog2, blog3 } from "../../assets";
import "./Blog.css";

const Blog = () => {
	return (
		<section
			id='blog'
			className='pink'>
			<div className='wrapper'>
				<h2 className='light'>Latest Posts</h2>
				<div className='content-container'>
					<div className='post'>
						<div className='tag'>DAW</div>
						<a href='#'>
							<img
								src={blog1}
								alt=''
							/>
						</a>

						<a href='#'>
							<h3 className='post-title'>
								How to use Drum machine in Logic Pro X
							</h3>
						</a>
					</div>

					<div className='post'>
						<div className='tag'>DAW</div>
						<a href='#'>
							<img
								src={blog2}
								alt=''
							/>
						</a>

						<a href='#'>
							<h3 className='post-title'>
								How to use Drum machine in Logic Pro X
							</h3>
						</a>
					</div>

					<div className='post'>
						<div className='tag'>DAW</div>
						<a href='#'>
							<img
								src={blog3}
								alt=''
							/>
						</a>

						<a href='#'>
							<h3 className='post-title'>
								How to use Drum machine in Logic Pro X
							</h3>
						</a>
					</div>
				</div>

				<div className='btn-container'>
					<a
						href='#'
						className='all-posts-btn'>
						All Posts
					</a>
				</div>
			</div>
		</section>
	);
};

export default Blog;
