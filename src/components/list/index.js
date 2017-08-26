import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './styles.scss';
class List extends Component {
  constructor(props) {
    super(props)
  }
  setRank = (rank) => {
    switch(rank) {
      case 1:
      return (<i role='gold' />);
      case 2:
      return (<i role='silver' />);
      case 3:
      return (<i role='copper' />);
      default:
      return <span className="rank">{rank}</span>;
    }
  }
  // renderList = () => {
  //   const { dataSource } = this.props;
  //   if (Array.isArray(dataSource) && dataSource.length > 0) {
  //     return dataSource.map((d,i) => (
  //       <li className="sr-list-item" key={i}>
  //         <div>{d.name}</div>
  //         <div>{d.step}步</div>
  //         <div>{this.setRank(d.rank)}</div>
  //       </li>
  //     ))
  //   }
  //   return null;
  // }
  renderList = () => {
    const { dataSource } = this.props;
    if (Array.isArray(dataSource) && dataSource.length > 0) {
      return dataSource.map((d,i) => (
        <li className="sr-list-item" key={i}>
          <Row>
            <Col span={7}>{d.name}</Col>
            <Col span={10}>{d.step}步</Col>
            <Col span={7}>{this.setRank(d.rank)}</Col>
          </Row>
        </li>
      ))
    }
    return null;
  }
  render() {
    return (
      <div className="sr-list">
        <ul>
          <li className="sr-list-item" key={-1}>
            <Col span={7}>姓名</Col>
            <Col span={10}>步数</Col>
            <Col span={7}>排名</Col>
          </li>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

export default List;