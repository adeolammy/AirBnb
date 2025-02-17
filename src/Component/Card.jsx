import PropTypes from 'prop-types';

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
  return (
    <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={`../assets/${props.coverImg}`} alt="cover image" className="card--image" />
       <div className="card--stats">
                <img src="../assets/star.png" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
        </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
      
    </div>
  )
}

Card.propTypes = {
    openSpots: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        rating: PropTypes.number.isRequired,
        reviewCount: PropTypes.number.isRequired,
    }).isRequired,
};
