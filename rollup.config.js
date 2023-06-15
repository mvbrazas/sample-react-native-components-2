import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js', // Entry point of your library
  output: {
    file: 'dist/bundle.js', // Output file
    format: 'cjs', // CommonJS module format for React Native
    exports: 'named',
  },
  external: ['react', 'react-native'], // Exclude React and React Native from the bundle
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'], // Resolve .js and .jsx files
    }),
    babel({
      exclude: 'node_modules/**', // Exclude node_modules
      presets: ['@babel/preset-env', '@babel/preset-react'], // Use the necessary presets=
    }),
    commonjs(),
  ],
};