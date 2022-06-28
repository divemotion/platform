CREATE TABLE "public"."boat_safety" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "boat" uuid NOT NULL, "safety" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("boat") REFERENCES "public"."boat"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("safety") REFERENCES "public"."safety"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("boat", "safety"));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_boat_safety_updated_at"
BEFORE UPDATE ON "public"."boat_safety"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_boat_safety_updated_at" ON "public"."boat_safety" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
