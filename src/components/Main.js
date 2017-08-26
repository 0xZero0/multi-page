require('normalize.css/normalize.css');
import 'styles/index.scss';
import request from 'lib/fetch';
import React from 'react';
import Title from './title';
import List from './list';
import Cup from './cup';

// const HOST = 'http://106.75.103.94:3000';
const HOST = 'http://118.190.66.192:60060';
const PARAM = {
   token: '8C107BD0CADD409AB5CE76B89714A475',
   personType: 1,
   schoolGuid: 'F7127394-40A3-4934-9D8E-BDA27BA0AC78',
   date: '2016-12-27',
   pageSize: 10
}
class AppComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      yestdayList: [],
      dayList: [],
      weekList: [],
      mounth: []
    }
  }
  componentWillMount() {
    this.fetchDay();
    this.fetchWeek();
    this.fetchMouth();
    this.fetchYestday();
  }
  initRankData(list) {
    if (Array.isArray(list) && list.length) {
      return list.map(d => ({
        name: d.UserName,
        step: d.Steps,
        rank: Number(d.Ranks)
      }))
    }
    return [];
  }
  fetchYestday() {
    const url = `${HOST}/steps/day`
    const params = Object.assign({pageSize: 3},PARAM)
    request(url, params).then(res => {
      if (res.Code == 0) {
        this.setState({yestdayList: this.initRankData(res.List)})
      }
    })
  }
  fetchDay() {
    const url = `${HOST}/steps/day`
    const params = Object.assign({},PARAM);
    request(url, params).then(res => {
      if (res.Code == 0) {
        this.setState({dayList: this.initRankData(res.List)})
      }
    })
  }
  fetchWeek() {
    const url = `${HOST}/steps/week`; 
    const params = Object.assign({},PARAM)
    request(url, params).then(res => {
      if (res.Code == 0) {
        this.setState({weekList: this.initRankData(res.List)})
      }
    })
  }
  fetchMouth() {
    const url = `${HOST}/steps/month`; 
    const params = Object.assign({},PARAM)
    request(url, params).then(res => {
      if (res.Code == 0) {
        this.setState({monthList: this.initRankData(res.List)})
      }
    })
  }
  render() {
    const {yestdayList, dayList, weekList, monthList } = this.state;
    return (
      <div className="sr-containter">
        <div className="sr-containter-left">
          <Title title="昨日排名" />
          <Cup dataSource={yestdayList} />
        </div>
        <div className="sr-containter-right">
           <Title title="教师日排名" />
           <List dataSource={dayList}  />
        </div>
        <div className="sr-containter-right">
           <Title title="教师周排名" />
           <List dataSource={weekList}  />
        </div>
        <div className="sr-containter-right">
           <Title title="教师月排名" />
           <List dataSource={monthList}  />
        </div>
      </div>
    );
  }
}

export default AppComponent;
