import { FunctionalComponent, h, JSX, Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";
import AddItem from "./AddItem";
import ListItem from "./ListItem";
import { v4 as uuidv4 } from "uuid";

type status = "done" | "undone";
interface Item {
  id: string;
  description: string;
  currentStatus: status;
}

function App(): FunctionalComponent {
  const [toDos, setToDos] = useState<Item[]>([]);

  function addItem(event) {
    event.preventDefault();
    const [add] = event.target;

    setToDos((prev: Item[]): Item[] => {
      return [
        ...prev,
        {
          id: uuidv4(),
          description: add.value,
          currentStatus: "undone"
        }
      ];
    });
  }

  function deleteItem(uid: string) {
    // console.log(uid);
    setToDos((prev) => {
      return prev.filter((item) => item.id !== uid);
    });
  }

  function toggleStatus(uid: string) {
    const newList = toDos.map((item) => {
      if (item.id === uid) {
        if (item.currentStatus === "done") item.currentStatus = "undone";
        else item.currentStatus = "done";

        return item;
      } else return item;
    });

    setToDos(newList);
  }

  return (
    <Fragment>
      <h1>To-Do List</h1>
      <AddItem addItem={addItem} />
      <ul>
        <ListItem
          toDos={toDos}
          toggleStatus={toggleStatus}
          deleteItem={deleteItem}
        />
      </ul>
    </Fragment>
  );
}
export default App;
