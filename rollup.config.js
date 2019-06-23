import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import {
    terser
} from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only'

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/bundle.js'
    },
    plugins: [
        svelte({
            dev: !production,
            css: css => {
                css.write('public/bundle.css');
            }
        }),
        css({
            output: 'public/extra.css'
        }),
        resolve({
            browser: true
        }),

        commonjs(), !production && livereload('public'),

        production && terser()
    ],
    watch: {
        clearScreen: false
    }
};