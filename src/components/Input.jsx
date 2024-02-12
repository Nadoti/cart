

export function Input({ value, setValue, placeholder }) {

  return (
    <input 
      className="w-full pl-4 text-sm text-new-gray-500  bg-new-gray-200 border border-new-gray-500 h-10 pr-2 rounded-md placeholder:text-new-gray-500 outline-none focus:border-primary whitespace-nowrap overflow-hidden text-ellipsis"
      type="text" 
      placeholder={placeholder}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  )
}