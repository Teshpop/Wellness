import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "aws.connect.psdb.cloud",
  user: "cyxvl7j6u7qx5f24mscd",
  password: "pscale_pw_2qhbdeRnabQI7JHu0P3M9l7PP7Jr9NRJeyyDv4dSQGr",
  database: "bdwellness",
  ssl: {
    rejectUnauthorized: false,
  },
});
