terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region = "eu-west-2"
}

terraform {
  backend "s3" {
    bucket         = "housing-pre-production-terraform-state"
    encrypt        = true
    region         = "eu-west-2"
    key            = "services/t-and-l-common-frontend/state"
    dynamodb_table = "housing-pre-production-terraform-state-lock"
  }
}


resource "aws_s3_bucket" "frontend_bucket_pre_production" {
  bucket = "lbh-housing-tl-common-frontend-${var.environment_display_name}.hackney.gov.uk"
  tags = {
    Name        = "mtfh-frontend-common bucket"
    Environment = var.environment_name
    Application = "MTFH Housing Pre-Production"
    TeamEmail   = "developementteam@hackney.gov.uk"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "enable_encryption" {
  bucket = aws_s3_bucket.frontend_bucket_pre_production.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_versioning" "versioning" {
  bucket = aws_s3_bucket.frontend_bucket_pre_production.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_public_access_block" "block_public_access" {
  bucket                  = aws_s3_bucket.frontend_bucket_pre_production.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

data "aws_iam_policy_document" "s3_allow_ssl_requests_only" {
  statement {
    sid     = "AllowSSLRequestsOnly"
    effect  = "Deny"
    actions = ["s3:*"]
    principals {
      type        = "AWS"
      identifiers = ["*"]
    }
    resources = [
      aws_s3_bucket.frontend_bucket_pre_production.arn,
      "${aws_s3_bucket.frontend_bucket_pre_production.arn}/*",
    ]
    condition {
      test     = "Bool"
      variable = "aws:SecureTransport"
      values = [
        "false"
      ]
    }
  }
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.frontend_bucket_pre_production.id
  policy = data.aws_iam_policy_document.s3_allow_ssl_requests_only.json
}

resource "aws_s3_bucket_cors_configuration" "cors" {
  bucket = aws_s3_bucket.frontend_bucket_pre_production.id

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET"]
    allowed_origins = [
      "https://temporary-accommodation-pre-production.hackney.gov.uk/"
    ]
    expose_headers  = ["x-amz-server-side-encryption", "x-amz-request-id", "x-amz-id-2"]
    max_age_seconds = 3000
  }
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.frontend_bucket_pre_production.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

module "cloudfront_pre_production" {
  source                       = "github.com/LBHackney-IT/aws-hackney-common-terraform.git//modules/cloudfront/s3_distribution"
  s3_domain_name               = aws_s3_bucket.frontend_bucket_pre_production.bucket_regional_domain_name
  origin_id                    = "mtfh-t-and-l-common-frontend"
  s3_bucket_arn                = aws_s3_bucket.frontend_bucket_pre_production.arn
  s3_bucket_id                 = aws_s3_bucket.frontend_bucket_pre_production.id
  orginin_access_identity_desc = "T&L common frontend cloudfront identity"
  cname_aliases                = []
  environment_name             = var.environment_name
  cost_code                    = "B0811"
  project_name                 = var.project_name
  use_cloudfront_cert          = true
  compress                     = true
}

resource "aws_ssm_parameter" "cdn" {
  name      = "/housing-tl/${var.environment_display_name}/common-app-url"
  type      = "String"
  value     = "https://${module.cloudfront_pre_production.cloudfront_domain_name}"
  overwrite = true
}
