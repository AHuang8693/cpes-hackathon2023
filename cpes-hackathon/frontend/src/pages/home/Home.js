import { Link } from "react-router-dom";
import "./home.css"

function Home(props) {
    return (
      <div className="Home">
        Welcome to Cool Car Poolers!
        <div className="Home1">
          Connect with fellow green members, carpool, and more! Get started today!
        </div>

        <Link className="link" to='/Carpool'><img className="clickhere" src="../../images/clickhere.png" alt="Click Here!"/></Link>
      </div>


    )
}

export default Home;