import { createContext, useContext, useState } from "react";
import "./ServeYou.css";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

const CartContext = createContext();


const Home = () => (
    <div className="page-content">
        <div className="title-section">
            <h1>Welcome to Your App</h1>
            <p>
                This is your main title area where you can showcase your app's
                primary message, value proposition, or key features. Customize
                this space to match your brand and vision.
            </p>
        </div>

        <div className="content-area">
            <div className="content-card">
                <h3>Feature One</h3>
                <p>
                    Describe your first key feature or service here. This card-based
                    layout makes it easy to highlight different aspects of your application.
                </p>
            </div>
            <div className="content-card">
                <h3>Feature Two</h3>
                <p>
                    Add details about another important feature. The responsive grid
                    layout ensures your content looks great on all devices.
                </p>
            </div>
            <div className="content-card">
                <h3>Feature Three</h3>
                <p>
                    Highlight a third feature or benefit. These cards can be easily
                    customized or replaced with your React components.
                </p>
            </div>
        </div>
    </div>
);

const About = () => (
    <div className="page-content">
        <div className="title-section">
            <h1>About Us</h1>
            <p>
                Learn more about our company, mission, and the team behind this amazing application.
            </p>
        </div>

        <div className="content-area">
            <div className="content-card">
                <h3>Our Mission</h3>
                <p>
                    We're dedicated to creating innovative solutions that make a difference
                    in people's lives. Our mission is to build technology that empowers users
                    and solves real-world problems.
                </p>
            </div>
            <div className="content-card">
                <h3>Our Team</h3>
                <p>
                    Our diverse team of experts brings together years of experience in
                    technology, design, and business to deliver exceptional results.
                </p>
            </div>
        </div>
    </div>
);

const Services = () => {
    const { cartValue, setCartValue } = useContext(CartContext);
    return (
        <div className="page-content">
            <div className="title-section">
                <h1>Take Order</h1>
                <p>
                    Place order
                    <button onClick={() => addCart(100, { cartValue, setCartValue })}>Pizza</button>
                    <button onClick={() => addCart(200, { cartValue, setCartValue })}>Burger</button>
                    <button onClick={() => addCart(10, { cartValue, setCartValue })}>Coffee</button>
                </p>
                <p>{cartValue}</p>

            </div>

            <div className="content-area">
                <div className="content-card">
                    <h3>Web Development</h3>
                    <p>
                        Custom web applications built with modern technologies like React,
                        Node.js, and cloud platforms for scalability and performance.
                    </p>
                </div>
                <div className="content-card">
                    <h3>Mobile Apps</h3>
                    <p>
                        Native and cross-platform mobile applications that provide seamless
                        user experiences across iOS and Android devices.
                    </p>
                </div>
                <div className="content-card">
                    <h3>Consulting</h3>
                    <p>
                        Strategic technology consulting to help you make informed decisions
                        and implement the right solutions for your business needs.
                    </p>
                </div>
            </div>
        </div>
    );
}

function addCart(value, { cartValue, setCartValue }) {
    setCartValue(cartValue + value)

}

const Contact = () => (
    <div className="page-content">
        <div className="title-section">
            <h1>Contact Us</h1>
            <p>
                Get in touch with us. We'd love to hear from you and discuss how we can help.
            </p>
        </div>

        <div className="content-area">
            <div className="content-card">
                <h3>Email</h3>
                <p>
                    <a href="mailto:hello@yourapp.com" style={{ color: 'white', textDecoration: 'underline' }}>
                        hello@yourapp.com
                    </a>
                </p>
            </div>
            <div className="content-card">
                <h3>Phone</h3>
                <p>
                    <a href="tel:+1234567890" style={{ color: 'white', textDecoration: 'underline' }}>
                        +1 (234) 567-8900
                    </a>
                </p>
            </div>
            <div className="content-card">
                <h3>Address</h3>
                <p>
                    123 Tech Street<br />
                    Innovation City, IC 12345<br />
                    United States
                </p>
            </div>
        </div>
    </div>
);

// Header component with navigation
const Header = () => {
    const location = useLocation();
    return (
        <header>
            <div className="header-content">
                <Link to="/" className="logo">Serve You</Link>
                <nav>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className={location.pathname === '/' ? 'active' : ''}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={location.pathname === '/about' ? 'active' : ''}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                className={location.pathname === '/services' ? 'active' : ''}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className={location.pathname === '/contact' ? 'active' : ''}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

// Footer component
const Footer = () => (
    <footer>
        <div className="footer-content">
            <p>&copy; 2025 Your App Name. All rights reserved.</p>
            <div className="social-links">
                <a href="#" title="Twitter">🐦</a>
                <a href="#" title="LinkedIn">💼</a>
                <a href="#" title="GitHub">🐱</a>
                <a href="#" title="Email">📧</a>
            </div>
        </div>
    </footer>
);

// Layout component that wraps all pages
const Layout = ({ children }) => {
    const [cartValue, setCartValue] = useState(0);

    return (
        <div className="app">
            {/* Animated background elements */}
            <div className="bg-decoration"></div>
            <div className="bg-decoration"></div>
            <div className="bg-decoration"></div>

            <div className="container">
                <Header />
                <main>
                    <div className="main-content">
                        <CartContext.Provider value={{ cartValue, setCartValue }}>
                            {children}
                        </CartContext.Provider>
                    </div>

                </main>
                <Footer />
            </div>
        </div>
    )
}

const ServeYou = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default ServeYou;