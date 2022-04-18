import './CtegoryPreview-Style.js'
import ProductCard from '../product-card/ProductCard' 
import { Link } from 'react-router-dom'
import {CategoryPreviewContainer , Preview , CategoryTitlePreview} from './CtegoryPreview-Style'

const CtegoryPreview = ({category , products})=>{
    return(
        <CategoryPreviewContainer>
            <h2>
                <CategoryTitlePreview to={category} className='category-title-preview'>{category.toUpperCase()}</CategoryTitlePreview>
            </h2>
            <Preview>
                {
                    products.filter((_, idx)=> idx < 4).map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}
export default CtegoryPreview