import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};
const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <button
      className="flex justify-between w-full p-3 border rounded-md bg-slate-200 border-lime-800 hover:bg-slate-300"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
};

export default MenuItem;
