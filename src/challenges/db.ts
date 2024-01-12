interface InMemDB {
  get(key: string): string | null
  set(key: string, value: string): void
  unset(key: string): void
  exists(key: string): boolean
}

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

class MyIDB implements InMemDB {
  private data: Map<string, string> = new Map()
  private draftData: Map<string, string>[] = []

  get(key: string): string | null {
    return this.data.get(key) || null
  }
  set(key: string, value: string): void {
    this.data.set(key, value)
  }
  unset(key: string): void {
    this.data.delete(key)
  }
  exists(key: string): boolean {
    if (this.get(key)) {
      return true
    } else {
      return false
    }
  }
  begin(): void {
    this.draftData.push(new Map())
  }
  rollback(): void {
    if (this.draftData.length === 0) {
      throw new Error("Error: empty draft data")
    }
    this.draftData.pop()
  }
  commit(): void {
    if (this.draftData.length === 0) {
      throw new Error("no transaction")
    }

    const lastDraft = this.draftData.pop()
    lastDraft!.forEach((key, val) => {
      this.data.set(key, val)
    })
  }
  getCurrDB(): Map<string, string> {
    if (this.draftData.length)
  }
}

const input: string = `SET A 123
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
GET A`

const reader = (text: string) => {
  let args = text.split("\n")

  const db = new MyIDB()
  let res: string = ""

  for (let i = 0; i < args.length; i++) {
    let currArg = args[i].split(" ")
    if (currArg[0] === "EXISTS") {
      res += `${db.exists(currArg[1])}\n`
    }
    else if (currArg[0] === "GET") {
      res += `${db.get(currArg[1])}\n`
    }
    else if (currArg[0] === "SET") {
      db.set(currArg[1], currArg[2])
    }
    else if (currArg[0] === "UNSET") {
      db.unset(currArg[1])
    }
    else if (currArg[0] === "BEGIN") {
      db.begin()
    }
    else if (currArg[0] === "COMMIT") {
      db.commit()
    }
    else if (currArg[0] === "ROLLBACK") {
      db.rollback()
    }
  }
  return res
}

console.log(reader(input))


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
