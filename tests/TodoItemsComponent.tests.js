import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import TodoItemsComponent from '../components/TodoItemsComponent'

describe('<TodoItemsComponent /> Component', function() {
  it('has UL tag', function() {
    expect(shallow(<TodoItemsComponent />).contains(<ul className='list-group' />)).to.equal(true)
  })

  it('has form field', function() {
    expect(mount(<TodoItemsComponent />).find('.form-control').length).to.equal(1)
  })
})
