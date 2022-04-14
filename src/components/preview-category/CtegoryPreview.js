import './CtegoryPreview.scss'
import ProductCard from '../product-card/ProductCard' 
import { Link } from 'react-router-dom'

const CtegoryPreview = ({category , products})=>{
    return(
        <div className='category-preview-container'>
            <h2>
                <Link to={category} className='category-title-preview'>{category.toUpperCase()}</Link>
            </h2>
            <div className='preview'>
                {
                    products.filter((_, idx)=> idx < 4).map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    )
}
export default CtegoryPreview