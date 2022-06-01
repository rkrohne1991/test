import { NextApiResponse } from 'next';

import { getUser } from './getUser';

import { UserType } from 'src/state/userType';

export default async (
  { query: { uid } }: { query: { uid: string } },
  res: NextApiResponse,
) => {
  const getTheUser = (await getUser()) as UserType;
  const { id } = getTheUser;

  if (+uid === id) {
    res.status(200).json({ status: 200, getTheUser });
  } else {
    res
      .status(404)
      .json({ status: 404, message: `User with id: ${id} not found.` });
  }
};
