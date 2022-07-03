import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  jsonb: any;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "allotment" */
export type Allotment = {
  __typename?: 'allotment';
  /** An array relationship */
  booking_allotments: Array<Booking_Allotment>;
  /** An aggregate relationship */
  booking_allotments_aggregate: Booking_Allotment_Aggregate;
  cabin: Scalars['uuid'];
  /** An object relationship */
  cabinByCabin: Cabin;
  created_at: Scalars['timestamptz'];
  /** Price per diver */
  discount_price?: Maybe<Scalars['numeric']>;
  /** Price per diver */
  foreigner_discount_price?: Maybe<Scalars['numeric']>;
  /** Price per diver */
  foreigner_price?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  genderAcceptanceByGenderAcceptance: Gender_Acceptance;
  gender_acceptance: Scalars['String'];
  id: Scalars['uuid'];
  max_guest_capacity: Scalars['numeric'];
  /** Price per diver */
  price: Scalars['numeric'];
  remaining_seat: Scalars['numeric'];
  trip: Scalars['uuid'];
  /** An object relationship */
  tripByTrip: Trip;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "allotment" */
export type AllotmentBooking_AllotmentsArgs = {
  distinct_on?: InputMaybe<Array<Booking_Allotment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Allotment_Order_By>>;
  where?: InputMaybe<Booking_Allotment_Bool_Exp>;
};


/** columns and relationships of "allotment" */
export type AllotmentBooking_Allotments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Allotment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Allotment_Order_By>>;
  where?: InputMaybe<Booking_Allotment_Bool_Exp>;
};

/** aggregated selection of "allotment" */
export type Allotment_Aggregate = {
  __typename?: 'allotment_aggregate';
  aggregate?: Maybe<Allotment_Aggregate_Fields>;
  nodes: Array<Allotment>;
};

/** aggregate fields of "allotment" */
export type Allotment_Aggregate_Fields = {
  __typename?: 'allotment_aggregate_fields';
  avg?: Maybe<Allotment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Allotment_Max_Fields>;
  min?: Maybe<Allotment_Min_Fields>;
  stddev?: Maybe<Allotment_Stddev_Fields>;
  stddev_pop?: Maybe<Allotment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Allotment_Stddev_Samp_Fields>;
  sum?: Maybe<Allotment_Sum_Fields>;
  var_pop?: Maybe<Allotment_Var_Pop_Fields>;
  var_samp?: Maybe<Allotment_Var_Samp_Fields>;
  variance?: Maybe<Allotment_Variance_Fields>;
};


/** aggregate fields of "allotment" */
export type Allotment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Allotment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "allotment" */
export type Allotment_Aggregate_Order_By = {
  avg?: InputMaybe<Allotment_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Allotment_Max_Order_By>;
  min?: InputMaybe<Allotment_Min_Order_By>;
  stddev?: InputMaybe<Allotment_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Allotment_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Allotment_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Allotment_Sum_Order_By>;
  var_pop?: InputMaybe<Allotment_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Allotment_Var_Samp_Order_By>;
  variance?: InputMaybe<Allotment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "allotment" */
export type Allotment_Arr_Rel_Insert_Input = {
  data: Array<Allotment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Allotment_On_Conflict>;
};

/** aggregate avg on columns */
export type Allotment_Avg_Fields = {
  __typename?: 'allotment_avg_fields';
  /** Price per diver */
  discount_price?: Maybe<Scalars['Float']>;
  /** Price per diver */
  foreigner_discount_price?: Maybe<Scalars['Float']>;
  /** Price per diver */
  foreigner_price?: Maybe<Scalars['Float']>;
  max_guest_capacity?: Maybe<Scalars['Float']>;
  /** Price per diver */
  price?: Maybe<Scalars['Float']>;
  remaining_seat?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "allotment" */
export type Allotment_Avg_Order_By = {
  /** Price per diver */
  discount_price?: InputMaybe<Order_By>;
  /** Price per diver */
  foreigner_discount_price?: InputMaybe<Order_By>;
  /** Price per diver */
  foreigner_price?: InputMaybe<Order_By>;
  max_guest_capacity?: InputMaybe<Order_By>;
  /** Price per diver */
  price?: InputMaybe<Order_By>;
  remaining_seat?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "allotment". All fields are combined with a logical 'AND'. */
export type Allotment_Bool_Exp = {
  _and?: InputMaybe<Array<Allotment_Bool_Exp>>;
  _not?: InputMaybe<Allotment_Bool_Exp>;
  _or?: InputMaybe<Array<Allotment_Bool_Exp>>;
  booking_allotments?: InputMaybe<Booking_Allotment_Bool_Exp>;
  cabin?: InputMaybe<Uuid_Comparison_Exp>;
  cabinByCabin?: InputMaybe<Cabin_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  discount_price?: InputMaybe<Numeric_Comparison_Exp>;
  foreigner_discount_price?: InputMaybe<Numeric_Comparison_Exp>;
  foreigner_price?: InputMaybe<Numeric_Comparison_Exp>;
  genderAcceptanceByGenderAcceptance?: InputMaybe<Gender_Acceptance_Bool_Exp>;
  gender_acceptance?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  max_guest_capacity?: InputMaybe<Numeric_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  remaining_seat?: InputMaybe<Numeric_Comparison_Exp>;
  trip?: InputMaybe<Uuid_Comparison_Exp>;
  tripByTrip?: InputMaybe<Trip_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "allotment" */
export enum Allotment_Constraint {
  /** unique or primary key constraint */
  AllotmentPkey = 'allotment_pkey'
}

/** input type for incrementing numeric columns in table "allotment" */
export type Allotment_Inc_Input = {
  /** Price per diver */
  discount_price?: InputMaybe<Scalars['numeric']>;
  /** Price per diver */
  foreigner_discount_price?: InputMaybe<Scalars['numeric']>;
  /** Price per diver */
  foreigner_price?: InputMaybe<Scalars['numeric']>;
  max_guest_capacity?: InputMaybe<Scalars['numeric']>;
  /** Price per diver */
  price?: InputMaybe<Scalars['numeric']>;
  remaining_seat?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "allotment" */
export type Allotment_Insert_Input = {
  booking_allotments?: InputMaybe<Booking_Allotment_Arr_Rel_Insert_Input>;
  cabin?: InputMaybe<Scalars['uuid']>;
  cabinByCabin?: InputMaybe<Cabin_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  /** Price per diver */
  discount_price?: InputMaybe<Scalars['numeric']>;
  /** Price per diver */
  foreigner_discount_price?: InputMaybe<Scalars['numeric']>;
  /** Price per diver */
  foreigner_price?: InputMaybe<Scalars['numeric']>;
  genderAcceptanceByGenderAcceptance?: InputMaybe<Gender_Acceptance_Obj_Rel_Insert_Input>;
  gender_acceptance?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  max_guest_capacity?: InputMaybe<Scalars['numeric']>;
  /** Price per diver */
  price?: InputMaybe<Scalars['numeric']>;
  remaining_seat?: InputMaybe<Scalars['numeric']>;
  trip?: InputMaybe<Scalars['uuid']>;
  tripByTrip?: InputMaybe<Trip_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Allotment_Max_Fields = {
  __typename?: 'allotment_max_fields';
  cabin?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  /** Price per diver */
  discount_price?: Maybe<Scalars['numeric']>;
  /** Price per diver */
  foreigner_discount_price?: Maybe<Scalars['numeric']>;
  /** Price per diver */
  foreigner_price?: Maybe<Scalars['numeric']>;
  gender_acceptance?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  max_guest_capacity?: Maybe<Scalars['numeric']>;
  /** Price per diver */
  price?: Maybe<Scalars['numeric']>;
  remaining_seat?: Maybe<Scalars['numeric']>;
  trip?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "allotment" */
export type Allotment_Max_Order_By = {
  cabin?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** Price per diver */
  discount_price?: InputMaybe<Order_By>;
  /** Price per diver */
  foreigner_discount_price?: InputMaybe<Order_By>;
  /** Price per diver */
  foreigner_price?: InputMaybe<Order_By>;
  gender_acceptance?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_guest_capacity?: InputMaybe<Order_By>;
  /** Price per diver */
  price?: InputMaybe<Order_By>;
  remaining_seat?: InputMaybe<Order_By>;
  trip?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Allotment_Min_Fields = {
  __typename?: 'allotment_min_fields';
  cabin?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  /** Price per diver */
  discount_price?: Maybe<Scalars['numeric']>;
  /** Price per diver */
  foreigner_discount_price?: Maybe<Scalars['numeric']>;
  /** Price per diver */
  foreigner_price?: Maybe<Scalars['numeric']>;
  gender_acceptance?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  max_guest_capacity?: Maybe<Scalars['numeric']>;
  /** Price per diver */
  price?: Maybe<Scalars['numeric']>;
  remaining_seat?: Maybe<Scalars['numeric']>;
  trip?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "allotment" */
export type Allotment_Min_Order_By = {
  cabin?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** Price per diver */
  discount_price?: InputMaybe<Order_By>;
  /** Price per diver */
  foreigner_discount_price?: InputMaybe<Order_By>;
  /** Price per diver */
  foreigner_price?: InputMaybe<Order_By>;
  gender_acceptance?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_guest_capacity?: InputMaybe<Order_By>;
  /** Price per diver */
  price?: InputMaybe<Order_By>;
  remaining_seat?: InputMaybe<Order_By>;
  trip?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "allotment" */
export type Allotment_Mutation_Response = {
  __typename?: 'allotment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Allotment>;
};

/** input type for inserting object relation for remote table "allotment" */
export type Allotment_Obj_Rel_Insert_Input = {
  data: Allotment_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Allotment_On_Conflict>;
};

/** on_conflict condition type for table "allotment" */
export type Allotment_On_Conflict = {
  constraint: Allotment_Constraint;
  update_columns?: Array<Allotment_Update_Column>;
  where?: InputMaybe<Allotment_Bool_Exp>;
};

/** Ordering options when selecting data from "allotment". */
export type Allotment_Order_By = {
  booking_allotments_aggregate?: InputMaybe<Booking_Allotment_Aggregate_Order_By>;
  cabin?: InputMaybe<Order_By>;
  cabinByCabin?: InputMaybe<Cabin_Order_By>;
  created_at?: InputMaybe<Order_By>;
  discount_price?: InputMaybe<Order_By>;
  foreigner_discount_price?: InputMaybe<Order_By>;
  foreigner_price?: InputMaybe<Order_By>;
  genderAcceptanceByGenderAcceptance?: InputMaybe<Gender_Acceptance_Order_By>;
  gender_acceptance?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_guest_capacity?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  remaining_seat?: InputMaybe<Order_By>;
  trip?: InputMaybe<Order_By>;
  tripByTrip?: InputMaybe<Trip_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: allotment */
export type Allotment_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "allotment" */
export enum Allotment_Select_Column {
  /** column name */
  Cabin = 'cabin',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DiscountPrice = 'discount_price',
  /** column name */
  ForeignerDiscountPrice = 'foreigner_discount_price',
  /** column name */
  ForeignerPrice = 'foreigner_price',
  /** column name */
  GenderAcceptance = 'gender_acceptance',
  /** column name */
  Id = 'id',
  /** column name */
  MaxGuestCapacity = 'max_guest_capacity',
  /** column name */
  Price = 'price',
  /** column name */
  RemainingSeat = 'remaining_seat',
  /** column name */
  Trip = 'trip',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "allotment" */
export type Allotment_Set_Input = {
  cabin?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  /** Price per diver */
  discount_price?: InputMaybe<Scalars['numeric']>;
  /** Price per diver */
  foreigner_discount_price?: InputMaybe<Scalars['numeric']>;
  /** Price per diver */
  foreigner_price?: InputMaybe<Scalars['numeric']>;
  gender_acceptance?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  max_guest_capacity?: InputMaybe<Scalars['numeric']>;
  /** Price per diver */
  price?: InputMaybe<Scalars['numeric']>;
  remaining_seat?: InputMaybe<Scalars['numeric']>;
  trip?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "allotment_status" */
export type Allotment_Status = {
  __typename?: 'allotment_status';
  created_at?: Maybe<Scalars['timestamptz']>;
  description_en: Scalars['String'];
  description_th: Scalars['String'];
  description_zh: Scalars['String'];
  id: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "allotment_status" */
export type Allotment_Status_Aggregate = {
  __typename?: 'allotment_status_aggregate';
  aggregate?: Maybe<Allotment_Status_Aggregate_Fields>;
  nodes: Array<Allotment_Status>;
};

/** aggregate fields of "allotment_status" */
export type Allotment_Status_Aggregate_Fields = {
  __typename?: 'allotment_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Allotment_Status_Max_Fields>;
  min?: Maybe<Allotment_Status_Min_Fields>;
};


/** aggregate fields of "allotment_status" */
export type Allotment_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Allotment_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "allotment_status". All fields are combined with a logical 'AND'. */
export type Allotment_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Allotment_Status_Bool_Exp>>;
  _not?: InputMaybe<Allotment_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Allotment_Status_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description_en?: InputMaybe<String_Comparison_Exp>;
  description_th?: InputMaybe<String_Comparison_Exp>;
  description_zh?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "allotment_status" */
export enum Allotment_Status_Constraint {
  /** unique or primary key constraint */
  AllotmentStatusPkey = 'allotment_status_pkey'
}

/** input type for inserting data into table "allotment_status" */
export type Allotment_Status_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description_en?: InputMaybe<Scalars['String']>;
  description_th?: InputMaybe<Scalars['String']>;
  description_zh?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Allotment_Status_Max_Fields = {
  __typename?: 'allotment_status_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description_en?: Maybe<Scalars['String']>;
  description_th?: Maybe<Scalars['String']>;
  description_zh?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Allotment_Status_Min_Fields = {
  __typename?: 'allotment_status_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description_en?: Maybe<Scalars['String']>;
  description_th?: Maybe<Scalars['String']>;
  description_zh?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "allotment_status" */
export type Allotment_Status_Mutation_Response = {
  __typename?: 'allotment_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Allotment_Status>;
};

/** on_conflict condition type for table "allotment_status" */
export type Allotment_Status_On_Conflict = {
  constraint: Allotment_Status_Constraint;
  update_columns?: Array<Allotment_Status_Update_Column>;
  where?: InputMaybe<Allotment_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "allotment_status". */
export type Allotment_Status_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description_en?: InputMaybe<Order_By>;
  description_th?: InputMaybe<Order_By>;
  description_zh?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: allotment_status */
export type Allotment_Status_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "allotment_status" */
export enum Allotment_Status_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DescriptionEn = 'description_en',
  /** column name */
  DescriptionTh = 'description_th',
  /** column name */
  DescriptionZh = 'description_zh',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "allotment_status" */
export type Allotment_Status_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description_en?: InputMaybe<Scalars['String']>;
  description_th?: InputMaybe<Scalars['String']>;
  description_zh?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "allotment_status" */
export enum Allotment_Status_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DescriptionEn = 'description_en',
  /** column name */
  DescriptionTh = 'description_th',
  /** column name */
  DescriptionZh = 'description_zh',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Allotment_Stddev_Fields = {
  __typename?: 'allotment_stddev_fields';
  /** Price per diver */
  discount_price?: Maybe<Scalars['Float']>;
  /** Price per diver */
  foreigner_discount_price?: Maybe<Scalars['Float']>;
  /** Price per diver */
  foreigner_price?: Maybe<Scalars['Float']>;
  max_guest_capacity?: Maybe<Scalars['Float']>;
  /** Price per diver */
  price?: Maybe<Scalars['Float']>;
  remaining_seat?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "allotment" */
export type Allotment_Stddev_Order_By = {
  /** Price per diver */
  discount_price?: InputMaybe<Order_By>;
  /** Price per diver */
  foreigner_discount_price?: InputMaybe<Order_By>;
  /** Price per diver */
  foreigner_price?: InputMaybe<Order_By>;
  max_guest_capacity?: InputMaybe<Order_By>;
  /** Price per diver */
  price?: InputMaybe<Order_By>;
  remaining_seat?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Allotment_Stddev_Pop_Fields = {
  __typename?: 'allotment_stddev_pop_fields';
  /** Price per diver */
  discount_price?: Maybe<Scalars['Float']>;
  /** Price per diver */
  foreigner_discount_price?: Maybe<Scalars['Float']>;
  /** Price per diver */
  foreigner_price?: Maybe<Scalars['Float']>;
  max_guest_capacity?: Maybe<Scalars['Float']>;
  /** Price per diver */
  price?: Maybe<Scalars['Float']>;
  remaining_seat?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "allotment" */
export type Allotment_Stddev_Pop_Order_By = {
  /** Price per diver */
  discount_price?: InputMaybe<Order_By>;
  /** Price per diver */
  foreigner_discount_price?: InputMaybe<Order_By>;
  /** Price per diver */
  foreigner_price?: InputMaybe<Order_By>;
  max_guest_capacity?: InputMaybe<Order_By>;
  /** Price per diver */
  price?: InputMaybe<Order_By>;
  remaining_seat?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Allotment_Stddev_Samp_Fields = {
  __typename?: 'allotment_stddev_samp_fields';
  /** Price per diver */
  discount_price?: Maybe<Scalars['Float']>;
  /** Price per diver */
  foreigner_discount_price?: Maybe<Scalars['Float']>;
  /** Price per diver */
  foreigner_price?: Maybe<Scalars['Float']>;
  max_guest_capacity?: Maybe<Scalars['Float']>;
  /** Price per diver */
  price?: Maybe<Scalars['Float']>;
  remaining_seat?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "allotment" */
export type Allotment_Stddev_Samp_Order_By = {
  /** Price per diver */
  discount_price?: InputMaybe<Order_By>;
  /** Price per diver */
  foreigner_discount_price?: InputMaybe<Order_By>;
  /** Price per diver */
  foreigner_price?: InputMaybe<Order_By>;
  max_guest_capacity?: InputMaybe<Order_By>;
  /** Price per diver */
  price?: InputMaybe<Order_By>;
  remaining_seat?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Allotment_Sum_Fields = {
  __typename?: 'allotment_sum_fields';
  /** Price per diver */
  discount_price?: Maybe<Scalars['numeric']>;
  /** Price per diver */
  foreigner_discount_price?: Maybe<Scalars['numeric']>;
  /** Price per diver */
  foreigner_price?: Maybe<Scalars['numeric']>;
  max_guest_capacity?: Maybe<Scalars['numeric']>;
  /** Price per diver */
  price?: Maybe<Scalars['numeric']>;
  remaining_seat?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "allotment" */
export type Allotment_Sum_Order_By = {
  /** Price per diver */
  discount_price?: InputMaybe<Order_By>;
  /** Price per diver */
  foreigner_discount_price?: InputMaybe<Order_By>;
  /** Price per diver */
  foreigner_price?: InputMaybe<Order_By>;
  max_guest_capacity?: InputMaybe<Order_By>;
  /** Price per diver */
  price?: InputMaybe<Order_By>;
  remaining_seat?: InputMaybe<Order_By>;
};

/** update columns of table "allotment" */
export enum Allotment_Update_Column {
  /** column name */
  Cabin = 'cabin',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DiscountPrice = 'discount_price',
  /** column name */
  ForeignerDiscountPrice = 'foreigner_discount_price',
  /** column name */
  ForeignerPrice = 'foreigner_price',
  /** column name */
  GenderAcceptance = 'gender_acceptance',
  /** column name */
  Id = 'id',
  /** column name */
  MaxGuestCapacity = 'max_guest_capacity',
  /** column name */
  Price = 'price',
  /** column name */
  RemainingSeat = 'remaining_seat',
  /** column name */
  Trip = 'trip',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Allotment_Var_Pop_Fields = {
  __typename?: 'allotment_var_pop_fields';
  /** Price per diver */
  discount_price?: Maybe<Scalars['Float']>;
  /** Price per diver */
  foreigner_discount_price?: Maybe<Scalars['Float']>;
  /** Price per diver */
  foreigner_price?: Maybe<Scalars['Float']>;
  max_guest_capacity?: Maybe<Scalars['Float']>;
  /** Price per diver */
  price?: Maybe<Scalars['Float']>;
  remaining_seat?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "allotment" */
export type Allotment_Var_Pop_Order_By = {
  /** Price per diver */
  discount_price?: InputMaybe<Order_By>;
  /** Price per diver */
  foreigner_discount_price?: InputMaybe<Order_By>;
  /** Price per diver */
  foreigner_price?: InputMaybe<Order_By>;
  max_guest_capacity?: InputMaybe<Order_By>;
  /** Price per diver */
  price?: InputMaybe<Order_By>;
  remaining_seat?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Allotment_Var_Samp_Fields = {
  __typename?: 'allotment_var_samp_fields';
  /** Price per diver */
  discount_price?: Maybe<Scalars['Float']>;
  /** Price per diver */
  foreigner_discount_price?: Maybe<Scalars['Float']>;
  /** Price per diver */
  foreigner_price?: Maybe<Scalars['Float']>;
  max_guest_capacity?: Maybe<Scalars['Float']>;
  /** Price per diver */
  price?: Maybe<Scalars['Float']>;
  remaining_seat?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "allotment" */
export type Allotment_Var_Samp_Order_By = {
  /** Price per diver */
  discount_price?: InputMaybe<Order_By>;
  /** Price per diver */
  foreigner_discount_price?: InputMaybe<Order_By>;
  /** Price per diver */
  foreigner_price?: InputMaybe<Order_By>;
  max_guest_capacity?: InputMaybe<Order_By>;
  /** Price per diver */
  price?: InputMaybe<Order_By>;
  remaining_seat?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Allotment_Variance_Fields = {
  __typename?: 'allotment_variance_fields';
  /** Price per diver */
  discount_price?: Maybe<Scalars['Float']>;
  /** Price per diver */
  foreigner_discount_price?: Maybe<Scalars['Float']>;
  /** Price per diver */
  foreigner_price?: Maybe<Scalars['Float']>;
  max_guest_capacity?: Maybe<Scalars['Float']>;
  /** Price per diver */
  price?: Maybe<Scalars['Float']>;
  remaining_seat?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "allotment" */
export type Allotment_Variance_Order_By = {
  /** Price per diver */
  discount_price?: InputMaybe<Order_By>;
  /** Price per diver */
  foreigner_discount_price?: InputMaybe<Order_By>;
  /** Price per diver */
  foreigner_price?: InputMaybe<Order_By>;
  max_guest_capacity?: InputMaybe<Order_By>;
  /** Price per diver */
  price?: InputMaybe<Order_By>;
  remaining_seat?: InputMaybe<Order_By>;
};

/** columns and relationships of "boat" */
export type Boat = {
  __typename?: 'boat';
  /** An array relationship */
  boat_facilities: Array<Boat_Facility>;
  /** An aggregate relationship */
  boat_facilities_aggregate: Boat_Facility_Aggregate;
  /** An array relationship */
  boat_safeties: Array<Boat_Safety>;
  /** An aggregate relationship */
  boat_safeties_aggregate: Boat_Safety_Aggregate;
  built_year?: Maybe<Scalars['numeric']>;
  /** An array relationship */
  cabins: Array<Cabin>;
  /** An aggregate relationship */
  cabins_aggregate: Cabin_Aggregate;
  created_at: Scalars['timestamptz'];
  description_en?: Maybe<Scalars['String']>;
  description_th?: Maybe<Scalars['String']>;
  description_zh?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  image_file_names?: Maybe<Scalars['jsonb']>;
  main_image_file_name?: Maybe<Scalars['String']>;
  max_passenger_capacity?: Maybe<Scalars['numeric']>;
  name_en: Scalars['String'];
  name_th: Scalars['String'];
  name_zh?: Maybe<Scalars['String']>;
  /** An array relationship */
  trips: Array<Trip>;
  /** An aggregate relationship */
  trips_aggregate: Trip_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "boat" */
export type BoatBoat_FacilitiesArgs = {
  distinct_on?: InputMaybe<Array<Boat_Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boat_Facility_Order_By>>;
  where?: InputMaybe<Boat_Facility_Bool_Exp>;
};


/** columns and relationships of "boat" */
export type BoatBoat_Facilities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boat_Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boat_Facility_Order_By>>;
  where?: InputMaybe<Boat_Facility_Bool_Exp>;
};


/** columns and relationships of "boat" */
export type BoatBoat_SafetiesArgs = {
  distinct_on?: InputMaybe<Array<Boat_Safety_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boat_Safety_Order_By>>;
  where?: InputMaybe<Boat_Safety_Bool_Exp>;
};


/** columns and relationships of "boat" */
export type BoatBoat_Safeties_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boat_Safety_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boat_Safety_Order_By>>;
  where?: InputMaybe<Boat_Safety_Bool_Exp>;
};


/** columns and relationships of "boat" */
export type BoatCabinsArgs = {
  distinct_on?: InputMaybe<Array<Cabin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cabin_Order_By>>;
  where?: InputMaybe<Cabin_Bool_Exp>;
};


/** columns and relationships of "boat" */
export type BoatCabins_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cabin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cabin_Order_By>>;
  where?: InputMaybe<Cabin_Bool_Exp>;
};


/** columns and relationships of "boat" */
export type BoatImage_File_NamesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "boat" */
export type BoatTripsArgs = {
  distinct_on?: InputMaybe<Array<Trip_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Order_By>>;
  where?: InputMaybe<Trip_Bool_Exp>;
};


/** columns and relationships of "boat" */
export type BoatTrips_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trip_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Order_By>>;
  where?: InputMaybe<Trip_Bool_Exp>;
};

/** aggregated selection of "boat" */
export type Boat_Aggregate = {
  __typename?: 'boat_aggregate';
  aggregate?: Maybe<Boat_Aggregate_Fields>;
  nodes: Array<Boat>;
};

/** aggregate fields of "boat" */
export type Boat_Aggregate_Fields = {
  __typename?: 'boat_aggregate_fields';
  avg?: Maybe<Boat_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Boat_Max_Fields>;
  min?: Maybe<Boat_Min_Fields>;
  stddev?: Maybe<Boat_Stddev_Fields>;
  stddev_pop?: Maybe<Boat_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Boat_Stddev_Samp_Fields>;
  sum?: Maybe<Boat_Sum_Fields>;
  var_pop?: Maybe<Boat_Var_Pop_Fields>;
  var_samp?: Maybe<Boat_Var_Samp_Fields>;
  variance?: Maybe<Boat_Variance_Fields>;
};


/** aggregate fields of "boat" */
export type Boat_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Boat_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Boat_Append_Input = {
  image_file_names?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Boat_Avg_Fields = {
  __typename?: 'boat_avg_fields';
  built_year?: Maybe<Scalars['Float']>;
  max_passenger_capacity?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "boat". All fields are combined with a logical 'AND'. */
export type Boat_Bool_Exp = {
  _and?: InputMaybe<Array<Boat_Bool_Exp>>;
  _not?: InputMaybe<Boat_Bool_Exp>;
  _or?: InputMaybe<Array<Boat_Bool_Exp>>;
  boat_facilities?: InputMaybe<Boat_Facility_Bool_Exp>;
  boat_safeties?: InputMaybe<Boat_Safety_Bool_Exp>;
  built_year?: InputMaybe<Numeric_Comparison_Exp>;
  cabins?: InputMaybe<Cabin_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description_en?: InputMaybe<String_Comparison_Exp>;
  description_th?: InputMaybe<String_Comparison_Exp>;
  description_zh?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_file_names?: InputMaybe<Jsonb_Comparison_Exp>;
  main_image_file_name?: InputMaybe<String_Comparison_Exp>;
  max_passenger_capacity?: InputMaybe<Numeric_Comparison_Exp>;
  name_en?: InputMaybe<String_Comparison_Exp>;
  name_th?: InputMaybe<String_Comparison_Exp>;
  name_zh?: InputMaybe<String_Comparison_Exp>;
  trips?: InputMaybe<Trip_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "boat" */
export enum Boat_Constraint {
  /** unique or primary key constraint */
  BoatPkey = 'boat_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Boat_Delete_At_Path_Input = {
  image_file_names?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Boat_Delete_Elem_Input = {
  image_file_names?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Boat_Delete_Key_Input = {
  image_file_names?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "boat_facility" */
export type Boat_Facility = {
  __typename?: 'boat_facility';
  boat: Scalars['uuid'];
  /** An object relationship */
  boatByBoat: Boat;
  created_at: Scalars['timestamptz'];
  facility: Scalars['String'];
  /** An object relationship */
  facilityByFacility: Facility;
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "boat_facility" */
export type Boat_Facility_Aggregate = {
  __typename?: 'boat_facility_aggregate';
  aggregate?: Maybe<Boat_Facility_Aggregate_Fields>;
  nodes: Array<Boat_Facility>;
};

/** aggregate fields of "boat_facility" */
export type Boat_Facility_Aggregate_Fields = {
  __typename?: 'boat_facility_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Boat_Facility_Max_Fields>;
  min?: Maybe<Boat_Facility_Min_Fields>;
};


/** aggregate fields of "boat_facility" */
export type Boat_Facility_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Boat_Facility_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "boat_facility" */
export type Boat_Facility_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Boat_Facility_Max_Order_By>;
  min?: InputMaybe<Boat_Facility_Min_Order_By>;
};

/** input type for inserting array relation for remote table "boat_facility" */
export type Boat_Facility_Arr_Rel_Insert_Input = {
  data: Array<Boat_Facility_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Boat_Facility_On_Conflict>;
};

/** Boolean expression to filter rows from the table "boat_facility". All fields are combined with a logical 'AND'. */
export type Boat_Facility_Bool_Exp = {
  _and?: InputMaybe<Array<Boat_Facility_Bool_Exp>>;
  _not?: InputMaybe<Boat_Facility_Bool_Exp>;
  _or?: InputMaybe<Array<Boat_Facility_Bool_Exp>>;
  boat?: InputMaybe<Uuid_Comparison_Exp>;
  boatByBoat?: InputMaybe<Boat_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  facility?: InputMaybe<String_Comparison_Exp>;
  facilityByFacility?: InputMaybe<Facility_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "boat_facility" */
export enum Boat_Facility_Constraint {
  /** unique or primary key constraint */
  BoatFacilityBoatFacilityKey = 'boat_facility_boat_facility_key',
  /** unique or primary key constraint */
  BoatFacilityPkey = 'boat_facility_pkey'
}

/** input type for inserting data into table "boat_facility" */
export type Boat_Facility_Insert_Input = {
  boat?: InputMaybe<Scalars['uuid']>;
  boatByBoat?: InputMaybe<Boat_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  facility?: InputMaybe<Scalars['String']>;
  facilityByFacility?: InputMaybe<Facility_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Boat_Facility_Max_Fields = {
  __typename?: 'boat_facility_max_fields';
  boat?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  facility?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "boat_facility" */
export type Boat_Facility_Max_Order_By = {
  boat?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  facility?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Boat_Facility_Min_Fields = {
  __typename?: 'boat_facility_min_fields';
  boat?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  facility?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "boat_facility" */
export type Boat_Facility_Min_Order_By = {
  boat?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  facility?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "boat_facility" */
export type Boat_Facility_Mutation_Response = {
  __typename?: 'boat_facility_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Boat_Facility>;
};

/** on_conflict condition type for table "boat_facility" */
export type Boat_Facility_On_Conflict = {
  constraint: Boat_Facility_Constraint;
  update_columns?: Array<Boat_Facility_Update_Column>;
  where?: InputMaybe<Boat_Facility_Bool_Exp>;
};

/** Ordering options when selecting data from "boat_facility". */
export type Boat_Facility_Order_By = {
  boat?: InputMaybe<Order_By>;
  boatByBoat?: InputMaybe<Boat_Order_By>;
  created_at?: InputMaybe<Order_By>;
  facility?: InputMaybe<Order_By>;
  facilityByFacility?: InputMaybe<Facility_Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: boat_facility */
export type Boat_Facility_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "boat_facility" */
export enum Boat_Facility_Select_Column {
  /** column name */
  Boat = 'boat',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Facility = 'facility',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "boat_facility" */
export type Boat_Facility_Set_Input = {
  boat?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  facility?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "boat_facility" */
export enum Boat_Facility_Update_Column {
  /** column name */
  Boat = 'boat',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Facility = 'facility',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for incrementing numeric columns in table "boat" */
export type Boat_Inc_Input = {
  built_year?: InputMaybe<Scalars['numeric']>;
  max_passenger_capacity?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "boat" */
export type Boat_Insert_Input = {
  boat_facilities?: InputMaybe<Boat_Facility_Arr_Rel_Insert_Input>;
  boat_safeties?: InputMaybe<Boat_Safety_Arr_Rel_Insert_Input>;
  built_year?: InputMaybe<Scalars['numeric']>;
  cabins?: InputMaybe<Cabin_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description_en?: InputMaybe<Scalars['String']>;
  description_th?: InputMaybe<Scalars['String']>;
  description_zh?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image_file_names?: InputMaybe<Scalars['jsonb']>;
  main_image_file_name?: InputMaybe<Scalars['String']>;
  max_passenger_capacity?: InputMaybe<Scalars['numeric']>;
  name_en?: InputMaybe<Scalars['String']>;
  name_th?: InputMaybe<Scalars['String']>;
  name_zh?: InputMaybe<Scalars['String']>;
  trips?: InputMaybe<Trip_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Boat_Max_Fields = {
  __typename?: 'boat_max_fields';
  built_year?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description_en?: Maybe<Scalars['String']>;
  description_th?: Maybe<Scalars['String']>;
  description_zh?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  main_image_file_name?: Maybe<Scalars['String']>;
  max_passenger_capacity?: Maybe<Scalars['numeric']>;
  name_en?: Maybe<Scalars['String']>;
  name_th?: Maybe<Scalars['String']>;
  name_zh?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Boat_Min_Fields = {
  __typename?: 'boat_min_fields';
  built_year?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description_en?: Maybe<Scalars['String']>;
  description_th?: Maybe<Scalars['String']>;
  description_zh?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  main_image_file_name?: Maybe<Scalars['String']>;
  max_passenger_capacity?: Maybe<Scalars['numeric']>;
  name_en?: Maybe<Scalars['String']>;
  name_th?: Maybe<Scalars['String']>;
  name_zh?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "boat" */
export type Boat_Mutation_Response = {
  __typename?: 'boat_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Boat>;
};

/** input type for inserting object relation for remote table "boat" */
export type Boat_Obj_Rel_Insert_Input = {
  data: Boat_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Boat_On_Conflict>;
};

/** on_conflict condition type for table "boat" */
export type Boat_On_Conflict = {
  constraint: Boat_Constraint;
  update_columns?: Array<Boat_Update_Column>;
  where?: InputMaybe<Boat_Bool_Exp>;
};

/** Ordering options when selecting data from "boat". */
export type Boat_Order_By = {
  boat_facilities_aggregate?: InputMaybe<Boat_Facility_Aggregate_Order_By>;
  boat_safeties_aggregate?: InputMaybe<Boat_Safety_Aggregate_Order_By>;
  built_year?: InputMaybe<Order_By>;
  cabins_aggregate?: InputMaybe<Cabin_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  description_en?: InputMaybe<Order_By>;
  description_th?: InputMaybe<Order_By>;
  description_zh?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_file_names?: InputMaybe<Order_By>;
  main_image_file_name?: InputMaybe<Order_By>;
  max_passenger_capacity?: InputMaybe<Order_By>;
  name_en?: InputMaybe<Order_By>;
  name_th?: InputMaybe<Order_By>;
  name_zh?: InputMaybe<Order_By>;
  trips_aggregate?: InputMaybe<Trip_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: boat */
export type Boat_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Boat_Prepend_Input = {
  image_file_names?: InputMaybe<Scalars['jsonb']>;
};

/** columns and relationships of "boat_safety" */
export type Boat_Safety = {
  __typename?: 'boat_safety';
  amount?: Maybe<Scalars['numeric']>;
  boat: Scalars['uuid'];
  /** An object relationship */
  boatByBoat: Boat;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  safety: Scalars['String'];
  /** An object relationship */
  safetyBySafety: Safety;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "boat_safety" */
export type Boat_Safety_Aggregate = {
  __typename?: 'boat_safety_aggregate';
  aggregate?: Maybe<Boat_Safety_Aggregate_Fields>;
  nodes: Array<Boat_Safety>;
};

/** aggregate fields of "boat_safety" */
export type Boat_Safety_Aggregate_Fields = {
  __typename?: 'boat_safety_aggregate_fields';
  avg?: Maybe<Boat_Safety_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Boat_Safety_Max_Fields>;
  min?: Maybe<Boat_Safety_Min_Fields>;
  stddev?: Maybe<Boat_Safety_Stddev_Fields>;
  stddev_pop?: Maybe<Boat_Safety_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Boat_Safety_Stddev_Samp_Fields>;
  sum?: Maybe<Boat_Safety_Sum_Fields>;
  var_pop?: Maybe<Boat_Safety_Var_Pop_Fields>;
  var_samp?: Maybe<Boat_Safety_Var_Samp_Fields>;
  variance?: Maybe<Boat_Safety_Variance_Fields>;
};


/** aggregate fields of "boat_safety" */
export type Boat_Safety_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Boat_Safety_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "boat_safety" */
export type Boat_Safety_Aggregate_Order_By = {
  avg?: InputMaybe<Boat_Safety_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Boat_Safety_Max_Order_By>;
  min?: InputMaybe<Boat_Safety_Min_Order_By>;
  stddev?: InputMaybe<Boat_Safety_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Boat_Safety_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Boat_Safety_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Boat_Safety_Sum_Order_By>;
  var_pop?: InputMaybe<Boat_Safety_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Boat_Safety_Var_Samp_Order_By>;
  variance?: InputMaybe<Boat_Safety_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "boat_safety" */
export type Boat_Safety_Arr_Rel_Insert_Input = {
  data: Array<Boat_Safety_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Boat_Safety_On_Conflict>;
};

/** aggregate avg on columns */
export type Boat_Safety_Avg_Fields = {
  __typename?: 'boat_safety_avg_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "boat_safety" */
export type Boat_Safety_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "boat_safety". All fields are combined with a logical 'AND'. */
export type Boat_Safety_Bool_Exp = {
  _and?: InputMaybe<Array<Boat_Safety_Bool_Exp>>;
  _not?: InputMaybe<Boat_Safety_Bool_Exp>;
  _or?: InputMaybe<Array<Boat_Safety_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  boat?: InputMaybe<Uuid_Comparison_Exp>;
  boatByBoat?: InputMaybe<Boat_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  safety?: InputMaybe<String_Comparison_Exp>;
  safetyBySafety?: InputMaybe<Safety_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "boat_safety" */
export enum Boat_Safety_Constraint {
  /** unique or primary key constraint */
  BoatSafetyBoatSafetyKey = 'boat_safety_boat_safety_key',
  /** unique or primary key constraint */
  BoatSafetyPkey = 'boat_safety_pkey'
}

/** input type for incrementing numeric columns in table "boat_safety" */
export type Boat_Safety_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "boat_safety" */
export type Boat_Safety_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  boat?: InputMaybe<Scalars['uuid']>;
  boatByBoat?: InputMaybe<Boat_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  safety?: InputMaybe<Scalars['String']>;
  safetyBySafety?: InputMaybe<Safety_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Boat_Safety_Max_Fields = {
  __typename?: 'boat_safety_max_fields';
  amount?: Maybe<Scalars['numeric']>;
  boat?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  safety?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "boat_safety" */
export type Boat_Safety_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  boat?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  safety?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Boat_Safety_Min_Fields = {
  __typename?: 'boat_safety_min_fields';
  amount?: Maybe<Scalars['numeric']>;
  boat?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  safety?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "boat_safety" */
export type Boat_Safety_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  boat?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  safety?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "boat_safety" */
export type Boat_Safety_Mutation_Response = {
  __typename?: 'boat_safety_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Boat_Safety>;
};

/** on_conflict condition type for table "boat_safety" */
export type Boat_Safety_On_Conflict = {
  constraint: Boat_Safety_Constraint;
  update_columns?: Array<Boat_Safety_Update_Column>;
  where?: InputMaybe<Boat_Safety_Bool_Exp>;
};

/** Ordering options when selecting data from "boat_safety". */
export type Boat_Safety_Order_By = {
  amount?: InputMaybe<Order_By>;
  boat?: InputMaybe<Order_By>;
  boatByBoat?: InputMaybe<Boat_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  safety?: InputMaybe<Order_By>;
  safetyBySafety?: InputMaybe<Safety_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: boat_safety */
export type Boat_Safety_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "boat_safety" */
export enum Boat_Safety_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Boat = 'boat',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Safety = 'safety',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "boat_safety" */
export type Boat_Safety_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  boat?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  safety?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Boat_Safety_Stddev_Fields = {
  __typename?: 'boat_safety_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "boat_safety" */
export type Boat_Safety_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Boat_Safety_Stddev_Pop_Fields = {
  __typename?: 'boat_safety_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "boat_safety" */
export type Boat_Safety_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Boat_Safety_Stddev_Samp_Fields = {
  __typename?: 'boat_safety_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "boat_safety" */
export type Boat_Safety_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Boat_Safety_Sum_Fields = {
  __typename?: 'boat_safety_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "boat_safety" */
export type Boat_Safety_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** update columns of table "boat_safety" */
export enum Boat_Safety_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Boat = 'boat',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Safety = 'safety',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Boat_Safety_Var_Pop_Fields = {
  __typename?: 'boat_safety_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "boat_safety" */
export type Boat_Safety_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Boat_Safety_Var_Samp_Fields = {
  __typename?: 'boat_safety_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "boat_safety" */
export type Boat_Safety_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Boat_Safety_Variance_Fields = {
  __typename?: 'boat_safety_variance_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "boat_safety" */
export type Boat_Safety_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** select columns of table "boat" */
export enum Boat_Select_Column {
  /** column name */
  BuiltYear = 'built_year',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DescriptionEn = 'description_en',
  /** column name */
  DescriptionTh = 'description_th',
  /** column name */
  DescriptionZh = 'description_zh',
  /** column name */
  Id = 'id',
  /** column name */
  ImageFileNames = 'image_file_names',
  /** column name */
  MainImageFileName = 'main_image_file_name',
  /** column name */
  MaxPassengerCapacity = 'max_passenger_capacity',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  NameZh = 'name_zh',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "boat" */
export type Boat_Set_Input = {
  built_year?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description_en?: InputMaybe<Scalars['String']>;
  description_th?: InputMaybe<Scalars['String']>;
  description_zh?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image_file_names?: InputMaybe<Scalars['jsonb']>;
  main_image_file_name?: InputMaybe<Scalars['String']>;
  max_passenger_capacity?: InputMaybe<Scalars['numeric']>;
  name_en?: InputMaybe<Scalars['String']>;
  name_th?: InputMaybe<Scalars['String']>;
  name_zh?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Boat_Stddev_Fields = {
  __typename?: 'boat_stddev_fields';
  built_year?: Maybe<Scalars['Float']>;
  max_passenger_capacity?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Boat_Stddev_Pop_Fields = {
  __typename?: 'boat_stddev_pop_fields';
  built_year?: Maybe<Scalars['Float']>;
  max_passenger_capacity?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Boat_Stddev_Samp_Fields = {
  __typename?: 'boat_stddev_samp_fields';
  built_year?: Maybe<Scalars['Float']>;
  max_passenger_capacity?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Boat_Sum_Fields = {
  __typename?: 'boat_sum_fields';
  built_year?: Maybe<Scalars['numeric']>;
  max_passenger_capacity?: Maybe<Scalars['numeric']>;
};

/** update columns of table "boat" */
export enum Boat_Update_Column {
  /** column name */
  BuiltYear = 'built_year',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DescriptionEn = 'description_en',
  /** column name */
  DescriptionTh = 'description_th',
  /** column name */
  DescriptionZh = 'description_zh',
  /** column name */
  Id = 'id',
  /** column name */
  ImageFileNames = 'image_file_names',
  /** column name */
  MainImageFileName = 'main_image_file_name',
  /** column name */
  MaxPassengerCapacity = 'max_passenger_capacity',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  NameZh = 'name_zh',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Boat_Var_Pop_Fields = {
  __typename?: 'boat_var_pop_fields';
  built_year?: Maybe<Scalars['Float']>;
  max_passenger_capacity?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Boat_Var_Samp_Fields = {
  __typename?: 'boat_var_samp_fields';
  built_year?: Maybe<Scalars['Float']>;
  max_passenger_capacity?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Boat_Variance_Fields = {
  __typename?: 'boat_variance_fields';
  built_year?: Maybe<Scalars['Float']>;
  max_passenger_capacity?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "booking" */
export type Booking = {
  __typename?: 'booking';
  /** An object relationship */
  bookingStatusByBookingStatus: Booking_Status;
  /** An array relationship */
  booking_allotments: Array<Booking_Allotment>;
  /** An aggregate relationship */
  booking_allotments_aggregate: Booking_Allotment_Aggregate;
  booking_id: Scalars['String'];
  booking_status: Scalars['String'];
  contact_email: Scalars['String'];
  contact_name: Scalars['String'];
  contact_number: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  notice?: Maybe<Scalars['String']>;
  total_divers: Scalars['Int'];
  total_price: Scalars['numeric'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "booking" */
export type BookingBooking_AllotmentsArgs = {
  distinct_on?: InputMaybe<Array<Booking_Allotment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Allotment_Order_By>>;
  where?: InputMaybe<Booking_Allotment_Bool_Exp>;
};


/** columns and relationships of "booking" */
export type BookingBooking_Allotments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Allotment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Allotment_Order_By>>;
  where?: InputMaybe<Booking_Allotment_Bool_Exp>;
};

/** aggregated selection of "booking" */
export type Booking_Aggregate = {
  __typename?: 'booking_aggregate';
  aggregate?: Maybe<Booking_Aggregate_Fields>;
  nodes: Array<Booking>;
};

/** aggregate fields of "booking" */
export type Booking_Aggregate_Fields = {
  __typename?: 'booking_aggregate_fields';
  avg?: Maybe<Booking_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Booking_Max_Fields>;
  min?: Maybe<Booking_Min_Fields>;
  stddev?: Maybe<Booking_Stddev_Fields>;
  stddev_pop?: Maybe<Booking_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Booking_Stddev_Samp_Fields>;
  sum?: Maybe<Booking_Sum_Fields>;
  var_pop?: Maybe<Booking_Var_Pop_Fields>;
  var_samp?: Maybe<Booking_Var_Samp_Fields>;
  variance?: Maybe<Booking_Variance_Fields>;
};


/** aggregate fields of "booking" */
export type Booking_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Booking_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "booking" */
export type Booking_Aggregate_Order_By = {
  avg?: InputMaybe<Booking_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Booking_Max_Order_By>;
  min?: InputMaybe<Booking_Min_Order_By>;
  stddev?: InputMaybe<Booking_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Booking_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Booking_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Booking_Sum_Order_By>;
  var_pop?: InputMaybe<Booking_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Booking_Var_Samp_Order_By>;
  variance?: InputMaybe<Booking_Variance_Order_By>;
};

/** columns and relationships of "booking_allotment" */
export type Booking_Allotment = {
  __typename?: 'booking_allotment';
  allotment: Scalars['uuid'];
  /** An object relationship */
  allotmentByAllotment: Allotment;
  booking: Scalars['uuid'];
  /** An object relationship */
  bookingByBooking: Booking;
  created_at: Scalars['timestamptz'];
  first_name: Scalars['String'];
  id: Scalars['uuid'];
  last_name: Scalars['String'];
  /** An object relationship */
  licenseIssuerByLicenseIssuer?: Maybe<License_Issuer>;
  license_id?: Maybe<Scalars['String']>;
  license_issuer?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "booking_allotment" */
export type Booking_Allotment_Aggregate = {
  __typename?: 'booking_allotment_aggregate';
  aggregate?: Maybe<Booking_Allotment_Aggregate_Fields>;
  nodes: Array<Booking_Allotment>;
};

/** aggregate fields of "booking_allotment" */
export type Booking_Allotment_Aggregate_Fields = {
  __typename?: 'booking_allotment_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Booking_Allotment_Max_Fields>;
  min?: Maybe<Booking_Allotment_Min_Fields>;
};


/** aggregate fields of "booking_allotment" */
export type Booking_Allotment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Booking_Allotment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "booking_allotment" */
export type Booking_Allotment_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Booking_Allotment_Max_Order_By>;
  min?: InputMaybe<Booking_Allotment_Min_Order_By>;
};

/** input type for inserting array relation for remote table "booking_allotment" */
export type Booking_Allotment_Arr_Rel_Insert_Input = {
  data: Array<Booking_Allotment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Booking_Allotment_On_Conflict>;
};

/** Boolean expression to filter rows from the table "booking_allotment". All fields are combined with a logical 'AND'. */
export type Booking_Allotment_Bool_Exp = {
  _and?: InputMaybe<Array<Booking_Allotment_Bool_Exp>>;
  _not?: InputMaybe<Booking_Allotment_Bool_Exp>;
  _or?: InputMaybe<Array<Booking_Allotment_Bool_Exp>>;
  allotment?: InputMaybe<Uuid_Comparison_Exp>;
  allotmentByAllotment?: InputMaybe<Allotment_Bool_Exp>;
  booking?: InputMaybe<Uuid_Comparison_Exp>;
  bookingByBooking?: InputMaybe<Booking_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  licenseIssuerByLicenseIssuer?: InputMaybe<License_Issuer_Bool_Exp>;
  license_id?: InputMaybe<String_Comparison_Exp>;
  license_issuer?: InputMaybe<String_Comparison_Exp>;
  middle_name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "booking_allotment" */
export enum Booking_Allotment_Constraint {
  /** unique or primary key constraint */
  BookingAllotmentPkey = 'booking_allotment_pkey'
}

/** input type for inserting data into table "booking_allotment" */
export type Booking_Allotment_Insert_Input = {
  allotment?: InputMaybe<Scalars['uuid']>;
  allotmentByAllotment?: InputMaybe<Allotment_Obj_Rel_Insert_Input>;
  booking?: InputMaybe<Scalars['uuid']>;
  bookingByBooking?: InputMaybe<Booking_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
  licenseIssuerByLicenseIssuer?: InputMaybe<License_Issuer_Obj_Rel_Insert_Input>;
  license_id?: InputMaybe<Scalars['String']>;
  license_issuer?: InputMaybe<Scalars['String']>;
  middle_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Booking_Allotment_Max_Fields = {
  __typename?: 'booking_allotment_max_fields';
  allotment?: Maybe<Scalars['uuid']>;
  booking?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  license_id?: Maybe<Scalars['String']>;
  license_issuer?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "booking_allotment" */
export type Booking_Allotment_Max_Order_By = {
  allotment?: InputMaybe<Order_By>;
  booking?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  license_id?: InputMaybe<Order_By>;
  license_issuer?: InputMaybe<Order_By>;
  middle_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Booking_Allotment_Min_Fields = {
  __typename?: 'booking_allotment_min_fields';
  allotment?: Maybe<Scalars['uuid']>;
  booking?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  license_id?: Maybe<Scalars['String']>;
  license_issuer?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "booking_allotment" */
export type Booking_Allotment_Min_Order_By = {
  allotment?: InputMaybe<Order_By>;
  booking?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  license_id?: InputMaybe<Order_By>;
  license_issuer?: InputMaybe<Order_By>;
  middle_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "booking_allotment" */
export type Booking_Allotment_Mutation_Response = {
  __typename?: 'booking_allotment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Booking_Allotment>;
};

/** on_conflict condition type for table "booking_allotment" */
export type Booking_Allotment_On_Conflict = {
  constraint: Booking_Allotment_Constraint;
  update_columns?: Array<Booking_Allotment_Update_Column>;
  where?: InputMaybe<Booking_Allotment_Bool_Exp>;
};

/** Ordering options when selecting data from "booking_allotment". */
export type Booking_Allotment_Order_By = {
  allotment?: InputMaybe<Order_By>;
  allotmentByAllotment?: InputMaybe<Allotment_Order_By>;
  booking?: InputMaybe<Order_By>;
  bookingByBooking?: InputMaybe<Booking_Order_By>;
  created_at?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  licenseIssuerByLicenseIssuer?: InputMaybe<License_Issuer_Order_By>;
  license_id?: InputMaybe<Order_By>;
  license_issuer?: InputMaybe<Order_By>;
  middle_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: booking_allotment */
export type Booking_Allotment_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "booking_allotment" */
export enum Booking_Allotment_Select_Column {
  /** column name */
  Allotment = 'allotment',
  /** column name */
  Booking = 'booking',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LicenseId = 'license_id',
  /** column name */
  LicenseIssuer = 'license_issuer',
  /** column name */
  MiddleName = 'middle_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "booking_allotment" */
export type Booking_Allotment_Set_Input = {
  allotment?: InputMaybe<Scalars['uuid']>;
  booking?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
  license_id?: InputMaybe<Scalars['String']>;
  license_issuer?: InputMaybe<Scalars['String']>;
  middle_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "booking_allotment" */
export enum Booking_Allotment_Update_Column {
  /** column name */
  Allotment = 'allotment',
  /** column name */
  Booking = 'booking',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LicenseId = 'license_id',
  /** column name */
  LicenseIssuer = 'license_issuer',
  /** column name */
  MiddleName = 'middle_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for inserting array relation for remote table "booking" */
export type Booking_Arr_Rel_Insert_Input = {
  data: Array<Booking_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Booking_On_Conflict>;
};

/** aggregate avg on columns */
export type Booking_Avg_Fields = {
  __typename?: 'booking_avg_fields';
  total_divers?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "booking" */
export type Booking_Avg_Order_By = {
  total_divers?: InputMaybe<Order_By>;
  total_price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "booking". All fields are combined with a logical 'AND'. */
export type Booking_Bool_Exp = {
  _and?: InputMaybe<Array<Booking_Bool_Exp>>;
  _not?: InputMaybe<Booking_Bool_Exp>;
  _or?: InputMaybe<Array<Booking_Bool_Exp>>;
  bookingStatusByBookingStatus?: InputMaybe<Booking_Status_Bool_Exp>;
  booking_allotments?: InputMaybe<Booking_Allotment_Bool_Exp>;
  booking_id?: InputMaybe<String_Comparison_Exp>;
  booking_status?: InputMaybe<String_Comparison_Exp>;
  contact_email?: InputMaybe<String_Comparison_Exp>;
  contact_name?: InputMaybe<String_Comparison_Exp>;
  contact_number?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  notice?: InputMaybe<String_Comparison_Exp>;
  total_divers?: InputMaybe<Int_Comparison_Exp>;
  total_price?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "booking" */
export enum Booking_Constraint {
  /** unique or primary key constraint */
  BookingBookingIdKey = 'booking_booking_id_key',
  /** unique or primary key constraint */
  BookingIdInx = 'booking_id_inx',
  /** unique or primary key constraint */
  BookingPkey = 'booking_pkey'
}

/** input type for incrementing numeric columns in table "booking" */
export type Booking_Inc_Input = {
  total_divers?: InputMaybe<Scalars['Int']>;
  total_price?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "booking" */
export type Booking_Insert_Input = {
  bookingStatusByBookingStatus?: InputMaybe<Booking_Status_Obj_Rel_Insert_Input>;
  booking_allotments?: InputMaybe<Booking_Allotment_Arr_Rel_Insert_Input>;
  booking_id?: InputMaybe<Scalars['String']>;
  booking_status?: InputMaybe<Scalars['String']>;
  contact_email?: InputMaybe<Scalars['String']>;
  contact_name?: InputMaybe<Scalars['String']>;
  contact_number?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  notice?: InputMaybe<Scalars['String']>;
  total_divers?: InputMaybe<Scalars['Int']>;
  total_price?: InputMaybe<Scalars['numeric']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Booking_Max_Fields = {
  __typename?: 'booking_max_fields';
  booking_id?: Maybe<Scalars['String']>;
  booking_status?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  contact_name?: Maybe<Scalars['String']>;
  contact_number?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  notice?: Maybe<Scalars['String']>;
  total_divers?: Maybe<Scalars['Int']>;
  total_price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "booking" */
export type Booking_Max_Order_By = {
  booking_id?: InputMaybe<Order_By>;
  booking_status?: InputMaybe<Order_By>;
  contact_email?: InputMaybe<Order_By>;
  contact_name?: InputMaybe<Order_By>;
  contact_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notice?: InputMaybe<Order_By>;
  total_divers?: InputMaybe<Order_By>;
  total_price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Booking_Min_Fields = {
  __typename?: 'booking_min_fields';
  booking_id?: Maybe<Scalars['String']>;
  booking_status?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  contact_name?: Maybe<Scalars['String']>;
  contact_number?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  notice?: Maybe<Scalars['String']>;
  total_divers?: Maybe<Scalars['Int']>;
  total_price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "booking" */
export type Booking_Min_Order_By = {
  booking_id?: InputMaybe<Order_By>;
  booking_status?: InputMaybe<Order_By>;
  contact_email?: InputMaybe<Order_By>;
  contact_name?: InputMaybe<Order_By>;
  contact_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notice?: InputMaybe<Order_By>;
  total_divers?: InputMaybe<Order_By>;
  total_price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "booking" */
export type Booking_Mutation_Response = {
  __typename?: 'booking_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Booking>;
};

/** input type for inserting object relation for remote table "booking" */
export type Booking_Obj_Rel_Insert_Input = {
  data: Booking_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Booking_On_Conflict>;
};

/** on_conflict condition type for table "booking" */
export type Booking_On_Conflict = {
  constraint: Booking_Constraint;
  update_columns?: Array<Booking_Update_Column>;
  where?: InputMaybe<Booking_Bool_Exp>;
};

/** Ordering options when selecting data from "booking". */
export type Booking_Order_By = {
  bookingStatusByBookingStatus?: InputMaybe<Booking_Status_Order_By>;
  booking_allotments_aggregate?: InputMaybe<Booking_Allotment_Aggregate_Order_By>;
  booking_id?: InputMaybe<Order_By>;
  booking_status?: InputMaybe<Order_By>;
  contact_email?: InputMaybe<Order_By>;
  contact_name?: InputMaybe<Order_By>;
  contact_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notice?: InputMaybe<Order_By>;
  total_divers?: InputMaybe<Order_By>;
  total_price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: booking */
export type Booking_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "booking" */
export enum Booking_Select_Column {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  BookingStatus = 'booking_status',
  /** column name */
  ContactEmail = 'contact_email',
  /** column name */
  ContactName = 'contact_name',
  /** column name */
  ContactNumber = 'contact_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Notice = 'notice',
  /** column name */
  TotalDivers = 'total_divers',
  /** column name */
  TotalPrice = 'total_price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "booking" */
export type Booking_Set_Input = {
  booking_id?: InputMaybe<Scalars['String']>;
  booking_status?: InputMaybe<Scalars['String']>;
  contact_email?: InputMaybe<Scalars['String']>;
  contact_name?: InputMaybe<Scalars['String']>;
  contact_number?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  notice?: InputMaybe<Scalars['String']>;
  total_divers?: InputMaybe<Scalars['Int']>;
  total_price?: InputMaybe<Scalars['numeric']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "booking_status" */
export type Booking_Status = {
  __typename?: 'booking_status';
  /** An array relationship */
  bookings: Array<Booking>;
  /** An aggregate relationship */
  bookings_aggregate: Booking_Aggregate;
  created_at: Scalars['timestamptz'];
  description_en: Scalars['String'];
  description_th: Scalars['String'];
  description_zh: Scalars['String'];
  id: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "booking_status" */
export type Booking_StatusBookingsArgs = {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
};


/** columns and relationships of "booking_status" */
export type Booking_StatusBookings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
};

/** aggregated selection of "booking_status" */
export type Booking_Status_Aggregate = {
  __typename?: 'booking_status_aggregate';
  aggregate?: Maybe<Booking_Status_Aggregate_Fields>;
  nodes: Array<Booking_Status>;
};

/** aggregate fields of "booking_status" */
export type Booking_Status_Aggregate_Fields = {
  __typename?: 'booking_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Booking_Status_Max_Fields>;
  min?: Maybe<Booking_Status_Min_Fields>;
};


/** aggregate fields of "booking_status" */
export type Booking_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Booking_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "booking_status". All fields are combined with a logical 'AND'. */
export type Booking_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Booking_Status_Bool_Exp>>;
  _not?: InputMaybe<Booking_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Booking_Status_Bool_Exp>>;
  bookings?: InputMaybe<Booking_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description_en?: InputMaybe<String_Comparison_Exp>;
  description_th?: InputMaybe<String_Comparison_Exp>;
  description_zh?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "booking_status" */
export enum Booking_Status_Constraint {
  /** unique or primary key constraint */
  BookingStatusPkey = 'booking_status_pkey'
}

/** input type for inserting data into table "booking_status" */
export type Booking_Status_Insert_Input = {
  bookings?: InputMaybe<Booking_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description_en?: InputMaybe<Scalars['String']>;
  description_th?: InputMaybe<Scalars['String']>;
  description_zh?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Booking_Status_Max_Fields = {
  __typename?: 'booking_status_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description_en?: Maybe<Scalars['String']>;
  description_th?: Maybe<Scalars['String']>;
  description_zh?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Booking_Status_Min_Fields = {
  __typename?: 'booking_status_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description_en?: Maybe<Scalars['String']>;
  description_th?: Maybe<Scalars['String']>;
  description_zh?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "booking_status" */
export type Booking_Status_Mutation_Response = {
  __typename?: 'booking_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Booking_Status>;
};

/** input type for inserting object relation for remote table "booking_status" */
export type Booking_Status_Obj_Rel_Insert_Input = {
  data: Booking_Status_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Booking_Status_On_Conflict>;
};

/** on_conflict condition type for table "booking_status" */
export type Booking_Status_On_Conflict = {
  constraint: Booking_Status_Constraint;
  update_columns?: Array<Booking_Status_Update_Column>;
  where?: InputMaybe<Booking_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "booking_status". */
export type Booking_Status_Order_By = {
  bookings_aggregate?: InputMaybe<Booking_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  description_en?: InputMaybe<Order_By>;
  description_th?: InputMaybe<Order_By>;
  description_zh?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: booking_status */
export type Booking_Status_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "booking_status" */
export enum Booking_Status_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DescriptionEn = 'description_en',
  /** column name */
  DescriptionTh = 'description_th',
  /** column name */
  DescriptionZh = 'description_zh',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "booking_status" */
export type Booking_Status_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description_en?: InputMaybe<Scalars['String']>;
  description_th?: InputMaybe<Scalars['String']>;
  description_zh?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "booking_status" */
export enum Booking_Status_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DescriptionEn = 'description_en',
  /** column name */
  DescriptionTh = 'description_th',
  /** column name */
  DescriptionZh = 'description_zh',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Booking_Stddev_Fields = {
  __typename?: 'booking_stddev_fields';
  total_divers?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "booking" */
export type Booking_Stddev_Order_By = {
  total_divers?: InputMaybe<Order_By>;
  total_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Booking_Stddev_Pop_Fields = {
  __typename?: 'booking_stddev_pop_fields';
  total_divers?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "booking" */
export type Booking_Stddev_Pop_Order_By = {
  total_divers?: InputMaybe<Order_By>;
  total_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Booking_Stddev_Samp_Fields = {
  __typename?: 'booking_stddev_samp_fields';
  total_divers?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "booking" */
export type Booking_Stddev_Samp_Order_By = {
  total_divers?: InputMaybe<Order_By>;
  total_price?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Booking_Sum_Fields = {
  __typename?: 'booking_sum_fields';
  total_divers?: Maybe<Scalars['Int']>;
  total_price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "booking" */
export type Booking_Sum_Order_By = {
  total_divers?: InputMaybe<Order_By>;
  total_price?: InputMaybe<Order_By>;
};

/** update columns of table "booking" */
export enum Booking_Update_Column {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  BookingStatus = 'booking_status',
  /** column name */
  ContactEmail = 'contact_email',
  /** column name */
  ContactName = 'contact_name',
  /** column name */
  ContactNumber = 'contact_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Notice = 'notice',
  /** column name */
  TotalDivers = 'total_divers',
  /** column name */
  TotalPrice = 'total_price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Booking_Var_Pop_Fields = {
  __typename?: 'booking_var_pop_fields';
  total_divers?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "booking" */
export type Booking_Var_Pop_Order_By = {
  total_divers?: InputMaybe<Order_By>;
  total_price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Booking_Var_Samp_Fields = {
  __typename?: 'booking_var_samp_fields';
  total_divers?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "booking" */
export type Booking_Var_Samp_Order_By = {
  total_divers?: InputMaybe<Order_By>;
  total_price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Booking_Variance_Fields = {
  __typename?: 'booking_variance_fields';
  total_divers?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "booking" */
export type Booking_Variance_Order_By = {
  total_divers?: InputMaybe<Order_By>;
  total_price?: InputMaybe<Order_By>;
};

/** columns and relationships of "cabin" */
export type Cabin = {
  __typename?: 'cabin';
  /** An array relationship */
  allotments: Array<Allotment>;
  /** An aggregate relationship */
  allotments_aggregate: Allotment_Aggregate;
  boat: Scalars['uuid'];
  /** An object relationship */
  boatByBoat: Boat;
  /** An array relationship */
  cabin_facilities: Array<Cabin_Facility>;
  /** An aggregate relationship */
  cabin_facilities_aggregate: Cabin_Facility_Aggregate;
  cabin_length?: Maybe<Scalars['numeric']>;
  cabin_width?: Maybe<Scalars['numeric']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  image_file_names?: Maybe<Scalars['jsonb']>;
  main_image_file_name?: Maybe<Scalars['String']>;
  max_guest_capacity: Scalars['Int'];
  name_en: Scalars['String'];
  name_th: Scalars['String'];
  name_zh: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "cabin" */
export type CabinAllotmentsArgs = {
  distinct_on?: InputMaybe<Array<Allotment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Allotment_Order_By>>;
  where?: InputMaybe<Allotment_Bool_Exp>;
};


/** columns and relationships of "cabin" */
export type CabinAllotments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Allotment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Allotment_Order_By>>;
  where?: InputMaybe<Allotment_Bool_Exp>;
};


/** columns and relationships of "cabin" */
export type CabinCabin_FacilitiesArgs = {
  distinct_on?: InputMaybe<Array<Cabin_Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cabin_Facility_Order_By>>;
  where?: InputMaybe<Cabin_Facility_Bool_Exp>;
};


/** columns and relationships of "cabin" */
export type CabinCabin_Facilities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cabin_Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cabin_Facility_Order_By>>;
  where?: InputMaybe<Cabin_Facility_Bool_Exp>;
};


/** columns and relationships of "cabin" */
export type CabinImage_File_NamesArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "cabin" */
export type Cabin_Aggregate = {
  __typename?: 'cabin_aggregate';
  aggregate?: Maybe<Cabin_Aggregate_Fields>;
  nodes: Array<Cabin>;
};

/** aggregate fields of "cabin" */
export type Cabin_Aggregate_Fields = {
  __typename?: 'cabin_aggregate_fields';
  avg?: Maybe<Cabin_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cabin_Max_Fields>;
  min?: Maybe<Cabin_Min_Fields>;
  stddev?: Maybe<Cabin_Stddev_Fields>;
  stddev_pop?: Maybe<Cabin_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cabin_Stddev_Samp_Fields>;
  sum?: Maybe<Cabin_Sum_Fields>;
  var_pop?: Maybe<Cabin_Var_Pop_Fields>;
  var_samp?: Maybe<Cabin_Var_Samp_Fields>;
  variance?: Maybe<Cabin_Variance_Fields>;
};


/** aggregate fields of "cabin" */
export type Cabin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cabin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cabin" */
export type Cabin_Aggregate_Order_By = {
  avg?: InputMaybe<Cabin_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Cabin_Max_Order_By>;
  min?: InputMaybe<Cabin_Min_Order_By>;
  stddev?: InputMaybe<Cabin_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Cabin_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Cabin_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Cabin_Sum_Order_By>;
  var_pop?: InputMaybe<Cabin_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Cabin_Var_Samp_Order_By>;
  variance?: InputMaybe<Cabin_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Cabin_Append_Input = {
  image_file_names?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "cabin" */
export type Cabin_Arr_Rel_Insert_Input = {
  data: Array<Cabin_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Cabin_On_Conflict>;
};

/** aggregate avg on columns */
export type Cabin_Avg_Fields = {
  __typename?: 'cabin_avg_fields';
  cabin_length?: Maybe<Scalars['Float']>;
  cabin_width?: Maybe<Scalars['Float']>;
  max_guest_capacity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "cabin" */
export type Cabin_Avg_Order_By = {
  cabin_length?: InputMaybe<Order_By>;
  cabin_width?: InputMaybe<Order_By>;
  max_guest_capacity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "cabin". All fields are combined with a logical 'AND'. */
export type Cabin_Bool_Exp = {
  _and?: InputMaybe<Array<Cabin_Bool_Exp>>;
  _not?: InputMaybe<Cabin_Bool_Exp>;
  _or?: InputMaybe<Array<Cabin_Bool_Exp>>;
  allotments?: InputMaybe<Allotment_Bool_Exp>;
  boat?: InputMaybe<Uuid_Comparison_Exp>;
  boatByBoat?: InputMaybe<Boat_Bool_Exp>;
  cabin_facilities?: InputMaybe<Cabin_Facility_Bool_Exp>;
  cabin_length?: InputMaybe<Numeric_Comparison_Exp>;
  cabin_width?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_file_names?: InputMaybe<Jsonb_Comparison_Exp>;
  main_image_file_name?: InputMaybe<String_Comparison_Exp>;
  max_guest_capacity?: InputMaybe<Int_Comparison_Exp>;
  name_en?: InputMaybe<String_Comparison_Exp>;
  name_th?: InputMaybe<String_Comparison_Exp>;
  name_zh?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "cabin" */
export enum Cabin_Constraint {
  /** unique or primary key constraint */
  CabinPkey = 'cabin_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Cabin_Delete_At_Path_Input = {
  image_file_names?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Cabin_Delete_Elem_Input = {
  image_file_names?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Cabin_Delete_Key_Input = {
  image_file_names?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "cabin_facility" */
export type Cabin_Facility = {
  __typename?: 'cabin_facility';
  cabin: Scalars['uuid'];
  /** An object relationship */
  cabinByCabin: Cabin;
  created_at: Scalars['timestamptz'];
  facility: Scalars['String'];
  /** An object relationship */
  facilityByFacility: Facility;
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "cabin_facility" */
export type Cabin_Facility_Aggregate = {
  __typename?: 'cabin_facility_aggregate';
  aggregate?: Maybe<Cabin_Facility_Aggregate_Fields>;
  nodes: Array<Cabin_Facility>;
};

/** aggregate fields of "cabin_facility" */
export type Cabin_Facility_Aggregate_Fields = {
  __typename?: 'cabin_facility_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Cabin_Facility_Max_Fields>;
  min?: Maybe<Cabin_Facility_Min_Fields>;
};


/** aggregate fields of "cabin_facility" */
export type Cabin_Facility_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cabin_Facility_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cabin_facility" */
export type Cabin_Facility_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Cabin_Facility_Max_Order_By>;
  min?: InputMaybe<Cabin_Facility_Min_Order_By>;
};

/** input type for inserting array relation for remote table "cabin_facility" */
export type Cabin_Facility_Arr_Rel_Insert_Input = {
  data: Array<Cabin_Facility_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Cabin_Facility_On_Conflict>;
};

/** Boolean expression to filter rows from the table "cabin_facility". All fields are combined with a logical 'AND'. */
export type Cabin_Facility_Bool_Exp = {
  _and?: InputMaybe<Array<Cabin_Facility_Bool_Exp>>;
  _not?: InputMaybe<Cabin_Facility_Bool_Exp>;
  _or?: InputMaybe<Array<Cabin_Facility_Bool_Exp>>;
  cabin?: InputMaybe<Uuid_Comparison_Exp>;
  cabinByCabin?: InputMaybe<Cabin_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  facility?: InputMaybe<String_Comparison_Exp>;
  facilityByFacility?: InputMaybe<Facility_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "cabin_facility" */
export enum Cabin_Facility_Constraint {
  /** unique or primary key constraint */
  CabinFacilityCabinFacilityKey = 'cabin_facility_cabin_facility_key',
  /** unique or primary key constraint */
  CabinFacilityPkey = 'cabin_facility_pkey'
}

/** input type for inserting data into table "cabin_facility" */
export type Cabin_Facility_Insert_Input = {
  cabin?: InputMaybe<Scalars['uuid']>;
  cabinByCabin?: InputMaybe<Cabin_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  facility?: InputMaybe<Scalars['String']>;
  facilityByFacility?: InputMaybe<Facility_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Cabin_Facility_Max_Fields = {
  __typename?: 'cabin_facility_max_fields';
  cabin?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  facility?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "cabin_facility" */
export type Cabin_Facility_Max_Order_By = {
  cabin?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  facility?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Cabin_Facility_Min_Fields = {
  __typename?: 'cabin_facility_min_fields';
  cabin?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  facility?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "cabin_facility" */
export type Cabin_Facility_Min_Order_By = {
  cabin?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  facility?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "cabin_facility" */
export type Cabin_Facility_Mutation_Response = {
  __typename?: 'cabin_facility_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cabin_Facility>;
};

/** on_conflict condition type for table "cabin_facility" */
export type Cabin_Facility_On_Conflict = {
  constraint: Cabin_Facility_Constraint;
  update_columns?: Array<Cabin_Facility_Update_Column>;
  where?: InputMaybe<Cabin_Facility_Bool_Exp>;
};

/** Ordering options when selecting data from "cabin_facility". */
export type Cabin_Facility_Order_By = {
  cabin?: InputMaybe<Order_By>;
  cabinByCabin?: InputMaybe<Cabin_Order_By>;
  created_at?: InputMaybe<Order_By>;
  facility?: InputMaybe<Order_By>;
  facilityByFacility?: InputMaybe<Facility_Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cabin_facility */
export type Cabin_Facility_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "cabin_facility" */
export enum Cabin_Facility_Select_Column {
  /** column name */
  Cabin = 'cabin',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Facility = 'facility',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "cabin_facility" */
export type Cabin_Facility_Set_Input = {
  cabin?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  facility?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "cabin_facility" */
export enum Cabin_Facility_Update_Column {
  /** column name */
  Cabin = 'cabin',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Facility = 'facility',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for incrementing numeric columns in table "cabin" */
export type Cabin_Inc_Input = {
  cabin_length?: InputMaybe<Scalars['numeric']>;
  cabin_width?: InputMaybe<Scalars['numeric']>;
  max_guest_capacity?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "cabin" */
export type Cabin_Insert_Input = {
  allotments?: InputMaybe<Allotment_Arr_Rel_Insert_Input>;
  boat?: InputMaybe<Scalars['uuid']>;
  boatByBoat?: InputMaybe<Boat_Obj_Rel_Insert_Input>;
  cabin_facilities?: InputMaybe<Cabin_Facility_Arr_Rel_Insert_Input>;
  cabin_length?: InputMaybe<Scalars['numeric']>;
  cabin_width?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image_file_names?: InputMaybe<Scalars['jsonb']>;
  main_image_file_name?: InputMaybe<Scalars['String']>;
  max_guest_capacity?: InputMaybe<Scalars['Int']>;
  name_en?: InputMaybe<Scalars['String']>;
  name_th?: InputMaybe<Scalars['String']>;
  name_zh?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Cabin_Max_Fields = {
  __typename?: 'cabin_max_fields';
  boat?: Maybe<Scalars['uuid']>;
  cabin_length?: Maybe<Scalars['numeric']>;
  cabin_width?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  main_image_file_name?: Maybe<Scalars['String']>;
  max_guest_capacity?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_th?: Maybe<Scalars['String']>;
  name_zh?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "cabin" */
export type Cabin_Max_Order_By = {
  boat?: InputMaybe<Order_By>;
  cabin_length?: InputMaybe<Order_By>;
  cabin_width?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  main_image_file_name?: InputMaybe<Order_By>;
  max_guest_capacity?: InputMaybe<Order_By>;
  name_en?: InputMaybe<Order_By>;
  name_th?: InputMaybe<Order_By>;
  name_zh?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Cabin_Min_Fields = {
  __typename?: 'cabin_min_fields';
  boat?: Maybe<Scalars['uuid']>;
  cabin_length?: Maybe<Scalars['numeric']>;
  cabin_width?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  main_image_file_name?: Maybe<Scalars['String']>;
  max_guest_capacity?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_th?: Maybe<Scalars['String']>;
  name_zh?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "cabin" */
export type Cabin_Min_Order_By = {
  boat?: InputMaybe<Order_By>;
  cabin_length?: InputMaybe<Order_By>;
  cabin_width?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  main_image_file_name?: InputMaybe<Order_By>;
  max_guest_capacity?: InputMaybe<Order_By>;
  name_en?: InputMaybe<Order_By>;
  name_th?: InputMaybe<Order_By>;
  name_zh?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "cabin" */
export type Cabin_Mutation_Response = {
  __typename?: 'cabin_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cabin>;
};

/** input type for inserting object relation for remote table "cabin" */
export type Cabin_Obj_Rel_Insert_Input = {
  data: Cabin_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Cabin_On_Conflict>;
};

/** on_conflict condition type for table "cabin" */
export type Cabin_On_Conflict = {
  constraint: Cabin_Constraint;
  update_columns?: Array<Cabin_Update_Column>;
  where?: InputMaybe<Cabin_Bool_Exp>;
};

/** Ordering options when selecting data from "cabin". */
export type Cabin_Order_By = {
  allotments_aggregate?: InputMaybe<Allotment_Aggregate_Order_By>;
  boat?: InputMaybe<Order_By>;
  boatByBoat?: InputMaybe<Boat_Order_By>;
  cabin_facilities_aggregate?: InputMaybe<Cabin_Facility_Aggregate_Order_By>;
  cabin_length?: InputMaybe<Order_By>;
  cabin_width?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_file_names?: InputMaybe<Order_By>;
  main_image_file_name?: InputMaybe<Order_By>;
  max_guest_capacity?: InputMaybe<Order_By>;
  name_en?: InputMaybe<Order_By>;
  name_th?: InputMaybe<Order_By>;
  name_zh?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cabin */
export type Cabin_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Cabin_Prepend_Input = {
  image_file_names?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "cabin" */
export enum Cabin_Select_Column {
  /** column name */
  Boat = 'boat',
  /** column name */
  CabinLength = 'cabin_length',
  /** column name */
  CabinWidth = 'cabin_width',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageFileNames = 'image_file_names',
  /** column name */
  MainImageFileName = 'main_image_file_name',
  /** column name */
  MaxGuestCapacity = 'max_guest_capacity',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  NameZh = 'name_zh',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "cabin" */
export type Cabin_Set_Input = {
  boat?: InputMaybe<Scalars['uuid']>;
  cabin_length?: InputMaybe<Scalars['numeric']>;
  cabin_width?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image_file_names?: InputMaybe<Scalars['jsonb']>;
  main_image_file_name?: InputMaybe<Scalars['String']>;
  max_guest_capacity?: InputMaybe<Scalars['Int']>;
  name_en?: InputMaybe<Scalars['String']>;
  name_th?: InputMaybe<Scalars['String']>;
  name_zh?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Cabin_Stddev_Fields = {
  __typename?: 'cabin_stddev_fields';
  cabin_length?: Maybe<Scalars['Float']>;
  cabin_width?: Maybe<Scalars['Float']>;
  max_guest_capacity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "cabin" */
export type Cabin_Stddev_Order_By = {
  cabin_length?: InputMaybe<Order_By>;
  cabin_width?: InputMaybe<Order_By>;
  max_guest_capacity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Cabin_Stddev_Pop_Fields = {
  __typename?: 'cabin_stddev_pop_fields';
  cabin_length?: Maybe<Scalars['Float']>;
  cabin_width?: Maybe<Scalars['Float']>;
  max_guest_capacity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "cabin" */
export type Cabin_Stddev_Pop_Order_By = {
  cabin_length?: InputMaybe<Order_By>;
  cabin_width?: InputMaybe<Order_By>;
  max_guest_capacity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Cabin_Stddev_Samp_Fields = {
  __typename?: 'cabin_stddev_samp_fields';
  cabin_length?: Maybe<Scalars['Float']>;
  cabin_width?: Maybe<Scalars['Float']>;
  max_guest_capacity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "cabin" */
export type Cabin_Stddev_Samp_Order_By = {
  cabin_length?: InputMaybe<Order_By>;
  cabin_width?: InputMaybe<Order_By>;
  max_guest_capacity?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Cabin_Sum_Fields = {
  __typename?: 'cabin_sum_fields';
  cabin_length?: Maybe<Scalars['numeric']>;
  cabin_width?: Maybe<Scalars['numeric']>;
  max_guest_capacity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "cabin" */
export type Cabin_Sum_Order_By = {
  cabin_length?: InputMaybe<Order_By>;
  cabin_width?: InputMaybe<Order_By>;
  max_guest_capacity?: InputMaybe<Order_By>;
};

/** update columns of table "cabin" */
export enum Cabin_Update_Column {
  /** column name */
  Boat = 'boat',
  /** column name */
  CabinLength = 'cabin_length',
  /** column name */
  CabinWidth = 'cabin_width',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageFileNames = 'image_file_names',
  /** column name */
  MainImageFileName = 'main_image_file_name',
  /** column name */
  MaxGuestCapacity = 'max_guest_capacity',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  NameZh = 'name_zh',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Cabin_Var_Pop_Fields = {
  __typename?: 'cabin_var_pop_fields';
  cabin_length?: Maybe<Scalars['Float']>;
  cabin_width?: Maybe<Scalars['Float']>;
  max_guest_capacity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "cabin" */
export type Cabin_Var_Pop_Order_By = {
  cabin_length?: InputMaybe<Order_By>;
  cabin_width?: InputMaybe<Order_By>;
  max_guest_capacity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Cabin_Var_Samp_Fields = {
  __typename?: 'cabin_var_samp_fields';
  cabin_length?: Maybe<Scalars['Float']>;
  cabin_width?: Maybe<Scalars['Float']>;
  max_guest_capacity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "cabin" */
export type Cabin_Var_Samp_Order_By = {
  cabin_length?: InputMaybe<Order_By>;
  cabin_width?: InputMaybe<Order_By>;
  max_guest_capacity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Cabin_Variance_Fields = {
  __typename?: 'cabin_variance_fields';
  cabin_length?: Maybe<Scalars['Float']>;
  cabin_width?: Maybe<Scalars['Float']>;
  max_guest_capacity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "cabin" */
export type Cabin_Variance_Order_By = {
  cabin_length?: InputMaybe<Order_By>;
  cabin_width?: InputMaybe<Order_By>;
  max_guest_capacity?: InputMaybe<Order_By>;
};

/** columns and relationships of "country" */
export type Country = {
  __typename?: 'country';
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  /** An array relationship */
  locations: Array<Location>;
  /** An aggregate relationship */
  locations_aggregate: Location_Aggregate;
  name_en: Scalars['String'];
  name_th: Scalars['String'];
  name_zh: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "country" */
export type CountryLocationsArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


/** columns and relationships of "country" */
export type CountryLocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};

/** aggregated selection of "country" */
export type Country_Aggregate = {
  __typename?: 'country_aggregate';
  aggregate?: Maybe<Country_Aggregate_Fields>;
  nodes: Array<Country>;
};

/** aggregate fields of "country" */
export type Country_Aggregate_Fields = {
  __typename?: 'country_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Country_Max_Fields>;
  min?: Maybe<Country_Min_Fields>;
};


/** aggregate fields of "country" */
export type Country_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Country_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "country". All fields are combined with a logical 'AND'. */
export type Country_Bool_Exp = {
  _and?: InputMaybe<Array<Country_Bool_Exp>>;
  _not?: InputMaybe<Country_Bool_Exp>;
  _or?: InputMaybe<Array<Country_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  locations?: InputMaybe<Location_Bool_Exp>;
  name_en?: InputMaybe<String_Comparison_Exp>;
  name_th?: InputMaybe<String_Comparison_Exp>;
  name_zh?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "country" */
export enum Country_Constraint {
  /** unique or primary key constraint */
  CountryPkey = 'country_pkey'
}

/** input type for inserting data into table "country" */
export type Country_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  locations?: InputMaybe<Location_Arr_Rel_Insert_Input>;
  name_en?: InputMaybe<Scalars['String']>;
  name_th?: InputMaybe<Scalars['String']>;
  name_zh?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Country_Max_Fields = {
  __typename?: 'country_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  name_th?: Maybe<Scalars['String']>;
  name_zh?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Country_Min_Fields = {
  __typename?: 'country_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  name_th?: Maybe<Scalars['String']>;
  name_zh?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "country" */
export type Country_Mutation_Response = {
  __typename?: 'country_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Country>;
};

/** input type for inserting object relation for remote table "country" */
export type Country_Obj_Rel_Insert_Input = {
  data: Country_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Country_On_Conflict>;
};

/** on_conflict condition type for table "country" */
export type Country_On_Conflict = {
  constraint: Country_Constraint;
  update_columns?: Array<Country_Update_Column>;
  where?: InputMaybe<Country_Bool_Exp>;
};

/** Ordering options when selecting data from "country". */
export type Country_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  locations_aggregate?: InputMaybe<Location_Aggregate_Order_By>;
  name_en?: InputMaybe<Order_By>;
  name_th?: InputMaybe<Order_By>;
  name_zh?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: country */
export type Country_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "country" */
export enum Country_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  NameZh = 'name_zh',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "country" */
export type Country_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  name_en?: InputMaybe<Scalars['String']>;
  name_th?: InputMaybe<Scalars['String']>;
  name_zh?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "country" */
export enum Country_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  NameZh = 'name_zh',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "facility" */
export type Facility = {
  __typename?: 'facility';
  /** An array relationship */
  boat_facilities: Array<Boat_Facility>;
  /** An aggregate relationship */
  boat_facilities_aggregate: Boat_Facility_Aggregate;
  /** An array relationship */
  cabin_facilities: Array<Cabin_Facility>;
  /** An aggregate relationship */
  cabin_facilities_aggregate: Cabin_Facility_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  is_promoted: Scalars['Boolean'];
  name_en: Scalars['String'];
  name_th: Scalars['String'];
  name_zh: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "facility" */
export type FacilityBoat_FacilitiesArgs = {
  distinct_on?: InputMaybe<Array<Boat_Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boat_Facility_Order_By>>;
  where?: InputMaybe<Boat_Facility_Bool_Exp>;
};


/** columns and relationships of "facility" */
export type FacilityBoat_Facilities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boat_Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boat_Facility_Order_By>>;
  where?: InputMaybe<Boat_Facility_Bool_Exp>;
};


/** columns and relationships of "facility" */
export type FacilityCabin_FacilitiesArgs = {
  distinct_on?: InputMaybe<Array<Cabin_Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cabin_Facility_Order_By>>;
  where?: InputMaybe<Cabin_Facility_Bool_Exp>;
};


/** columns and relationships of "facility" */
export type FacilityCabin_Facilities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cabin_Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cabin_Facility_Order_By>>;
  where?: InputMaybe<Cabin_Facility_Bool_Exp>;
};

/** aggregated selection of "facility" */
export type Facility_Aggregate = {
  __typename?: 'facility_aggregate';
  aggregate?: Maybe<Facility_Aggregate_Fields>;
  nodes: Array<Facility>;
};

/** aggregate fields of "facility" */
export type Facility_Aggregate_Fields = {
  __typename?: 'facility_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Facility_Max_Fields>;
  min?: Maybe<Facility_Min_Fields>;
};


/** aggregate fields of "facility" */
export type Facility_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Facility_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "facility". All fields are combined with a logical 'AND'. */
export type Facility_Bool_Exp = {
  _and?: InputMaybe<Array<Facility_Bool_Exp>>;
  _not?: InputMaybe<Facility_Bool_Exp>;
  _or?: InputMaybe<Array<Facility_Bool_Exp>>;
  boat_facilities?: InputMaybe<Boat_Facility_Bool_Exp>;
  cabin_facilities?: InputMaybe<Cabin_Facility_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  is_promoted?: InputMaybe<Boolean_Comparison_Exp>;
  name_en?: InputMaybe<String_Comparison_Exp>;
  name_th?: InputMaybe<String_Comparison_Exp>;
  name_zh?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "facility" */
export enum Facility_Constraint {
  /** unique or primary key constraint */
  FacilityPkey = 'facility_pkey'
}

/** input type for inserting data into table "facility" */
export type Facility_Insert_Input = {
  boat_facilities?: InputMaybe<Boat_Facility_Arr_Rel_Insert_Input>;
  cabin_facilities?: InputMaybe<Cabin_Facility_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  is_promoted?: InputMaybe<Scalars['Boolean']>;
  name_en?: InputMaybe<Scalars['String']>;
  name_th?: InputMaybe<Scalars['String']>;
  name_zh?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Facility_Max_Fields = {
  __typename?: 'facility_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  name_th?: Maybe<Scalars['String']>;
  name_zh?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Facility_Min_Fields = {
  __typename?: 'facility_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  name_th?: Maybe<Scalars['String']>;
  name_zh?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "facility" */
export type Facility_Mutation_Response = {
  __typename?: 'facility_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Facility>;
};

/** input type for inserting object relation for remote table "facility" */
export type Facility_Obj_Rel_Insert_Input = {
  data: Facility_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Facility_On_Conflict>;
};

/** on_conflict condition type for table "facility" */
export type Facility_On_Conflict = {
  constraint: Facility_Constraint;
  update_columns?: Array<Facility_Update_Column>;
  where?: InputMaybe<Facility_Bool_Exp>;
};

/** Ordering options when selecting data from "facility". */
export type Facility_Order_By = {
  boat_facilities_aggregate?: InputMaybe<Boat_Facility_Aggregate_Order_By>;
  cabin_facilities_aggregate?: InputMaybe<Cabin_Facility_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_promoted?: InputMaybe<Order_By>;
  name_en?: InputMaybe<Order_By>;
  name_th?: InputMaybe<Order_By>;
  name_zh?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: facility */
export type Facility_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "facility" */
export enum Facility_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsPromoted = 'is_promoted',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  NameZh = 'name_zh',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "facility" */
export type Facility_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  is_promoted?: InputMaybe<Scalars['Boolean']>;
  name_en?: InputMaybe<Scalars['String']>;
  name_th?: InputMaybe<Scalars['String']>;
  name_zh?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "facility" */
export enum Facility_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsPromoted = 'is_promoted',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  NameZh = 'name_zh',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "freebie" */
export type Freebie = {
  __typename?: 'freebie';
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  is_promoted: Scalars['Boolean'];
  name_en: Scalars['String'];
  name_th: Scalars['String'];
  name_zh: Scalars['String'];
  /** An array relationship */
  trip_exclusions: Array<Trip_Exclusion>;
  /** An aggregate relationship */
  trip_exclusions_aggregate: Trip_Exclusion_Aggregate;
  /** An array relationship */
  trip_inclusions: Array<Trip_Inclusion>;
  /** An aggregate relationship */
  trip_inclusions_aggregate: Trip_Inclusion_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "freebie" */
export type FreebieTrip_ExclusionsArgs = {
  distinct_on?: InputMaybe<Array<Trip_Exclusion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Exclusion_Order_By>>;
  where?: InputMaybe<Trip_Exclusion_Bool_Exp>;
};


/** columns and relationships of "freebie" */
export type FreebieTrip_Exclusions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trip_Exclusion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Exclusion_Order_By>>;
  where?: InputMaybe<Trip_Exclusion_Bool_Exp>;
};


/** columns and relationships of "freebie" */
export type FreebieTrip_InclusionsArgs = {
  distinct_on?: InputMaybe<Array<Trip_Inclusion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Inclusion_Order_By>>;
  where?: InputMaybe<Trip_Inclusion_Bool_Exp>;
};


/** columns and relationships of "freebie" */
export type FreebieTrip_Inclusions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trip_Inclusion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Inclusion_Order_By>>;
  where?: InputMaybe<Trip_Inclusion_Bool_Exp>;
};

/** aggregated selection of "freebie" */
export type Freebie_Aggregate = {
  __typename?: 'freebie_aggregate';
  aggregate?: Maybe<Freebie_Aggregate_Fields>;
  nodes: Array<Freebie>;
};

/** aggregate fields of "freebie" */
export type Freebie_Aggregate_Fields = {
  __typename?: 'freebie_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Freebie_Max_Fields>;
  min?: Maybe<Freebie_Min_Fields>;
};


/** aggregate fields of "freebie" */
export type Freebie_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Freebie_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "freebie". All fields are combined with a logical 'AND'. */
export type Freebie_Bool_Exp = {
  _and?: InputMaybe<Array<Freebie_Bool_Exp>>;
  _not?: InputMaybe<Freebie_Bool_Exp>;
  _or?: InputMaybe<Array<Freebie_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  is_promoted?: InputMaybe<Boolean_Comparison_Exp>;
  name_en?: InputMaybe<String_Comparison_Exp>;
  name_th?: InputMaybe<String_Comparison_Exp>;
  name_zh?: InputMaybe<String_Comparison_Exp>;
  trip_exclusions?: InputMaybe<Trip_Exclusion_Bool_Exp>;
  trip_inclusions?: InputMaybe<Trip_Inclusion_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "freebie" */
export enum Freebie_Constraint {
  /** unique or primary key constraint */
  FreebiePkey = 'freebie_pkey'
}

/** input type for inserting data into table "freebie" */
export type Freebie_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  is_promoted?: InputMaybe<Scalars['Boolean']>;
  name_en?: InputMaybe<Scalars['String']>;
  name_th?: InputMaybe<Scalars['String']>;
  name_zh?: InputMaybe<Scalars['String']>;
  trip_exclusions?: InputMaybe<Trip_Exclusion_Arr_Rel_Insert_Input>;
  trip_inclusions?: InputMaybe<Trip_Inclusion_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Freebie_Max_Fields = {
  __typename?: 'freebie_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  name_th?: Maybe<Scalars['String']>;
  name_zh?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Freebie_Min_Fields = {
  __typename?: 'freebie_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  name_th?: Maybe<Scalars['String']>;
  name_zh?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "freebie" */
export type Freebie_Mutation_Response = {
  __typename?: 'freebie_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Freebie>;
};

/** input type for inserting object relation for remote table "freebie" */
export type Freebie_Obj_Rel_Insert_Input = {
  data: Freebie_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Freebie_On_Conflict>;
};

/** on_conflict condition type for table "freebie" */
export type Freebie_On_Conflict = {
  constraint: Freebie_Constraint;
  update_columns?: Array<Freebie_Update_Column>;
  where?: InputMaybe<Freebie_Bool_Exp>;
};

/** Ordering options when selecting data from "freebie". */
export type Freebie_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_promoted?: InputMaybe<Order_By>;
  name_en?: InputMaybe<Order_By>;
  name_th?: InputMaybe<Order_By>;
  name_zh?: InputMaybe<Order_By>;
  trip_exclusions_aggregate?: InputMaybe<Trip_Exclusion_Aggregate_Order_By>;
  trip_inclusions_aggregate?: InputMaybe<Trip_Inclusion_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: freebie */
export type Freebie_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "freebie" */
export enum Freebie_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsPromoted = 'is_promoted',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  NameZh = 'name_zh',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "freebie" */
export type Freebie_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  is_promoted?: InputMaybe<Scalars['Boolean']>;
  name_en?: InputMaybe<Scalars['String']>;
  name_th?: InputMaybe<Scalars['String']>;
  name_zh?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "freebie" */
export enum Freebie_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsPromoted = 'is_promoted',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  NameZh = 'name_zh',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "gender_acceptance" */
export type Gender_Acceptance = {
  __typename?: 'gender_acceptance';
  /** An array relationship */
  allotments: Array<Allotment>;
  /** An aggregate relationship */
  allotments_aggregate: Allotment_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  name_en: Scalars['String'];
  name_th: Scalars['String'];
  name_zh: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "gender_acceptance" */
export type Gender_AcceptanceAllotmentsArgs = {
  distinct_on?: InputMaybe<Array<Allotment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Allotment_Order_By>>;
  where?: InputMaybe<Allotment_Bool_Exp>;
};


/** columns and relationships of "gender_acceptance" */
export type Gender_AcceptanceAllotments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Allotment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Allotment_Order_By>>;
  where?: InputMaybe<Allotment_Bool_Exp>;
};

/** aggregated selection of "gender_acceptance" */
export type Gender_Acceptance_Aggregate = {
  __typename?: 'gender_acceptance_aggregate';
  aggregate?: Maybe<Gender_Acceptance_Aggregate_Fields>;
  nodes: Array<Gender_Acceptance>;
};

/** aggregate fields of "gender_acceptance" */
export type Gender_Acceptance_Aggregate_Fields = {
  __typename?: 'gender_acceptance_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Gender_Acceptance_Max_Fields>;
  min?: Maybe<Gender_Acceptance_Min_Fields>;
};


/** aggregate fields of "gender_acceptance" */
export type Gender_Acceptance_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Gender_Acceptance_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "gender_acceptance". All fields are combined with a logical 'AND'. */
export type Gender_Acceptance_Bool_Exp = {
  _and?: InputMaybe<Array<Gender_Acceptance_Bool_Exp>>;
  _not?: InputMaybe<Gender_Acceptance_Bool_Exp>;
  _or?: InputMaybe<Array<Gender_Acceptance_Bool_Exp>>;
  allotments?: InputMaybe<Allotment_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name_en?: InputMaybe<String_Comparison_Exp>;
  name_th?: InputMaybe<String_Comparison_Exp>;
  name_zh?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "gender_acceptance" */
export enum Gender_Acceptance_Constraint {
  /** unique or primary key constraint */
  GenderPkey = 'gender_pkey'
}

/** input type for inserting data into table "gender_acceptance" */
export type Gender_Acceptance_Insert_Input = {
  allotments?: InputMaybe<Allotment_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  name_en?: InputMaybe<Scalars['String']>;
  name_th?: InputMaybe<Scalars['String']>;
  name_zh?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Gender_Acceptance_Max_Fields = {
  __typename?: 'gender_acceptance_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  name_th?: Maybe<Scalars['String']>;
  name_zh?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Gender_Acceptance_Min_Fields = {
  __typename?: 'gender_acceptance_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  name_th?: Maybe<Scalars['String']>;
  name_zh?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "gender_acceptance" */
export type Gender_Acceptance_Mutation_Response = {
  __typename?: 'gender_acceptance_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gender_Acceptance>;
};

/** input type for inserting object relation for remote table "gender_acceptance" */
export type Gender_Acceptance_Obj_Rel_Insert_Input = {
  data: Gender_Acceptance_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Gender_Acceptance_On_Conflict>;
};

/** on_conflict condition type for table "gender_acceptance" */
export type Gender_Acceptance_On_Conflict = {
  constraint: Gender_Acceptance_Constraint;
  update_columns?: Array<Gender_Acceptance_Update_Column>;
  where?: InputMaybe<Gender_Acceptance_Bool_Exp>;
};

/** Ordering options when selecting data from "gender_acceptance". */
export type Gender_Acceptance_Order_By = {
  allotments_aggregate?: InputMaybe<Allotment_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name_en?: InputMaybe<Order_By>;
  name_th?: InputMaybe<Order_By>;
  name_zh?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: gender_acceptance */
export type Gender_Acceptance_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "gender_acceptance" */
export enum Gender_Acceptance_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  NameZh = 'name_zh',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "gender_acceptance" */
export type Gender_Acceptance_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  name_en?: InputMaybe<Scalars['String']>;
  name_th?: InputMaybe<Scalars['String']>;
  name_zh?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "gender_acceptance" */
export enum Gender_Acceptance_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  NameZh = 'name_zh',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "license_issuer" */
export type License_Issuer = {
  __typename?: 'license_issuer';
  /** An array relationship */
  booking_allotments: Array<Booking_Allotment>;
  /** An aggregate relationship */
  booking_allotments_aggregate: Booking_Allotment_Aggregate;
  created_at: Scalars['timestamptz'];
  description_en: Scalars['String'];
  description_th: Scalars['String'];
  description_zh: Scalars['String'];
  id: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "license_issuer" */
export type License_IssuerBooking_AllotmentsArgs = {
  distinct_on?: InputMaybe<Array<Booking_Allotment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Allotment_Order_By>>;
  where?: InputMaybe<Booking_Allotment_Bool_Exp>;
};


/** columns and relationships of "license_issuer" */
export type License_IssuerBooking_Allotments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Allotment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Allotment_Order_By>>;
  where?: InputMaybe<Booking_Allotment_Bool_Exp>;
};

/** aggregated selection of "license_issuer" */
export type License_Issuer_Aggregate = {
  __typename?: 'license_issuer_aggregate';
  aggregate?: Maybe<License_Issuer_Aggregate_Fields>;
  nodes: Array<License_Issuer>;
};

/** aggregate fields of "license_issuer" */
export type License_Issuer_Aggregate_Fields = {
  __typename?: 'license_issuer_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<License_Issuer_Max_Fields>;
  min?: Maybe<License_Issuer_Min_Fields>;
};


/** aggregate fields of "license_issuer" */
export type License_Issuer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<License_Issuer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "license_issuer". All fields are combined with a logical 'AND'. */
export type License_Issuer_Bool_Exp = {
  _and?: InputMaybe<Array<License_Issuer_Bool_Exp>>;
  _not?: InputMaybe<License_Issuer_Bool_Exp>;
  _or?: InputMaybe<Array<License_Issuer_Bool_Exp>>;
  booking_allotments?: InputMaybe<Booking_Allotment_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description_en?: InputMaybe<String_Comparison_Exp>;
  description_th?: InputMaybe<String_Comparison_Exp>;
  description_zh?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "license_issuer" */
export enum License_Issuer_Constraint {
  /** unique or primary key constraint */
  LicenseIssuerPkey = 'license_issuer_pkey'
}

/** input type for inserting data into table "license_issuer" */
export type License_Issuer_Insert_Input = {
  booking_allotments?: InputMaybe<Booking_Allotment_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description_en?: InputMaybe<Scalars['String']>;
  description_th?: InputMaybe<Scalars['String']>;
  description_zh?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type License_Issuer_Max_Fields = {
  __typename?: 'license_issuer_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description_en?: Maybe<Scalars['String']>;
  description_th?: Maybe<Scalars['String']>;
  description_zh?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type License_Issuer_Min_Fields = {
  __typename?: 'license_issuer_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description_en?: Maybe<Scalars['String']>;
  description_th?: Maybe<Scalars['String']>;
  description_zh?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "license_issuer" */
export type License_Issuer_Mutation_Response = {
  __typename?: 'license_issuer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<License_Issuer>;
};

/** input type for inserting object relation for remote table "license_issuer" */
export type License_Issuer_Obj_Rel_Insert_Input = {
  data: License_Issuer_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<License_Issuer_On_Conflict>;
};

/** on_conflict condition type for table "license_issuer" */
export type License_Issuer_On_Conflict = {
  constraint: License_Issuer_Constraint;
  update_columns?: Array<License_Issuer_Update_Column>;
  where?: InputMaybe<License_Issuer_Bool_Exp>;
};

/** Ordering options when selecting data from "license_issuer". */
export type License_Issuer_Order_By = {
  booking_allotments_aggregate?: InputMaybe<Booking_Allotment_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  description_en?: InputMaybe<Order_By>;
  description_th?: InputMaybe<Order_By>;
  description_zh?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: license_issuer */
export type License_Issuer_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "license_issuer" */
export enum License_Issuer_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DescriptionEn = 'description_en',
  /** column name */
  DescriptionTh = 'description_th',
  /** column name */
  DescriptionZh = 'description_zh',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "license_issuer" */
export type License_Issuer_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description_en?: InputMaybe<Scalars['String']>;
  description_th?: InputMaybe<Scalars['String']>;
  description_zh?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "license_issuer" */
export enum License_Issuer_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DescriptionEn = 'description_en',
  /** column name */
  DescriptionTh = 'description_th',
  /** column name */
  DescriptionZh = 'description_zh',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "location" */
export type Location = {
  __typename?: 'location';
  country: Scalars['String'];
  /** An object relationship */
  countryByCountry: Country;
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  name_en: Scalars['String'];
  name_th: Scalars['String'];
  name_zh: Scalars['String'];
  /** An array relationship */
  trip_locations: Array<Trip_Location>;
  /** An aggregate relationship */
  trip_locations_aggregate: Trip_Location_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "location" */
export type LocationTrip_LocationsArgs = {
  distinct_on?: InputMaybe<Array<Trip_Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Location_Order_By>>;
  where?: InputMaybe<Trip_Location_Bool_Exp>;
};


/** columns and relationships of "location" */
export type LocationTrip_Locations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trip_Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Location_Order_By>>;
  where?: InputMaybe<Trip_Location_Bool_Exp>;
};

/** aggregated selection of "location" */
export type Location_Aggregate = {
  __typename?: 'location_aggregate';
  aggregate?: Maybe<Location_Aggregate_Fields>;
  nodes: Array<Location>;
};

/** aggregate fields of "location" */
export type Location_Aggregate_Fields = {
  __typename?: 'location_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Location_Max_Fields>;
  min?: Maybe<Location_Min_Fields>;
};


/** aggregate fields of "location" */
export type Location_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Location_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "location" */
export type Location_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Location_Max_Order_By>;
  min?: InputMaybe<Location_Min_Order_By>;
};

/** input type for inserting array relation for remote table "location" */
export type Location_Arr_Rel_Insert_Input = {
  data: Array<Location_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Location_On_Conflict>;
};

/** Boolean expression to filter rows from the table "location". All fields are combined with a logical 'AND'. */
export type Location_Bool_Exp = {
  _and?: InputMaybe<Array<Location_Bool_Exp>>;
  _not?: InputMaybe<Location_Bool_Exp>;
  _or?: InputMaybe<Array<Location_Bool_Exp>>;
  country?: InputMaybe<String_Comparison_Exp>;
  countryByCountry?: InputMaybe<Country_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name_en?: InputMaybe<String_Comparison_Exp>;
  name_th?: InputMaybe<String_Comparison_Exp>;
  name_zh?: InputMaybe<String_Comparison_Exp>;
  trip_locations?: InputMaybe<Trip_Location_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "location" */
export enum Location_Constraint {
  /** unique or primary key constraint */
  LocationPkey = 'location_pkey'
}

/** input type for inserting data into table "location" */
export type Location_Insert_Input = {
  country?: InputMaybe<Scalars['String']>;
  countryByCountry?: InputMaybe<Country_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name_en?: InputMaybe<Scalars['String']>;
  name_th?: InputMaybe<Scalars['String']>;
  name_zh?: InputMaybe<Scalars['String']>;
  trip_locations?: InputMaybe<Trip_Location_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Location_Max_Fields = {
  __typename?: 'location_max_fields';
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name_en?: Maybe<Scalars['String']>;
  name_th?: Maybe<Scalars['String']>;
  name_zh?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "location" */
export type Location_Max_Order_By = {
  country?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name_en?: InputMaybe<Order_By>;
  name_th?: InputMaybe<Order_By>;
  name_zh?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Location_Min_Fields = {
  __typename?: 'location_min_fields';
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name_en?: Maybe<Scalars['String']>;
  name_th?: Maybe<Scalars['String']>;
  name_zh?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "location" */
export type Location_Min_Order_By = {
  country?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name_en?: InputMaybe<Order_By>;
  name_th?: InputMaybe<Order_By>;
  name_zh?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "location" */
export type Location_Mutation_Response = {
  __typename?: 'location_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Location>;
};

/** input type for inserting object relation for remote table "location" */
export type Location_Obj_Rel_Insert_Input = {
  data: Location_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Location_On_Conflict>;
};

/** on_conflict condition type for table "location" */
export type Location_On_Conflict = {
  constraint: Location_Constraint;
  update_columns?: Array<Location_Update_Column>;
  where?: InputMaybe<Location_Bool_Exp>;
};

/** Ordering options when selecting data from "location". */
export type Location_Order_By = {
  country?: InputMaybe<Order_By>;
  countryByCountry?: InputMaybe<Country_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name_en?: InputMaybe<Order_By>;
  name_th?: InputMaybe<Order_By>;
  name_zh?: InputMaybe<Order_By>;
  trip_locations_aggregate?: InputMaybe<Trip_Location_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: location */
export type Location_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "location" */
export enum Location_Select_Column {
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  NameZh = 'name_zh',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "location" */
export type Location_Set_Input = {
  country?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name_en?: InputMaybe<Scalars['String']>;
  name_th?: InputMaybe<Scalars['String']>;
  name_zh?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "location" */
export enum Location_Update_Column {
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  NameZh = 'name_zh',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "allotment" */
  delete_allotment?: Maybe<Allotment_Mutation_Response>;
  /** delete single row from the table: "allotment" */
  delete_allotment_by_pk?: Maybe<Allotment>;
  /** delete data from the table: "allotment_status" */
  delete_allotment_status?: Maybe<Allotment_Status_Mutation_Response>;
  /** delete single row from the table: "allotment_status" */
  delete_allotment_status_by_pk?: Maybe<Allotment_Status>;
  /** delete data from the table: "boat" */
  delete_boat?: Maybe<Boat_Mutation_Response>;
  /** delete single row from the table: "boat" */
  delete_boat_by_pk?: Maybe<Boat>;
  /** delete data from the table: "boat_facility" */
  delete_boat_facility?: Maybe<Boat_Facility_Mutation_Response>;
  /** delete single row from the table: "boat_facility" */
  delete_boat_facility_by_pk?: Maybe<Boat_Facility>;
  /** delete data from the table: "boat_safety" */
  delete_boat_safety?: Maybe<Boat_Safety_Mutation_Response>;
  /** delete single row from the table: "boat_safety" */
  delete_boat_safety_by_pk?: Maybe<Boat_Safety>;
  /** delete data from the table: "booking" */
  delete_booking?: Maybe<Booking_Mutation_Response>;
  /** delete data from the table: "booking_allotment" */
  delete_booking_allotment?: Maybe<Booking_Allotment_Mutation_Response>;
  /** delete single row from the table: "booking_allotment" */
  delete_booking_allotment_by_pk?: Maybe<Booking_Allotment>;
  /** delete single row from the table: "booking" */
  delete_booking_by_pk?: Maybe<Booking>;
  /** delete data from the table: "booking_status" */
  delete_booking_status?: Maybe<Booking_Status_Mutation_Response>;
  /** delete single row from the table: "booking_status" */
  delete_booking_status_by_pk?: Maybe<Booking_Status>;
  /** delete data from the table: "cabin" */
  delete_cabin?: Maybe<Cabin_Mutation_Response>;
  /** delete single row from the table: "cabin" */
  delete_cabin_by_pk?: Maybe<Cabin>;
  /** delete data from the table: "cabin_facility" */
  delete_cabin_facility?: Maybe<Cabin_Facility_Mutation_Response>;
  /** delete single row from the table: "cabin_facility" */
  delete_cabin_facility_by_pk?: Maybe<Cabin_Facility>;
  /** delete data from the table: "country" */
  delete_country?: Maybe<Country_Mutation_Response>;
  /** delete single row from the table: "country" */
  delete_country_by_pk?: Maybe<Country>;
  /** delete data from the table: "facility" */
  delete_facility?: Maybe<Facility_Mutation_Response>;
  /** delete single row from the table: "facility" */
  delete_facility_by_pk?: Maybe<Facility>;
  /** delete data from the table: "freebie" */
  delete_freebie?: Maybe<Freebie_Mutation_Response>;
  /** delete single row from the table: "freebie" */
  delete_freebie_by_pk?: Maybe<Freebie>;
  /** delete data from the table: "gender_acceptance" */
  delete_gender_acceptance?: Maybe<Gender_Acceptance_Mutation_Response>;
  /** delete single row from the table: "gender_acceptance" */
  delete_gender_acceptance_by_pk?: Maybe<Gender_Acceptance>;
  /** delete data from the table: "license_issuer" */
  delete_license_issuer?: Maybe<License_Issuer_Mutation_Response>;
  /** delete single row from the table: "license_issuer" */
  delete_license_issuer_by_pk?: Maybe<License_Issuer>;
  /** delete data from the table: "location" */
  delete_location?: Maybe<Location_Mutation_Response>;
  /** delete single row from the table: "location" */
  delete_location_by_pk?: Maybe<Location>;
  /** delete data from the table: "organizer" */
  delete_organizer?: Maybe<Organizer_Mutation_Response>;
  /** delete single row from the table: "organizer" */
  delete_organizer_by_pk?: Maybe<Organizer>;
  /** delete data from the table: "safety" */
  delete_safety?: Maybe<Safety_Mutation_Response>;
  /** delete single row from the table: "safety" */
  delete_safety_by_pk?: Maybe<Safety>;
  /** delete data from the table: "trip" */
  delete_trip?: Maybe<Trip_Mutation_Response>;
  /** delete single row from the table: "trip" */
  delete_trip_by_pk?: Maybe<Trip>;
  /** delete data from the table: "trip_exclusion" */
  delete_trip_exclusion?: Maybe<Trip_Exclusion_Mutation_Response>;
  /** delete single row from the table: "trip_exclusion" */
  delete_trip_exclusion_by_pk?: Maybe<Trip_Exclusion>;
  /** delete data from the table: "trip_inclusion" */
  delete_trip_inclusion?: Maybe<Trip_Inclusion_Mutation_Response>;
  /** delete single row from the table: "trip_inclusion" */
  delete_trip_inclusion_by_pk?: Maybe<Trip_Inclusion>;
  /** delete data from the table: "trip_location" */
  delete_trip_location?: Maybe<Trip_Location_Mutation_Response>;
  /** delete single row from the table: "trip_location" */
  delete_trip_location_by_pk?: Maybe<Trip_Location>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "allotment" */
  insert_allotment?: Maybe<Allotment_Mutation_Response>;
  /** insert a single row into the table: "allotment" */
  insert_allotment_one?: Maybe<Allotment>;
  /** insert data into the table: "allotment_status" */
  insert_allotment_status?: Maybe<Allotment_Status_Mutation_Response>;
  /** insert a single row into the table: "allotment_status" */
  insert_allotment_status_one?: Maybe<Allotment_Status>;
  /** insert data into the table: "boat" */
  insert_boat?: Maybe<Boat_Mutation_Response>;
  /** insert data into the table: "boat_facility" */
  insert_boat_facility?: Maybe<Boat_Facility_Mutation_Response>;
  /** insert a single row into the table: "boat_facility" */
  insert_boat_facility_one?: Maybe<Boat_Facility>;
  /** insert a single row into the table: "boat" */
  insert_boat_one?: Maybe<Boat>;
  /** insert data into the table: "boat_safety" */
  insert_boat_safety?: Maybe<Boat_Safety_Mutation_Response>;
  /** insert a single row into the table: "boat_safety" */
  insert_boat_safety_one?: Maybe<Boat_Safety>;
  /** insert data into the table: "booking" */
  insert_booking?: Maybe<Booking_Mutation_Response>;
  /** insert data into the table: "booking_allotment" */
  insert_booking_allotment?: Maybe<Booking_Allotment_Mutation_Response>;
  /** insert a single row into the table: "booking_allotment" */
  insert_booking_allotment_one?: Maybe<Booking_Allotment>;
  /** insert a single row into the table: "booking" */
  insert_booking_one?: Maybe<Booking>;
  /** insert data into the table: "booking_status" */
  insert_booking_status?: Maybe<Booking_Status_Mutation_Response>;
  /** insert a single row into the table: "booking_status" */
  insert_booking_status_one?: Maybe<Booking_Status>;
  /** insert data into the table: "cabin" */
  insert_cabin?: Maybe<Cabin_Mutation_Response>;
  /** insert data into the table: "cabin_facility" */
  insert_cabin_facility?: Maybe<Cabin_Facility_Mutation_Response>;
  /** insert a single row into the table: "cabin_facility" */
  insert_cabin_facility_one?: Maybe<Cabin_Facility>;
  /** insert a single row into the table: "cabin" */
  insert_cabin_one?: Maybe<Cabin>;
  /** insert data into the table: "country" */
  insert_country?: Maybe<Country_Mutation_Response>;
  /** insert a single row into the table: "country" */
  insert_country_one?: Maybe<Country>;
  /** insert data into the table: "facility" */
  insert_facility?: Maybe<Facility_Mutation_Response>;
  /** insert a single row into the table: "facility" */
  insert_facility_one?: Maybe<Facility>;
  /** insert data into the table: "freebie" */
  insert_freebie?: Maybe<Freebie_Mutation_Response>;
  /** insert a single row into the table: "freebie" */
  insert_freebie_one?: Maybe<Freebie>;
  /** insert data into the table: "gender_acceptance" */
  insert_gender_acceptance?: Maybe<Gender_Acceptance_Mutation_Response>;
  /** insert a single row into the table: "gender_acceptance" */
  insert_gender_acceptance_one?: Maybe<Gender_Acceptance>;
  /** insert data into the table: "license_issuer" */
  insert_license_issuer?: Maybe<License_Issuer_Mutation_Response>;
  /** insert a single row into the table: "license_issuer" */
  insert_license_issuer_one?: Maybe<License_Issuer>;
  /** insert data into the table: "location" */
  insert_location?: Maybe<Location_Mutation_Response>;
  /** insert a single row into the table: "location" */
  insert_location_one?: Maybe<Location>;
  /** insert data into the table: "organizer" */
  insert_organizer?: Maybe<Organizer_Mutation_Response>;
  /** insert a single row into the table: "organizer" */
  insert_organizer_one?: Maybe<Organizer>;
  /** insert data into the table: "safety" */
  insert_safety?: Maybe<Safety_Mutation_Response>;
  /** insert a single row into the table: "safety" */
  insert_safety_one?: Maybe<Safety>;
  /** insert data into the table: "trip" */
  insert_trip?: Maybe<Trip_Mutation_Response>;
  /** insert data into the table: "trip_exclusion" */
  insert_trip_exclusion?: Maybe<Trip_Exclusion_Mutation_Response>;
  /** insert a single row into the table: "trip_exclusion" */
  insert_trip_exclusion_one?: Maybe<Trip_Exclusion>;
  /** insert data into the table: "trip_inclusion" */
  insert_trip_inclusion?: Maybe<Trip_Inclusion_Mutation_Response>;
  /** insert a single row into the table: "trip_inclusion" */
  insert_trip_inclusion_one?: Maybe<Trip_Inclusion>;
  /** insert data into the table: "trip_location" */
  insert_trip_location?: Maybe<Trip_Location_Mutation_Response>;
  /** insert a single row into the table: "trip_location" */
  insert_trip_location_one?: Maybe<Trip_Location>;
  /** insert a single row into the table: "trip" */
  insert_trip_one?: Maybe<Trip>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "allotment" */
  update_allotment?: Maybe<Allotment_Mutation_Response>;
  /** update single row of the table: "allotment" */
  update_allotment_by_pk?: Maybe<Allotment>;
  /** update data of the table: "allotment_status" */
  update_allotment_status?: Maybe<Allotment_Status_Mutation_Response>;
  /** update single row of the table: "allotment_status" */
  update_allotment_status_by_pk?: Maybe<Allotment_Status>;
  /** update data of the table: "boat" */
  update_boat?: Maybe<Boat_Mutation_Response>;
  /** update single row of the table: "boat" */
  update_boat_by_pk?: Maybe<Boat>;
  /** update data of the table: "boat_facility" */
  update_boat_facility?: Maybe<Boat_Facility_Mutation_Response>;
  /** update single row of the table: "boat_facility" */
  update_boat_facility_by_pk?: Maybe<Boat_Facility>;
  /** update data of the table: "boat_safety" */
  update_boat_safety?: Maybe<Boat_Safety_Mutation_Response>;
  /** update single row of the table: "boat_safety" */
  update_boat_safety_by_pk?: Maybe<Boat_Safety>;
  /** update data of the table: "booking" */
  update_booking?: Maybe<Booking_Mutation_Response>;
  /** update data of the table: "booking_allotment" */
  update_booking_allotment?: Maybe<Booking_Allotment_Mutation_Response>;
  /** update single row of the table: "booking_allotment" */
  update_booking_allotment_by_pk?: Maybe<Booking_Allotment>;
  /** update single row of the table: "booking" */
  update_booking_by_pk?: Maybe<Booking>;
  /** update data of the table: "booking_status" */
  update_booking_status?: Maybe<Booking_Status_Mutation_Response>;
  /** update single row of the table: "booking_status" */
  update_booking_status_by_pk?: Maybe<Booking_Status>;
  /** update data of the table: "cabin" */
  update_cabin?: Maybe<Cabin_Mutation_Response>;
  /** update single row of the table: "cabin" */
  update_cabin_by_pk?: Maybe<Cabin>;
  /** update data of the table: "cabin_facility" */
  update_cabin_facility?: Maybe<Cabin_Facility_Mutation_Response>;
  /** update single row of the table: "cabin_facility" */
  update_cabin_facility_by_pk?: Maybe<Cabin_Facility>;
  /** update data of the table: "country" */
  update_country?: Maybe<Country_Mutation_Response>;
  /** update single row of the table: "country" */
  update_country_by_pk?: Maybe<Country>;
  /** update data of the table: "facility" */
  update_facility?: Maybe<Facility_Mutation_Response>;
  /** update single row of the table: "facility" */
  update_facility_by_pk?: Maybe<Facility>;
  /** update data of the table: "freebie" */
  update_freebie?: Maybe<Freebie_Mutation_Response>;
  /** update single row of the table: "freebie" */
  update_freebie_by_pk?: Maybe<Freebie>;
  /** update data of the table: "gender_acceptance" */
  update_gender_acceptance?: Maybe<Gender_Acceptance_Mutation_Response>;
  /** update single row of the table: "gender_acceptance" */
  update_gender_acceptance_by_pk?: Maybe<Gender_Acceptance>;
  /** update data of the table: "license_issuer" */
  update_license_issuer?: Maybe<License_Issuer_Mutation_Response>;
  /** update single row of the table: "license_issuer" */
  update_license_issuer_by_pk?: Maybe<License_Issuer>;
  /** update data of the table: "location" */
  update_location?: Maybe<Location_Mutation_Response>;
  /** update single row of the table: "location" */
  update_location_by_pk?: Maybe<Location>;
  /** update data of the table: "organizer" */
  update_organizer?: Maybe<Organizer_Mutation_Response>;
  /** update single row of the table: "organizer" */
  update_organizer_by_pk?: Maybe<Organizer>;
  /** update data of the table: "safety" */
  update_safety?: Maybe<Safety_Mutation_Response>;
  /** update single row of the table: "safety" */
  update_safety_by_pk?: Maybe<Safety>;
  /** update data of the table: "trip" */
  update_trip?: Maybe<Trip_Mutation_Response>;
  /** update single row of the table: "trip" */
  update_trip_by_pk?: Maybe<Trip>;
  /** update data of the table: "trip_exclusion" */
  update_trip_exclusion?: Maybe<Trip_Exclusion_Mutation_Response>;
  /** update single row of the table: "trip_exclusion" */
  update_trip_exclusion_by_pk?: Maybe<Trip_Exclusion>;
  /** update data of the table: "trip_inclusion" */
  update_trip_inclusion?: Maybe<Trip_Inclusion_Mutation_Response>;
  /** update single row of the table: "trip_inclusion" */
  update_trip_inclusion_by_pk?: Maybe<Trip_Inclusion>;
  /** update data of the table: "trip_location" */
  update_trip_location?: Maybe<Trip_Location_Mutation_Response>;
  /** update single row of the table: "trip_location" */
  update_trip_location_by_pk?: Maybe<Trip_Location>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_AllotmentArgs = {
  where: Allotment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Allotment_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Allotment_StatusArgs = {
  where: Allotment_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Allotment_Status_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_BoatArgs = {
  where: Boat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Boat_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Boat_FacilityArgs = {
  where: Boat_Facility_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Boat_Facility_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Boat_SafetyArgs = {
  where: Boat_Safety_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Boat_Safety_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_BookingArgs = {
  where: Booking_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Booking_AllotmentArgs = {
  where: Booking_Allotment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Booking_Allotment_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Booking_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Booking_StatusArgs = {
  where: Booking_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Booking_Status_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_CabinArgs = {
  where: Cabin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cabin_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Cabin_FacilityArgs = {
  where: Cabin_Facility_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cabin_Facility_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CountryArgs = {
  where: Country_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Country_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_FacilityArgs = {
  where: Facility_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Facility_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_FreebieArgs = {
  where: Freebie_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Freebie_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Gender_AcceptanceArgs = {
  where: Gender_Acceptance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gender_Acceptance_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_License_IssuerArgs = {
  where: License_Issuer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_License_Issuer_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_LocationArgs = {
  where: Location_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Location_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_OrganizerArgs = {
  where: Organizer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organizer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SafetyArgs = {
  where: Safety_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Safety_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TripArgs = {
  where: Trip_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Trip_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Trip_ExclusionArgs = {
  where: Trip_Exclusion_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Trip_Exclusion_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Trip_InclusionArgs = {
  where: Trip_Inclusion_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Trip_Inclusion_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Trip_LocationArgs = {
  where: Trip_Location_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Trip_Location_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AllotmentArgs = {
  objects: Array<Allotment_Insert_Input>;
  on_conflict?: InputMaybe<Allotment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Allotment_OneArgs = {
  object: Allotment_Insert_Input;
  on_conflict?: InputMaybe<Allotment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Allotment_StatusArgs = {
  objects: Array<Allotment_Status_Insert_Input>;
  on_conflict?: InputMaybe<Allotment_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Allotment_Status_OneArgs = {
  object: Allotment_Status_Insert_Input;
  on_conflict?: InputMaybe<Allotment_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BoatArgs = {
  objects: Array<Boat_Insert_Input>;
  on_conflict?: InputMaybe<Boat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Boat_FacilityArgs = {
  objects: Array<Boat_Facility_Insert_Input>;
  on_conflict?: InputMaybe<Boat_Facility_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Boat_Facility_OneArgs = {
  object: Boat_Facility_Insert_Input;
  on_conflict?: InputMaybe<Boat_Facility_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Boat_OneArgs = {
  object: Boat_Insert_Input;
  on_conflict?: InputMaybe<Boat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Boat_SafetyArgs = {
  objects: Array<Boat_Safety_Insert_Input>;
  on_conflict?: InputMaybe<Boat_Safety_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Boat_Safety_OneArgs = {
  object: Boat_Safety_Insert_Input;
  on_conflict?: InputMaybe<Boat_Safety_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BookingArgs = {
  objects: Array<Booking_Insert_Input>;
  on_conflict?: InputMaybe<Booking_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_AllotmentArgs = {
  objects: Array<Booking_Allotment_Insert_Input>;
  on_conflict?: InputMaybe<Booking_Allotment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_Allotment_OneArgs = {
  object: Booking_Allotment_Insert_Input;
  on_conflict?: InputMaybe<Booking_Allotment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_OneArgs = {
  object: Booking_Insert_Input;
  on_conflict?: InputMaybe<Booking_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_StatusArgs = {
  objects: Array<Booking_Status_Insert_Input>;
  on_conflict?: InputMaybe<Booking_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_Status_OneArgs = {
  object: Booking_Status_Insert_Input;
  on_conflict?: InputMaybe<Booking_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CabinArgs = {
  objects: Array<Cabin_Insert_Input>;
  on_conflict?: InputMaybe<Cabin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cabin_FacilityArgs = {
  objects: Array<Cabin_Facility_Insert_Input>;
  on_conflict?: InputMaybe<Cabin_Facility_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cabin_Facility_OneArgs = {
  object: Cabin_Facility_Insert_Input;
  on_conflict?: InputMaybe<Cabin_Facility_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cabin_OneArgs = {
  object: Cabin_Insert_Input;
  on_conflict?: InputMaybe<Cabin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CountryArgs = {
  objects: Array<Country_Insert_Input>;
  on_conflict?: InputMaybe<Country_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Country_OneArgs = {
  object: Country_Insert_Input;
  on_conflict?: InputMaybe<Country_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FacilityArgs = {
  objects: Array<Facility_Insert_Input>;
  on_conflict?: InputMaybe<Facility_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Facility_OneArgs = {
  object: Facility_Insert_Input;
  on_conflict?: InputMaybe<Facility_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FreebieArgs = {
  objects: Array<Freebie_Insert_Input>;
  on_conflict?: InputMaybe<Freebie_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Freebie_OneArgs = {
  object: Freebie_Insert_Input;
  on_conflict?: InputMaybe<Freebie_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gender_AcceptanceArgs = {
  objects: Array<Gender_Acceptance_Insert_Input>;
  on_conflict?: InputMaybe<Gender_Acceptance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gender_Acceptance_OneArgs = {
  object: Gender_Acceptance_Insert_Input;
  on_conflict?: InputMaybe<Gender_Acceptance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_License_IssuerArgs = {
  objects: Array<License_Issuer_Insert_Input>;
  on_conflict?: InputMaybe<License_Issuer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_License_Issuer_OneArgs = {
  object: License_Issuer_Insert_Input;
  on_conflict?: InputMaybe<License_Issuer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LocationArgs = {
  objects: Array<Location_Insert_Input>;
  on_conflict?: InputMaybe<Location_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Location_OneArgs = {
  object: Location_Insert_Input;
  on_conflict?: InputMaybe<Location_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrganizerArgs = {
  objects: Array<Organizer_Insert_Input>;
  on_conflict?: InputMaybe<Organizer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organizer_OneArgs = {
  object: Organizer_Insert_Input;
  on_conflict?: InputMaybe<Organizer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SafetyArgs = {
  objects: Array<Safety_Insert_Input>;
  on_conflict?: InputMaybe<Safety_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Safety_OneArgs = {
  object: Safety_Insert_Input;
  on_conflict?: InputMaybe<Safety_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TripArgs = {
  objects: Array<Trip_Insert_Input>;
  on_conflict?: InputMaybe<Trip_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trip_ExclusionArgs = {
  objects: Array<Trip_Exclusion_Insert_Input>;
  on_conflict?: InputMaybe<Trip_Exclusion_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trip_Exclusion_OneArgs = {
  object: Trip_Exclusion_Insert_Input;
  on_conflict?: InputMaybe<Trip_Exclusion_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trip_InclusionArgs = {
  objects: Array<Trip_Inclusion_Insert_Input>;
  on_conflict?: InputMaybe<Trip_Inclusion_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trip_Inclusion_OneArgs = {
  object: Trip_Inclusion_Insert_Input;
  on_conflict?: InputMaybe<Trip_Inclusion_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trip_LocationArgs = {
  objects: Array<Trip_Location_Insert_Input>;
  on_conflict?: InputMaybe<Trip_Location_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trip_Location_OneArgs = {
  object: Trip_Location_Insert_Input;
  on_conflict?: InputMaybe<Trip_Location_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trip_OneArgs = {
  object: Trip_Insert_Input;
  on_conflict?: InputMaybe<Trip_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AllotmentArgs = {
  _inc?: InputMaybe<Allotment_Inc_Input>;
  _set?: InputMaybe<Allotment_Set_Input>;
  where: Allotment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Allotment_By_PkArgs = {
  _inc?: InputMaybe<Allotment_Inc_Input>;
  _set?: InputMaybe<Allotment_Set_Input>;
  pk_columns: Allotment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Allotment_StatusArgs = {
  _set?: InputMaybe<Allotment_Status_Set_Input>;
  where: Allotment_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Allotment_Status_By_PkArgs = {
  _set?: InputMaybe<Allotment_Status_Set_Input>;
  pk_columns: Allotment_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BoatArgs = {
  _append?: InputMaybe<Boat_Append_Input>;
  _delete_at_path?: InputMaybe<Boat_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Boat_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Boat_Delete_Key_Input>;
  _inc?: InputMaybe<Boat_Inc_Input>;
  _prepend?: InputMaybe<Boat_Prepend_Input>;
  _set?: InputMaybe<Boat_Set_Input>;
  where: Boat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Boat_By_PkArgs = {
  _append?: InputMaybe<Boat_Append_Input>;
  _delete_at_path?: InputMaybe<Boat_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Boat_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Boat_Delete_Key_Input>;
  _inc?: InputMaybe<Boat_Inc_Input>;
  _prepend?: InputMaybe<Boat_Prepend_Input>;
  _set?: InputMaybe<Boat_Set_Input>;
  pk_columns: Boat_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Boat_FacilityArgs = {
  _set?: InputMaybe<Boat_Facility_Set_Input>;
  where: Boat_Facility_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Boat_Facility_By_PkArgs = {
  _set?: InputMaybe<Boat_Facility_Set_Input>;
  pk_columns: Boat_Facility_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Boat_SafetyArgs = {
  _inc?: InputMaybe<Boat_Safety_Inc_Input>;
  _set?: InputMaybe<Boat_Safety_Set_Input>;
  where: Boat_Safety_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Boat_Safety_By_PkArgs = {
  _inc?: InputMaybe<Boat_Safety_Inc_Input>;
  _set?: InputMaybe<Boat_Safety_Set_Input>;
  pk_columns: Boat_Safety_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BookingArgs = {
  _inc?: InputMaybe<Booking_Inc_Input>;
  _set?: InputMaybe<Booking_Set_Input>;
  where: Booking_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_AllotmentArgs = {
  _set?: InputMaybe<Booking_Allotment_Set_Input>;
  where: Booking_Allotment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_Allotment_By_PkArgs = {
  _set?: InputMaybe<Booking_Allotment_Set_Input>;
  pk_columns: Booking_Allotment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_By_PkArgs = {
  _inc?: InputMaybe<Booking_Inc_Input>;
  _set?: InputMaybe<Booking_Set_Input>;
  pk_columns: Booking_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_StatusArgs = {
  _set?: InputMaybe<Booking_Status_Set_Input>;
  where: Booking_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_Status_By_PkArgs = {
  _set?: InputMaybe<Booking_Status_Set_Input>;
  pk_columns: Booking_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CabinArgs = {
  _append?: InputMaybe<Cabin_Append_Input>;
  _delete_at_path?: InputMaybe<Cabin_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Cabin_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Cabin_Delete_Key_Input>;
  _inc?: InputMaybe<Cabin_Inc_Input>;
  _prepend?: InputMaybe<Cabin_Prepend_Input>;
  _set?: InputMaybe<Cabin_Set_Input>;
  where: Cabin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cabin_By_PkArgs = {
  _append?: InputMaybe<Cabin_Append_Input>;
  _delete_at_path?: InputMaybe<Cabin_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Cabin_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Cabin_Delete_Key_Input>;
  _inc?: InputMaybe<Cabin_Inc_Input>;
  _prepend?: InputMaybe<Cabin_Prepend_Input>;
  _set?: InputMaybe<Cabin_Set_Input>;
  pk_columns: Cabin_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cabin_FacilityArgs = {
  _set?: InputMaybe<Cabin_Facility_Set_Input>;
  where: Cabin_Facility_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cabin_Facility_By_PkArgs = {
  _set?: InputMaybe<Cabin_Facility_Set_Input>;
  pk_columns: Cabin_Facility_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CountryArgs = {
  _set?: InputMaybe<Country_Set_Input>;
  where: Country_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Country_By_PkArgs = {
  _set?: InputMaybe<Country_Set_Input>;
  pk_columns: Country_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FacilityArgs = {
  _set?: InputMaybe<Facility_Set_Input>;
  where: Facility_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Facility_By_PkArgs = {
  _set?: InputMaybe<Facility_Set_Input>;
  pk_columns: Facility_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FreebieArgs = {
  _set?: InputMaybe<Freebie_Set_Input>;
  where: Freebie_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Freebie_By_PkArgs = {
  _set?: InputMaybe<Freebie_Set_Input>;
  pk_columns: Freebie_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Gender_AcceptanceArgs = {
  _set?: InputMaybe<Gender_Acceptance_Set_Input>;
  where: Gender_Acceptance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gender_Acceptance_By_PkArgs = {
  _set?: InputMaybe<Gender_Acceptance_Set_Input>;
  pk_columns: Gender_Acceptance_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_License_IssuerArgs = {
  _set?: InputMaybe<License_Issuer_Set_Input>;
  where: License_Issuer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_License_Issuer_By_PkArgs = {
  _set?: InputMaybe<License_Issuer_Set_Input>;
  pk_columns: License_Issuer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LocationArgs = {
  _set?: InputMaybe<Location_Set_Input>;
  where: Location_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Location_By_PkArgs = {
  _set?: InputMaybe<Location_Set_Input>;
  pk_columns: Location_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrganizerArgs = {
  _set?: InputMaybe<Organizer_Set_Input>;
  where: Organizer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organizer_By_PkArgs = {
  _set?: InputMaybe<Organizer_Set_Input>;
  pk_columns: Organizer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SafetyArgs = {
  _set?: InputMaybe<Safety_Set_Input>;
  where: Safety_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Safety_By_PkArgs = {
  _set?: InputMaybe<Safety_Set_Input>;
  pk_columns: Safety_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TripArgs = {
  _append?: InputMaybe<Trip_Append_Input>;
  _delete_at_path?: InputMaybe<Trip_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Trip_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Trip_Delete_Key_Input>;
  _inc?: InputMaybe<Trip_Inc_Input>;
  _prepend?: InputMaybe<Trip_Prepend_Input>;
  _set?: InputMaybe<Trip_Set_Input>;
  where: Trip_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Trip_By_PkArgs = {
  _append?: InputMaybe<Trip_Append_Input>;
  _delete_at_path?: InputMaybe<Trip_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Trip_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Trip_Delete_Key_Input>;
  _inc?: InputMaybe<Trip_Inc_Input>;
  _prepend?: InputMaybe<Trip_Prepend_Input>;
  _set?: InputMaybe<Trip_Set_Input>;
  pk_columns: Trip_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Trip_ExclusionArgs = {
  _set?: InputMaybe<Trip_Exclusion_Set_Input>;
  where: Trip_Exclusion_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Trip_Exclusion_By_PkArgs = {
  _set?: InputMaybe<Trip_Exclusion_Set_Input>;
  pk_columns: Trip_Exclusion_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Trip_InclusionArgs = {
  _set?: InputMaybe<Trip_Inclusion_Set_Input>;
  where: Trip_Inclusion_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Trip_Inclusion_By_PkArgs = {
  _set?: InputMaybe<Trip_Inclusion_Set_Input>;
  pk_columns: Trip_Inclusion_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Trip_LocationArgs = {
  _set?: InputMaybe<Trip_Location_Set_Input>;
  where: Trip_Location_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Trip_Location_By_PkArgs = {
  _set?: InputMaybe<Trip_Location_Set_Input>;
  pk_columns: Trip_Location_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "organizer" */
export type Organizer = {
  __typename?: 'organizer';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  logo_image_file_name?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  name_th: Scalars['String'];
  name_zh?: Maybe<Scalars['String']>;
  /** An array relationship */
  trips: Array<Trip>;
  /** An aggregate relationship */
  trips_aggregate: Trip_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "organizer" */
export type OrganizerTripsArgs = {
  distinct_on?: InputMaybe<Array<Trip_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Order_By>>;
  where?: InputMaybe<Trip_Bool_Exp>;
};


/** columns and relationships of "organizer" */
export type OrganizerTrips_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trip_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Order_By>>;
  where?: InputMaybe<Trip_Bool_Exp>;
};

/** aggregated selection of "organizer" */
export type Organizer_Aggregate = {
  __typename?: 'organizer_aggregate';
  aggregate?: Maybe<Organizer_Aggregate_Fields>;
  nodes: Array<Organizer>;
};

/** aggregate fields of "organizer" */
export type Organizer_Aggregate_Fields = {
  __typename?: 'organizer_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Organizer_Max_Fields>;
  min?: Maybe<Organizer_Min_Fields>;
};


/** aggregate fields of "organizer" */
export type Organizer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organizer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "organizer". All fields are combined with a logical 'AND'. */
export type Organizer_Bool_Exp = {
  _and?: InputMaybe<Array<Organizer_Bool_Exp>>;
  _not?: InputMaybe<Organizer_Bool_Exp>;
  _or?: InputMaybe<Array<Organizer_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  logo_image_file_name?: InputMaybe<String_Comparison_Exp>;
  name_en?: InputMaybe<String_Comparison_Exp>;
  name_th?: InputMaybe<String_Comparison_Exp>;
  name_zh?: InputMaybe<String_Comparison_Exp>;
  trips?: InputMaybe<Trip_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "organizer" */
export enum Organizer_Constraint {
  /** unique or primary key constraint */
  OrganizerPkey = 'organizer_pkey'
}

/** input type for inserting data into table "organizer" */
export type Organizer_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  logo_image_file_name?: InputMaybe<Scalars['String']>;
  name_en?: InputMaybe<Scalars['String']>;
  name_th?: InputMaybe<Scalars['String']>;
  name_zh?: InputMaybe<Scalars['String']>;
  trips?: InputMaybe<Trip_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Organizer_Max_Fields = {
  __typename?: 'organizer_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  logo_image_file_name?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  name_th?: Maybe<Scalars['String']>;
  name_zh?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Organizer_Min_Fields = {
  __typename?: 'organizer_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  logo_image_file_name?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  name_th?: Maybe<Scalars['String']>;
  name_zh?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "organizer" */
export type Organizer_Mutation_Response = {
  __typename?: 'organizer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Organizer>;
};

/** input type for inserting object relation for remote table "organizer" */
export type Organizer_Obj_Rel_Insert_Input = {
  data: Organizer_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organizer_On_Conflict>;
};

/** on_conflict condition type for table "organizer" */
export type Organizer_On_Conflict = {
  constraint: Organizer_Constraint;
  update_columns?: Array<Organizer_Update_Column>;
  where?: InputMaybe<Organizer_Bool_Exp>;
};

/** Ordering options when selecting data from "organizer". */
export type Organizer_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logo_image_file_name?: InputMaybe<Order_By>;
  name_en?: InputMaybe<Order_By>;
  name_th?: InputMaybe<Order_By>;
  name_zh?: InputMaybe<Order_By>;
  trips_aggregate?: InputMaybe<Trip_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organizer */
export type Organizer_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "organizer" */
export enum Organizer_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LogoImageFileName = 'logo_image_file_name',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  NameZh = 'name_zh',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "organizer" */
export type Organizer_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  logo_image_file_name?: InputMaybe<Scalars['String']>;
  name_en?: InputMaybe<Scalars['String']>;
  name_th?: InputMaybe<Scalars['String']>;
  name_zh?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "organizer" */
export enum Organizer_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LogoImageFileName = 'logo_image_file_name',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  NameZh = 'name_zh',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "allotment" */
  allotment: Array<Allotment>;
  /** fetch aggregated fields from the table: "allotment" */
  allotment_aggregate: Allotment_Aggregate;
  /** fetch data from the table: "allotment" using primary key columns */
  allotment_by_pk?: Maybe<Allotment>;
  /** fetch data from the table: "allotment_status" */
  allotment_status: Array<Allotment_Status>;
  /** fetch aggregated fields from the table: "allotment_status" */
  allotment_status_aggregate: Allotment_Status_Aggregate;
  /** fetch data from the table: "allotment_status" using primary key columns */
  allotment_status_by_pk?: Maybe<Allotment_Status>;
  /** fetch data from the table: "boat" */
  boat: Array<Boat>;
  /** fetch aggregated fields from the table: "boat" */
  boat_aggregate: Boat_Aggregate;
  /** fetch data from the table: "boat" using primary key columns */
  boat_by_pk?: Maybe<Boat>;
  /** fetch data from the table: "boat_facility" */
  boat_facility: Array<Boat_Facility>;
  /** fetch aggregated fields from the table: "boat_facility" */
  boat_facility_aggregate: Boat_Facility_Aggregate;
  /** fetch data from the table: "boat_facility" using primary key columns */
  boat_facility_by_pk?: Maybe<Boat_Facility>;
  /** fetch data from the table: "boat_safety" */
  boat_safety: Array<Boat_Safety>;
  /** fetch aggregated fields from the table: "boat_safety" */
  boat_safety_aggregate: Boat_Safety_Aggregate;
  /** fetch data from the table: "boat_safety" using primary key columns */
  boat_safety_by_pk?: Maybe<Boat_Safety>;
  /** fetch data from the table: "booking" */
  booking: Array<Booking>;
  /** fetch aggregated fields from the table: "booking" */
  booking_aggregate: Booking_Aggregate;
  /** fetch data from the table: "booking_allotment" */
  booking_allotment: Array<Booking_Allotment>;
  /** fetch aggregated fields from the table: "booking_allotment" */
  booking_allotment_aggregate: Booking_Allotment_Aggregate;
  /** fetch data from the table: "booking_allotment" using primary key columns */
  booking_allotment_by_pk?: Maybe<Booking_Allotment>;
  /** fetch data from the table: "booking" using primary key columns */
  booking_by_pk?: Maybe<Booking>;
  /** fetch data from the table: "booking_status" */
  booking_status: Array<Booking_Status>;
  /** fetch aggregated fields from the table: "booking_status" */
  booking_status_aggregate: Booking_Status_Aggregate;
  /** fetch data from the table: "booking_status" using primary key columns */
  booking_status_by_pk?: Maybe<Booking_Status>;
  /** fetch data from the table: "cabin" */
  cabin: Array<Cabin>;
  /** fetch aggregated fields from the table: "cabin" */
  cabin_aggregate: Cabin_Aggregate;
  /** fetch data from the table: "cabin" using primary key columns */
  cabin_by_pk?: Maybe<Cabin>;
  /** fetch data from the table: "cabin_facility" */
  cabin_facility: Array<Cabin_Facility>;
  /** fetch aggregated fields from the table: "cabin_facility" */
  cabin_facility_aggregate: Cabin_Facility_Aggregate;
  /** fetch data from the table: "cabin_facility" using primary key columns */
  cabin_facility_by_pk?: Maybe<Cabin_Facility>;
  /** fetch data from the table: "country" */
  country: Array<Country>;
  /** fetch aggregated fields from the table: "country" */
  country_aggregate: Country_Aggregate;
  /** fetch data from the table: "country" using primary key columns */
  country_by_pk?: Maybe<Country>;
  /** fetch data from the table: "facility" */
  facility: Array<Facility>;
  /** fetch aggregated fields from the table: "facility" */
  facility_aggregate: Facility_Aggregate;
  /** fetch data from the table: "facility" using primary key columns */
  facility_by_pk?: Maybe<Facility>;
  /** fetch data from the table: "freebie" */
  freebie: Array<Freebie>;
  /** fetch aggregated fields from the table: "freebie" */
  freebie_aggregate: Freebie_Aggregate;
  /** fetch data from the table: "freebie" using primary key columns */
  freebie_by_pk?: Maybe<Freebie>;
  /** fetch data from the table: "gender_acceptance" */
  gender_acceptance: Array<Gender_Acceptance>;
  /** fetch aggregated fields from the table: "gender_acceptance" */
  gender_acceptance_aggregate: Gender_Acceptance_Aggregate;
  /** fetch data from the table: "gender_acceptance" using primary key columns */
  gender_acceptance_by_pk?: Maybe<Gender_Acceptance>;
  /** fetch data from the table: "license_issuer" */
  license_issuer: Array<License_Issuer>;
  /** fetch aggregated fields from the table: "license_issuer" */
  license_issuer_aggregate: License_Issuer_Aggregate;
  /** fetch data from the table: "license_issuer" using primary key columns */
  license_issuer_by_pk?: Maybe<License_Issuer>;
  /** fetch data from the table: "location" */
  location: Array<Location>;
  /** fetch aggregated fields from the table: "location" */
  location_aggregate: Location_Aggregate;
  /** fetch data from the table: "location" using primary key columns */
  location_by_pk?: Maybe<Location>;
  /** fetch data from the table: "organizer" */
  organizer: Array<Organizer>;
  /** fetch aggregated fields from the table: "organizer" */
  organizer_aggregate: Organizer_Aggregate;
  /** fetch data from the table: "organizer" using primary key columns */
  organizer_by_pk?: Maybe<Organizer>;
  /** fetch data from the table: "safety" */
  safety: Array<Safety>;
  /** fetch aggregated fields from the table: "safety" */
  safety_aggregate: Safety_Aggregate;
  /** fetch data from the table: "safety" using primary key columns */
  safety_by_pk?: Maybe<Safety>;
  /** fetch data from the table: "trip" */
  trip: Array<Trip>;
  /** fetch aggregated fields from the table: "trip" */
  trip_aggregate: Trip_Aggregate;
  /** fetch data from the table: "trip" using primary key columns */
  trip_by_pk?: Maybe<Trip>;
  /** fetch data from the table: "trip_exclusion" */
  trip_exclusion: Array<Trip_Exclusion>;
  /** fetch aggregated fields from the table: "trip_exclusion" */
  trip_exclusion_aggregate: Trip_Exclusion_Aggregate;
  /** fetch data from the table: "trip_exclusion" using primary key columns */
  trip_exclusion_by_pk?: Maybe<Trip_Exclusion>;
  /** fetch data from the table: "trip_inclusion" */
  trip_inclusion: Array<Trip_Inclusion>;
  /** fetch aggregated fields from the table: "trip_inclusion" */
  trip_inclusion_aggregate: Trip_Inclusion_Aggregate;
  /** fetch data from the table: "trip_inclusion" using primary key columns */
  trip_inclusion_by_pk?: Maybe<Trip_Inclusion>;
  /** fetch data from the table: "trip_location" */
  trip_location: Array<Trip_Location>;
  /** fetch aggregated fields from the table: "trip_location" */
  trip_location_aggregate: Trip_Location_Aggregate;
  /** fetch data from the table: "trip_location" using primary key columns */
  trip_location_by_pk?: Maybe<Trip_Location>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootAllotmentArgs = {
  distinct_on?: InputMaybe<Array<Allotment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Allotment_Order_By>>;
  where?: InputMaybe<Allotment_Bool_Exp>;
};


export type Query_RootAllotment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Allotment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Allotment_Order_By>>;
  where?: InputMaybe<Allotment_Bool_Exp>;
};


export type Query_RootAllotment_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAllotment_StatusArgs = {
  distinct_on?: InputMaybe<Array<Allotment_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Allotment_Status_Order_By>>;
  where?: InputMaybe<Allotment_Status_Bool_Exp>;
};


export type Query_RootAllotment_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Allotment_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Allotment_Status_Order_By>>;
  where?: InputMaybe<Allotment_Status_Bool_Exp>;
};


export type Query_RootAllotment_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootBoatArgs = {
  distinct_on?: InputMaybe<Array<Boat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boat_Order_By>>;
  where?: InputMaybe<Boat_Bool_Exp>;
};


export type Query_RootBoat_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boat_Order_By>>;
  where?: InputMaybe<Boat_Bool_Exp>;
};


export type Query_RootBoat_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBoat_FacilityArgs = {
  distinct_on?: InputMaybe<Array<Boat_Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boat_Facility_Order_By>>;
  where?: InputMaybe<Boat_Facility_Bool_Exp>;
};


export type Query_RootBoat_Facility_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boat_Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boat_Facility_Order_By>>;
  where?: InputMaybe<Boat_Facility_Bool_Exp>;
};


export type Query_RootBoat_Facility_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBoat_SafetyArgs = {
  distinct_on?: InputMaybe<Array<Boat_Safety_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boat_Safety_Order_By>>;
  where?: InputMaybe<Boat_Safety_Bool_Exp>;
};


export type Query_RootBoat_Safety_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boat_Safety_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boat_Safety_Order_By>>;
  where?: InputMaybe<Boat_Safety_Bool_Exp>;
};


export type Query_RootBoat_Safety_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBookingArgs = {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
};


export type Query_RootBooking_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
};


export type Query_RootBooking_AllotmentArgs = {
  distinct_on?: InputMaybe<Array<Booking_Allotment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Allotment_Order_By>>;
  where?: InputMaybe<Booking_Allotment_Bool_Exp>;
};


export type Query_RootBooking_Allotment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Allotment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Allotment_Order_By>>;
  where?: InputMaybe<Booking_Allotment_Bool_Exp>;
};


export type Query_RootBooking_Allotment_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBooking_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBooking_StatusArgs = {
  distinct_on?: InputMaybe<Array<Booking_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Status_Order_By>>;
  where?: InputMaybe<Booking_Status_Bool_Exp>;
};


export type Query_RootBooking_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Status_Order_By>>;
  where?: InputMaybe<Booking_Status_Bool_Exp>;
};


export type Query_RootBooking_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootCabinArgs = {
  distinct_on?: InputMaybe<Array<Cabin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cabin_Order_By>>;
  where?: InputMaybe<Cabin_Bool_Exp>;
};


export type Query_RootCabin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cabin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cabin_Order_By>>;
  where?: InputMaybe<Cabin_Bool_Exp>;
};


export type Query_RootCabin_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCabin_FacilityArgs = {
  distinct_on?: InputMaybe<Array<Cabin_Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cabin_Facility_Order_By>>;
  where?: InputMaybe<Cabin_Facility_Bool_Exp>;
};


export type Query_RootCabin_Facility_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cabin_Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cabin_Facility_Order_By>>;
  where?: InputMaybe<Cabin_Facility_Bool_Exp>;
};


export type Query_RootCabin_Facility_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCountryArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Query_RootCountry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Query_RootCountry_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootFacilityArgs = {
  distinct_on?: InputMaybe<Array<Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Facility_Order_By>>;
  where?: InputMaybe<Facility_Bool_Exp>;
};


export type Query_RootFacility_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Facility_Order_By>>;
  where?: InputMaybe<Facility_Bool_Exp>;
};


export type Query_RootFacility_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootFreebieArgs = {
  distinct_on?: InputMaybe<Array<Freebie_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Freebie_Order_By>>;
  where?: InputMaybe<Freebie_Bool_Exp>;
};


export type Query_RootFreebie_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Freebie_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Freebie_Order_By>>;
  where?: InputMaybe<Freebie_Bool_Exp>;
};


export type Query_RootFreebie_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootGender_AcceptanceArgs = {
  distinct_on?: InputMaybe<Array<Gender_Acceptance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gender_Acceptance_Order_By>>;
  where?: InputMaybe<Gender_Acceptance_Bool_Exp>;
};


export type Query_RootGender_Acceptance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gender_Acceptance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gender_Acceptance_Order_By>>;
  where?: InputMaybe<Gender_Acceptance_Bool_Exp>;
};


export type Query_RootGender_Acceptance_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootLicense_IssuerArgs = {
  distinct_on?: InputMaybe<Array<License_Issuer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<License_Issuer_Order_By>>;
  where?: InputMaybe<License_Issuer_Bool_Exp>;
};


export type Query_RootLicense_Issuer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<License_Issuer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<License_Issuer_Order_By>>;
  where?: InputMaybe<License_Issuer_Bool_Exp>;
};


export type Query_RootLicense_Issuer_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootLocationArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Query_RootLocation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Query_RootLocation_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrganizerArgs = {
  distinct_on?: InputMaybe<Array<Organizer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizer_Order_By>>;
  where?: InputMaybe<Organizer_Bool_Exp>;
};


export type Query_RootOrganizer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizer_Order_By>>;
  where?: InputMaybe<Organizer_Bool_Exp>;
};


export type Query_RootOrganizer_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSafetyArgs = {
  distinct_on?: InputMaybe<Array<Safety_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Safety_Order_By>>;
  where?: InputMaybe<Safety_Bool_Exp>;
};


export type Query_RootSafety_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Safety_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Safety_Order_By>>;
  where?: InputMaybe<Safety_Bool_Exp>;
};


export type Query_RootSafety_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootTripArgs = {
  distinct_on?: InputMaybe<Array<Trip_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Order_By>>;
  where?: InputMaybe<Trip_Bool_Exp>;
};


export type Query_RootTrip_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trip_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Order_By>>;
  where?: InputMaybe<Trip_Bool_Exp>;
};


export type Query_RootTrip_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTrip_ExclusionArgs = {
  distinct_on?: InputMaybe<Array<Trip_Exclusion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Exclusion_Order_By>>;
  where?: InputMaybe<Trip_Exclusion_Bool_Exp>;
};


export type Query_RootTrip_Exclusion_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trip_Exclusion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Exclusion_Order_By>>;
  where?: InputMaybe<Trip_Exclusion_Bool_Exp>;
};


export type Query_RootTrip_Exclusion_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTrip_InclusionArgs = {
  distinct_on?: InputMaybe<Array<Trip_Inclusion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Inclusion_Order_By>>;
  where?: InputMaybe<Trip_Inclusion_Bool_Exp>;
};


export type Query_RootTrip_Inclusion_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trip_Inclusion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Inclusion_Order_By>>;
  where?: InputMaybe<Trip_Inclusion_Bool_Exp>;
};


export type Query_RootTrip_Inclusion_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTrip_LocationArgs = {
  distinct_on?: InputMaybe<Array<Trip_Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Location_Order_By>>;
  where?: InputMaybe<Trip_Location_Bool_Exp>;
};


export type Query_RootTrip_Location_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trip_Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Location_Order_By>>;
  where?: InputMaybe<Trip_Location_Bool_Exp>;
};


export type Query_RootTrip_Location_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "safety" */
export type Safety = {
  __typename?: 'safety';
  /** An array relationship */
  boat_safeties: Array<Boat_Safety>;
  /** An aggregate relationship */
  boat_safeties_aggregate: Boat_Safety_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  name_en: Scalars['String'];
  name_th: Scalars['String'];
  name_zh: Scalars['String'];
  unit_en?: Maybe<Scalars['String']>;
  unit_th?: Maybe<Scalars['String']>;
  unit_zh?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "safety" */
export type SafetyBoat_SafetiesArgs = {
  distinct_on?: InputMaybe<Array<Boat_Safety_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boat_Safety_Order_By>>;
  where?: InputMaybe<Boat_Safety_Bool_Exp>;
};


/** columns and relationships of "safety" */
export type SafetyBoat_Safeties_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boat_Safety_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boat_Safety_Order_By>>;
  where?: InputMaybe<Boat_Safety_Bool_Exp>;
};

/** aggregated selection of "safety" */
export type Safety_Aggregate = {
  __typename?: 'safety_aggregate';
  aggregate?: Maybe<Safety_Aggregate_Fields>;
  nodes: Array<Safety>;
};

/** aggregate fields of "safety" */
export type Safety_Aggregate_Fields = {
  __typename?: 'safety_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Safety_Max_Fields>;
  min?: Maybe<Safety_Min_Fields>;
};


/** aggregate fields of "safety" */
export type Safety_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Safety_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "safety". All fields are combined with a logical 'AND'. */
export type Safety_Bool_Exp = {
  _and?: InputMaybe<Array<Safety_Bool_Exp>>;
  _not?: InputMaybe<Safety_Bool_Exp>;
  _or?: InputMaybe<Array<Safety_Bool_Exp>>;
  boat_safeties?: InputMaybe<Boat_Safety_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name_en?: InputMaybe<String_Comparison_Exp>;
  name_th?: InputMaybe<String_Comparison_Exp>;
  name_zh?: InputMaybe<String_Comparison_Exp>;
  unit_en?: InputMaybe<String_Comparison_Exp>;
  unit_th?: InputMaybe<String_Comparison_Exp>;
  unit_zh?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "safety" */
export enum Safety_Constraint {
  /** unique or primary key constraint */
  SafetyPkey = 'safety_pkey'
}

/** input type for inserting data into table "safety" */
export type Safety_Insert_Input = {
  boat_safeties?: InputMaybe<Boat_Safety_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  name_en?: InputMaybe<Scalars['String']>;
  name_th?: InputMaybe<Scalars['String']>;
  name_zh?: InputMaybe<Scalars['String']>;
  unit_en?: InputMaybe<Scalars['String']>;
  unit_th?: InputMaybe<Scalars['String']>;
  unit_zh?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Safety_Max_Fields = {
  __typename?: 'safety_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  name_th?: Maybe<Scalars['String']>;
  name_zh?: Maybe<Scalars['String']>;
  unit_en?: Maybe<Scalars['String']>;
  unit_th?: Maybe<Scalars['String']>;
  unit_zh?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Safety_Min_Fields = {
  __typename?: 'safety_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  name_th?: Maybe<Scalars['String']>;
  name_zh?: Maybe<Scalars['String']>;
  unit_en?: Maybe<Scalars['String']>;
  unit_th?: Maybe<Scalars['String']>;
  unit_zh?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "safety" */
export type Safety_Mutation_Response = {
  __typename?: 'safety_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Safety>;
};

/** input type for inserting object relation for remote table "safety" */
export type Safety_Obj_Rel_Insert_Input = {
  data: Safety_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Safety_On_Conflict>;
};

/** on_conflict condition type for table "safety" */
export type Safety_On_Conflict = {
  constraint: Safety_Constraint;
  update_columns?: Array<Safety_Update_Column>;
  where?: InputMaybe<Safety_Bool_Exp>;
};

/** Ordering options when selecting data from "safety". */
export type Safety_Order_By = {
  boat_safeties_aggregate?: InputMaybe<Boat_Safety_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name_en?: InputMaybe<Order_By>;
  name_th?: InputMaybe<Order_By>;
  name_zh?: InputMaybe<Order_By>;
  unit_en?: InputMaybe<Order_By>;
  unit_th?: InputMaybe<Order_By>;
  unit_zh?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: safety */
export type Safety_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "safety" */
export enum Safety_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  NameZh = 'name_zh',
  /** column name */
  UnitEn = 'unit_en',
  /** column name */
  UnitTh = 'unit_th',
  /** column name */
  UnitZh = 'unit_zh',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "safety" */
export type Safety_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  name_en?: InputMaybe<Scalars['String']>;
  name_th?: InputMaybe<Scalars['String']>;
  name_zh?: InputMaybe<Scalars['String']>;
  unit_en?: InputMaybe<Scalars['String']>;
  unit_th?: InputMaybe<Scalars['String']>;
  unit_zh?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "safety" */
export enum Safety_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  NameZh = 'name_zh',
  /** column name */
  UnitEn = 'unit_en',
  /** column name */
  UnitTh = 'unit_th',
  /** column name */
  UnitZh = 'unit_zh',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "allotment" */
  allotment: Array<Allotment>;
  /** fetch aggregated fields from the table: "allotment" */
  allotment_aggregate: Allotment_Aggregate;
  /** fetch data from the table: "allotment" using primary key columns */
  allotment_by_pk?: Maybe<Allotment>;
  /** fetch data from the table: "allotment_status" */
  allotment_status: Array<Allotment_Status>;
  /** fetch aggregated fields from the table: "allotment_status" */
  allotment_status_aggregate: Allotment_Status_Aggregate;
  /** fetch data from the table: "allotment_status" using primary key columns */
  allotment_status_by_pk?: Maybe<Allotment_Status>;
  /** fetch data from the table: "boat" */
  boat: Array<Boat>;
  /** fetch aggregated fields from the table: "boat" */
  boat_aggregate: Boat_Aggregate;
  /** fetch data from the table: "boat" using primary key columns */
  boat_by_pk?: Maybe<Boat>;
  /** fetch data from the table: "boat_facility" */
  boat_facility: Array<Boat_Facility>;
  /** fetch aggregated fields from the table: "boat_facility" */
  boat_facility_aggregate: Boat_Facility_Aggregate;
  /** fetch data from the table: "boat_facility" using primary key columns */
  boat_facility_by_pk?: Maybe<Boat_Facility>;
  /** fetch data from the table: "boat_safety" */
  boat_safety: Array<Boat_Safety>;
  /** fetch aggregated fields from the table: "boat_safety" */
  boat_safety_aggregate: Boat_Safety_Aggregate;
  /** fetch data from the table: "boat_safety" using primary key columns */
  boat_safety_by_pk?: Maybe<Boat_Safety>;
  /** fetch data from the table: "booking" */
  booking: Array<Booking>;
  /** fetch aggregated fields from the table: "booking" */
  booking_aggregate: Booking_Aggregate;
  /** fetch data from the table: "booking_allotment" */
  booking_allotment: Array<Booking_Allotment>;
  /** fetch aggregated fields from the table: "booking_allotment" */
  booking_allotment_aggregate: Booking_Allotment_Aggregate;
  /** fetch data from the table: "booking_allotment" using primary key columns */
  booking_allotment_by_pk?: Maybe<Booking_Allotment>;
  /** fetch data from the table: "booking" using primary key columns */
  booking_by_pk?: Maybe<Booking>;
  /** fetch data from the table: "booking_status" */
  booking_status: Array<Booking_Status>;
  /** fetch aggregated fields from the table: "booking_status" */
  booking_status_aggregate: Booking_Status_Aggregate;
  /** fetch data from the table: "booking_status" using primary key columns */
  booking_status_by_pk?: Maybe<Booking_Status>;
  /** fetch data from the table: "cabin" */
  cabin: Array<Cabin>;
  /** fetch aggregated fields from the table: "cabin" */
  cabin_aggregate: Cabin_Aggregate;
  /** fetch data from the table: "cabin" using primary key columns */
  cabin_by_pk?: Maybe<Cabin>;
  /** fetch data from the table: "cabin_facility" */
  cabin_facility: Array<Cabin_Facility>;
  /** fetch aggregated fields from the table: "cabin_facility" */
  cabin_facility_aggregate: Cabin_Facility_Aggregate;
  /** fetch data from the table: "cabin_facility" using primary key columns */
  cabin_facility_by_pk?: Maybe<Cabin_Facility>;
  /** fetch data from the table: "country" */
  country: Array<Country>;
  /** fetch aggregated fields from the table: "country" */
  country_aggregate: Country_Aggregate;
  /** fetch data from the table: "country" using primary key columns */
  country_by_pk?: Maybe<Country>;
  /** fetch data from the table: "facility" */
  facility: Array<Facility>;
  /** fetch aggregated fields from the table: "facility" */
  facility_aggregate: Facility_Aggregate;
  /** fetch data from the table: "facility" using primary key columns */
  facility_by_pk?: Maybe<Facility>;
  /** fetch data from the table: "freebie" */
  freebie: Array<Freebie>;
  /** fetch aggregated fields from the table: "freebie" */
  freebie_aggregate: Freebie_Aggregate;
  /** fetch data from the table: "freebie" using primary key columns */
  freebie_by_pk?: Maybe<Freebie>;
  /** fetch data from the table: "gender_acceptance" */
  gender_acceptance: Array<Gender_Acceptance>;
  /** fetch aggregated fields from the table: "gender_acceptance" */
  gender_acceptance_aggregate: Gender_Acceptance_Aggregate;
  /** fetch data from the table: "gender_acceptance" using primary key columns */
  gender_acceptance_by_pk?: Maybe<Gender_Acceptance>;
  /** fetch data from the table: "license_issuer" */
  license_issuer: Array<License_Issuer>;
  /** fetch aggregated fields from the table: "license_issuer" */
  license_issuer_aggregate: License_Issuer_Aggregate;
  /** fetch data from the table: "license_issuer" using primary key columns */
  license_issuer_by_pk?: Maybe<License_Issuer>;
  /** fetch data from the table: "location" */
  location: Array<Location>;
  /** fetch aggregated fields from the table: "location" */
  location_aggregate: Location_Aggregate;
  /** fetch data from the table: "location" using primary key columns */
  location_by_pk?: Maybe<Location>;
  /** fetch data from the table: "organizer" */
  organizer: Array<Organizer>;
  /** fetch aggregated fields from the table: "organizer" */
  organizer_aggregate: Organizer_Aggregate;
  /** fetch data from the table: "organizer" using primary key columns */
  organizer_by_pk?: Maybe<Organizer>;
  /** fetch data from the table: "safety" */
  safety: Array<Safety>;
  /** fetch aggregated fields from the table: "safety" */
  safety_aggregate: Safety_Aggregate;
  /** fetch data from the table: "safety" using primary key columns */
  safety_by_pk?: Maybe<Safety>;
  /** fetch data from the table: "trip" */
  trip: Array<Trip>;
  /** fetch aggregated fields from the table: "trip" */
  trip_aggregate: Trip_Aggregate;
  /** fetch data from the table: "trip" using primary key columns */
  trip_by_pk?: Maybe<Trip>;
  /** fetch data from the table: "trip_exclusion" */
  trip_exclusion: Array<Trip_Exclusion>;
  /** fetch aggregated fields from the table: "trip_exclusion" */
  trip_exclusion_aggregate: Trip_Exclusion_Aggregate;
  /** fetch data from the table: "trip_exclusion" using primary key columns */
  trip_exclusion_by_pk?: Maybe<Trip_Exclusion>;
  /** fetch data from the table: "trip_inclusion" */
  trip_inclusion: Array<Trip_Inclusion>;
  /** fetch aggregated fields from the table: "trip_inclusion" */
  trip_inclusion_aggregate: Trip_Inclusion_Aggregate;
  /** fetch data from the table: "trip_inclusion" using primary key columns */
  trip_inclusion_by_pk?: Maybe<Trip_Inclusion>;
  /** fetch data from the table: "trip_location" */
  trip_location: Array<Trip_Location>;
  /** fetch aggregated fields from the table: "trip_location" */
  trip_location_aggregate: Trip_Location_Aggregate;
  /** fetch data from the table: "trip_location" using primary key columns */
  trip_location_by_pk?: Maybe<Trip_Location>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootAllotmentArgs = {
  distinct_on?: InputMaybe<Array<Allotment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Allotment_Order_By>>;
  where?: InputMaybe<Allotment_Bool_Exp>;
};


export type Subscription_RootAllotment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Allotment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Allotment_Order_By>>;
  where?: InputMaybe<Allotment_Bool_Exp>;
};


export type Subscription_RootAllotment_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAllotment_StatusArgs = {
  distinct_on?: InputMaybe<Array<Allotment_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Allotment_Status_Order_By>>;
  where?: InputMaybe<Allotment_Status_Bool_Exp>;
};


export type Subscription_RootAllotment_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Allotment_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Allotment_Status_Order_By>>;
  where?: InputMaybe<Allotment_Status_Bool_Exp>;
};


export type Subscription_RootAllotment_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBoatArgs = {
  distinct_on?: InputMaybe<Array<Boat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boat_Order_By>>;
  where?: InputMaybe<Boat_Bool_Exp>;
};


export type Subscription_RootBoat_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boat_Order_By>>;
  where?: InputMaybe<Boat_Bool_Exp>;
};


export type Subscription_RootBoat_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBoat_FacilityArgs = {
  distinct_on?: InputMaybe<Array<Boat_Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boat_Facility_Order_By>>;
  where?: InputMaybe<Boat_Facility_Bool_Exp>;
};


export type Subscription_RootBoat_Facility_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boat_Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boat_Facility_Order_By>>;
  where?: InputMaybe<Boat_Facility_Bool_Exp>;
};


export type Subscription_RootBoat_Facility_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBoat_SafetyArgs = {
  distinct_on?: InputMaybe<Array<Boat_Safety_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boat_Safety_Order_By>>;
  where?: InputMaybe<Boat_Safety_Bool_Exp>;
};


export type Subscription_RootBoat_Safety_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boat_Safety_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boat_Safety_Order_By>>;
  where?: InputMaybe<Boat_Safety_Bool_Exp>;
};


export type Subscription_RootBoat_Safety_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBookingArgs = {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
};


export type Subscription_RootBooking_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
};


export type Subscription_RootBooking_AllotmentArgs = {
  distinct_on?: InputMaybe<Array<Booking_Allotment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Allotment_Order_By>>;
  where?: InputMaybe<Booking_Allotment_Bool_Exp>;
};


export type Subscription_RootBooking_Allotment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Allotment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Allotment_Order_By>>;
  where?: InputMaybe<Booking_Allotment_Bool_Exp>;
};


export type Subscription_RootBooking_Allotment_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBooking_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBooking_StatusArgs = {
  distinct_on?: InputMaybe<Array<Booking_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Status_Order_By>>;
  where?: InputMaybe<Booking_Status_Bool_Exp>;
};


export type Subscription_RootBooking_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Status_Order_By>>;
  where?: InputMaybe<Booking_Status_Bool_Exp>;
};


export type Subscription_RootBooking_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootCabinArgs = {
  distinct_on?: InputMaybe<Array<Cabin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cabin_Order_By>>;
  where?: InputMaybe<Cabin_Bool_Exp>;
};


export type Subscription_RootCabin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cabin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cabin_Order_By>>;
  where?: InputMaybe<Cabin_Bool_Exp>;
};


export type Subscription_RootCabin_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCabin_FacilityArgs = {
  distinct_on?: InputMaybe<Array<Cabin_Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cabin_Facility_Order_By>>;
  where?: InputMaybe<Cabin_Facility_Bool_Exp>;
};


export type Subscription_RootCabin_Facility_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cabin_Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cabin_Facility_Order_By>>;
  where?: InputMaybe<Cabin_Facility_Bool_Exp>;
};


export type Subscription_RootCabin_Facility_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCountryArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Subscription_RootCountry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Subscription_RootCountry_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootFacilityArgs = {
  distinct_on?: InputMaybe<Array<Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Facility_Order_By>>;
  where?: InputMaybe<Facility_Bool_Exp>;
};


export type Subscription_RootFacility_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Facility_Order_By>>;
  where?: InputMaybe<Facility_Bool_Exp>;
};


export type Subscription_RootFacility_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootFreebieArgs = {
  distinct_on?: InputMaybe<Array<Freebie_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Freebie_Order_By>>;
  where?: InputMaybe<Freebie_Bool_Exp>;
};


export type Subscription_RootFreebie_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Freebie_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Freebie_Order_By>>;
  where?: InputMaybe<Freebie_Bool_Exp>;
};


export type Subscription_RootFreebie_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootGender_AcceptanceArgs = {
  distinct_on?: InputMaybe<Array<Gender_Acceptance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gender_Acceptance_Order_By>>;
  where?: InputMaybe<Gender_Acceptance_Bool_Exp>;
};


export type Subscription_RootGender_Acceptance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gender_Acceptance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gender_Acceptance_Order_By>>;
  where?: InputMaybe<Gender_Acceptance_Bool_Exp>;
};


export type Subscription_RootGender_Acceptance_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootLicense_IssuerArgs = {
  distinct_on?: InputMaybe<Array<License_Issuer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<License_Issuer_Order_By>>;
  where?: InputMaybe<License_Issuer_Bool_Exp>;
};


export type Subscription_RootLicense_Issuer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<License_Issuer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<License_Issuer_Order_By>>;
  where?: InputMaybe<License_Issuer_Bool_Exp>;
};


export type Subscription_RootLicense_Issuer_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootLocationArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Subscription_RootLocation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Subscription_RootLocation_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrganizerArgs = {
  distinct_on?: InputMaybe<Array<Organizer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizer_Order_By>>;
  where?: InputMaybe<Organizer_Bool_Exp>;
};


export type Subscription_RootOrganizer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizer_Order_By>>;
  where?: InputMaybe<Organizer_Bool_Exp>;
};


export type Subscription_RootOrganizer_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSafetyArgs = {
  distinct_on?: InputMaybe<Array<Safety_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Safety_Order_By>>;
  where?: InputMaybe<Safety_Bool_Exp>;
};


export type Subscription_RootSafety_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Safety_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Safety_Order_By>>;
  where?: InputMaybe<Safety_Bool_Exp>;
};


export type Subscription_RootSafety_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootTripArgs = {
  distinct_on?: InputMaybe<Array<Trip_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Order_By>>;
  where?: InputMaybe<Trip_Bool_Exp>;
};


export type Subscription_RootTrip_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trip_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Order_By>>;
  where?: InputMaybe<Trip_Bool_Exp>;
};


export type Subscription_RootTrip_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTrip_ExclusionArgs = {
  distinct_on?: InputMaybe<Array<Trip_Exclusion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Exclusion_Order_By>>;
  where?: InputMaybe<Trip_Exclusion_Bool_Exp>;
};


export type Subscription_RootTrip_Exclusion_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trip_Exclusion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Exclusion_Order_By>>;
  where?: InputMaybe<Trip_Exclusion_Bool_Exp>;
};


export type Subscription_RootTrip_Exclusion_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTrip_InclusionArgs = {
  distinct_on?: InputMaybe<Array<Trip_Inclusion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Inclusion_Order_By>>;
  where?: InputMaybe<Trip_Inclusion_Bool_Exp>;
};


export type Subscription_RootTrip_Inclusion_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trip_Inclusion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Inclusion_Order_By>>;
  where?: InputMaybe<Trip_Inclusion_Bool_Exp>;
};


export type Subscription_RootTrip_Inclusion_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTrip_LocationArgs = {
  distinct_on?: InputMaybe<Array<Trip_Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Location_Order_By>>;
  where?: InputMaybe<Trip_Location_Bool_Exp>;
};


export type Subscription_RootTrip_Location_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trip_Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Location_Order_By>>;
  where?: InputMaybe<Trip_Location_Bool_Exp>;
};


export type Subscription_RootTrip_Location_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "trip" */
export type Trip = {
  __typename?: 'trip';
  airport?: Maybe<Scalars['String']>;
  /** An array relationship */
  allotments: Array<Allotment>;
  /** An aggregate relationship */
  allotments_aggregate: Allotment_Aggregate;
  boat: Scalars['uuid'];
  /** An object relationship */
  boatByBoat: Boat;
  created_at: Scalars['timestamptz'];
  description_en?: Maybe<Scalars['String']>;
  description_th: Scalars['String'];
  description_zh?: Maybe<Scalars['String']>;
  end_date: Scalars['date'];
  equipment_rental_rate_en?: Maybe<Scalars['String']>;
  equipment_rental_rate_th?: Maybe<Scalars['String']>;
  equipment_rental_rate_zh?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  image_file_names?: Maybe<Scalars['jsonb']>;
  main_image_file_name?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  name_th: Scalars['String'];
  name_zh?: Maybe<Scalars['String']>;
  notice_en?: Maybe<Scalars['String']>;
  notice_th?: Maybe<Scalars['String']>;
  notice_zh?: Maybe<Scalars['String']>;
  number_of_dives: Scalars['numeric'];
  organizer: Scalars['uuid'];
  /** An object relationship */
  organizerByOrganizer: Organizer;
  start_date: Scalars['date'];
  /** An array relationship */
  trip_exclusions: Array<Trip_Exclusion>;
  /** An aggregate relationship */
  trip_exclusions_aggregate: Trip_Exclusion_Aggregate;
  /** An array relationship */
  trip_inclusions: Array<Trip_Inclusion>;
  /** An aggregate relationship */
  trip_inclusions_aggregate: Trip_Inclusion_Aggregate;
  /** An array relationship */
  trip_locations: Array<Trip_Location>;
  /** An aggregate relationship */
  trip_locations_aggregate: Trip_Location_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "trip" */
export type TripAllotmentsArgs = {
  distinct_on?: InputMaybe<Array<Allotment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Allotment_Order_By>>;
  where?: InputMaybe<Allotment_Bool_Exp>;
};


/** columns and relationships of "trip" */
export type TripAllotments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Allotment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Allotment_Order_By>>;
  where?: InputMaybe<Allotment_Bool_Exp>;
};


/** columns and relationships of "trip" */
export type TripImage_File_NamesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "trip" */
export type TripTrip_ExclusionsArgs = {
  distinct_on?: InputMaybe<Array<Trip_Exclusion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Exclusion_Order_By>>;
  where?: InputMaybe<Trip_Exclusion_Bool_Exp>;
};


/** columns and relationships of "trip" */
export type TripTrip_Exclusions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trip_Exclusion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Exclusion_Order_By>>;
  where?: InputMaybe<Trip_Exclusion_Bool_Exp>;
};


/** columns and relationships of "trip" */
export type TripTrip_InclusionsArgs = {
  distinct_on?: InputMaybe<Array<Trip_Inclusion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Inclusion_Order_By>>;
  where?: InputMaybe<Trip_Inclusion_Bool_Exp>;
};


/** columns and relationships of "trip" */
export type TripTrip_Inclusions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trip_Inclusion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Inclusion_Order_By>>;
  where?: InputMaybe<Trip_Inclusion_Bool_Exp>;
};


/** columns and relationships of "trip" */
export type TripTrip_LocationsArgs = {
  distinct_on?: InputMaybe<Array<Trip_Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Location_Order_By>>;
  where?: InputMaybe<Trip_Location_Bool_Exp>;
};


/** columns and relationships of "trip" */
export type TripTrip_Locations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trip_Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trip_Location_Order_By>>;
  where?: InputMaybe<Trip_Location_Bool_Exp>;
};

/** aggregated selection of "trip" */
export type Trip_Aggregate = {
  __typename?: 'trip_aggregate';
  aggregate?: Maybe<Trip_Aggregate_Fields>;
  nodes: Array<Trip>;
};

/** aggregate fields of "trip" */
export type Trip_Aggregate_Fields = {
  __typename?: 'trip_aggregate_fields';
  avg?: Maybe<Trip_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Trip_Max_Fields>;
  min?: Maybe<Trip_Min_Fields>;
  stddev?: Maybe<Trip_Stddev_Fields>;
  stddev_pop?: Maybe<Trip_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Trip_Stddev_Samp_Fields>;
  sum?: Maybe<Trip_Sum_Fields>;
  var_pop?: Maybe<Trip_Var_Pop_Fields>;
  var_samp?: Maybe<Trip_Var_Samp_Fields>;
  variance?: Maybe<Trip_Variance_Fields>;
};


/** aggregate fields of "trip" */
export type Trip_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Trip_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "trip" */
export type Trip_Aggregate_Order_By = {
  avg?: InputMaybe<Trip_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Trip_Max_Order_By>;
  min?: InputMaybe<Trip_Min_Order_By>;
  stddev?: InputMaybe<Trip_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Trip_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Trip_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Trip_Sum_Order_By>;
  var_pop?: InputMaybe<Trip_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Trip_Var_Samp_Order_By>;
  variance?: InputMaybe<Trip_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Trip_Append_Input = {
  image_file_names?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "trip" */
export type Trip_Arr_Rel_Insert_Input = {
  data: Array<Trip_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Trip_On_Conflict>;
};

/** aggregate avg on columns */
export type Trip_Avg_Fields = {
  __typename?: 'trip_avg_fields';
  number_of_dives?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "trip" */
export type Trip_Avg_Order_By = {
  number_of_dives?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "trip". All fields are combined with a logical 'AND'. */
export type Trip_Bool_Exp = {
  _and?: InputMaybe<Array<Trip_Bool_Exp>>;
  _not?: InputMaybe<Trip_Bool_Exp>;
  _or?: InputMaybe<Array<Trip_Bool_Exp>>;
  airport?: InputMaybe<String_Comparison_Exp>;
  allotments?: InputMaybe<Allotment_Bool_Exp>;
  boat?: InputMaybe<Uuid_Comparison_Exp>;
  boatByBoat?: InputMaybe<Boat_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description_en?: InputMaybe<String_Comparison_Exp>;
  description_th?: InputMaybe<String_Comparison_Exp>;
  description_zh?: InputMaybe<String_Comparison_Exp>;
  end_date?: InputMaybe<Date_Comparison_Exp>;
  equipment_rental_rate_en?: InputMaybe<String_Comparison_Exp>;
  equipment_rental_rate_th?: InputMaybe<String_Comparison_Exp>;
  equipment_rental_rate_zh?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_file_names?: InputMaybe<Jsonb_Comparison_Exp>;
  main_image_file_name?: InputMaybe<String_Comparison_Exp>;
  name_en?: InputMaybe<String_Comparison_Exp>;
  name_th?: InputMaybe<String_Comparison_Exp>;
  name_zh?: InputMaybe<String_Comparison_Exp>;
  notice_en?: InputMaybe<String_Comparison_Exp>;
  notice_th?: InputMaybe<String_Comparison_Exp>;
  notice_zh?: InputMaybe<String_Comparison_Exp>;
  number_of_dives?: InputMaybe<Numeric_Comparison_Exp>;
  organizer?: InputMaybe<Uuid_Comparison_Exp>;
  organizerByOrganizer?: InputMaybe<Organizer_Bool_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
  trip_exclusions?: InputMaybe<Trip_Exclusion_Bool_Exp>;
  trip_inclusions?: InputMaybe<Trip_Inclusion_Bool_Exp>;
  trip_locations?: InputMaybe<Trip_Location_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "trip" */
export enum Trip_Constraint {
  /** unique or primary key constraint */
  TripPkey = 'trip_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Trip_Delete_At_Path_Input = {
  image_file_names?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Trip_Delete_Elem_Input = {
  image_file_names?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Trip_Delete_Key_Input = {
  image_file_names?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "trip_exclusion" */
export type Trip_Exclusion = {
  __typename?: 'trip_exclusion';
  created_at: Scalars['timestamptz'];
  freebie: Scalars['String'];
  /** An object relationship */
  freebieByFreebie: Freebie;
  id: Scalars['uuid'];
  trip: Scalars['uuid'];
  /** An object relationship */
  tripByTrip: Trip;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "trip_exclusion" */
export type Trip_Exclusion_Aggregate = {
  __typename?: 'trip_exclusion_aggregate';
  aggregate?: Maybe<Trip_Exclusion_Aggregate_Fields>;
  nodes: Array<Trip_Exclusion>;
};

/** aggregate fields of "trip_exclusion" */
export type Trip_Exclusion_Aggregate_Fields = {
  __typename?: 'trip_exclusion_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Trip_Exclusion_Max_Fields>;
  min?: Maybe<Trip_Exclusion_Min_Fields>;
};


/** aggregate fields of "trip_exclusion" */
export type Trip_Exclusion_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Trip_Exclusion_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "trip_exclusion" */
export type Trip_Exclusion_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Trip_Exclusion_Max_Order_By>;
  min?: InputMaybe<Trip_Exclusion_Min_Order_By>;
};

/** input type for inserting array relation for remote table "trip_exclusion" */
export type Trip_Exclusion_Arr_Rel_Insert_Input = {
  data: Array<Trip_Exclusion_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Trip_Exclusion_On_Conflict>;
};

/** Boolean expression to filter rows from the table "trip_exclusion". All fields are combined with a logical 'AND'. */
export type Trip_Exclusion_Bool_Exp = {
  _and?: InputMaybe<Array<Trip_Exclusion_Bool_Exp>>;
  _not?: InputMaybe<Trip_Exclusion_Bool_Exp>;
  _or?: InputMaybe<Array<Trip_Exclusion_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  freebie?: InputMaybe<String_Comparison_Exp>;
  freebieByFreebie?: InputMaybe<Freebie_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  trip?: InputMaybe<Uuid_Comparison_Exp>;
  tripByTrip?: InputMaybe<Trip_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "trip_exclusion" */
export enum Trip_Exclusion_Constraint {
  /** unique or primary key constraint */
  TripExclusionPkey = 'trip_exclusion_pkey',
  /** unique or primary key constraint */
  TripExclusionTripFreebieKey = 'trip_exclusion_trip_freebie_key'
}

/** input type for inserting data into table "trip_exclusion" */
export type Trip_Exclusion_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  freebie?: InputMaybe<Scalars['String']>;
  freebieByFreebie?: InputMaybe<Freebie_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  trip?: InputMaybe<Scalars['uuid']>;
  tripByTrip?: InputMaybe<Trip_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Trip_Exclusion_Max_Fields = {
  __typename?: 'trip_exclusion_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  freebie?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  trip?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "trip_exclusion" */
export type Trip_Exclusion_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  freebie?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  trip?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Trip_Exclusion_Min_Fields = {
  __typename?: 'trip_exclusion_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  freebie?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  trip?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "trip_exclusion" */
export type Trip_Exclusion_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  freebie?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  trip?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "trip_exclusion" */
export type Trip_Exclusion_Mutation_Response = {
  __typename?: 'trip_exclusion_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Trip_Exclusion>;
};

/** on_conflict condition type for table "trip_exclusion" */
export type Trip_Exclusion_On_Conflict = {
  constraint: Trip_Exclusion_Constraint;
  update_columns?: Array<Trip_Exclusion_Update_Column>;
  where?: InputMaybe<Trip_Exclusion_Bool_Exp>;
};

/** Ordering options when selecting data from "trip_exclusion". */
export type Trip_Exclusion_Order_By = {
  created_at?: InputMaybe<Order_By>;
  freebie?: InputMaybe<Order_By>;
  freebieByFreebie?: InputMaybe<Freebie_Order_By>;
  id?: InputMaybe<Order_By>;
  trip?: InputMaybe<Order_By>;
  tripByTrip?: InputMaybe<Trip_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: trip_exclusion */
export type Trip_Exclusion_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "trip_exclusion" */
export enum Trip_Exclusion_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Freebie = 'freebie',
  /** column name */
  Id = 'id',
  /** column name */
  Trip = 'trip',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "trip_exclusion" */
export type Trip_Exclusion_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  freebie?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  trip?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "trip_exclusion" */
export enum Trip_Exclusion_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Freebie = 'freebie',
  /** column name */
  Id = 'id',
  /** column name */
  Trip = 'trip',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for incrementing numeric columns in table "trip" */
export type Trip_Inc_Input = {
  number_of_dives?: InputMaybe<Scalars['numeric']>;
};

/** columns and relationships of "trip_inclusion" */
export type Trip_Inclusion = {
  __typename?: 'trip_inclusion';
  created_at: Scalars['timestamptz'];
  freebie: Scalars['String'];
  /** An object relationship */
  freebieByFreebie: Freebie;
  id: Scalars['uuid'];
  trip: Scalars['uuid'];
  /** An object relationship */
  tripByTrip: Trip;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "trip_inclusion" */
export type Trip_Inclusion_Aggregate = {
  __typename?: 'trip_inclusion_aggregate';
  aggregate?: Maybe<Trip_Inclusion_Aggregate_Fields>;
  nodes: Array<Trip_Inclusion>;
};

/** aggregate fields of "trip_inclusion" */
export type Trip_Inclusion_Aggregate_Fields = {
  __typename?: 'trip_inclusion_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Trip_Inclusion_Max_Fields>;
  min?: Maybe<Trip_Inclusion_Min_Fields>;
};


/** aggregate fields of "trip_inclusion" */
export type Trip_Inclusion_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Trip_Inclusion_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "trip_inclusion" */
export type Trip_Inclusion_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Trip_Inclusion_Max_Order_By>;
  min?: InputMaybe<Trip_Inclusion_Min_Order_By>;
};

/** input type for inserting array relation for remote table "trip_inclusion" */
export type Trip_Inclusion_Arr_Rel_Insert_Input = {
  data: Array<Trip_Inclusion_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Trip_Inclusion_On_Conflict>;
};

/** Boolean expression to filter rows from the table "trip_inclusion". All fields are combined with a logical 'AND'. */
export type Trip_Inclusion_Bool_Exp = {
  _and?: InputMaybe<Array<Trip_Inclusion_Bool_Exp>>;
  _not?: InputMaybe<Trip_Inclusion_Bool_Exp>;
  _or?: InputMaybe<Array<Trip_Inclusion_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  freebie?: InputMaybe<String_Comparison_Exp>;
  freebieByFreebie?: InputMaybe<Freebie_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  trip?: InputMaybe<Uuid_Comparison_Exp>;
  tripByTrip?: InputMaybe<Trip_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "trip_inclusion" */
export enum Trip_Inclusion_Constraint {
  /** unique or primary key constraint */
  TripInclusionPkey = 'trip_inclusion_pkey',
  /** unique or primary key constraint */
  TripInclusionTripFreebieKey = 'trip_inclusion_trip_freebie_key'
}

/** input type for inserting data into table "trip_inclusion" */
export type Trip_Inclusion_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  freebie?: InputMaybe<Scalars['String']>;
  freebieByFreebie?: InputMaybe<Freebie_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  trip?: InputMaybe<Scalars['uuid']>;
  tripByTrip?: InputMaybe<Trip_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Trip_Inclusion_Max_Fields = {
  __typename?: 'trip_inclusion_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  freebie?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  trip?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "trip_inclusion" */
export type Trip_Inclusion_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  freebie?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  trip?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Trip_Inclusion_Min_Fields = {
  __typename?: 'trip_inclusion_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  freebie?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  trip?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "trip_inclusion" */
export type Trip_Inclusion_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  freebie?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  trip?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "trip_inclusion" */
export type Trip_Inclusion_Mutation_Response = {
  __typename?: 'trip_inclusion_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Trip_Inclusion>;
};

/** on_conflict condition type for table "trip_inclusion" */
export type Trip_Inclusion_On_Conflict = {
  constraint: Trip_Inclusion_Constraint;
  update_columns?: Array<Trip_Inclusion_Update_Column>;
  where?: InputMaybe<Trip_Inclusion_Bool_Exp>;
};

/** Ordering options when selecting data from "trip_inclusion". */
export type Trip_Inclusion_Order_By = {
  created_at?: InputMaybe<Order_By>;
  freebie?: InputMaybe<Order_By>;
  freebieByFreebie?: InputMaybe<Freebie_Order_By>;
  id?: InputMaybe<Order_By>;
  trip?: InputMaybe<Order_By>;
  tripByTrip?: InputMaybe<Trip_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: trip_inclusion */
export type Trip_Inclusion_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "trip_inclusion" */
export enum Trip_Inclusion_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Freebie = 'freebie',
  /** column name */
  Id = 'id',
  /** column name */
  Trip = 'trip',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "trip_inclusion" */
export type Trip_Inclusion_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  freebie?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  trip?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "trip_inclusion" */
export enum Trip_Inclusion_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Freebie = 'freebie',
  /** column name */
  Id = 'id',
  /** column name */
  Trip = 'trip',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for inserting data into table "trip" */
export type Trip_Insert_Input = {
  airport?: InputMaybe<Scalars['String']>;
  allotments?: InputMaybe<Allotment_Arr_Rel_Insert_Input>;
  boat?: InputMaybe<Scalars['uuid']>;
  boatByBoat?: InputMaybe<Boat_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description_en?: InputMaybe<Scalars['String']>;
  description_th?: InputMaybe<Scalars['String']>;
  description_zh?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['date']>;
  equipment_rental_rate_en?: InputMaybe<Scalars['String']>;
  equipment_rental_rate_th?: InputMaybe<Scalars['String']>;
  equipment_rental_rate_zh?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image_file_names?: InputMaybe<Scalars['jsonb']>;
  main_image_file_name?: InputMaybe<Scalars['String']>;
  name_en?: InputMaybe<Scalars['String']>;
  name_th?: InputMaybe<Scalars['String']>;
  name_zh?: InputMaybe<Scalars['String']>;
  notice_en?: InputMaybe<Scalars['String']>;
  notice_th?: InputMaybe<Scalars['String']>;
  notice_zh?: InputMaybe<Scalars['String']>;
  number_of_dives?: InputMaybe<Scalars['numeric']>;
  organizer?: InputMaybe<Scalars['uuid']>;
  organizerByOrganizer?: InputMaybe<Organizer_Obj_Rel_Insert_Input>;
  start_date?: InputMaybe<Scalars['date']>;
  trip_exclusions?: InputMaybe<Trip_Exclusion_Arr_Rel_Insert_Input>;
  trip_inclusions?: InputMaybe<Trip_Inclusion_Arr_Rel_Insert_Input>;
  trip_locations?: InputMaybe<Trip_Location_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "trip_location" */
export type Trip_Location = {
  __typename?: 'trip_location';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  location: Scalars['uuid'];
  /** An object relationship */
  locationByLocation: Location;
  trip: Scalars['uuid'];
  /** An object relationship */
  tripByTrip: Trip;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "trip_location" */
export type Trip_Location_Aggregate = {
  __typename?: 'trip_location_aggregate';
  aggregate?: Maybe<Trip_Location_Aggregate_Fields>;
  nodes: Array<Trip_Location>;
};

/** aggregate fields of "trip_location" */
export type Trip_Location_Aggregate_Fields = {
  __typename?: 'trip_location_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Trip_Location_Max_Fields>;
  min?: Maybe<Trip_Location_Min_Fields>;
};


/** aggregate fields of "trip_location" */
export type Trip_Location_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Trip_Location_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "trip_location" */
export type Trip_Location_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Trip_Location_Max_Order_By>;
  min?: InputMaybe<Trip_Location_Min_Order_By>;
};

/** input type for inserting array relation for remote table "trip_location" */
export type Trip_Location_Arr_Rel_Insert_Input = {
  data: Array<Trip_Location_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Trip_Location_On_Conflict>;
};

/** Boolean expression to filter rows from the table "trip_location". All fields are combined with a logical 'AND'. */
export type Trip_Location_Bool_Exp = {
  _and?: InputMaybe<Array<Trip_Location_Bool_Exp>>;
  _not?: InputMaybe<Trip_Location_Bool_Exp>;
  _or?: InputMaybe<Array<Trip_Location_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  location?: InputMaybe<Uuid_Comparison_Exp>;
  locationByLocation?: InputMaybe<Location_Bool_Exp>;
  trip?: InputMaybe<Uuid_Comparison_Exp>;
  tripByTrip?: InputMaybe<Trip_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "trip_location" */
export enum Trip_Location_Constraint {
  /** unique or primary key constraint */
  TripLocationPkey = 'trip_location_pkey',
  /** unique or primary key constraint */
  TripLocationTripLocationKey = 'trip_location_trip_location_key'
}

/** input type for inserting data into table "trip_location" */
export type Trip_Location_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  location?: InputMaybe<Scalars['uuid']>;
  locationByLocation?: InputMaybe<Location_Obj_Rel_Insert_Input>;
  trip?: InputMaybe<Scalars['uuid']>;
  tripByTrip?: InputMaybe<Trip_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Trip_Location_Max_Fields = {
  __typename?: 'trip_location_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['uuid']>;
  trip?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "trip_location" */
export type Trip_Location_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  trip?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Trip_Location_Min_Fields = {
  __typename?: 'trip_location_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['uuid']>;
  trip?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "trip_location" */
export type Trip_Location_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  trip?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "trip_location" */
export type Trip_Location_Mutation_Response = {
  __typename?: 'trip_location_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Trip_Location>;
};

/** on_conflict condition type for table "trip_location" */
export type Trip_Location_On_Conflict = {
  constraint: Trip_Location_Constraint;
  update_columns?: Array<Trip_Location_Update_Column>;
  where?: InputMaybe<Trip_Location_Bool_Exp>;
};

/** Ordering options when selecting data from "trip_location". */
export type Trip_Location_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  locationByLocation?: InputMaybe<Location_Order_By>;
  trip?: InputMaybe<Order_By>;
  tripByTrip?: InputMaybe<Trip_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: trip_location */
export type Trip_Location_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "trip_location" */
export enum Trip_Location_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Trip = 'trip',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "trip_location" */
export type Trip_Location_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  location?: InputMaybe<Scalars['uuid']>;
  trip?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "trip_location" */
export enum Trip_Location_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Trip = 'trip',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate max on columns */
export type Trip_Max_Fields = {
  __typename?: 'trip_max_fields';
  airport?: Maybe<Scalars['String']>;
  boat?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description_en?: Maybe<Scalars['String']>;
  description_th?: Maybe<Scalars['String']>;
  description_zh?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['date']>;
  equipment_rental_rate_en?: Maybe<Scalars['String']>;
  equipment_rental_rate_th?: Maybe<Scalars['String']>;
  equipment_rental_rate_zh?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  main_image_file_name?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  name_th?: Maybe<Scalars['String']>;
  name_zh?: Maybe<Scalars['String']>;
  notice_en?: Maybe<Scalars['String']>;
  notice_th?: Maybe<Scalars['String']>;
  notice_zh?: Maybe<Scalars['String']>;
  number_of_dives?: Maybe<Scalars['numeric']>;
  organizer?: Maybe<Scalars['uuid']>;
  start_date?: Maybe<Scalars['date']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "trip" */
export type Trip_Max_Order_By = {
  airport?: InputMaybe<Order_By>;
  boat?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description_en?: InputMaybe<Order_By>;
  description_th?: InputMaybe<Order_By>;
  description_zh?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  equipment_rental_rate_en?: InputMaybe<Order_By>;
  equipment_rental_rate_th?: InputMaybe<Order_By>;
  equipment_rental_rate_zh?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  main_image_file_name?: InputMaybe<Order_By>;
  name_en?: InputMaybe<Order_By>;
  name_th?: InputMaybe<Order_By>;
  name_zh?: InputMaybe<Order_By>;
  notice_en?: InputMaybe<Order_By>;
  notice_th?: InputMaybe<Order_By>;
  notice_zh?: InputMaybe<Order_By>;
  number_of_dives?: InputMaybe<Order_By>;
  organizer?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Trip_Min_Fields = {
  __typename?: 'trip_min_fields';
  airport?: Maybe<Scalars['String']>;
  boat?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description_en?: Maybe<Scalars['String']>;
  description_th?: Maybe<Scalars['String']>;
  description_zh?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['date']>;
  equipment_rental_rate_en?: Maybe<Scalars['String']>;
  equipment_rental_rate_th?: Maybe<Scalars['String']>;
  equipment_rental_rate_zh?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  main_image_file_name?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  name_th?: Maybe<Scalars['String']>;
  name_zh?: Maybe<Scalars['String']>;
  notice_en?: Maybe<Scalars['String']>;
  notice_th?: Maybe<Scalars['String']>;
  notice_zh?: Maybe<Scalars['String']>;
  number_of_dives?: Maybe<Scalars['numeric']>;
  organizer?: Maybe<Scalars['uuid']>;
  start_date?: Maybe<Scalars['date']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "trip" */
export type Trip_Min_Order_By = {
  airport?: InputMaybe<Order_By>;
  boat?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description_en?: InputMaybe<Order_By>;
  description_th?: InputMaybe<Order_By>;
  description_zh?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  equipment_rental_rate_en?: InputMaybe<Order_By>;
  equipment_rental_rate_th?: InputMaybe<Order_By>;
  equipment_rental_rate_zh?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  main_image_file_name?: InputMaybe<Order_By>;
  name_en?: InputMaybe<Order_By>;
  name_th?: InputMaybe<Order_By>;
  name_zh?: InputMaybe<Order_By>;
  notice_en?: InputMaybe<Order_By>;
  notice_th?: InputMaybe<Order_By>;
  notice_zh?: InputMaybe<Order_By>;
  number_of_dives?: InputMaybe<Order_By>;
  organizer?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "trip" */
export type Trip_Mutation_Response = {
  __typename?: 'trip_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Trip>;
};

/** input type for inserting object relation for remote table "trip" */
export type Trip_Obj_Rel_Insert_Input = {
  data: Trip_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Trip_On_Conflict>;
};

/** on_conflict condition type for table "trip" */
export type Trip_On_Conflict = {
  constraint: Trip_Constraint;
  update_columns?: Array<Trip_Update_Column>;
  where?: InputMaybe<Trip_Bool_Exp>;
};

/** Ordering options when selecting data from "trip". */
export type Trip_Order_By = {
  airport?: InputMaybe<Order_By>;
  allotments_aggregate?: InputMaybe<Allotment_Aggregate_Order_By>;
  boat?: InputMaybe<Order_By>;
  boatByBoat?: InputMaybe<Boat_Order_By>;
  created_at?: InputMaybe<Order_By>;
  description_en?: InputMaybe<Order_By>;
  description_th?: InputMaybe<Order_By>;
  description_zh?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  equipment_rental_rate_en?: InputMaybe<Order_By>;
  equipment_rental_rate_th?: InputMaybe<Order_By>;
  equipment_rental_rate_zh?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_file_names?: InputMaybe<Order_By>;
  main_image_file_name?: InputMaybe<Order_By>;
  name_en?: InputMaybe<Order_By>;
  name_th?: InputMaybe<Order_By>;
  name_zh?: InputMaybe<Order_By>;
  notice_en?: InputMaybe<Order_By>;
  notice_th?: InputMaybe<Order_By>;
  notice_zh?: InputMaybe<Order_By>;
  number_of_dives?: InputMaybe<Order_By>;
  organizer?: InputMaybe<Order_By>;
  organizerByOrganizer?: InputMaybe<Organizer_Order_By>;
  start_date?: InputMaybe<Order_By>;
  trip_exclusions_aggregate?: InputMaybe<Trip_Exclusion_Aggregate_Order_By>;
  trip_inclusions_aggregate?: InputMaybe<Trip_Inclusion_Aggregate_Order_By>;
  trip_locations_aggregate?: InputMaybe<Trip_Location_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: trip */
export type Trip_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Trip_Prepend_Input = {
  image_file_names?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "trip" */
export enum Trip_Select_Column {
  /** column name */
  Airport = 'airport',
  /** column name */
  Boat = 'boat',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DescriptionEn = 'description_en',
  /** column name */
  DescriptionTh = 'description_th',
  /** column name */
  DescriptionZh = 'description_zh',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  EquipmentRentalRateEn = 'equipment_rental_rate_en',
  /** column name */
  EquipmentRentalRateTh = 'equipment_rental_rate_th',
  /** column name */
  EquipmentRentalRateZh = 'equipment_rental_rate_zh',
  /** column name */
  Id = 'id',
  /** column name */
  ImageFileNames = 'image_file_names',
  /** column name */
  MainImageFileName = 'main_image_file_name',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  NameZh = 'name_zh',
  /** column name */
  NoticeEn = 'notice_en',
  /** column name */
  NoticeTh = 'notice_th',
  /** column name */
  NoticeZh = 'notice_zh',
  /** column name */
  NumberOfDives = 'number_of_dives',
  /** column name */
  Organizer = 'organizer',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "trip" */
export type Trip_Set_Input = {
  airport?: InputMaybe<Scalars['String']>;
  boat?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description_en?: InputMaybe<Scalars['String']>;
  description_th?: InputMaybe<Scalars['String']>;
  description_zh?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['date']>;
  equipment_rental_rate_en?: InputMaybe<Scalars['String']>;
  equipment_rental_rate_th?: InputMaybe<Scalars['String']>;
  equipment_rental_rate_zh?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image_file_names?: InputMaybe<Scalars['jsonb']>;
  main_image_file_name?: InputMaybe<Scalars['String']>;
  name_en?: InputMaybe<Scalars['String']>;
  name_th?: InputMaybe<Scalars['String']>;
  name_zh?: InputMaybe<Scalars['String']>;
  notice_en?: InputMaybe<Scalars['String']>;
  notice_th?: InputMaybe<Scalars['String']>;
  notice_zh?: InputMaybe<Scalars['String']>;
  number_of_dives?: InputMaybe<Scalars['numeric']>;
  organizer?: InputMaybe<Scalars['uuid']>;
  start_date?: InputMaybe<Scalars['date']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Trip_Stddev_Fields = {
  __typename?: 'trip_stddev_fields';
  number_of_dives?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "trip" */
export type Trip_Stddev_Order_By = {
  number_of_dives?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Trip_Stddev_Pop_Fields = {
  __typename?: 'trip_stddev_pop_fields';
  number_of_dives?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "trip" */
export type Trip_Stddev_Pop_Order_By = {
  number_of_dives?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Trip_Stddev_Samp_Fields = {
  __typename?: 'trip_stddev_samp_fields';
  number_of_dives?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "trip" */
export type Trip_Stddev_Samp_Order_By = {
  number_of_dives?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Trip_Sum_Fields = {
  __typename?: 'trip_sum_fields';
  number_of_dives?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "trip" */
export type Trip_Sum_Order_By = {
  number_of_dives?: InputMaybe<Order_By>;
};

/** update columns of table "trip" */
export enum Trip_Update_Column {
  /** column name */
  Airport = 'airport',
  /** column name */
  Boat = 'boat',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DescriptionEn = 'description_en',
  /** column name */
  DescriptionTh = 'description_th',
  /** column name */
  DescriptionZh = 'description_zh',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  EquipmentRentalRateEn = 'equipment_rental_rate_en',
  /** column name */
  EquipmentRentalRateTh = 'equipment_rental_rate_th',
  /** column name */
  EquipmentRentalRateZh = 'equipment_rental_rate_zh',
  /** column name */
  Id = 'id',
  /** column name */
  ImageFileNames = 'image_file_names',
  /** column name */
  MainImageFileName = 'main_image_file_name',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  NameZh = 'name_zh',
  /** column name */
  NoticeEn = 'notice_en',
  /** column name */
  NoticeTh = 'notice_th',
  /** column name */
  NoticeZh = 'notice_zh',
  /** column name */
  NumberOfDives = 'number_of_dives',
  /** column name */
  Organizer = 'organizer',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Trip_Var_Pop_Fields = {
  __typename?: 'trip_var_pop_fields';
  number_of_dives?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "trip" */
export type Trip_Var_Pop_Order_By = {
  number_of_dives?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Trip_Var_Samp_Fields = {
  __typename?: 'trip_var_samp_fields';
  number_of_dives?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "trip" */
export type Trip_Var_Samp_Order_By = {
  number_of_dives?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Trip_Variance_Fields = {
  __typename?: 'trip_variance_fields';
  number_of_dives?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "trip" */
export type Trip_Variance_Order_By = {
  number_of_dives?: InputMaybe<Order_By>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  birthday?: Maybe<Scalars['date']>;
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['uuid'];
  last_name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  birthday?: InputMaybe<Date_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  birthday?: InputMaybe<Scalars['date']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  birthday?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  birthday?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  birthday?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  birthday?: InputMaybe<Scalars['date']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type UsersListQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersListQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', id: any, first_name: string, last_name: string, email: string, updated_at: any, created_at: any }> };

export type SearchQueryVariables = Exact<{
  keyword?: InputMaybe<Scalars['String']>;
}>;


export type SearchQuery = { __typename?: 'query_root', trip: Array<{ __typename?: 'trip', id: any, name_th: string, name_en?: string | null, description_th: string, description_en?: string | null, start_date: any, end_date: any, number_of_dives: any, main_image_file_name?: string | null, trip_locations: Array<{ __typename?: 'trip_location', location: any, tripByTrip: { __typename?: 'trip', name_th: string } }>, allotments: Array<{ __typename?: 'allotment', price: any, discount_price?: any | null, foreigner_price?: any | null, foreigner_discount_price?: any | null }>, boatByBoat: { __typename?: 'boat', name_th: string, name_en: string } }> };


export const UsersListDocument = gql`
    query UsersList {
  user {
    id
    first_name
    last_name
    email
    updated_at
    created_at
  }
}
    `;

/**
 * __useUsersListQuery__
 *
 * To run a query within a React component, call `useUsersListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersListQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersListQuery(baseOptions?: Apollo.QueryHookOptions<UsersListQuery, UsersListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersListQuery, UsersListQueryVariables>(UsersListDocument, options);
      }
export function useUsersListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersListQuery, UsersListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersListQuery, UsersListQueryVariables>(UsersListDocument, options);
        }
export type UsersListQueryHookResult = ReturnType<typeof useUsersListQuery>;
export type UsersListLazyQueryHookResult = ReturnType<typeof useUsersListLazyQuery>;
export type UsersListQueryResult = Apollo.QueryResult<UsersListQuery, UsersListQueryVariables>;
export const SearchDocument = gql`
    query Search($keyword: String) {
  trip(
    where: {trip_locations: {tripByTrip: {_or: [{name_th: {_ilike: $keyword}}, {name_en: {_ilike: $keyword}}, {name_zh: {_ilike: $keyword}}]}}}
  ) {
    id
    name_th
    name_en
    description_th
    description_en
    start_date
    end_date
    number_of_dives
    main_image_file_name
    trip_locations {
      location
      tripByTrip {
        name_th
      }
    }
    allotments(
      order_by: {price: asc}
      limit: 1
      where: {remaining_seat: {_gt: "0"}}
    ) {
      price
      discount_price
      foreigner_price
      foreigner_discount_price
    }
    boatByBoat {
      name_th
      name_en
    }
  }
}
    `;

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      keyword: // value for 'keyword'
 *   },
 * });
 */
export function useSearchQuery(baseOptions?: Apollo.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
      }
export function useSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
        }
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = Apollo.QueryResult<SearchQuery, SearchQueryVariables>;