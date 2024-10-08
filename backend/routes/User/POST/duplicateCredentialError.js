import express from "express";
import models from "../../../models/index.js"
/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 * @param {express.NextFunction} next
 */
const duplicateCredentialError = async (request,response,next) => {
  try{
    const user = new models.Models.UserModel({...request.body,Avatar:request.files.Avatar.data});
    let doc = JSON.parse(JSON.stringify(await user.save()));
    delete doc.Avatar;
    delete doc.__v;
    delete doc.Password;
    request.body = doc;
    next();
  }catch(e){
    response.status(409).json({err:e.message});
  }

}
export default duplicateCredentialError;