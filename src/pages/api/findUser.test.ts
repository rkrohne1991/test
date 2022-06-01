import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks, RequestMethod } from 'node-mocks-http';

import { getUser } from './getUser';

import { UserType } from 'src/state/userType';

describe('findUser', () => {
  function mockRequestResponse(method: RequestMethod = 'GET') {
    const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
      createMocks({ method });

    const userId = 8512;
    req.query = { uid: `${userId}` };
    return { req, res };
  }

  it('finding the user based on the url params', async () => {
    const { res, req } = mockRequestResponse();
    const { uid } = req.query;

    const getTheUser = (await getUser()) as UserType;
    const { id } = getTheUser;
    expect(res.statusCode).toBe(200);
    expect(+uid).toBe(id);
  });
});

export {};
