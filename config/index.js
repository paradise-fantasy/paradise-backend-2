import common from './common.config';
import prod from './prod.config';
import dev from './dev.config';

const config = (() => {
  switch (process.env.NODE_ENV) {
    case 'production':
    return { ...common, ...prod };

    default:
    return { ...common, ...dev };
  }
})();

export default config;
