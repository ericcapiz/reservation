import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.unsplash.com/photo-1562517634-baa2da3acfbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1pYW1pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Miami"
        />
        <div className="featuredTitles">
          <h1>Miami</h1>
          <h2>460 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.unsplash.com/photo-1510097467424-192d713fd8b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuY3VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Cancun"
        />
        <div className="featuredTitles">
          <h1>Cancun</h1>
          <h2>323 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVudGElMjBjYW5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Punta Cana"
        />
        <div className="featuredTitles">
          <h1>Punta Cana</h1>
          <h2>643 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
