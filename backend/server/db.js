import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "aws.connect.psdb.cloud",
  user: "5g4qrdilm98gamrxq13z",
  password: "pscale_pw_MleDEeHt62FpySw7w7zkCDvnq8QeqJAwERD0DM52xxq",
  database: "bdwellness",
  ssl: {
    rejectUnauthorized: false,
  },
});
