/**
 * Complete testing for Counter smart contract
 * @author Farbod Shams <farbodshams.2000@gmail.com>
 */

import Deployer from "../services/Deployer";
import {Counter} from "../types";
import {expect} from "chai";
import {ethers} from "hardhat";
import {suite, test} from "@testdeck/mocha"

@suite
class CounterTest {
    private static contract: Counter;

    static async before(){
        const deployer = new Deployer("Counter");
        CounterTest.contract = (await deployer.deploy()) as Counter;
    }

    @test
    async CounterShouldStartFromZero() {
        expect((await CounterTest.contract.getCounter()).toNumber()).to.equal(0);
    }

    @test
    async CounterShouldBeIncreased() {
        const tx = await CounterTest.contract.increase()
        await tx.wait();
        expect((await CounterTest.contract.getCounter()).toNumber()).to.equal(1);
    }

    @test
    async CounterShouldBeDecreased() {
        const tx = await CounterTest.contract.decrease()
        await tx.wait();
        expect((await CounterTest.contract.getCounter()).toNumber()).to.equal(0);
    }

    @test
    async CounterShouldNotBeDecreasedBellowZero() {
        expect(CounterTest.contract.decrease()).to.be.revertedWith("Counter cannot be less than zero");
    }

    @test
    async CounterShouldBeSetManuallyByOwner() {
        const tx = await CounterTest.contract.setManually(12)
        await tx.wait();
        expect((await CounterTest.contract.getCounter()).toNumber()).to.equal(12);
    }

    @test
    async CounterShouldNotBeSetManuallyByNormalWallet() {
        const signers = await ethers.getSigners();
        expect(CounterTest.contract.connect(signers[2]).setManually(12)).to.be.revertedWith("Only contract owner can call this method");
    }
}