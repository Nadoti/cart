import { useState } from "react";
import { Input } from "../forms/Input";
import { InputRangeMoney } from "../forms/InputRangeMoney";
import { Button } from "../ui/Button";
import { useSearchParams } from "react-router-dom"



export function Filter() {
  const [nameProductValue, setNameProductValue] = useState("");
  const [moneyValue, setMoneyValue] = useState(0);

  const [_, setSearchParams] = useSearchParams();

  function FilterProducts() {
    // 
    setSearchParams(state => {
      if(nameProductValue) {
        state.set('name', nameProductValue)
      } else {
        state.delete('name')
      } 
      
      if(moneyValue) {
        state.set('preco', String(moneyValue))
      } else {
        state.delete('preco')
      }

      if(!nameProductValue && !moneyValue) {
        state.delete('moneyValue')
        state.delete('name')
      }
      return state
    })
  }
  
  return (
    <section onSubmit={FilterProducts} className="flex flex-col w-full max-w-[200px] h-svh border-r-2 border-r-[#E5D6CC] sticky top-0 pt-[60px] pr-5 gap-10">
      <Input value={nameProductValue} setValue={setNameProductValue} placeholder="Informe o nome do produto"/>
      <InputRangeMoney value={moneyValue} setValue={setMoneyValue} name="filterMoneyValue"/>
      <Button onClick={FilterProducts} className="w-full bg-primary text-new-gray-200 font-medium">Filtrar</Button>
    </section>
  )
}