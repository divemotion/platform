CREATE TABLE "public"."schedule" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "from_date" date NOT NULL, "to_date" date, "short_description_th" text NOT NULL, "short_description_en" text, "short_description_zh" text, "description_th" text, "description_en" text, "description_zh" text, "number_of_day_dives" integer, "number_of_night_dives" integer, "trip_id" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("trip_id") REFERENCES "public"."trip"("id") ON UPDATE restrict ON DELETE restrict);
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
CREATE TRIGGER "set_public_schedule_updated_at"
BEFORE UPDATE ON "public"."schedule"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_schedule_updated_at" ON "public"."schedule" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
