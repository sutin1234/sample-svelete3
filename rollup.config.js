import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import {
    terser
} from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only'
import scss from 'rollup-plugin-scss'




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
            output: 'public/extra.css',
            insert: true
        }),
        resolve({
            browser: true
        }),
        commonjs(), !production && livereload('public'),

        production && terser(),
        scss()
    ],
    watch: {
        clearScreen: true
    }
};
