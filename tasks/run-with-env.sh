#!/usr/local/bin/bash

# Requirements: bash 4+, jq, awscli

echo "Running version of bash (upgrade if not 4+):"
echo "$BASH_VERSION"

# export hard-coded environment variables first, never hard-code anything that lives in SSM
export STAGE=dev

# Declare SSM environment variable hashmap
declare -A ssm_env

ssm_env=( 
  ["/general/weatherStationId"]="WEATHER_STATION_ID"
  ["/general/weatherStationApiKey"]="WEATHER_STATION_API_KEY"
  ["/general/weatherStationApiKey"]="TP_LINK_TOKEN"
)

ssm_params=$(aws ssm get-parameters --name "${!ssm_env[@]}" --with-decryption | jq '.Parameters')

# base64 due to newline characters (which splits the array)
for ssm_param_encoded in $(echo "${ssm_params}" | jq -r '.[] | @base64'); do
  ssm_param=$(echo "$ssm_param_encoded" | base64 --decode)
  ssm_prop_name=$(echo "$ssm_param" | jq -r '.Name')
  env_var_name=${ssm_env[$ssm_prop_name]}
  env_var_value=$(echo "$ssm_param" | jq -r '.Value')
  export "$env_var_name"="$env_var_value"
done

"$@"
