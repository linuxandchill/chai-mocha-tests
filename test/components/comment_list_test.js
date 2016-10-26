import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list'; 

describe('CommentList', ()=>{
  let component;

  beforeEach(()=>{
    const props =  { comments: ['First', 'Second'] }; 
    component = renderComponent(CommentList, null, props); 
  });

  it('shows comment in a <li> tag', ()=>{
    expect(component.find('li').length).to.equal(2);   
  });

  it('shows each comment', ()=>{
    expect(component).to.contain('First');
    expect(component).to.contain('Second');
  
  });
});
