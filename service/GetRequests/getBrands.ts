import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

const getBrands = () => {
  const lastData = {
    id:8,
    name:"Ko'proq",
    image:"",
    createdAt:"",
    updatedAt:""
  }
  const {data = [], isLoading} = useQuery({
    queryKey:['brands-all'],
    queryFn:() => instance().get("/brands/all").then(res => [...res.data, lastData])
  })

  return {data, isLoading}
}

export default getBrands