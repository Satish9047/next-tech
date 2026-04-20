import { betterAuth } from "better-auth";
import { createAuthEndpoint } from "better-auth/api";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";
import { admin } from "better-auth/plugins";

// Reusable plugin to explicitly generate sessions using custom Mongoose credentials
const mongooseCredentialsPlugin = () => {
  return {
    id: "mongoose-credentials",
    endpoints: {
      createMongooseSession: createAuthEndpoint(
        "/create-mongoose-session",
        {
          method: "POST",
        },
        async (ctx: any) => {
          const body = ctx.body as {
            userId: string;
            email: string;
            role: string;
          };

          if (!body || !body.userId) {
            return ctx.json({ error: "Missing userId" }, { status: 400 });
          }

          // Let better-auth internally mint a standard session for this specific User ID
          const session = await ctx.context.internalAdapter.createSession(
            body.userId,
            false, // dontRememberMe (or pass as needed)
          );

          if (session) {
            ctx.setCookie(
              ctx.context.authCookies.sessionToken.name,
              session.token,
              {
                ...ctx.context.authCookies.sessionToken.options,
                expires: session.expiresAt,
              },
            );
          }
          return ctx.json(session);
        },
      ),
    },
  };
};

const client = new MongoClient(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/nexttech-auth",
);
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db),
  user: {
    modelName: "users", // Map better-auth 'user' to Mongoose 'users' schema
    additionalFields: {
      role: { type: "string" },
      contact: { type: "string" },
      fullName: { type: "string" },
      address: { type: "string" },
    },
  },
  plugins: [admin(), mongooseCredentialsPlugin()],
});
