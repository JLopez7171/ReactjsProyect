
import { useState } from "react";

export default  function ItemCount(props) {
  let [count, setCount] = useState(1);

  const handleAdd = () => {
    if (count === props.max) return;
    setCount(count + 1);
  };

  const handleSubstract = () => {
    if (count === props.min) return;
    setCount(count - 1);
  };

  function handleClick() {
    props.onSubmitCount(count);
  }

  return (
    <div>
      <div>
        <button onClick={handleAdd}>+</button>
        <span>{count}</span>
        <button onClick={handleSubstract}>-</button>
      </div>
      <div>
        <button onClick={handleClick}>Agregar al carrito</button>
      </div>
    </div>
  );
}

