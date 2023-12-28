import { ItemsIndex } from "./ItemsIndex"
import axios from "axios";
import { useState, useEffect } from "react"
import { ItemNew } from "./ItemNew";

export function Content() {

  const [items, setItems] = useState([])

  const handleIndexItems =() => {
    console.log("handleIndexItems")
    axios.get("http://localhost:3000/items.json").then(response => {
      console.log(response.data)
      setItems(response.data)
    })
  }

  const handleCreateItem = (params, successCallback) => {
    console.log("handleCreateItem", params)
    axios.post("http://localhost:3000/items.json", params).then(response => {
      setItems([...items, response.data])
      successCallback()
    })
  }
  
  useEffect (handleIndexItems,[])


  return (
    <main>
      <h1>Welcome to React!</h1>
      <ItemNew onCreateItem={handleCreateItem} />
      <ItemsIndex items={items}/>
    </main>
  )
}