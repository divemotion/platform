CREATE TABLE "public"."trip_location" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "trip" uuid NOT NULL, "location" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("trip") REFERENCES "public"."trip"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("location") REFERENCES "public"."location"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("trip", "location"));
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
CREATE TRIGGER "set_public_trip_location_updated_at"
BEFORE UPDATE ON "public"."trip_location"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_trip_location_updated_at" ON "public"."trip_location" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
