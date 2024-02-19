import { Filters, colorTypes } from '@/models';
import { capitalizeFirstLetterOfString } from '@/utils';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FilterboardInterface {
  initialFilter?: Filters;
}

const Filterboard: React.FC<FilterboardInterface> = ({ initialFilter }) => {
  const navigate = useNavigate();

  const [filterType, setFilterType] = useState(initialFilter?.type || []);

  const pokemonTypes = Object.keys(colorTypes) as (keyof typeof colorTypes)[];

  // Handlers
  function handleFilterType(type: keyof typeof colorTypes) {
    if (filterType.includes(type)) {
      setFilterType(filterType.filter((t) => t !== type));
    } else {
      setFilterType((prevState) => ([...prevState, type]));
    }
  };

  function handleApplyFilters() {
    if (filterType.length > 0 && filterType !== initialFilter?.type) {
      let queryParams = new URLSearchParams();
      queryParams.append('type', filterType.join('|'));

      return navigate(`/?${queryParams}`);
    };
  };

  function handleResetFilters() {
    if (filterType.length > 0) {
      setFilterType([]);
      return navigate('/');
    };
  };

  return (
    <div className="w-full my-6 flex flex-col gap-4 justify-between sm:flex-row items-end sm:items-start">
      <ul role="list" className="w-full max-w-[700px] flex gap-2.5 items-center flex-wrap">
        <li role="option" className={`relative text-sm rounded-full py-1 px-2 border border-[#ddd] cursor-pointer ${filterType.length === 0 ? 'bg-[#ffffff7a]' : ''}`} onClick={() => setFilterType([])}>
          <span>All</span>
        </li>

        {
          pokemonTypes.map((type: keyof typeof colorTypes, index: number) => {
            const activeBackground = `bg-[${colorTypes[type]}]`;

            return (
              <li role="option" key={index} className={`relative text-sm rounded-full py-1 px-2 border border-[#ddd] ${filterType.includes(type) ? activeBackground : ''}`}>
                <input
                  id={type}
                  name={type}
                  type="checkbox"
                  checked={filterType.includes(type)}
                  onChange={() => handleFilterType(type)}
                  className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
                />
                <label htmlFor={type}>
                  {capitalizeFirstLetterOfString(type)}
                </label>
              </li>
            )
          })
        }
      </ul>

      <div className="w-full max-w-[248px] flex flex-row sm:flex-col sm:max-w-[118px] md:flex-row md:max-w-[248px] gap-3 items-center">
        <button
          role="button"
          className="flex items-center gap-1.5 rounded-md text-sm py-1 px-2 border border-[#ddd] active:scale-95"
          onClick={handleResetFilters}
        >
          <div className="size-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M13.758 19.414l-4.758 1.586v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v1.5" />
              <path d="M22 22l-5 -5" />
              <path d="M17 22l5 -5" />
            </svg>
          </div>

          Reset Filters
        </button>

        <button
          role="button"
          className="flex items-center gap-1.5 rounded-md text-sm py-1 px-2 border border-[#ddd] bg-[#505050] transition-all hover:bg-[#606060] active:scale-95"
          onClick={handleApplyFilters}
        >
          <div className="size-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M4 6l8 0" />
              <path d="M16 6l4 0" />
              <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M4 12l2 0" />
              <path d="M10 12l10 0" />
              <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M4 18l11 0" />
              <path d="M19 18l1 0" />
            </svg>
          </div>

          Apply filters
        </button>
      </div>
    </div>
  )
}

export default Filterboard