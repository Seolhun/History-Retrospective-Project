# Script String Matching methods

Here is a list of current possibilities:

1. indexOf
```javascript
var string = "foo",
    substring = "oo";
string.indexOf(substring) !== -1;
```
String.prototype.indexOf returns the position of the string in the other string. If not found, it will return -1.

2. (ES6) includes - go to answer, or this answer
```javascript
var string = "foo",
    substring = "oo";
string.includes(substring);
```
3. search - go to answer
```javascript
var string = "foo",
    expr = /oo/;
string.search(expr);
```
4. lodash includes - go to answer
```javascript
var string = "foo",
    substring = "oo";
_.includes(string, substring);
```
5. RegExp - go to answer
```javascript
var string = "foo",
    expr = /oo/;  // no quotes here
expr.test(string);
```
6. Match - go to answer
```javascript
var string = "foo",
    expr = /oo/;
string.match(expr);
```