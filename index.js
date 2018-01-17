export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'securitybanner',
    configPrefix: 'classification',
    uiExports: {
      injectDefaultVars(server) {
        const config = server.config();
        return {
            securityBannerText: config.get('classification.securitybanner.text'),
            securityBannerColor: config.get('classification.securitybanner.color'),
        };
      },

      hacks: [
        'plugins/securitybanner/hack'
      ]
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
        securitybanner: Joi.object({
          text: Joi.string().required(),
          color: Joi.string().required(),
        }).default()
      }).default();
    },
  });
};