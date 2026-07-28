import { useAddressContext } from "../context/AddressContext";

const useAddress = () => {
  return useAddressContext();
};

export default useAddress;