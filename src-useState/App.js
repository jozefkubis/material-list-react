import Form from "./components/Form"
import FilteredItems from "./components/FilteredItems"
import PrintedItems from "./components/PrintedItems"
import { MaterialListProvider } from "./contexts/MaterialListContext"

const App = () => {
  return (
    <main className="main">
      <MaterialListProvider>
        <Form />
        <FilteredItems />
        <PrintedItems />
      </MaterialListProvider>
    </main>
  )
}

export default App
