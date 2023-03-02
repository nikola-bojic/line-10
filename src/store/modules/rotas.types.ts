export interface Rota {
  id: number
  type: 'morning' | 'afternoon'
  date: string
  userId: number
  startDate: string
  endDate: string
}

export interface FormattedRota {
  id: Number
  startDate: string
  endDate: string
  title: string
  tooltip: string
  style: string
}

export interface StateRota {
  rotas: Rota[]
  formattedRotas: FormattedRota[] | null
}
