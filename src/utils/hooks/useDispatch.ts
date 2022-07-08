import { AppDispatch } from "@/stores/store";
import { useDispatch as useReduxDispatch } from "react-redux";
const useDispatch = () => useReduxDispatch<AppDispatch>();
export default useDispatch;
