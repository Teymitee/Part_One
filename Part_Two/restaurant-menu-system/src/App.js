import React, { useState } from "react";
import AddForm from "./components/AddForm";
import CurrentMenu from "./components/CurrentMenu";
import { MenuItemCard } from "./components/MenuItemCard";

function App() {
  const [menuItems, setMenuItems] = useState([]);

  const addMenuItem = (menuItem) => {
    setMenuItems([...menuItems, menuItem]);
    alert("item added to menu successfully");
  };

  const deleteMenuItem = (item) => {
    setMenuItems(
      menuItems.filter((filteredItems) => filteredItems.id !== item.id)
    );
    alert("Item deleted from menu successfully");
  };

  return (
    <div className="container-fluid">
      <div className="row full">
      <div className="col-lg-2">
        <AddForm addMenuItemProp={addMenuItem} />
      </div>
      <div className="col-lg-10 mx-auto">
        <CurrentMenu>
          {menuItems.map((itemData) => (
            <MenuItemCard
              data={itemData}
              key={itemData.id}
              handleDeleteItem={deleteMenuItem}
            />
          ))}
        </CurrentMenu>
      </div>
    </div>
    </div>
  );
}

export default App;
