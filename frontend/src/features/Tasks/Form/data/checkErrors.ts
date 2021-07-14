import { ErrorFormType } from "./useErrorForm"; 

export const hasError = (errorForm: ErrorFormType) => {
  Object.keys(errorForm).forEach((error) => {
    if (error) {
      return true;
    }
  })
  return false;
}