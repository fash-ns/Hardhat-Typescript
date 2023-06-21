/**
 * Deploy Counter contract
 * @author Farbod Shams <farbodshams.2000@gmail.com>
 */

import Deployer from "../services/Deployer";

const deployer = new Deployer("Counter");
deployer.deploy().then(contract => {
    console.log(contract);
    process.exit(0);
}).catch(err => {
    console.log(err);
    process.exit(1);
});