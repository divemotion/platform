CREATE TABLE "public"."trip" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "name_th" text NOT NULL, "name_en" text, "name_zh" text, "start_date" date NOT NULL, "end_date" date NOT NULL, "number_of_dives" numeric NOT NULL, "airport" text, "description_th" text NOT NULL, "description_en" text, "description_zh" text, "equipment_rental_rate_th" text, "equipment_rental_rate_en" text, "equipment_rental_rate_zh" text, "notice_th" text, "notice_en" text, "notice_zh" text, "image_file_names" jsonb, "main_image_file_name" text, PRIMARY KEY ("id") );
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
CREATE TRIGGER "set_public_trip_updated_at"
BEFORE UPDATE ON "public"."trip"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_trip_updated_at" ON "public"."trip" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
