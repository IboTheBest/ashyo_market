import { Context } from "@/context/context"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"

const LikedByUser = () => {
  const { user } = useContext(Context)

  const { data = [], isLoading } = useQuery({
    queryKey: ['LikedByUser'],
    queryFn: () => instance().get(`/like/usersLike/${user?.user?.id}`).then(res => res.data),
    enabled: !!user 
  })

  return { data, isLoading }
}

export default LikedByUser