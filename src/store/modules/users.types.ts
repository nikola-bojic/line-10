export interface User {
  id: number
  first_name: string
  last_name: string
  email: string
}

export interface StateUser {
  users: User[]
  selectedUsers: Set<User>
  noneSelected: boolean
}
