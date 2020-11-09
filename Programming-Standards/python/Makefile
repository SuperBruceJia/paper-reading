PYTHON ?= python3
DOCS_INDEX_HTML      = docs/index.html


.PHONY: help


define BROWSER_PYSCRIPT
import os, webbrowser, sys
try:
	from urllib import pathname2url
except:
	from urllib.request import pathname2url
url = "file://" + pathname2url(os.path.abspath(sys.argv[1]))
if not webbrowser.get('chrome %s').open_new_tab(url):
	webbrowser.open(url)

endef
export BROWSER_PYSCRIPT

BROWSER := @$(PYTHON) -c "$$BROWSER_PYSCRIPT"


.PHONY: help
help:
	@echo "Please use \`make <target>' where <target> is one of"
	@echo "  build      to make README.md && configuration file demo"
	@echo "  html       to make build && make standalone HTML file"
	@echo "  bhtml      to make build && make standalone HTML file, and open browser to preview html"
	@echo "  lint       to check style with pylint"


.PHONY: clean
clean: clean-pyc

.PHONY: clean-pyc
clean-pyc:
	find . -name '*.pyc' -exec rm -f {} +
	find . -name '*.pyo' -exec rm -f {} +

.PHONY: build
build:
	@$(PYTHON) ./build.py --build-readme
	@$(PYTHON) ./build.py --build-configuration

.PHONY: html
html:
	@$(PYTHON) ./build.py --build-readme
	@$(PYTHON) ./build.py --build-configuration
	cd docs && bash abracadabra.sh

.PHONY: bhtml
bhtml:
	@$(PYTHON) ./build.py --build-readme
	@$(PYTHON) ./build.py --build-configuration
	cd docs && bash abracadabra.sh
	$(BROWSER) $(DOCS_INDEX_HTML)

.PHONY: lint
lint:
	pylint build.py
