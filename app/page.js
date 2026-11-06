



"use client";

import { useEffect, useMemo, useState } from "react";

const brands = [
  {
    id: 1,
    name: "Aara Studio",
    state: "Rajasthan",
    city: "Jaipur",
    category: "Fashion",
    price: 2499,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900",
    tagline: "Tradition, reimagined for today.",
    story: "Aara Studio celebrates Indian textiles through contemporary clothing, inspired by the colours, crafts and traditions of Rajasthan.",
    founder: "A sample founder story about the inspiration behind Aara Studio.",
    email: "hello@aarastudio.example",
    products: [
      {
        name: "Signature Collection",
        description: "Contemporary clothing inspired by Indian textiles.",
        image:  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700",
      },
      {
        name: "Everyday Collection",
        description: "Comfortable styles with traditional details.",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700",
      },
    ],
    shippingCountries: ["USA", "United Kingdom", "UAE", "Singapore"],
    languages: ["English", "Hindi"],
    exportInfo: "Contact the brand owner for international shipping enquiries.",
  },
  {
    id: 2,
    name: "Nira Botanics",
    state: "Karnataka",
    city: "Bengaluru",
    category: "Beauty",
    price: 899,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=900",
    tagline: "Rooted in nature. Made with care.",
    story: "Nira Botanics is a sample skincare brand inspired by botanical ingredients and traditional Indian self-care.",
    founder: "A sample founder story about natural ingredients and thoughtful skincare.",
    email: "hello@nirabotanics.example",
    products: [
      {
        name: "Botanical Face Cream",
        description: "A sample skincare product inspired by nature.",
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700",
      },
      {
        name: "Natural Care Set",
        description: "A sample collection for everyday skincare.",
        image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=700",
      },
    ],
    shippingCountries: ["USA", "UAE", "Singapore"],
    languages: ["English", "Kannada", "Hindi"],
    exportInfo: "Contact the brand owner to confirm international orders.",
  },
  {
    id: 3,
    name: "Mitti Form",
    state: "Tamil Nadu",
    city: "Chennai",
    category: "Home & Living",
    price: 1599,
    image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=900",
    tagline: "Handmade objects with a story.",
    story: "Mitti Form celebrates handmade pottery inspired by traditional Indian craftsmanship.",
    founder: "A sample founder story about handmade pottery.",
    email: "hello@mittiform.example",
    products: [
      {
        name: "Earth Collection",
        description: "Handmade pottery inspired by natural forms.",
        image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=700",
      },
      {
        name: "Home Decor",
        description: "Decorative pieces for thoughtful living spaces.",
        image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=700",
      },
    ],
    shippingCountries: ["United Kingdom", "USA", "UAE"],
    languages: ["English", "Tamil"],
    exportInfo: "Contact the brand owner for product availability.",
  },
  {
    id: 5,
    name: "Tantu Collective",
    state: "Gujarat",
    city: "Kutch",
    category: "Craft",
    price: 3200,
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=900",
    tagline: "Woven by heritage.",
    story: "Tantu Collective is a sample textile brand inspired by traditional weaving and embroidery in Kutch.",
    founder: "A sample founder story about preserving traditional textile crafts.",
    email: "hello@tantucollective.example",
    products: [
      {
        name: "Kutch Textiles",
        description: "Textiles inspired by traditional regional patterns.",
        image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=700",
      },
      {
        name: "Handcrafted Collection",
        description: "A collection celebrating Indian craft.",
        image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=700",
      },
    ],
    shippingCountries: ["USA", "United Kingdom", "France"],
    languages: ["English", "Gujarati", "Hindi"],
    exportInfo: "Contact the brand owner for international orders.",
  },
  {
    id: 7,
    name: "Aarvi Jewels",
    state: "Rajasthan",
    city: "Jaipur",
    category: "Jewellery",
    price: 1899,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=900",
    tagline: "Jewellery inspired by heritage.",
    story: "Aarvi Jewels is a sample jewellery brand inspired by traditional Indian designs.",
    founder: "A sample founder story about traditional jewellery design.",
    email: "hello@aarvijewels.example",
    products: [
      {
        name: "Heritage Collection",
        description: "Traditional jewellery inspired by Indian culture.",
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=700",
      },
      {
        name: "Modern Elegance",
        description: "Contemporary jewellery for everyday styling.",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=700",
      },
    ],
    shippingCountries: ["USA", "UAE", "United Kingdom"],
    languages: ["English", "Hindi"],
    exportInfo: "Contact the brand owner for international orders.",
  },
  {
    id: 8,
    name: "Sole Stories",
    state: "Karnataka",
    city: "Mysuru",
    category: "Footwear",
    price: 1499,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900",
    tagline: "Walk with your own story.",
    story: "Sole Stories is a sample footwear brand combining modern designs with traditional craftsmanship.",
    founder: "A sample founder story about handcrafted footwear.",
    email: "hello@solestories.example",
    products: [
      {
        name: "Everyday Collection",
        description: "Comfortable footwear for daily use.",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=700",
      },
      {
        name: "Classic Collection",
        description: "Timeless footwear inspired by Indian design.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700",
      },
    ],
    shippingCountries: ["USA", "Singapore", "UAE"],
    languages: ["English", "Kannada"],
    exportInfo: "Contact the brand owner for international shipping.",
  },
  {
    id: 9,
    name: "The Loom Edit",
    state: "Uttarakhand",
    city: "Dehradun",
    category: "Accessories",
    price: 999,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900",
    tagline: "Little details. Lasting impressions.",
    story: "The Loom Edit is a sample accessories brand inspired by Indian textiles.",
    founder: "A sample founder story about creating accessories inspired by Indian textiles.",
    email: "hello@theloomedit.example",
    products: [
      {
        name: "Handcrafted Bags",
        description: "Bags inspired by traditional Indian textiles.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700",
      },
      {
        name: "Everyday Accessories",
        description: "Accessories designed for everyday use.",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=700",
      },
    ],
    shippingCountries: ["USA", "United Kingdom", "France"],
    languages: ["English", "Hindi"],
    exportInfo: "Contact the brand owner for international orders.",
  },
];

const currencies = {
  INR: { symbol: "₹", rate: 1 },
  USD: { symbol: "$", rate: 0.012 },
  GBP: { symbol: "£", rate: 0.009 },
  AED: { symbol: "د.إ", rate: 0.044 },
  EUR: { symbol: "€", rate: 0.011 },
};

const states = [
  "All States",
  "Karnataka",
  "Rajasthan",
  "Tamil Nadu",
  "Gujarat",
  "Uttarakhand",
];

const categories = [
  "All Categories",
  "Fashion",
  "Beauty",
  "Home & Living",
  "Craft",
  "Jewellery",
  "Footwear",
  "Accessories",
];

export default function Home() {
  const [activePage, setActivePage] = useState("Home");
  const [selectedState, setSelectedState] = useState("All States");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [currency, setCurrency] = useState("INR");
  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [saved, setSaved] = useState(() => {
  if (typeof window !== "undefined") {
    try {
      return JSON.parse(localStorage.getItem("khoj-saved-brands")) || [];
    } catch {
      return [];
    }
  }
  return [];
});
  

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const brandId = Number(params.get("brand"));

    if (brandId) {
      const brand = brands.find((item) => item.id === brandId);
      if (brand) setSelectedBrand(brand);
    }
  }, []);
  useEffect(() => {
  localStorage.setItem("khoj-saved-brands", JSON.stringify(saved));
}, [saved]);

  const filteredBrands = useMemo(() => {
    return brands.filter((brand) => {
      const matchesState =
        selectedState === "All States" || brand.state === selectedState;

      const matchesCategory =
        selectedCategory === "All Categories" ||
        brand.category === selectedCategory;

      const searchableText = [
        brand.name,
        brand.city,
        brand.state,
        brand.category,
        ...brand.products.map((product) => product.name),
      ].join(" ").toLowerCase();

      const matchesSearch = searchableText.includes(search.toLowerCase());

      const matchesSaved =
        activePage !== "Saved Brands" || saved.includes(brand.id);

      return matchesState && matchesCategory && matchesSearch && matchesSaved;
    });
  }, [selectedState, selectedCategory, search, activePage, saved]);

  function formatPrice(price) {
    const selectedCurrency = currencies[currency];
    const converted = price * selectedCurrency.rate;

    return `${selectedCurrency.symbol}${Math.round(
      converted
    ).toLocaleString()}`;
  }

  function toggleSaved(id) {
    setSaved((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  function navigate(page) {
    setActivePage(page);
    setSelectedBrand(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function shareBrand(brand) {
  const shareUrl = `${window.location.origin}${window.location.pathname}?brand=${brand.id}`;

  if (navigator.share) {
    navigator.share({
      title: `${brand.name} | KHOJ GLOBAL`,
      text: `Discover ${brand.name} on KHOJ GLOBAL.`,
      url: shareUrl,
    }).catch(() => {});
  } else if (navigator.clipboard?.writeText) {
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => alert("Brand profile link copied!"))
      .catch(() => window.prompt("Copy this link:", shareUrl));
  } else {
    window.prompt("Copy this brand profile link:", shareUrl);
  }
}

  function filterByState(state) {
    setSelectedState(state);
    setActivePage("Discover");
    setSelectedBrand(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main>
      <nav className="navbar">
        <button className="logo" onClick={() => navigate("Home")}>
          KHOJ<span>.</span>
          <small>GLOBAL</small>
        </button>

        <div className="nav-links">
          {["Home", "Discover", "Brand Stories", "Saved Brands"].map(
            (item) => (
              <button
                key={item}
                className={activePage === item ? "nav-active" : ""}
                onClick={() => navigate(item)}
              >
                {item}
              </button>
            )
          )}
        </div>
      </nav>

      {activePage === "Home" && (
        <>
          <section className="hero">
            <div className="hero-content">
              <p className="eyebrow">INDIA, DISCOVERED DIFFERENTLY</p>

              <h1>
                Discover the
                <br />
                <em>extraordinary</em> in India.
              </h1>

              <p className="hero-description">
                A gateway to India's independent brands, remarkable
                craftsmanship and stories waiting to be discovered
                around the world.
              </p>

              <button
                className="primary-btn"
                onClick={() => navigate("Discover")}
              >
                Explore Indian Brands <span>↗</span>
              </button>

              <div className="hero-note">
                <span>✳</span> Made in India. Shared with the world.
              </div>
            </div>

            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=1200"
                alt="Indian craft and textiles"
              />

              <div className="image-caption">
                <span>THE BEAUTY OF INDIA</span>
                <strong>Rooted in culture. Made for the world.</strong>
              </div>
            </div>
          </section>

          <section className="intro-strip">
            <p>ONE COUNTRY. MANY STORIES.</p>
            <h2>
              Local roots. <em>Global possibilities.</em>
            </h2>
            <p className="intro-text">
              Meet the people, places and ideas behind India's independent brands.
            </p>
          </section>

          <section className="section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">A WORLD OF DISCOVERY</p>
                <h2>
                  Explore by <em>region</em>
                </h2>
              </div>

              <button
                className="text-btn"
                onClick={() => navigate("Discover")}
              >
                View all brands ↗
              </button>
            </div>

            <div className="state-grid">
              {[
                {
                  name: "Karnataka",
                  image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=700",
                },
                {
                  name: "Rajasthan",
                  image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=700",
                },
                {
                  name: "Tamil Nadu",
                  image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=700",
                },
                {
                  name: "Gujarat",
                  image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=700",
                },
              ].map((state) => (
                <button
                  className="state-card"
                  key={state.name}
                  onClick={() => filterByState(state.name)}
                >
                  <img src={state.image} alt={state.name} />
                  <span>{state.name}</span>
                  <b>↗</b>
                </button>
              ))}
            </div>
          </section>

          <section className="featured-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">HANDPICKED DISCOVERIES</p>
                <h2>
                  Meet the <em>makers</em>
                </h2>
              </div>

              <button
                className="text-btn"
                onClick={() => navigate("Discover")}
              >
                Discover more ↗
              </button>
            </div>

            <BrandGrid
              brands={brands.slice(0, 3)}
              formatPrice={formatPrice}
              saved={saved}
              toggleSaved={toggleSaved}
              setSelectedBrand={setSelectedBrand}
            />
          </section>

          <section className="story-banner">
            <div>
              <p className="eyebrow">BEHIND EVERY BRAND</p>
              <h2>
                Every creation
                <br />
                has a <em>story.</em>
              </h2>
              <p>
                Discover the founders, traditions and inspiration behind the products.
              </p>
              <button
                className="light-btn"
                onClick={() => navigate("Brand Stories")}
              >
                Read their stories ↗
              </button>
            </div>
          </section>
        </>
      )}

      {(activePage === "Discover" ||
        activePage === "Saved Brands" ||
        activePage === "Brand Stories") && (
        <section className="discover-page">
          <div className="page-heading">
            <p className="eyebrow">THE INDIA BRAND DIRECTORY</p>

            <h1>
              {activePage === "Saved Brands"
                ? "Your saved discoveries."
                : activePage === "Brand Stories"
                ? "Stories worth sharing."
                : "Find your next discovery."}
            </h1>

            <p>
              Explore independent Indian brands, from local craftsmanship
              to contemporary ideas.
            </p>
          </div>

          {activePage !== "Brand Stories" && (
            <div className="filter-bar">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search brands, places or products..."
              />

              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                {states.map((state) => (
                  <option key={state}>{state}</option>
                ))}
              </select>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>

              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                {Object.keys(currencies).map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
              <button
  type="button"
  className="text-btn"
  onClick={() => {
    setSearch("");
    setSelectedState("All States");
    setSelectedCategory("All Categories");
    setCurrency("INR");
  }}
>
  Reset filters ↺
</button>
            </div>
          )}

          {activePage === "Brand Stories" ? (
            <div className="story-list">
              {brands.map((brand) => (
                <button
                  className="story-row"
                  key={brand.id}
                  onClick={() => setSelectedBrand(brand)}
                >
                  <img src={brand.image} alt={brand.name} />

                  <div>
                    <p className="eyebrow">{brand.state}</p>
                    <h2>{brand.name}</h2>
                    <p>{brand.tagline}</p>
                    <span>Read brand story ↗</span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <>
              <p className="result-count">
                {filteredBrands.length} brands to discover
              </p>

              {filteredBrands.length > 0 ? (
                <BrandGrid
                  brands={filteredBrands}
                  formatPrice={formatPrice}
                  saved={saved}
                  toggleSaved={toggleSaved}
                  setSelectedBrand={setSelectedBrand}
                />
              ) : (
                <div className="empty-state">
                  <h2>
                    {activePage === "Saved Brands"
                      ? "No saved brands yet"
                      : "No brands found"}
                  </h2>

                  <p>
                    {activePage === "Saved Brands"
                      ? "Save your favourite brands to see them here."
                      : "Try another state, category or search."}
                  </p>

                  <button
                    className="primary-btn"
                    onClick={() => {
                      setSearch("");
                      setSelectedState("All States");
                      setSelectedCategory("All Categories");

                      if (activePage === "Saved Brands") {
                        navigate("Discover");
                      }
                    }}
                  >
                    {activePage === "Saved Brands"
                      ? "Discover brands"
                      : "Clear filters"}
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      )}
      
<section className="contact-section">
  <div className="contact-content">
    <p className="eyebrow">LET'S CONNECT</p>

    <h2>
      Have a question? <em>Talk to us.</em>
    </h2>

    <p>
      Interested in discovering Indian brands or collaborating
      with KHOJ GLOBAL? We'd love to hear from you.
    </p>

    <a
      href="mailto:contact@khojglobal.example"
      className="primary-btn"
    >
      Contact Us ↗
    </a>
  </div>
</section>

<button
  className="back-to-top"
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
>
  ↑ Back to top
</button>


      <footer className="footer">
        <div>
          <button className="logo footer-logo" onClick={() => navigate("Home")}>
            KHOJ<span>.</span>
            <small>GLOBAL</small>
          </button>

          <p>Discover India. Connect with the world.</p>
        </div>

        <div className="footer-right">
          <span>MADE WITH ♥ IN INDIA</span>
          <span>© 2026 KHOJ GLOBAL · DEMO PROJECT</span>
        </div>
      </footer>

      {selectedBrand && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedBrand(null)}
        >
          <div
            className="brand-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setSelectedBrand(null)}
            >
              ×
            </button>

            <img
              className="modal-image"
              src={selectedBrand.image}
              alt={selectedBrand.name}
            />

            <div className="modal-content">
              <p className="eyebrow">
                {selectedBrand.city}, {selectedBrand.state}
              </p>

              <h2>{selectedBrand.name}</h2>
              <p className="modal-tagline">{selectedBrand.tagline}</p>

              <h3>The story behind the brand</h3>
              <p>{selectedBrand.story}</p>

              <h3 className="modal-section-title">Founder</h3>
              <p>{selectedBrand.founder}</p>

              <h3 className="modal-section-title">
                Products & Collections
              </h3>

              <div className="product-gallery">
                {selectedBrand.products.map((product, index) => (
                  <div className="product-item" key={index}>
                    <img src={product.image} alt={product.name} />
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                  </div>
                ))}
              </div>

              <div className="price-line">
                <span>Starting price</span>
                <strong>{formatPrice(selectedBrand.price)}</strong>
              </div>

              <p className="small-note">
                Approximate currency conversion for demonstration.
                Confirm final prices, shipping and customs charges with the brand.
              </p>

              <h3 className="modal-section-title">
                International Information
              </h3>

              <div className="international-info">
                <div>
                  <strong>Shipping countries</strong>
                  <p>{selectedBrand.shippingCountries.join(", ")}</p>
                </div>

                <div>
                  <strong>Languages supported</strong>
                  <p>{selectedBrand.languages.join(", ")}</p>
                </div>

                <div>
                  <strong>Export information</strong>
                  <p>{selectedBrand.exportInfo}</p>
                </div>
              </div>

              <a
                className="primary-btn contact-link"
                href={`mailto:${selectedBrand.email}?subject=${encodeURIComponent(
                  `Enquiry about ${selectedBrand.name}`
                )}`}
              >
                Contact brand owner ↗
              </a>

              <p className="small-note">
                Demo contact email. Replace it with the real owner's email
                before publishing.
              </p>

              <button
                className="share-btn"
                onClick={() => shareBrand(selectedBrand)}
              >
                ↗ Share this brand profile
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function BrandGrid({
  brands,
  formatPrice,
  saved,
  toggleSaved,
  setSelectedBrand,
}) {
  return (
    <div className="brand-grid">
      {brands.map((brand) => (
        <article className="brand-card" key={brand.id}>
          <div className="brand-image-wrap">
            <img src={brand.image} alt={brand.name} />

            <button
              className={`save-btn ${
                saved.includes(brand.id) ? "is-saved" : ""
              }`}
              onClick={() => toggleSaved(brand.id)}
              aria-label={
                saved.includes(brand.id)
                  ? "Remove saved brand"
                  : "Save brand"
              }
              aria-pressed={saved.includes(brand.id)}
            >
              {saved.includes(brand.id) ? "♥" : "♡"}
            </button>

            <span className="category-tag">{brand.category}</span>
          </div>

          <div className="brand-card-content">
            <p className="brand-location">
              {brand.city}, {brand.state}
            </p>

            <h3>{brand.name}</h3>

            <p className="brand-tagline">{brand.tagline}</p>

            <div className="card-bottom">
              <span>
                From <strong>{formatPrice(brand.price)}</strong>
              </span>

              <button onClick={() => setSelectedBrand(brand)}>
                Explore ↗
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
