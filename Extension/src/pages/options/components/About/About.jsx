import React, { useContext } from 'react';
import { observer } from 'mobx-react';

import { rootStore } from '../../stores/RootStore';
import {
    ACKNOWLEDGMENTS_URL,
    EULA_URL,
    GITHUB_URL,
    PRIVACY_URL,
} from '../../../constants';
import { reactTranslator } from '../../../../common/translators/reactTranslator';
import { Icon } from '../../../common/components/ui/Icon';

import './about-page.pcss';

const About = observer(() => {
    const { settingsStore } = useContext(rootStore);

    const { version } = settingsStore;

    if (!version) {
        return null;
    }

    const currentYear = new Date().getFullYear();
    const copyRightText = `© 2009-${currentYear} AdGuard Software Ltd.`;

    return (
        <>
            <div className="title__container">
                <h2 className="title">
                    {reactTranslator.getMessage('options_about')}
                </h2>
            </div>
            <div className="about">
                <Icon id="#logo" classname="icon--logo about__logo" />
                <div className="about__version">
                    {reactTranslator.getMessage('options_about_version')}
                    {' '}
                    {version}
                </div>
                <div className="about__copyright">
                    <div className="about__copyright-item">
                        {copyRightText}
                    </div>
                    <div className="about__copyright-item">
                        {reactTranslator.getMessage('options_copyright')}
                    </div>
                </div>
                <div className="about__menu">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={EULA_URL}
                        className="about__menu-item"
                    >
                        {reactTranslator.getMessage('options_license_agreement')}
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={PRIVACY_URL}
                        className="about__menu-item"
                    >
                        {reactTranslator.getMessage('options_privacy_policy')}
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={ACKNOWLEDGMENTS_URL}
                        className="about__menu-item"
                    >
                        {reactTranslator.getMessage('options_acknowledgment')}
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={GITHUB_URL}
                        className="about__menu-item"
                    >
                        {reactTranslator.getMessage('options_github')}
                    </a>
                </div>
            </div>
        </>
    );
});

export { About };
