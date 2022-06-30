alter table "public"."trip"
  add constraint "trip_organizer_fkey"
  foreign key ("organizer")
  references "public"."organizer"
  ("id") on update restrict on delete restrict;
