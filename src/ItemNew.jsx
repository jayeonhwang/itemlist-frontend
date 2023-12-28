export function ItemNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    props.onCreateItem(params, () => event.target.reset())
  }
  
  return(
    <div>
      <h1>New Item</h1>
      <form onSubmit={handleSubmit}>
        <div>Name: <input name="title" type ="text"/> </div>
        <div>Price: <input name="price" type ="number"/> </div>
        <div>Description: <input name="description" type ="text"/> </div>
        <div>image_url: <input name="image_url" type ="text"/> </div>
        <div>brand: <input name="brand" type ="text"/> </div>
        <div>link: <input name="link" type ="text"/> </div>
        <button type ="submit">Create Item</button>
      </form>
    </div>
  )
  
}