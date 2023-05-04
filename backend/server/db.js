import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "aws.connect.psdb.cloud",
  user: "w3bacahgdipss5dcnnxh",
  password: "pscale_pw_9ure998KQn07kmpafW1kZgxaanVL2AbWRKTOWnBWkPm",
  database: "bdwellness",
  ssl: {
    rejectUnauthorized: false,
  },
});
