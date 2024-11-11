import { compile, NetworkProvider } from '@ton/blueprint';
import { Address, toNano } from '@ton/core';
import { TonStudents } from '../wrappers/TonStudents';

export async function run(provider: NetworkProvider) {
  const owner: Address = Address.parse('0QAYRw04JzUo1IEK6TL6vKfos66gsdN6vUFfJeA3OOjOfDPG');
  const tonStudents = provider.open(
    TonStudents.createFromConfig(
      {
        admin_address: owner,
      },
      await compile('TonStudents'),
    ),
  );

  await tonStudents.sendDeploy(provider.sender(), toNano('0.05'));

  await provider.waitForDeploy(tonStudents.address);

  // run methods on `tonStudents`
}
