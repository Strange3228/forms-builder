import {createAction, props} from "@ngrx/store";
import {IFormStyles, IAllFormData, IFormDataResponse} from "../services/IFieldsStyles";

export const getFormData = createAction('[FormData] Get Form Data')
export const setFormData = createAction('[FormData] Set Form Data after API call', props<{formData: any}>())
export const updateFormMapData = createAction('[FormData] Update Form Map Data', props<{mapData: string[]}>())
export const updateFormStyles = createAction('[FormData] Update Form styles', props<{formStyles: IFormStyles}>())
export const updateToken = createAction('[FormData] Update token', props<{token: string | null}>())
