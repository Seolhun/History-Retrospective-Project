---
title: '[React/Javascript] React HoC Pattern 익혀보기'
type: 'post'
author: 'Seolhun'
date: '2099-12-31'
weight: 1
categories: ['React', 'Javascript']
categories_weight: 10
tags: ['React', 'Javascript', 'HoC']
tags_weight: 10
---
React HoC Pattern에 대해 익혀보고자 이 글을 작성합니다.


## Intro

## Contents
```jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectItems from '../../actions/_example';

class DataButtonList extends Component {
  static propTypes = {
    selectItems: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
  }

  componentDidMount() {
    this.props.selectItems();
  }

  render() {
    return (
      <section>
        {console.log('########################', this.props)}
        {this.props.items.length > 0 ? this.props.items.map(item => <button className='btn btn-action' key={item.id}>{item.id}</button>) : null}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ selectItems }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataButtonList);

```

## Outro

## References
- []()
