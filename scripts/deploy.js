async function main() {
    const NimbleNFT = await ethers.getContractFactory('NimbleNFT');

    // Start deployment, returning a promise that resolves to a contract object
    const nimbleNFT = await NimbleNFT.deploy();
    console.log('Contract deployed to address:', nimbleNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
