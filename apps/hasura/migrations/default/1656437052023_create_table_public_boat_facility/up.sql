CREATE TABLE "public"."boat_facility" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "boat" uuid NOT NULL, "facility" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("boat") REFERENCES "public"."boat"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("facility") REFERENCES "public"."facility"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("boat", "facility"));
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
CREATE TRIGGER "set_public_boat_facility_updated_at"
BEFORE UPDATE ON "public"."boat_facility"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_boat_facility_updated_at" ON "public"."boat_facility" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
