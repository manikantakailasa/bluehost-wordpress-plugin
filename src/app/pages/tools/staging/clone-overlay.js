import {__} from '@wordpress/i18n';

import {Overlay} from '@/components';

import {WorkingImage} from '@/assets';

export default function CloneOverlay({}) {
    return (
        <Overlay className={`bluehost-staging__overlay`}>
            <h1>
                {__('Cloning Production Site', 'bluehost-wordpress-plugin')}
            </h1>
            <p>
                {__('This should only take a minute', 'bluehost-wordpress-plugin')}
            </p>
            <div style={{width: '555px'}}>
                <WorkingImage/>
            </div>
            <p>
                <span>{__('Tip: ', 'bluehost-wordpress-plugin')}</span>
                {__('Making changes in staging doesn\'t affect your live site.', 'bluehost-wordpress-plugin')}
            </p>
        </Overlay>
    );
}