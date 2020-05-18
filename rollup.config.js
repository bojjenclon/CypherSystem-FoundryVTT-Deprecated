import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy2';
import zip from 'rollup-plugin-zip';

const releaseBuild = true;
const destinationDir = 'dist';

const toBundle = [
    'template.json',
    'system.json',
    'cypher-system.css',
    "fonts/ogirema.ttf",
    "fonts/source.txt",
    "lib/dragula/dragula.min.css",
    "lib/dragula/dragula.min.js",
    "lib/flexbox-grid/flexboxgrid.min.css",
    "lib/trix/trix.css",
    "lib/trix/trix.js",
    "templates/characterSheet.html",
    "templates/npcSheet.html",
    "templates/item/abilitySheet.html",
    "templates/item/armorSheet.html",
    "templates/item/artifactSheet.html",
    "templates/item/cypherSheet.html",
    "templates/item/gearSheet.html",
    "templates/item/odditySheet.html",
    "templates/item/skillSheet.html",
    "templates/item/weaponSheet.html",
    "LICENSE"
];

export default [{
    input: 'cypher-system.js',
    output: {
        dir: destinationDir,
        format: 'umd',
    },
    plugins: [
        terser({
            sourcemap: !releaseBuild,
            compress: releaseBuild ? {} : false,
        }),
        scss({
            failOnError: true,
            output: true,
        }),
        copy({
            assets: toBundle,
        }),
        zip({
            dir: destinationDir,
        }),
    ],
}, ];