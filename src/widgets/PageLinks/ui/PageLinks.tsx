import { PageLink } from '@/shared/UI/PageLink';
import { pageLinks } from '../model/lib/pageLinks';

export const PageLinks = () => {
  return pageLinks.map(({ to, image, title }) => <PageLink key={to} image={image} to={to} title={title} />);
};
