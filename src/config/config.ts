export const config = {
  postgress: {
    /*
    username: "udagramfflmdev",
    password: "udagramfflmdevpwd",
    database: "udagramfflmdev",
    host: "udagramfflmdev.cc6gstozs74z.us-east-1.rds.amazonaws.com",
    */
    username: process.env.POSTGRESS_USERNAME,
    password: process.env.POSTGRESS_PASSWORD,
    database: process.env.POSTGRESS_DATABASE,
    host: process.env.POSTGRESS_HOST,
    dialect: "postgres",
  },
  aws: {
    aws_region: "us-east-1",
    aws_profile: "default",
    aws_media_bucket: "udagram-fflm-dev",
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres",
  },
};
