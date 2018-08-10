const headers = [
  {
    title: 'Home',
    pageDescription: 'homepage',
    dropDown: false,
    url: '/'
  },
  {
    title: 'Biography',
    pageDescription: 'Biography',
    dropDown: false,
    url: '/biography'
  },
  {
    title: 'Teaching',
    pageDescription: 'Teaching',
    dropDown: false,
    url: '/teaching'
  },
  {
    title: 'Publication',
    pageDescription: 'Publication',
    dropDown: false,
    url: '/publication'
  },
  {
    title: 'People',
    dropDown: true,
    pages: [
      {
        title: 'Members',
        pageDescription: 'Members',
        url: '/members'
      },
      {
        title: 'Alumni',
        pageDescription: 'Alumni',
        url: '/alumni'
      },
    ]
  },
];

export default headers;