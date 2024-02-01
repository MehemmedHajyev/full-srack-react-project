import './HomeBlogItem.css'

const HoneinBlogItem = ({item}) => {
    console.log(item);
    return (
        <>
            <li className="blog-item">
                <a href="#" className="blog-image">
                    <img src={item.img.thumbs[2]} alt="" />
                </a>
                <div className="blog-info">
                    <div className="blog-info-top">
                        <span>25 Feb, 2021 </span>
                        -
                        <span>0 Comments</span>
                    </div>
                    <div className="blog-info-center">
                        <a href="#">Aliquam hendrerit mi metus</a>
                    </div>
                    <div className="blog-info-bottom">
                        <a href="#">Read More</a>
                    </div>
                </div>
            </li>
        </>
    )
}

export default HoneinBlogItem