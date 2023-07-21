import * as yup from 'yup';

export const userInteractionValidationSchema = yup.object().shape({
  interaction_type: yup.string().required(),
  content_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
