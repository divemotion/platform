CREATE TABLE "public"."cabin_facility" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "cabin" uuid NOT NULL, "facility" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("cabin") REFERENCES "public"."cabin"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("facility") REFERENCES "public"."facility"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("cabin", "facility"));
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
CREATE TRIGGER "set_public_cabin_facility_updated_at"
BEFORE UPDATE ON "public"."cabin_facility"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_cabin_facility_updated_at" ON "public"."cabin_facility" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
