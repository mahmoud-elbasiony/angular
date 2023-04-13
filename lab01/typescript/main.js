class Account {
    constructor(Acc_no, Balance = 0) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
    }
    getBalance() { }
}
class Saving_Account extends Account {
    constructor(Min_Balance = 0, Acc_no, Balance = 0) {
        super(Acc_no, Balance);
        this.Min_Balance = Min_Balance;
    }
    addCustomer() { }
    removeCustomer() { }
    debitAmount() { }
    creditAmount() { }
}
class Current_Account extends Account {
    constructor(Interest_rate = 0, Acc_no, Balance = 0) {
        super(Acc_no, Balance);
        this.Interest_rate = Interest_rate;
    }
    addCustomer() { }
    removeCustomer() { }
    debitAmount() { }
    creditAmount() { }
}
export {};
