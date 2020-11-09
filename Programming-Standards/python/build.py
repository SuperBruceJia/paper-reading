# -*- coding: utf-8 -*-

import os
import glob
from pathlib import Path
import re
import shutil

from jinja2 import Environment
from jinja2 import FileSystemLoader
import yaml


RULE_LEVEL = {
    'Mandatory': '必须',
    'Preferable': '推荐',
    'Optional': '可选',
}


def read(dir_name) -> [yaml.YAMLObject]:
    """
    Get rule yaml object list
    :param dir_name:
    :return:
    """
    files = sorted(glob.glob(f"./rules/{dir_name}/*.yml"))
    rules = []
    number = 0
    for _file in files:
        number += 1
        f = open(_file, encoding='UTF-8')
        data = yaml.load(f, Loader=yaml.FullLoader)
        data['base_level_number'] = number
        data['file_path'] = Path(_file).resolve()  # type: Path
        for rule in data['rules']:
            rule['level_en'] = rule['level']
            rule['level'] = RULE_LEVEL[rule['level']]

        rules.append(data)
    return rules


def get_pylint_default_enable_code() -> set:
    enable_pylint_code = [
        'blacklisted-name',  #
    ]
    return set(enable_pylint_code)


def get_rule_use_pylint_code(rule_level=None) -> set:
    """
    Get rule use pylint code.

    If set rule_level. return same level code.
    If not set rule_level，return all code.

    :param rule_level: Mandatory,Preferable,Optiona
    :return:
    """
    datas = {dir_name: read(dir_name) for dir_name in [
        'style_rules',
        'language_rules',
    ]}

    all_lint_code = set()
    for dir_name, data in datas.items():
        for rule_section in data:
            for rule in rule_section.get('rules'):
                lintcode = rule.get('pylint')
                if lintcode:
                    if rule_level and rule['level_en'] != rule_level:
                        # 级别匹配不上
                        continue
                    all_lint_code = all_lint_code.union(set(lintcode))

    return all_lint_code


def get_pylint_jinja() -> str:
    """
    Generate pylintrc from pylintrc.jinja2 template
    :return:
    """
    enable_pylint_code = sorted(get_rule_use_pylint_code(rule_level='Mandatory'))
    path = '{}/template'.format(os.path.dirname(os.path.realpath(__file__)))
    env = Environment(loader=FileSystemLoader(path))
    template = env.get_template('pylintrc.jinja2')
    data = {
        'enable_pylint_code': enable_pylint_code,
    }
    msg = template.render(**data)
    return msg


def build_configuration() -> None:
    """
    Build pylintrc file
    """
    with open('.pylintrc', 'w') as f:
        f.write(get_pylint_jinja())

    with open('setup.cfg', 'w') as f:
        f.write(get_flake8_jinja())

    with open('.editorconfig', 'w') as f:
        f.write(get_editorconfig_jinja())


def get_section_jinja(rule_item) -> str:
    """
    Generate each rule string from rule_item_template.jinja2
    :param rule_item:
    :return:
    """
    def regex_replace(s, find, replace):
        """A non-optimal implementation of a regex filter"""
        return re.sub(find, replace, s)

    path = '{}/template'.format(os.path.dirname(os.path.realpath(__file__)))
    env = Environment(loader=FileSystemLoader(path))
    env.filters['regex_replace'] = regex_replace
    template = env.get_template('rule_item_template.jinja2')
    msg = template.render(rule_item=rule_item)
    return msg


def get_readme_jinja(section_items: dict) -> str:
    """
    Generate README.md string from README.md.jinja2 template with yaml rule
    :param section_items:
    :return: README.md string
    """
    path = '{}/template'.format(os.path.dirname(os.path.realpath(__file__)))
    env = Environment(loader=FileSystemLoader(path))
    template = env.get_template('README.md.jinja2')
    msg = template.render(**section_items)
    return msg


def get_flake8_jinja() -> str:
    """
    get build flake8 config string
    :return:
    """
    path = '{}/template'.format(os.path.dirname(os.path.realpath(__file__)))
    env = Environment(loader=FileSystemLoader(path))
    template = env.get_template('flake8.jinja2')
    msg = template.render()
    return msg


def get_editorconfig_jinja() -> str:
    """
    get build editorconfig config string
    :return:
    """
    path = '{}/template'.format(os.path.dirname(os.path.realpath(__file__)))
    env = Environment(loader=FileSystemLoader(path))
    template = env.get_template('editorconfig.jinja2')
    msg = template.render()
    return msg


def output_readme() -> None:
    """
    Generate README.md file from README.md.jinja2 template with yaml rule
    """
    datas = {dir_name: read(dir_name) for dir_name in [
        'style_rules',
        'language_rules',
    ]}
    # print(data)
    f = open('./README.md', 'w+', encoding='UTF-8')

    format_data = {}
    h2_base_level_number = 0
    for rule_name, rule_data in datas.items():
        rule_data_list_string = []
        h2_base_level_number += 1
        for rule_item in rule_data:
            # each rule item menu title level number
            rule_item['h2_base_level_number'] = h2_base_level_number
            item_string = get_section_jinja(rule_item)
            one_rule_string = {
                'item_string': item_string,
            }
            rule_data_list_string.append(one_rule_string)
        format_data[rule_name] = rule_data_list_string

    format_data['flake8_config'] = get_flake8_jinja()
    format_data['editorconfig_config'] = get_editorconfig_jinja()
    get_readme_str = get_readme_jinja(format_data)
    f.write(get_readme_str)
    f.close()


def output_example_code() -> None:
    """
    Generate example code.
    """
    # In Process
    datas = {dir_name: read(dir_name) for dir_name in [
        'style_rules',
        'language_rules',
    ]}

    example_rule_code_path = Path('./example_rule_code/')
    shutil.rmtree('./example_rule_code/*', ignore_errors=True)

    h2_base_level_number = 0
    for rule_name, rule_data in datas.items():
        h2_base_level_number += 1
        for rule_item in rule_data:
            # each rule item menu title level number
            file_path = rule_item['file_path']  # type: Path
            parent_dir = file_path.parent.stem
            rule_name = file_path.stem
            rule_code_path = Path(example_rule_code_path, parent_dir)
            rule_code_path.mkdir(exist_ok=True)
            # print(rule_item['rules'])
            with Path(rule_code_path, rule_name.replace(' ', '_') + '_good.py').open('w') as f:
                for rule in rule_item['rules']:
                    good_example_code = rule.get('good_example')
                    if good_example_code:
                        print('-----')
                        print(good_example_code.rstrip('```'))
                        print('======')
                        f.writelines(good_example_code.lstrip('```python').rstrip('\n').rstrip('```'))

            break


if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser(description="Build Python style rule")
    parser.add_argument("--build-readme", help="build README.md", action='store_true')
    parser.add_argument("--build-configuration", help="build pycodestyle,pylint config file", action='store_true')
    args = parser.parse_args()
    if args.build_readme:
        output_readme()
    elif args.build_configuration:
        build_configuration()
    else:
        output_readme()
        build_configuration()
