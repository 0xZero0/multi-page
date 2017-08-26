require('normalize.css/normalize.css');
import  React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, Row, Col, Select, Button } from 'antd';

import 'styles/containers/select/styles.scss';
class App extends Component {
  render() {
    return (
      <div className="check-container">
        <div className="head">
          <DatePicker
            className="date-box"
           />
           <Row className="select-item">
             <Col className="item-title" span={8}>教学班：</Col>
             <Col span={16}>
               <Select defaultValue="1"  style={{ width: '100%' }}>
                 <Select.Option key="1">一班</Select.Option>
                 <Select.Option key="2">二班</Select.Option>
                 <Select.Option key="3">三班</Select.Option>
                 <Select.Option key="4">四班</Select.Option>
               </Select>
             </Col>
           </Row>
          <Row className="select-item">
            <Col className="item-title" span={8}>节次：</Col>
            <Col span={16}>
              <Select defaultValue="1"  style={{ width: '100%' }}>
                <Select.Option key="1">第一节</Select.Option>
                <Select.Option key="2">第二节</Select.Option>
                <Select.Option key="3">第三节</Select.Option>
                <Select.Option key="4">第四节</Select.Option>
              </Select>
            </Col>
          </Row>
        </div>
        <div className="content">
          <div className="student green">
            <span className="name">小明</span>
            <span className="status"></span>
          </div>
          <div className="student green">
            <span className="name">小明</span>
            <span className="status"></span>
          </div>
          <div className="student red">
            <span className="name">小明</span>
            <span className="status"></span>
          </div>
        </div>
         <div className="footer">
           <Button type="primary">提交</Button>
         </div>
      </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))