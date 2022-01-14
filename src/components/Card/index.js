import './style.css';

export default function Card(props) {
  return (
    <div id="card">
      <img src={props.image} alt={props.name} className="roundImage"></img>
      <h5>{props.name}</h5>
      <h5 id="price">$ {props.price}.00</h5>
    </div>
  );
}
