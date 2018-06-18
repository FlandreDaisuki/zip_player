import { terser } from "rollup-plugin-terser";
const plugins = [terser()];

const input = 'zip_player.js';
export default [{
  input,
  output: {
    file: 'dist/zip_player.es.js',
    format: 'es',
  }
}, {
  input,
  output: {
    file: 'dist/zip_player.iife.js',
    format: 'iife',
    name: 'ZipImagePlayer'
  }
}, {
  input,
  output: {
    file: 'dist/zip_player.es.min.js',
    format: 'es',
  },
  plugins
}, {
  input,
  output: {
    file: 'dist/zip_player.iife.min.js',
    format: 'iife',
    name: 'ZipImagePlayer'
  },
  plugins
}];
