resource "aws_ssm_parameter" "common_app_url" {
  name  = "/housing-tl/${var.environment_display_name}/common-app-url"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}

resource "aws_ssm_parameter" "auth_allowed_groups" {
  name  = "/housing-tl/${var.environment_display_name}/auth-allowed-groups"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}

resource "aws_ssm_parameter" "auth_domain" {
  name  = "/housing-tl/${var.environment_display_name}/auth-domain"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}

resource "aws_ssm_parameter" "cookie_domain" {
  name  = "/housing-tl/${var.environment_display_name}/cookie-domain"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}

resource "aws_ssm_parameter" "auth_token_name" {
  name  = "/housing-tl/${var.environment_display_name}/auth-token-name"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}

resource "aws_ssm_parameter" "configuration_api_url" {
  name  = "/housing-tl/${var.environment_display_name}/configuration-api-url"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}

resource "aws_ssm_parameter" "contact_details_api_url" {
  name  = "/housing-tl/${var.environment_display_name}/contact-details-api-url"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}

resource "aws_ssm_parameter" "contact_details_api_url_v2" {
  name  = "/housing-tl/${var.environment_display_name}/contact-details-api-url-v2"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}

resource "aws_ssm_parameter" "cautionary_api_url_v1" {
  name  = "/housing-tl/${var.environment_display_name}/cautionary-api-url-v1"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}

resource "aws_ssm_parameter" "person_api_url_v2" {
  name  = "/housing-tl/${var.environment_display_name}/person-api-url-v2"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}

resource "aws_ssm_parameter" "notes_api_url" {
  name  = "/housing-tl/${var.environment_display_name}/notes-api-url"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}

resource "aws_ssm_parameter" "notes_api_url_v2" {
  name  = "/housing-tl/${var.environment_display_name}/notes-api-url-v2"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}

resource "aws_ssm_parameter" "property_api_url" {
  name  = "/housing-tl/${var.environment_display_name}/property-api-url"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}

resource "aws_ssm_parameter" "reference_data_api_url" {
  name  = "/housing-tl/${var.environment_display_name}/reference-data-api-url"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}

resource "aws_ssm_parameter" "address_api_url" {
  name  = "/housing-tl/${var.environment_display_name}/address-api-url"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}

resource "aws_ssm_parameter" "address_api_url_v2" {
  name  = "/housing-tl/${var.environment_display_name}/address-api-url-v2"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}

resource "aws_ssm_parameter" "equality_information_api_url" {
  name  = "/housing-tl/${var.environment_display_name}/equality-information-api-url"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}

resource "aws_ssm_parameter" "repairs_hub_app_url" {
  name  = "/housing-tl/${var.environment_display_name}/repairs-hub-app-url"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}

resource "aws_ssm_parameter" "repairs_hub_api_url" {
  name  = "/housing-tl/${var.environment_display_name}/repairs-hub-api-url"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}

resource "aws_ssm_parameter" "process_api_url_v1" {
  name  = "/housing-tl/${var.environment_display_name}/process-api-url-v1"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}

resource "aws_ssm_parameter" "process_api_url_v2" {
  name  = "/housing-tl/${var.environment_display_name}/process-api-url-v2"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}

resource "aws_ssm_parameter" "housing_finance_interim_api_url" {
  name  = "/housing-tl/${var.environment_display_name}/housing-finance-interim-api-url"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}

resource "aws_ssm_parameter" "patches_and_areas_api_url" {
  name  = "/housing-tl/${var.environment_display_name}/patches-and-areas-api-url"
  type  = "String"
  value = "to_be_set_manually"

  lifecycle {
    ignore_changes = [
      value,
    ]
  }
}
