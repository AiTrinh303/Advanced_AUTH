import passport from "passport";
import {Strategy as GoogleStrategy} from "passport-google-oauth20";
import {Strategy as GithubStrategy} from "passport-github2";
import {Strategy as FacebookStrategy} from "passport-facebook";
import { User } from "../models/user.model.js";
import dotenv from 'dotenv';
dotenv.config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;
const FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET;

// Check if the environment variables are loaded correctly
if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
    throw new Error("Missing Google Client ID or Secret");
}

passport.use(
    new GoogleStrategy(
    {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: `/auth/google/callback`,
    },
    

  async function(accessToken, refreshToken, profile, done) {
    console.log(profile);
   try{
        const user = await User.findOne({ email: profile.emails[0].value });
        if(user) return done(null, user);
       
        const newUser = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            // avatar: profile.photos[0].value,
            isVerified: true,
            password: "",
        });

        await newUser.save();
        return done(null, newUser);
   }
   catch(error){
        return done(error, null);
   }
  }
));

passport.use(
    new GithubStrategy(
      {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback",
      },
      async function(accessToken, refreshToken, profile, done) {
        console.log(profile);
       try{
            const user = await User.findOne({ email: profile.emails[0].value });
            if(user) return done(null, user);
           
            const newUser = new User({
                name: profile.displayName,
                email: profile._json,
                // avatar: profile.photos[0].value,
                isVerified: true,
                password: "",
            });
    
            await newUser.save();
            return done(null, newUser);
       }
       catch(error){
            return done(error, null);
       }
      }
    )
  );
  
  passport.use(
    new FacebookStrategy(
      {
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "/auth/facebook/callback",
      },
      async function(accessToken, refreshToken, profile, done) {
        console.log(profile);
       try{
            const user = await User.findOne({ email: profile.emails[0].value });
            if(user) return done(null, user);
           
            const newUser = new User({
                name: profile.displayName,
                email: profile.emails[0].value,
                // avatar: profile.photos[0].value,
                isVerified: true,
                password: "",
            });
    
            await newUser.save();
            return done(null, newUser);
       }
       catch(error){
            return done(error, null);
       }
      }
    )
  );

//Serialize and Deserialize user for cookies
passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try{
        const user = await User.findById(id);
        done(null, user);
    }
    catch(error){
        done(error, null);
    }
}
);

export default passport;