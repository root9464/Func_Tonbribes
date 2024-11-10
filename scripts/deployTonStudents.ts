import { toNano } from '@ton/core';
import { TonStudents } from '../wrappers/TonStudents';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const tonStudents = provider.open(TonStudents.createFromConfig({}, await compile('TonStudents')));

    await tonStudents.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(tonStudents.address);

    // run methods on `tonStudents`
}
