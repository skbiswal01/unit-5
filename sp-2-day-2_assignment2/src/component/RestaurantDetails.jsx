import "./Restaurant.css";
const RestaurantDetails = (props) => {
  return (
    <div className="main_container">
      <div className="Restaurant_details">
        <div className="restaurant_img">
          <img
            width="180px"
            height="175px"
            src={props.data.src}
            alt={props.data.name}
          />
        </div>
        <div className="delails_info">
          <h2 className="restaurant_name">{props.data.name}</h2>
          <p className="restaurant_name">{props.data.category}</p>
          <p className="cuisine_food">{props.data.cuisine.join(", ")}</p>
          <p className="cost">Cost ₹{props.costForOne} for one</p>
          <p style={{ fontSize: "18px", fontWeight: "500" }}>
            {" "}
            Min ₹{props.minOrder}{" "}
            <i class="fas fa-circle" style={{ fontSize: "5px" }}></i>Up to{" "}
            {props.data.deliveryTime} min{" "}
          </p>
          {props.data.cash && props.data.card ? (
            <p className="payment_method">
              {" "}
              Accepts Cash and Card payments both
            </p>
          ) : props.data.card ? (
            <p className="payment_method"> Accepts Card payments only</p>
          ) : (
            <p className="payment_method"> Accepts Cash payments only</p>
          )}
        </div>
        <div className="right_div">
          <div className="ratings">{props.data.rating}</div>
          <div className="votes">{props.data.votes} votes</div>
          <div className="reviews">{props.data.reviews} reviews</div>
        </div>
      </div>
      <div className="card_footer">
        <div></div>
        <div className="order_button">
          Order Online <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;