export function ItemShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    props.onUpdateItem(props.item.id, params, () => event.target.reset())
  }

  const handleClick = () => {
    props.onDestroyItem(props.item)
  }
  return (
    <div>
      <h1>Item information</h1>
      <p>Name: {props.item.title}</p>
      <p>Description: {props.item.description}</p>
      <p>Brand: {props.item.brand}</p>
      <p><img src={props.item.image_url}/></p>
      <a href ={props.item.link} target="_blank"> Online shop</a>
      <form onSubmit={handleSubmit}>
      <div>Name: <input defaultValue={props.item.title} name="title" type ="text"/> </div>
        <div>Price: <input defaultValue={props.item.price} name="price" type ="number"/> </div>
        <div>Description: <input defaultValue={props.item.description} name="description" type ="text"/> </div>
        <div>image_url: <input defaultValue={props.item.image_url} name="image_url" type ="text"/> </div>
        <div>brand: <input defaultValue={props.item.brand} name="brand" type ="text"/> </div>
        <div>link: <input defaultValue={props.item.link} name="link" type ="text"/> </div>
        <button type ="submit">Update Item</button>
      </form>
      <button onClick={handleClick}>Destroy Item</button>
    </div>
  );
}