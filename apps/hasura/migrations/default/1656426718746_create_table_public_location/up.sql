CREATE TABLE "public"."location" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name_th" text, "name_en" text, "name_zh" text NOT NULL, PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
