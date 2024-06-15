.PHONY: build
build: 
	docker build --no-cache -t node/docusaurus .

.PHONY: up
up:
	docker-compose up
