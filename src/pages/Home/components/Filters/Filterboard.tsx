import React, { useState } from 'react';

interface FiltersInterface {
    initialFilter?: (keyof typeof colorTypes)[]
}

export const Filters: React.FC<FiltersInterface> = ({ initialFilter }) => {
    const [filter, setFilter] = useState(initialFilter || []);

  return (
    <div>Filters</div>
  )
}