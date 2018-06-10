import Axios from "axios";
import dotenv from "dotenv";
dotenv.config();

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: process.env.GREETINGS
  });
};
