import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import {Avatar, Group, Header, SimpleCell} from '@vkontakte/vkui';

import './Persik.css';

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader>Об авторе</PanelHeader>
    	<Group>
        <Header mode="secondary">Автор</Header>
        <SimpleCell
          description="VKontakte"
          before={<Avatar src={props.fetchedUser.photo_200}/>}
        >
          Зорин Руслан
        </SimpleCell>
      </Group>
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
	}),
};

export default Persik;
