// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js', // entry point of your React Native app

  output: {
    file: 'bundle.js', // output file name
    format: 'cjs', // commonjs format
  },

  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      presets: ['@babel/preset-env', '@babel/preset-react'],
      babelrc: false,
    }),
  ],
  external: ['react-native'],
};