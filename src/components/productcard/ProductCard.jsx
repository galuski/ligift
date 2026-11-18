import Image from 'next/image';
import styles from './ProductCard.module.css';

export default function ProductCard({ product, priority }) {
  return (
    <div className={styles.productCard}>

      {/* עמודה 1: טקסט ומחיר (ימין) */}
      <div className={styles.textColumn}>

        {/* עטיפה חדשה לכותרת וליחידת המידה */}
        <div className={styles.titleWrapper}>
          <h3 className={styles.productName}>{product.title}</h3>
          {product.unit && (
            <span className={styles.unit}>{product.unit}</span>
          )}
        </div>

        {product.description && (
          <p className={styles.productDescription}>{product.description}</p>
        )}

        {/* המחיר הועבר לכאן */}
        {product.price && (
          <div className={styles.priceContainer}>
            <span className={styles.productPrice}>{product.price}</span>
          </div>
        )}
      </div>

      {/* עמודה 2: אזור הטבלה (אמצע) - נשאר ריק כדי לשמור מקום בגריד */}
      <div className={styles.tableColumn}>
        {/* כאן תיכנס טבלת הכמויות והמחירים בעתיד */}
      </div>

      {/* עמודה 3: אזור תמונה ותגית (שמאל) */}
      <div className={styles.imageColumn}>
        {product.sku && (
          <div className={styles.skuBadge}>
            {product.sku}
          </div>
        )}

        <div className={styles.imageWrapper}>
          {product.imageUrl && (
            <Image
              src={product.imageUrl}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.optimizedImage}
              priority={priority}
            />
          )}
        </div>
      </div>

    </div>
  );
}