import { instance } from "@/hooks/instance";
import { LikedType } from "@/types/LikedType";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useLikeToggle = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: LikedType) => instance().post("/like/toggle", data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["LikedByUser"] });
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
    });
};

export default useLikeToggle;