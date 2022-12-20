import React from 'react';
import { Button, Input, Tree } from 'element-react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import './aside.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

const LIST_COUNTRIES = gql`
  {
    continents {
      code
      name
      countries {
        code
        name
      }
    }
  }
`;

        // {
        //   code: 'AF',
        //   name: 'Africa',
        //   countries: [{
        //     code: 'AO',
        //     name: 'Angola',
        //   }]
        // },
        // {
        //   code: 'AF',
        //   name: 'Africa',
        //   countries: [{
        //     code: 'AO',
        //     name: 'Angola',
        //   }]
        // }

class Aside extends React.Component<{isAsideOpen: boolean}, AsideState> {
  tree: any;
  constructor(props: {isAsideOpen: boolean}) {
    super(props);
    this.state = {
      data: [
        {
          code: 'AF',
          name: 'Africa',
          countries: [{
            code: 'AO',
            name: 'Angola',
          }]
        },
        {
          code: 'AF',
          name: 'Africa',
          countries: [{
            code: 'AO',
            name: 'Angola',
          }]
        }
      ],
      options: {
        children: 'countries',
        label: 'name'
      },
      searchValue: undefined,
      countryName: [],
    }
  }

  loadData = async () => {
    const { data } = await client.query({
      query: LIST_COUNTRIES,
    });

    this.setState(() => {
      return { data: JSON.parse(JSON.stringify(data.continents)) } 
    })
  };

  getCheckedNodes(value: string) {
    this.setState((state) => {
      return { countryName: [value, ...state.countryName] } 
    })
  }

  updateSearchValue(newValue: React.SyntheticEvent<HTMLInputElement, Event> | undefined) {
    this.setState((state) => {
      return {...state, searchValue: newValue}
    })
  }

  componentDidMount(): void {
    this.loadData();
  }
  
  render(): JSX.Element {
    const { data, options } = this.state
  
    return (
      <div className='aside' style={{display: this.props.isAsideOpen ? 'block' : 'none'}}>
        <div className='search-bar'>
          <Input placeholder="Filter by name" onChange={text => this.updateSearchValue(text)} />
          <Button type="primary" icon="search" onClick={() => this.tree.filter(this.state.searchValue)}></Button>
        </div>
        <Tree
          ref={e => this.tree = e}
          className="filter-tree"
          data={data}
          options={options}
          // nodeKey="id"
          // defaultExpandAll={true}
          highlightCurrent={true}
          filterNodeMethod={(value, data) => {
            if (!value)
              return true;
            return data.name.indexOf(value) !== -1;
          } }
          onNodeClicked={(el) => this.getCheckedNodes(el.name)} />
      </div>
  
    )
  }
}

export default Aside;
