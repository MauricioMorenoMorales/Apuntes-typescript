//Tuplas, las tuplas son arrays con tipos ya definidos y no pueden cambiar

let x: [string, number]

x = ['Hola', 10]
//x = [10, 'Hola'] //Type 'number is not assignable to type 'string

console.log(x[0].substring(1))
//console.log(x[1].substring(1)) //Property 'substring' does not exist on type 'number'.

//*Enum

enum Color {
	Red,
	Green,
	Blue,
}

let c: Color = Color.Green

console.log(c)

//* Unknown

let notSure: unknown = 4
notSure = 'maybe a string instead'

// OK, definitely a boolean
notSure = false

declare const maybe: unknown
// 'maybe' could be a string, object, boolean, undefined, or other types
//const aNumber: number = maybe // Type 'unknown' is not assignable to type 'number'.

if (maybe === true) {
	// TypeScript knows that maybe is a boolean now
	const aBoolean: boolean = maybe
	//const aString: string = maybe /* Type 'boolean' is not assignable to type 'string'. */
}

//Any
declare function getValue(key: string): any
// OK, return value of 'getValue' is not checked
const str: string = getValue('myString')

let looselyTyped: any = 4
// OK, ifItExists might exist at runtime
looselyTyped.ifItExists()
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed()

let strictlyTyped: unknown = 4
//strictlyTyped.toFixed() /*Object is of type unknown*/

//* Void
function warnUser(): void {
	console.log('This is my warning message')
}
let unusable: void = undefined
// OK if `--strictNullChecks` is not given
//unusable = null /*Type null is not assignable to type void */

//* Never

// Function returning never must not have a reachable end point
function error(message: string): never {
	throw new Error(message)
}

// Inferred return type is never
function fail() {
	return error('Something failed')
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
	while (true) {}
}

//*Object

declare function create(o: object | null): void
// OK
create({ prop: 0 })
create(null)
//create(undefined) // Remember, undefined is a subtype of null /* Argument of type 'undefined' is not assignable to parameter of type 'object | null'.*/

//*Type assertions
let someValue: unknown = 'this is a string'

let strLength: number = (someValue as string).length

let someValue2: unknown = 'this is a string'

let strLength2: number = (<string>someValue2).length

//! Types are always in lowercase
function reverse(s: string): string {
	return s.split('').reverse().join('')
}

reverse('hello world')
