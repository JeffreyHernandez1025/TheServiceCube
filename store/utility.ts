export const updateStateObject = (
    previousState:any,
    updatedProperties:any
  ) => ({
    ...previousState,
    ...updatedProperties,
  })