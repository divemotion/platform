alter table "public"."trip"
  add constraint "trip_boat_fkey"
  foreign key ("boat")
  references "public"."boat"
  ("id") on update restrict on delete restrict;
