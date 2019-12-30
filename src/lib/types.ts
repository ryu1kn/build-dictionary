
export type ReadFile = (path: string) => Promise<string>

export interface Logger {
  log: (...args: any[]) => void
}
