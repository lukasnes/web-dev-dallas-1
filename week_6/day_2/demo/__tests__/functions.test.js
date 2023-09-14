import { capitalize,createObj,reverseNum } from '../functions.js'

describe('Testing for capitalize function', () => {
    let hello = capitalize('hello world')
    test('Capitalize returns a string', () => {
        expect(typeof hello).toBe('string')
    })

    test('Capitalizes first letter in string', () => {
        expect(hello[0]).toEqual('H')
    })

    test('returns a string with the same length', () => {
        expect(hello).toHaveLength('hello world'.length)
    })
})

describe('Testing for createObj function', () => {
    let obj = createObj("Lukas",26,"Texas",true)
    test('function returns an object', () => {
        expect(typeof obj).toBe('object')
    })

    test('values of keys are correct',() => {
        expect(obj.name).toEqual('Lukas')
        expect(obj.age).toEqual(26)
        expect(obj.state).toEqual("Texas")
        expect(obj.lovesCode).not.toBeFalsy()
    })
})

describe('Testing for reverseNum function', () => {
    let num = reverseNum(6578)
    test('function returns a number', () => {
        expect(typeof num).toBe('number')
    })

    test('function returns the reverse number', () => {
        expect(num).toEqual(8756)
    })
})

import { jest } from '@jest/globals'

jest.mock('lodash', () => {
    return {
        default: {
            random: jest.fn().mockReturnValue(Math.ceil(Math.random() * 100))
        }
    }
})

import { createArray } from '../functions.js'

describe('Testing for createArray function', () => {
    let arr = createArray()
    console.log(arr)
    test('returns an array', () => {
        expect(Array.isArray(arr)).toBeTruthy()
    })

    test('returns an array with 10 values',() => {
        expect(arr).toHaveLength(10)
    })

    test('returns numbers between 1 and 100',() => {
        for(let i = 0; i < arr.length; i++){
            expect(arr[i] >= 1).toBeTruthy()
            expect(arr[i] <= 100).toBeTruthy()
        }
    })
})