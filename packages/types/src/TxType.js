import Enum from './codec/Enum';

export default class TxType extends Enum {
  constructor(index) {
    super(['Withdraw', 'Deposit'], index);
  }
}
