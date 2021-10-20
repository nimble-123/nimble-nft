async function deploy() {
    const NimbleNFT = await ethers.getContractFactory('NimbleNFT');

    // Start deployment, returning a promise that resolves to a contract object
    const nimbleNFT = await NimbleNFT.deploy();
    return nimbleNFT;
}

async function main() {
    try {
        const nimbleNFT = await deploy();
        console.log('Contract deployed to address:', nimbleNFT.address);
    } catch (error) {
        console.error(error);
        process.exit(1);
    } finally {
        console.log('Have fun... :)');
        process.exit(0);
    }
}

main();
