import './Reviws.css'
import ReviwsForm from './ReviwsForm/ReviwsForm'
import ReviwsItem from './ReviwsItem/ReviwsItem'
import PropTypes from 'prop-types'
const Reviws = ({ active }) => {
    return (
        <div className={`tab-panel-reviews content ${active}`}>
            <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
            <div className="comments">
                <ol className="comment-list">
                    <ReviwsItem />
                    <ReviwsItem />
                    <ReviwsItem />


                </ol>
            </div>
            <div className="review-form-wrapper">
                <h2>Add a review</h2>
                <ReviwsForm />
            </div>
        </div>)
}

export default Reviws


Reviws.propTypes = {
    active: PropTypes.string
}