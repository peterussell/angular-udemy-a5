export class CounterService {
  toActiveTransactions: number = 0;
  toInactiveTransactions: number = 0;

  incrementToActive() {
    this.toActiveTransactions++;
  }

  incrementToInactive() {
    this.toInactiveTransactions++;
  }
}
