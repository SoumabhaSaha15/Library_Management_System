import {z} from "zod"
/**
 * @typedef UserObject
 * @property {z.ZodString} Name
 * @property {z.ZodString} Email
 * @property {z.ZodString} Password 
 */
/**
 * @description it is only all text fields (like name email password) validation.
 * @type {z.ZodObject<UserObject>}
 */
const UserSignUpSchema= z.strictObject({
  Name:z.string({required_error:"Name field is required"}).min(4,"minimum mame length should be 4"),
  Email:z.string({required_error:"Email field is required"}).email("not a valid email"),
  Password:z.string({required_error:"Password field is required"}).min(8,"Password must be 8 charecter long").regex(/^[\x21-\x7E]{8,}$/,"password must exclude space and non ASCII charecters")
});

/**
 * @typedef UserLogInObject
 * @property {z.ZodString} Email
 * @property {z.ZodString} Password 
 */

/**
 * @description it is only used for Client Login.
 * @type {z.ZodObject<UserLogInObject>}
 */
const UserLoginSchema = z.strictObject({
  Email:z.string({required_error:"Email field is required"}).email("not a valid email"),
  Password:z.string({required_error:"Password field is required"})
});
export default {UserLoginSchema,UserSignUpSchema};