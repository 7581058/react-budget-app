export interface ExpenseType {
  id: string | `${string}-${string}-${string}-${string}-${string}`
  charge: string
  amount: number
}
