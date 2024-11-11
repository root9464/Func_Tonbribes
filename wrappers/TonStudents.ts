import { Address, beginCell, Cell, Contract, contractAddress, ContractProvider, Sender, SendMode } from '@ton/core';

export type TonStudentsConfig = {
  admin_address: Address;
};

export function tonStudentsConfigToCell(config: TonStudentsConfig): Cell {
  return beginCell().storeAddress(config.admin_address).endCell();
}

export class TonStudents implements Contract {
  constructor(
    readonly address: Address,
    readonly init?: { code: Cell; data: Cell },
  ) {}

  static createFromAddress(address: Address) {
    return new TonStudents(address);
  }

  static createFromConfig(config: TonStudentsConfig, code: Cell, workchain = 0) {
    const data = tonStudentsConfigToCell(config);
    const init = { code, data };
    return new TonStudents(contractAddress(workchain, init), init);
  }

  async sendDeploy(provider: ContractProvider, via: Sender, value: bigint) {
    await provider.internal(via, {
      value,
      sendMode: SendMode.PAY_GAS_SEPARATELY,
      body: beginCell().endCell(),
    });
  }
}
