import * as dotenv from "dotenv";
dotenv.config();
import { db } from "./planets.mjs";
import passport from "passport";
import passportJWT from "passport-jwt";
const { SECRET } = process.env;
passport.use(
  new passportJWT.Strategy(
    {
      secretOrKey: SECRET,
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload, done) => {
      const user = await db.one("SELECT * FROM users WHERE id=$1", payload.id);
      console.log(user);
      try {
        return user ? done(null, user) : done(new Error("user not found"));
      } catch (error) {
        done(error);
      }
    }
  )
);
