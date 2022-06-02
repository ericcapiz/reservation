import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fG1hcnJpb3R0JTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="hotels"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>200 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.unsplash.com/photo-1633999239432-d30d13803489?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGFpciUyMGJuYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="air bnb"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Air BnB</h1>
          <h2>340</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.unsplash.com/photo-1617859047452-8510bcf207fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="resorts"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>150 resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.unsplash.com/photo-1599313354145-2329b2dd172e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FiaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="cabins"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>50 cabins</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dmlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="villas"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>100 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
