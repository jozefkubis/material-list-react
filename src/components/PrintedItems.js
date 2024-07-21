import React from "react"
import { useMaterialList } from "../contexts/MaterialListContext"

const PrintedItems = () => {
  const { printedItems, setPrintedItems } = useMaterialList()

  function handleOnClick(onePrintedItem) {
    setPrintedItems(
      printedItems.filter((item) => item !== onePrintedItem) // alebo printedItems.filter((item, i) => i !== index))
    )
  }

  return (
    <div>
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
                  onClick={() => handleOnClick(onePrintedItem)}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PrintedItems
