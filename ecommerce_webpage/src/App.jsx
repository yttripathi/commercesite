import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Product from "./components/Product.jsx";
import "./App.css";

function Home() {
  return (
    <section className="page">
      <p className="eyebrow">WELCOME TO OUR STORE</p>
      <h2>Find your everyday favourites</h2>
      <p>Explore useful products at prices you'll love.</p>
      <div className="home-actions">
        <a className="primary-link" href="/product">Explore Products</a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="page">
      <p className="eyebrow">OUR STORY</p>
      <h2>About Us</h2>
      <p>
        Welcome to our E-commerce Webpage. We aim to make discovering
        everyday products simple, convenient, and enjoyable.
      </p>
    </section>
  );
}

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you! Your message has been submitted.");
    event.currentTarget.reset();
  }

  return (
    <section className="page">
      <p className="eyebrow">WE'RE HERE TO HELP</p>
      <h2>Contact Us</h2>
      <p>Send us a message using the form below.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Your name
          <input type="text" name="name" placeholder="Enter your name" required />
        </label>
        <label>
          Email address
          <input type="email" name="email" placeholder="Enter your email" required />
        </label>
        <label>
          Message
          <textarea name="message" placeholder="How can we help?" rows="4" required />
        </label>
        <button type="submit">Submit Message</button>
      </form>
    </section>
  );
}

function NotFound() {
  return (
    <section className="page">
      <h2>Page not found</h2>
      <p>Please use the navigation menu to choose a page.</p>
    </section>
  );
}

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    fetch("/products.json")
      .then((response) => {
        if (!response.ok) throw new Error("Could not load products.");
        return response.json();
      })
      .then((data) => setProducts(data.products ?? []))
      .catch(() => setLoadError("Products could not be loaded. Please restart the dev server."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/product"
              element={
                loading ? (
                  <section className="page"><p>Loading products...</p></section>
                ) : loadError ? (
                  <section className="page"><p>{loadError}</p></section>
                ) : (
                  <Product products={products} />
                )
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;