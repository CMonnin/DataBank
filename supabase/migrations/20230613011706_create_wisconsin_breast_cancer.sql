create type breast_cancer_diagnosis as enum (
    'malignant',
    'benign'
);

create table wisconsin_breast_cancer(
  id bigint primary key generated always as identity,
  created_at timestamptz default now() not null, 
  updated_at timestamptz default now() not null, 
  diagnosis breast_cancer_diagnosis,
  radius_mean float8 not null,
  texture_mean float8 not null,
  perimeter_mean float8 not null,
  area_mean float8 not null,
  smoothness_mean float8 not null,
  compactness_mean float8 not null,
  concavity_mean float8 not null,
  concave_points_mean float8 not null,
  symmetry_mean float8 not null,
  fractal_dimension_mean float8 not null,
  radius_se float8 not null,
  texture_se float8 not null,
  perimeter_se float8 not null,
  area_se float8 not null,
  smoothness_se float8 not null,
  compactness_se float8 not null,
  concavity_se float8 not null,
  concave_points_se float8 not null,
  symmetry_se float8 not null,
  fractal_dimension_se float8 not null,
  radius_worst float8 not null,
  texture_worst float8 not null,
  perimeter_worst float8 not null,
  area_worst float8 not null,
  smoothness_worst float8 not null,
  compactness_worst float8 not null,
  concavity_worst float8 not null,
  concave_points_worst float8 not null,
  symmetry_worst float8 not null,
  fractal_dimension_worst float8 not null
);