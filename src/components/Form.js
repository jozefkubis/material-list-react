import React from "react"
import { useMaterialList } from "../contexts/MaterialListContext"

const Form = () => {
  const { setSearchingItem, searchingItem, setFilteredItems, setPrintedItems } =
    useMaterialList()

  return (
    <div>
      <form className="form">
        <input
          className="searching-input"
          onClick={() => {
            setFilteredItems([])
            setSearchingItem("")
          }}
          type="text"
          placeholder="Search for item"
          value={searchingItem}
          onChange={(e) => setSearchingItem(e.target.value)}
        />
        <input
          className="deleteAll-btn"
          type="submit"
          value="DeleteAll"
          onClick={() => setPrintedItems([])}
        />
      </form>
    </div>
  )
}

export default Form
