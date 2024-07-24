import materialArr from "./data"
import { useState, useEffect } from "react"

const App = () => {
  const [searchingItem, setSearchingItem] = useState("")
  const [filteredItems, setFilteredItems] = useState([])
  const [printedItems, setPrintedItems] = useState([])

  // ..................................................................

  const itemsOnPage = (e) => {
    if (filteredItems) {
      setPrintedItems((printedItems) => {
        return [...printedItems, e.target.innerText]
      })
    } else {
      console.log("Nebolo nic napisane")
    }
  }

  // ..................................................................

  useEffect(() => {
    const itemsAfterFilter = materialArr.filter((items) => {
      return items.toLowerCase().includes(searchingItem.toLowerCase())
    })
    setFilteredItems(itemsAfterFilter)
  }, [searchingItem])

  // ..................................................................

  return (
    <main className="section">
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

      <div className="filtered-items">
        {filteredItems.map((oneItem, index) => {
          if (searchingItem) {
            return (
              <button
                className="filtered-items-btn"
                onClick={itemsOnPage}
                key={index}
              >
                {oneItem.toLowerCase()}
              </button>
            )
          } else {
            return ""
          }
        })}
      </div>

      <div className="printed-items">
        {printedItems.map((onePrintedItem, index) => {
          return (
            <div className="printed-items-div" key={index}>
              <p>{onePrintedItem}</p>
              <div className="number-and-btn">
                <input type="text" className="number" />
                <input
                  className="printed-items-btn"
                  type="submit"
                  value="D"
                  onClick={() => {
                    setPrintedItems(
                      printedItems.filter((item) => item !== onePrintedItem) // alebo printedItems.filter((item, i) => i !== index))
                    )
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default App
