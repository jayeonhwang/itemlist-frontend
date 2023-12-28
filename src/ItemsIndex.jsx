export function ItemsIndex(props) {
  return (
    <div>
      <h1>All items</h1>
      {props.items.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.image_url}/>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
}