import Reviws from '../../Reviws/Reviws'
import './Tabs.css'
const Tabs = () => {
    return (
        <div className="single-tabs">
            <ul className="tab-list">
                <li>
                    <a href="#" className="tab-button active" data-id="desc">Description</a>
                </li>
                <li>
                    <a href="#" className="tab-button" data-id="info">
                        Additional information
                    </a>
                </li>
                <li>
                    <a href="#" className="tab-button" data-id="reviews">
                        Reviews
                    </a>
                </li>
            </ul>
            <div className="tab-panel">
                <div className="tab-panel-descriptions content " id="desc">
                    <p>Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui
                        finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat
                        ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales
                        nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia.
                        Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare
                        vel, dignissim a tortor.</p>
                    <br />
                    <p>Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui
                        finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat
                        ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales
                        nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia.
                        Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare
                        vel, dignissim a tortor.</p>
                </div>
                <div className="tab-panel-information content active" id="info">
                    <h3>Additional information</h3>
                    <table>
                        <tbody>
                            <tr>
                                <th>Color</th>
                                <td>
                                    <p>
                                        Apple Red, Bio Blue, Sweet Orange, Blue, Green, Pink, Black, White</p>
                                </td>
                            </tr>
                            <tr>
                                <th>Size</th>
                                <td>
                                    <p>
                                        XXS, XS, S, M, L, XL, XXL</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="tab-panel-reviews content" id="reviews">
                    <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
                    <div className="comments">
                        <ol className="comment-list">
                            <li className="comment-item">
                                <div className="comment-avatar">
                                    <img src="img/avatars/avatar1.jpg" alt="" />
                                </div>
                                <div className="comment-text">
                                    <ul className="comment-star">
                                        <li>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                    </ul>
                                    <div className="comment-meta">
                                        <strong>admin</strong>
                                        <span>-</span>
                                        <time>April 23, 2022</time>
                                    </div>
                                    <div className="comment-description">
                                        <p>Sed perspiciatis unde omnis iste natus error sit voluptatem
                                            accusantium doloremque laudantium.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="comment-item">
                                <div className="comment-avatar">
                                    <img src="img/avatars/avatar1.jpg" alt="" />
                                </div>
                                <div className="comment-text">
                                    <ul className="comment-star">
                                        <li>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                    </ul>
                                    <div className="comment-meta">
                                        <strong>admin</strong>
                                        <span>-</span>
                                        <time>April 23, 2022</time>
                                    </div>
                                    <div className="comment-description">
                                        <p>Sed perspiciatis unde omnis iste natus error sit voluptatem
                                            accusantium doloremque laudantium.</p>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                    <Reviws />
                </div>
            </div>
        </div>)
}

export default Tabs