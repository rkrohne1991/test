import { shallow } from 'enzyme';

import Menu from './Menu';
// import useSWR from 'swr';
// import { useAuth } from '../../contexts/auth.context';
import { MenuWrapper, Items } from './Menu.styles';

describe('Menu', () => {
  // const fetcher = async (url: string) =>
  //   await fetch(url).then(res => res.json());

  // it('useSWR with 200 status', () => {
  //   const userId = 8512;
  //   const url = `/api/findUser?uid=${userId}`;
  //   const { data } = useSWR(url, fetcher);

  //   console.log(data);
  // });

  it('should show the elements', () => {
    const component = shallow(<Menu />);

    expect(component.find(MenuWrapper)).toHaveLength(1);
    expect(component.find(Items)).toHaveLength(1);
  });

  // @fixme Implement more tests
});
