import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

const getProducts = (params?:any) => {
  const {data = [], isLoading} = useQuery({
    queryKey:['products'],
    queryFn:() => instance().get("/products", { params}).then(res => res.data.items)
  })

  return {data, isLoading}
}

export default getProducts 