import HoneinBlogItem from "./HoneinBlogItem"
import './HomeBlogs.css'
import api from '../../data.json'

const HomeinBLogs = () => {
    return (

        <section className="blogs">
            <div className="container">
                <div className="section-title">
                    <h2>From Our Blog</h2>
                    <p>Summer Collection New Morden Design</p>
                </div>
                <ul className="blog-list">
                    {
                        api.map((item, index) => (
                            <HoneinBlogItem key={index} item={item} /* diğer props larınızı buraya ekleyin */ />
                        ))
                    }

                </ul>
            </div>
        </section>)
}

export default HomeinBLogs