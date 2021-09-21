import { FastifyInstance } from "fastify";
import { FastifyPluginAsync, FastifyPluginOptions } from "fastify";
import fp from "fastify-plugin";
import mongoose from "mongoose";
import { Meeting } from "./meetingModel";
export interface Models {
  Meeting: Meeting;
}
export interface Db {
  models: Models;
}

// define options
export interface MyPluginOptions {
  uri: string;
}
const ConnectDB: FastifyPluginAsync<MyPluginOptions> = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) => {
  try {
    mongoose.connection.on("connected", () => {
      fastify.log.info({ actor: "MongoDB" }, "connected");
    });
    mongoose.connection.on("disconnected", () => {
      fastify.log.error({ actor: "MongoDB" }, "disconnected");
    });
    const db = await mongoose.connect(options.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    const models: Models = { Meeting };
    fastify.decorate("db", { models });
  } catch (error) {
    console.error(error);
  }
};
export default fp(ConnectDB);
