import { Button, Input, Tree } from 'element-react';
import React from 'react';

import './aside.css';

type AsideState = {
  data: DataElem[],
  options: {
    children: string,
    label: string,
  },
  searchValue: React.SyntheticEvent<HTMLInputElement, Event> | undefined,
  countryName: string;
}
type DataElem = {
  id: number;
  label: string;
  children: DataChildren[];
}
type DataChildren = {
  id: number;
  label: string;
};

//когда буду получать страны от апишки поменять типы в соответствии с ответом апи
//в дереве заменить nodeKey="id" на название страны?
class Aside extends React.Component<{isAsideOpen: boolean}, AsideState> {
  tree: any;
  constructor(props: {isAsideOpen: boolean}) {
    super(props);
    this.state = {
      data: [{
        id: 1,
        label: 'level one 1',
        children: [{
          id: 4,
          label: 'level two 1-1',
        }]
      }, {
        id: 2,
        label: 'level one 2',
        children: [{
          id: 5,
          label: 'level two 2-1'
        }, {
          id: 6,
          label: 'level two 2-2'
        }]
      }, {
        id: 3,
        label: 'level one 3',
        children: [{
          id: 7,
          label: 'level two 3-1'
        }, {
          id: 8,
          label: 'level two 3-2'
        }]
      }],
      options: {
        children: 'children',
        label: 'label'
      },
      searchValue: undefined,
      countryName: '',
    }
  }

  getCheckedNodes(value: string) {
    console.log(value);
    this.setState((state) => {
      return {...state, countryName: value} 
    })
  }

  updateSearchValue(newValue: React.SyntheticEvent<HTMLInputElement, Event> | undefined) {
    this.setState((state) => {
      return {...state, searchValue: newValue}
    })
  }
  
  render(): JSX.Element {
    const { data, options } = this.state
  
    return (
      <div className='aside' style={{display: this.props.isAsideOpen ? 'block' : 'none'}}>
        <div className='search-bar'>
          <Input placeholder="filter" onChange={text => this.updateSearchValue(text)} />
          <Button type="primary" icon="search" onClick={() => this.tree.filter(this.state.searchValue)}></Button>
        </div>
        <Tree
          ref={e=> this.tree = e}
          className="filter-tree"
          data={data}
          options={options}
          nodeKey="id"
          // defaultExpandAll={true}
          highlightCurrent={true}
          filterNodeMethod={(value, data)=>{
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
          }}
          onNodeClicked={(el)=>this.getCheckedNodes(el.label)}
        />
      </div>
  
    )
  }
}

export default Aside;
