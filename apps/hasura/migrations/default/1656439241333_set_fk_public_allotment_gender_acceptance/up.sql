alter table "public"."allotment"
  add constraint "allotment_gender_acceptance_fkey"
  foreign key ("gender_acceptance")
  references "public"."gender_acceptance"
  ("id") on update restrict on delete restrict;
