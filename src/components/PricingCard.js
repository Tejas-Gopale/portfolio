import { Link } from "react-router-dom";
import "./PricingCardStyle.css";

import React from 'react'

export const PricingCard = () => {
  return (
   <div className="pricing">
        <div className="card-container">
            {/* card 1 */}
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">$ 51</p>
                <p>- 5 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Features -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>

            {/* Card 2 */}
            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc">$ 151</p>
                <p>- 3 Days -</p>
                <p>- 5 Pages -</p>
                <p>- Features -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>

            {/* card 3 */}
            <div className="card">
                <h3>- Bussiness -</h3>
                <span className="bar"></span>
                <p className="btc">$ 500</p>
                <p>- 5 Days -</p>
                <p>- 8 Pages -</p>
                <p>- Features -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
        </div>
   </div>
  )
}
