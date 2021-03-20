#!/bin/bash

# Start Prometheus
./prometheus-2.25.2.linux-amd64/prometheus --config.file prometheus-2.25.2.linux-amd64/prometheus.yml &

# Start Granfa
cd grafana-7.4.5/bin && ./granfa-server &

