import { Button, Input, Tree } from 'element-react';
import React from 'react';

import './aside.css';

type AsideState = {
  data: DataElem[],
  options: {
    children: string,
    label: string,
  }
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

class Aside extends React.Component<{}, AsideState> {
  tree: any;
  constructor(props: {}) {
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
      }
    }
  }
  
  render(): JSX.Element {
    const { data, options } = this.state
  
    return (
      <div className='aside'>
        <div className='search-bar'>
          <Input placeholder="filter" onChange={text => this.tree.filter(text)} />
          <Button type="primary" icon="search"></Button>
        </div>
        <Tree
          ref={e=> this.tree = e}
          className="filter-tree"
          data={data}
          options={options}
          nodeKey="id"
          defaultExpandAll={true}
          filterNodeMethod={(value, data)=>{
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
          }}
        />
      </div>
  
    )
  }
  
  // return <aside className='asidde'>
  //   <Input placeholder='Filter by name' onBlur={(e) => setSearchValue(e!.target.value)}/>
  //   <Button type="primary" icon="search"></Button>
  //   <Tree
  //     className="filter-tree"
  //     data={state.data}
  //     options={state.options}
  //     nodeKey="id"
  //     defaultExpandAll={true}
  //     filterNodeMethod={(value, data)=>{
  //       if (!value) return true;
  //       return data.label.indexOf(value) !== -1;
  //     }}
  //   />
  // </aside>
}

export default Aside;
