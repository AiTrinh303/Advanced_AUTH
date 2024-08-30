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

  async function(accessToken, refreshToken, profile, done) {
   try{
        const user = await User.findOne({ email: profile.emails[0].value });
        if(user) return done(null, user);
       
        const newUser = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            // avatar: profile.photos[0].value,
            isVerified: true,
            password: profile.id,
        });
   }
   catch(error){

   }
  }
));