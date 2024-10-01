import { Router } from "express";
// import {
//   register,
//   login,
//   getUserProfile,
//   getNewAccessToken,
//   changePassword,
//   logout,
//   logoutAll,
//   deleteUser,
//   forgotPassword,
// } from "./auth.controller";

import {register , login , logout , updateProfile} from './user.controller'
import isAuthenticated from "../../middleware/auth";

// import { accessAuth } from "../../middleware/auth";
// import { role } from "../../middleware/role";
// import { refAuth } from "../../middleware/refAuth";
// import { inviteAuth } from "../../middleware/inviteAuth";
// import { deactivateUser } from "./auth.controller";
// import { activateUser } from "./auth.controller";
// import { getUserStatus } from "./auth.controller";

const userRouter = Router();

userRouter.post("/register", register);
// auth.delete("/delete", deleteUser);
// auth.patch("/deactivate", deactivateUser);
// auth.patch("/activate", activateUser);
userRouter.post("/login", login);
// // auth.get("/me", [accessAuth, role], getUserProfile);
// auth.get("/me", [accessAuth], getUserProfile);
// auth.post("/refresh", [refAuth], getNewAccessToken);
userRouter.patch("/updateprofile", [isAuthenticated], updateProfile);
userRouter.delete("/logout", [isAuthenticated], logout);
// auth.post("/logoutAll", accessAuth, logoutAll);
// // auth.post("/refresh", [refAuth], getNewAccessToken);
// auth.patch("/password", accessAuth, changePassword);
// auth.patch("/invitePass", inviteAuth, changePassword);

// auth.patch("/forgotpassword", forgotPassword);
// auth.get("/status/:email", getUserStatus);

export default userRouter;