import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import {
  boolean,
  pgTable,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";
import { ID_MAX_LEN, USERNAME_MAX_LEN } from "./constants";

export const ids = pgTable(
  "ids",
  {
    id: varchar("id", { length: ID_MAX_LEN }).primaryKey().notNull(),
    taken: boolean("taken").default(true).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (ids) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(ids.id),
    };
  }
);

export const users = pgTable("users", {
  id: varchar("id", { length: ID_MAX_LEN })
    .primaryKey()
    .notNull()
    .unique()
    .references(() => ids.id),
  firstName: varchar("first_name").notNull(),
  lastName: varchar("last_name").notNull(),
  username: varchar("username", { length: USERNAME_MAX_LEN })
    .notNull()
    .unique(),
  email: varchar("email").notNull().unique(),
  password: varchar("pass"),
  country: varchar("country").notNull(),
  city: varchar("city").notNull(),
});

export const usersRelations = relations(users, ({ one }) => ({
  id: one(ids, {
    fields: [users.id],
    references: [ids.id],
  }),
}));

export type ID = InferSelectModel<typeof ids>;
export type NewID = InferInsertModel<typeof ids>;
