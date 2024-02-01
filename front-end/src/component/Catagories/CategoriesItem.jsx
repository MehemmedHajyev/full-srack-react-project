import './CategoriesItem.css'
const CategoriesItem = ({ item}) => {
  return (
    <>
      <li className="category-item">
        <a href="#">
          <img src={item.img.singleImage} alt={item.name} className="category-image" />
          <span className="category-title">{item.name}</span>
        </a>
      </li>
    </>
  )
}

export default CategoriesItem