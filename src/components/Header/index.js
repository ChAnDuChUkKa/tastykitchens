import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const {activeTab} = props
  const activeHome = activeTab === 'HOME' ? 'active' : ''
  const activeCart = activeTab === 'CART' ? 'active' : ''

  const overlayStyles = {
    backgroundColor: '#ffffff',
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/" className="nav-link">
          <div className="header-element">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/dpnobkqmw/image/upload/v1634189323/Group_7420_p9exzb.png"
              alt="website logo"
            />
            <h1 className="heading-mobile">Tasty Kitchens</h1>
          </div>
        </Link>

        <ul className="nav-menu">
          <Link to="/" className={`nav-link ${activeHome}`}>
            <li>Home</li>
          </Link>
          <Link to="/cart" className={`nav-link ${activeCart}`}>
            <li>Cart</li>
          </Link>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
            testid="logout-button"
          >
            Logout
          </button>
        </ul>

        <Popup
          modal
          trigger={
            <button
              type="button"
              className="nav-mobile-btn"
              testid="hamburgerIconButton"
            >
              <GiHamburgerMenu className="hamburger-icon" />
            </button>
          }
          className="popup-content"
          overlayStyle={overlayStyles}
        >
          {close => (
            <div className="modal-container">
              <ul className="nav-items-popup">
                <Link to="/" className="nav-link">
                  <li
                    className="mobile-home"
                    onClick={() => close()}
                    key="home"
                  >
                    Home
                  </li>
                </Link>
                <Link to="/cart" className="nav-link">
                  <li
                    className="mobile-cart nav-link"
                    onClick={() => close()}
                    key="cart"
                  >
                    cart
                  </li>
                </Link>
              </ul>
              <button
                type="button"
                className="mobile-button"
                onClick={onClickLogout}
                testid="logOutButton"
              >
                Logout
              </button>
              <button
                className="button-close"
                type="button"
                testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose size="30" color="#616e7c" />
              </button>
            </div>
          )}
        </Popup>
      </div>
    </nav>
  )
}

export default withRouter(Header)
