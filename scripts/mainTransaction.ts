import { NetworkProvider } from '@ton/blueprint';
import { Address, toNano } from '@ton/core';
import { TonStudents } from '../wrappers/TonStudents';

export async function run(provider: NetworkProvider) {
  // адресс контракта
  const tonStudents = provider.open(TonStudents.createFromAddress(Address.parse('EQDtoCUfUELHWWTc8IuiXZoAQqgUlO3I7Ze9ueUp8wTwmUFw')));

  const addressCreator = Address.parse('0QANsjLvOX2MERlT4oyv2bSPEVc9lunSPIs5a1kPthCXydUX');

  await tonStudents.sendMainTransaction(provider.sender(), toNano('0.05'), addressCreator);

  // run methods on `tonStudents`
}
