import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import {
  boolean,
  pgTable,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const IDsTable = pgTable(
  "ids",
  {
    id: varchar("id", { length: 16 }).primaryKey().notNull(),
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

export type ID = InferSelectModel<typeof IDsTable>;
export type NewID = InferInsertModel<typeof IDsTable>;
