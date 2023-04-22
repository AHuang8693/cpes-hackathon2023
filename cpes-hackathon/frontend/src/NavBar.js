import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
 return (
 <nav>
       <ul>
          <button className="btn" onClick={() => navigate('/')}> Home</button>
          <t>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</t>
          <button className="btn" onClick={() => navigate('/users-table')}> Show Pokemon</button>
          <t>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</t>
          <button className="btn" onClick={() => navigate('/form')}> Add Pokemon</button>
       </ul>
 </nav>
 );
};

export default NavBar;