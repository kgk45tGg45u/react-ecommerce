import { useEffect } from "react"

export const useTitle = (title) => {

  useEffect(() => {
    document.title = `${title} - Ultimate eBooks`
  },[title]);
  return (
    null
  )
}
