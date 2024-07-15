SHELL=bash

###################################################################################################
## INITIALISATION
###################################################################################################
export DOCKER_BUILDKIT=1
export COMPOSE_DOCKER_CLI_BUILD=1

###################################################################################################
## DEV
###################################################################################################
.PHONY: build-dev build-dev-no-cache start start-detached stop shell

setup: ##@DEV Generate the .env file
	cp .env.example .env

clean: ##@DEV Remove ./dist, ./coverage and ./node_modules
	- rm -rf node_modules
	- rm -rf dist
	- rm -rf coverage

refresh: clean ##@DEV Run the clean step and install dependencies
	- npm i

###################################################################################################
## DOCKER
###################################################################################################
start: ##@DOCKER Start the development environment
	docker compose -f docker/docker-compose.yml -p santo-invest up

start-d: ##@DOCKER Start the development environment (detached)
	docker compose -f docker/docker-compose.yml -p santo-invest up -d

start-r: ##@DOCKER Start the resources Database (detached)
	docker compose -f docker/docker-compose.yml -p santo-invest up -d database

stop: ##@DOCKER Stop the development environment
	docker compose -f docker/docker-compose.yml -p santo-invest down

stop-v: ##@DOCKER Stop the development environment and clean up volumes
	docker compose -f docker/docker-compose.yml -p santo-invest down --volumes

docker-refresh: stop-v start ##@DOCKER Stop the development environment with clean up volumes and start the development environment

###################################################################################################
## HELP
###################################################################################################
.PHONY: default
default: help

GREEN  := $(shell tput -Txterm setaf 2)
WHITE  := $(shell tput -Txterm setaf 7)
YELLOW := $(shell tput -Txterm setaf 3)
RESET  := $(shell tput -Txterm sgr0)

HELP_FUN = \
	%help; \
	while(<>) { push @{$$help{$$2 // 'options'}}, [$$1, $$3] if /^([a-zA-Z\-]+)\s*:.*\#\#(?:@([a-zA-Z\-]+))?\s(.*)$$/ }; \
	print "usage: make [target]\n\n"; \
	for (sort keys %help) { \
	print "${WHITE}$$_:${RESET}\n"; \
	for (@{$$help{$$_}}) { \
	$$sep = " " x (32 - length $$_->[0]); \
	print "  ${YELLOW}$$_->[0]${RESET}$$sep${GREEN}$$_->[1]${RESET}\n"; \
	}; \
	print "\n"; }

help: ##@OTHER Show this help
	@perl -e '$(HELP_FUN)' $(MAKEFILE_LIST)
