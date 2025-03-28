import { instance } from "@/hooks/instance";
import { LoginUserType } from "@/types/LoginUserType";
import { useMutation } from "@tanstack/react-query";

const useLoginUser = () => {
  return useMutation({
    mutationFn: (data: LoginUserType) => instance().post("auth/login", data),
  });
};

export default useLoginUser;