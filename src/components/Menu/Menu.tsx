import Link from 'next/link';
import { useEffect } from 'react';
import useSWR from 'swr';

import { useAuth } from '../../contexts/auth.context';
import { UserType } from '../../state/userType';
import Logo from '../Icons/Logo';

import { Items, MenuWrapper, UserIcon } from './Menu.styles';

const fetcher = async (url: string) => fetch(url).then(res => res.json());

export default function Menu() {
  const { user, login } = useAuth();
  const userId = 8512;
  const url = `/api/findUser?uid=${userId}`;
  const { data, error, isValidating } = useSWR(url, fetcher);

  useEffect(() => {
    if (!isValidating) {
      const { status }: { status: number } = data;

      if (error) {
        alert('Failed to load user');
      } else {
        if (status === 200) {
          const { getTheUser }: { getTheUser: UserType } = data;
          login(getTheUser);
        } else if (status === 404) {
          alert(data.message);
        }
      }
    }
  });

  return (
    <MenuWrapper>
      <Items>
        <Link href="/en/US">
          <a>
            <Logo />
          </a>
        </Link>
        <Link href="/en/US/product">
          <a>Product</a>
        </Link>
        <Link href="/en/US/about">
          <a>About</a>
        </Link>
      </Items>
      {user && <UserIcon data-testid="usericon" imageUrl={user.avatar} />}
    </MenuWrapper>
  );
}
