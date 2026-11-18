import styles from './Sidebar.module.css';

export default function Sidebar({ categories }) {
  const scrollToCategory = (categoryName) => {
    const element = document.getElementById(`category-${categoryName}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className={styles.sidebarArea}>
      {/* הדיב הפנימי הזה הוא מה שיישאר דבוק למסך */}
      <div className={styles.stickyContainer}>
        <h3 className={styles.sidebarTitle}>תוכן עניינים</h3>
        <ul className={styles.categoryList}>
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => scrollToCategory(cat)}
                className={styles.categoryButton}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}