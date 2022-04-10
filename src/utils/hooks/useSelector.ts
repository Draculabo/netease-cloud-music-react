import { RootState } from "@/stores";
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
