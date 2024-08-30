import passport from "passport";
import {Strategy as GoogleStrategy} from "passport-google-oauth20";
import { User } from "../models/user.model.js";
import 'dotenv/config'; 


const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
console.log('GOOGLE_CLIENT_ID:', GOOGLE_CLIENT_ID); // Should print your client ID
console.log('GOOGLE_CLIENT_SECRET:', GOOGLE_CLIENT_SECRET); // Should print your client secret


passport.use(
    new GoogleStrategy(
    {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/auth/google/callback",
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