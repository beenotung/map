export type AST = LiteralValue

export type LiteralValue<T = string | number | boolean | null> = {
  type: 'literal-value'
  value: T
}

export function astToString(ast: AST): string {
  return String(ast.value)
}
