import {zodResolver} from '@hookform/resolvers/zod';
import {
  FormProvider as ReactHookFromProvider,
  useForm as useFormHook,
} from 'react-hook-form';

function useForm(schema) {
  return useFormHook({
    resolver: zodResolver(schema),
  });
}

export const FormProvider = ReactHookFromProvider;
export default useForm;
