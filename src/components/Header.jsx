import { Link } from "react-router-dom";
import { ShoppingCart} from 'lucide-react'
import { useDataProductContext } from "../context/ProductContext";

export function Header() {
  const { cart, setOpenCartModal} = useDataProductContext()

  return (
    <header className="border-b-2 border-b-[#E5D6CC]">
      <div className="w-full max-w-[920px] mx-auto flex items-center justify-between py-5">
        <nav>
          <Link className="text-3xl font-black text-black" to='/'>BuyCar</Link>
        </nav>
        <div>
          <button className=" relative p-2" onClick={() => setOpenCartModal(true)}>
            <ShoppingCart width={20} height={20} color="black"/>
            <span className="absolute top-0 left-8 text-sm font-bold text-black">
              {cart.length >= 1 ? (cart.length) : null}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}