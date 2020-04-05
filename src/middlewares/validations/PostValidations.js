const { celebrate, Segments, Joi } = require('celebrate');

const create = celebrate({
  [Segments.BODY]: Joi.object().keys({
    author: Joi.string().required(),
    category: Joi.string().required().length(24).hex(),
    title: Joi.string().required(),

    elements: Joi.array().items(
      Joi.object().keys({
        element: Joi.string().required(),
        content: Joi.string().required(),
      })
    ),
  }),
});

module.exports = {
  create,
};