import type { Config } from '@jest/types';
import enableHooks from 'jest-react-hooks-shallow';

module.exports = {
  setupFilesAfterEnv: [
    "./config/jest-setup.js"
  ]
};

enableHooks(jest);

const config: Config.InitialOptions = {
  verbose: true,
};
export default config;