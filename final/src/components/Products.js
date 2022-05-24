import React from 'react'
import {Link} from 'react-router-dom'
import ProductCard from './ProductCard'


const Products =(props)=> {
    let productData=props.data

        const productElement=productData.map(product=>{
            return(
                <ProductCard
                key={product.id} 
                data={product}/>
            )
        })
    return  (
        <main style={{padding: '1rem 0'}}>

            <nav className="p-nav">
                <ul className="p-list">
                   <li className="p-item"><Link to='valentine'>Valentine Keychains</Link></li>
                   <li className="p-item"><Link to='easter'>Easter Keychains</Link></li>
                   <li className="p-item"><Link to='halloween'>Halloween Keychains</Link></li>
                   <li className="p-item"><Link to='christmas'>Christmas Keychains</Link></li>
                   <li className="p-item"><Link to='birthday'>Birthday Keychains</Link></li>
                   <li className="p-item"><Link to ='mardigras'>Mardi Gras Keychains</Link></li>
                   <li className="p-item"><Link to='patrick'>St. Patrick Keychains</Link></li>
                   <li className="p-item"><Link to='animal'>Animal Keychains</Link></li> 
                </ul>
            </nav>

         

            

    <section className="product-section">
        
            <div className="m-product-img">
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXg3qFp0jR-yaVxB5F0l6Fa58FNb6arrQvOQ&usqp=CAU" className="placeholder img" alt="img-fluid"/>
                </div>

                <div>
                    <img src="https://i5.walmartimages.com/asr/fd7feac2-ad0f-4ed5-841d-29c39279f23f.55d0427416c281e55c27eebaa39d658c.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF"  className="placeholder" alt="img-fluid"/>
                </div>
            </div>

            <div>
                <p className="product-text">Take your pick and choose from our wide variety of keychains! May they bring a whole new life to your bland keys!</p>
            </div>
                    
    
            <ul className="products-list">
                <div className="container">
                    <div className="row">
                        <div>
                            <h2 className="product-name">All Keychains</h2>
                        </div>

                        {productElement}
                    </div>

                </div>
            </ul>
        </section>
        </main>
        )
    }
export default Products