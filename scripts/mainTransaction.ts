import { NetworkProvider } from '@ton/blueprint';
import { Address, toNano } from '@ton/core';
import { TonStudents } from '../wrappers/TonStudents';

export async function run(provider: NetworkProvider) {
  const tonStudents = provider.open(TonStudents.createFromAddress(Address.parse('EQCG2UJvJ-foebQM2nRXxPqIdULwzIc8TqVUPOrTmlhigbah')));

  const addressCreator = Address.parse('0QANsjLvOX2MERlT4oyv2bSPEVc9lunSPIs5a1kPthCXydUX');

  await tonStudents.sendMainTransaction(provider.sender(), toNano('0.05'), addressCreator);

  // run methods on `tonStudents`
}
