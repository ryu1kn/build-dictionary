import { expect } from 'chai'

const Tokeniser = require('../../lib/tokeniser')

describe('Tokeniser', () => {
  it('tokenises a list of words from a text', () => {
    const tokeniser = new Tokeniser()
    const text = 'this is a text'
    expect(tokeniser.tokenise(text)).to.be.eql(['this', 'is', 'a', 'text'])
  })

  it('sees "newline" is not a part of a word', () => {
    const tokeniser = new Tokeniser()
    const text = 'a\nb\n\nc'
    expect(tokeniser.tokenise(text)).to.be.eql(['a', 'b', 'c'])
  })

  it('sees "," is not a part of a word', () => {
    const tokeniser = new Tokeniser()
    const text = 'this is, great'
    expect(tokeniser.tokenise(text)).to.be.eql(['this', 'is', 'great'])
  })

  it('sees "." is not a part of a word', () => {
    const tokeniser = new Tokeniser()
    const text = 'ok. great'
    expect(tokeniser.tokenise(text)).to.be.eql(['ok', 'great'])
  })

  it('sees ";" is not a part of a word', () => {
    const tokeniser = new Tokeniser()
    const text = 'this; so'
    expect(tokeniser.tokenise(text)).to.be.eql(['this', 'so'])
  })

  it('sees "(" or ")" is not a part of a word', () => {
    const tokeniser = new Tokeniser()
    const text = 'a) b (c'
    expect(tokeniser.tokenise(text)).to.be.eql(['a', 'b', 'c'])
  })

  it('sees "[" or "]" is not a part of a word', () => {
    const tokeniser = new Tokeniser()
    const text = 'a] b [c'
    expect(tokeniser.tokenise(text)).to.be.eql(['a', 'b', 'c'])
  })

  it('sees "{" or "}" is not a part of a word', () => {
    const tokeniser = new Tokeniser()
    const text = 'a} b {c'
    expect(tokeniser.tokenise(text)).to.be.eql(['a', 'b', 'c'])
  })

  it('sees "?" is not a part of a word', () => {
    const tokeniser = new Tokeniser()
    const text = 'Why not?'
    expect(tokeniser.tokenise(text)).to.be.eql(['Why', 'not'])
  })

  it('sees "#" is not a part of a word', () => {
    const tokeniser = new Tokeniser()
    const text = 'test #comment'
    expect(tokeniser.tokenise(text)).to.be.eql(['test', 'comment'])
  })

  it("sees '\"' is not a part of a word", () => {
    const tokeniser = new Tokeniser()
    const text = 'thought "why not"'
    expect(tokeniser.tokenise(text)).to.be.eql(['thought', 'why', 'not'])
  })

  it('sees "\'" is not a part of a word', () => {
    const tokeniser = new Tokeniser()
    const text = "'Rot' is"
    expect(tokeniser.tokenise(text)).to.be.eql(['Rot', 'is'])
  })
})
