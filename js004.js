// ===== v004-Topic - Variable =====
const accountId = 114514;
let accountEmail = "mynbi@example.com";
var accountPassword = "12345";
accountCity = "Jakarta";
let accountState;

// accountId = 2     // not allowed
console.log("accountId", accountId);

accountEmail = "ztejd@example.com";
accountCity = "Bandung";
accountPassword = "123456";

// one method to see the output of above variable individulay by using console.log
console.log("accountEmail", accountEmail);
console.log("accountCity", accountCity);
console.log("accountPassword", accountPassword);

// another method to see the output of above variable by using console.table
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// ===== Data Type =====
/*
1. const
 Purpose: Declares a block-scoped, read-only variable.
 Reassignability: You cannot reassign a const variable, but if it's an                    object or array, its contents can still be modified.
 Scope: Block-scoped (only accessible within the block it is defined).
  Example:
  const x = 10;
  x = 20; // Error: Assignment to constant variable

  const arr = [1, 2, 3];
  arr.push(4); // Works, as we're modifying the array contents
  console.log(arr); // [1, 2, 3, 4]

2. let
  Purpose: Declares a block-scoped variable that can be reassigned.
  Reassignability: You can reassign the value of a let variable.
  Scope: Block-scoped.
   Example:
    let y = 10;
    y = 20; // Works
    console.log(y); // 20

    if (true) {
      let z = 30;
      console.log(z); // 30
    }
    console.log(z); // Error: z is not defined (block scope)

3. var
 Purpose: Declares a function-scoped variable (not block-scoped).
 Reassignability: You can reassign the value of a var variable.
 Scope: Function-scoped (or global if declared outside a function).
    Example:
    var a = 10;
    a = 20; // Works
    console.log(a); // 20

    if (true) {
       var b = 30;
    }
     console.log(b); // Works, as var is not block-scoped (function-scoped)

Best Practices
Use const by default for variables that won’t change.
Use let when you need to reassign a variable.
Avoid var due to its function-scoping and potential for bugs caused by hoisting.
*/
