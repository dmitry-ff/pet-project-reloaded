interface IFormik {
  searchField: string,
}

export const validate = (values: IFormik,) => {
  let errors = {} as IFormik;
  if (!values.searchField) {
    errors.searchField = 'Required'
  } else if
    (!/^([a-z\sа-яё]+)$/i.test(values.searchField)) {
    errors.searchField = 'Incorrect Entry'
  }
  return errors;
};