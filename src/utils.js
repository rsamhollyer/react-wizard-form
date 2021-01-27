export const setToNull = (empty, fnArray) => {
	fnArray.forEach((fn) => fn(empty));
};
