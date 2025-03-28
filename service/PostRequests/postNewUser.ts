import { instance } from "@/hooks/instance";
import { RegisterUserType } from "@/types/RegisterUserType";
import { useMutation } from "@tanstack/react-query";

const useRegisterUser = () => {
  return useMutation({
    mutationFn: (data: RegisterUserType) => instance().post("auth/register", data),
  });
};

export default useRegisterUser;