import { FunctionalComponent, h, JSX, Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";

function ListItem(props) {
  console.log(props.toDos);

  return (
    <Fragment>
      {props.toDos.map((item) => {
        // console.log(item.currentStatus);

        // const listStyle = item.currentStatus === "done" ? "line-through" : null;
        // console.log(listStyle);
        var listStyle: { textDecoration: string | null };
        if (item.currentStatus === "done")
          listStyle = { textDecoration: "line-through" };
        else listStyle = { textDecoration: null };

        return (
          <li key={item.id}>
            <div
              onClick={() => {
                props.toggleStatus(item.id);
              }}
              style={listStyle}
            >
              <p>{item.description}</p>
            </div>
            <button type="button" onClick={() => props.deleteItem(item.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </Fragment>
  );
}

export default ListItem;
