import React, { Component } from 'react';
class Cup extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { dataSource } = this.props;
    return (
      <div className="cup-box">
        <div className="top">
          <div className="cup cup-gold">
          {
            dataSource[0] && 
             <div className="frist">
              <span>{dataSource[0].name}</span>
              <span>{dataSource[0].step}步</span>
            </div>
          }
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-left">
            <div className="cup cup-silver">
            {
              dataSource[1] && 
              <div>
                <span>{dataSource[1].name}</span>
                <span>{dataSource[1].step}步</span>
              </div> 
            }              
            </div>
          </div>
          <div className="bottom-right">
            <div className="cup cup-copper">
            {
              dataSource[2] &&
              <div>
                <span>{dataSource[2].name}</span>
                <span>{dataSource[2].step}步</span>
              </div>
            }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Cup;