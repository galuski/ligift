import ProductCard from '../productcard/ProductCard';
import styles from './CategorySection.module.css';

export default function CategorySection({ categoryName, products }) {
  return (
    <section id={`category-${categoryName}`} className={styles.categorySection}>
      <div className={styles.categoryHeader}>
        <h2 className={styles.categoryTitle}>{categoryName}</h2>
        <span className={styles.itemCount}>{products.length} מוצרים</span>
      </div>

      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            priority={index < 4} 
          />
        ))}
      </div>
    </section>
  );
}