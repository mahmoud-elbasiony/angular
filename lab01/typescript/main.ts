interface IAccount{
    Date_of_opening:Date;
    addCustomer();
    removeCustomer();
}
abstract class Account
{
    private Acc_no:number;
    private Balance:number;
    public constructor(Acc_no,Balance=0){
        this.Acc_no=Acc_no;
        this.Balance=Balance;
    }

    abstract debitAmount();
    abstract creditAmount();
    getBalance(){}
}

class Saving_Account extends Account implements IAccount
{
    Date_of_opening;
    public constructor(private Min_Balance=0,Acc_no,Balance=0){
        super(Acc_no,Balance);
    }
    addCustomer(){}
    removeCustomer(){}
    debitAmount(){}
    creditAmount(){}
}

class Current_Account extends Account implements IAccount
{
    Date_of_opening;
    public constructor(private Interest_rate=0){
        super();
    }
    addCustomer(){}
    removeCustomer(){}
    debitAmount(){}
    creditAmount(){}
}