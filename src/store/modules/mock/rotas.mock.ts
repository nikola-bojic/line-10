
import type { Rota } from '@/store/modules/rotas.types'

// Mock data contains duplicated User IDs just like the response returned from Mockaroo did
export const mockRotas: Rota[] = [
  {
    id: 1,
    type: 'afternoon',
    date: '2023-02-11',
    userId: 2,
    startDate: '2022-07-04',
    endDate: '2023-06-23'
  },
  {
    id: 2,
    type: 'afternoon',
    date: '2022-08-29',
    userId: 9,
    startDate: '2022-10-23',
    endDate: '2023-03-31'
  },
  {
    id: 3,
    type: 'morning',
    date: '2023-03-31',
    userId: 2,
    startDate: '2022-12-30',
    endDate: '2023-02-07'
  },
  {
    id: 4,
    type: 'morning',
    date: '2022-03-12',
    userId: 4,
    startDate: '2022-05-16',
    endDate: '2022-04-28'
  },
  {
    id: 5,
    type: 'morning',
    date: '2023-06-05',
    userId: 1,
    startDate: '2023-04-11',
    endDate: '2023-03-11'
  },
  {
    id: 6,
    type: 'morning',
    date: '2022-06-07',
    userId: 2,
    startDate: '2022-11-06',
    endDate: '2023-03-30'
  },
  {
    id: 7,
    type: 'morning',
    date: '2022-05-22',
    userId: 3,
    startDate: '2022-06-23',
    endDate: '2023-02-02'
  },
  {
    id: 8,
    type: 'morning',
    date: '2022-12-10',
    userId: 10,
    startDate: '2022-06-23',
    endDate: '2022-09-04'
  },
  {
    id: 9,
    type: 'afternoon',
    date: '2023-01-26',
    userId: 7,
    startDate: '2022-10-03',
    endDate: '2023-02-25'
  },
  {
    id: 10,
    type: 'morning',
    date: '2022-03-03',
    userId: 9,
    startDate: '2022-11-19',
    endDate: '2022-11-06'
  }
]