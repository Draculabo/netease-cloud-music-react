import { AppDispatch } from "@/stores/store";
import { useDispatch as useReduxDispatch } from "react-redux";
export const useDispatch = () => useReduxDispatch<AppDispatch>();
