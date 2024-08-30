import passport from "passport";
import {Strategy as GoogleStrategy} from "passport-google-oauth20";
import { User } from "../models/user.model";


const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
    new GoogleStrategy(
    {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
    },

  function(accessToken, refreshToken, profile, cb) {
   try{
        const user = await User.findOne({ googleId: profile.id });
   }
   catch(error){

   }
  }
));