import CategoriesItem from './CategoriesItem'
import  api  from'./../../data.json'
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

            {
              api.map((item, index) => (
                <CategoriesItem key={index} item={item}/>
              ))
            }

          </ul>
        </div>
      </section>
    </>
  )
}

export default Caragories