import { createContext, useContext, useState, useEffect } from "react"
import materialArr from "../data"

const MaterialListContext = createContext()

function MaterialListProvider({ children }) {
  const [searchingItem, setSearchingItem] = useState("")
  const [filteredItems, setFilteredItems] = useState([])
  const [printedItems, setPrintedItems] = useState([])

  const itemsOnPage = (e) => {
    if (!filteredItems) return
    setPrintedItems((printedItems) => {
      return [...printedItems, e.target.innerText]
    })
  }

  useEffect(() => {
    const itemsAfterFilter = materialArr.filter((items) => {
      return items.toLowerCase().includes(searchingItem.toLowerCase())
    })
    setFilteredItems(itemsAfterFilter)
  }, [searchingItem])

  return (
    <MaterialListContext.Provider
      value={{
        searchingItem,
        setSearchingItem,
        filteredItems,
        setFilteredItems,
        printedItems,
        setPrintedItems,
        itemsOnPage,
      }}
    >
      {children}
    </MaterialListContext.Provider>
  )
}

function useMaterialList() {
  const context = useContext(MaterialListContext)
  if (context === undefined) {
    throw new Error(
      "useMaterialList must be used within a MaterialListProvider"
    )
  }
  return context
}

export { useMaterialList, MaterialListProvider }
