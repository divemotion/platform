CREATE TABLE "public"."cabin" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "name_th" text NOT NULL, "name_en" text NOT NULL, "name_zh" text, "cabin_width" numeric, "cabin_length" numeric, "main_image_file_name" text, "image_file_names" jsonb, "boat" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("boat") REFERENCES "public"."boat"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
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
CREATE TRIGGER "set_public_cabin_updated_at"
BEFORE UPDATE ON "public"."cabin"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_cabin_updated_at" ON "public"."cabin" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
