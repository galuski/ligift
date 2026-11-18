import Papa from 'papaparse';
import CatalogGrid from '@/components/cataloggrid/CatalogGrid';
import styles from './page.module.css';

async function getGroupedCatalogData() {
  const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_HkxIg-iCbT7tllwhJWyJM0jP4Z3s1ERlUu47wntqVUIGqnHDhGBGRg0bLy0woXmWiOSLB-WrOI2p/pub?gid=0&single=true&output=csv';
  
  const response = await fetch(sheetUrl, { next: { revalidate: 60 } });
  const csvText = await response.text();
  const parsed = Papa.parse(csvText, { header: true });
  
  // קיבוץ לפי קטגוריות
  const groupedData = parsed.data.reduce((acc, product) => {
    if (!product.id) return acc; 
    
    const category = product.category || 'כללי';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return groupedData;
}

// Server Component
export default async function CatalogPage() {
  const catalogGroups = await getGroupedCatalogData();

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.logoname}>Ligift</h1>
        <h2 className={styles.mainTitle}>קולקציית המוצרים</h2>
        <h3 className={styles.subtitle}>קטלוג דיגיטלי 2026</h3>
      </header>

      {/* קריאה לקומפוננטה הנפרדת והעברת הנתונים */}
      <main>
        <CatalogGrid groupedData={catalogGroups} />
      </main>
    </div>
  );
}