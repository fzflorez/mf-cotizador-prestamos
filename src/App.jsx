import { useEffect, useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { calculateTotalPayment, formaterCurrency } from "./helpers";

function App() {
  const [quantity, setQuantity] = useState(10000000);
  const [months, setMonths] = useState(6);
  const [total, setTotal] = useState(0);
  const [pay, setPay] = useState(0);

  useEffect(() => {
    const calculateTotalPaymentResult = calculateTotalPayment(quantity, months);
    setTotal(calculateTotalPaymentResult);
  }, [quantity, months]);

  useEffect(() => {
    setPay(total / months);
  }, [total]);

  const MIN = 0;
  const MAX = 20000000;
  const STEP = 100000;

  function handleChange(e) {
    setQuantity(+e.target.value);
  }

  function handleClickDecrease() {
    const amount = quantity - STEP;

    if (amount < MIN) {
      alert("Valor no valido");
      return;
    }

    setQuantity(amount);
  }

  function handleClickIncrease() {
    const amount = quantity + STEP;

    if (amount > MAX) {
      alert("Valor no valido");
      return;
    }

    setQuantity(amount);
  }

  return (
    <div className=" my-10 max-w-slg mx-auto bg-slate-300 shadow p-10 md:my-20">
      <Header />

      <div className=" flex justify-between my-6">
        <Button operator="-" fn={handleClickDecrease} />
        <Button operator="+" fn={handleClickIncrease} />
      </div>

      <input
        type="range"
        className=" w-full h-6 bg-gray-200 accent-green-600 hover:accent-green-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
      />

      <p className=" text-center my-10 text-5xl font-extrabold text-yellow-500 md:text-6xl">
        {formaterCurrency(quantity)}
      </p>

      <h2 className=" text-2xl font-extrabold text-gray-600 text-center">
        <span className=" text-green-600">Elige un</span> plazo a pagar
      </h2>

      <select
        className=" mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-600"
        value={months}
        onChange={(e) => setMonths(+e.target.value)}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className=" my-5 space-y-3 bg-gray-100 p-5">
        <h2 className=" text-2xl font-extrabold text-gray-600 text-center">
          Resumen de <span className=" text-green-600">pagos</span>
        </h2>

        <p className=" text-xl text-gray-600 text-center font-bold">
          <span className=" text-gray-700">Plazo:</span> {months} Meses
        </p>
        <p className=" text-xl text-gray-600 text-center font-bold">
          <span className=" text-gray-700">Total a pagar:</span>{" "}
          {formaterCurrency(total)}
        </p>
        <p className=" text-xl text-gray-600 text-center font-bold">
          <span className=" text-gray-700">Mensuales:</span>{" "}
          {formaterCurrency(pay)}
        </p>
      </div>
    </div>
  );
}

export default App;
