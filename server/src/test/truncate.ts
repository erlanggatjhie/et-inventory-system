import db from '../models/db';

export default async function truncate() {
  return Promise.all(
    Object.keys(db.models).map(modelName =>
      db.models[modelName].destroy({ where: {}, force: true })
    )
  );
}
