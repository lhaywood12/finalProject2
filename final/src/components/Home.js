import React from 'react'

const Home  =()=> {
    return (
    <main style={{padding: '1rem 0'}}>

        <section className="carousel-section">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://img.joomcdn.net/8dac47ea69a4ff290d6b1c6e96eb655862efe107_1024_1024.jpeg" class="d-block w-100" alt="img-fluid"/>      
                    
                        <div className="home-text">
                            <p>We have keychains that will add the creepy and spooky your Halloween!</p>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img src="https://img.tttcdn.com/product/xy/2000/2000/p/gu1/H/1/H44231-1/H44231-1-1-5660-8B7J.jpg" class="d-block w-100" alt="img-fluid"/>
                    
                        <div className="home-text">
                            <p>We have keychains that will bring the cheer and joy to your Christmas!</p>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img src="https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/light-up-easter-keychains-12-pc-~13936615" class="d-block w-100" alt="img-fluid"/>
                    
                        <div className="home-text">
                            <p>We have keychains that will bring more eggs and chocolate to your Easter!</p>
                        </div>
                    </div>
                </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>

                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
        </section>
   
        <section className="home-section">
            <div>
                <div className="home-picture">
                    <div className="home-img">
                        <img src="https://s7.orientaltrading.com/is/image/OrientalTrading/13961670?$PDP_VIEWER_IMAGE$" class="placeholder img" alt="img-fluid"/>
                    </div>

                    <div className="home-img">                    
                        <img src="https://s7.orientaltrading.com/is/image/OrientalTrading/FXBanner_808/light-up-halloween-keychains-12-pc-~13810915-a01.jpg" class="placeholder img" alt="img-fluid"/>
                    </div>

                    <div className="home-img">
                        <img src="https://www.claires.com/dw/image/v2/BBTK_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9d7979ac/images/hi-res/43510_1.jpg?sw=2000&sh=2000&sm=fit" class="placeholder img" alt="img-fluid"/>
                    </div>

                    <div className="home-img">
                        <img src="https://www.dhresource.com/0x0/f2/albu/g10/M01/93/53/rBVaVl1bvWKABAqWAAoQ8cljJys222.jpg" class="placeholder img" alt="img-fluid"/>
                    </div>
                </div>

                <div>
                    <p className="home-text1">No matter what what time the year it is. No matter was season it is. We have keychains that will suit all your taste to bring more life to your keys.</p>
                </div>
            </div>
        </section>

        <footer className="main-footer" id="footer">
            <div className="footer">
                <ul className="footer-list">
                    <li className="footer-item">Contact
                        <p>601-815-8623</p>
                    </li>

                    <li className="footer-item">Email
                        <p>lawrenciya@mscodingacademies.org</p>
                    </li>
                </ul>
            </div>
        </footer>
    </main>
    )
}

export default Home