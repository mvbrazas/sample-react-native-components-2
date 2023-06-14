import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: 'dist/index.mjs',
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    },
  ],
  external: [
    'react',
    'react-native',
    // Add any other external dependencies here
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'], // Add this line
      babelrc: false, // Add this line
    }),
    commonjs(),
    terser(),
  ],
};
