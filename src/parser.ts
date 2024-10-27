import { AST } from './ast'

export function parse(code: string): AST {
  return {
    type: 'literal-value',
    value: code,
  }
}
