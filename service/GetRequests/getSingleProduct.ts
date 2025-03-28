import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"
import { ParamValue } from "next/dist/server/request/params"

const getSingleProduct = (id:ParamValue) => {
  const {data = {}, isLoading} = useQuery({
    queryKey:['singleProducts', id],
    queryFn:() => instance().get(`/product-items/${id}`).then(res => res.data)
  })

  return {data, isLoading}
}

export default getSingleProduct 