import React from "react"
import { useMaterialList } from "../contexts/MaterialListContext"

const FilteredItems = () => {
  const { filteredItems, itemsOnPage, searchingItem } = useMaterialList()

  return (
    <div>
      <div className="filtered-items">
        {filteredItems.map((oneItem, index) => {
          return searchingItem ? (
            <button
              className="filtered-items-btn"
              onClick={itemsOnPage}
              key={index}
            >
              {oneItem.toLowerCase()}
            </button>
          ) : null
        })}
      </div>
    </div>
  )
}

export default FilteredItems
