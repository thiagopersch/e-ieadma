declare namespace Express {
  export interface Request {
    user: {
      ID: string;
    };
    profile: {
      ID: string;
      GECCLESIASTICALFIELD_ID: string;
    };
  }
}
