function Product({ products = [] }) {
  if (products.length === 0) {
    return (
      <section className="page">
        <h2>Products</h2>
        <p>No products are available right now.</p>
      </section>
    );
  }

  return (
    <section className="page products-page">
      <p className="eyebrow">OUR COLLECTION</p>
      <h2>Products</h2>
      <div className="product-container">
        {products.map((item) => (
          <article className="product-card" key={item.id}>
            <div className="product-image-wrap">
              <img src={item.image} alt={item.name} loading="lazy" />
            </div>
            <div className="product-info">
              <h3>{item.name}</h3>
              <p className="price">₹{item.price}</p>
              <button
                type="button"
                onClick={() => alert(`${item.name} selected!`)}
              >
                Buy Now
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Product;