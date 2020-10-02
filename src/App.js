import React, { useState} from 'react';//хуки useState, useEffect
import '@vkontakte/vkui/dist/vkui.css';
import { View, Tabbar, TabbarItem, Epic} from '@vkontakte/vkui';
import Icon28SlidersOutline from '@vkontakte/icons/dist/28/sliders_outline';
import Icon28FavoriteOutline from '@vkontakte/icons/dist/28/favorite_outline';
import bridge from '@vkontakte/vk-bridge';


import Home from './panels/Home';
import Persik from './panels/Persik';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser] = useState({id:'299766132',photo_200:"https://sun1-30.userapi.com/impf/c847220/v847220040/16ea41/GLffP4M57Ok.jpg?size=200x0&quality=88&crop=527,5,1066,1066&sign=8de2837792bea94653c6e74d78cab1e7&ava=1"});//состояние данных о пользователе
	

	const go = e => {
		setActivePanel(e.currentTarget.dataset.story);
	};

	 const group = () => {
			bridge.send("VKWebAppJoinGroup", {"group_id": 187606185});	
		};

	return (
		<Epic activeStory={activePanel}
	 	tabbar={
        <Tabbar>
          <TabbarItem
	            onClick={go}
	            data-story="home"
	            selected={activePanel === 'home'}
	            text="Конвертор"
	          ><Icon28SlidersOutline/>
          </TabbarItem>
          <TabbarItem
	            onClick={go}
	            selected={activePanel === 'persik'}
	            data-story="persik"
	            text="Об авторе"
	          ><Icon28FavoriteOutline/>
          </TabbarItem>
        </Tabbar>
      }>  
     	<View id="home" activePanel={activePanel} >
			<Home id='home'  go={go}  />
		</View>
		<View id="persik" activePanel={activePanel} >
			<Persik id='persik' go={go} fetchedUser={fetchedUser} group={group} />
		</View>
      </Epic>
	);
}

export default App;

