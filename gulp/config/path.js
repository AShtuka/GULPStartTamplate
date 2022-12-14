import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        images: `${buildFolder}/img/`,
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        files: `${buildFolder}/files/`,
        html: `${buildFolder}/`,
    },
    src: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        js: `${srcFolder}/js/app.js`,
        scss: `${srcFolder}/scss/style.scss`,
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.html`,
    },
    watch: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/**/*.html`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: '',
};
