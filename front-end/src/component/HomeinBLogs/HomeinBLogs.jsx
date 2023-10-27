import HoneinBlogItem from "./HoneinBlogItem"
import './HomeBlogs.css'

const HomeinBLogs = () => {
    return (

        <section className="blogs">
            <div className="container">
                <div className="section-title">
                    <h2>From Our Blog</h2>
                    <p>Summer Collection New Morden Design</p>
                </div>
                <ul className="blog-list">
                    <HoneinBlogItem />
                    <HoneinBlogItem />
                    <HoneinBlogItem />
                </ul>
            </div>
        </section>)
}

export default HomeinBLogs