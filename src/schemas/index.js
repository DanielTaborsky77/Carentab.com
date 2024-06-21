import * as yup from 'yup';

function getAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
}

function isEndDateValid(endDate, startDate) {
    return !isNaN(endDate) && new Date(endDate) >= new Date(startDate);
  }

export const basicSchema = yup.object().shape({
    firstName: yup
    .string()
    .min(3, 'Musí být minimálně 3 znaky dlouhé')
    .matches(/^[A-Ža-ž\s]+$/, 'Může obsahovat pouze písmena')
    .test('starts-with-capital', 'Musí začínat velkým písmenem', value =>
      /^[A-Z]/.test(value)
    )
    .required("Povinné pole"),
    lastName: yup
    .string()
    .min(3, 'Musí být minimálně 3 znaky dlouhé')
    .matches(/^[A-Ža-ž]+$/, 'Může obsahovat pouze písmena')
    .test('starts-with-capital', 'Musí začínat velkým písmenem', value =>
      /^[A-Z]/.test(value)
    )
    .required("Povinné pole"),
    birthday: yup
    .date().required('Povinné pole')
    .max(new Date(), 'Ještě jste se nenarodil/a')
    .test('age-check', 'Musíte být starší než 18 let', function(value) {
      return getAge(value) >= 18;
    }),
    phone: yup.string().matches(
        /^(\+\d{1,3}[- ]?)?\d{3,}$/i,
        'Neplatný formát telefonního čísla'
      ).required('Povinné pole'),
    email: yup
    .string()
    .email('Neplatný formát e-mailové adresy')
    .required('Povinné pole')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Neplatný formát e-mailové adresy'),
    car: yup
    .string()
    .required('Zvolte vozidlo'),
    town: yup
    .string()
    .min(3, 'Musí být minimálně 3 znaky dlouhé')
    .matches(/^[A-Ža-ž]+$/, 'Může obsahovat pouze písmena')
    .test('starts-with-capital', 'Musí začínat velkým písmenem', value =>
      /^[A-Z]/.test(value)
    )
    .required("Povinné pole"),
    from: yup.date()
    .required('Povinné pole')
    .test('start-date', 'Datum půjčení "od" nemůže být v minulosti', function(startDate) {
      return new Date(startDate) >= new Date().setHours(0, 0, 0, 0);
    }),
    to: yup.date()
    .required('Povinné pole')
    .test('end-date', 'Datum je dříve než datum "od"', function(endDate) {
      const startDate = this.parent.from; // Získání hodnoty "od" z rodičovského objektu
      return isEndDateValid(endDate, startDate)}),
    groupB: yup
    .bool()
    .oneOf([true])
    .required('Musí být zaškrtnuto'),
    gdpr: yup
    .bool()
    .oneOf([true])
    .required('Musí být zaškrtnuto'),

})