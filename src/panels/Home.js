import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import { Select, FormLayout, FormLayoutGroup, Input, Title,Div} from '@vkontakte/vkui';



class Home extends React.Component {
	constructor (props) {
    super(props);

    this.state = {
    	date: "",
		valute: {},
		result:1,
		history:[]
    };

  	this.getRate();
  	  }


	 getRate = () => {fetch('https://v6.exchangerate-api.com/v6/c4f8d9e7b93e1781e094878b/latest/USD')
	 .then(response => { 
		// Convert to JSON
			return response.json();
		}).then(data => {
			this.setState({valute: data.conversion_rates});
			this.setState({date: data.time_last_update_utc});

		});
	}

	calcRate = () =>{
		let selectOne = document.getElementById("select_one");
		let selectTwo = document.getElementById("select_two");
		let count = document.getElementById("count");
		this.setState({result: ((this.state.valute[selectTwo.value]*parseInt(count.value))/this.state.valute[selectOne.value])})
		console.log(count.value , " " , selectOne.value, "=>", selectTwo.value,":", this.state.result);
	}

	saveHistory = () => {
		let selectOne = document.getElementById("select_one");
		let selectTwo = document.getElementById("select_two");
		let count = document.getElementById("count");
		this.setState({history: count.value+ " "+selectOne.value+"=>"+this.state.result+" "+selectTwo.value})
	}

 render() {
    return (
		<Panel>
			<PanelHeader>Конвертор</PanelHeader>
			<Title level="3" weight="semibold" style={{ margin: 16 }}>Последнее обновление курса валют: {this.state.date}</Title>
			<FormLayout onChange={this.calcRate}>
			    <Select top="Конвентировать из"   id="select_one">
			    	{Object.keys(this.state.valute).map((keyName,i)=>
			    		(
					 	 <option value={keyName} key={keyName}>{keyName}</option>	
			    		)
			    		)}
			    	
				</Select>
			    <FormLayoutGroup top="Количество">
			        <Input type="number" defaultValue="1" min="1" id="count"/>
     			</FormLayoutGroup>
     			<Select top="Конвентировать в" id="select_two">
					  {Object.keys(this.state.valute).map((keyName,i)=>
			    		(
					 	 <option value={keyName} key={keyName}>{keyName}</option>	
			    		)
			    		)}
				</Select>
				 <FormLayoutGroup top="Результат" >
			        <Input type="number"  value={this.state.result} disabled />
     			</FormLayoutGroup>
     			<Button size="l" onClick={this.saveHistory} >Сохранить</Button>
			</FormLayout>
			<Div>
				<Title level="4" weight="semibold" style={{ margin: 16 }}>{this.state.history}</Title>
			</Div>
		</Panel>
);

}}
export default Home;
