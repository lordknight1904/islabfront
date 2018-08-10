import HomePage from './Home/Home';
import BiographyPage from './Biography/Biography';
import TeachingPage from './Teaching/Teaching';
import DetailPage from './Teaching/Detail';
import PublicationPage from './Publication/Publication';
import AlumniPage from './People/Alumni';
import MemberPage from './People/Member';

const paths = [
  {
    title: 'Home',
    pageDescription: 'homepage',
    url: '/',
    component: HomePage,
    exact: true,
  },
  {
    title: 'Biography',
    pageDescription: 'Biography',
    url: '/biography',
    component: BiographyPage,
    exact: false,
  },
  {
    title: 'Teaching',
    pageDescription: 'Teaching',
    url: '/teaching',
    component: TeachingPage,
    exact: false,
  },
  {
    title: 'Detail',
    pageDescription: 'Detail',
    url: '/course/:id',
    component: DetailPage,
    exact: false,
  },
  {
    title: 'Publication',
    pageDescription: 'Publication',
    url: '/publication',
    component: PublicationPage,
    exact: false,
  },
  {
    title: 'Members',
    pageDescription: 'Members',
    url: '/members',
    component: MemberPage,
    exact: false,
  },
  {
    title: 'Alumni',
    pageDescription: 'Alumni',
    url: '/alumni',
    component: AlumniPage,
    exact: false,
  },
];

export default paths;
