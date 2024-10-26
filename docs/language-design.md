# Language Design

## Overview

The demo language is a subset of PHP. It is not strictly following the PHP syntax, but it is designed to be simple and easy to implement.

## Language Elements

### Expression

Expression is the basis unit of the language. It can be a literal value, variable reference, math expression, logical expression, function call, etc.

### Symbol Name

The symbol name is the identifier of a variable, function, class, etc. The symbol name can consist of letters, digits, underscores, hyphen, and dot.

Example: `user-id`, `User`, `user.name`

### Literal Value

Literal value is a constant value in the language. It can be a string, number, boolean, null, etc.

Example: `"Hello, world!"`, `123`, `true`, `null`

### Math Expression

Math expression is the infix expression of math operations.

Example: `1 + 2 * 3 / 4` will result in `2.5`

### Logical Expression

Logical expression is the infix expression of logical operations.

Example: `1 < 2`, `1 + 2 == 3`, `1 != 2`, `3 > 2`, `1 + 1 >= 2`

### Bracket Expression

Bracket expression gives priority to the expression inside the brackets.

Example: `(1 + 2) * 3` will result in `9`

### Variable Reference

Variable reference is the reference of a variable. It is represented by a symbol name prefixed with a dollar sign.

Example: `$user-id`, `$user.name`

### String Template

String template is the string literal enclosed by double quotes. It can contain variable references, escape sequences, and interpolation.

Example: `"The value of x is \"$x\""` will result in `"The value of x is "123""`, `"1 + 1 = ${1 + 1}"` will result in `"1 + 1 = 2"`

### Array

An array is a collection of values indexed by numbers or strings.

Array reference is the reference of an array element. It is represented by a symbol name prefixed with a dollar sign and square brackets.

Example: `$friends[0]`, `$user['name']`

### Function Call

Function call is the invocation of a function. It may includes arguments with or without the name of arguments.

Example: `login($username, $password)`, `login(username: $values[0], password: $values[1])`

### Assignment

Assignment is the operation of assigning a value to a variable.

Example: `$x = 1 + 2 * 3`

### Code Block

Code block is a collection of expressions enclosed by braces. The last expression in the code block is the return value of the code block.

Example: `{ $x = 1; $x + 2 }` will result in `3`

### If-expression

If-expression allows conditional execution of code blocks. The bracket around the condition expression is optional.

Example: `$average = if ($amount != 0) { $total / $amount } else { 0 }` can be simplified as `$average = if $amount != 0 $total / $amount else 0`

Although the bracket around the condition expression is optional, it is recommended to use it for better readability.

### For-expression

For-expression allows iteration of code blocks. The number of iterations executed is the return value of the for-expression. The bracket around the condition expression is optional.

Example: `for ($i = 0; $i < 10; $i+=2) { echo $i }` will print out `0`, `2`, `4`, `6`, `8`, and the return value is `5`.

### Foreach-expression

Foreach-expression allows iteration of code blocks with the key-value pairs of an array. The number of iterations executed is the return value of the foreach-expression. The bracket around the condition expression is optional.

Example: `foreach ($users as $key => $value) { echo "$key: $value"; }` will print out the key-value pairs of the `$users` array and the return value is the number of key-value pairs.

The key can be omitted if only the value is needed.

Example: `foreach ($users as $value) { echo $value; }` will print out all the values of the `$users` array and the return value is the number of values.

### Function Definition

A function is a collection of expressions enclosed by braces. The last expression in the function is the return value of the function. Early return is supported by the `return` keyword.

Example:

```php
function max($a, $b) {
    if ($b > $a) {
        return $b;
    }
    return $a;
}
```

### Class Definition

A class is a collection of functions and properties.

The `this` keyword is used to refer to the current object.

The `new` keyword is used to create an instance of a class.

The class property can be accessed by the `->` operator.

Example:

```php
class User {
	public $name;
	public $score;

	public function incScore($amount = 1) {
		$this->score += $amount;
	}
}

$user = new User();
$user->incScore();
```

The `amount` in this example is optional. If omitted, it will be `1`.
