import { FunctionalComponent, h, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";

function AddItem(props): FunctionalComponent {
  return (
    <form onSubmit={props.addItem}>
      <div>
        <input name="add" type="text" placeholder="Enter Todo's" />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
}

export default AddItem;
