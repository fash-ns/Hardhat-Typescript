/**
 * A simple facade for deploying smart contracts using ethers.
 * @author Farbod Shams <farbodshams.2000@gmail.com>
 */

import {ethers} from "hardhat";
import {Contract, ContractFactory} from "ethers";

class Deployer {
    private readonly factory_name: string;

    public constructor(factory: string) {
        this.factory_name = factory;
    }

    public async deploy(...args: any[]): Promise<Contract> {
        const contract: ContractFactory = await ethers.getContractFactory(this.factory_name);
        const interact: Contract = await contract.deploy(...args);
        await interact.deployed();
        return interact;
    }
}

export default Deployer;