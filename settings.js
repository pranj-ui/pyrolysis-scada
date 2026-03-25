module.exports = {
    uiPort: process.env.PORT || 1880,
    flowFile: 'flows.json',
    contextStorage: { default: { module: "memory" } }
}