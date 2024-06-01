import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";
type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder:()=>void;
};

export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {
  const subTotal = order.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tipAmount = subTotal * tip;

  const total = subTotal + tipAmount;
  //const total = useMemo(() => subTotal + tipAmount, [subTotal, tipAmount]);
  //const total = useCallback(() => subTotal + tipAmount, [subTotal, tipAmount]);

  
  return (
    <>
      <div className="space-y-3">
        <h2 className="text-2xl font-black">Totales y Propinas</h2>
        <p>
          SubTotal a pagar:
          <span className="font-bold"> {formatCurrency(subTotal)}</span>
        </p>
        <p>
          Propina:
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:
          <span className="font-bold">{formatCurrency(total)}</span>
        </p>
      </div>
      <button className="w-full p-3 mt-10 font-bold text-orange-500 uppercase bg-gray-900 disabled:opacity-20" disabled= {subTotal===0} onClick={placeOrder}>Guardar orden</button>
    </>
  );
}
