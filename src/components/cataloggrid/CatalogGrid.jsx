"use client";

import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import SearchBar from '../searchbar/SearchBar';
import CategorySection from '../categorysection/CategorySection';
import styles from './CatalogGrid.module.css';

export default function CatalogGrid({ groupedData }) {
  const [searchQuery, setSearchQuery] = useState('');

  const categoriesList = Object.keys(groupedData);

  const filteredGroups = Object.entries(groupedData).reduce((acc, [categoryName, products]) => {
    const query = searchQuery.toLowerCase();
    const isCategoryMatch = categoryName.toLowerCase().includes(query);
    const matchingProducts = isCategoryMatch
      ? products
      : products.filter(product => product.title.toLowerCase().includes(query));

    if (matchingProducts.length > 0) {
      acc[categoryName] = matchingProducts;
    }

    return acc;
  }, {});

  return (
    <div className={styles.layoutContainer}>
      <Sidebar categories={categoriesList} />

      <div className={styles.mainContent}>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {Object.keys(filteredGroups).length === 0 && (
          <div className={styles.noResults}>
            לא נמצאו תוצאות עבור "{searchQuery}"
          </div>
        )}

        {Object.entries(filteredGroups).map(([categoryName, products]) => (
          <CategorySection 
            key={categoryName} 
            categoryName={categoryName} 
            products={products} 
          />
        ))}
      </div>
    </div>
  );
}