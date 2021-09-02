
export const findById = (someArray, someId) => {
    const foundObject = someArray.find(entry => entry.id === someId);
    return foundObject;
}