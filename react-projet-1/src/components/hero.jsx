const Hero = () => {

    return(
        <main className="hero container">
            <div>
                <div className="hero-content">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                </div>
                <div className="hero-button">
                        <button className="first-btn">Shop Now</button>
                        <button className="secondary-btn">Category</button>
                </div>
                <div className="hero-shop">
                        <p>Also Available On</p>
                        <div className="hero-shops-images">
                            <img className="amazon-icon" src="/images/amazon.png" alt="amazon_image" />
                            <img src="/images/flipkart.png" alt="flipkart_image" />
                        </div>
                </div>


            </div>
            <div className="hero-image">
                    <img className="nike-shoe" src="/images/shoe_image.png" alt="nike_shoe" />
            </div>
        </main>
    );
}

export default Hero;