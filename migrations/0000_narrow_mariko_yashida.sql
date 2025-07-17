CREATE TABLE "contact_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text NOT NULL,
	"company" text,
	"email" text NOT NULL,
	"phone" text,
	"message" text,
	"model_type" text,
	"industry" text,
	"revenue_model" text,
	"business_stage" text,
	"purpose" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
