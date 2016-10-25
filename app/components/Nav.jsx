var React = require('react');
var {Link, IndexLink} = require('react-router');
var Nav = (props) => {
  return(
    <div className='top-bar'>
      <div className='top-bar-left'>
        <ul className='menu'>
          <li className='menu-text'>Timer&Countdown Application</li>
          <li>
            <IndexLink to="/" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
          </li>
          <li>
            <Link to='/countdown' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
module.exports = Nav;
