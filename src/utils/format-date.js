import { format } from "date-fns"


export function formatDate(date) {
  const newDate = new Date(date)
  return format(newDate, "dd/MM/yyyy")
}