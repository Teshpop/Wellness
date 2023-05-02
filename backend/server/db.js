import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "aws.connect.psdb.cloud",
  user: "hyboglise2af7gqi1fp7",
  password: "pscale_pw_7KiZrTHS87YxS1UEJahJ0znjs0ZlaJxGTwfE6pJjL50",
  database: "bdwellness",
  ssl: {
    rejectUnauthorized: false,
  },
});
