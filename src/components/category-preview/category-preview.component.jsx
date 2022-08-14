import ProductCard from "../../components/product-card/product-card.component";
import { Link } from "react-router-dom";

import { CategoryPreviewContainer } from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => (
  <CategoryPreviewContainer>
    <h2>
      <Link className="title" to={title}>
        {title.toUpperCase()}
      </Link>
    </h2>
    <div className="preview">
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </CategoryPreviewContainer>
);

export default CategoryPreview;
