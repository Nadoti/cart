import { Cart } from "../components/Cart";
import { Header } from "../components/Header";
import { Filter } from "../components/home/Filter";
import { Products } from "../components/home/Products";
import { useDataProductContext } from "../context/ProductContext";


export function Home() {
  const { openCartModal } = useDataProductContext()

  return (
    <div className="text-white">
      {openCartModal && <Cart />}
      <Header />
      <div className="w-full flex max-w-[920px] mx-auto">
        <Filter />
        <Products />
      </div>
    </div>
  )
}