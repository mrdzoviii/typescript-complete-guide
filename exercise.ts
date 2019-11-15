type BankAccount = { money: number; deposit: (arg: number) => void };

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    },
};

let myself: { bankAccount: BankAccount; hobbies: string[]; name: string } = {
    name: 'Max',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking'],
};

myself.bankAccount.deposit(3000);
console.log(myself);
