import * as yup from 'yup';

export const playerValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  coach_id: yup.string().nullable(),
  parent_id: yup.string().nullable(),
});
