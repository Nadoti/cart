import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../api/products-cars";
import { Button } from "../ui/Button";
import { formatMoney } from "../../utils/format-money";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select"
import { Loading } from "../ui/Loading";
import { useDataProductContext } from "../../context/ProductContext";
import { useEffect } from "react";

export function Products() {
  const { cart, setCart } = useDataProductContext()
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name")
  const preco = searchParams.get("preco")
  const inclusionDate = searchParams.get("inclusion-date")
  const order = searchParams.get("order")

  const { data: products, isLoading } = useQuery({
    queryKey: ['products', {name, preco, inclusionDate, order}],
    queryFn: () => getProducts({
      name,
      preco,
      inclusionDate,
      order,
    })
  })

  function addProductCart(product) {

    const isProductIsCart = cart.find(car => car.id === product.id)
    if(isProductIsCart) {
      alert("PRODUTO Já CADASTRADO")
      return
    }
    setCart([...cart, product])
    localStorage.setItem("cart", JSON.stringify([...cart, product]))
  }

  useEffect(() => {
    const getItemLocalStorage = localStorage.getItem("cart")

    if(getItemLocalStorage) setCart(JSON.parse(getItemLocalStorage))
  },[])

  return (
    <main className="ml-10 pt-[60px]">
      <div className="w-full mb-10">
        <span className="flex items-center justify-end gap-2 text-black">
          Ordernar por:
          <Select onValueChange={(value) => {
              console.log(value)
              setSearchParams(state => {
                if(value !== "todos") {
                  state.set("order", value)
                  return state
                }
                state.delete("order")
                
              })
          }}>
            <SelectTrigger className="w-[180px] text-primary-foreground font-medium bg-new-gray-200 border-new-gray-500">
              <SelectValue placeholder="Selecionar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="preco-maior">Preço crescente</SelectItem>
                <SelectItem value="preco-menor">Preço decrescente</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </span>
      </div>
      <div className="grid grid-cols-3 gap-8 ">
        {isLoading ? (
          <Loading />
        ) : (
          products?.map((product) => (
            <div key={product.id} className="bg-white">
              <img className="w-full max-w-[200px] rounded-md" src={product.image} alt={product.name} />
              <div className="flex flex-col gap-1 my-4 text-black">
                <p>Nome: {product.name}</p>
                <p>Data de inclusão: {product.dateInclusion}</p>
                <p className="">Preço: <span className="font-bold">{formatMoney(product.preco)}</span></p>
              </div>
              <Button className="w-full text-white bg-black hover:bg-gray-600" onClick={() => addProductCart(product)}>Comprar</Button>
            </div>
          ))
        )}
      </div>
    </main>
  )
}