import dotenv from "dotenv";
import {
  getCjsConfig,
  getCssConfig,
  getEsConfig,
} from "wo-library/tools/rollup/configs.js";
import { getPublishPlugins } from "wo-library/tools/rollup/pluginSets.js";

dotenv.config();

const isDev = process.env.NODE_ENV === "development";

const cjsConfig = getCjsConfig(process.cwd(), { isDev });
cjsConfig.plugins.push(...getPublishPlugins({ removePostInstall: true }));

const config = [
  cjsConfig,
  getEsConfig(process.cwd(), { isDev }),
  getCssConfig(process.cwd(), { isDev }),
];

export default config;
