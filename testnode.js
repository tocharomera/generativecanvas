try {
    console.log(require.resolve("canvas"));
} catch(e) {
    console.error("canvas is not found");
    process.exit(e.code);
}
