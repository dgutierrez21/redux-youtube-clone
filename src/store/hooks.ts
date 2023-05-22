import { useDispatch, useSelector } from "react-redux";
import { AppDispacth, RootState } from "./index";

import { TypedUseSelectorHook } from "react-redux/es/types";

export const useAppDispatch: () => AppDispacth = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Aunque es posible importar los tipos RootState y AppDispatch en cada componente, es mejor crear versiones tipadas de los hooks useDispatch y useSelector para su uso en la aplicación. Esto es importante por un par de razones:

// * Para useSelector, te ahorra la necesidad de escribir (state: RootState) cada vez.

// * Para useDispatch, el tipo Dispatch por defecto no conoce los thunks. Con el fin de despachar correctamente thunks, es necesario utilizar el tipo específico personalizado AppDispatch de la tienda que incluye los tipos de middleware thunk, y utilizarlo con useDispatch. Añadir un hook useDispatch pretipado evita que se olvide de importar AppDispatch cuando sea necesario.
