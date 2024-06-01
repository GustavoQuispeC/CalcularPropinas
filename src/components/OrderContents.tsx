import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem : (id: OrderItem['id']) => void;
};

const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="text-4xl font-black"> Consumo</h2>
      {
        order.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-5 border-t border-gray-200 ite last-of-type:border-b"
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>

            <button className="flex items-center justify-center w-6 h-6 font-black text-white bg-red-600 rounded-full"
            onClick={()=>removeItem(item.id)}
            >
              x
            </button>
          </div>
        ))
      }
    </div>
  );
};

export default OrderContents;
