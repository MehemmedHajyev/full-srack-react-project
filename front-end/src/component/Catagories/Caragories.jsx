import CategoriesItem from './CategoriesItem'
import './Caragories.css'
const Caragories = () => {
  return (
    <>
      <section className="categories">
        <div className="container">
          <div className="section-title">
            <h2>All Categories</h2>
            <p>Summer Collection New Morden Design</p>
          </div>
          <ul className="category-list">
            <CategoriesItem />
            <CategoriesItem />
            <CategoriesItem />
            <CategoriesItem />
            <CategoriesItem />
            <CategoriesItem />

          </ul>
        </div>
      </section>
    </>
  )
}

export default Caragories