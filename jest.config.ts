import type { Config } from '@jest/types';

module.exports = {
  setupFilesAfterEnv: [
    "./config/jest-setup.js"
  ]
};

const config: Config.InitialOptions = {
  verbose: true,
  coveragePathIgnorePatterns: ['src/Components/Weather/VanillasCanvasChart/helpers']
};
export default config;