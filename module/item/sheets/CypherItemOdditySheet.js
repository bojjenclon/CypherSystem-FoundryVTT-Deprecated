import { ImprovedItemSheet } from './ImprovedItemSheet.js';

export class CypherItemOdditySheet extends ImprovedItemSheet {
    /**
     * Define default rendering options for the weapon sheet
     * @return {Object}
     */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 500,
            height: 300
        });
    }

    /* -------------------------------------------- */
    /*  Rendering                                   */
    /* -------------------------------------------- */

    /**
     * Get the correct HTML template path to use for rendering this particular sheet
     * @type {String}
     */
    get template() {
        return "systems/cyphersystem/templates/item/OdditySheet.html";
    }

    get type() {
        return 'oddity';
    }
}