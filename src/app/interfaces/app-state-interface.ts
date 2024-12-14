import { Launch } from "./launch-interface";

export interface AppState {
    data: Launch[] | null;
    isLoading: boolean;
}
