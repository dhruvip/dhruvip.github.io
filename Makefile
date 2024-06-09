.PHONY: build
build: 
	docker build -t node/docusaurus .

.PHONY: up
up:
	docker-compose up