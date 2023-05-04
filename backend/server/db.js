import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "aws.connect.psdb.cloud",
  user: "1ovl0xfxzu8j6wxcjwna",
  password: "pscale_pw_RSP3hvG55J5p6F10uvgf6i7w1bzsIJCXDEGMoZffgFL",
  database: "bdwellness",
  ssl: {
    rejectUnauthorized: false,
  },
});
