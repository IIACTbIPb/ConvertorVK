import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import {Avatar, Group, Header, SimpleCell, InfoRow,CardGrid,Card,Text,Button} from '@vkontakte/vkui';

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
      <Group>
      		<Header mode="secondary">Информация о пользователе</Header>
	        <SimpleCell multiline>
	          <InfoRow header="Дата рождения">
	            26 января 2000
	          </InfoRow>
	        </SimpleCell>
	        <SimpleCell>
	          <InfoRow header="Родной город">
	            Новосибирск
	          </InfoRow>
	        </SimpleCell>
	        <SimpleCell>
	          <InfoRow header="Специализация">
	            Web-технологии
	          </InfoRow>
	        </SimpleCell>
        </Group>
        <Group  header={<Header mode="secondary">Обо мне</Header>}>
        <CardGrid>
          <Card size="l" mode="shadow" style={{marginBottom: 25}}>
            <Text weight="regular" style={{ margin: 16 }}>Я студент 5 курса ВКИ(высший колледж информатики), начал изучение VK mini apps, это моё первое приложение. В процессе разработки была изучена JavaScript-библиотека ReactJS и компоненты VKUI, также научился работать с данными API.</Text>
          </Card>
        </CardGrid>
        <Group>
       		<Button size="xl" mode="secondary" style={{marginBottom:25}} onClick={props.group} >Подписаться на сообщество</Button>
       </Group>
      </Group>
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
	}),
	group: PropTypes.func.isRequired,
};

export default Persik;
