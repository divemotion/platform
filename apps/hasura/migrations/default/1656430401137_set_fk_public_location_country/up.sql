alter table "public"."location"
  add constraint "location_country_fkey"
  foreign key ("country")
  references "public"."country"
  ("id") on update restrict on delete restrict;
