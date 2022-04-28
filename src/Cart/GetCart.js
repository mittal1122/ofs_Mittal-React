import React from 'react'

export const GetCart = () => {
  return (
<div> <div className="container-fluid">
    <div className="row bg-secondary py-2 px-xl-5">
      <div className="col-lg-6 d-none d-lg-block">
        <div className="d-inline-flex align-items-center">
          <a className="text-dark" href>FAQs</a>
          <span className="text-muted px-2">|</span>
          <a className="text-dark" href>Help</a>
          <span className="text-muted px-2">|</span>
          <a className="text-dark" href>Support</a>
        </div>
      </div>
      <div className="col-lg-6 text-center text-lg-right">
        <div className="d-inline-flex align-items-center">
          <a className="text-dark px-2" href>
            <i className="fab fa-facebook-f" />
          </a>
          <a className="text-dark px-2" href>
            <i className="fab fa-twitter" />
          </a>
          <a className="text-dark px-2" href>
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="text-dark px-2" href>
            <i className="fab fa-instagram" />
          </a>
          <a className="text-dark pl-2" href>
            <i className="fab fa-youtube" />
          </a>
        </div>
      </div>
    </div>
    <div className="row align-items-center py-3 px-xl-5">
      <div className="col-lg-3 d-none d-lg-block">
        <a href className="text-decoration-none">
          <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Cart</h1>
        </a>
      </div>
      <div className="col-lg-6 col-6 text-left">
        <form action>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for products" />
            <div className="input-group-append">
              <span className="input-group-text bg-transparent text-primary">
                <i className="fa fa-search" />
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className="col-lg-3 col-6 text-right">
        <a href className="btn border">
          <i className="fas fa-heart text-primary" />
          <span className="badge">0</span>
        </a>
        <a href className="btn border">
          <i className="fas fa-shopping-cart text-primary" />
          <span className="badge">0</span>
        </a>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <div className="container-fluid">
    <div className="row border-top ">
      <div className="col-lg-9">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
          <a href className="text-decoration-none d-block d-lg-none">
            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
          </a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav mr-auto py-0">
              <a href="index.html" className="nav-item nav-link">Home</a>
              <a href="shop.html" className="nav-item nav-link">Shop</a>
              <a href="detail.html" className="nav-item nav-link">Shop Detail</a>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle active" data-toggle="dropdown">Pages</a>
                <div className="dropdown-menu rounded-0 m-0">
                  <a href="cart.html" className="dropdown-item">Shopping Cart</a>
                  <a href="checkout.html" className="dropdown-item">Checkout</a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
            <div className="navbar-nav ml-auto py-0">
              <a href className="nav-item nav-link">Login</a>
              <a href className="nav-item nav-link">Register</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  {/* Navbar End */}
 
  {/* Page Header End */}
  {/* Cart Start */}
  <div className="container-fluid pt-5">
    <div className="row px-xl-5">
    <div className="container ">
  <div className="d-flex justify-content-center row">
    <div className="col-md-8">
      <div className="p-2">
        <h4>Shopping cart</h4>
        <div className="d-flex flex-row align-items-center pull-right"><span className="mr-1">Sort by:</span><span className="mr-1 font-weight-bold">Price</span><i className="fa fa-angle-down" /></div>
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
        <div className="mr-1"><img className="rounded" src="https://i.imgur.com/XiFJkhI.jpg" width={70} /></div>
        <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">Basic T-shirt</span>
          <div className="d-flex flex-row product-desc">
            <div className="size mr-1"><span className="text-grey">Size:</span><span className="font-weight-bold">&nbsp;M</span></div>
            <div className="color"><span className="text-grey">Color:</span><span className="font-weight-bold">&nbsp;Grey</span></div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center qty"><i className="fa fa-minus text-danger" />
          <h5 className="text-grey mt-1 mr-1 ml-1">2</h5><i className="fa fa-plus text-success" />
        </div>
        <div>
          <h5 className="text-grey">$20.00</h5>
        </div>
        <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger" /></div>
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
        <div className="mr-1"><img className="rounded" src="https://i.imgur.com/XiFJkhI.jpg" width={70} /></div>
        <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">Basic T-shirt</span>
          <div className="d-flex flex-row product-desc">
            <div className="size mr-1"><span className="text-grey">Size:</span><span className="font-weight-bold">&nbsp;M</span></div>
            <div className="color"><span className="text-grey">Color:</span><span className="font-weight-bold">&nbsp;Grey</span></div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center qty"><i className="fa fa-minus text-danger" />
          <h5 className="text-grey mt-1 mr-1 ml-1">2</h5><i className="fa fa-plus text-success" />
        </div>
        <div>
          <h5 className="text-grey">$20.00</h5>
        </div>
        <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger" /></div>
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
        <div className="mr-1"><img className="rounded" src="https://i.imgur.com/XiFJkhI.jpg" width={70} /></div>
        <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">Basic T-shirt</span>
          <div className="d-flex flex-row product-desc">
            <div className="size mr-1"><span className="text-grey">Size:</span><span className="font-weight-bold">&nbsp;M</span></div>
            <div className="color"><span className="text-grey">Color:</span><span className="font-weight-bold">&nbsp;Grey</span></div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center qty"><i className="fa fa-minus text-danger" />
          <h5 className="text-grey mt-1 mr-1 ml-1">2</h5><i className="fa fa-plus text-success" />
        </div>
        <div>
          <h5 className="text-grey">$20.00</h5>
        </div>
        <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger" /></div>
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
        <div className="mr-1"><img className="rounded" src="https://i.imgur.com/XiFJkhI.jpg" width={70} /></div>
        <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">Basic T-shirt</span>
          <div className="d-flex flex-row product-desc">
            <div className="size mr-1"><span className="text-grey">Size:</span><span className="font-weight-bold">&nbsp;M</span></div>
            <div className="color"><span className="text-grey">Color:</span><span className="font-weight-bold">&nbsp;Grey</span></div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center qty"><i className="fa fa-minus text-danger" />
          <h5 className="text-grey mt-1 mr-1 ml-1">2</h5><i className="fa fa-plus text-success" />
        </div>
        <div>
          <h5 className="text-grey">$20.00</h5>
        </div>
        <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger" /></div>
      </div>
    </div>
  </div>
</div>

      <div className="container-fluid pt-5">
        <form className="mb-5" action>
          <div className="input-group">
            <input type="text" className="form-control p-4" placeholder="Coupon Code" />
            <div className="input-group-append">
              <button className="btn btn-warning">Apply Coupon</button>
            </div>
          </div>
        </form>
        <div className="card border-secondary mb-5">
          <div className="card-header bg-secondary border-0">
            <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between mb-3 pt-1">
              <h6 className="font-weight-medium">Subtotal</h6>
              <h6 className="font-weight-medium">$150</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6 className="font-weight-medium">Shipping</h6>
              <h6 className="font-weight-medium">$10</h6>
            </div>
          </div>
          <div className="card-footer border-secondary bg-transparent">
            <div className="d-flex justify-content-between mt-2">
              <h5 className="font-weight-bold">Total</h5>
              <h5 className="font-weight-bold">$160</h5>
            </div>
            <button className="btn btn-block btn-warning my-3 py-3">Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Cart End */}
  </div>

  )
}
