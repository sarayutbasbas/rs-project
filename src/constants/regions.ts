const RegionsKey = {
    NORTH: 'north',
    CENTRAL: 'central',
    EASTERN: 'eastern',
    NORTHEAST: 'northeast',
    SOUTH: 'south'
}

export const RegionsData = [
    {
      id: RegionsKey.NORTH,
      name: 'ภาคเหนือ',
      image: '/images/north.jpg'
    },
    {
      id: RegionsKey.CENTRAL,
      name: 'ภาคกลาง',
      image: '/images/central.jpg'
    },
    {
      id: RegionsKey.EASTERN,
      name: 'ภาคตะวันออก',
      image: '/images/eastern.jpg'
    },
    {
      id: RegionsKey.NORTHEAST,
      name: 'ภาคตะวันออกเฉียงเหนือ',
      image: '/images/northeast.jpg'
    },
    {
      id: RegionsKey.SOUTH,
      name: 'ภาคใต้',
      image: '/images/south.jpg'
    }
  ]

export default {
    RegionsKey,
    RegionsData
};
