import { NetworkProvider } from '@ton/blueprint';
import { Address, toNano } from '@ton/core';
import { TonStudents } from '../wrappers/TonStudents';

export async function run(provider: NetworkProvider) {
  const tonStudents = provider.open(TonStudents.createFromAddress(Address.parse('EQC3zrypFisjoguIdS-RgSA26UKEmbukAFJh5e9q7-Hw1AWu')));

  await tonStudents.sendGiveAll(provider.sender(), toNano('0.05'));

  // run methods on `tonStudents`
}
