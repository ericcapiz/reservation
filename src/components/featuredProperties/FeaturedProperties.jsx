import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://images.trvl-media.com/hotels/2000000/1800000/1790100/1790087/5f494a59.jpg?impolicy=resizecrop&rw=598&ra=fit"
          alt="hotel property"
        />
        <span className="fpName">Hotel South Beach</span>
        <span className="fpCity">Miami</span>
        <span className="fpPrice">Starting at $699</span>
        <div className="fpRating">
          <button>4.8/5</button>
          <span>Wonderful</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://embed.widencdn.net/img/alg/p6jjkn1gjn/1100px@1x/DREVC-PC-DLX-OV-1A-RGB-CB.webp?q=80"
          alt="hotel property"
        />
        <span className="fpName">Dreams Vista Cancun</span>
        <span className="fpCity">Cancun</span>
        <span className="fpPrice">Starting at $830</span>
        <div className="fpRating">
          <button>4.6/5</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://cdn.sandals.com/beaches/v12/images/specials/slider/bbo//thumb-1.jpg"
          alt="hotel property"
        />
        <span className="fpName">Beaches Resort</span>
        <span className="fpCity">Jamaica</span>
        <span className="fpPrice">Starting at $355</span>
        <div className="fpRating">
          <button>4.5/5</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://images.trvl-media.com/hotels/2000000/1180000/1179400/1179333/0122861e.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
          alt="hotel property"
        />
        <span className="fpName">DoubleTree by Hilton</span>
        <span className="fpCity">Italy</span>
        <span className="fpPrice">Starting at $250 </span>
        <div className="fpRating">
          <button>4.5/5</button>
          <span>Wonderful</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://images.trvl-media.com/hotels/2000000/1770000/1770000/1769973/4b782bae.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
          alt="hotel property"
        />
        <span className="fpName">The Palazzo</span>
        <span className="fpCity">Las Vegas</span>
        <span className="fpPrice">Starting at $315</span>
        <div className="fpRating">
          <button>4.5/5</button>
          <span>Wonderful</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
