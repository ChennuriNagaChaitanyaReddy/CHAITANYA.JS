const NFTs = [];

function mintNFT (_brand, _model, _color, _licensePlate) {
    const NFT = {
        "brand": _brand,
        "model": _model,
        "color": _color,
        "licensePlate": _licensePlate
    };
    NFTs.push(NFT);
    console.log("Minted: " + _brand + " " + _model);
}

function listNFTs () {
    for(let i = 0; i < NFTs.length; i++) {
        console.log("\nID: \t\t" + (i + 1));
        console.log("Brand: \t\t" + NFTs[i].brand);
        console.log("Model: \t\t" + NFTs[i].model);
        console.log("Color: \t\t" + NFTs[i].color);
        console.log("License Plate: " + NFTs[i].licensePlate);
    }
}

function getTotalSupply() {
    console.log("\nTotal Supply: " + NFTs.length);
}

// Minting new car NFTs
mintNFT("Toyota", "Corolla", "Red", "XYZ123");
mintNFT("Ford", "Mustang", "Blue", "ABC456");
mintNFT("Tesla", "Model S", "Black", "TES789");
mintNFT("Honda", "Civic", "White", "HON101");

listNFTs();

getTotalSupply();
