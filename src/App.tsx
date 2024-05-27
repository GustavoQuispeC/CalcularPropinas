import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db";
console.log(menuItems);

function App() {
  return (
    <>
      <header className="bg-sky-600 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de propinas y consumos
        </h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-3xl font-bold">Menú</h2>
          <div className="space-y-2 mt-5">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="">Consusmos</h2>
        </div>
      </main>
    </>
  );
}

export default App;
