import React from 'react';// Assuming you have a CSS file for styles

const ProductDetails = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>
              <img src="images/men.jpg" className="w-100" alt="Men's T-Shirt" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="values">
              <h6 className="text-danger">Men</h6>
              <h4>VINCENT VAN GOGH T-SHIRT</h4>

              <div className="d-flex py-2">
                <div>
                  <h5 className="text-danger">$39.85</h5>
                  <h5 className="text-success fs-6">In Stock</h5>
                </div>
                <div>
                  <span className="fs-6" style={{ textDecoration: 'line-through' }}>$49.25</span>
                </div>
              </div>

              <div className="py-2">
                <h6>
                  Plus size t shirts features short sleeve, v neck, stripes design, bring a casual yet stylish look,
                  you will be powerless to resist its charm.
                </h6>
              </div>

              <div className="d-flex py-2">
                <h6 className="border p-3">
                  <span className="px-2"><b>-</b></span>
                  <span className="px-2"><b>1</b></span>
                  <span className="px-2"><b>+</b></span>
                </h6>
                <a href="/" className="text-decoration-none w-100">
                  <h6 className="border border-danger bg-danger text-center text-white p-3">
                    <span>Proceed to Checkout</span>
                  </h6>
                </a>
              </div>

              <div className="d-flex align-items-center py-2">
                <div className="d-flex">
                  <i className="bi bi-bounding-box pe-2"></i>
                  <h6>Size guide</h6>
                </div>
                <div className="d-flex ms-2">
                  <i className="bi bi-heart pe-2"></i>
                  <h6>Add to wishlist</h6>
                </div>
              </div>

              <div className="py-2">
                <div className="d-flex border p-3">
                  <i className="bi bi-truck pe-2"></i>
                  <h6>Free Shipping & Returns on this item</h6>
                </div>

                <div className="d-flex border p-3">
                  <i className="bi bi-box-seam pe-2"></i>
                  <h6>Delivery within 3-5 working days</h6>
                </div>

                <div className="d-flex border p-3">
                  <i className="bi bi-shield pe-2"></i>
                  <h6>Money Back Guarantee</h6>
                </div>
              </div>

              <div className="names py-2">
                <h6>Categories:
                  <a href="/" className="text-decoration-none"><span className="text-dark">Men</span></a>,
                  <a href="/" className="text-decoration-none"><span className="text-dark">T-shirts</span></a>
                </h6>
              </div>

              <div className="py-2">
                <h6>Share this product:</h6>
                <a href="/"><i className="bi bi-facebook fs-5 px-1"></i></a>
                <a href="/"><i className="bi bi-youtube fs-5 px-1"></i></a>
                <a href="/"><i className="bi bi-linkedin fs-5 px-1"></i></a>
                <a href="/"><i className="bi bi-pinterest fs-5 px-1"></i></a>
                <a href="/"><i className="bi bi-twitter fs-5 px-1"></i></a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
