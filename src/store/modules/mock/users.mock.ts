
import type { User } from '@/store/modules/users.types'

// Mock data contains duplicated IDs just like the response returned from Mockaroo did
export const mockUsers: User[] = [
  { 
    id: 1, 
    first_name: 'Diego',
    last_name: 'Paradin',
    email: 'dparadin0@amazonaws.com'
  },
  { id: 1, 
    first_name: 'Cece',
    last_name: 'Bosden',
    email: 'cbosden1@fc2.com'
  },
  { id: 2, 
    first_name: 'Neysa',
    last_name: 'Kelle',
    email: 'nkelle2@umich.edu'
  },
  { id: 3, 
    first_name: 'Aretha',
    last_name: 'Sweed',
    email: 'asweed3@google.co.jp'
   },
  { id: 5, 
    first_name: 'Shawna',
    last_name: 'Mylan',
    email: 'smylan4@about.com'
  },
  { id: 6, 
    first_name: 'Sheff',
    last_name: 'Hunt',
    email: 'shunt5@amazon.co.uk'
   },
  { id: 7, 
    first_name: 'Perrine',
    last_name: 'Hourahan',
    email: 'phourahan6@youku.com'
  },
  { id: 8, 
    first_name: 'Zebedee',
    last_name: 'Clausen',
    email: 'zclausen7@soup.io'
  },
  { id: 9, 
    first_name: 'Matt',
    last_name: 'Copp',
    email: 'mcopp8@linkedin.com'
  },
  { id: 10, 
    first_name: 'Anselm',
    last_name: 'Nowland',
    email: 'anowland9@businessweek.com'
  }
]