import type { Config } from '@jest/types';

module.exports = {
  setupFilesAfterEnv: [
    "./config/jest-setup.js"
  ]
};


const config: Config.InitialOptions = {
  verbose: true,
};
export default config;