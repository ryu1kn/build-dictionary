import { deepStrictEqual } from 'assert'

import {Tokeniser} from '../../lib/tokeniser'

describe('Tokeniser', () => {
  it('tokenises a list of words from a text', () => {
    const tokeniser = new Tokeniser()
    const text = 'this is a text'
    deepStrictEqual(tokeniser.tokenise(text), ['this', 'is', 'a', 'text'])
  })

  it('sees "newline" is not a part of a word', () => {
    const tokeniser = new Tokeniser()
    const text = 'a\nb\n\nc'
    deepStrictEqual(tokeniser.tokenise(text), ['a', 'b', 'c'])
  })

  it('sees "," is not a part of a word', () => {
    const tokeniser = new Tokeniser()
    const text = 'this is, great'
    deepStrictEqual(tokeniser.tokenise(text), ['this', 'is', 'great'])
  })

  it('sees "." is not a part of a word', () => {
    const tokeniser = new Tokeniser()
    const text = 'ok. great'
    deepStrictEqual(tokeniser.tokenise(text), ['ok', 'great'])
  })

  it('sees ";" is not a part of a word', () => {
    const tokeniser = new Tokeniser()
    const text = 'this; so'
    deepStrictEqual(tokeniser.tokenise(text), ['this', 'so'])
  })

  it('sees "(" or ")" is not a part of a word', () => {
    const tokeniser = new Tokeniser()
    const text = 'a) b (c'
    deepStrictEqual(tokeniser.tokenise(text), ['a', 'b', 'c'])
  })

  it('sees "[" or "]" is not a part of a word', () => {
    const tokeniser = new Tokeniser()
    const text = 'a] b [c'
    deepStrictEqual(tokeniser.tokenise(text), ['a', 'b', 'c'])
  })

  it('sees "{" or "}" is not a part of a word', () => {
    const tokeniser = new Tokeniser()
    const text = 'a} b {c'
    deepStrictEqual(tokeniser.tokenise(text), ['a', 'b', 'c'])
  })

  it('sees "?" is not a part of a word', () => {
    const tokeniser = new Tokeniser()
    const text = 'Why not?'
    deepStrictEqual(tokeniser.tokenise(text), ['Why', 'not'])
  })

  it('sees "#" is not a part of a word', () => {
    const tokeniser = new Tokeniser()
    const text = 'test #comment'
    deepStrictEqual(tokeniser.tokenise(text), ['test', 'comment'])
  })

  it("sees '\"' is not a part of a word", () => {
    const tokeniser = new Tokeniser()
    const text = 'thought "why not"'
    deepStrictEqual(tokeniser.tokenise(text), ['thought', 'why', 'not'])
  })

  it('sees "\'" is not a part of a word', () => {
    const tokeniser = new Tokeniser()
    const text = "'Rot' is"
    deepStrictEqual(tokeniser.tokenise(text), ['Rot', 'is'])
  })
})
