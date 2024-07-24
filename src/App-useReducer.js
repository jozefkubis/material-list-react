import materialArr from "./data"
import { useEffect, useReducer } from "react"

const initilState = {
  searchingItem: "",
  filteredItems: [],
  printedItems: [],
}

function reducer(state, action) {
  console.log(state, action)
  switch (action.type) {
    case "setSearchingItem":
      return { ...state, searchingItem: action.payload }

    case "setFilteredItems":
      return { ...state, filteredItems: action.payload }

    case "setPrintedItems":
      return { ...state, printedItems: action.payload }

    case "newItem":
      return { ...state, searchingItem: "", filteredItems: [] }

    case "deleteAll":
      return initilState

    default:
      throw new Error("Unknown action")
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initilState)

  const { searchingItem, filteredItems, printedItems } = state

  // ..................................................................

  const itemsOnPage = (e) => {
    if (filteredItems) {
      dispatch({
        type: "setPrintedItems",
        payload: [...printedItems, e.target.innerText],
      })
    } else {
      console.log("Nebolo nic napisane")
    }
  }

  // ..................................................................

  useEffect(() => {
    if (searchingItem) {
      const itemsAfterFilter = materialArr.filter((items) => {
        return items.toLowerCase().includes(searchingItem.toLowerCase())
      })

      dispatch({ type: "setFilteredItems", payload: itemsAfterFilter })
    }
  }, [searchingItem])

  // ..................................................................

  return (
    <main className="main">
      <form className="form">
        <input
          className="searching-input"
          onClick={() => {
            dispatch({ type: "newItem" })
          }}
          type="text"
          placeholder="Search for item"
          value={searchingItem}
          onChange={(e) =>
            dispatch({ type: "setSearchingItem", payload: e.target.value })
          }
        />
        <input
          className="deleteAll-btn"
          type="submit"
          value="DeleteAll"
          onClick={() => dispatch({ type: "deleteAll" })}
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
                  onClick={() =>
                    dispatch({
                      type: "setPrintedItems",
                      payload: printedItems.filter(
                        (item) => item !== onePrintedItem
                      ),
                    })
                  }
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
