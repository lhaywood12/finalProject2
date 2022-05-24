import React from 'react'
import {Link} from 'react-router-dom'
import ProductCard from './ProductCard'
import Single from './Single'

const Valentine = (props) => {

    const keyChainData = props.data.filter(product => {
        return product.keychain_type === 'valentine'
    }).map(item => {
        return (
            <ProductCard  
                key={item.id}
                data={item}
            />
        )
    })
    
    return (
        <main style={{ padding: '1rem 0' }}>
            <div className="p-choose">
                <div className="container">
                    <div className="row">
                        <div>
                            <h2 className="product-item">Valentine Keychains</h2>
                        </div>

                    {keyChainData}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Valentine