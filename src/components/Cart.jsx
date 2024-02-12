import { useNavigate } from "react-router-dom";
import { useDataProductContext } from "../context/ProductContext"
import { formatMoney } from "../utils/format-money"
import { Button } from "./ui/Button"


export function Cart() {
  const { cart, setOpenCartModal, setCart } = useDataProductContext()

  const navigate = useNavigate();

  function removeProductByCart(id) {
    const removeCart = cart.filter(product => product.id !== id)
    setCart(removeCart)
  }
  
  return (
    <div className="w-full max-w-full h-full fixed inset-0 bg-[rgba(0,0,0,0.4)] z-10">
      <div className="w-full max-w-md h-full absolute right-0 bg-primary rounded-tl-xl rounded-bl-xl">
        <div className="flex items-center justify-between p-5 border-b border-white">
          <h2 className="text-4xl font-semibold">Carrinho</h2>
          <Button 
            onClick={() => setOpenCartModal(false)}
            className="w-10 h-10 text-base font-black bg-white rounded-full hover:bg-secondary hover:scale-105"
          >X</Button>
        </div>

        <div className="h-full flex flex-col justify-between">
          <div className="h-[800px] overflow-y-scroll mt-5">
            {cart.length ? (
              cart.map((product) => (
                <div key={product.id} className="flex items-center p-5 border-b border-white">
                  <div className="flex gap-5 pr-5">
                    <img className="w-24 h-24 rounded-md" src={product.image}/>
                    <div className="flex items-center justify-between gap-5">
                      <h3>{product.name}</h3>
                      <p>{formatMoney(product.preco)}</p>
                      <Button className="bg-none inline-block text-white p-0 hover:underline" onClick={() => removeProductByCart(product.id)}>Remover</Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <p className="text-lg text-center">Você não possui itens no carrinho!</p>
              </div>
            )}
          </div>
          <div className="mb-20">
            <Button onClick={() => {
              navigate("/summary")
              setOpenCartModal("false")
            }
} className="w-full block h-14 font-bold text-xl bg-secondary hover:bg-zinc-800">
              Ir para resumo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}