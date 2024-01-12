// SET A 123
// GET A
// BEGIN
// SET A 456
// GET A
// BEGIN
// UNSET A
// GET A
// COMMIT
// GET A
// ROLLBACK
// GET A
//
// 1. A 123
// 2. hit begin
// 3. push tuple of A 456 onto stack
// 4. hit begin
// 4.5 hit commit, set the data to A 123
// 5. push a A, null onto stack
var MyIDB = /** @class */ (function () {
    function MyIDB() {
        this.data = new Map();
        this.draftData = [];
    }
    MyIDB.prototype.get = function (key) {
        return this.data.get(key) || null;
    };
    MyIDB.prototype.set = function (key, value) {
        this.data.set(key, value);
    };
    MyIDB.prototype.unset = function (key) {
        this.data.delete(key);
    };
    MyIDB.prototype.exists = function (key) {
        if (this.get(key)) {
            return true;
        }
        else {
            return false;
        }
    };
    MyIDB.prototype.begin = function () {
        this.draftData.push(new Map());
    };
    MyIDB.prototype.rollback = function () {
        if (this.draftData.length === 0) {
            throw new Error("Error: empty draft data");
        }
        this.draftData.pop();
    };
    MyIDB.prototype.commit = function () {
        var _this = this;
        if (this.draftData.length === 0) {
            throw new Error("no transaction");
        }
        var lastDraft = this.draftData.pop();
        lastDraft.forEach(function (key, val) {
            _this.data.set(key, val);
        });
    };
    return MyIDB;
}());
var input = "SET A 123\nGET A\nBEGIN\nSET A 456\nGET A\nBEGIN\nUNSET A\nGET A\nCOMMIT\nGET A\nROLLBACK\nGET A";
var reader = function (text) {
    var args = text.split("\n");
    var db = new MyIDB();
    var res = "";
    for (var i = 0; i < args.length; i++) {
        var currArg = args[i].split(" ");
        if (currArg[0] === "EXISTS") {
            res += "".concat(db.exists(currArg[1]), "\n");
        }
        else if (currArg[0] === "GET") {
            res += "".concat(db.get(currArg[1]), "\n");
        }
        else if (currArg[0] === "SET") {
            db.set(currArg[1], currArg[2]);
        }
        else if (currArg[0] === "UNSET") {
            db.unset(currArg[1]);
        }
        else if (currArg[0] === "BEGIN") {
            db.begin();
        }
        else if (currArg[0] === "COMMIT") {
            db.commit();
        }
        else if (currArg[0] === "ROLLBACK") {
            db.rollback();
        }
    }
    return res;
};
console.log(reader(input));
/*
README.md
In Memory Database
The goal of this exercise is to build an in memory key value database that supports a set of commands. You will be given an input to be processed and the output should match OUTPUT.txt. You will be expected to implement the following commands:

GET key - Prints the value at the specified key, or null.
SET key value - Set the value at the specified key.
UNSET key - Removes the value at the specified key.
EXISTS key - Prints true or false if the key exists in the database.
INPUT.txt
EXISTS A
SET A 123
GET A
EXISTS A
UNSET A
GET A
EXISTS A
OUTPUT.txt
false
123
true
null
false
TRANSACTIONS.md
Transaction Support
Should we have additional time, we'll add transaction support using the following commands:

BEGIN - Start of a transaction.
ROLLBACK - Discard any changes from the start of the last transaction.
COMMIT - Commit any changes from the start of the last transaction to the dataset.
TRANSACTIONS_INPUT.txt
SET A 123
GET A
BEGIN
SET A 456
GET A
BEGIN
UNSET A
GET A
COMMIT
GET A
ROLLBACK
GET A
TRANSACTIONS_OUTPUT.txt
123
456
null
null
123
*/
