/* eslint-disable @typescript-eslint/no-require-imports */
import React, { useState, useEffect } from 'react';
import RuleTable from './RuleTable';
import LanguageSwtich from './LanguageSwtich';
import { NAMESPACES, Namespace } from '../../config';
import { getLanguage, getQuery, newUrl, replaceUrl, defaultTo, t } from '../utils';
import ReactTooltip from 'react-tooltip';

const App: React.SFC = () => {
  const query = getQuery();
  const [namespace, setNamespace] = useState(defaultTo<Namespace>(
    query.rule,
    NAMESPACES[0],
    NAMESPACES,
  ));
  const [hideOff, toggleHideOff] = useState(query.hideOff === '1');
  const language = getLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
  }, []);

  useEffect(() => {
    ReactTooltip.rebuild();
  }, [namespace]);

  const Header = () => (
    <div className="flex-center">
      <div className="container-fluid">
        <h1 className="site-title">@tencent/eslint-config-tencent</h1>
        <LanguageSwtich language={language} />
        <form className="top-gap site-form">
          <select
            value={namespace}
            onChange={(e) => {
              setNamespace(e.target.value as Namespace);
              replaceUrl(newUrl({ query: { rule: e.target.value } }));
            }}
          >
            {NAMESPACES.map(namespace => (
              <option key={namespace} value={namespace}>
                {namespace}
              </option>
            ))}
          </select>
          <label>
            <input
              type="checkbox"
              checked={hideOff}
              onChange={(e) => {
                toggleHideOff(e.target.checked);
                replaceUrl(newUrl({ query: { hideOff: e.target.checked } }));
              }}
            />
            {t('隐藏已禁用的规则')}
          </label>
        </form>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <RuleTable namespace={namespace} hideOff={hideOff} />
      <ReactTooltip
        className="site-react-tooltip"
        place="top"
        type="error"
        effect="solid"
        delayHide={100}
        html={true}
      />
    </>
  );
};

export default App;
