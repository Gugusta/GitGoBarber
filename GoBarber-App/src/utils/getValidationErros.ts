import { ValidationError } from 'yup';

interface Erros {
  [key: string]: string;
}

export default function getValidationErros(err: ValidationError): Erros {
  const getValidationErrors: Erros = {};

  err.inner.forEach((error) => {
    getValidationErrors[error.path] = error.message;
  });

  return getValidationErrors;
}
