import * as yup from 'yup';

export const animeContentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  content_creator_id: yup.string().nullable(),
});
