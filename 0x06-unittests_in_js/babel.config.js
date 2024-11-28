// Exporting Babel configuration for transpiling JavaScript code
module.exports = {
    presets: [
        [
            '@babel/preset-env', // Use the preset to compile modern JavaScript to be compatible with the specified environment
            {
                targets: {
                    node: 'current', // Target the current version of Node.js for compatibility
                },
            },
        ],
    ],
};
