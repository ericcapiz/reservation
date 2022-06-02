import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
      </div>
    </div>
  );
};

export default Home;
