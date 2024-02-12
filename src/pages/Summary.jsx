import { useEffect, useState } from "react"
import { formatMoney } from "../utils/format-money"
import { useNavigate } from "react-router-dom";


export function Summary() {
  const [cart, setCart] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    const getItemLocalStorage = localStorage.getItem("cart")

    if(getItemLocalStorage) setCart(JSON.parse(getItemLocalStorage))
  },[])


  return (
    <main className="w-full max-w-[920px] mx-auto">
      <h1 className="text-3xl font-semibold mt-10">Resumo</h1>

      <div className="h-[500px] overflow-y-scroll px-2 flex flex-col gap-4 mt-10">
        {cart.map((product) => (
          <div key={product.id} className="flex items-center p-5 bg-slate-100 rounded-xl">
            <div className="w-full flex items-center justify-between">
              <img className="w-24 h-24 rounded-md" src={product.image}/>
              <h3 className="text-lg">{product.name}</h3>
              <p className="text-2xl font-medium">{formatMoney(product.preco)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between bg-slate-100 p-5 rounded-xl mt-20 mb-4">
        <p className="text-xl">Total:</p>
        <p className="text-3xl font-bold">{formatMoney(cart.reduce((acc, product) => acc + product.preco, 0))}</p>
      </div>

      <div>
        <button className="py-4 px-8 rounded-xl bg-primary text-white hover:bg-secondary hover:text-primary-foreground font-bold transition-all" onClick={() => {
          alert("Compra concluida com sucesso")
          navigate("/")
        }}>Finalizar compra</button>
      </div>
    </main>
  )
}