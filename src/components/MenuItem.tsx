import type { MenuItem } from "../types";

type MenuItemProps = {
    item: MenuItem;
};
const MenuItem = ({ item }: MenuItemProps) => {
    return (
        <button className="bg-slate-200 w-full border-lime-800 border p-3 flex justify-between hover:bg-slate-300">
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    );
};

export default MenuItem;
