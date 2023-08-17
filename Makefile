install:
	npm install

dev:
	npm run dev

api:
	npm run fastapi-dev

web:
	npm run next-dev

check:
	black --check .

format:
	black .
	npm run lint

tests:
	pipenv run pytest

cov:
	pipenv run pytest --cov-report=html --cov .

.PHONY: install clean shell dev check format tests cov
