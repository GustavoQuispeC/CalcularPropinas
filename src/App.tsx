import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();
  return (
    <>
      <header className="py-10 bg-sky-600">
        <h1 className="text-4xl font-black text-center">
          Calculadora de propinas y consumos
        </h1>
      </header>
      <main className="grid py-20 mx-auto max-w-7xl md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-3xl font-bold">Menú</h2>
          <div className="mt-5 space-y-2">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="p-5 space-y-10 border rounded-lg border-dashed-slate-300 ">
          {order.length > 0 ? (
            <>
              <OrderContents order={order} removeItem={removeItem} />
              <TipPercentageForm setTip={setTip} tip={tip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center">Aún no has ordenado</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
