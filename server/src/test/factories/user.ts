import User from '../../models/user';
import faker from 'faker';
import bcrypt from 'bcrypt';

export default async function createUser(
  props: {
    userName?: string;
    password?: string;
  } = {}
) {
  return User.create(
    Object.assign(
      {},
      {
        userName: faker.fake('username'),
        passwordHash: await bcrypt.hash(faker.fake('password'), 10)
      },
      {
        ...props,
        passwordHash: await bcrypt.hash(props.password, 10)
      }
    )
  );
}
